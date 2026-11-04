"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PRICING,
  contactPlanHref,
  formatRm,
  type BillingPeriod,
} from "@/lib/pricing";

function track(event: string, detail?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("sumero_analytics", { detail: { event, ...detail } }),
  );
}

export function PricingPlans() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  const essentialPrice =
    billing === "monthly"
      ? `${formatRm(PRICING.essential.monthly)} / clinic / month`
      : `${formatRm(PRICING.essential.annual)} / clinic / year`;
  const professionalPrice =
    billing === "monthly"
      ? `${formatRm(PRICING.professional.monthly)} / clinic / month`
      : `${formatRm(PRICING.professional.annual)} / clinic / year`;

  return (
    <div>
      <div className="flex flex-col items-center gap-3">
        <div
          className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 p-1"
          role="group"
          aria-label="Billing period"
        >
          <button
            type="button"
            onClick={() => {
              setBilling("monthly");
              track("billing_toggle_changed", { billing: "monthly" });
            }}
            className={`min-h-11 rounded-full px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 ${
              billing === "monthly"
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
            aria-pressed={billing === "monthly"}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => {
              setBilling("annual");
              track("billing_toggle_changed", { billing: "annual" });
            }}
            className={`min-h-11 rounded-full px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 ${
              billing === "annual"
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
            aria-pressed={billing === "annual"}
          >
            Annual
            <span className="ml-1.5 text-xs font-medium text-sky-700">
              ~2 months free
            </span>
          </button>
        </div>
        <p className="text-sm text-zinc-500">
          Prices exclude SST if and when applicable.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {/* Essential */}
        <article className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
            Essential
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            For independent clinics that need a dependable daily workflow
            without unnecessary complexity.
          </p>
          <p className="mt-6 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            {essentialPrice}
          </p>
          <ul className="mt-4 space-y-1.5 text-sm text-zinc-600">
            <li>One branch</li>
            <li>Up to two doctors</li>
            <li>Up to eight staff accounts</li>
          </ul>
          <ul className="mt-6 flex-1 space-y-2.5 border-t border-zinc-100 pt-6 text-sm text-zinc-700">
            {[
              "Patient registration and EMR",
              "Appointments, queue and Queue TV",
              "Consultations, prescriptions, MC and referrals",
              "Basic dispensing, billing and receipts",
              "Standard inventory and stock visibility",
              "Core roles and audit history",
              "Manual WhatsApp reminder workflow",
              "Clinic branding",
              "Standard reports",
              "Standard email support",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href={contactPlanHref("essential")}
            onClick={() => track("essential_demo_clicked")}
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
          >
            Book an Essential demo
          </Link>
        </article>

        {/* Professional */}
        <article className="relative flex flex-col rounded-2xl border-2 border-sky-500 bg-white p-6 shadow-md sm:p-8">
          <span className="absolute -top-3 left-6 rounded-full bg-sky-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            Most popular
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
            Professional
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            For established clinics that need stronger control over panels,
            inventory, workforce and financial operations.
          </p>
          <p className="mt-6 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            {professionalPrice}
          </p>
          <ul className="mt-4 space-y-1.5 text-sm text-zinc-600">
            <li>One branch</li>
            <li>Multiple routine staff accounts under fair use</li>
          </ul>
          <ul className="mt-6 flex-1 space-y-2.5 border-t border-zinc-100 pt-6 text-sm text-zinc-700">
            {[
              "Everything in Essential",
              "Advanced inventory",
              "Suppliers and purchase orders",
              "Batch, expiry and adjustment control",
              "Panel companies, invoices and receivables",
              "Partial-payment and reminder tracking",
              "Medicine Counter",
              "Attendance, roster and leave operations",
              "Workforce analytics",
              "Owner financial dashboards",
              "Advanced reports",
              "Migration Center",
              "Priority onboarding and support",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              <span>
                WhatsApp reminders and message status — available after clinic
                connection, message approval where required and activation.
                Sending uses a background queue; delivery is not guaranteed.{" "}
                <span className="text-xs font-medium text-amber-700">
                  Requires setup
                </span>
              </span>
            </li>
          </ul>
          <Link
            href={contactPlanHref("professional")}
            onClick={() => track("professional_demo_clicked")}
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
          >
            Book a Professional demo
          </Link>
        </article>

        {/* Group */}
        <article className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
            Group
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            For operators planning a controlled rollout across three or more
            clinic branches.
          </p>
          <p className="mt-6 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Custom quotation
          </p>
          <ul className="mt-6 flex-1 space-y-2.5 border-t border-zinc-100 pt-6 text-sm text-zinc-700">
            {[
              "Professional capabilities for each contracted branch",
              "Multi-branch implementation planning",
              "Central rollout support",
              "Branch migration planning",
              "Named account contact",
              "Custom training and support terms",
              "Custom data migration scope",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href={contactPlanHref("group")}
            onClick={() => track("group_enquiry_clicked")}
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
          >
            Discuss a group rollout
          </Link>
        </article>
      </div>
      <section className="mt-12" aria-labelledby="compare-plans">
        <h2 id="compare-plans" className="text-2xl font-semibold">
          Compare included features
        </h2>
        <div
          className="mt-6 overflow-x-auto rounded-2xl border border-slate-200"
          tabIndex={0}
          role="region"
          aria-label="Plan feature comparison, scroll horizontally on smaller screens"
        >
          <table className="w-full min-w-[560px] text-left text-sm">
            <caption className="sr-only">
              Existing HealthOS plan entitlements. Additional setup-dependent
              capabilities are listed below.
            </caption>
            <thead className="bg-slate-50">
              <tr>
                {["Feature", "Essential", "Professional", "Group"].map(
                  (label) => (
                    <th key={label} scope="col" className="p-4 font-semibold">
                      {label}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Registration, EMR, appointments and queue",
                  "Included",
                  "Included",
                  "Per contracted branch",
                ],
                [
                  "Consultation, prescriptions, MC and referrals",
                  "Included",
                  "Included",
                  "Per contracted branch",
                ],
                [
                  "Basic dispensing, billing and receipts",
                  "Included",
                  "Included",
                  "Per contracted branch",
                ],
                [
                  "Standard inventory, roles and audit history",
                  "Included",
                  "Included",
                  "Per contracted branch",
                ],
                [
                  "Manual WhatsApp reminder workflow",
                  "Included",
                  "Included",
                  "Per contracted branch",
                ],
                [
                  "Advanced inventory, suppliers and purchasing",
                  "—",
                  "Included",
                  "Per contracted branch",
                ],
                [
                  "Panels, invoices and receivables",
                  "—",
                  "Included",
                  "Per contracted branch",
                ],
                [
                  "Attendance, rosters and leave",
                  "—",
                  "Included",
                  "Per contracted branch",
                ],
                [
                  "Advanced reports and owner financial dashboards",
                  "—",
                  "Included",
                  "Per contracted branch",
                ],
                [
                  "Connected WhatsApp reminders and status",
                  "—",
                  "With clinic setup",
                  "Agreed setup",
                ],
                ["Branch allowance", "One", "One", "Three or more"],
                [
                  "Doctor allowance",
                  "Up to two",
                  "Agreed plan terms",
                  "Agreed scope",
                ],
                [
                  "Staff allowance",
                  "Up to eight",
                  "Routine accounts under fair use",
                  "Agreed scope",
                ],
              ].map(([feature, ...values]) => (
                <tr key={feature} className="border-t border-slate-200">
                  <th scope="row" className="p-4 font-medium">
                    {feature}
                  </th>
                  {values.map((value, index) => (
                    <td key={index} className="p-4 leading-6 text-slate-600">
                      {value === "—" ? (
                        <span aria-label="Not listed as included">—</span>
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-600">
          A dash means the capability is not listed as included in that plan.
          Newer capability entitlements and setup charges are agreed once in
          your clinic proposal.
        </p>
      </section>
    </div>
  );
}

export function FoundingClinicCta() {
  return (
    <Link
      href={contactPlanHref("founding-clinic")}
      onClick={() => track("founding_clinic_clicked")}
      className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
    >
      Ask about founding-clinic availability
    </Link>
  );
}
