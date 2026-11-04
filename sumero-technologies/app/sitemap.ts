import type { MetadataRoute } from "next";
import {
  SITE_URL,
  CLINIC_PAGES,
  CONTACT_PAGES,
  languageAlternates,
} from "@/lib/seo";
// Only indexable pages. Do not claim fresh content dates on every build.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/products",
    "/products/sumero-healthos",
    "/pricing",
    "/security",
    "/terms",
    "/privacy",
    "/data-deletion",
  ];
  const localized = [CLINIC_PAGES, CONTACT_PAGES].flatMap((pair) =>
    Object.values(pair).map((path) => ({
      url: `${SITE_URL}${path}`,
      alternates: { languages: languageAlternates(pair) },
    })),
  );
  return [
    ...pages.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...localized,
  ];
}
