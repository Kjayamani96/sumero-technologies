import type { Metadata } from "next";
import Link from "next/link";
import { CompanyLink } from "@/components/marketing/CompanyLink";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "Products | Sumero Technologies",
  description:
    "Sumero Technologies builds Sumero HealthOS for private clinics: one workspace for queue, care, pharmacy, billing, and insurer receivables.",
};

export default function ProductsPage() {
  return (
    <MarketingShell>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400/90">
          Catalog
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          Software that matches how clinics work
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          <CompanyLink className="font-medium text-zinc-200 underline-offset-2 transition hover:text-white hover:underline">
            Sumero Technologies
          </CompanyLink>{" "}
          focuses on operational tools for private healthcare. Today that means
          Sumero HealthOS, one calm workspace for your team instead of a pile
          of disconnected apps.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Link
            href="/products/sumero-healthos"
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition hover:border-white/[0.14] hover:bg-white/[0.035]"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl transition group-hover:bg-sky-500/15" />
            <p className="text-xs font-medium uppercase tracking-wider text-sky-400/90">
              Flagship
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-50">
              Sumero HealthOS
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Queue, consultations, pharmacy, billing, company receivables,
              stock, staff attendance, and onboarding, built for clinics that
              need clarity, not buzzwords.
            </p>
            <span className="mt-6 inline-flex text-sm font-medium text-zinc-200 group-hover:text-white">
              View product →
            </span>
          </Link>

          <div className="rounded-2xl border border-dashed border-white/[0.1] bg-zinc-950/40 p-8">
            <h2 className="text-lg font-semibold text-zinc-400">
              More to come
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              We will list new product lines here when they are ready for
              clinics. HealthOS remains where most teams start.
            </p>
          </div>
        </div>
      </div>
    </MarketingShell>
  );
}
