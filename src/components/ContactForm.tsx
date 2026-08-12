"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAILS, DEVELOPERS, mailtoUrl } from "@/lib/site";
import { PiIcon } from "./PiIcon";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Web Development",
    budget: "Not sure yet",
    contactMethod: "Email",
    description: "",
  });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = [
      `New project request from the TechNexus website`,
      "",
      `Name: ${payload.name}`,
      `Company: ${payload.company}`,
      `Work email: ${payload.email}`,
      `Phone: ${payload.phone || "—"}`,
      `Service: ${payload.service}`,
      `Budget: ${payload.budget}`,
      `Preferred contact: ${payload.contactMethod}`,
      "",
      "Project description:",
      payload.description,
    ].join("\n");

    window.location.href = mailtoUrl(
      `TechNexus project request — ${payload.name}`,
      body,
      CONTACT_EMAILS,
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card space-y-4 p-8 text-center">
        <p className="font-display text-2xl font-bold text-primary">
          Opening your email client…
        </p>
        <p className="text-muted">
          Your brief is addressed to {DEVELOPERS.map((d) => d.email).join(" & ")}.
          You can also WhatsApp a developer from the templates above.
        </p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setSubmitted(false)}
        >
          Edit & send again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6 md:p-8">
      <h2 className="font-display text-2xl font-bold">Start Your Project</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="name"
          required
          value={payload.name}
          onChange={(v) => setPayload((p) => ({ ...p, name: v }))}
        />
        <Field
          label="Company Name"
          name="company"
          required
          value={payload.company}
          onChange={(v) => setPayload((p) => ({ ...p, company: v }))}
        />
        <Field
          label="Work Email"
          name="email"
          type="email"
          required
          value={payload.email}
          onChange={(v) => setPayload((p) => ({ ...p, email: v }))}
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          value={payload.phone}
          onChange={(v) => setPayload((p) => ({ ...p, phone: v }))}
        />
        <Select
          label="Service Type"
          name="service"
          options={[
            "Web Development",
            "Software Systems",
            "Managed IT",
            "Cloud Infrastructure",
            "Mobile Application",
          ]}
          value={payload.service}
          onChange={(v) => setPayload((p) => ({ ...p, service: v }))}
        />
        <Select
          label="Estimated Budget Range"
          name="budget"
          options={[
            "Under $1,000",
            "$1,000 – $5,000",
            "$5,000 – $15,000",
            "$15,000+",
            "Not sure yet",
          ]}
          value={payload.budget}
          onChange={(v) => setPayload((p) => ({ ...p, budget: v }))}
        />
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold">
          Preferred Contact Method
        </legend>
        <div className="flex flex-wrap gap-4 text-sm">
          {["Email", "Phone Call", "WhatsApp"].map((method) => (
            <label key={method} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={payload.contactMethod === method}
                onChange={() =>
                  setPayload((p) => ({ ...p, contactMethod: method }))
                }
                className="accent-[var(--primary)]"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold">
          Project Description
        </span>
        <textarea
          name="description"
          required
          rows={5}
          value={payload.description}
          onChange={(e) =>
            setPayload((p) => ({ ...p, description: e.target.value }))
          }
          className="w-full rounded-xl border border-border bg-[var(--panel-bg)] px-3 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
          placeholder="Tell us about goals, timelines, and constraints..."
        />
      </label>

      <button type="submit" className="btn btn-primary w-full">
        <PiIcon name="send" />
        Email project request to developers
      </button>
      <p className="text-center text-xs text-muted">
        Submits via your email app to both {DEVELOPERS[0].email} and{" "}
        {DEVELOPERS[1].email}.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-[var(--panel-bg)] px-3 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold">{label}</span>
      <select
        name={name}
        className="w-full rounded-xl border border-border bg-[var(--panel-bg)] px-3 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
