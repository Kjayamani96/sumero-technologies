import { PRICING } from "./pricing";
import { SITE_URL, type SiteLocale } from "./seo";
import { clinicContent } from "./clinic-content";

/** One product identity shared by the product page and both language pages. */
export function healthOSSchema(locale: SiteLocale = "en") {
  const c = clinicContent[locale];
  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/products/sumero-healthos#software`,
    name: "SUMERO HealthOS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE_URL}/products/sumero-healthos`,
    description: c.intro,
    featureList: c.stages.map(([title]) => title),
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: (["essential", "professional"] as const).map((plan) => ({
      "@type": "Offer",
      name: PRICING[plan].name,
      price: PRICING[plan].monthly,
      priceCurrency: "MYR",
      url: `${SITE_URL}/pricing`,
      description: `${c.per}. ${c.priceNote}`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: PRICING[plan].monthly,
        priceCurrency: "MYR",
        unitText: c.per,
        billingDuration: "P1M",
      },
    })),
  };
}
