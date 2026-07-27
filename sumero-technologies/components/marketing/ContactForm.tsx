"use client";

import { useState } from "react";

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

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
              <p className="text-sm font-semibold text-zinc-900">Message sent</p>
              <p className="mt-0.5 text-xs leading-relaxed text-zinc-600">
                We&apos;ll get back to you shortly.
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
          const name = String(fd.get("name") ?? "");
          const email = String(fd.get("email") ?? "");
          const company = String(fd.get("company") ?? "");
          const messageRaw = String(fd.get("message") ?? "");
          const message =
            company.trim().length > 0
              ? `Company: ${company}\n\n${messageRaw}`
              : messageRaw;

          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, email, message }),
            });
            const data = await res.json();
            if (!res.ok || !data.success) {
              throw new Error(data.message || "Failed to send");
            }
            setSuccess(true);
            form.reset();
            window.setTimeout(() => setSuccess(false), 2800);
          } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Something went wrong");
          } finally {
            setPending(false);
          }
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-xs font-medium text-zinc-600">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="text-xs font-medium text-zinc-600"
            >
              Clinic / company
            </label>
            <input
              id="company"
              name="company"
              className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
              placeholder="Optional"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-medium text-zinc-600">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            placeholder="you@clinic.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="text-xs font-medium text-zinc-600"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1.5 w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            placeholder="Tell us about branches, panel volume, dispensing, or migration timeline."
          />
        </div>
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-500 disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
      </form>
    </>
  );
}
