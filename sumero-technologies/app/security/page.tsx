import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "Security & trust",
  description:
    "How Sumero HealthOS keeps clinic data private, controls who can do what, and leaves a clear record for owners and auditors.",
};

const pillars = [
  {
    title: "Your clinic’s data stays yours",
    body: "Each clinic’s information is isolated in the system. Another clinic on the platform never sees your patients, bills, stock, or staff files.",
  },
  {
    title: "Sign-in that fits a real clinic",
    body: "Staff can log in with email or a simple clinic username. Strong passwords, lockouts after repeated failed attempts, and careful session handling help keep accounts safe.",
  },
  {
    title: "The right access for each role",
    body: "Owners, doctors, front desk, nurses, pharmacists, and accounts each get a sensible workspace. Visiting doctors don’t get owner-level money screens unless you allow it.",
  },
  {
    title: "A trail when you need answers",
    body: "Important actions on patients, visits, payments, and stock can be traced when you need to review what changed, when, and by whom. That helps with peace of mind and panel queries.",
  },
] as const;

export default function SecurityPage() {
  return (
    <MarketingShell>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400/90">
          Security &amp; trust
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          Built so clinics can sleep at night
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Sumero HealthOS is designed for private clinics that handle sensitive
          data every day. Here is how we think about safety, in plain language.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <section
              key={p.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
            >
              <h2 className="text-lg font-semibold text-zinc-100">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {p.body}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-zinc-500">
          Password recovery is handled in a controlled, auditable way. That
          suits clinics that prefer admin-assisted resets over anonymous email
          links alone.
        </p>

        <p className="mt-14 text-center text-sm text-zinc-500">
          <Link
            href="/products/sumero-healthos"
            className="font-medium text-sky-400 hover:text-sky-300"
          >
            ← Back to Sumero HealthOS
          </Link>
        </p>
      </div>
    </MarketingShell>
  );
}
