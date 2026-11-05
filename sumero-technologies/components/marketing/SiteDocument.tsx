import { Inter, Poppins } from "next/font/google";
import { SITE_URL, jsonLd } from "@/lib/seo";
import "@/app/globals.css";

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

export function SiteDocument({
  children,
  lang = "en-MY",
}: Readonly<{
  children: React.ReactNode;
  lang?: string;
}>) {
  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} ${poppins.variable} min-h-screen bg-white font-sans text-slate-950 antialiased`}
      >
        <script
          id="sumero-organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: "SUMERO TECHNOLOGIES",
                  legalName: "SUMERO TECHNOLOGIES",
                  alternateName: "SUMERO Technologies",
                  url: SITE_URL,
                  logo: `${SITE_URL}/brand/sumero-technologies-horizontal.png`,
                  email: "support@sumerotech.com",
                  areaServed: { "@type": "Country", name: "Malaysia" },
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  name: "SUMERO Technologies",
                  alternateName: "SUMERO HealthOS",
                  url: SITE_URL,
                  publisher: { "@id": `${SITE_URL}/#organization` },
                  inLanguage: ["en-MY", "ms-MY"],
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
