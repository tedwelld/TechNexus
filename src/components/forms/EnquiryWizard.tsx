"use client";

import { useState } from "react";
import type { EnquiryData } from "@/lib/enquiry";
import { INITIAL_ENQUIRY } from "@/lib/enquiry";
import {
  buildEnquiryEmailBody,
  buildEnquiryEmailSubject,
  buildEnquiryWhatsAppMessage,
} from "@/lib/enquiry";
import { CONTACT_EMAILS, INFO_DESK } from "@/lib/site";
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
  const [submitted, setSubmitted] = useState(false);

  const update = (updates: Partial<EnquiryData>) =>
    setData((d) => ({ ...d, ...updates }));

  const next = () => {
    if (!canProceed(step, data)) return;
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));
  const editStep = (target: number) => setStep(target);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = buildEnquiryEmailSubject(data);
    const body = buildEnquiryEmailBody(data);
    window.location.href = `mailto:${CONTACT_EMAILS}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    const waMessage = buildEnquiryWhatsAppMessage(data);
    const waHref = `https://wa.me/${INFO_DESK.whatsappE164}?text=${encodeURIComponent(
      waMessage,
    )}`;
    return (
      <div className="text-center">
        <div className="mx-auto mb-8 grid size-16 place-items-center rounded-full bg-primary-soft">
          <PiIcon name="check-circle" className="text-primary" size="xl" />
        </div>
        <h2 className="font-display mb-4 text-4xl font-bold text-foreground">
          Your enquiry is with us.
        </h2>
        <p className="mx-auto mb-10 max-w-md text-muted">
          We&apos;ve received your project enquiry and will be in touch within
          24 hours. For immediate assistance, reach us on WhatsApp.
        </p>
        <a
          href={waHref}
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
              setSubmitted(false);
              setStep(0);
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
            disabled={!canProceed(4, data)}
            className="btn btn-primary w-full"
          >
            <PiIcon name="send" />
            Send my enquiry
          </button>
          <p className="text-center text-xs text-muted">
            Opens your email app to {INFO_DESK.email}. Or continue on WhatsApp
            after sending.
          </p>
          <button
            type="button"
            onClick={back}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Back
          </button>
        </div>
      )}
    </form>
  );
}
