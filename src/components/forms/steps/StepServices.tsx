"use client";

import type { EnquiryData } from "@/lib/enquiry";
import { SERVICE_OPTIONS } from "@/lib/enquiry";
import { PiIcon } from "../../PiIcon";

export function StepServices({
  data,
  update,
}: {
  data: EnquiryData;
  update: (updates: Partial<EnquiryData>) => void;
}) {
  const toggle = (value: string) => {
    const current = data.services;
    const updated = current.includes(value)
      ? current.filter((s) => s !== value)
      : [...current, value];
    update({ services: updated });
  };

  const categories = ["Web", "Software", "Managed IT"];

  return (
    <div>
      <h2 className="font-display mb-3 text-3xl font-bold text-foreground md:text-4xl">
        Which services do you need?
      </h2>
      <p className="mb-10 text-muted">
        Select one or more. Not sure? Leave blank and we&apos;ll help you decide.
      </p>

      <div className="space-y-8">
        {categories.map((cat) => {
          const items = SERVICE_OPTIONS.filter((s) => s.category === cat);
          return (
            <div key={cat}>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
                {cat}
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {items.map((s) => {
                  const selected = data.services.includes(s.value);
                  return (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => toggle(s.value)}
                      className={`flex items-start gap-3 rounded-xl border-2 p-4 text-left transition-all duration-300 ${
                        selected
                          ? "border-primary bg-primary-soft"
                          : "border-border bg-[var(--panel-bg)] hover:border-primary/40"
                      }`}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="font-display block font-bold text-foreground">
                          {s.label}
                        </span>
                        <span className="mt-0.5 block text-sm text-muted">
                          {s.desc}
                        </span>
                      </span>
                      <span
                        className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full transition-colors ${
                          selected
                            ? "bg-primary text-white"
                            : "border-2 border-border text-transparent"
                        }`}
                      >
                        <PiIcon name="check" size="sm" />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
