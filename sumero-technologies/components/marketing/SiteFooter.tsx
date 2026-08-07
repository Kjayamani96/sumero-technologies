import Link from "next/link";
import { CompanyLink } from "@/components/marketing/CompanyLink";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="max-w-xs space-y-4 lg:col-span-1">
            <p className="text-sm font-semibold text-zinc-900">
              Sumero Technologies
            </p>
            <p className="text-sm font-medium text-zinc-800">Sumero HealthOS</p>
            <p className="text-sm leading-relaxed text-zinc-600">
              A clinic operations workspace covering appointments, queues,
              consultations, dispensing, payments and management reporting.
            </p>
          </div>
          <div className="space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Product
            </p>
            <ul className="space-y-2.5 text-zinc-600">
              <li>
                <Link
                  href="/products/sumero-healthos"
                  className="transition hover:text-zinc-900"
                >
                  HealthOS
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition hover:text-zinc-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition hover:text-zinc-900">
                  All products
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Company
            </p>
            <ul className="space-y-2.5 text-zinc-600">
              <li>
                <CompanyLink className="transition hover:text-zinc-900">
                  Sumero Technologies
                </CompanyLink>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-zinc-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="transition hover:text-zinc-900">
                  Staff sign in
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Trust &amp; legal
            </p>
            <ul className="space-y-2.5 text-zinc-600">
              <li>
                <Link href="/security" className="transition hover:text-zinc-900">
                  Security &amp; Trust
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-zinc-900">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-zinc-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/data-deletion"
                  className="transition hover:text-zinc-900"
                >
                  Data deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-zinc-200 pt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()}{" "}
          <CompanyLink className="text-zinc-600 underline-offset-2 transition hover:text-sky-700 hover:underline">
            Sumero Technologies
          </CompanyLink>
          . Sumero HealthOS helps private clinics manage daily operations in one
          workspace.
        </p>
      </div>
    </footer>
  );
}
