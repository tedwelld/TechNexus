"use client";

import { useState } from "react";
import { buildGeneralEnquiryEmailBody, buildGeneralEnquiryWhatsAppMessage } from "@/lib/enquiry";
import { CONTACT_EMAILS, INFO_DESK } from "@/lib/site";
import { PiIcon } from "../PiIcon";

const inputCls =
  "w-full rounded-xl border border-border bg-[var(--panel-bg)] px-3 py-2.5 text-sm text-foreground outline-none ring-primary/30 placeholder:text-muted focus:ring-2";

export function GeneralEnquiry() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canSubmit =
    form.fullName.trim() && form.email.trim() && form.subject.trim() && form.message.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = buildGeneralEnquiryEmailBody(form);
    window.location.href = `mailto:${CONTACT_EMAILS}?subject=${encodeURIComponent(
      `General Enquiry — ${form.subject}`,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    const waMessage = buildGeneralEnquiryWhatsAppMessage(form);
    const waHref = `https://wa.me/${INFO_DESK.whatsappE164}?text=${encodeURIComponent(
      waMessage,
    )}`;
    return (
      <div className="card space-y-5 p-8 text-center">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-primary-soft">
          <PiIcon name="check-circle" className="text-primary" size="lg" />
        </div>
        <p className="font-display text-2xl font-bold text-foreground">
          Your enquiry is with us.
        </p>
        <p className="text-muted">
          We&apos;ll be in touch within 24 hours. For immediate assistance, reach
          us on WhatsApp.
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp w-full"
        >
          <PiIcon name="whatsapp" />
          Continue on WhatsApp
        </a>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({ fullName: "", email: "", phone: "", subject: "", message: "" });
          }}
          className="text-sm text-muted hover:text-foreground"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">
            Full Name <span className="text-primary">*</span>
          </span>
          <input
            type="text"
            required
            value={form.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            placeholder="Your name"
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold">
            Email <span className="text-primary">*</span>
          </span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@email.com"
            className={inputCls}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold">Phone</span>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
          placeholder="+1 234 567 8900"
          className={inputCls}
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold">
          Subject <span className="text-primary">*</span>
        </span>
        <input
          type="text"
          required
          value={form.subject}
          onChange={(e) => set("subject", e.target.value)}
          placeholder="What is this about?"
          className={inputCls}
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold">
          Message <span className="text-primary">*</span>
        </span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us how we can help..."
          className={`${inputCls} resize-none`}
        />
      </label>

      <button
        type="submit"
        disabled={!canSubmit}
        className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-40"
      >
        <PiIcon name="send" />
        Send enquiry
      </button>
      <p className="text-center text-xs text-muted">
        Opens your email app to {INFO_DESK.email}.
      </p>
    </form>
  );
}
