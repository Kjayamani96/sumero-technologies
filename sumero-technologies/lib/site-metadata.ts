import type { Metadata } from "next";
export const siteMetadata: Metadata = {
  metadataBase: new URL("https://sumerotech.com"),
  title: {
    default: "Clinic Management Software Malaysia | SUMERO HealthOS",
    template: "%s | SUMERO Technologies",
  },
  description:
    "SUMERO HealthOS clinic management software for Malaysian private clinics: registration, consultation, dispensing, billing and follow-up. Book a demo.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: { "msvalidate.01": "B84BEAE71C065B4570834CF9855A7875" },
  },
  keywords: [
    "SUMERO Technologies",
    "SUMERO HealthOS",
    "clinic management system Malaysia",
    "sistem pengurusan klinik",
    "clinic software",
    "private clinic Malaysia",
    "clinic queue system",
    "panel billing clinic",
    "pharmacy dispensing software",
  ],
  openGraph: {
    title: "SUMERO Technologies | A simpler clinic day with HealthOS",
    description:
      "Discover HealthOS by SUMERO Technologies. Clear workflows for registration, consultation, dispensing, payment and follow-up.",
    url: "https://sumerotech.com",
    siteName: "Sumero Technologies",
    images: [
      {
        url: "/social/healthos.png",
        width: 1200,
        height: 630,
        alt: "SUMERO Technologies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUMERO Technologies | A simpler clinic day with HealthOS",
    description:
      "HealthOS by SUMERO Technologies: a simpler clinic day, from registration to follow-up.",
    images: ["/social/healthos.png"],
  },
  icons: {
    icon: "/brand/sumero-favicon.png",
    apple: "/brand/sumero-favicon.png",
  },
};
