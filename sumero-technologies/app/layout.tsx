import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sumerotech.com"),
  title: {
    default: "Sumero HealthOS",
    template: "%s | Sumero Technologies",
  },
  description:
    "Sumero HealthOS helps private clinics run queue, care, pharmacy, billing, and insurer receivables in one secure workspace from Sumero Technologies.",
  keywords: [
    "Sumero HealthOS",
    "Sumero Technologies",
    "clinic software",
    "private clinic Malaysia",
    "clinic queue system",
    "panel billing clinic",
    "pharmacy dispensing software",
  ],
  openGraph: {
    title: "Sumero HealthOS | Clinic Operations Platform",
    description:
      "One workspace for reception, doctors, pharmacy, billing, and accounts, with privacy built in.",
    url: "https://sumerotech.com",
    siteName: "Sumero Technologies",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Sumero HealthOS",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumero HealthOS | Clinic Operations Platform",
    description:
      "Run the clinic day in one place, from walk-in to payment and follow-up.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 font-sans text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
