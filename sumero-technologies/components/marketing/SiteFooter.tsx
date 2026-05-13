import Link from "next/link";
import { CompanyLink } from "@/components/marketing/CompanyLink";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="max-w-xs space-y-4 lg:col-span-1">
            <p className="text-sm font-semibold text-zinc-100">Sumero HealthOS</p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Clinic operations workspace from queue through payment, pharmacy, and
              panel receivables. From{" "}
              <CompanyLink className="text-zinc-400 underline-offset-2 transition hover:text-zinc-300 hover:underline">
                Sumero Technologies
              </CompanyLink>
              .
            </p>
          </div>
          <div className="space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Product
            </p>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <Link
                  href="/products/sumero-healthos"
                  className="transition hover:text-zinc-200"
                >
                  Sumero HealthOS
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition hover:text-zinc-200">
                  All products
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Company
            </p>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <CompanyLink className="transition hover:text-zinc-200">
                  Sumero Technologies
                </CompanyLink>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-zinc-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Trust
            </p>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <Link href="/login" className="transition hover:text-zinc-200">
                  Staff sign in
                </Link>
              </li>
              <li>
                <Link href="/security" className="transition hover:text-zinc-200">
                  Security &amp; trust
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-zinc-200">
                  Book a demo
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/[0.06] pt-8 text-xs text-zinc-600">
          © {new Date().getFullYear()}{" "}
          <CompanyLink className="text-zinc-500 underline-offset-2 transition hover:text-zinc-400 hover:underline">
            Sumero Technologies
          </CompanyLink>
          . Private clinics. One workspace.
        </p>
      </div>
    </footer>
  );
}
