"use client";

import type { EnquiryData } from "@/lib/enquiry";
import {
  BUDGET_LABELS,
  PROJECT_TYPES,
  SERVICE_LABELS,
  TIMELINE_LABELS,
} from "@/lib/enquiry";
import { PiIcon } from "../../PiIcon";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-border py-3 last:border-0">
      <span className="shrink-0 text-sm text-muted">{label}</span>
      <span className={`text-right text-sm font-semibold ${value ? "text-foreground" : "text-muted"}`}>
        {value || "—"}
      </span>
    </div>
  );
}

export function StepReview({
  data,
  editStep,
}: {
  data: EnquiryData;
  editStep: (step: number) => void;
}) {
  const type = PROJECT_TYPES.find((p) => p.value === data.projectType)?.label;
  const services =
    data.services.length > 0
      ? data.services.map((s) => SERVICE_LABELS[s] ?? s).join(", ")
      : "To be discussed";

  return (
    <div>
      <h2 className="font-display mb-3 text-3xl font-bold text-foreground md:text-4xl">
        Review your enquiry
      </h2>
      <p className="mb-10 text-muted">
        Take a quick look. We&apos;ll be in touch within 24 hours.
      </p>

      <div className="rounded-xl border border-border bg-[var(--panel-bg)] p-5">
        <Row label="Project type" value={type ?? ""} />
        <Row label="Services" value={services} />
        <Row
          label="Timeline"
          value={data.flexibleTimeline ? "Flexible" : TIMELINE_LABELS[data.timeline] ?? ""}
        />
        <Row label="Budget" value={BUDGET_LABELS[data.budget] ?? ""} />
        <Row label="Full name" value={data.fullName} />
        <Row label="Company" value={data.company} />
        <Row label="Email" value={data.email} />
        <Row label="Phone" value={data.phone} />
        <Row label="Preferred contact" value={data.preferredContact} />
      </div>

      {data.details && (
        <div className="mt-5">
          <p className="mb-2 text-sm font-semibold text-foreground">
            Project details
          </p>
          <p className="whitespace-pre-wrap rounded-xl border border-border bg-surface p-4 text-sm leading-relaxed text-foreground/85">
            {data.details}
          </p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          ["Project type", 0],
          ["Services", 1],
          ["Timeline & budget", 2],
          ["Your details", 3],
        ].map(([label, step]) => (
          <button
            key={step as number}
            type="button"
            onClick={() => editStep(step as number)}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[var(--panel-bg)] px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-primary/40 hover:text-primary"
          >
            <PiIcon name="pencil" size="sm" />
            {label as string}
          </button>
        ))}
      </div>
    </div>
  );
}
