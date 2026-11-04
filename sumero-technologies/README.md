This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Preview theme controls and consultation form — 4 November 2026

Owner approved pushing these refinements to `main` and deploying to production. The preview-only notes below describe the earlier review stages.

Each product demonstration now has its own moon/sun button for day/night appearance, including registration, consultation, dispensing, print examples and Clinic Insights. Switching theme preserves that preview’s selected stage, patient and edited notes; it does not affect the website theme or clinic settings. Seven per-preview controls were verified in Chrome.

The consultation example is a populated, editable fictional form with vitals, presenting concern, examination, assessment/diagnosis and care plan. “Save demo note” only confirms the local demonstration; it does not send or persist clinic data. Theme switching preserves edits; reloading resets them. Clinic Insights now uses a theme-aware demonstration instead of a static SVG.

## Populated fictional demonstrations — 4 November 2026

Registration, Compact EMR, dispensary, dark-mode dispensary and print examples now use website-only demonstrations populated with fictional data. These replace the empty captures in the displayed website; older assets are retained but are not displayed. The demos are labelled illustrative and do not write to the clinic application.

Dispensary fixtures contain three To Dispense patients, two Awaiting Payment patients and three Completed Today patients. Stage buttons and patient cards update the local preview details and amounts. Checkout/printing actions are display-only. Registration includes fictional identity/contact status and visit details; consultation includes fictional notes and a recorded assessment; print previews include example medicine, itemisation and matching totals. No live patient data was used or created.

Chrome verified stage switching and patient selection, including RM38.00 = RM30.00 consultation + RM8.00 medicine. Final production build, TypeScript and site checks pass. Changes remain in the local preview for review.

## Latest refinement review — 4 November 2026

- Homepage content is immediately visible with no entrance-animation classes, reduced top padding and top alignment. Chrome measured the desktop headline at 192px from the viewport top, with opacity 1 and no animation.
- MyKad copy now says “compatible MyKad reader connected to a Windows computer”.
- Pricing has a semantic feature comparison with existing entitlements, plus one concise setup section. Prices and commercial constants are unchanged. At 390px the page remains 390px wide; the 560px table scrolls inside its 356px keyboard-focusable region.
- With the owner’s explicit browser authorisation, captured the current registration form and empty dispensary in light/dark modes from the signed-in HealthOS UI. Captures in `public/marketing/current/` exclude patient records, clinic-specific status and staff account details. The registration form was not saved; a fictional draft was discarded. Original light appearance was restored. No clinic application source or records were modified.
- Compact EMR, printing and Insights retain clearly labelled fictional illustrations. Populated current captures for these require a verified fictional demo dataset; live patient records were not used.
- A single authorised live test enquiry returned HTTP 200 and was found in the connected Gmail INBOX, subject “HealthOS demo / trial enquiry”, marker `SUMERO-WEBSITE-QA-20261104-REFINEMENT`. This verifies inbox receipt, not only provider submission. Production sender and recipient configuration were restored in the preceding deployment.
- Refinements are prepared in the local preview for review. The historical notes below describe the initial handover and its then-outstanding setup.

## Initial HealthOS website review — 4 November 2026

Local preview: http://localhost:3000 (start with `npm run dev -- --port 3000`).
Initially prepared as a local preview for review. The owner subsequently requested pushing the website update to `main`.
Only this company website was edited. The clinic application was not accessed or changed.

### Changed pages

- `/`: HealthOS positioning, four-stage journey, selected benefits and fictional interface illustrations; company sections retained.
- `/products/sumero-healthos`: registration → consultation → dispensing/payment → follow-up/insights; six illustrative views, progressive feature details, FAQs, access controls and conditional availability.
- `/products`: updated flagship summary.
- `/pricing`: existing prices, account limits, plan entitlements and onboarding terms preserved; corrected MyKad/lab/messaging descriptions, clarified setup dependencies and flagged newer feature allocation.
- `/contact`: shorter demo/trial form with email OR phone, branch count, main requirement and enquiry-only consent; validation, loading, persistent success and failure states.
- `/security`: roles, audit history, masking, authorised archive/restore and owner-only permanent deletion.
- `/privacy` and `/data-deletion`: aligned enquiry fields and patient deletion descriptions.
- Shared navigation, metadata/social descriptions, product/FAQ JSON-LD and pricing JSON-LD consistency reviewed. Existing brand assets retained.

### Owner confirmation before publication

1. Confirm Essential/Professional/Group allocations and any setup charges for layout choices, MyKad import, follow-up worklists, communication/campaigns, feedback, Clinic Insights, occupational health and lab-result/referral tracking. No new allocations were invented.
2. Confirm whether the existing founding-clinic offer is still open: five-clinic cap, 45-day guided pilot, RM199/month for the first 12 paid months and RM390 onboarding (standard Professional RM890). Terms remain visible for reference, explicitly subject to confirmation. No remaining-place count, card requirement or free-trial promise was added.
3. Confirm trial arrangements; the website invites an enquiry without promising a duration or discount.
4. Confirm compatible reader models, Windows bridge installation scope and charges; messaging connection, campaign consent and activation scope; clinic-specific e-Invoice assessment and activation; group-clinic rollout scope.
5. Review the six code-generated, fictional interface illustrations for product fidelity. They are labelled illustrative, open at full size and contain no source patient data. Older unverified screenshots remain unused.
6. Review the preview before authorising publication.

