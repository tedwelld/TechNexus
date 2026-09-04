"use client";

import { useEffect, useState } from "react";
import {
  COMPANY,
  INFO_DESK,
  buildQuickContactMessage,
  mailtoUrl,
  whatsappUrl,
} from "@/lib/site";
import { PiIcon } from "./PiIcon";

type Channel = "whatsapp" | "email" | null;

export function FloatingComms() {
  const [open, setOpen] = useState<Channel>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-[5.5rem] right-4 z-[60] flex flex-col items-end gap-3 lg:bottom-6 lg:right-6">
      {open && (
        <>
          <button
            type="button"
            aria-label="Close message chooser"
            className="pointer-events-auto fixed inset-0 z-[-1] cursor-default bg-navy/25 backdrop-blur-[1px]"
            onClick={() => setOpen(null)}
          />
          <div className="pointer-events-auto w-[min(100vw-2rem,22rem)] overflow-hidden rounded-2xl border border-border bg-[var(--panel-bg)] shadow-[0_20px_50px_rgba(7,24,51,0.25)]">
            <div
              className={`px-4 py-3 text-white ${
                open === "whatsapp" ? "bg-whatsapp" : "bg-primary"
              }`}
            >
              <p className="font-display text-sm font-bold">
                {open === "whatsapp" ? "Message on WhatsApp" : "Send an email"}
              </p>
              <p className="text-xs text-white/85">Reach our information desk</p>
            </div>

            <div className="space-y-3 p-3">
              {(() => {
                const href =
                  open === "whatsapp"
                    ? whatsappUrl(
                        INFO_DESK.whatsappE164,
                        buildQuickContactMessage("whatsapp").body,
                      )
                    : (() => {
                        const msg = buildQuickContactMessage("email");
                        return mailtoUrl(msg.subject, msg.body, INFO_DESK.email);
                      })();

                return (
                  <a
                    key={INFO_DESK.label}
                    href={href}
                    target={open === "whatsapp" ? "_blank" : undefined}
                    rel={
                      open === "whatsapp" ? "noopener noreferrer" : undefined
                    }
                    className="block rounded-2xl border border-border bg-[var(--panel-bg)] p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                    onClick={() => setOpen(null)}
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <div>
                        <p className="font-display font-bold text-foreground">
                          {INFO_DESK.label}
                        </p>
                        <p className="text-[0.7rem] text-muted">
                          {COMPANY.name}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white ${
                          open === "whatsapp" ? "bg-whatsapp" : "bg-primary"
                        }`}
                      >
                        Open
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-foreground/80">
                      {open === "whatsapp"
                        ? INFO_DESK.whatsapp
                        : INFO_DESK.email}
                    </p>
                  </a>
                );
              })()}
            </div>

            <div className="border-t border-border px-3 py-2 text-center">
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="text-xs font-semibold text-muted hover:text-foreground"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}

      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <button
          type="button"
          onClick={() => setOpen((v) => (v === "whatsapp" ? null : "whatsapp"))}
          className={`grid size-14 place-items-center rounded-full text-white shadow-lg transition hover:scale-105 ${
            open === "whatsapp"
              ? "bg-whatsapp ring-4 ring-whatsapp/30"
              : "bg-whatsapp"
          }`}
          aria-expanded={open === "whatsapp"}
          aria-label="WhatsApp our team"
        >
          <PiIcon name="whatsapp" size="xl" />
        </button>
        <button
          type="button"
          onClick={() => setOpen((v) => (v === "email" ? null : "email"))}
          className={`grid size-14 place-items-center rounded-full text-white shadow-lg transition hover:scale-105 ${
            open === "email" ? "bg-primary ring-4 ring-primary/30" : "bg-primary"
          }`}
          aria-expanded={open === "email"}
          aria-label="Email our team"
        >
          <PiIcon name="envelope" size="xl" />
        </button>
      </div>
    </div>
  );
}
