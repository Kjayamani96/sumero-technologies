import { ClinicLandingPage } from "@/components/marketing/ClinicLandingPage";
import { clinicContent } from "@/lib/clinic-content";
import { CLINIC_PAGES, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  ...clinicContent.en,
  path: CLINIC_PAGES.en,
  locale: "en",
  alternates: CLINIC_PAGES,
});
export default function Page() {
  return <ClinicLandingPage locale="en" />;
}
