"use client";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { validateContact } from "@/lib/contact";
const fieldClass =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 focus:border-blue-700 focus:ring-2 focus:ring-blue-100";
export function ContactForm() {
  const params = useSearchParams();
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  return (
    <form
      className="space-y-5"
      aria-busy={pending}
      onSubmit={async (event) => {
        event.preventDefault();
        if (pending) return;
        setError("");
        setSuccess(false);
        const form = event.currentTarget;
        const fields = new FormData(form);
        const input = Object.fromEntries(fields);
        const { payload, error: invalid } = validateContact({
          ...input,
          consent: fields.get("consent") === "on",
          plan: params.get("plan") ?? "",
        });
        if (!payload) {
          setError(invalid ?? "Please check your details.");
          return;
        }
        setPending(true);
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            signal: AbortSignal.timeout(20000),
          });
          const result = await response.json();
          if (!response.ok || result.success !== true)
            throw new Error(
              result.message ||
                "We could not submit your enquiry. Please email support@sumerotech.com.",
            );
          setSuccess(true);
          form.reset();
        } catch (caught) {
          setError(
            caught instanceof Error && caught.name !== "TimeoutError"
              ? caught.message
              : "The request could not be confirmed. Please try again or email support@sumerotech.com.",
          );
        } finally {
          setPending(false);
        }
      }}
    >
      {params.get("plan") && (
        <p className="text-sm text-slate-600">
          Plan interest: {params.get("plan")?.slice(0, 120)}
        </p>
      )}
      <div>
        <label htmlFor="clinicName" className="text-sm font-medium">
          Clinic name
        </label>
        <input
          className={fieldClass}
          id="clinicName"
          name="clinicName"
          autoComplete="organization"
          required
          maxLength={160}
        />
      </div>
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Contact name
        </label>
        <input
          className={fieldClass}
          id="name"
          name="name"
          autoComplete="name"
          required
          maxLength={120}
        />
      </div>
      <p id="contact-help" className="text-sm text-slate-600">
        Provide an email address or phone number. Either is enough.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            className={fieldClass}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            aria-describedby="contact-help"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            className={fieldClass}
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={25}
            aria-describedby="contact-help"
          />
        </div>
      </div>
      <div>
        <label htmlFor="branches" className="text-sm font-medium">
          Number of branches
        </label>
        <input
          className={fieldClass}
          id="branches"
          name="branches"
          type="number"
          min="1"
          max="9999"
          step="1"
          defaultValue="1"
          required
        />
      </div>
      <div>
        <label htmlFor="requirement" className="text-sm font-medium">
          Main requirement
        </label>
        <textarea
          className={fieldClass}
          id="requirement"
          name="requirement"
          rows={3}
          maxLength={2000}
          required
          placeholder="For example: a demo of registration and consultation, or trial arrangements."
        />
        <p className="mt-2 text-xs text-slate-600">
          Please leave patient information out of your enquiry.
        </p>
      </div>
      <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input
          className="mt-1 h-4 w-4 shrink-0"
          type="checkbox"
          name="consent"
          required
        />
        <span>
          I agree that SUMERO Technologies may contact me about this enquiry.
          See our{" "}
          <Link href="/privacy" className="text-blue-700 underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      {error && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 p-4 text-sm leading-6 text-red-800"
        >
          {error}
        </p>
      )}
      {success && (
        <p
          role="status"
          className="rounded-lg bg-emerald-50 p-4 text-sm leading-6 text-emerald-800"
        >
          Your enquiry has been submitted. The SUMERO team will contact you
          using the details provided.
        </p>
      )}
      <button
        className="primary-cta disabled:opacity-60"
        type="submit"
        disabled={pending}
      >
        {pending ? "Submitting…" : "Request a demo or trial"}
      </button>
    </form>
  );
}
