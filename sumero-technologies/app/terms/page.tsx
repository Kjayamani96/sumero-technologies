import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Sumero Technologies public website and Sumero HealthOS enquiries.",
};

export default function TermsPage() {
  return (
    <MarketingShell>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
          Legal
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          Last updated: 5 August 2026
        </p>

        <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-zinc-600">
          <section>
            <h2 className="text-lg font-semibold text-zinc-900">1. Who we are</h2>
            <p className="mt-3">
              This website is operated by Sumero Technologies (&quot;Sumero&quot;,
              &quot;we&quot;, &quot;us&quot;). Sumero HealthOS is our clinic
              operations software product. These terms apply to use of this public
              website and related enquiry forms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              2. Informational website
            </h2>
            <p className="mt-3">
              Content on this website is provided for general information about
              Sumero HealthOS and Sumero Technologies. Product descriptions,
              pricing and feature lists may change. A signed commercial agreement
              governs any paid subscription or implementation engagement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              3. No professional advice
            </h2>
            <p className="mt-3">
              Nothing on this website constitutes medical, legal, accounting or
              regulatory advice. Clinics remain responsible for their own
              clinical, employment and compliance obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              4. Enquiries and demos
            </h2>
            <p className="mt-3">
              Submitting a contact or demo form does not create a contract for
              software services. We may contact you using the details you provide
              to discuss HealthOS. Submitting a form does not subscribe you to
              marketing messages beyond that operational contact.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              5. Acceptable use
            </h2>
            <p className="mt-3">
              You must not misuse this website, attempt unauthorised access to
              systems or accounts, or submit false or abusive content through our
              forms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              6. Intellectual property
            </h2>
            <p className="mt-3">
              Website content, branding and software materials remain the property
              of Sumero Technologies or its licensors. You may not copy or reuse
              them for commercial purposes without permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">
              7. Limitation of liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by applicable law, Sumero is not
              liable for loss arising from reliance on public website content
              alone. Paid service liability is defined in the relevant customer
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">8. Changes</h2>
            <p className="mt-3">
              We may update these terms from time to time. The version published
              on this page is the current version for website use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">9. Contact</h2>
            <p className="mt-3">
              Questions about these terms:{" "}
              <a
                href="mailto:contact@sumerotech.com"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                contact@sumerotech.com
              </a>
              . See also our{" "}
              <Link href="/privacy" className="font-medium text-sky-700 hover:text-sky-600">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/data-deletion"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                Data deletion
              </Link>{" "}
              page.
            </p>
          </section>
        </div>
      </article>
    </MarketingShell>
  );
}
