import Link from "next/link";
import { MarketingShell } from "./MarketingShell";
import { HealthOSShowcase } from "./HealthOSShowcase";
import { GUIDE_HUBS, GUIDE_PATHS, type GuideId } from "@/lib/guide-paths";
import { guideContent } from "@/lib/guide-content";
import {
  CLINIC_PAGES,
  CONTACT_PAGES,
  SITE_URL,
  jsonLd,
  type SiteLocale,
} from "@/lib/seo";
import { PRICING, formatRm } from "@/lib/pricing";

const ids = Object.keys(GUIDE_PATHS) as GuideId[];
const labels = {
  en: {
    hub: "Guides for Malaysian clinics",
    intro:
      "Practical HealthOS buying and implementation guides: understand costs, plan migration and explore a fictional patient visit before booking a demonstration.",
    eyebrow: "SUMERO product guides",
    byline: "Published by SUMERO Technologies · Reviewed 4 November 2026",
    disclosure:
      "These guides describe SUMERO HealthOS and its published terms. They are not independent reviews of the clinic software market.",
    read: "Read guide",
    related: "Continue exploring",
    demo: "Discuss your clinic requirements",
    home: "Home",
    plans: "Compare full plans",
    contact: "Book a demo",
    costs: "HealthOS first-year subscription and onboarding",
    costNote:
      "One clinic, twelve months. Excludes migration, equipment, optional services and SST if applicable. Onboarding is charged once. Group clinics receive a scoped quotation.",
    plan: "Plan",
    monthly: "12 monthly payments + onboarding",
    annual: "Annual subscription + onboarding",
    nextYear: "Annual renewal subscription, before optional services",
    preview: "Fictional workflow example",
    resources: "Clinic guides",
    back: "All clinic guides",
    evaluate: "Choose clinic software in Malaysia",
  },
  ms: {
    hub: "Panduan untuk klinik di Malaysia",
    intro:
      "Panduan pembelian dan pelaksanaan HealthOS: fahami kos, rancang migrasi dan terokai lawatan pesakit rekaan sebelum menempah demonstrasi.",
    eyebrow: "Panduan produk SUMERO",
    byline: "Diterbitkan oleh SUMERO Technologies · Disemak 4 November 2026",
    disclosure:
      "Panduan ini menerangkan SUMERO HealthOS serta terma yang diterbitkan. Ia bukan ulasan bebas pasaran perisian klinik.",
    read: "Baca panduan",
    related: "Terokai seterusnya",
    demo: "Bincangkan keperluan klinik anda",
    home: "Utama",
    plans: "Bandingkan pelan penuh (English)",
    contact: "Tempah demo",
    costs: "Langganan dan persediaan HealthOS pada tahun pertama",
    costNote:
      "Satu klinik, dua belas bulan. Tidak termasuk migrasi, peralatan, perkhidmatan pilihan dan SST jika berkenaan. Persediaan dicaj sekali sahaja. Kumpulan klinik menerima sebut harga mengikut skop.",
    plan: "Pelan",
    monthly: "12 bayaran bulanan + persediaan",
    annual: "Langganan tahunan + persediaan",
    nextYear: "Pembaharuan langganan tahunan, sebelum perkhidmatan pilihan",
    preview: "Contoh aliran kerja rekaan",
    resources: "Panduan klinik",
    back: "Semua panduan klinik",
    evaluate: "Pilih sistem pengurusan klinik di Malaysia",
  },
};

export function GuideCards({
  locale,
  exclude,
}: {
  locale: SiteLocale;
  exclude?: GuideId;
}) {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {ids
        .filter((id) => id !== exclude)
        .map((id) => (
          <article
            key={id}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h3 className="text-xl font-semibold leading-8">
              <Link
                className="hover:text-blue-700"
                href={GUIDE_PATHS[id][locale]}
              >
                {guideContent[locale][id].title}
              </Link>
            </h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
              {guideContent[locale][id].description}
            </p>
            <Link
              className="mt-5 font-semibold text-blue-700 underline underline-offset-4"
              href={GUIDE_PATHS[id][locale]}
            >
              {labels[locale].read} →
            </Link>
          </article>
        ))}
    </div>
  );
}

export function GuideIndex({ locale }: { locale: SiteLocale }) {
  const c = labels[locale];
  const url = SITE_URL + GUIDE_HUBS[locale];
  return (
    <MarketingShell locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${url}#page`,
            url,
            name: c.hub,
            description: c.intro,
            inLanguage: locale === "ms" ? "ms-MY" : "en-MY",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            publisher: { "@id": `${SITE_URL}/#organization` },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: ids.map((id, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: guideContent[locale][id].title,
                url: SITE_URL + GUIDE_PATHS[id][locale],
              })),
            },
          }),
        }}
      />
      <section className="health-hero border-b border-slate-200">
        <div className="site-section !py-12 sm:!py-16">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {c.hub}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {c.intro}
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500">
            {c.disclosure}
          </p>
        </div>
      </section>
      <section className="site-section">
        <h2 className="section-title">{c.resources}</h2>
        <GuideCards locale={locale} />
        <Link className="secondary-cta mt-8" href={CLINIC_PAGES[locale]}>
          {c.evaluate}
        </Link>
      </section>
    </MarketingShell>
  );
}

