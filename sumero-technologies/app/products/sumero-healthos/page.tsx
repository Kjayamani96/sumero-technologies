import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { SumeroHealthOSContent } from "@/components/marketing/SumeroHealthOSContent";

export const metadata: Metadata = {
  title: "Clinic Management Software Malaysia | HealthOS",
  description:
    "Explore SUMERO HealthOS clinic management software for Malaysian private clinics: patients, queue, consultation, pharmacy, billing, panels, TPA claims, inventory, workforce and controlled MyInvois e-Invoice workflows.",
  alternates: { canonical: "/products/sumero-healthos" },
  openGraph: {
    title: "SUMERO HealthOS | Clinic Management Software Malaysia",
    description:
      "Connect patient registration, consultation, dispensing, billing, panel and TPA receivables, inventory, workforce and reporting in one clinic workspace.",
    url: "https://sumerotech.com/products/sumero-healthos",
  },
};

export default function SumeroHealthOSPage() {
  return (
    <MarketingShell>
      <SumeroHealthOSContent />
    </MarketingShell>
  );
}
