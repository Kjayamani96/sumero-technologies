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
      <section className="relative overflow-hidden border-b border-white/[0.05]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_70%_-10%,rgba(56,189,248,0.12),transparent_50%),radial-gradient(ellipse_60%_50%_at_0%_30%,rgba(139,92,246,0.07),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
              Sumero HealthOS
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-600">
              Private clinics, Malaysia &amp; beyond
            </span>
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
            <div>
              <h1 className="text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.02] lg:text-[3.25rem] lg:leading-[1.02]">
                The clinic workspace{" "}
                <span className="bg-gradient-to-r from-sky-200 via-white to-violet-200 bg-clip-text text-transparent">
                  for the full day.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
                Reception, doctors, pharmacy, billing, and accounts share one
                spine, so patients move smoothly and owners stop reconciling five
                different tools every night.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-sky-900/20 transition hover:bg-zinc-100"
                >
                  Book a demo
                </Link>
                <Link
                  href="/products/sumero-healthos"
                  className="inline-flex items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-zinc-100 transition hover:bg-white/[0.08]"
                >
                  Explore HealthOS
                </Link>
              </div>
              <p className="mt-4 text-center text-sm text-zinc-500 lg:text-left">
                <span className="text-zinc-600">Already onboarded?</span>{" "}
                <Link
                  href="/login"
                  className="font-semibold text-sky-400/90 underline-offset-2 hover:text-sky-300 hover:underline"
                >
                  Staff sign in
                </Link>
              </p>
              <div className="mt-10 flex flex-wrap gap-2">
                {heroPills.map((p) => (
                  <span
                    key={p}
                    className="rounded-lg border border-white/[0.06] bg-zinc-900/40 px-3 py-1.5 text-xs font-medium text-zinc-400"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-sky-500/20 via-transparent to-violet-500/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-zinc-900/50 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.75)] ring-1 ring-white/[0.06]">
                <div className="flex items-center gap-2 border-b border-white/[0.06] bg-zinc-900/90 px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-[10px] text-zinc-500">
                    clinic workspace, live preview
                  </span>
                </div>
                <div className="relative aspect-[4/3] w-full bg-zinc-950 sm:aspect-[16/11]">
                  <Image
                    src="/marketing/dashboard-queue.png"
                    alt="Sumero HealthOS dashboard showing today's operations, collections, and visits."
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.05]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400/90">
            Why HealthOS
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            One spine. Three places your team already works.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            We like products that tell a clear story: fewer tabs, fewer
            handoffs, and fewer moments where nobody knows who changed what.
          </p>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 transition hover:border-white/[0.14]"
              >
                <div className="mb-5 inline-flex rounded-xl border border-white/[0.1] bg-zinc-950/60 p-3 text-sky-300/90">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.05] bg-zinc-900/25">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium leading-relaxed text-zinc-300 sm:text-base">
            Built for private GP and specialist clinics with in-house pharmacy and
            company-covered (&quot;panel&quot;) visits, the way Malaysian clinics
            already run day to day.
          </p>
        </div>
      </section>

      <section className="border-b border-white/[0.05]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400/90">
            Patient journey
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            From door to payment on one track
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            When reception, doctors, and pharmacy share the same visit story,
            you spend less time on the phone and more time with patients.
          </p>
          <div className="mt-14">
            <WorkflowPipeline />
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.05]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400/90">
            Trust
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Serious about who sees what
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <Icon className="h-5 w-5 text-zinc-500" />
                <h3 className="mt-4 text-sm font-semibold text-zinc-100">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link
              href="/security"
              className="text-sm font-semibold text-sky-400 transition hover:text-sky-300"
            >
              Read security &amp; trust overview →
            </Link>
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-zinc-800/80 via-zinc-900 to-zinc-950 px-8 py-12 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                See HealthOS mapped to how you work, not a canned tour.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                We walk queue, pharmacy, billing, and panel money the way your
                clinic actually runs. Bring your questions, and leave with a clear
                picture of fit.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
                >
                  Book a demo
                </Link>
                <Link
                  href="/products/sumero-healthos"
                  className="inline-flex items-center justify-center rounded-full border border-white/[0.2] bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
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
