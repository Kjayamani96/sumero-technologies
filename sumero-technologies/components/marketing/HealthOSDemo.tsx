"use client";

import { useState } from "react";

type Stage = "To Dispense" | "Awaiting Payment" | "Completed Today";
const queues: Record<
  Stage,
  { name: string; ref: string; time: string; total: string }[]
> = {
  "To Dispense": [
    { name: "Alex Demo", ref: "D-014", time: "10:24 AM", total: "45.00" },
    { name: "Jamie Example", ref: "D-015", time: "10:31 AM", total: "38.00" },
    { name: "Robin Sample", ref: "D-016", time: "10:36 AM", total: "52.00" },
  ],
  "Awaiting Payment": [
    { name: "Taylor Demo", ref: "D-012", time: "10:12 AM", total: "45.00" },
    { name: "Casey Example", ref: "D-013", time: "10:18 AM", total: "38.00" },
  ],
  "Completed Today": [
    { name: "Morgan Sample", ref: "D-009", time: "9:42 AM", total: "45.00" },
    { name: "Jordan Demo", ref: "D-010", time: "9:55 AM", total: "38.00" },
    { name: "Avery Example", ref: "D-011", time: "10:04 AM", total: "52.00" },
  ],
};
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-[11px] text-slate-500">{label}</p>
      <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs leading-5 text-slate-800">
        {value}
      </div>
    </div>
  );
}
const panel = "rounded-xl border border-slate-200 bg-white p-4";
export function HealthOSDemo({
  kind,
  dark = false,
}: {
  kind: string;
  dark?: boolean;
}) {
  const [stage, setStage] = useState<Stage>("To Dispense");
  const [selected, setSelected] = useState(0);
  const patient = queues[stage][selected];
  const dispensary = kind === "dispensary" || kind === "dark-mode";
  return (
    <div
      className={`healthos-demo overflow-hidden rounded-xl border ${dark ? "demo-dark border-slate-700 bg-[#151e30] text-slate-100" : "border-slate-200 bg-[#f6f8fc] text-slate-900"}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-3 text-xs">
        <span className="font-semibold text-blue-700">
          SUMERO <span className="text-slate-700">| HealthOS</span>
        </span>
        <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-800">
          DEMO CLINIC · FICTIONAL DATA
        </span>
      </div>
      <div
        className="overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label={`${kind} fictional product demonstration, scroll for full workspace`}
      >
        <div className="min-w-[640px] p-4 sm:p-5">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-lg font-semibold">
                {dispensary
                  ? "Dispensary"
                  : kind === "registration"
                    ? "Register Patient"
                    : kind === "printing"
                      ? "Labels & Receipts"
                      : kind === "insights"
                        ? "Clinic Insights"
                        : "Consultation"}
              </p>
              <p className="mt-1 text-[11px] text-slate-500">
                {dispensary
                  ? "Review medicines · Complete dispensing · Collect payment"
                  : kind === "registration"
                    ? "Identity → Visit & payment → Save"
                    : kind === "printing"
                      ? "Demo print preview · no actual prescription or transaction"
                      : kind === "insights"
                        ? "1–7 October 2026 · Compared with 24–30 September 2026"
                        : "Current visit · Compact EMR"}
              </p>
            </div>
            <span className="rounded-md border border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-600">
              {dispensary
                ? "Queue & Workspace"
                : kind === "registration"
                  ? "Compact Workspace"
                  : kind === "printing"
                    ? "Print preview"
                    : kind === "insights"
                      ? "Selected period"
                      : "Compact EMR"}
            </span>
          </div>
          {dispensary ? (
            <>
              <div
                className="mb-4 flex gap-1 border-b border-slate-200"
                role="group"
                aria-label="Demo dispensary stages"
              >
                {(Object.keys(queues) as Stage[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={stage === s}
                    onClick={() => {
                      setStage(s);
                      setSelected(0);
                    }}
                    className={`border-b-2 px-3 py-3 text-xs ${stage === s ? "border-blue-600 font-semibold text-blue-700" : "border-transparent text-slate-500"}`}
                  >
                    {s}
                    <span className="ml-2 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-700">
                      {queues[s].length}
                    </span>
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-[180px_1fr] gap-4">
                <div>
                  <p className="mb-2 text-[11px] text-slate-500">
                    {queues[stage].length} patients · {stage}
                  </p>
                  <div className="space-y-2">
                    {queues[stage].map((p, i) => (
                      <button
                        key={p.ref}
                        type="button"
                        aria-pressed={selected === i}
                        onClick={() => setSelected(i)}
                        className={`w-full rounded-lg border p-3 text-left ${selected === i ? "border-blue-400 bg-blue-50 ring-1 ring-blue-200" : "border-slate-200 bg-white"}`}
                      >
                        <span className="flex justify-between text-[10px] text-slate-500">
                          <span>{p.ref}</span>
                          <span>{p.time}</span>
                        </span>
                        <span className="mt-2 block text-xs font-semibold text-slate-900">
                          {p.name}
                        </span>
                        <span className="mt-1 block text-[10px] text-slate-500">
                          Self-pay · RM{p.total}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className={panel} aria-live="polite">
                  <div className="flex items-start justify-between border-b border-slate-100 pb-3">
                    <div>
                      <p className="text-sm font-semibold">{patient.name}</p>
                      <p className="mt-1 text-[10px] text-slate-500">
                        {patient.ref} · Fictional visit · Dr Demo
                      </p>
                    </div>
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] text-blue-700">
                      {stage === "To Dispense"
                        ? "Medicine review"
                        : stage === "Awaiting Payment"
                          ? "Ready for checkout"
                          : "Completed"}
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-semibold">
                    {stage === "To Dispense"
                      ? "Prescription review"
                      : stage === "Awaiting Payment"
                        ? "Checkout summary"
                        : "Visit completed"}
                  </p>
                  <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
                    <div className="grid grid-cols-[1fr_60px_65px] bg-slate-50 p-2 text-[10px] text-slate-500">
                      <span>Item</span>
                      <span>Quantity</span>
                      <span>Amount</span>
                    </div>
                    <div className="grid grid-cols-[1fr_60px_65px] border-t border-slate-100 p-2 text-[11px]">
                      <span>Consultation</span>
                      <span>1</span>
                      <span>RM30.00</span>
                    </div>
                    <div className="grid grid-cols-[1fr_60px_65px] border-t border-slate-100 p-2 text-[11px]">
                      <span>
                        Example medicine
                        <span className="mt-1 block text-[10px] text-slate-500">
                          Demo directions: as prescribed
                        </span>
                      </span>
                      <span>10</span>
                      <span>RM{(Number(patient.total) - 30).toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between text-sm font-semibold">
                    <span>
                      {stage === "Completed Today" ? "Paid" : "Total"}
                    </span>
                    <span>RM{patient.total}</span>
                  </div>
                  <div className="mt-4 rounded-lg bg-slate-50 p-3 text-[11px] leading-5 text-slate-600">
                    {stage === "To Dispense"
                      ? "Check medicine, quantity and prescription instructions before printing labels and completing dispensing."
                      : stage === "Awaiting Payment"
                        ? "Medicines reviewed. Confirm the total and collect payment before completing checkout."
                        : `Payment recorded at ${patient.time}. Clinic-branded receipt prepared for this fictional visit.`}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="rounded-md bg-blue-700 px-3 py-2 text-[11px] font-semibold text-white">
                      {stage === "To Dispense"
                        ? "Review & print labels"
                        : stage === "Awaiting Payment"
                          ? "Collect payment"
                          : "View receipt"}
                    </span>
                    <span className="self-center text-[10px] text-slate-500">
                      Demo preview only
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : kind === "registration" ? (
            <div className="grid grid-cols-[1.2fr_1fr] gap-4">
              <div className={panel}>
                <div className="mb-4 rounded-lg bg-blue-50 p-3 text-[11px] leading-5 text-blue-800">
                  <strong>MyKad Reader</strong>
                  <br />
                  Review imported details and photo before saving.
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                    AD
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Alex Demo</p>
                    <p className="text-[10px] text-slate-500">
                      Fictional patient · DEMO-001
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Full name" value="Alex Demo" />
                  <Field label="Nationality" value="Malaysian" />
                  <Field label="Contact" value="Not supplied · demo" />
                  <Field label="IC / Passport" value="DEMO-001 (fictional)" />
                  <Field label="Date of birth" value="15 March 1992" />
                  <Field label="Gender" value="Male" />
                  <Field label="Age" value="34 years" />
                  <Field label="Primary doctor" value="Dr Demo" />
                </div>
              </div>
              <div className="space-y-4">
                <div className={panel}>
                  <p className="mb-3 text-xs font-semibold">
                    Today’s Visit & Queue
                  </p>
                  <div className="space-y-3">
                    <Field label="Visit pathway" value="General consultation" />
                    <Field
                      label="Reason for visit"
                      value="Follow-up consultation"
                    />
                    <Field label="Priority" value="Normal" />
                    <p className="text-[11px] text-blue-700">
                      ✓ Add to today’s queue
                    </p>
                  </div>
                </div>
                <div className={panel}>
                  <Field label="Payment arrangement" value="Self-pay" />
                  <div className="mt-3">
                    <Field
                      label="Allergy review"
                      value="No known allergies · fictional example"
                    />
                  </div>
                </div>
                <div className="rounded-lg bg-blue-700 px-4 py-3 text-center text-xs font-semibold text-white">
                  Save & Add To Queue · demo preview
                </div>
              </div>
            </div>
          ) : kind === "printing" ? (
            <div className="grid grid-cols-3 gap-4">
              {["Medicine label", "Itemised receipt", "Total-only receipt"].map(
                (label, i) => (
                  <div className={panel} key={label}>
                    <p className="text-xs font-semibold">{label}</p>
                    <div className="mt-4 border-y border-dashed border-slate-300 py-4">
                      <p className="text-sm font-semibold">
                        SUMERO Demo Clinic
                      </p>
                      <p className="mt-1 text-[10px] text-slate-500">
                        Fictional print example · DEMO-014
                      </p>
                      <p className="mt-4 text-xs font-semibold">Alex Demo</p>
                      {i === 0 ? (
                        <>
                          <p className="mt-3 text-xs">
                            Example medicine · 10 tablets
                          </p>
                          <p className="mt-2 text-[11px] leading-6">
                            Directions: as prescribed by Dr Demo.
                          </p>
                          <p className="mt-4 text-[10px] text-slate-500">
                            4 November 2026 · Demo only
                          </p>
                        </>
                      ) : (
                        <>
                          {i === 1 && (
                            <div className="mt-4 space-y-2 text-[11px]">
                              <p className="flex justify-between">
                                <span>Consultation</span>
                                <span>RM30.00</span>
                              </p>
                              <p className="flex justify-between">
                                <span>Example medicine</span>
                                <span>RM15.00</span>
                              </p>
                            </div>
                          )}
                          <p className="mt-4 flex justify-between border-t border-slate-200 pt-3 text-xs font-semibold">
                            <span>Total paid</span>
                            <span>RM45.00</span>
                          </p>
                          <p className="mt-3 text-[10px] leading-5 text-slate-500">
                            Cash · 10:24 AM
                            <br />
                            Not a real transaction
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          ) : kind === "insights" ? (
            <div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Completed consultations", "84", "78 in comparison period"],
                  ["New patients", "24", "60 returning patients"],
                  ["Medicine usage", "210 units", "Recorded usage · fictional"],
                ].map(([label, value, note]) => (
                  <div key={label} className={panel}>
                    <p className="text-[11px] text-slate-500">{label}</p>
                    <p className="mt-3 text-2xl font-semibold">{value}</p>
                    <p className="mt-2 text-[10px] text-slate-500">{note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className={panel}>
                  <p className="text-xs font-semibold">
                    Recorded diagnosis trends
                  </p>
                  {[
                    ["Follow-up examination", "28"],
                    ["Upper respiratory infection", "18"],
                    ["Hypertension", "12"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="mt-3 flex justify-between border-b border-slate-100 pb-2 text-[11px]"
                    >
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                  <p className="mt-3 text-[10px] leading-5 text-slate-500">
                    Based on recorded diagnoses, not inferred from medicine
                    sales.
                  </p>
                </div>
                <div className={panel}>
                  <p className="text-xs font-semibold">Medicine planning</p>
                  <p className="mt-3 text-[11px] leading-6 text-slate-600">
                    Review medicine usage across the selected dates.
                    Stock-planning estimates support the clinic’s purchasing
                    review.
                  </p>
                  <p className="mt-3 rounded-lg bg-blue-50 p-3 text-[10px] leading-5 text-blue-800">
                    Fictional example. Insights depend on recorded clinic data.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-[140px_1fr] gap-3">
              <div className={`${panel} row-span-2`}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  AD
                </div>
                <p className="text-sm font-semibold">Alex Demo</p>
                <p className="mt-1 text-[10px] text-slate-500">
                  DEMO-001 · 34 years
                </p>
                <p className="mt-5 text-[11px] font-semibold">
                  Patient history
                </p>
                <p className="mt-2 text-[11px] leading-6 text-slate-600">
                  28 Oct · Initial visit
                  <br />4 Nov · Follow-up
                </p>
                <p className="mt-4 text-[11px] text-slate-600">
                  Allergies: none known
                  <br />
                  Fictional example
                </p>
              </div>
              <ConsultationForm />
              <div className="col-start-2 grid grid-cols-3 gap-3">
                <div className={panel}>
                  <p className="text-xs font-semibold">Visit details</p>
                  <p className="mt-3 text-[11px] leading-6">
                    Recorded diagnosis
                    <br />
                    <strong>Follow-up examination</strong>
                  </p>
                </div>
                <div className={panel}>
                  <p className="text-xs font-semibold">Prescription</p>
                  <p className="mt-3 text-[11px] leading-6">
                    Example medicine
                    <br />
                    10 tablets
                    <br />
                    Demo directions
                  </p>
                </div>
                <div className={panel}>
                  <p className="text-xs font-semibold">Services</p>
                  <p className="mt-2 text-[11px]">Consultation · RM30.00</p>
                </div>
              </div>
            </div>
          )}
          <p className="mt-4 text-[10px] text-slate-500">
            Illustrative product demonstration · all names, visits and amounts
            are fictional · no clinic records are created
          </p>
        </div>
      </div>
    </div>
  );
}

function ConsultationForm() {
  const [saved, setSaved] = useState(false);
  const fieldClass =
    "mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs leading-5 text-slate-800";
  return (
    <form
      className={panel}
      aria-label="Fictional consultation form"
      onChange={() => setSaved(false)}
      onSubmit={(event) => {
        event.preventDefault();
        setSaved(true);
      }}
    >
      <h3 className="text-xs font-semibold">Consultation form</h3>
      <p className="mt-2 text-[10px] leading-5 text-slate-500">
        Try editing this fictional visit. Use demo information only.
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          ["Blood pressure", "120/80 mmHg"],
          ["Pulse", "72 bpm"],
          ["Temperature", "36.7 °C"],
        ].map(([label, value]) => (
          <label key={label} className="text-[10px] text-slate-500">
            {label}
            <input className={fieldClass} defaultValue={value} maxLength={40} />
          </label>
        ))}
      </div>
      <div className="mt-3 space-y-3">
        {[
          [
            "Presenting concern",
            "Routine follow-up after last week’s visit. Patient reports feeling better.",
          ],
          [
            "Examination findings",
            "Comfortable at rest. Follow-up examination recorded.",
          ],
          [
            "Assessment / diagnosis",
            "Follow-up examination; symptoms improving.",
          ],
          ["Care plan", "Discussed care plan. Review if symptoms return."],
        ].map(([label, value]) => (
          <label
            key={label}
            className="block text-[11px] font-medium text-slate-600"
          >
            {label}
            <textarea
              className={fieldClass}
              rows={2}
              defaultValue={value}
              maxLength={2000}
            />
          </label>
        ))}
      </div>
      <button
        type="submit"
        className="mt-4 min-h-11 rounded-md bg-blue-700 px-4 py-2 text-xs font-semibold text-white"
      >
        Save demo note
      </button>
      {saved && (
        <p
          role="status"
          className="mt-3 rounded-md bg-blue-50 p-2 text-[11px] text-blue-800"
        >
          Demo note confirmed in this preview only. No clinic record was saved.
        </p>
      )}
      <p className="mt-3 text-[10px] leading-5 text-slate-500">
        Fictional example, not clinical guidance. Changes reset when this page
        reloads.
      </p>
    </form>
  );
}
