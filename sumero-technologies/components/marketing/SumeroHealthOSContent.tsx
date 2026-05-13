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
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/40 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.06]">
          <div className="relative h-[min(58vh,620px)] min-h-[320px] w-full sm:min-h-[380px] lg:min-h-[440px]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-contain object-top p-3 sm:p-5"
              priority={priority ?? false}
            />
          </div>
        </div>
        <figcaption className="mt-5 px-1 sm:px-2">
          <span className="block text-base font-semibold tracking-tight text-zinc-100">
            {title}
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-zinc-500">
            {caption}
          </span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="mx-auto max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/30">
        <div className="flex aspect-[16/10] min-h-[240px] flex-col items-center justify-center bg-gradient-to-br from-zinc-900/80 via-zinc-950 to-zinc-900/80 p-8 text-center">
          <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
            Preview
          </span>
          <p className="mt-4 max-w-sm text-base font-medium text-zinc-300">
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
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.025] p-6 sm:p-7 transition duration-300 hover:border-white/[0.12] hover:bg-white/[0.045]">
      <div className="mb-4 inline-flex rounded-xl border border-white/[0.08] bg-zinc-950/50 p-2.5 text-sky-300/90">
        {icon}
      </div>
      <h3 className="text-base font-semibold tracking-tight text-zinc-50">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
        {body}
      </p>
    </div>
  );
}

const trustTeasers = [
  {
    title: "Your clinic, your boundary",
    body: "Patient and money data stay scoped to your organisation. Other customers on the platform never see it.",
  },
  {
    title: "Sign-in that fits real desks",
    body: "Sensible password rules and lockouts so busy reception areas stay protected without slowing everyone down.",
  },
  {
    title: "A paper trail when it matters",
    body: "When something sensitive changes, you can trace who did what. That helps with panels, audits, and disputes.",
  },
] as const;

export function SumeroHealthOSContent() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.05]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(56,189,248,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400/90">
            Platform overview
          </p>
          <h1 className="mt-5 max-w-3xl text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.06]">
            One place to run the clinic day
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl sm:leading-relaxed">
            From the first patient at the door through consultation, pharmacy,
            billing, and follow-up. HealthOS keeps your team aligned without
            juggling spreadsheets and disconnected apps.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500">
            Built for private clinics and small groups that see insured
            (&quot;panel&quot;) patients, run an in-house pharmacy, and care
            about who can see what.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 shadow-lg shadow-black/25 transition hover:bg-zinc-100"
            >
              Book a walkthrough
            </Link>
            <Link
              href="/security"
              className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-medium text-zinc-100 transition hover:bg-white/[0.08]"
            >
              How we protect your data
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.05]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400/90">
            Patient journey
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            A clear path for every visit
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Everyone sees the same story: who is waiting, who is in the room,
            what was prescribed, what is ready to collect, and what is still
            owed.
          </p>
          <div className="mt-14">
            <WorkflowPipeline />
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.05]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400/90">
            Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            What you get
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            The essentials teams use every week, written the way owners and
            managers already talk about the work.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<IconReception className="h-5 w-5" />}
              title="Front desk & queue"
              body="Take a number, see who is waiting, and hand patients to the right doctor. Urgent cases can jump ahead when your policy allows."
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
              body="Track what each insurer owes, nudge before invoices go stale, and record partial payments when money arrives in chunks."
            />
            <FeatureCard
              icon={<IconChart className="h-5 w-5" />}
              title="Stock & purchasing"
              body="See what is on hand, what is expiring soon, and what to order. Sensitive stock changes leave a trail owners can review."
            />
            <FeatureCard
              icon={<IconUsers className="h-5 w-5" />}
              title="Staff & attendance"
              body="Rosters, leave, and simple clock-in options help you run payroll conversations with fewer arguments about who was on site."
            />
            <FeatureCard
              icon={<IconArrowPath className="h-5 w-5" />}
              title="Moving from another system"
              body="Guided imports and checks for patients, stock, and insurer lists so you are not rebuilding everything by hand on day one."
            />
            <FeatureCard
              icon={<IconShield className="h-5 w-5" />}
              title="Plans & clinic settings"
              body="Trials, renewals, and clinic-wide switches (like read-only mode when a subscription needs attention) stay under control."
            />
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.05]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400/90">
            Screens
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Inside the workspace
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            These are real product frames, shown large so you can read the text.
            Most weeks, your team keeps coming back to three views: how the day
            looks, how pharmacy closes the loop, and how panel money is tracking.
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

      <section id="security" className="border-b border-white/[0.05]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400/90">
            Trust
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Trust, in human terms
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            No acronyms, just what clinic owners ask us about before they go
            live.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {trustTeasers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-6 sm:p-7"
              >
                <div className="mb-4 h-px w-8 rounded-full bg-gradient-to-r from-sky-400/80 to-violet-400/60" />
                <h3 className="text-base font-semibold tracking-tight text-zinc-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link
              href="/security"
              className="text-sm font-medium text-sky-400 transition hover:text-sky-300"
            >
              Security and trust: full overview →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-b border-white/[0.05]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400/90">
            Multi-branch
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Branches that share, without losing control
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            When you operate more than one site, you choose what travels between
            branches (such as shared patient lookup or stock) and what stays
            local to each desk. Owners keep a single subscription view while
            branch teams see only what they should.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-zinc-800/80 via-zinc-900 to-zinc-950 p-8 sm:flex sm:items-center sm:justify-between sm:gap-10 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl" />
            <p className="relative max-w-xl text-base leading-relaxed text-zinc-300">
              Tell us how your clinic runs today, and we will show the screens that
              map to your reception, doctors, pharmacy, and accounts team.
            </p>
            <Link
              href="/contact"
              className="relative mt-8 inline-flex shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 sm:mt-0"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
