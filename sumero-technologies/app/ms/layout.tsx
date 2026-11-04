import { SiteDocument } from "@/components/marketing/SiteDocument";
export { siteMetadata as metadata } from "@/lib/site-metadata";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="ms-MY">{children}</SiteDocument>;
}
