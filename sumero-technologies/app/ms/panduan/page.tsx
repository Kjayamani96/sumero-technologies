import { GuideIndex } from "@/components/marketing/ClinicGuides";
import { GUIDE_HUBS } from "@/lib/guide-paths";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Panduan Sistem Pengurusan Klinik Malaysia | SUMERO",
  description:
    "Fahami kos HealthOS, rancang migrasi data klinik dan terokai aliran pesakit rekaan. Panduan praktikal untuk pemilik klinik di Malaysia.",
  path: GUIDE_HUBS.ms,
  locale: "ms",
  alternates: GUIDE_HUBS,
});
export default function Page() {
  return <GuideIndex locale="ms" />;
}
