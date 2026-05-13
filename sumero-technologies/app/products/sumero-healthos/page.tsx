import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { SumeroHealthOSContent } from "@/components/marketing/SumeroHealthOSContent";

export const metadata: Metadata = {
  title: "Platform overview",
  description:
    "Sumero HealthOS: one workspace for private clinics (queue, consultations, pharmacy, billing, insurer receivables, stock, and staff). Plain-language overview.",
  openGraph: {
    title: "Sumero HealthOS | Clinic operations",
    description:
      "See how your team moves from walk-in to payment without losing the thread.",
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