### Contact delivery setup

The existing email SDK is retained. Local `RESEND_API_KEY` is present, but `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` are missing. The endpoint therefore returns HTTP 503 with a clear support-email fallback; it never reports false success. Set a verified sender and approved recipient in deployment configuration, with the API key server-side. Example variable names are also in `.env.example` (ignored by the existing `.env*` rule).

Success means the email service accepted the submission, not confirmed inbox delivery. No live email was sent in verification. A controlled inbox test remains necessary after configuration; then check loading, submitted confirmation and actual receipt at the approved destination.

### Verification

- Production build and TypeScript checks passed.
- `node scripts/check-contact.cjs`: 19 offline validation/configuration/mocked-delivery checks pass; no email sent. Covers malformed JSON, missing/invalid contact, consent, branch validation, length limits, missing configuration, email-only and phone-only submissions, SDK rejection and thrown errors.
- `node scripts/check-website.mjs`: checks eight content pages, internal links/assets/anchors, headings, metadata, JSON-LD validity, old screenshot references and infrastructure-name copy. Read-only; run against local preview.
- All 12 checked routes (including sitemap, robots, legal and login pages) returned HTTP 200.
- Chrome desktop and 390×844 mobile: inspected homepage, product page, pricing and contact. Homepage/product/pricing had no horizontal overflow; product images loaded. Mobile menu navigation, annual pricing toggle and Enter-operated feature disclosure passed. Missing-contact validation and missing-config form error were confirmed in the browser; loading was observed during submission.
- Reviewed focus styles, native labels and disclosure controls, and text/background contrast. This is not a comprehensive automated accessibility audit.
- Chrome's Grammarly extension injected body attributes and caused a development hydration warning; the reported difference was extension attributes. No suppression was added to application code.
- Safari automation could not open Safari (connection timeout). Safari and real-device checks remain outstanding.

Regenerate illustrations with `python3 scripts/create-marketing-illustrations.py`.

## Bilingual SEO update — 4 November 2026

Reviewed in the local preview. The owner authorised pushing the SEO and Bahasa Malaysia pages to `main` and deploying to production.

- English clinic buying page: `/clinic-management-system-malaysia`.
- Bahasa Malaysia equivalent: `/ms/sistem-pengurusan-klinik`.
- Bahasa Malaysia enquiry form: `/ms/hubungi`, paired with `/contact`.
- Added workflows, accurate plan summaries and prices, migration, MyKad/WhatsApp/e-Invoice setup boundaries, access controls and six visible FAQs in both languages. Shared price constants power the displayed prices and pricing answers.
- Added visible language switches, navigation/footer/homepage links, self-canonical URLs, reciprocal `en-MY`/`ms-MY`/`x-default` alternates, page-specific search/social metadata and a 1200×630 social card at `/social/healthos.png`.
- Added Organization/WebSite, WebPage, SoftwareApplication/Offer, BreadcrumbList and FAQ structured data tied to visible content, without ratings, certifications or invented business addresses.
- English pages moved internally into the `(site)` route group. Their public URLs are unchanged. Shared root-document rendering with separate English/Malay layouts produces correct server HTML language values while retaining static generation; no language-detection redirects or request middleware was added.
- `robots.txt` explicitly allows OAI-SearchBot and retains general crawling. `/api/` is excluded. Login remains `noindex,follow` and is omitted from the sitemap. No API secrets or patient application routes are exposed. The existing GPTBot/training policy is unchanged.
- Sitemap includes indexable pages and language alternatives, with no manufactured last-modified timestamps. This makes discovery possible; it does not prove production firewall allowlisting or search-engine indexing.
- Chrome desktop/mobile checks cover language switching, the translated enquiry route, Malay client-side validation and page width. Offline contact checks send no email. Review warning from Grammarly’s injected browser attributes is unchanged.

### Checks

`npm run build`

`node scripts/check-seo.mjs` — rendered metadata, canonical URLs, 12 document languages and titles, both language pairs, FAQ JSON parsing, crawler-agent HTTP responses, sitemap, noindex login and social image dimensions.

`node scripts/check-website.mjs` — pages, links, assets, anchor targets and structured-data parsing.

`node scripts/check-contact.cjs` — 24 offline API validation/configuration/mocked-delivery checks.

### Owner account steps after publication

