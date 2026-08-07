import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowPath,
  IconBuilding,
  IconChart,
  IconClinical,
  IconMoney,
  IconPharmacy,
  IconReception,
  IconShield,
  IconUsers,
} from "@/components/marketing/MarketingIcons";
import { WorkflowPipeline } from "@/components/marketing/WorkflowPipeline";
import { formatRm, PRICING } from "@/lib/pricing";

function Screenshot({
  src,
  alt,
  title,
  caption,
  priority,
}: {
  src?: string;
  alt: string;
  title: string;
  caption: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <figure className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-100">
          <div className="flex w-full items-center justify-center bg-zinc-50 p-2 sm:p-4">
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              sizes="(max-width: 1024px) 100vw, 896px"
              className="mx-auto block h-auto max-h-[min(88vh,960px)] w-auto max-w-full object-contain"
              priority={priority ?? false}
            />
          </div>
        </div>
        <figcaption className="mt-5 px-1 sm:px-2">
          <span className="block text-base font-semibold tracking-tight text-zinc-900">
            {title}
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-zinc-600">
            {caption}
          </span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="mx-auto max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
        <div className="flex aspect-[16/10] min-h-[240px] flex-col items-center justify-center p-8 text-center">
          <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
            Preview
          </span>
          <p className="mt-4 max-w-sm text-base font-medium text-zinc-700">
            {title}
          </p>
        </div>
      </div>
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

function FeatureCard({
  icon,
  title,
  body,
  badge,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  badge?: string;
}) {
  return (
    <div className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:border-sky-200 hover:shadow-md sm:p-7">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="inline-flex rounded-xl border border-sky-100 bg-sky-50 p-2.5 text-sky-700">
          {icon}
        </div>
        {badge ? (
          <span className="rounded-md bg-sky-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-sky-800 ring-1 ring-sky-100">
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="text-base font-semibold tracking-tight text-zinc-900">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">{body}</p>
    </div>
  );
}

const trustTeasers = [
  {
    title: "Your clinic, your boundary",
    body: "Patient and money data stay scoped to your organisation. Other customers on the platform never see it.",
  },
  {
    title: "Secure access for busy teams",
    body: "Password rules and account lockouts help protect busy reception areas without making daily access unnecessarily difficult.",
  },
  {
    title: "A paper trail when it matters",
    body: "When something sensitive changes, you can trace who did what. That helps with panels, audits, and disputes.",
  },
] as const;

export function SumeroHealthOSContent() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,165,233,0.1),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Platform overview
          </p>
          <h1 className="mt-5 max-w-3xl text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.06]">
            One place to run the clinic day
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl sm:leading-relaxed">
            From registration to consultation, dispensing, billing and
            follow-up, HealthOS keeps your team working from the same reliable
            information.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500">
            Built for private clinics and small groups that see insured
            (&quot;panel&quot;) patients, run an in-house pharmacy, and care
            about who can see what.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-sky-600 px-6 py-3 text-sm font-medium text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
            >
              Book a walkthrough
            </Link>
            <Link
              href="/security"
              className="inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
            >
              How we protect your data
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-semibold text-sky-700 transition hover:text-sky-600"
            >
              Plans start at {formatRm(PRICING.essential.monthly)}/month →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Patient journey
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            A clear path for every visit
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Everyone sees the same story: who is waiting, who is in the room,
            what was prescribed, what is ready to collect, and what is still
            owed.
          </p>
          <div className="mt-14">
            <WorkflowPipeline />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            What you get
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Practical tools for the work clinic owners, managers and staff
            handle every day.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<IconReception className="h-5 w-5" />}
              title="Front desk & queue"
              body="Register patients, see who is waiting and assign each patient to the right doctor. Staff can prioritise urgent cases according to the clinic's policy."
            />
            <FeatureCard
              icon={<IconClinical className="h-5 w-5" />}
              title="Consultations"
              body="Visit notes, prescriptions, time off certificates, referrals, and follow-up reminders stay attached to the patient and the visit."
            />
            <FeatureCard
              icon={<IconPharmacy className="h-5 w-5" />}
              title="Pharmacy"
              body="Pharmacists confirm what leaves the shelf, print labels, and catch mismatches before the patient pays."
            />
            <FeatureCard
              icon={<IconMoney className="h-5 w-5" />}
              title="Billing & payments"
              body="Cash, card, transfer, and company-covered visits in one flow so the front desk does not re-key the same totals twice."
            />
            <FeatureCard
              icon={<IconBuilding className="h-5 w-5" />}
              title="Company (panel) receivables"
              body="Track outstanding amounts by panel company, follow up on overdue invoices and record partial payments as they are received."
              badge="Professional"
            />
            <FeatureCard
              icon={<IconChart className="h-5 w-5" />}
              title="Stock & purchasing"
              body="See what is on hand, what is expiring soon, and what to order. Advanced inventory, suppliers and purchase orders are on Professional."
              badge="Professional for advanced"
            />
            <FeatureCard
              icon={<IconUsers className="h-5 w-5" />}
              title="Staff & attendance"
              body="Manage rosters, leave and attendance records with a clear view of who was scheduled and who was present."
              badge="Professional"
            />
            <FeatureCard
              icon={<IconArrowPath className="h-5 w-5" />}
              title="Moving from another system"
              body="Guided imports and checks for patients, stock, and insurer lists so you are not rebuilding everything by hand on day one."
              badge="Professional"
            />
            <FeatureCard
              icon={<IconShield className="h-5 w-5" />}
              title="Plans & clinic settings"
              body="Manage trials, renewals and clinic-wide settings, including read-only access when a subscription requires attention."
            />
          </div>
          <div className="mt-10 rounded-2xl border border-amber-100 bg-amber-50/60 p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-zinc-900">
              Current availability
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Manual WhatsApp reminder workflows are available in Essential.
              Clinic-owned WhatsApp automation and delivery tracking require
              successful clinic connection, approved Meta templates and
              production activation{" "}
              <span className="font-medium text-amber-800">(Requires setup)</span>
              . MyInvois submission and some other capabilities remain on the{" "}
              <span className="font-medium text-zinc-800">roadmap</span> and are
              not generally included yet—see{" "}
              <Link
                href="/pricing"
                className="font-semibold text-sky-700 hover:text-sky-600"
              >
                pricing
              </Link>{" "}
              for the clear boundary.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/pricing"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
            >
              Compare HealthOS plans
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Screens
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Inside the workspace
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            These are actual HealthOS screens. They show three common areas of
            work: daily clinic activity, the pharmacy handover and panel
            receivables.
          </p>
          <div className="mt-12 flex flex-col gap-14 sm:mt-14 sm:gap-20">
            <Screenshot
              src="/marketing/dashboard-queue.png"
              alt="HealthOS operations overview: daily sales, visits, and payment breakdown for a clinic."
              title="Today at the clinic"
              caption="Sales, visits, stock warnings, and payment splits on one home screen so owners and leads do not live inside five different tabs."
              priority
            />
            <Screenshot
              src="/marketing/pharmacy-dispense.png"
              alt="Dispensing checkout: dispensary review before payment and finalize dispense."
              title="Pharmacy handoff"
              caption="Pharmacy sees what the room ordered, confirms or adjusts with a reason, then clears the patient before anyone takes payment."
            />
            <Screenshot
              src="/marketing/panel-receivables.png"
              alt="Panel company billing: invoiced, paid, outstanding, and credit control summary."
              title="Panel receivables"
              caption="What each company owes, what is late, and where to chase next, without rebuilding AR in a spreadsheet."
            />
          </div>
        </div>
      </section>

      <section id="security" className="border-b border-zinc-200 bg-zinc-50/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Trust
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Clear and practical security
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Straightforward answers to the security questions clinic owners
            usually ask before going live.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {trustTeasers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="mb-4 h-px w-8 rounded-full bg-sky-500" />
                <h3 className="text-base font-semibold tracking-tight text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link
              href="/security"
              className="text-sm font-medium text-sky-700 transition hover:text-sky-600"
            >
              Security and trust: full overview →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
            Multi-branch
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Planning for multiple branches
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            HealthOS can support a structured branch-by-branch rollout under a
            Group agreement. Cross-branch reporting, shared-data rules and
            central operating requirements are confirmed during solution design
            before contracting.
          </p>
          <p className="mt-6">
            <Link
              href="/contact?plan=Group&interest=group"
              className="text-sm font-semibold text-sky-700 transition hover:text-sky-600"
            >
              Discuss a group rollout →
            </Link>
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-zinc-50 p-8 sm:flex sm:items-center sm:justify-between sm:gap-10 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl" />
            <div className="relative max-w-xl">
              <p className="text-base leading-relaxed text-zinc-600">
                Tell us how your clinic runs today, and we will show the screens
                that map to your reception, doctors, pharmacy, and accounts team.
              </p>
              <p className="mt-3 text-sm text-zinc-500">
                Plans start at {formatRm(PRICING.essential.monthly)}/month.{" "}
                <Link
                  href="/pricing"
                  className="font-semibold text-sky-700 hover:text-sky-600"
                >
                  View pricing
                </Link>
              </p>
            </div>
            <div className="relative mt-8 flex shrink-0 flex-col gap-3 sm:mt-0 sm:flex-row">
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
                Compare plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
