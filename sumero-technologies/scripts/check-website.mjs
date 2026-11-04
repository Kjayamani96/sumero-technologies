// Run against the local company website; no external messages or app access.
import assert from 'node:assert/strict';
const origin = process.env.PREVIEW_URL || 'http://localhost:3000';
const pages = ['/', '/products', '/products/sumero-healthos', '/pricing', '/contact', '/security', '/privacy', '/data-deletion'];
const links = new Set();
for (const path of pages) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const content = html.replace(/<script\b[\s\S]*?<\/script>/gi, '');
  assert.equal((content.match(/<h1\b/g) || []).length, 1, `${path} needs one H1`);
  assert.ok(/<meta name="description" content="[^"]+"/.test(html), `${path} description`);
  assert.ok(/<meta property="og:title"/.test(html), `${path} social metadata`);
  assert.ok(!/\b(Railway|Meta-approved|approved Meta|Resend|Supabase)\b/.test(content), `${path} infrastructure copy`);
  assert.ok(!/src="\/marketing\/(dashboard-queue|pharmacy-dispense|panel-receivables)\.png/.test(content), `${path} unverified screenshot`);
  for (const match of content.matchAll(/href="(\/[^"?]*)/g)) if (!match[1].startsWith('/_next/')) links.add(match[1]);
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
}
for (const href of links) {
  const url = new URL(href, origin);
  const response = await fetch(url);
  assert.equal(response.status, 200, href);
  if (url.hash) assert.ok((await response.text()).includes(`id="${url.hash.slice(1)}"`), `${href} missing anchor`);
}
console.log(`${pages.length} pages, ${links.size} internal links/assets/anchors, metadata and JSON-LD passed.`);
