"use client";

import type { EnquiryData } from "@/lib/enquiry";
import { PROJECT_TYPES } from "@/lib/enquiry";
import { PiIcon } from "../../PiIcon";

export function StepProjectType({
  data,
  update,
}: {
  data: EnquiryData;
  update: (updates: Partial<EnquiryData>) => void;
}) {
  return (
    <div>
      <h2 className="font-display mb-3 text-3xl font-bold text-foreground md:text-4xl">
        What do you need built?
      </h2>
      <p className="mb-10 text-muted">Choose the category that best fits your project.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PROJECT_TYPES.map((t) => {
          const selected = data.projectType === t.value;
          return (
            <button
              key={t.value}
              type="button"
              onClick={() => update({ projectType: t.value })}
              className={`group flex items-start gap-4 rounded-xl border-2 p-5 text-left transition-all duration-300 ${
                selected
                  ? "border-primary bg-primary-soft"
                  : "border-border bg-[var(--panel-bg)] hover:border-primary/40"
              }`}
            >
              <span
                className={`grid size-12 shrink-0 place-items-center rounded-lg transition-colors ${
                  selected ? "bg-primary text-white" : "bg-surface-2 text-primary"
                }`}
              >
                <PiIcon name={t.icon} size="lg" />
              </span>
              <span className="min-w-0">
                <span className="font-display block font-bold text-foreground">
                  {t.label}
                </span>
                <span className="mt-0.5 block text-sm text-muted">{t.desc}</span>
              </span>
              {selected && (
                <span className="ml-auto grid size-6 place-items-center rounded-full bg-primary text-white">
                  <PiIcon name="check" size="sm" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
