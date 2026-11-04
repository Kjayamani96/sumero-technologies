import Image from "next/image";
import Link from "next/link";
import { WorkflowPipeline } from "./WorkflowPipeline";
import { HealthOSShowcase } from "./HealthOSShowcase";

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
            One clear next step for the front desk, doctor and dispensary.
            HealthOS helps private clinics keep everyday care moving, with
            layouts your team can choose.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="primary-cta" href="/contact">
              Book a demo
            </Link>
            <Link className="secondary-cta" href="/pricing">
              View pricing
            </Link>
          </div>
          <div className="mt-12">
            <HealthOSShowcase
              kind="registration"
              title="Compact registration: a clear start for the clinic day."
            />
          </div>
        </div>
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
