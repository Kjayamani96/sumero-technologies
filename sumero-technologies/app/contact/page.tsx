import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "@/components/marketing/ContactForm";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a HealthOS demo for your Malaysian clinic. Share branches, doctors and operational needs so we can prepare a relevant walkthrough.",
};

function FormFallback() {
  return (
    <div className="animate-pulse space-y-4" aria-hidden>
      <div className="h-10 rounded-lg bg-zinc-100" />
      <div className="h-10 rounded-lg bg-zinc-100" />
      <div className="h-24 rounded-lg bg-zinc-100" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <MarketingShell>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-600">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Book a HealthOS demo
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Tell us how your clinic operates today. We will tailor the demo to
            your registration, queue, consultation, dispensing, payment and
            reporting workflows.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-900">
              What to expect
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600">
              <li>
                A walkthrough of the clinic day:{" "}
                <span className="font-medium text-zinc-800">
                  front desk → doctor → pharmacy → payment → owner view
                </span>
                .
              </li>
              <li>
                A practical discussion on whether Essential, Professional,
                Group or our Founding Clinic Programme suits your clinic.
              </li>
              <li>
                Prefer reading first? See{" "}
                <Link
                  href="/pricing"
                  className="font-medium text-sky-700 hover:text-sky-600"
                >
                  pricing
                </Link>{" "}
                or the{" "}
                <Link
                  href="/products/sumero-healthos"
                  className="font-medium text-sky-700 hover:text-sky-600"
                >
                  product overview
                </Link>
                .
              </li>
            </ul>
            <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-500">
              <p className="font-medium text-zinc-700">Email</p>
              <a
                href="mailto:support@sumerotech.com"
                className="mt-1 block text-sky-700 hover:text-sky-600"
              >
                support@sumerotech.com
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <Suspense fallback={<FormFallback />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </MarketingShell>
  );
}
