import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/marketing/ContactForm";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "Contact | Sumero HealthOS",
  description:
    "Book a walkthrough or ask about onboarding. Sumero HealthOS by Sumero Technologies.",
};

export default function ContactPage() {
  return (
    <MarketingShell>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Book a 20-minute walkthrough
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Share how your clinic runs today (queue, pharmacy, billing, insurer
            money), and we will show the parts of HealthOS that match.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-100">
              What to expect
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
              <li>
                We walk your real patient journey:{" "}
                <span className="text-zinc-300">
                  front desk → doctor → pharmacy → payment → follow-up
                </span>
                .
              </li>
              <li>
                We cover privacy, who can see money screens, and insurer
                receivables if those matter for your clinic.
              </li>
              <li>
                Prefer reading first?{" "}
                <Link
                  href="/products/sumero-healthos"
                  className="font-medium text-sky-400 hover:text-sky-300"
                >
                  Product overview
                </Link>
                .
              </li>
            </ul>
            <div className="mt-8 rounded-xl border border-white/[0.06] bg-zinc-950/50 p-4 text-xs text-zinc-500">
              <p className="font-medium text-zinc-400">Email</p>
              <a
                href="mailto:contact@sumerotech.com"
                className="mt-1 block text-sky-400 hover:text-sky-300"
              >
                contact@sumerotech.com
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </MarketingShell>
  );
}
