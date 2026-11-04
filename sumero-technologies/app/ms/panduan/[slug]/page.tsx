import { notFound } from "next/navigation";
import { ClinicGuide } from "@/components/marketing/ClinicGuides";
import { GUIDE_PATHS, type GuideId } from "@/lib/guide-paths";
import { guideContent } from "@/lib/guide-content";
import { pageMetadata } from "@/lib/seo";
const locale = "ms" as const;
const ids = Object.keys(GUIDE_PATHS) as GuideId[];
function resolve(slug: string) {
  return ids.find((id) => GUIDE_PATHS[id][locale].split("/").pop() === slug);
}
export function generateStaticParams() {
  return ids.map((id) => ({ slug: GUIDE_PATHS[id][locale].split("/").pop()! }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const id = resolve((await params).slug);
  if (!id) notFound();
  const guide = guideContent[locale][id];
  return pageMetadata({
    title: `${guide.title} | SUMERO`,
    description: guide.description,
    path: GUIDE_PATHS[id][locale],
    locale,
    alternates: GUIDE_PATHS[id],
  });
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const id = resolve((await params).slug);
  if (!id) notFound();
  return <ClinicGuide locale={locale} id={id} />;
}
