"use client";

import type { EnquiryData } from "@/lib/enquiry";
import { BUDGET_OPTIONS, TIMELINE_OPTIONS } from "@/lib/enquiry";

export function StepTimelineBudget({
  data,
  update,
}: {
  data: EnquiryData;
  update: (updates: Partial<EnquiryData>) => void;
}) {
  return (
    <div>
      <h2 className="font-display mb-3 text-3xl font-bold text-foreground md:text-4xl">
        Timeline &amp; budget
      </h2>
      <p className="mb-10 text-muted">
        Approximate figures are fine — we&apos;ll refine these as we plan.
      </p>

      <div className="mb-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
          When do you want to start?
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {TIMELINE_OPTIONS.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => update({ timeline: t.value })}
              className={`rounded-xl border-2 p-4 text-center transition-all duration-300 ${
                data.timeline === t.value
                  ? "border-primary bg-primary-soft"
                  : "border-border bg-[var(--panel-bg)] hover:border-primary/40"
              }`}
            >
              <p className="font-display text-sm font-bold text-foreground">
                {t.label}
              </p>
              <p className="mt-1 text-xs text-muted">{t.desc}</p>
            </button>
          ))}
        </div>
        <label className="mt-5 flex cursor-pointer items-center gap-3">
          <button
            type="button"
            role="switch"
            aria-checked={data.flexibleTimeline}
            onClick={() =>
              update({ flexibleTimeline: !data.flexibleTimeline })
            }
            className={`flex h-6 w-12 items-center rounded-full px-1 transition-colors duration-300 ${
              data.flexibleTimeline ? "bg-primary" : "bg-surface-2"
            }`}
          >
            <span
              className={`size-4 rounded-full bg-white transition-transform duration-300 ${
                data.flexibleTimeline ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <span className="text-sm text-foreground/80">
            My timeline is flexible
          </span>
        </label>
      </div>

      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
          Approximate budget range
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {BUDGET_OPTIONS.map((b) => (
            <button
              key={b.value}
              type="button"
              onClick={() => update({ budget: b.value })}
              className={`rounded-xl border-2 p-4 text-center text-sm font-semibold transition-all duration-300 ${
                data.budget === b.value
                  ? "border-primary bg-primary-soft text-primary"
                  : "border-border bg-[var(--panel-bg)] text-foreground/80 hover:border-primary/40"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
