"use client";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { validateContact } from "@/lib/contact";
const fieldClass =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 focus:border-blue-700 focus:ring-2 focus:ring-blue-100";
export function ContactForm({ locale = "en" }: { locale?: "en" | "ms" }) {
  const ms = locale === "ms";
  const t = (en: string, bm: string) => (ms ? bm : en);
  const translateError = (message: string) => {
    if (!ms) return message;
    if (message.includes("not configured"))
      return "Borang pertanyaan belum dikonfigurasi untuk penghantaran. Sila e-mel support@sumerotech.com.";
    if (message.includes("email address or phone number so"))
      return "Masukkan alamat e-mel atau nombor telefon supaya kami dapat menghubungi anda.";
    if (message.includes("check your email"))
      return "Sila semak alamat e-mel atau nombor telefon anda.";
    if (message.includes("branch count"))
      return "Masukkan bilangan cawangan antara 1 hingga 9999.";
    if (message.includes("shorten"))
      return "Sila ringkaskan maklumat anda dan cuba lagi.";
    if (message.includes("Enter your name"))
      return "Masukkan nama anda, nama klinik dan keperluan utama, serta sahkan persetujuan untuk dihubungi.";
    return "Pertanyaan anda tidak dapat disahkan. Sila cuba lagi atau e-mel support@sumerotech.com.";
  };
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
          {t("Plan interest:", "Pelan diminati:")}{" "}
          {params.get("plan")?.slice(0, 120)}
        </p>
      )}
      <div>
        <label htmlFor="clinicName" className="text-sm font-medium">
          {t("Clinic name", "Nama klinik")}
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
          {t("Contact name", "Nama untuk dihubungi")}
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
        {t(
          "Provide an email address or phone number. Either is enough.",
          "Berikan alamat e-mel atau nombor telefon. Salah satu sudah mencukupi.",
        )}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            {t("Email", "E-mel")}
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
            {t("Phone", "Telefon")}
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
          {t("Number of branches", "Bilangan cawangan")}
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
          {t("Main requirement", "Keperluan utama")}
        </label>
        <textarea
          className={fieldClass}
          id="requirement"
          name="requirement"
          rows={3}
          maxLength={2000}
          required
          placeholder={t(
            "For example: a demo of registration and consultation, or trial arrangements.",
            "Contohnya: demo pendaftaran dan konsultasi, atau aturan percubaan.",
          )}
        />
        <p className="mt-2 text-xs text-slate-600">
          {t(
            "Please leave patient information out of your enquiry.",
            "Jangan sertakan maklumat pesakit dalam pertanyaan anda.",
          )}
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
          {t(
            "I agree that SUMERO Technologies may contact me about this enquiry. See our",
            "Saya bersetuju bahawa SUMERO Technologies boleh menghubungi saya mengenai pertanyaan ini. Lihat",
          )}{" "}
          <Link href="/privacy" className="text-blue-700 underline">
            {t("Privacy Policy", "Dasar Privasi (English)")}
          </Link>
          .
        </span>
      </label>
      {error && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 p-4 text-sm leading-6 text-red-800"
        >
          {translateError(error)}
        </p>
      )}
      {success && (
        <p
          role="status"
          className="rounded-lg bg-emerald-50 p-4 text-sm leading-6 text-emerald-800"
        >
          {t(
            "Your enquiry has been submitted. The SUMERO team will contact you using the details provided.",
            "Pertanyaan anda telah diserahkan. Pasukan SUMERO akan menghubungi anda menggunakan maklumat yang diberikan.",
          )}
        </p>
      )}
      <button
        className="primary-cta disabled:opacity-60"
        type="submit"
        disabled={pending}
      >
        {pending
          ? t("Submitting…", "Sedang menyerahkan…")
          : t("Request a demo or trial", "Mohon demo atau percubaan")}
      </button>
    </form>
  );
}
