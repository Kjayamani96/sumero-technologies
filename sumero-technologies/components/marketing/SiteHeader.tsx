"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { CompanyLink } from "@/components/marketing/CompanyLink";

const nav = [
  { href: "/products", label: "Products" },
  { href: "/products/sumero-healthos", label: "HealthOS" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
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
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-8">
        <div className="flex min-w-0 shrink-0 items-center gap-3">
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-lg ring-1 ring-transparent transition hover:ring-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
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
          className="hidden items-center gap-1 text-[13px] font-medium text-zinc-600 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 ${
                  active
                    ? "bg-sky-50 text-sky-800"
                    : "hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 inline-flex min-h-11 items-center rounded-full bg-sky-600 px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
          >
            Book a demo
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
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
          className="border-t border-zinc-200 bg-white px-4 py-3 lg:hidden"
          aria-label="Mobile"
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
                    className={`flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 ${
                      active
                        ? "bg-sky-50 text-sky-800"
                        : "text-zinc-700 hover:bg-zinc-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex min-h-11 items-center justify-center rounded-full bg-sky-600 px-4 text-sm font-semibold text-white transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
              >
                Book a demo
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
