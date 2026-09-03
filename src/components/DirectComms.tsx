"use client";

import { useState } from "react";
import {
  INFO_DESK,
  MESSAGE_TEMPLATES,
  mailtoUrl,
  whatsappUrl,
} from "@/lib/site";
import { PiIcon } from "./PiIcon";

type Channel = "email" | "whatsapp";

export function DirectComms({
  compact = false,
  defaultTemplateId = "custom",
}: {
  compact?: boolean;
  defaultTemplateId?: (typeof MESSAGE_TEMPLATES)[number]["id"];
}) {
  const [templateId, setTemplateId] = useState(defaultTemplateId);
  const [channel, setChannel] = useState<Channel>("email");
  const template =
    MESSAGE_TEMPLATES.find((t) => t.id === templateId) ?? MESSAGE_TEMPLATES[0];

  const activeBody =
    channel === "email" ? template.email.body : template.whatsapp.body;
  const activeSubject =
    channel === "email" ? template.email.subject : undefined;

  return (
    <div className={compact ? "space-y-3" : "card space-y-5 p-6"}>
      {!compact && (
        <div>
          <h3 className="font-display text-xl font-bold">
            Send us a professional enquiry
          </h3>
          <p className="mt-1 text-sm text-muted">
            Pick a template and channel, customise the brief, then send via email
            or WhatsApp.
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {MESSAGE_TEMPLATES.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTemplateId(t.id)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              templateId === t.id
                ? "bg-primary text-white"
                : "bg-surface text-muted hover:text-foreground"
            }`}
          >
            {t.title}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        {(["email", "whatsapp"] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setChannel(c)}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              channel === c
                ? c === "email"
                  ? "bg-primary text-white"
                  : "bg-whatsapp text-white"
                : "bg-surface text-muted hover:text-foreground"
            }`}
          >
            <PiIcon name={c === "email" ? "envelope" : "whatsapp"} size="sm" />
            {c === "email" ? "Email template" : "WhatsApp template"}
          </button>
        ))}
      </div>

      {channel === "email" && (
        <div className="rounded-xl border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground/80">
          Subject: {activeSubject}
        </div>
      )}

      <pre className="max-h-64 overflow-auto whitespace-pre-wrap rounded-xl bg-surface p-4 text-xs leading-relaxed text-foreground/85">
        {activeBody}
      </pre>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-[var(--panel-bg)] p-4">
          <p className="font-display font-bold">{INFO_DESK.label}</p>
          <p className="text-xs text-muted">TechNexus Agency</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-foreground/80">
            <PiIcon name="whatsapp" size="sm" className="text-whatsapp" />
            {INFO_DESK.whatsapp}
          </p>
          <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-foreground/80">
            <PiIcon name="envelope" size="sm" className="text-primary" />
            {INFO_DESK.email}
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href={whatsappUrl(INFO_DESK.whatsappE164, template.whatsapp.body)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full text-sm"
            >
              <PiIcon name="whatsapp" />
              Send via WhatsApp
            </a>
            <a
              href={mailtoUrl(
                template.email.subject,
                template.email.body,
                INFO_DESK.email,
              )}
              className="btn btn-secondary w-full text-sm"
            >
              <PiIcon name="envelope" />
              Send via email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
