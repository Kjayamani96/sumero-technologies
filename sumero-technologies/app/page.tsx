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

const heroPills = [
  "Walk-in & appointments",
  "Cash & company (panel) billing",
  "Pharmacy handoff",
  "Multi-branch friendly",
] as const;

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
    body: "Clinic data stays scoped to your organisation. It is never mixed with another customer.",
  },
  {
    icon: IconUsers,
    title: "Roles that make sense",
    body: "Doctors, reception, pharmacy, and accounts each see a workspace that matches their job.",
  },
  {
    icon: IconChart,
    title: "Operational clarity",
    body: "Today's collections, visits, and open work surface in one place for owners and managers.",
  },
  {
    icon: IconBuilding,
    title: "Built for real clinics",
    body: "Panel-heavy weeks, locums, and small groups with more than one branch. This is not a generic brochure stack.",
  },
] as const;

export default function HomePage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_70%_-10%,rgba(14,165,233,0.1),transparent_50%),radial-gradient(ellipse_60%_50%_at_0%_30%,rgba(125,211,252,0.08),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-sky-700">
              Sumero HealthOS
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
              Private clinics, Malaysia &amp; beyond
            </span>
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
            <div>
              <h1 className="text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.02] lg:text-[3.25rem] lg:leading-[1.02]">
                The clinic workspace{" "}
                <span className="text-sky-600">for the full day.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
                Reception, doctors, pharmacy, billing, and accounts share one
                spine, so patients move smoothly and owners stop reconciling five
                different tools every night.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-500"
                >
                  Book a demo
                </Link>
                <Link
                  href="/products/sumero-healthos"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
                >
                  Explore HealthOS
                </Link>
              </div>
              <p className="mt-4 text-center text-sm text-zinc-500 lg:text-left">
                Already onboarded?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-sky-700 underline-offset-2 hover:text-sky-600 hover:underline"
                >
                  Staff sign in
                </Link>
              </p>
              <div className="mt-10 flex flex-wrap gap-2">
                {heroPills.map((p) => (
                  <span
                    key={p}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-sky-200/40 via-transparent to-sky-100/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-100">
                <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-[10px] text-zinc-500">
                    clinic workspace, live preview
                  </span>
                </div>
                <div className="bg-zinc-100 p-1 sm:p-2">
                  <Image
                    src="/marketing/dashboard-queue.png"
                    alt="Sumero HealthOS operations overview: daily sales, visits, and clinic metrics."
                    width={1920}
                    height={1080}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="mx-auto block h-auto max-h-[min(58vh,520px)] w-auto max-w-full object-contain sm:max-h-[min(62vh,580px)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Why HealthOS
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            One spine. Three places your team already works.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            We like products that tell a clear story: fewer tabs, fewer
            handoffs, and fewer moments where nobody knows who changed what.
          </p>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:border-sky-200 hover:shadow-md"
              >
                <div className="mb-5 inline-flex rounded-xl border border-sky-100 bg-sky-50 p-3 text-sky-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
            Built for private GP and specialist clinics with in-house pharmacy and
            company-covered (&quot;panel&quot;) visits, the way Malaysian clinics
            already run day to day.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-200">
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
          <div className="mt-14">
            <WorkflowPipeline />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Trust
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Serious about who sees what
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <Icon className="h-5 w-5 text-sky-600" />
                <h3 className="mt-4 text-sm font-semibold text-zinc-900">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                  {body}
                </p>
              </div>
            ))}
          </div>
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

      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-zinc-50 px-8 py-12 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                See HealthOS mapped to how you work, not a canned tour.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                We walk queue, pharmacy, billing, and panel money the way your
                clinic actually runs. Bring your questions, and leave with a clear
                picture of fit.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500"
                >
                  Book a demo
                </Link>
                <Link
                  href="/products/sumero-healthos"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
                >
                  Product overview
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
