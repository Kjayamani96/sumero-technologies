import { GuideIndex } from "@/components/marketing/ClinicGuides";
import { GUIDE_HUBS } from "@/lib/guide-paths";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Clinic Software Guides Malaysia | SUMERO HealthOS",
  description:
    "Understand HealthOS costs, plan clinic data migration and explore a fictional patient workflow. Practical guides for Malaysian clinic owners.",
  path: GUIDE_HUBS.en,
  alternates: GUIDE_HUBS,
});
export default function Page() {
  return <GuideIndex locale="en" />;
}
