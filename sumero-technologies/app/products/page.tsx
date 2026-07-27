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
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
          Catalog
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Software that matches how clinics work
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          <CompanyLink className="font-medium text-zinc-900 underline-offset-2 transition hover:text-sky-700 hover:underline">
            Sumero Technologies
          </CompanyLink>{" "}
          focuses on operational tools for private healthcare. Today that means
          Sumero HealthOS, one calm workspace for your team instead of a pile
          of disconnected apps.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Link
            href="/products/sumero-healthos"
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:border-sky-200 hover:shadow-md"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-100/80 blur-3xl transition group-hover:bg-sky-200/70" />
            <p className="text-xs font-medium uppercase tracking-wider text-sky-600">
              Flagship
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-900">
              Sumero HealthOS
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Queue, consultations, pharmacy, billing, company receivables,
              stock, staff attendance, and onboarding, built for clinics that
              need clarity, not buzzwords.
            </p>
            <span className="mt-6 inline-flex text-sm font-medium text-sky-700 group-hover:text-sky-600">
              View product →
            </span>
          </Link>

          <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-8">
            <h2 className="text-lg font-semibold text-zinc-500">
              More to come
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              We will list new product lines here when they are ready for
              clinics. HealthOS remains where most teams start.
            </p>
          </div>
        </div>
      </div>
    </MarketingShell>
  );
}
