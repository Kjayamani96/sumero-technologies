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

## HealthOS website review — 4 November 2026

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
