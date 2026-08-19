import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowPath,
  IconBuilding,
  IconChart,
  IconShield,
} from "@/components/marketing/MarketingIcons";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { formatRm, PRICING } from "@/lib/pricing";

export const metadata: Metadata = {
  description:
    "SUMERO Technologies designs and builds intelligent software that helps organisations simplify operations, connect workflows and work better.",
  openGraph: {
    title: "SUMERO Technologies | Technology that simplifies operations",
    description:
      "Practical technology products designed for clearer workflows and better operations.",
    url: "https://sumerotech.com",
  },
};

const principles = [
  {
    icon: IconArrowPath,
    title: "Connected workflows",
    body: "We bring related work into one clear system, reducing duplication and helping teams stay aligned.",
  },
  {
    icon: IconChart,
    title: "Operational clarity",
    body: "We make important information easier to understand, so people can act with confidence.",
  },
  {
    icon: IconShield,
    title: "Built for trust",
    body: "We design dependable products with sensible access controls, traceability and long-term use in mind.",
  },
] as const;

export default function HomePage() {
  return (
    <MarketingShell>
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_85%_10%,rgba(0,212,255,0.10),transparent_62%),radial-gradient(ellipse_55%_45%_at_10%_5%,rgba(29,78,216,0.07),transparent_58%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="hero-fade-up font-heading text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              SUMERO Technologies
            </p>
            <h1 className="hero-fade-up-delay mt-5 text-4xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#0b1026] sm:text-5xl sm:leading-[1.08] lg:text-[3.5rem]">
              Technology that makes complex operations simple.
            </h1>
            <p className="hero-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We design and build intelligent software that helps organisations
              simplify operations, connect workflows and work better.
            </p>
            <div className="hero-fade-up-delay-2 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1d4ed8] px-7 font-heading text-sm font-semibold text-white shadow-lg shadow-blue-700/15 transition hover:-translate-y-0.5 hover:bg-[#123fb8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008bff]/40"
              >
                Explore our products
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-7 font-heading text-sm font-semibold text-[#0b1026] transition hover:border-[#008bff] hover:text-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008bff]/30"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="hero-image-reveal relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/12 via-cyan-400/10 to-teal-400/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white/85 p-10 shadow-[0_28px_80px_-42px_rgba(11,16,38,0.35)] sm:p-14">
              <Image
                src="/brand/sumero-symbol.png"
                alt="SUMERO symbol"
                width={1246}
                height={1263}
                className="mx-auto h-auto w-[230px] sm:w-[280px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
                About SUMERO
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[#0b1026] sm:text-4xl">
                Practical technology, built around real work.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                SUMERO Technologies is a Malaysian technology company focused on
                building software products that make everyday operations clearer,
                more connected and easier to manage.
              </p>
              <p>
                We start with the people doing the work. By understanding their
                processes, responsibilities and constraints, we build systems that
                are useful in practice—not just impressive in a presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="scroll-mt-24 border-b border-slate-200 bg-[#f3f6fa]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
            How we build
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.025em] text-[#0b1026] sm:text-4xl">
            Clear systems for demanding operations.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_-32px_rgba(11,16,38,0.28)] transition hover:-translate-y-1 hover:border-blue-200"
              >
                <div className="inline-flex rounded-xl bg-blue-50 p-3 text-[#1d4ed8]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.015em] text-[#0b1026]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_-46px_rgba(11,16,38,0.35)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
                Flagship product
              </p>
              <Image
                src="/brand/sumero-healthos-horizontal.png"
                alt="SUMERO HealthOS"
                width={2172}
                height={724}
                className="mt-6 h-auto w-full max-w-[310px]"
              />
              <h2 className="mt-8 text-3xl font-semibold tracking-[-0.025em] text-[#0b1026] sm:text-4xl">
                One workspace for the clinic day.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                HealthOS connects registration, queues, consultations,
                dispensing, billing, panel receivables and reporting for private
                clinics in Malaysia.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/sumero-healthos"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1d4ed8] px-6 font-heading text-sm font-semibold text-white transition hover:bg-[#123fb8]"
                >
                  Explore HealthOS
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-6 font-heading text-sm font-semibold text-[#0b1026] transition hover:border-[#008bff] hover:text-[#1d4ed8]"
                >
                  View pricing
                </Link>
              </div>
              <p className="mt-5 text-sm text-slate-500">
                Plans start at {formatRm(PRICING.essential.monthly)}/month.
              </p>
            </div>
            <div className="relative min-h-[320px] overflow-hidden border-t border-slate-200 bg-[#f3f6fa] p-6 lg:border-l lg:border-t-0 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(0,212,255,0.12),transparent_42%)]" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
                <Image
                  src="/marketing/dashboard-queue.png"
                  alt="SUMERO HealthOS clinic operations dashboard"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="h-full w-full object-cover object-left-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0b1026] px-8 py-12 text-white sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#008bff]/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <div className="inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                <IconBuilding className="h-6 w-6 text-cyan-300" />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                Let&apos;s make complex work easier.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Talk to us about our products, partnerships or a problem your
                organisation is working to solve.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 font-heading text-sm font-semibold text-[#0b1026] transition hover:bg-cyan-50 lg:mt-0"
            >
              Contact SUMERO
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
