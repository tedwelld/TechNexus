"use client";

import type { EnquiryData } from "@/lib/enquiry";
import { DETAILS_HINTS } from "@/lib/enquiry";
import { PiIcon } from "../../PiIcon";

const methods = ["Email", "WhatsApp", "Phone Call"] as const;

const inputCls =
  "w-full rounded-xl border border-border bg-[var(--panel-bg)] px-3 py-2.5 text-sm text-foreground outline-none ring-primary/30 placeholder:text-muted focus:ring-2";

export function StepDetails({
  data,
  update,
}: {
  data: EnquiryData;
  update: (updates: Partial<EnquiryData>) => void;
}) {
  return (
    <div>
      <h2 className="font-display mb-3 text-3xl font-bold text-foreground md:text-4xl">
        About your project
      </h2>
      <p className="mb-10 text-muted">
        Tell us what you have in mind. We&apos;ll be in touch within 24 hours.
      </p>

      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">
              Full Name <span className="text-primary">*</span>
            </span>
            <input
              type="text"
              value={data.fullName}
              required
              onChange={(e) => update({ fullName: e.target.value })}
              placeholder="Your full name"
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">
              Company Name
            </span>
            <input
              type="text"
              value={data.company}
              onChange={(e) => update({ company: e.target.value })}
              placeholder="Your company (optional)"
              className={inputCls}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">
              Work Email <span className="text-primary">*</span>
            </span>
            <input
              type="email"
              value={data.email}
              required
              onChange={(e) => update({ email: e.target.value })}
              placeholder="you@company.com"
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold">Phone</span>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => update({ phone: e.target.value })}
              placeholder="+1 234 567 8900"
              className={inputCls}
            />
          </label>
        </div>

        <div>
          <span className="mb-1.5 block text-sm font-semibold">
            Preferred contact method
          </span>
          <div className="flex flex-wrap gap-3">
            {methods.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => update({ preferredContact: m })}
                className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  data.preferredContact === m
                    ? "border-primary bg-primary-soft text-primary"
                    : "border-border bg-[var(--panel-bg)] text-foreground/80 hover:border-primary/40"
                }`}
              >
                <PiIcon
                  name={
                    m === "WhatsApp"
                      ? "whatsapp"
                      : m === "Phone Call"
                        ? "phone"
                        : "envelope"
                  }
                  size="sm"
                />
                {m}
              </button>
            ))}
          </div>
        </div>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">
            Project details / description
          </span>
          <textarea
            rows={5}
            value={data.details}
            onChange={(e) => update({ details: e.target.value })}
            placeholder="Describe your project — goals, features, integrations..."
            className={`${inputCls} resize-none`}
          />
          <span className="mt-1.5 block space-y-0.5">
            {DETAILS_HINTS.map((hint) => (
              <span key={hint} className="flex items-center gap-1.5 text-xs text-muted">
                <PiIcon name="circle-fill" size="sm" />
                {hint}
              </span>
            ))}
          </span>
        </label>
      </div>
    </div>
  );
}
