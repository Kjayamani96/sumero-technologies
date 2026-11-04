import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import {
  healthOSFaqs,
  SumeroHealthOSContent,
} from "@/components/marketing/SumeroHealthOSContent";

export const metadata: Metadata = pageMetadata({
  title: "HealthOS Features | Clinic Software Malaysia | SUMERO",
  description:
    "Explore HealthOS registration, Compact EMR, dispensing, receipts, follow-up worklists and Clinic Insights for Malaysian private clinics.",
  path: "/products/sumero-healthos",
});

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
