"use client";

import { PiIcon } from "../PiIcon";

const STEPS = [
  "Project Type",
  "Services",
  "Timeline & Budget",
  "Your Details",
  "Review",
];

export function EnquiryProgress({ current }: { current: number }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-0">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 items-center">
            <div className="flex w-full flex-col items-center">
              <div
                className={`flex size-9 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ${
                  i < current
                    ? "bg-primary text-white"
                    : i === current
                      ? "bg-primary text-white ring-4 ring-primary/20"
                      : "bg-surface-2 text-muted"
                }`}
              >
                {i < current ? (
                  <PiIcon name="check" size="sm" />
                ) : (
                  i + 1
                )}
              </div>
              <p
                className={`mt-2 hidden text-center text-[0.68rem] font-semibold uppercase tracking-wide transition-colors duration-300 md:block ${
                  i === current
                    ? "text-primary"
                    : i < current
                      ? "text-foreground"
                      : "text-muted"
                }`}
              >
                {label}
              </p>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`h-px flex-1 transition-all duration-500 ${
                  i < current ? "bg-primary" : "bg-surface-2"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
