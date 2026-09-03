"use client";

import { useState } from "react";
import { INFO_DESK } from "@/lib/site";
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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ ref: string; whatsappUrl: string } | null>(null);

  const set = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canSubmit =
    form.fullName.trim() && form.email.trim() && form.subject.trim() && form.message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/general-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
      <div className="card space-y-5 p-8 text-center">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-primary-soft">
          <PiIcon name="check-circle" className="text-primary" size="lg" />
        </div>
        <p className="font-display text-2xl font-bold text-foreground">
          Your enquiry is with us.
        </p>
        <p className="text-muted">
          We&apos;ve received your enquiry and will be in touch within 24 hours.
          Reference: <span className="font-semibold">{result.ref}</span>
        </p>
        <a
          href={result.whatsappUrl}
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
            setResult(null);
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

      {error && (
        <p className="rounded-xl border border-red-300 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!canSubmit || submitting}
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
            Send enquiry
          </>
        )}
      </button>
      <p className="text-center text-xs text-muted">
        Sent to {INFO_DESK.email}.
      </p>
    </form>
  );
}
