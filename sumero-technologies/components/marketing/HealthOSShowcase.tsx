import Image from "next/image";

export function HealthOSShowcase({
  kind = "compact-emr",
  title = "Compact EMR: room to focus on the patient.",
}: {
  kind?: string;
  title?: string;
}) {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f3f6fa] p-2 shadow-xl shadow-slate-900/5 sm:p-3">
        <a
          href={`/marketing/illustrative/${kind}.svg`}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open full-size illustration: ${title}`}
        >
          <Image
            src={`/marketing/illustrative/${kind}.svg`}
            alt={
              title + " Fictional demonstration data; illustrative interface."
            }
            width={1120}
            height={700}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 1024px) 100vw, 1000px"
          />
        </a>
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-slate-600">
        <strong className="block text-slate-900">{title}</strong>Illustrative
        interface with fictional data. Actual layouts may vary. Open the image
        for a larger view.
      </figcaption>
    </figure>
  );
}
