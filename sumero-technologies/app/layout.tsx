import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sumerotech.com"),
  title: {
    default: "SUMERO Technologies | Technology that simplifies operations",
    template: "%s | SUMERO Technologies",
  },
  description:
    "SUMERO Technologies designs and builds intelligent software that helps organisations simplify operations, connect workflows and work better.",
  keywords: [
    "SUMERO Technologies",
    "SUMERO HealthOS",
    "business operations software",
    "enterprise software Malaysia",
    "clinic software",
    "private clinic Malaysia",
    "clinic queue system",
    "panel billing clinic",
    "pharmacy dispensing software",
  ],
  openGraph: {
    title: "SUMERO Technologies | Technology that simplifies operations",
    description:
      "We build practical technology products that connect workflows and make complex operations easier to manage.",
    url: "https://sumerotech.com",
    siteName: "Sumero Technologies",
    images: [
      {
        url: "/brand/sumero-technologies-horizontal.png",
        width: 2172,
        height: 724,
        alt: "SUMERO Technologies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUMERO Technologies | Technology that simplifies operations",
    description:
      "Practical software products designed for clear, connected operations.",
    images: ["/brand/sumero-technologies-horizontal.png"],
  },
  icons: {
    icon: "/brand/sumero-favicon.png",
    apple: "/brand/sumero-favicon.png",
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
        className={`${inter.variable} ${poppins.variable} min-h-screen bg-white font-sans text-slate-950 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
