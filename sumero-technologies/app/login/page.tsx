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
    body: "Owners get a consolidated view while each branch manages its own daily operations.",
  },
  {
    Icon: IconShield,
    title: "Role-based access",
    body: "Doctors, reception, pharmacy, and accounts see what their job requires. They do not see everything.",
  },
  {
    Icon: IconClinical,
    title: "Consultation to pharmacy",
    body: "Consultation notes, prescriptions, labels and stock checks stay connected to the same patient visit.",
  },
  {
    Icon: IconChart,
    title: "Operational clarity",
    body: "Managers can see collections, panel receivables and outstanding work in the right place.",
  },
  {
    Icon: IconUsers,
    title: "Built for busy desks",
    body: "Designed for Malaysian private clinics that mix walk-ins, appointments, and panel billing.",
  },
] as const;

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="relative flex flex-1 flex-col justify-between overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-sky-50 via-white to-zinc-50 px-8 py-10 sm:px-12 lg:border-b-0 lg:border-r lg:py-14">
          <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-lg ring-1 ring-transparent transition hover:ring-zinc-200"
            >
              <Image
                src="/brand/sumero-symbol.png"
                alt="SUMERO"
                width={1246}
                height={1263}
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Sumero Technologies
                </p>
                <p className="text-sm font-medium text-zinc-500">
                  Healthcare operations platform
                </p>
              </div>
            </Link>
            <p className="mt-6 text-xs text-zinc-500">
              <Link
                href="/products/sumero-healthos"
                className="text-sky-700 hover:text-sky-600"
              >
                Sumero HealthOS
              </Link>
              <span className="text-zinc-400"> | </span>
              <CompanyLink className="text-zinc-500 hover:text-zinc-700">
                {COMPANY_SITE_URL.replace(/^https?:\/\//, "")}
              </CompanyLink>
            </p>

            <h1 className="mt-12 max-w-md text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
              A modern workspace for clinic operations
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base">
              Keep patient records, queues, consultations, pharmacy, billing,
              panel receivables and staff workflows in one place, so your team
              spends less time reconciling separate systems.
            </p>

            <ul className="mt-12 max-w-md space-y-3">
              {highlights.map(({ Icon, title, body }) => (
                <li
                  key={title}
                  className="flex gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
                >
                  <span className="mt-0.5 shrink-0 text-sky-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-12 text-xs leading-relaxed text-zinc-500 lg:mt-0">
            <p>Powered by Sumero Technologies</p>
            <p className="mt-1">
              © {new Date().getFullYear()}{" "}
              <CompanyLink className="text-zinc-600 hover:text-sky-700">
                Sumero Technologies
              </CompanyLink>
            </p>
            <p className="mt-2 font-mono text-[10px] text-zinc-400">
              Workspace: {HEALTHOS_WORKSPACE_ORIGIN.replace(/^https?:\/\//, "")}
            </p>
          </div>
        </aside>

        <main className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-12 sm:px-10 lg:py-16">
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

            <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-900/5">
              <LoginForm />
            </div>

            <div className="mt-10 border-t border-zinc-200 pt-8">
              <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Trust
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-zinc-100">
                  <IconShield className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>HTTPS encryption in transit</span>
                </li>
                <li className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-zinc-100">
                  <IconShield className="h-4 w-4 shrink-0 text-sky-600" />
                  <span>Clinic-scoped access in the product</span>
                </li>
                <li className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-zinc-100">
                  <IconShield className="h-4 w-4 shrink-0 text-sky-700" />
                  <span>Session and password policies your admin controls</span>
                </li>
              </ul>
              <p className="mt-6 text-center text-xs leading-relaxed text-zinc-500">
                SSO, MFA and organisation portals can be added to the workspace
                as your clinic adopts them, without disrupting the way staff
                sign in.
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
