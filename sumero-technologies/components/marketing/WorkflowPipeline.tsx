const steps = [
  { label: "Check-in", detail: "Register or find the patient" },
  { label: "Wait", detail: "Fair queue, clear order" },
  { label: "See the doctor", detail: "Notes, scripts, letters in one visit" },
  { label: "Dispense medicine", detail: "Pharmacy prepares what was prescribed" },
  { label: "Pay", detail: "Cash, transfer, card, or company panel" },
  { label: "Review", detail: "Sales, panels, and follow-ups in one place" },
] as const;

export function WorkflowPipeline() {
  return (
    <>
      <ol className="space-y-3 sm:hidden">
        {steps.map((step, i) => (
          <li key={step.label}>
            <div className="flex gap-3">
              <div className="flex w-8 shrink-0 flex-col items-center pt-1">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] text-[11px] font-semibold text-zinc-400">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span className="mt-1 h-full min-h-[24px] w-px grow bg-white/[0.08]" />
                )}
              </div>
              <div className="min-w-0 flex-1 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                <span className="text-[15px] font-semibold text-zinc-100">
                  {step.label}
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  {step.detail}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="hidden overflow-x-auto pb-2 sm:block">
        <ol className="flex min-w-0 items-stretch gap-2 lg:gap-3">
          {steps.map((step, i) => (
            <li key={step.label} className="flex min-w-0 flex-1">
              <div className="flex w-full items-stretch gap-2 lg:gap-3">
                <div className="flex min-w-0 flex-1 flex-col rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    Step {i + 1}
                  </span>
                  <span className="mt-1.5 text-[15px] font-semibold text-zinc-100">
                    {step.label}
                  </span>
                  <span className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                    {step.detail}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <span
                    className="flex shrink-0 items-center text-zinc-600"
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
