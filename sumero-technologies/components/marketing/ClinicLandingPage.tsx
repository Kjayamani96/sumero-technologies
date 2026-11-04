import Image from "next/image";
import Link from "next/link";
import { MarketingShell } from "./MarketingShell";
import { clinicContent } from "@/lib/clinic-content";
import { clinicDiscovery } from "@/lib/clinic-discovery";
import { HealthOSShowcase } from "./HealthOSShowcase";
import { healthOSSchema } from "@/lib/healthos-schema";
import {
  CLINIC_PAGES,
  CONTACT_PAGES,
  SITE_URL,
  jsonLd,
  type SiteLocale,
} from "@/lib/seo";
import { PRICING, formatRm } from "@/lib/pricing";

export function ClinicLandingPage({ locale }: { locale: SiteLocale }) {
  const c = clinicContent[locale];
  const d = clinicDiscovery[locale];
  const faqs = [...d.faqs, ...c.faqs];
  const path = CLINIC_PAGES[locale];
  const url = `${SITE_URL}${path}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: c.title,
        description: c.description,
        inLanguage: locale === "ms" ? "ms-MY" : "en-MY",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/products/sumero-healthos#software` },
        mainEntity: { "@id": `${SITE_URL}/products/sumero-healthos#software` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      healthOSSchema(locale),
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.home, item: SITE_URL },
          { "@type": "ListItem", position: 2, name: c.breadcrumb, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: locale === "ms" ? "ms-MY" : "en-MY",
        mainEntity: faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text },
        })),
      },
    ],
  };
  return (
    <MarketingShell locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(graph) }}
      />
      <section className="health-hero border-b border-slate-200">
        <div className="site-section !py-12 sm:!py-16">
          <nav
            aria-label={locale === "ms" ? "Jejak navigasi" : "Breadcrumb"}
            className="mb-8 text-sm text-slate-600"
          >
            <Link href="/" className="underline">
              {c.home}
            </Link>
            <span aria-hidden="true"> / </span>
            {c.breadcrumb}
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow">{c.eyebrow}</p>
              <Image
                src="/brand/sumero-healthos-horizontal.png"
                width={2172}
                height={724}
                alt="SUMERO HealthOS"
                className="mt-5 h-auto w-64 max-w-full"
                priority
              />
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#0b1026] sm:text-5xl">
                {c.heading}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {c.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={CONTACT_PAGES[locale]} className="primary-cta">
                  {c.demo}
                </Link>
                <Link
                  href={CLINIC_PAGES[locale === "en" ? "ms" : "en"]}
                  hrefLang={locale === "en" ? "ms-MY" : "en-MY"}
                  lang={locale === "en" ? "ms" : "en"}
                  className="font-semibold text-blue-700 underline underline-offset-4"
                >
                  {c.language}
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-900/5 sm:p-8">
              <p className="text-sm font-semibold text-slate-900">
                {c.journey}
              </p>
              <ol className="mt-6 space-y-5">
                {c.stages.map(([title], index) => (
                  <li key={title} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium">{title}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 border-t border-slate-200 pt-5 text-sm text-slate-600">
                Essential · {formatRm(PRICING.essential.monthly)} {c.per}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="site-section" id="product-facts">
        <h2 className="section-title">{d.factsTitle}</h2>
        <p className="mt-5 max-w-4xl leading-8 text-slate-600">{d.factsIntro}</p>
        <dl className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 px-6">
          {d.facts.map(([label, value]) => (
            <div key={label} className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
              <dt className="font-semibold">{label}</dt>
              <dd className="leading-7 text-slate-600">
                {value === "support@sumerotech.com" ? <a className="break-all text-blue-700 underline" href={`mailto:${value}`}>{value}</a> : value}
              </dd>
            </div>
          ))}
        </dl>
        <nav aria-label={d.onPage} className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {d.navigation.map(([label, id]) => <a key={id} className="font-medium text-blue-700 underline underline-offset-4" href={`#${id}`}>{label}</a>)}
        </nav>
      </section>
      <section className="site-section" id="workflow">
        <p className="eyebrow">HealthOS</p>
        <h2 className="section-title">{c.journey}</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
          {c.journeyIntro}
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {c.stages.map(([title, body], index) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <p className="text-sm font-semibold text-blue-700">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
        <Link
          href="/products/sumero-healthos"
          hrefLang="en-MY"
          className="mt-6 inline-block font-semibold text-blue-700 underline"
        >
          {c.more}
        </Link>
      </section>
      <section className="border-y border-slate-200 bg-slate-50" id="product-previews">
        <div className="site-section">
          <h2 className="section-title">{d.previewsTitle}</h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-600">{d.previewsIntro}</p>
          <div className="mt-8 space-y-8">
            <HealthOSShowcase kind="compact-emr" title={d.consultation} />
            <HealthOSShowcase kind="dispensary" title={d.dispensing} />
          </div>
        </div>
      </section>
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="site-section">
          <h2 className="section-title">{c.fitTitle}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            {c.fitIntro}
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {c.extras.map(([title, body]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="site-section" id="pricing">
        <h2 className="section-title">{c.pricingTitle}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {(["essential", "professional"] as const).map((plan) => (
            <article
              key={plan}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <h3 className="text-xl font-semibold">{PRICING[plan].name}</h3>
              <p className="mt-4 text-3xl font-semibold text-blue-700">
                {formatRm(PRICING[plan].monthly)}
                <span className="mt-1 block text-sm font-normal text-slate-600">
                  {c.per}
                </span>
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{c[plan]}</p>
              <dl className="mt-5 space-y-2 border-t border-slate-200 pt-5 text-sm">
                <div className="flex flex-wrap justify-between gap-2">
                  <dt>{c.annual}</dt>
                  <dd className="font-semibold">
                    {formatRm(PRICING[plan].annual)}
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2">
                  <dt>{c.onboarding}</dt>
                  <dd className="font-semibold">
                    {formatRm(PRICING.onboarding[plan])}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-slate-600">{c.priceNote}</p>
        <h3 className="mt-10 text-2xl font-semibold">{d.comparisonTitle}</h3>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 focus-visible:outline-2 focus-visible:outline-blue-700" role="region" aria-label={d.comparisonTitle} tabIndex={0}>
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">{d.comparisonCaption}</caption>
            <thead className="bg-slate-50">
              <tr><th scope="col" className="p-4">{d.columnFeature}</th><th scope="col" className="p-4">Essential</th><th scope="col" className="p-4">Professional</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {d.comparisonRows.map(([feature, essential, professional]) => <tr key={feature}><th scope="row" className="p-4 font-medium">{feature}</th><td className="p-4 text-slate-600">{essential}</td><td className="p-4 text-slate-600">{professional}</td></tr>)}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">{d.comparisonNote}</p>
        <Link
          href="/pricing"
          hrefLang="en-MY"
          className="mt-4 inline-block font-semibold text-blue-700 underline"
        >
          {c.priceLink}
        </Link>
      </section>
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="site-section grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="section-title">{c.migrationTitle}</h2>
            <p className="mt-5 leading-8 text-slate-600">
              {c.migration} {formatRm(PRICING.onboarding.migrationFrom)}.{" "}
              {c.migrationEnd}
            </p>
          </div>
          <div>
            <h2 className="section-title">{c.securityTitle}</h2>
            <p className="mt-5 leading-8 text-slate-600">{c.security}</p>
            <Link
              href="/security"
              hrefLang="en-MY"
              className="mt-4 inline-block font-semibold text-blue-700 underline"
            >
              {c.securityLink}
            </Link>
          </div>
        </div>
      </section>
      <section className="site-section">
        <h2 className="section-title">{c.setupTitle}</h2>
        <p className="mt-5 max-w-4xl leading-8 text-slate-600">{c.setup}</p>
      </section>
      <section className="site-section border-t border-slate-200" id="buying-checklist">
        <h2 className="section-title">{d.checklistTitle}</h2>
        <p className="mt-5 max-w-4xl leading-8 text-slate-600">{d.checklistIntro}</p>
        <ol className="mt-8 grid gap-5 md:grid-cols-2">
          {d.checklist.map(([title, text], index) => <li key={title} className="rounded-2xl border border-slate-200 p-6"><p className="text-sm font-semibold text-blue-700">0{index + 1}</p><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></li>)}
        </ol>
      </section>
      <section className="border-y border-slate-200 bg-slate-50" id="faq">
        <div className="site-section">
          <h2 className="section-title">{c.faqTitle}</h2>
          <div className="mt-8 space-y-4">
            {faqs.map(([q, a]) => (
              <details
                key={q}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-semibold">{q}</summary>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="site-section">
        <div className="rounded-3xl bg-[#0b1026] p-8 text-white sm:p-12">
          <h2 className="text-3xl font-semibold">{c.ctaTitle}</h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-300">{c.cta}</p>
          <Link className="secondary-cta mt-6" href={CONTACT_PAGES[locale]}>
            {c.demo}
          </Link>
        </div>
        <p className="mt-6 text-xs leading-6 text-slate-500">
          {c.updated}
          <br />
          {c.note}
        </p>
      </section>
    </MarketingShell>
  );
}
