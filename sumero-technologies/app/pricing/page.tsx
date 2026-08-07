import type { Metadata } from "next";
import Link from "next/link";
import {
  FoundingClinicCta,
  PricingPlans,
} from "@/components/marketing/PricingPlans";
import { PricingViewTracker } from "@/components/marketing/PricingViewTracker";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PRICING, formatRm } from "@/lib/pricing";

export const metadata: Metadata = {
  title: {
    absolute: "HealthOS Pricing | Clinic Management Software Malaysia | Sumero",
  },
  description:
    "Compare Sumero HealthOS Essential and Professional plans for Malaysian clinics. Transparent monthly pricing, guided onboarding and multi-branch options.",
  openGraph: {
    title: "HealthOS Pricing | Sumero Technologies",
    description:
      "Transparent Essential and Professional plans for Malaysian clinics, with guided onboarding.",
    url: "https://sumerotech.com/pricing",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sumero HealthOS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Sumero HealthOS helps Malaysian clinics manage the complete journey from appointment and queue to consultation, dispensing, payment and owner reporting—from one controlled workspace.",
  offers: [
    {
      "@type": "Offer",
      name: "Essential",
      price: String(PRICING.essential.monthly),
      priceCurrency: "MYR",
      billingDuration: "P1M",
      description: "Monthly subscription per clinic",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: String(PRICING.professional.monthly),
      priceCurrency: "MYR",
      billingDuration: "P1M",
      description: "Monthly subscription per clinic",
    },
  ],
  provider: {
    "@type": "Organization",
    name: "Sumero Technologies",
    url: "https://sumerotech.com",
  },
};

const addOns = [
  {
    service: "Essential guided setup and one remote training",
    price: formatRm(PRICING.onboarding.essential),
  },
  {
    service: "Professional setup, configuration and two remote trainings",
    price: formatRm(PRICING.onboarding.professional),
  },
  {
    service: "Structured patient/catalogue spreadsheet migration",
    price: `From ${formatRm(PRICING.onboarding.migrationFrom)}`,
  },
  {
    service: "Complex legacy migration or on-site rollout",
    price: "Custom quotation",
  },
  {
    service: "On-site training",
    price: `${formatRm(PRICING.onboarding.onsiteDay)}/day, plus travel outside Klang Valley`,
  },
  {
    service: "Priority support/SLA",
    price: `From ${formatRm(PRICING.onboarding.prioritySupportFrom)}/month`,
  },
  {
    service: "Custom reports and integrations",
    price: "Scoped quotation",
  },
] as const;

export default function PricingPage() {
  return (
    <MarketingShell>
      <PricingViewTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgba(14,165,233,0.09),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
              Simple, transparent clinic pricing
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Choose the HealthOS plan that fits your clinic
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              Start with the clinic workflow you need today and move to deeper
              inventory, panel, workforce and financial control when your
              operations grow.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
              Sumero HealthOS helps Malaysian clinics manage the complete journey
              from appointment and queue to consultation, dispensing, payment and
              owner reporting—from one controlled workspace.
            </p>
          </div>

          <div className="mt-14">
            <PricingPlans />
          </div>
        </div>
      </section>

      {/* Founding clinic */}
      <section className="border-b border-zinc-200 bg-zinc-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400">
            Limited launch programme
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Become a HealthOS founding clinic
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Work directly with the Sumero team to test HealthOS against your
            clinic&apos;s actual workflow, train your staff and review the results
            before a wider rollout.
          </p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              "Maximum five clinics",
              "45-day guided pilot",
              `Professional plan at ${formatRm(PRICING.founding.monthly)}/month for the first ${PRICING.founding.months} paid months`,
              `Professional onboarding reduced from ${formatRm(PRICING.founding.professionalOnboardingStandard)} to ${formatRm(PRICING.founding.onboarding)}`,
              "Guided configuration and remote training",
              "Weekly feedback during the pilot",
              "Permission to request a testimonial or case study after a successful rollout",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-zinc-200">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-2 text-sm text-zinc-400">
            <p>Participation is subject to application and fit.</p>
            <p>
              Clinics are not required to provide a testimonial.
            </p>
            <p>Custom development is not included.</p>
            <p>
              Provider usage fees, messaging fees and third-party fees are
              separate where applicable.
            </p>
          </div>
          <FoundingClinicCta />
        </div>
      </section>

      {/* Implementation */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Implementation
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Implementation and optional services
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
            Onboarding fees cover configuration, migration preparation, training
            and go-live support. They are kept separate so clinics can see exactly
            what they are paying for.
          </p>

          {/* Desktop table */}
          <div className="mt-10 hidden overflow-x-auto sm:block">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="py-3 pr-4 font-semibold text-zinc-900">
                    Service
                  </th>
                  <th className="py-3 font-semibold text-zinc-900">Price</th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((row) => (
                  <tr key={row.service} className="border-b border-zinc-100">
                    <td className="py-4 pr-4 text-zinc-700">{row.service}</td>
                    <td className="whitespace-nowrap py-4 font-medium text-zinc-900">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <ul className="mt-8 space-y-3 sm:hidden">
            {addOns.map((row) => (
              <li
                key={row.service}
                className="rounded-xl border border-zinc-200 bg-white p-4"
              >
                <p className="text-sm font-medium text-zinc-900">{row.service}</p>
                <p className="mt-2 text-sm font-semibold text-zinc-800">
                  {row.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product status */}
      <section className="border-b border-zinc-200 bg-zinc-50/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Transparency
          </p>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            What is not included yet
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
            We want you to know exactly what is available before you subscribe.
            Essential and Professional cover the main clinic workflow; the items
            below are planned, require clinic-specific setup or are currently
            outside the scope of HealthOS.
          </p>

          <div className="mt-10 space-y-8">
            {[
              {
                heading: "On the roadmap",
                description:
                  "In development or planned, and not included in current plan pricing.",
                items: [
                  {
                    label: "Roadmap",
                    tone: "amber" as const,
                    title: "MyInvois submission",
                  },
                  {
                    label: "Roadmap",
                    tone: "amber" as const,
                    title: "MyKad reading",
                  },
                  {
                    label: "Roadmap",
                    tone: "amber" as const,
                    title: "Laboratory workflow",
                  },
                ],
              },
              {
                heading: "Needs clinic setup first",
                description:
                  "Available only after connection, approval and go-live steps are complete.",
                items: [
                  {
                    label: "Requires setup",
                    tone: "sky" as const,
                    title: "Clinic-owned WhatsApp automation",
                    note: "Meta-approved templates and production activation required.",
                  },
                ],
              },
              {
                heading: "Outside current HealthOS scope",
                description:
                  "Not included in Essential or Professional today.",
                items: [
                  {
                    label: "Not included",
                    tone: "zinc" as const,
                    title: "Payroll",
                  },
                  {
                    label: "Not included",
                    tone: "zinc" as const,
                    title: "Accounting general ledger",
                  },
                  {
                    label: "Not included",
                    tone: "zinc" as const,
                    title: "AI clinical assistance",
                  },
                  {
                    label: "Standard terms",
                    tone: "zinc" as const,
                    title: "Compliance certification or guaranteed SLA",
                    note: "We do not advertise certifications or fixed SLAs on this website.",
                  },
                ],
              },
            ].map((group) => (
              <div key={group.heading}>
                <h3 className="text-sm font-semibold text-zinc-900">
                  {group.heading}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{group.description}</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-xl border border-zinc-200 bg-white p-4"
                    >
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                          item.tone === "amber"
                            ? "bg-amber-50 text-amber-800 ring-1 ring-amber-100"
                            : item.tone === "sky"
                              ? "bg-sky-50 text-sky-800 ring-1 ring-sky-100"
                              : "bg-zinc-100 text-zinc-600 ring-1 ring-zinc-200/80"
                        }`}
                      >
                        {item.label}
                      </span>
                      <p className="mt-3 text-sm font-medium leading-snug text-zinc-900">
                        {item.title}
                      </p>
                      {"note" in item && item.note ? (
                        <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                          {item.note}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-zinc-500">
            Prefer a walkthrough first?{" "}
            <Link
              href="/contact"
              className="font-semibold text-sky-700 hover:text-sky-600"
            >
              Book a demo
            </Link>{" "}
            or read the{" "}
            <Link
              href="/products/sumero-healthos"
              className="font-semibold text-sky-700 hover:text-sky-600"
            >
              HealthOS overview
            </Link>
            .
          </p>
        </div>
      </section>
    </MarketingShell>
  );
}
