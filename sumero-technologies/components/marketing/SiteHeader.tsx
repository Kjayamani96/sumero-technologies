"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
const englishNav = [
  { href: "/", label: "Home" },
  { href: "/products/sumero-healthos", label: "HealthOS" },
  { href: "/pricing", label: "Pricing" },
  { href: "/clinic-management-system-malaysia", label: "For clinics" },
  { href: "/#about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const malay = pathname.startsWith("/ms/");
  const nav = malay
    ? [
        { href: "/ms/sistem-pengurusan-klinik", label: "HealthOS" },
        {
          href: "/ms/sistem-pengurusan-klinik#workflow",
          label: "Aliran kerja",
        },
        { href: "/ms/sistem-pengurusan-klinik#pricing", label: "Harga" },
        { href: "/ms/sistem-pengurusan-klinik#faq", label: "Soalan lazim" },
        { href: "/ms/hubungi", label: "Hubungi" },
      ]
    : englishNav;
  const contactHref = malay ? "/ms/hubungi" : "/contact";
  const englishHref =
    pathname === "/ms/hubungi" || pathname === "/contact"
      ? "/contact"
      : "/clinic-management-system-malaysia";
  const malayHref =
    pathname === "/contact" || pathname === "/ms/hubungi"
      ? "/ms/hubungi"
      : "/ms/sistem-pengurusan-klinik";
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 shrink-0 items-center">
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008bff]/40"
            aria-label={
              malay
                ? "Laman utama SUMERO Technologies"
                : "SUMERO Technologies home"
            }
          >
            <Image
              src="/brand/sumero-technologies-horizontal.png"
              alt="SUMERO Technologies"
              width={2172}
              height={724}
              className="h-auto w-[178px] sm:w-[202px]"
              priority
            />
          </Link>
          <nav
            aria-label={malay ? "Bahasa" : "Language"}
            className="ml-3 flex gap-2 border-l border-slate-200 pl-3 text-xs font-semibold"
          >
            <Link
              href={englishHref}
              hrefLang="en-MY"
              lang="en"
              aria-label="English"
              className={malay ? "text-slate-500" : "text-blue-700 underline"}
            >
              EN
            </Link>
            <Link
              href={malayHref}
              hrefLang="ms-MY"
              lang="ms"
              aria-label="Bahasa Malaysia"
              className={malay ? "text-blue-700 underline" : "text-slate-500"}
            >
              BM
            </Link>
          </nav>
        </div>

        <nav
          className="hidden items-center gap-1 font-heading text-[13px] font-medium text-slate-600 xl:flex"
          aria-label={malay ? "Navigasi utama" : "Primary"}
        >
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008bff]/40 ${
                  active
                    ? "bg-blue-50 text-[#1d4ed8]"
                    : "hover:bg-slate-50 hover:text-[#0b1026]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={contactHref}
            className="ml-2 inline-flex min-h-11 items-center rounded-full bg-[#1d4ed8] px-5 py-2 text-[13px] font-semibold text-white shadow-sm shadow-blue-700/15 transition hover:bg-[#123fb8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008bff]/40"
          >
            {malay ? "Tempah demo" : "Book a demo"}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008bff]/40 xl:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">
            {malay
              ? open
                ? "Tutup menu"
                : "Buka menu"
              : open
                ? "Close menu"
                : "Open menu"}
          </span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id={menuId}
          className="border-t border-slate-200 bg-white px-4 py-3 xl:hidden"
          aria-label={malay ? "Navigasi mudah alih" : "Mobile"}
        >
          <ul className="space-y-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenu}
                    className={`flex min-h-11 items-center rounded-lg px-3 font-heading text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008bff]/40 ${
                      active
                        ? "bg-blue-50 text-[#1d4ed8]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href={contactHref}
                onClick={closeMenu}
                className="flex min-h-11 items-center justify-center rounded-full bg-[#1d4ed8] px-4 font-heading text-sm font-semibold text-white transition hover:bg-[#123fb8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008bff]/40"
              >
                {malay ? "Tempah demo" : "Book a demo"}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