1. In Google Search Console, use the verified `sumerotech.com` property, or verify the domain through the owner’s DNS account. If using URL-prefix HTML-tag verification instead, `GOOGLE_SITE_VERIFICATION` can be set to the supplied verification token before deployment. This optional token is a public verification identifier, not an API credential. No token was invented or configured.
2. Submit `https://sumerotech.com/sitemap.xml` and inspect the two clinic landing URLs and the two enquiry URLs. Request indexing where appropriate. This work has not submitted URLs to Search Console or established that an account is already verified.
3. Review crawl/indexing reports and actual query performance over time. Verify OAI-SearchBot access through hosting/firewall settings if blocking occurs. Crawler access and structured data do not guarantee rankings, citation or rich results.

References used: https://developers.google.com/search/docs/specialty/international/localized-versions and https://developers.openai.com/api/docs/bots.

## Search discovery improvements — 4 November 2026

The English and Bahasa Malaysia clinic guides now contain server-rendered product facts, semantic Essential/Professional comparisons, annual subscription-plus-onboarding totals, a buyer checklist, populated fictional consultation/dispensing previews, and nine visible questions with matching FAQ data. Pricing still comes from the existing commercial constants. The product page and both language guides share the same SoftwareApplication entity ID, publisher, monthly offers and billing period. Homepage copy identifies the product and Malaysian audience directly.

Crawler access and structured data make content easier to discover and interpret; they do not prove indexing, recommendation, ranking, or ChatGPT citation. No ratings, endorsements, customer counts, certifications or clinical claims were added. The fictional demonstrations do not access patient records. No training-policy change was made.

### Notify participating search engines after deployment

`node scripts/submit-indexnow.mjs` performs a dry run from the live sitemap.

`node scripts/submit-indexnow.mjs --submit` verifies the live root verification file and sends the public sitemap URLs to IndexNow once. It is never called during builds or by a public API route. The key is a public domain-verification file, not a private application credential. A 200 response means URLs were received; 202 means receipt with key validation pending. Neither confirms indexing. The protocol shares notifications with participating search engines; this is not a Google indexing request or a direct ChatGPT submission.

### Search Console status checked in the owner account

The domain property is accessible and the sitemap was resubmitted successfully on 4 November 2026. URL Inspection showed Home, Security, Privacy and Data deletion indexed. Products, HealthOS, Pricing, Terms, both clinic guides and both contact pages were not indexed. Manual requests failed with a reCAPTCHA connection message, followed by a daily quota limit. Retry after Google permits requests again; do not repeatedly submit while quota-limited. The previous owner-account setup list above is historical and does not describe the current verified property.

Two unpersonalized temporary ChatGPT web-search tests for “clinic software Malaysia” and “sistem pengurusan klinik Malaysia” did not mention or cite SUMERO before this refinement. Re-test after discovery has had time to update, without including SUMERO in the prompt. Record answers and citations; do not present one result as universal ranking evidence.

Validation: `npm run build`, `PREVIEW_URL=http://localhost:3001 node scripts/check-seo.mjs`, `PREVIEW_URL=http://localhost:3001 node scripts/check-website.mjs`. Chrome checks include independent preview themes, reciprocal language navigation, and a 390px page without horizontal page overflow; wide demos/tables scroll within their own regions.

Sources: https://developers.openai.com/api/docs/bots and https://www.indexnow.org/documentation.

## Bilingual clinic resource guides — 4 November 2026

Added English `/guides` and Bahasa Malaysia `/ms/panduan` resource hubs, with paired static guides for HealthOS costs, migration/MyKad setup and a fictional patient-visit walkthrough. They have self-canonical URLs, reciprocal language alternatives, visible review dates and SUMERO attribution, matching Article/WebPage/Breadcrumb structured data, related links and sitemap entries. Navigation language switches preserve the corresponding guide. The hubs use CollectionPage and ItemList data.

The cost guide calculates 12 monthly payments plus onboarding and annual subscription plus onboarding from the shared price constants; migration, optional services, equipment and applicable taxes remain separate. Migration guidance distinguishes catalogue/demographic imports from complex history and requires agreed scope. The interactive walkthrough is a website-only fictional example; no clinic application records are changed. No customer testimonials or case studies were added: the owner confirmed that approved customer evidence is not yet available.

The sitemap now includes 20 public pages. `scripts/check-seo.mjs` checks every guide's article body against visible HTML, attribution, reciprocal counterparts, first-year arithmetic and a 404 for an unknown guide, in addition to existing crawler/metadata checks. `scripts/check-website.mjs` covers 19 content pages and their links. Chrome verified the Malay cost guide at 390px with no page overflow and a locally confirmed consultation note that did not save a clinical record.

Bing Webmaster setup was started using the owner's Google sign-in. Direct HTML-tag verification was prepared, avoiding Google Search Console import access. Publishing the verification tag and granting the account management of the Bing property remain pending explicit browser-action approval; no verification tag is included in this guide release. The sitemap can be submitted in Bing after verification. IndexNow notifications remain a separate discovery mechanism.
