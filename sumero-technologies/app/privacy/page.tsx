import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sumero Technologies handles personal data collected through the public website and HealthOS enquiries.",
};

export default function PrivacyPage() {
  return (
    <MarketingShell>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
          Legal
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          Last updated: 7 August 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-600">
          <section>
            <h2 className="text-lg font-semibold text-zinc-900">1. Scope</h2>
            <p className="mt-3">
              This policy describes how Sumero Technologies (&quot;Sumero&quot;)
              handles personal data collected through the public website at
              sumerotech.com and related enquiry forms for Sumero HealthOS. It
              does not replace customer agreements that govern clinic patient
              data processed inside a live HealthOS workspace.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              2. Data we collect on this website
            </h2>
            <p className="mt-3">
              When you submit a contact or demo form, we may collect: full name,
              clinic name, work email, phone number, number of branches and
              doctors, current system, operational problem description,
              interested plan, preferred demo time, and your message.
            </p>
            <p className="mt-3">
              Our hosting and email providers may process technical logs such as
              IP address, browser type and request timestamps needed to operate
              the site securely.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              3. How we use enquiry data
            </h2>
            <p className="mt-3">
              We use enquiry data to respond to your request, prepare demos,
              discuss plan fit and onboarding, and keep records of commercial
              conversations. Submitting a form authorises Sumero to contact you
              about HealthOS. It does not automatically subscribe you to
              unrelated marketing campaigns.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              4. Sharing
            </h2>
            <p className="mt-3">
              We may share enquiry details with service providers who help us
              operate email delivery and hosting, under appropriate
              confidentiality obligations. We do not sell personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              5. Retention
            </h2>
            <p className="mt-3">
              We retain enquiry records for as long as needed to manage the
              business relationship or as required by applicable law, then delete
              or anonymise them when no longer needed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              6. Clinic patient data in HealthOS
            </h2>
            <p className="mt-3">
              When a clinic uses HealthOS, clinic-scoped operational and patient
              data is processed under the customer&apos;s instructions and
              agreement. Clinics remain responsible for lawful collection and use
              of patient information under applicable Malaysian law, including
              the Personal Data Protection Act 2010 where it applies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              7. Security
            </h2>
            <p className="mt-3">
              We apply appropriate technical and organisational measures for the
              systems we operate. See our{" "}
              <Link
                href="/security"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                Security &amp; Trust
              </Link>{" "}
              overview for a plain-language product summary. We do not claim
              third-party compliance certifications on this website unless
              separately documented.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              8. Your requests
            </h2>
            <p className="mt-3">
              You may request access, correction or deletion of personal data we
              hold about you from website enquiries by contacting{" "}
              <a
                href="mailto:support@sumerotech.com"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                support@sumerotech.com
              </a>
              . For product workspace data deletion steps, see{" "}
              <Link
                href="/data-deletion"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                Data deletion
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">9. Contact</h2>
            <p className="mt-3">
              Sumero Technologies — privacy and website enquiries:{" "}
              <a
                href="mailto:support@sumerotech.com"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                support@sumerotech.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </MarketingShell>
  );
}
