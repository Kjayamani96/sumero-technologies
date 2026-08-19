import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore technology products from SUMERO Technologies, including our flagship clinic operations platform, HealthOS.",
};

export default function ProductsPage() {
  return (
    <MarketingShell>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
          Products
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-[#0b1026] sm:text-5xl">
          Products designed around the way people work.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          SUMERO Technologies builds focused software products for complex
          operational environments. HealthOS is our flagship product, with more
          products planned as the portfolio grows.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Link
            href="/products/sumero-healthos"
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-42px_rgba(11,16,38,0.35)] transition hover:-translate-y-1 hover:border-blue-200 sm:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-100/80 blur-3xl" />
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-[#1d4ed8]">
              Flagship
            </p>
            <Image
              src="/brand/sumero-healthos-horizontal.png"
              alt="SUMERO HealthOS"
              width={2172}
              height={724}
              className="mt-5 h-auto w-full max-w-[300px]"
            />
            <p className="mt-7 text-sm leading-6 text-slate-600">
              Queue, consultations, pharmacy, billing, company receivables,
              stock, staff attendance, and onboarding, built for clinics that
              need a clear view of their daily operations.
            </p>
            <span className="mt-7 inline-flex font-heading text-sm font-semibold text-[#1d4ed8] group-hover:text-[#008bff]">
              View product →
            </span>
          </Link>

          <div className="rounded-3xl border border-dashed border-slate-300 bg-[#f3f6fa] p-8 sm:p-10">
            <h2 className="text-xl font-semibold text-[#0b1026]">
              A growing product portfolio
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              New SUMERO products will appear here when they are ready. Each one
              will follow the same approach: understand the operation, reduce
              complexity and build for dependable daily use.
            </p>
          </div>
        </div>
      </div>
    </MarketingShell>
  );
}
