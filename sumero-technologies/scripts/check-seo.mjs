// Read-only validation of rendered SEO and localization contracts. Never submits forms.
import assert from "node:assert/strict";
const origin = process.env.PREVIEW_URL || "http://localhost:3000";
const site = "https://sumerotech.com";
const pairs = [
  ["/clinic-management-system-malaysia", "/ms/sistem-pengurusan-klinik"],
  ["/contact", "/ms/hubungi"],
  ["/guides", "/ms/panduan"],
  [
    "/guides/clinic-software-cost-malaysia",
    "/ms/panduan/kos-sistem-pengurusan-klinik",
  ],
  [
    "/guides/clinic-software-migration-checklist",
    "/ms/panduan/senarai-semak-migrasi-sistem-klinik",
  ],
  [
    "/guides/healthos-clinic-workflow",
    "/ms/panduan/aliran-kerja-klinik-healthos",
  ],
];
const paths = [
  "/",
  "/products",
  "/products/sumero-healthos",
  "/pricing",
  "/security",
  "/privacy",
  "/terms",
  "/data-deletion",
  ...pairs.flat(),
];
const pages = new Map();
const titles = new Set();
for (const path of paths) {
  const response = await fetch(origin + path, {
    headers: { "User-Agent": "Googlebot" },
  });
  assert.equal(response.status, 200, path);
  const html = await response.text();
  pages.set(path, html);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.ok(title, `${path}: title`);
  assert.ok(!titles.has(title), `${path}: duplicate title`);
  titles.add(title);
  assert.ok(
    html.includes(
      `<html lang="${path.startsWith("/ms/") ? "ms-MY" : "en-MY"}"`,
    ),
    `${path}: document language`,
  );
  assert.ok(
    html.includes(`rel="canonical" href="${site}${path === "/" ? "" : path}"`),
    `${path}: self canonical`,
  );
  assert.ok(
    !/<meta name="robots" content="[^"]*noindex/.test(html),
    `${path}: indexable`,
  );
  assert.ok(html.includes('property="og:title"'), `${path}: social title`);
  for (const match of html.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ))
    JSON.parse(match[1]);
}
for (const [en, ms] of pairs)
  for (const path of [en, ms]) {
    const html = pages.get(path);
    for (const [language, target] of [
      ["en-MY", en],
      ["ms-MY", ms],
      ["x-default", en],
    ])
      assert.ok(
        new RegExp(
          `<link[^>]*hrefLang="${language}"[^>]*href="${site}${target}"`,
        ).test(html),
        `${path}: ${language} reciprocal alternate`,
      );
  }
for (const pair of pairs.slice(3)) {
  for (const path of pair) {
    const html = pages.get(path);
    const scripts = [
      ...html.matchAll(
        /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
      ),
    ].map((x) => JSON.parse(x[1]));
    const article = scripts
      .flatMap((x) => x["@graph"] || [x])
      .find((x) => x["@type"] === "Article");
    assert.ok(article, `${path}: attributed article`);
    assert.equal(article.author.name, "SUMERO Technologies");
    assert.equal(article.mainEntityOfPage["@id"], `${site}${path}#page`);
    const content = html.replace(/<script\b[\s\S]*?<\/script>/gi, "");
    const escapeHtml = (value) =>
      value
        .replaceAll("&", "&amp;")
        .replaceAll("'", "&#x27;")
        .replaceAll('"', "&quot;");
    for (const paragraph of article.articleBody.split("\n\n"))
      assert.ok(
        content.includes(escapeHtml(paragraph)),
        `${path}: article text matches visible HTML`,
      );
    assert.ok(content.includes("2026"), `${path}: visible review date`);
    assert.ok(
      content.includes(`href="${pair[path.startsWith("/ms/") ? 0 : 1]}"`),
      `${path}: visible counterpart link`,
    );
  }
}
for (const path of pairs[3]) {
  const html = pages.get(path);
  for (const price of ["RM2,178", "RM1,880", "RM4,478", "RM3,880"])
    assert.ok(html.includes(price), `${path}: correct first-year arithmetic`);
}
const missingGuide = await fetch(origin + "/guides/not-a-real-guide");
assert.equal(
  missingGuide.status,
  404,
  "Unknown guide slug must not become duplicate content",
);
for (const path of pairs[0]) {
  const html = pages.get(path);
  const scripts = [
    ...html.matchAll(
      /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    ),
  ].map((x) => JSON.parse(x[1]));
  const nodes = scripts.flatMap((x) => x["@graph"] || [x]);
  const faq = nodes.find((x) => x["@type"] === "FAQPage");
  assert.equal(faq.mainEntity.length, 9);
  for (const question of faq.mainEntity) {
    assert.ok(
      html.includes(question.name),
      `${path}: FAQ question is visible HTML`,
    );
    assert.ok(
      html.includes(
        question.acceptedAnswer.text
          .replaceAll("&", "&amp;")
          .replaceAll("'", "&#x27;"),
      ),
      `${path}: FAQ answer matches visible HTML`,
    );
  }
  for (const id of ["product-facts", "product-previews", "buying-checklist"])
    assert.ok(
      html.includes(`id="${id}"`),
      `${path}: useful buying content rendered on server`,
    );
  assert.ok(
    html.includes("RM1,880") && html.includes("RM3,880"),
    `${path}: annual subscription plus setup totals`,
  );
  assert.ok(html.includes("<table"), `${path}: semantic plan comparison`);
  const software = nodes.find((x) => x["@type"] === "SoftwareApplication");
  assert.equal(software["@id"], `${site}/products/sumero-healthos#software`);
  assert.deepEqual(
    software.offers.map((x) => x.price),
    [149, 299],
  );
  assert.ok(
    software.offers.every(
      (x) => x.priceSpecification.billingDuration === "P1M",
    ),
  );
  assert.ok(
    html.includes("RM149") && html.includes("RM299"),
    `${path}: public prices`,
  );
  const bot = await fetch(origin + path, {
    headers: { "User-Agent": "OAI-SearchBot" },
  });
  assert.equal(bot.status, 200, `${path}: ChatGPT crawler access`);
}
const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
for (const path of paths)
  assert.ok(
    sitemap.includes(`<loc>${site}${path === "/" ? "" : path}</loc>`),
    `${path}: sitemap entry`,
  );
assert.ok(
  !sitemap.includes("/login"),
  "Do not submit noindex login in sitemap",
);
assert.ok(
  !sitemap.includes("lastmod"),
  "Do not manufacture last-modified dates",
);
assert.equal(
  (sitemap.match(/hreflang="ms-MY"/g) || []).length,
  pairs.length * 2,
  "Sitemap includes every language pair",
);
const login = await (
  await fetch(origin + "/login", { headers: { "User-Agent": "Googlebot" } })
).text();
assert.ok(login.includes("noindex"));
const robots = await (await fetch(origin + "/robots.txt")).text();
assert.ok(robots.includes("User-Agent: OAI-SearchBot"));
assert.ok(robots.includes("Disallow: /api/"));
const social = await fetch(origin + "/social/healthos.png");
assert.equal(social.status, 200);
assert.ok(social.headers.get("content-type").includes("image/png"));
const png = Buffer.from(await social.arrayBuffer());
assert.equal(png.readUInt32BE(16), 1200);
assert.equal(png.readUInt32BE(20), 630);
console.log(
  `${paths.length} pages: unique titles, canonical URLs, SSR language, indexability and JSON-LD pass. Language pairs, crawler access, sitemap, noindex login and 1200×630 social image pass.`,
);
