// Notify participating search engines after deployment. No submission during builds.
// Dry run: node scripts/submit-indexnow.mjs
// Submit:  node scripts/submit-indexnow.mjs --submit
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const site = 'https://sumerotech.com';
const keyFile = 'indexnow-key.txt';
const key = (await readFile(new URL(`../public/${keyFile}`, import.meta.url), 'utf8')).trim();
assert.match(key, /^[a-f0-9]{32}$/);
const sitemapResponse = await fetch(`${site}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200, 'Production sitemap must be available');
const sitemap = await sitemapResponse.text();
const urlList = [...new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]))];
assert.ok(urlList.length > 0 && urlList.length <= 10000);
for (const value of urlList) {
  const url = new URL(value);
  assert.equal(url.origin, site, 'Only company website URLs can be submitted');
  assert.ok(!url.search && !url.hash, 'Only canonical URLs can be submitted');
  assert.ok(!/^\/(?:api|login)(?:\/|$)/.test(url.pathname));
}
console.log(`Prepared ${urlList.length} public URLs from the production sitemap.`);
if (!process.argv.includes('--submit')) {
  console.log('Dry run only. Use --submit after deployment to notify IndexNow.');
  process.exit(0);
}
const keyResponse = await fetch(`${site}/${keyFile}`);
assert.equal(keyResponse.status, 200, 'Deploy the verification file before submission');
assert.equal((await keyResponse.text()).trim(), key, 'Live verification file must match');
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/${keyFile}`, urlList }),
  signal: AbortSignal.timeout(30000),
});
if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow returned HTTP ${response.status}. Stop and inspect; do not repeatedly submit.`);
}
console.log(`IndexNow HTTP ${response.status}: ${response.status === 202 ? 'URLs received; key validation pending' : 'URLs received'}. This does not confirm crawling, indexing or ChatGPT citation.`);
