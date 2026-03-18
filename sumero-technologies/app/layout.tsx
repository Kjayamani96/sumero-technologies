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
  title: "Sumero Technologies | Web & Mobile App Development",
  description:
    "Sumero Technologies builds modern websites, web apps, and mobile solutions for businesses.",
  keywords: [
    "Sumero Technologies",
    "web development",
    "mobile app development",
    "website development",
    "software company",
    "Malaysia web developer",
    "Sumero Tech",
    "Sumero ",
    "sumerotech",
    ],
  openGraph: {
    title: "Sumero Technologies | Web & Mobile App Development",
    description:
      "Sumero Technologies builds modern websites, web apps, and mobile solutions for businesses.",
    url: "https://sumerotech.com",
    siteName: "Sumero Technologies",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Sumero Technologies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumero Technologies | Web & Mobile App Development",
    description:
      "Sumero Technologies builds modern websites, web apps, and mobile solutions for businesses.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}