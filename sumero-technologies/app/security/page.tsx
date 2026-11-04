import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "Security & trust",
  description:
    "How Sumero HealthOS keeps clinic data private, controls who can do what, and leaves a clear record for owners and auditors.",
  alternates: { canonical: "/security" },
};

const pillars = [
  {
    title: "Role-based access",
    body: "Access is based on staff roles and permissions, helping the clinic control who can view or act on patient and operational information.",
  },
  {
    title: "Audit history",
    body: "Audit history supports review of recorded actions and changes, including who made them and when.",
  },
  {
    title: "Shared-screen privacy",
    body: "Masked shared-screen details help limit exposure of sensitive patient information in shared work areas.",
  },
  {
    title: "Archive, restore and deletion",
    body: "Authorised archive and restore workflows let permitted staff manage patient profiles. Permanent patient deletion is owner-only.",
  },
] as const;

export default function SecurityPage() {
  return (
    <MarketingShell>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
          Security &amp; trust
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Security designed for daily clinic operations
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
          Sumero HealthOS is designed for private clinics that handle sensitive
          information every day. Here is a straightforward overview of how we
          protect access and clinic data.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <section
              key={p.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-lg font-semibold text-zinc-900">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {p.body}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-zinc-500">
          Discuss your clinic’s roles, access needs and operating procedures
          during onboarding.
        </p>

        <p className="mt-14 text-center text-sm text-zinc-500">
          <Link
            href="/products/sumero-healthos"
            className="font-medium text-sky-700 hover:text-sky-600"
          >
            ← Back to Sumero HealthOS
          </Link>
        </p>
      </div>
    </MarketingShell>
  );
}
