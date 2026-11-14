import Image from "next/image";
import Link from "next/link";
import { WorkflowPipeline } from "./WorkflowPipeline";
import { HealthOSShowcase } from "./HealthOSShowcase";
import { PRICING, formatRm } from "@/lib/pricing";

const walkthrough = [
  {
    image: "registration",
    width: 1100,
    height: 550,
    title: "Register a patient",
    description: "At the front desk, open the registration form, choose the visit type and select Add To Today’s Queue.",
    alt: "HealthOS Register Patient form with General Consultation and Add To Today’s Queue selected",
  },
  {
    image: "queue",
    width: 1770,
    height: 311,
    title: "See who is waiting",
    description: "The doctor’s waiting list shows queue numbers, visit reasons and priorities so the team can see who is next.",
    alt: "HealthOS waiting list with two fictional patients, queue numbers and visit priorities",
  },
  {
    image: "consultation",
    width: 1860,
    height: 374,
    title: "Document the consultation",
    description: "The doctor records encounter notes and a diagnosis, then adds services and medicines for the visit.",
    alt: "HealthOS encounter notes beside the diagnosis and services panels, using a fictional case",
  },
  {
    image: "dispensary",
    width: 1752,
    height: 557,
    title: "Review medicines and move to checkout",
    description: "Dispensary staff check instructions and quantities, prepare labels and move to checkout to collect payment.",
    alt: "HealthOS medicine review showing prescription directions, stock, label status and the checkout step",
  },
];

