import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconBuilding,
  IconChart,
  IconClinical,
  IconShield,
  IconUsers,
} from "@/components/marketing/MarketingIcons";
import { LoginForm } from "@/components/marketing/LoginForm";
import { CompanyLink } from "@/components/marketing/CompanyLink";
import { COMPANY_SITE_URL } from "@/lib/company";
import { HEALTHOS_WORKSPACE_ORIGIN } from "@/lib/workspace";

export const metadata: Metadata = {
  title: "Sign in",
  description:
    "Staff sign-in for Sumero HealthOS. Continue to your secure clinic workspace.",
  robots: { index: false, follow: true },
};

const highlights = [
  {
    Icon: IconBuilding,
    title: "Multi-branch clinics",
    body: "One subscription view for owners; each branch keeps its own day-to-day workspace.",
  },
  {
    Icon: IconShield,
    title: "Role-based access",
    body: "Doctors, reception, pharmacy, and accounts see what their job requires. They do not see everything.",
  },
  {
    Icon: IconClinical,
    title: "Clinical through pharmacy",
    body: "Visits, scripts, labels, and stock checks stay on the same patient thread.",
  },
  {
    Icon: IconChart,
    title: "Operational clarity",
    body: "Collections, panel receivables, and open work surface where managers expect them.",
  },
  {
    Icon: IconUsers,
    title: "Built for busy desks",
    body: "Designed for Malaysian private clinics that mix walk-ins, appointments, and panel billing.",
  },
] as const;

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="relative flex flex-1 flex-col justify-between overflow-hidden border-b border-white/[0.06] bg-[#070d18] px-8 py-10 sm:px-12 lg:border-b-0 lg:border-r lg:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(56,189,248,0.15) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-lg ring-1 ring-transparent transition hover:ring-white/10"
            >
              <Image
                src="/icon.png"
                alt="Sumero HealthOS"
                width={40}
                height={40}
                className="rounded-xl ring-1 ring-white/10"
              />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300/90">
                  Sumero Technologies
                </p>
                <p className="text-sm font-medium text-zinc-400">
                  Healthcare operations platform
                </p>
              </div>
            </Link>
            <p className="mt-6 text-xs text-zinc-500">
              <Link
                href="/products/sumero-healthos"
                className="text-sky-400/90 hover:text-sky-300"
              >
                Sumero HealthOS
              </Link>
              <span className="text-zinc-600"> | </span>
              <CompanyLink className="text-zinc-500 hover:text-zinc-400">
                {COMPANY_SITE_URL.replace(/^https?:\/\//, "")}
              </CompanyLink>
            </p>

            <h1 className="mt-12 max-w-md text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Modern clinic operations workspace
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
              Patients, queue, visits, pharmacy, billing, panel receivables, and
              staff workflows, all structured so your team spends less time
              reconciling tools and more time on care.
            </p>

            <ul className="mt-12 max-w-md space-y-3">
              {highlights.map(({ Icon, title, body }) => (
                <li
                  key={title}
                  className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 backdrop-blur-sm"
                >
                  <span className="mt-0.5 shrink-0 text-sky-400/90">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-12 text-xs leading-relaxed text-zinc-600 lg:mt-0">
            <p>Powered by Sumero Technologies</p>
            <p className="mt-1">
              © {new Date().getFullYear()}{" "}
              <CompanyLink className="text-zinc-500 hover:text-zinc-400">
                Sumero Technologies
              </CompanyLink>
            </p>
            <p className="mt-2 font-mono text-[10px] text-zinc-700">
              Workspace: {HEALTHOS_WORKSPACE_ORIGIN.replace(/^https?:\/\//, "")}
            </p>
          </div>
        </aside>

        <main className="flex flex-1 items-center justify-center bg-zinc-100/90 px-6 py-12 sm:px-10 lg:py-16">
          <div className="w-full max-w-md">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Welcome back
            </p>
            <h2 className="mt-2 text-center text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Sign in to your clinic workspace
            </h2>
            <p className="mt-3 text-center text-sm leading-relaxed text-zinc-600">
              Secure access for authorized staff. Continue to the live HealthOS
              sign-in page for your organisation.
            </p>

            <div className="mt-10 rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-xl shadow-zinc-900/10">
              <LoginForm />
            </div>

            <div className="mt-10 border-t border-zinc-200/80 pt-8">
              <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Trust
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2">
                  <IconShield className="h-4 w-4 shrink-0 text-emerald-600/80" />
                  <span>HTTPS encryption in transit</span>
                </li>
                <li className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2">
                  <IconShield className="h-4 w-4 shrink-0 text-sky-600/80" />
                  <span>Clinic-scoped access in the product</span>
                </li>
                <li className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2">
                  <IconShield className="h-4 w-4 shrink-0 text-violet-600/70" />
                  <span>Session and password policies your admin controls</span>
                </li>
              </ul>
              <p className="mt-6 text-center text-xs leading-relaxed text-zinc-500">
                SSO, MFA, and organisation portals can plug in on the workspace as
                your clinic adopts them, without changing how staff think about
                signing in.
              </p>
            </div>

            <p className="mt-8 text-center text-sm text-zinc-600">
              <Link href="/" className="font-medium text-sky-700 hover:text-sky-600">
                ← Back to marketing site
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
