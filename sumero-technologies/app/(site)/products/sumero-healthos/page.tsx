import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { healthOSSchema } from "@/lib/healthos-schema";
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
              ...healthOSSchema(),
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
