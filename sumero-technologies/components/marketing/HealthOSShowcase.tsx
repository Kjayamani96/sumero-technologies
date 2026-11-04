"use client";

import { useState } from "react";
import { HealthOSDemo } from "./HealthOSDemo";

export function HealthOSShowcase({
  kind = "compact-emr",
  title = "Compact EMR: room to focus on the patient.",
}: {
  kind?: string;
  title?: string;
}) {
  const [night, setNight] = useState(kind === "dark-mode");
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f3f6fa] p-2 shadow-xl shadow-slate-900/5 sm:p-3">
        <div className="mb-2 flex items-center justify-between gap-3 px-1">
          <span className="text-xs font-medium text-slate-600">
            {night ? "Night version" : "Day version"}
          </span>
          <button
            type="button"
            aria-label={`Switch ${title} to ${night ? "day" : "night"} version`}
            aria-pressed={night}
            onClick={() => setNight((value) => !value)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 bg-white px-3 text-xs font-medium text-slate-700 transition hover:bg-blue-50"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              {night ? (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
                </>
              ) : (
                <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
              )}
            </svg>
            {night ? "Day version" : "Night version"}
          </button>
        </div>
        <HealthOSDemo kind={kind} dark={night} />
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-slate-600">
        <strong className="block text-slate-900">{title}</strong>Illustrative
        demonstration with fictional data. Actual layouts may vary. Scroll
        within the preview on smaller screens.
      </figcaption>
    </figure>
  );
}
