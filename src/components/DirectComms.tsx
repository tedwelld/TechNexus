import Link from "next/link";
import { COMPANY, INFO_DESK, buildQuickContactMessage, mailtoUrl, whatsappUrl } from "@/lib/site";
import { PiIcon } from "./PiIcon";

export function DirectComms({ compact = false }: { compact?: boolean }) {
  const emailMsg = buildQuickContactMessage("email");
  const waMsg = buildQuickContactMessage("whatsapp");

  return (
    <div className={compact ? "space-y-3" : "card space-y-5 p-6"}>
      {!compact && (
        <div>
          <h3 className="font-display text-xl font-bold">Contact the team</h3>
          <p className="mt-1 text-sm text-muted">
            Use the project enquiry form for a full brief, or message the
            information desk directly.
          </p>
        </div>
      )}

      <div className="rounded-xl border border-border bg-[var(--panel-bg)] p-4">
        <p className="font-display font-bold">{INFO_DESK.label}</p>
        <p className="text-xs text-muted">{COMPANY.name}</p>
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
            href={whatsappUrl(INFO_DESK.whatsappE164, waMsg.body)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full text-sm"
          >
            <PiIcon name="whatsapp" />
            WhatsApp
          </a>
          <a
            href={mailtoUrl(emailMsg.subject, emailMsg.body, INFO_DESK.email)}
            className="btn btn-secondary w-full text-sm"
          >
            <PiIcon name="envelope" />
            Email
          </a>
          <Link href="/enquiry" className="btn btn-primary w-full text-sm">
            Start a project enquiry →
          </Link>
        </div>
      </div>
    </div>
  );
}
