import Image from "next/image";
import Link from "next/link";
import { CompanyLink } from "@/components/marketing/CompanyLink";

const nav = [
  { href: "/products", label: "Products" },
  { href: "/products/sumero-healthos", label: "HealthOS" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3.5 sm:h-[4.25rem] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex min-w-0 shrink-0 items-center gap-3">
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-lg ring-1 ring-transparent transition hover:ring-zinc-200"
            aria-label="Sumero HealthOS home"
          >
            <Image
              src="/icon.png"
              alt=""
              width={36}
              height={36}
              className="rounded-lg ring-1 ring-zinc-200"
            />
          </Link>
          <div className="min-w-0 leading-tight">
            <CompanyLink className="block truncate text-sm font-semibold tracking-tight text-zinc-900 underline-offset-4 transition hover:text-sky-700 hover:underline sm:text-[15px]">
              Sumero Technologies
            </CompanyLink>
            <Link
              href="/products/sumero-healthos"
              className="mt-0.5 block text-[11px] font-medium uppercase tracking-wider text-zinc-500 transition hover:text-sky-600"
            >
              HealthOS
            </Link>
          </div>
        </div>
        <nav
          className="flex flex-wrap items-center gap-x-0.5 gap-y-2 text-[13px] font-medium text-zinc-600 sm:justify-end sm:gap-1"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 transition hover:bg-zinc-100 hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-1 rounded-full bg-sky-600 px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-sky-500 sm:ml-2"
          >
            Book a demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
