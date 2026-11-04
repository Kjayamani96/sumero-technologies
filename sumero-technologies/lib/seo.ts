import type { Metadata } from "next";

export const SITE_URL = "https://sumerotech.com";
export const CLINIC_PAGES = {
  en: "/clinic-management-system-malaysia",
  ms: "/ms/sistem-pengurusan-klinik",
} as const;
export type SiteLocale = keyof typeof CLINIC_PAGES;
export const CONTACT_PAGES = { en: "/contact", ms: "/ms/hubungi" } as const;
export function languageAlternates(pages: Record<SiteLocale, string>) {
  return {
    "en-MY": `${SITE_URL}${pages.en}`,
    "ms-MY": `${SITE_URL}${pages.ms}`,
    "x-default": `${SITE_URL}${pages.en}`,
  };
}
export function pageMetadata({
  title,
  description,
  path,
  locale = "en",
  alternates,
}: {
  title: string;
  description: string;
  path: string;
  locale?: SiteLocale;
  alternates?: Record<SiteLocale, string>;
}): Metadata {
  const image = {
    url: "/social/healthos.png",
    width: 1200,
    height: 630,
    alt: "SUMERO HealthOS — Clinic management software for Malaysia",
  };
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      ...(alternates ? { languages: languageAlternates(alternates) } : {}),
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "SUMERO Technologies",
      locale: locale === "ms" ? "ms_MY" : "en_MY",
      ...(alternates
        ? { alternateLocale: [locale === "ms" ? "en_MY" : "ms_MY"] }
        : {}),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
