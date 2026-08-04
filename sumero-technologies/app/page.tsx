import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconBuilding,
  IconChart,
  IconClinical,
  IconMoney,
  IconReception,
  IconShield,
  IconUsers,
} from "@/components/marketing/MarketingIcons";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { WorkflowPipeline } from "@/components/marketing/WorkflowPipeline";
import { formatRm, PRICING } from "@/lib/pricing";

export const metadata: Metadata = {
  description:
    "Sumero HealthOS is the workspace for private clinics in Malaysia and beyond. Queue, care, pharmacy, billing, panel receivables, and stock in one calm system.",
  openGraph: {
    title: "Sumero HealthOS | Clinic workspace",
    description:
      "From walk-in to payment, one spine connects reception, doctors, pharmacy, and accounts.",
    url: "https://sumerotech.com",
  },
};

const pillars = [
  {
    icon: IconReception,
    title: "Front of house",
    body: "Queue, registration, and handoff to the right doctor, without sticky notes and side spreadsheets.",
  },
  {
    icon: IconClinical,
    title: "Care & pharmacy",
    body: "Visits, scripts, labels, and stock checks tied together so the counter never guesses what the room decided.",
  },
  {
    icon: IconMoney,
    title: "Money & stock",
    body: "Desk collections, panel invoices, reminders, and inventory moves with an owner-visible trail when it matters.",
  },
] as const;

const trustPoints = [
  {
    icon: IconShield,
    title: "Privacy by design",
    body: "Clinic data stays scoped to your organisation.",
  },
  {
    icon: IconUsers,
    title: "Roles that fit",
    body: "Each team sees the workspace their job needs.",
  },
  {
    icon: IconChart,
    title: "Clear today view",
    body: "Collections, visits, and open work in one place.",
  },
  {
    icon: IconBuilding,
    title: "Built for clinics",
    body: "Panel weeks, locums, and structured multi-branch planning.",
  },
] as const;

export default function HomePage() {
  return (
    <MarketingShell>
      {/* Hero: brand + headline + one line + CTAs + full-bleed product */}
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgba(14,165,233,0.09),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="hero-fade-up text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Sumero HealthOS
            </p>
            <h1 className="hero-fade-up-delay mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.05]">
              Run the clinic day in one place
            </h1>
            <p className="hero-fade-up-delay-2 mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              Reception, doctors, pharmacy, and billing share one spine from
              walk-in to payment, for private clinics across Malaysia and beyond.
            </p>
            <div className="hero-fade-up-delay-2 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-500 sm:w-auto"
              >
                Book a demo
              </Link>
              <Link
                href="/products/sumero-healthos"
                className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 sm:w-auto"
              >
                Explore HealthOS
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-image-reveal relative mx-auto mt-14 max-w-6xl px-4 sm:mt-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-t-2xl border border-b-0 border-zinc-200 bg-zinc-50 shadow-[0_-8px_40px_-12px_rgba(24,24,27,0.12)]">
            <Image
              src="/marketing/dashboard-queue.png"
              alt="Sumero HealthOS operations overview: daily sales, visits, and clinic metrics."
              width={1920}
              height={1080}
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="mx-auto block h-auto w-full max-w-full object-contain object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust / value strip */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <ul className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-2 lg:text-left">
            {[
              "Built for Malaysian private clinics",
              "Guided onboarding",
              "Clinic-scoped data",
              `From ${formatRm(PRICING.essential.monthly)}/month`,
            ].map((item) => (
              <li
                key={item}
                className="text-sm font-medium tracking-tight text-zinc-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why: light icon+text columns, Malaysia context folded into intro */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Why HealthOS
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Three places your team already works
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Built for private GP and specialist clinics with in-house pharmacy
            and panel visits. Fewer tabs, fewer handoffs, fewer moments where
            nobody knows who changed what.
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="min-w-0">
                <div className="inline-flex text-sky-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="border-b border-zinc-200 bg-zinc-50/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Patient journey
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            From door to payment on one track
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            When reception, doctors, and pharmacy share the same visit story,
            you spend less time on the phone and more time with patients.
          </p>
          <div className="mt-12">
            <WorkflowPipeline />
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Pricing
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Straightforward plans for growing clinics
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
            Dependable daily workflow first, then deeper inventory, panel,
            workforce and financial control when you need them—not positioned as
            the cheapest clinic software, but as a complete clinic workspace with
            guided onboarding.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Essential",
                price: `From ${formatRm(PRICING.essential.monthly)}/month`,
                body: "Daily clinic workflow for independent clinics.",
              },
              {
                name: "Professional",
                price: `From ${formatRm(PRICING.professional.monthly)}/month`,
                body: "Advanced operations, panels, inventory and workforce control.",
              },
              {
                name: "Group",
                price: "Custom quotation",
                body: "Planned rollout for multi-branch operators.",
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-base font-semibold text-zinc-800">
                  {plan.price}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {plan.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link
              href="/pricing"
              className="inline-flex min-h-11 items-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
            >
              Compare plans
            </Link>
          </p>
        </div>
      </section>

      {/* Trust: plain row, less chrome */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Trust
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Serious about who sees what
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {trustPoints.map(({ icon: Icon, title, body }) => (
              <li key={title} className="min-w-0">
                <Icon className="h-5 w-5 text-sky-600" />
                <h3 className="mt-3 text-sm font-semibold text-zinc-900">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                  {body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link
              href="/security"
              className="text-sm font-semibold text-sky-700 transition hover:text-sky-600"
            >
              Read security &amp; trust overview →
            </Link>
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="rounded-3xl bg-sky-50 px-8 py-12 sm:px-12 sm:py-14">
            <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              See HealthOS using your clinic&apos;s real workflow
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600">
              Walk through registration, queue, consultation, dispensing,
              payment and owner reporting with the Sumero team.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-sky-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
              >
                Book a demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