const workflows = [
  {
    title: "Register and welcome patients",
    kind: "registration",
    intro: "A clear start for the front desk.",
    points: [
      "Choose Compact Workspace, Guided Registration or Classic to suit your team.",
      "Import patient details and a photo with a compatible MyKad reader connected to a Windows computer. Staff review the information before saving.",
      "Save & Add To Queue keeps the next step close. Patient profiles and photos stay accessible to authorised staff.",
    ],
  },
  {
    title: "Consult with a focused workspace",
    kind: "compact-emr",
    intro: "More space for the current consultation.",
    points: [
      "Choose Compact EMR or an alternative layout in settings. Use a focused, wide workspace for the visit.",
      "Write consultation notes, use optional structured SOAP, record diagnoses and reuse templates or service packages.",
      "Review patient history and clinical images, use the body map, and prepare medical certificates or referrals.",
    ],
  },
  {
    title: "Dispense medicines and collect payment",
    kind: "dispensary",
    intro: "See what needs attention next.",
    points: [
      "Choose Queue & Workspace or Classic. Move through To Dispense, Awaiting Payment and Completed Today.",
      "Review medicines and prescription instructions, print labels and complete checkout.",
      "Choose several medicine-label formats and itemised or total-only receipts, with clinic branding and secure, expiring patient receipt links. Dark mode is available.",
    ],
  },
  {
    title: "Follow up and understand clinic activity",
    kind: "insights",
    intro: "Keep the next action in view.",
    points: [
      "Book appointments and use daily worklists. Follow-up worklists distinguish patients needing contact, contacted patients, booked patients and completed reviews.",
      "Preview and confirm reminders, queue them for sending and review status. Sending a reminder or booking an appointment does not complete the clinical review.",
      "Explore completed consultations, recorded diagnosis trends and consultation drilldowns, new and returning patients, and medicine usage with stock-planning estimates. Selected dates and comparison periods remain clear. Insights depend on recorded clinic data.",
    ],
  },
];
const advanced = [
  [
    "Patient communication",
    "Review today’s and upcoming birthdays, prepare birthday wishes or clinic campaigns, review recipients and schedule sending. Message history, consent and opt-out controls support staff review. Availability depends on a connected clinic WhatsApp number and configuration. Sending uses a background queue; delivery timing varies. Reminder consent does not authorise marketing messages.",
  ],
  [
    "Patient feedback",
    "Share a public feedback page and QR code, optionally include a feedback QR on receipts, and offer an optional Google Review link. Patients choose what feedback to share.",
  ],
  [
    "Inventory and purchasing",
    "Manage inventory, batches, expiry monitoring, adjustments, suppliers and purchasing. Review medicine usage and planning estimates using the clinic’s recorded data.",
  ],
  [
    "Panels, teams and specialist work",
    "Track panel receivables and TPA claims, workforce attendance, rosters and leave, occupational health worklists and case workflows, and lab results and referrals.",
  ],
  [
    "Migration and group clinics",
    "Discuss migration support and group clinic arrangements. Branch access and rollout capabilities depend on agreed scope and setup.",
  ],
  [
    "e-Invoice activation",
    "Availability depends on clinic assessment, configuration, authorisation, testing and activation. Normal receipts remain separate from e-Invoice activation. Confirm scope and charges with our team.",
  ],
];
export const healthOSFaqs = [
  [
    "Will the workspace feel overwhelming?",
    "Start with the four everyday stages. Choose registration, consultation and dispensary layouts in settings, and explore specialist capabilities as your team needs them.",
  ],
  [
    "What does MyKad import need?",
    "A compatible MyKad reader connected to a Windows computer. Our team helps arrange the reader software and connection during setup. Staff review imported patient details and photos before saving. Ask us to confirm reader compatibility.",
  ],
  [
    "Can I use ordinary receipts before e-Invoice activation?",
    "Yes. Normal receipts are separate. e-Invoice requires clinic assessment, configuration, authorisation, testing and activation.",
  ],
  [
    "When is a follow-up complete?",
    "When the clinical review is completed. A queued reminder, sent message or booked appointment does not complete the review.",
  ],
  [
    "Are all these capabilities in every plan?",
    "Plan cards list existing entitlements. Confirm the allocation and setup of newer capabilities with SUMERO before purchase, including MyKad import, follow-ups, communication, feedback, insights and specialist worklists.",
  ],
  [
    "How do I request a trial?",
    "Use the contact form to request a demo or discuss a trial. The team will confirm availability and terms for your clinic.",
  ],
];
export function SumeroHealthOSContent() {
  return (
    <>
      <section className="health-hero border-b border-slate-200">
        <div className="site-section">
          <p className="eyebrow">SUMERO Technologies · Flagship product</p>
          <Image
            src="/brand/sumero-healthos-horizontal.png"
            alt="SUMERO HealthOS"
            width={2172}
            height={724}
            className="mt-5 h-auto w-[260px] max-w-full"
            priority
          />
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            A simpler clinic day,
            <br className="hidden sm:block" /> from registration to follow-up.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            SUMERO HealthOS is web-based software for Malaysian private clinics.
            Front-desk staff register patients and manage the queue, doctors
            record consultations in the EMR, and dispensary staff review
            medicines, print labels and collect payments.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Essential starts at {formatRm(PRICING.essential.monthly)} per clinic per month;
            Professional is {formatRm(PRICING.professional.monthly)}. One-time onboarding
            and optional services are separate. Read the clinic software guide in{" "}
            <Link className="text-blue-700 underline" href="/clinic-management-system-malaysia">English</Link>{" "}
            or <Link className="text-blue-700 underline" href="/ms/sistem-pengurusan-klinik" hrefLang="ms-MY" lang="ms">Bahasa Malaysia</Link>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="primary-cta" href="/contact">
              Book a demo
            </Link>
            <Link className="secondary-cta" href="#walkthrough">
              See the clinic walkthrough
            </Link>
          </div>
        </div>
      </section>
      <section id="walkthrough" className="site-section scroll-mt-28">
        <h2 className="section-title">See a clinic visit in HealthOS</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Follow the handoff from the front desk to the doctor and dispensary.
          These screenshots show the HealthOS demo workspace with fictional
          patient data. Select any screenshot to view it at full size.
        </p>
        <ol className="mt-8 space-y-8">
          {walkthrough.map((step) => {
            const src = `/marketing/walkthrough/${step.image}.webp`;
            return (
              <li key={step.image} className="min-w-0">
                <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <figcaption className="p-5 sm:p-6">
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 max-w-3xl leading-7 text-slate-600">{step.description}</p>
                  </figcaption>
                  <a
                    href={src}
                    aria-label={`View full-size screenshot: ${step.title}`}
                    className="block border-t border-slate-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-700"
                  >
                    <Image
                      src={src}
                      alt={step.alt}
                      width={step.width}
                      height={step.height}
                      sizes="(max-width: 768px) 100vw, 1120px"
                      className="h-auto w-full"
                    />
                  </a>
                </figure>
              </li>
            );
          })}
        </ol>
        <p className="mt-8 max-w-3xl leading-7 text-slate-600">
          For a single branch with up to two doctors and eight staff accounts,
          Essential starts at {formatRm(PRICING.essential.monthly)} per clinic
          per month, with a separate onboarding fee.{" "}
          <Link href="/pricing" className="font-semibold text-blue-700 underline">
            Compare pricing and included features
          </Link>
          .
        </p>
      </section>
      <section className="site-section">
        <p className="eyebrow">The everyday clinic journey</p>
        <h2 className="section-title">Four stages. A clearer day.</h2>
        <div className="mt-8">
          <WorkflowPipeline />
        </div>
      </section>
      {workflows.map((step, index) => (
        <section
          key={step.kind}
          className={`border-t border-slate-200 ${index % 2 === 0 ? "bg-[#f3f6fa]" : "bg-white"}`}
        >
          <div className="site-section grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow">0{index + 1} · Everyday workflow</p>
              <h2 className="section-title">{step.title}</h2>
              <p className="mt-4 text-lg text-slate-600">{step.intro}</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                {step.points.map((point) => (
                  <li key={point} className="border-l-2 border-blue-200 pl-4">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <HealthOSShowcase kind={step.kind} title={step.title} />
          </div>
        </section>
      ))}
      <section className="site-section">
        <p className="eyebrow">Small details, everyday comfort</p>
        <h2 className="section-title">Print clearly. Work comfortably.</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <HealthOSShowcase
            kind="printing"
            title="Medicine labels and receipts, with choices that suit your clinic."
          />
          <HealthOSShowcase
            kind="dark-mode"
            title="Dark mode for the dispensary workspace."
          />
        </div>
      </section>
      <section className="border-y border-slate-200 bg-[#f3f6fa]">
        <div className="site-section">
          <p className="eyebrow">When your clinic needs more</p>
          <h2 className="section-title">Explore one capability at a time.</h2>
          <p className="mt-4 max-w-2xl text-slate-600 leading-7">
            Start with the daily workflow. Open a topic to see the supporting
            tools. Plan availability and setup are confirmed for your clinic.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {advanced.map(([title, body]) => (
              <details
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer font-semibold">
                  {title}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="site-section">
        <p className="eyebrow">Thoughtful access</p>
        <h2 className="section-title">
          The right information for the right role.
        </h2>
        <p className="mt-5 max-w-3xl text-slate-600 leading-8">
          Role-based access, audit history and masked shared-screen details help
          teams handle sensitive information. Authorised staff can archive and
          restore patient profiles. Permanent patient deletion is owner-only.
        </p>
        <Link
          className="mt-5 inline-block font-semibold text-blue-700 underline"
          href="/security"
        >
          Read about security and access
        </Link>
      </section>
      <section className="border-t border-slate-200 bg-[#f3f6fa]">
        <div className="site-section">
          <p className="eyebrow">Common questions</p>
          <h2 className="section-title">A few things you may be wondering.</h2>
          <div className="mt-8 space-y-3">
            {healthOSFaqs.map(([q, a]) => (
              <details
                key={q}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-semibold">{q}</summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="site-section">
        <div className="rounded-3xl bg-[#0b1026] p-8 text-white sm:p-12">
          <h2 className="text-3xl font-semibold">
            See your clinic day in HealthOS.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-300">
            Bring your everyday workflow. We’ll walk through the screens your
            team would use and discuss demo or trial arrangements.
          </p>
          <Link className="secondary-cta mt-7" href="/contact">
            Book a demo
          </Link>
        </div>
      </section>
    </>
  );
}
