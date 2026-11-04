import Image from "next/image";
import Link from "next/link";

export function SiteFooter({ locale = "en" }: { locale?: "en" | "ms" }) {
  if (locale === "ms")
    return (
      <footer className="bg-[#0b1026] text-white">
        <div className="site-section">
          <Image
            src="/brand/sumero-technologies-white.png"
            alt="SUMERO Technologies"
            width={2172}
            height={724}
            className="h-auto w-52"
          />
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            HealthOS oleh SUMERO Technologies membantu klinik swasta
            menghubungkan pendaftaran, konsultasi, pendispensan, pembayaran dan
            susulan.
          </p>
          <nav
            aria-label="Pautan pengaki"
            className="mt-7 flex flex-wrap gap-5 text-sm"
          >
            <Link href="/ms/sistem-pengurusan-klinik">
              Sistem pengurusan klinik
            </Link>
            <Link href="/ms/hubungi">Tempah demo</Link>
            <Link href="/ms/panduan">Panduan klinik</Link>
            <Link href="/pricing" hrefLang="en-MY">
              Harga penuh (English)
            </Link>
            <Link href="/privacy" hrefLang="en-MY">
              Privasi (English)
            </Link>
            <Link href="/terms" hrefLang="en-MY">
              Terma (English)
            </Link>
          </nav>
          <a
            href="mailto:support@sumerotech.com"
            className="mt-7 inline-block text-sm text-cyan-200"
          >
            support@sumerotech.com
          </a>
          <p className="mt-7 text-xs text-slate-400">
            © {new Date().getFullYear()} SUMERO Technologies. Hak cipta
            terpelihara.
          </p>
        </div>
      </footer>
    );

  return (
    <footer className="bg-[#0b1026] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="max-w-sm space-y-5 lg:col-span-1">
            <Image
              src="/brand/sumero-technologies-white.png"
              alt="SUMERO Technologies"
              width={2172}
              height={724}
              className="h-auto w-[210px]"
            />
            <p className="text-sm leading-relaxed text-slate-300">
              We design and build practical technology products that simplify
              complex operations and connect the way teams work.
            </p>
          </div>
          <div className="space-y-4 text-sm">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Products
            </p>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <Link href="/guides" className="transition hover:text-white">
                  Clinic guides
                </Link>
              </li>
              <li>
                <Link
                  href="/products/sumero-healthos"
                  className="transition hover:text-white"
                >
                  HealthOS
                </Link>
              </li>
              <li>
                <Link
                  href="/clinic-management-system-malaysia"
                  className="transition hover:text-white"
                >
                  For Malaysian clinics
                </Link>
              </li>
              <li>
                <Link
                  href="/ms/sistem-pengurusan-klinik"
                  hrefLang="ms-MY"
                  lang="ms"
                  className="transition hover:text-white"
                >
                  Bahasa Malaysia
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition hover:text-white">
                  Product portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition hover:text-white">
                  HealthOS pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-sm">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Company
            </p>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <Link href="/#about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#technology"
                  className="transition hover:text-white"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="transition hover:text-white">
                  Staff sign in
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-sm">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Trust &amp; legal
            </p>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <Link href="/security" className="transition hover:text-white">
                  Security &amp; Trust
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/data-deletion"
                  className="transition hover:text-white"
                >
                  Data deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SUMERO Technologies. All rights
            reserved.
          </p>
          <a
            href="mailto:support@sumerotech.com"
            className="transition hover:text-white"
          >
            support@sumerotech.com
          </a>
        </div>
      </div>
    </footer>
  );
}
