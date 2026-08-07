"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const PLAN_OPTIONS = [
  "Essential",
  "Professional",
  "Founding Clinic Programme",
  "Group",
  "Not sure",
] as const;

type PlanOption = (typeof PLAN_OPTIONS)[number];

function resolvePlan(
  plan: string | null,
  interest: string | null,
): PlanOption | "" {
  const raw = (plan || interest || "").toLowerCase().trim();
  if (!raw) return "";
  if (raw.includes("founding")) return "Founding Clinic Programme";
  if (raw.includes("essential")) return "Essential";
  if (raw.includes("professional")) return "Professional";
  if (raw.includes("group")) return "Group";
  if (raw.includes("not") || raw.includes("unsure")) return "Not sure";
  const exact = PLAN_OPTIONS.find((p) => p.toLowerCase() === raw);
  return exact ?? "";
}

function track(event: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("sumero_analytics", { detail: { event } }));
}

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialPlan = useMemo(
    () =>
      resolvePlan(searchParams.get("plan"), searchParams.get("interest")),
    [searchParams],
  );

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [planOverride, setPlanOverride] = useState<PlanOption | "" | null>(
    null,
  );
  const selectedPlan = planOverride ?? initialPlan;

  return (
    <>
      <div
        aria-live="polite"
        className={`pointer-events-none fixed inset-x-0 bottom-4 z-50 px-4 transition sm:bottom-6 ${
          success ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`mx-auto w-full max-w-md transform-gpu transition duration-200 ${
            success ? "translate-y-0" : "translate-y-3"
          }`}
        >
          <div className="pointer-events-auto flex items-start gap-3 rounded-2xl border border-emerald-200 bg-white p-4 shadow-xl ring-1 ring-zinc-100">
            <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
              <span className="text-base" aria-hidden>
                ✓
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-zinc-900">
                Enquiry received
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-zinc-600">
                Thank you. The Sumero team will contact you about your HealthOS
                demo or enquiry shortly. We will not add you to a marketing list
                from this form.
              </p>
              <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-zinc-100">
                <div className="h-full w-full origin-left animate-[toast_2.5s_linear_forwards] rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        </div>
      </div>

      <form
        className="space-y-5"
        onSubmit={async (e) => {
          e.preventDefault();
          setError(null);
          setPending(true);
          const form = e.currentTarget;
          const fd = new FormData(form);

          const payload = {
            name: String(fd.get("name") ?? ""),
            clinicName: String(fd.get("clinicName") ?? ""),
            email: String(fd.get("email") ?? ""),
            phone: String(fd.get("phone") ?? ""),
            branches: String(fd.get("branches") ?? ""),
            doctors: String(fd.get("doctors") ?? ""),
            currentSystem: String(fd.get("currentSystem") ?? ""),
            mainProblem: String(fd.get("mainProblem") ?? ""),
            interestedPlan: String(fd.get("interestedPlan") ?? ""),
            preferredDemoTime: String(fd.get("preferredDemoTime") ?? ""),
            message: String(fd.get("message") ?? ""),
          };

          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (!res.ok || !data.success) {
              throw new Error(data.message || "We could not send your enquiry.");
            }
            track("demo_form_submitted");
            setSuccess(true);
            form.reset();
            setPlanOverride("");
            window.setTimeout(() => setSuccess(false), 4000);
          } catch (err: unknown) {
            setError(
              err instanceof Error
                ? err.message
                : "Something went wrong. Please try again.",
            );
          } finally {
            setPending(false);
          }
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-xs font-medium text-zinc-600">
              Full name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className={fieldClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="clinicName"
              className="text-xs font-medium text-zinc-600"
            >
              Clinic name
            </label>
            <input
              id="clinicName"
              name="clinicName"
              required
              className={fieldClass}
              placeholder="Clinic or group name"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="text-xs font-medium text-zinc-600">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
              placeholder="you@clinic.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-xs font-medium text-zinc-600">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className={fieldClass}
              placeholder="+60…"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="branches"
              className="text-xs font-medium text-zinc-600"
            >
              Number of branches
            </label>
            <input
              id="branches"
              name="branches"
              inputMode="numeric"
              className={fieldClass}
              placeholder="For example, 1"
            />
          </div>
          <div>
            <label
              htmlFor="doctors"
              className="text-xs font-medium text-zinc-600"
            >
              Number of doctors
            </label>
            <input
              id="doctors"
              name="doctors"
              inputMode="numeric"
              className={fieldClass}
              placeholder="For example, 2"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="currentSystem"
            className="text-xs font-medium text-zinc-600"
          >
            Current system or method{" "}
            <span className="font-normal text-zinc-400">(optional)</span>
          </label>
          <input
            id="currentSystem"
            name="currentSystem"
            className={fieldClass}
            placeholder="Paper, Excel, another clinic system…"
          />
        </div>

        <div>
          <label
            htmlFor="mainProblem"
            className="text-xs font-medium text-zinc-600"
          >
            Main operational problem{" "}
            <span className="font-normal text-zinc-400">(optional)</span>
          </label>
          <input
            id="mainProblem"
            name="mainProblem"
            className={fieldClass}
            placeholder="Queue handoffs, stock, panel receivables…"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="interestedPlan"
              className="text-xs font-medium text-zinc-600"
            >
              Interested plan
            </label>
            <select
              id="interestedPlan"
              name="interestedPlan"
              required
              value={selectedPlan}
              onChange={(e) =>
                setPlanOverride(e.target.value as PlanOption | "")
              }
              className={fieldClass}
            >
              <option value="" disabled>
                Select a plan
              </option>
              {PLAN_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="preferredDemoTime"
              className="text-xs font-medium text-zinc-600"
            >
              Preferred demo time{" "}
              <span className="font-normal text-zinc-400">(optional)</span>
            </label>
            <input
              id="preferredDemoTime"
              name="preferredDemoTime"
              className={fieldClass}
              placeholder="Weekday mornings, after 5pm…"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-xs font-medium text-zinc-600"
          >
            Message <span className="font-normal text-zinc-400">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${fieldClass} resize-none`}
            placeholder="Tell us anything else that would help us prepare for the demo."
          />
        </div>

        <p className="text-xs leading-relaxed text-zinc-500">
          By submitting this form, you agree that Sumero Technologies may contact
          you regarding HealthOS. See our{" "}
          <Link
            href="/privacy"
            className="font-medium text-sky-700 underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Sending…" : "Send enquiry"}
        </button>
      </form>
    </>
  );
}
