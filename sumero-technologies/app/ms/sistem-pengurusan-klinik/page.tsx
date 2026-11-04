import { ClinicLandingPage } from "@/components/marketing/ClinicLandingPage";
import { clinicContent } from "@/lib/clinic-content";
import { CLINIC_PAGES, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  ...clinicContent.ms,
  path: CLINIC_PAGES.ms,
  locale: "ms",
  alternates: CLINIC_PAGES,
});
export default function Page() {
  return <ClinicLandingPage locale="ms" />;
}
