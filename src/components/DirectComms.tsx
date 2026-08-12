"use client";

import { useState } from "react";
import {
  DEVELOPERS,
  MESSAGE_TEMPLATES,
  mailtoUrl,
  whatsappUrl,
} from "@/lib/site";
import { PiIcon } from "./PiIcon";

export function DirectComms({
  compact = false,
  defaultTemplateId = "intro",
}: {
  compact?: boolean;
  defaultTemplateId?: (typeof MESSAGE_TEMPLATES)[number]["id"];
}) {
  const [templateId, setTemplateId] = useState(defaultTemplateId);
  const template =
    MESSAGE_TEMPLATES.find((t) => t.id === templateId) ?? MESSAGE_TEMPLATES[0];

  return (
    <div className={compact ? "space-y-3" : "card space-y-5 p-6"}>
      {!compact && (
        <div>
          <h3 className="font-display text-xl font-bold">
            Talk directly to the developers
          </h3>
          <p className="mt-1 text-sm text-muted">
            Choose a message template, then open WhatsApp or email for Tedwell
            or Amunike.
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

      <pre className="max-h-40 overflow-auto whitespace-pre-wrap rounded-xl bg-surface p-4 text-xs leading-relaxed text-foreground/85">
        {template.body}
      </pre>

      <div className="grid gap-3 sm:grid-cols-2">
        {DEVELOPERS.map((dev) => (
          <div
            key={dev.id}
            className="rounded-xl border border-border bg-[var(--panel-bg)] p-4"
          >
            <p className="font-display font-bold">{dev.name}</p>
            <p className="text-xs text-muted">{dev.role}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-foreground/80">
              <PiIcon name="whatsapp" size="sm" className="text-whatsapp" />
              {dev.whatsapp}
            </p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-foreground/80">
              <PiIcon name="envelope" size="sm" className="text-primary" />
              {dev.email}
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={whatsappUrl(dev.whatsappE164, template.body)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full text-sm"
              >
                <PiIcon name="whatsapp" />
                WhatsApp {dev.name}
              </a>
              <a
                href={mailtoUrl(
                  `TechNexus — ${template.title}`,
                  template.body,
                  dev.email,
                )}
                className="btn btn-secondary w-full text-sm"
              >
                <PiIcon name="envelope" />
                Email {dev.name}
              </a>
            </div>
          </div>
        ))}
      </div>

      <a
        href={mailtoUrl(`TechNexus — ${template.title}`, template.body)}
        className="btn btn-primary w-full"
      >
        <PiIcon name="send" />
        Email both developers
      </a>
    </div>
  );
}
