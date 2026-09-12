"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const INTEREST_OPTIONS = [
  "Clinic workflow",
  "Plans and pricing",
  "Panel and TPA operations",
  "MyInvois e-Invoice workflows",
  "Inventory and purchasing",
  "Workforce and attendance",
  "Data migration",
  "Multi-branch rollout",
  "Not sure yet",
] as const;

type InterestOption = (typeof INTEREST_OPTIONS)[number];

function resolveInterest(plan: string | null, interest: string | null): InterestOption | "" {
  const raw = `${plan ?? ""} ${interest ?? ""}`.toLowerCase().trim();
  if (!raw) return "";
  if (raw.includes("group")) return "Multi-branch rollout";
  if (raw.includes("invoice") || raw.includes("myinvois")) return "MyInvois e-Invoice workflows";
  if (raw.includes("panel") || raw.includes("tpa")) return "Panel and TPA operations";
  if (raw.includes("inventory")) return "Inventory and purchasing";
  if (raw.includes("workforce") || raw.includes("attendance")) return "Workforce and attendance";
  if (raw.includes("migration")) return "Data migration";
  if (plan) return "Plans and pricing";
  return "";
}

function track(event: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("sumero_analytics", { detail: { event } }));
}

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialInterest = useMemo(
    () => resolveInterest(searchParams.get("plan"), searchParams.get("interest")),
    [searchParams],
  );
  const [interestOverride, setInterestOverride] = useState<InterestOption | "" | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const selectedInterest = interestOverride ?? initialInterest;

  return (
    <>
      <div aria-live="polite" className={`pointer-events-none fixed inset-x-0 bottom-4 z-50 px-4 transition sm:bottom-6 ${success ? "opacity-100" : "opacity-0"}`}>
        <div className={`mx-auto w-full max-w-md transform-gpu transition duration-200 ${success ? "translate-y-0" : "translate-y-3"}`}>
          <div className="pointer-events-auto flex items-start gap-3 rounded-2xl border border-emerald-200 bg-white p-4 shadow-xl ring-1 ring-zinc-100">
            <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100" aria-hidden>✓</span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-zinc-900">Enquiry received</p>
              <p className="mt-0.5 text-xs leading-relaxed text-zinc-600">Thank you. The SUMERO team will contact you about your HealthOS enquiry shortly.</p>
            </div>
            <button type="button" onClick={() => setSuccess(false)} className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700" aria-label="Dismiss">×</button>
          </div>
        </div>
      </div>

      <form className="space-y-5" onSubmit={async (event) => {
        event.preventDefault();
        setError(null);
        setPending(true);
        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = {
          name: String(formData.get("name") ?? ""),
          clinicName: String(formData.get("clinicName") ?? ""),
          email: String(formData.get("email") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          branches: String(formData.get("branches") ?? ""),
          currentSystem: String(formData.get("currentSystem") ?? ""),
          primaryInterest: String(formData.get("primaryInterest") ?? ""),
          preferredContact: String(formData.get("preferredContact") ?? ""),
          consent: formData.get("consent") === "on",
        };

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const data = await response.json();
          if (!response.ok || !data.success) throw new Error(data.message || "We could not send your enquiry.");
          track("demo_form_submitted");
          setSuccess(true);
          form.reset();
          setInterestOverride("");
          window.setTimeout(() => setSuccess(false), 4000);
        } catch (caught: unknown) {
          setError(caught instanceof Error ? caught.message : "Something went wrong. Please try again.");
        } finally {
          setPending(false);
        }
      }}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-xs font-medium text-zinc-600">Name</label>
            <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="clinicName" className="text-xs font-medium text-zinc-600">Clinic or organisation</label>
            <input id="clinicName" name="clinicName" required autoComplete="organization" className={fieldClass} placeholder="Clinic or group name" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="text-xs font-medium text-zinc-600">Work email</label>
            <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@clinic.com" />
          </div>
          <div>
            <label htmlFor="phone" className="text-xs font-medium text-zinc-600">Phone</label>
            <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} placeholder="+60…" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="branches" className="text-xs font-medium text-zinc-600">Number of branches</label>
            <input id="branches" name="branches" required inputMode="numeric" pattern="[0-9]+" className={fieldClass} placeholder="For example, 1" />
          </div>
          <div>
            <label htmlFor="preferredContact" className="text-xs font-medium text-zinc-600">Preferred contact method</label>
            <select id="preferredContact" name="preferredContact" required defaultValue="" className={fieldClass}>
              <option value="" disabled>Select a method</option>
              <option>Email</option><option>Phone call</option><option>WhatsApp</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="currentSystem" className="text-xs font-medium text-zinc-600">Current system or manual process</label>
          <input id="currentSystem" name="currentSystem" required className={fieldClass} placeholder="Paper, spreadsheets or another clinic system" />
        </div>

        <div>
          <label htmlFor="primaryInterest" className="text-xs font-medium text-zinc-600">Primary area of interest</label>
          <select id="primaryInterest" name="primaryInterest" required value={selectedInterest} onChange={(event) => setInterestOverride(event.target.value as InterestOption | "")} className={fieldClass}>
            <option value="" disabled>Select an area</option>
            {INTEREST_OPTIONS.map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>

        <label className="flex items-start gap-3 text-xs leading-relaxed text-zinc-600">
          <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-sky-600 focus:ring-sky-500" />
          <span>I agree that SUMERO Technologies may contact me about this HealthOS enquiry. See the <Link href="/privacy" className="font-medium text-sky-700 underline-offset-2 hover:underline">Privacy Policy</Link>.</span>
        </label>

        {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
        <button type="submit" disabled={pending} className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 disabled:opacity-60 sm:w-auto">{pending ? "Sending…" : "Request a demo"}</button>
      </form>
    </>
  );
}
