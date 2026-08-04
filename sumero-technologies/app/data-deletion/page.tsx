import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "Data Deletion",
  description:
    "How to request deletion of Sumero Technologies website enquiry data or Sumero HealthOS clinic workspace data.",
};

export default function DataDeletionPage() {
  return (
    <MarketingShell>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
          Legal
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Data deletion
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          Last updated: 5 August 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-600">
          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              Website enquiry data
            </h2>
            <p className="mt-3">
              If you submitted a contact or demo form on sumerotech.com and want
              that enquiry record deleted, email{" "}
              <a
                href="mailto:contact@sumerotech.com"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                contact@sumerotech.com
              </a>{" "}
              with the subject line &quot;Data deletion request&quot; and include
              the email address you used in the form. We will process legitimate
              requests within a reasonable time, subject to any legal retention
              requirements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              HealthOS clinic workspace data
            </h2>
            <p className="mt-3">
              Clinic patient and operational data inside a live Sumero HealthOS
              workspace is controlled by the customer clinic (or group). Deletion
              or export of that data is handled through the customer&apos;s
              authorised owners or administrators and the applicable customer
              agreement.
            </p>
            <p className="mt-3">
              Authorised clinic owners may request account closure and data
              deletion by contacting Sumero support or{" "}
              <a
                href="mailto:contact@sumerotech.com"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                contact@sumerotech.com
              </a>
              . We may need to verify authority before acting. Some records may
              be retained where required by law or for legitimate security and
              dispute purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              What this page is not
            </h2>
            <p className="mt-3">
              This page does not grant automatic deletion of all backups
              instantly, does not waive statutory retention duties, and does not
              replace the clinic&apos;s own obligations to patients under
              applicable privacy law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">Related</h2>
            <p className="mt-3">
              <Link
                href="/privacy"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                Privacy Policy
              </Link>
              {" · "}
              <Link
                href="/terms"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                Terms of Use
              </Link>
              {" · "}
              <Link
                href="/security"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                Security &amp; Trust
              </Link>
            </p>
          </section>
        </div>
      </article>
    </MarketingShell>
  );
}
