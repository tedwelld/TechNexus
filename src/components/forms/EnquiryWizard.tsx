"use client";

import { useState } from "react";
import type { EnquiryData } from "@/lib/enquiry";
import { INITIAL_ENQUIRY } from "@/lib/enquiry";
import { INFO_DESK } from "@/lib/site";
import { EnquiryProgress } from "./EnquiryProgress";
import { StepProjectType } from "./steps/StepProjectType";
import { StepServices } from "./steps/StepServices";
import { StepTimelineBudget } from "./steps/StepTimelineBudget";
import { StepDetails } from "./steps/StepDetails";
import { StepReview } from "./steps/StepReview";
import { PiIcon } from "../PiIcon";

const TOTAL_STEPS = 5;

function canProceed(step: number, data: EnquiryData) {
  if (step === 0) return !!data.projectType;
  if (step === 3) return !!data.fullName.trim() && !!data.email.trim();
  return true;
}

export function EnquiryWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<EnquiryData>(INITIAL_ENQUIRY);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ ref: string; whatsappUrl: string } | null>(null);

  const update = (updates: Partial<EnquiryData>) =>
    setData((d) => ({ ...d, ...updates }));

  const next = () => {
    if (!canProceed(step, data)) return;
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));
  const editStep = (target: number) => setStep(target);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed");
      }
      const json = await res.json();
      setResult({ ref: json.ref, whatsappUrl: json.whatsappUrl });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setError(
        `Something went wrong: ${msg}. Please try again or contact us on WhatsApp.`,
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (result) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-8 grid size-16 place-items-center rounded-full bg-primary-soft">
          <PiIcon name="check-circle" className="text-primary" size="xl" />
        </div>
        <h2 className="font-display mb-4 text-4xl font-bold text-foreground">
          Your enquiry is with us.
        </h2>
        <p className="mx-auto mb-2 max-w-md text-muted">
          We&apos;ve received your project enquiry and will be in touch within
          24 hours. Reference: <span className="font-semibold">{result.ref}</span>
        </p>
        <p className="mx-auto mb-10 max-w-md text-muted">
          For immediate assistance, reach us on WhatsApp.
        </p>
        <a
          href={result.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp inline-flex px-8 py-4"
        >
          <PiIcon name="whatsapp" />
          Continue on WhatsApp
        </a>
        <div className="mt-6">
          <button
            type="button"
            onClick={() => {
              setResult(null);
              setStep(0);
              setData(INITIAL_ENQUIRY);
            }}
            className="text-sm text-muted hover:text-foreground"
          >
            Start another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <EnquiryProgress current={step} />

      <div className="min-h-[400px]">
        {step === 0 && <StepProjectType data={data} update={update} />}
        {step === 1 && <StepServices data={data} update={update} />}
        {step === 2 && <StepTimelineBudget data={data} update={update} />}
        {step === 3 && <StepDetails data={data} update={update} />}
        {step === 4 && <StepReview data={data} editStep={editStep} />}
      </div>

      {error && (
        <p className="mt-4 rounded-xl border border-red-300 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      {step < TOTAL_STEPS - 1 ? (
        <div className="mt-10 flex items-center justify-between border-t border-border pt-8">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="text-sm text-muted transition-colors hover:text-foreground disabled:opacity-0"
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!canProceed(step, data)}
            className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue →
          </button>
        </div>
      ) : (
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8">
          <button
            type="submit"
            disabled={submitting || !canProceed(4, data)}
            className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-40"
          >
            {submitting ? (
              <>
                <PiIcon name="spinner" className="animate-spin" />
                Sending your enquiry...
              </>
            ) : (
              <>
                <PiIcon name="send" />
                Send my enquiry
              </>
            )}
          </button>
          <p className="text-center text-xs text-muted">
            Sent to {INFO_DESK.email}.
          </p>
          <button
            type="button"
            onClick={back}
            disabled={submitting}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Back
          </button>
        </div>
      )}
    </form>
  );
}
