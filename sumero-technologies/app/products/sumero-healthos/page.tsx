import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import {
  healthOSFaqs,
  SumeroHealthOSContent,
} from "@/components/marketing/SumeroHealthOSContent";

export const metadata: Metadata = {
  title: "Clinic Management Software Malaysia | HealthOS",
  description:
    "A simpler clinic day with HealthOS: compact registration and EMR, dispensing, labels and receipts, follow-up worklists and recorded clinic insights.",
  alternates: { canonical: "/products/sumero-healthos" },
  openGraph: {
    title: "SUMERO HealthOS | Clinic Management Software Malaysia",
    description:
      "Choose focused layouts for registration, consultation and dispensing. Keep appointments, follow-ups and recorded clinic activity in view.",
    url: "https://sumerotech.com/products/sumero-healthos",
  },
};

export default function SumeroHealthOSPage() {
  return (
    <MarketingShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SUMERO HealthOS",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: "https://sumerotech.com/products/sumero-healthos",
              description:
                "Clinic workflows for registration, consultation, dispensing, payment and follow-up. Capability availability depends on plan and setup.",
              provider: {
                "@type": "Organization",
                name: "SUMERO Technologies",
                url: "https://sumerotech.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: healthOSFaqs.map(([name, text]) => ({
                "@type": "Question",
                name,
                acceptedAnswer: { "@type": "Answer", text },
              })),
            },
          ]).replace(/</g, "\\u003c"),
        }}
      />
      <SumeroHealthOSContent />
    </MarketingShell>
  );
}