export function ClinicGuide({
  locale,
  id,
}: {
  locale: SiteLocale;
  id: GuideId;
}) {
  const c = labels[locale];
  const guide = guideContent[locale][id];
  const url = SITE_URL + GUIDE_PATHS[id][locale];
  const kind = ["registration", "compact-emr", "dispensary"];
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.title,
        description: guide.description,
        url,
        mainEntityOfPage: { "@id": `${url}#page` },
        inLanguage: locale === "ms" ? "ms-MY" : "en-MY",
        author: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "SUMERO Technologies",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        datePublished: "2026-11-04",
        dateModified: "2026-11-04",
        about: { "@id": `${SITE_URL}/products/sumero-healthos#software` },
        articleBody: [
          guide.answer,
          ...guide.sections.flatMap((s) => [
            s.heading,
            ...s.paragraphs,
            ...(s.checklist || []),
          ]),
        ].join("\n\n"),
      },
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: guide.title,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${url}#article` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: locale === "ms" ? "ms-MY" : "en-MY",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.home, item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: c.hub,
            item: SITE_URL + GUIDE_HUBS[locale],
          },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };
  return (
    <MarketingShell locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(graph) }}
      />
      <article>
        <header className="health-hero border-b border-slate-200">
          <div className="site-section !py-12 sm:!py-16">
            <nav
              className="mb-7 text-sm text-slate-600"
              aria-label={locale === "ms" ? "Jejak navigasi" : "Breadcrumb"}
            >
              <Link className="underline" href={GUIDE_HUBS[locale]}>
                {c.back}
              </Link>
            </nav>
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-5 text-sm text-slate-500">{c.byline}</p>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-700">
              {guide.answer}
            </p>
          </div>
        </header>
        <div className="site-section !py-10 sm:!py-12">
          <nav
            aria-label={locale === "ms" ? "Dalam panduan ini" : "In this guide"}
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
          >
            {guide.sections.map((s, index) => (
              <a
                className="font-medium text-blue-700 underline underline-offset-4"
                key={s.heading}
                href={`#step-${index + 1}`}
              >
                {s.heading}
              </a>
            ))}
          </nav>
        </div>
        {guide.sections.map((s, index) => (
          <section
            key={s.heading}
            id={`step-${index + 1}`}
            className="border-t border-slate-200"
          >
            <div className="site-section !py-12">
              <h2 className="section-title !mt-0">{s.heading}</h2>
              <div className="mt-5 max-w-4xl space-y-4 leading-8 text-slate-600">
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {s.checklist && (
                <ul className="mt-6 max-w-4xl list-disc space-y-2 pl-6 leading-7 text-slate-600">
                  {s.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {id === "costs" && index === 0 && (
                <>
                  <div
                    className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 focus-visible:outline-2 focus-visible:outline-blue-700"
                    role="region"
                    aria-label={c.costs}
                    tabIndex={0}
                  >
                    <table className="w-full min-w-[680px] text-left text-sm">
                      <caption className="p-4 text-left font-semibold">
                        {c.costs}
                      </caption>
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="p-4" scope="col">
                            {c.plan}
                          </th>
                          <th className="p-4" scope="col">
                            {c.monthly}
                          </th>
                          <th className="p-4" scope="col">
                            {c.annual}
                          </th>
                          <th className="p-4" scope="col">
                            {c.nextYear}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {(["essential", "professional"] as const).map(
                          (plan) => (
                            <tr key={plan}>
                              <th scope="row" className="p-4">
                                {PRICING[plan].name}
                              </th>
                              <td className="p-4">
                                {formatRm(
                                  PRICING[plan].monthly * 12 +
                                    PRICING.onboarding[plan],
                                )}
                              </td>
                              <td className="p-4">
                                {formatRm(
                                  PRICING[plan].annual +
                                    PRICING.onboarding[plan],
                                )}
                              </td>
                              <td className="p-4">
                                {formatRm(PRICING[plan].annual)}
                              </td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-500">
                    {c.costNote}
                  </p>
                  <Link
                    className="mt-4 inline-block font-semibold text-blue-700 underline"
                    href="/pricing"
                    hrefLang="en-MY"
                  >
                    {c.plans}
                  </Link>
                </>
              )}
              {id === "walkthrough" && index < 3 && (
                <div className="mt-8">
                  <HealthOSShowcase
                    kind={kind[index]}
                    title={`${c.preview}: ${s.heading}`}
                  />
                </div>
              )}
            </div>
          </section>
        ))}
        <footer className="site-section !py-8">
          <p className="max-w-4xl text-sm leading-7 text-slate-500">
            {c.disclosure}
          </p>
        </footer>
      </article>
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="site-section">
          <h2 className="section-title">{c.related}</h2>
          <GuideCards locale={locale} exclude={id} />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="primary-cta" href={CONTACT_PAGES[locale]}>
              {c.contact}
            </Link>
            <Link className="secondary-cta" href={CLINIC_PAGES[locale]}>
              {c.evaluate}
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
