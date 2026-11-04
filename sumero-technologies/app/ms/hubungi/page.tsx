import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "@/components/marketing/ContactForm";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { CONTACT_PAGES, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Tempah Demo Sistem Klinik | SUMERO HealthOS Malaysia",
  description:
    "Mohon demo atau bincangkan percubaan HealthOS untuk klinik anda di Malaysia. Kongsi bilangan cawangan, proses semasa dan keperluan utama.",
  path: CONTACT_PAGES.ms,
  locale: "ms",
  alternates: CONTACT_PAGES,
});
export default function Page() {
  return (
    <MarketingShell locale="ms">
      <section className="site-section">
        <p className="eyebrow">Hubungi SUMERO</p>
        <h1 className="section-title">
          Tempah demo HealthOS untuk klinik anda.
        </h1>
        <p className="mt-5 max-w-2xl leading-8 text-slate-600">
          Beritahu kami tentang klinik, proses semasa dan keperluan utama anda.
          Kami akan menyediakan demo yang berkaitan dan membincangkan
          persediaan, pelan atau aturan percubaan.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">
              Apa yang akan dibincangkan
            </h2>
            <ul className="mt-5 list-disc space-y-4 pl-5 text-sm leading-7 text-slate-600">
              <li>
                Perjalanan pesakit: pendaftaran, konsultasi, pendispensan,
                pembayaran dan susulan.
              </li>
              <li>
                Kesesuaian pelan Essential, Professional atau Group mengikut
                keperluan klinik.
              </li>
              <li>
                Migrasi rekod, persediaan pembaca MyKad dan latihan mengikut
                skop.
              </li>
              <li>
                Ketersediaan dan terma percubaan disahkan bersama pasukan kami.
              </li>
            </ul>
            <p className="mt-8 text-sm">
              E-mel:{" "}
              <a
                href="mailto:support@sumerotech.com"
                className="text-blue-700 underline"
              >
                support@sumerotech.com
              </a>
            </p>
            <Link
              href="/ms/sistem-pengurusan-klinik"
              className="mt-6 inline-block font-semibold text-blue-700 underline"
            >
              Lihat sistem pengurusan klinik
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
            <Suspense fallback={<p role="status">Memuatkan borang…</p>}>
              <ContactForm locale="ms" />
            </Suspense>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
