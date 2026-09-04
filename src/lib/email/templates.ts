import { escapeHtml, firstName, emailShell, detailTable } from "./shell";
import { COMPANY, INFO_DESK } from "@/lib/site";
import {
  PROJECT_TYPES,
  SERVICE_LABELS,
  TIMELINE_LABELS,
  BUDGET_LABELS,
} from "@/lib/enquiry";
import type { EnquiryData } from "@/lib/enquiry";

export function buildEnquiryEmail(
  data: EnquiryData,
  ref: string,
): { subject: string; html: string } {
  const type = PROJECT_TYPES.find((p) => p.value === data.projectType)?.label;
  const services =
    data.services.length > 0
      ? data.services.map((s) => SERVICE_LABELS[s] ?? s).join(", ")
      : "To be discussed";

  const rows: [string, string][] = [
    ["Reference", ref],
    ["Project type", type ?? data.projectType],
    ["Services / areas", services],
    [
      "Timeline",
      data.flexibleTimeline ? "Flexible" : TIMELINE_LABELS[data.timeline] ?? data.timeline,
    ],
    ["Budget", BUDGET_LABELS[data.budget] ?? data.budget],
    ["Full name", data.fullName],
    ["Company", data.company || "—"],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Preferred contact", data.preferredContact],
  ];

  const detailsHtml = data.details
    ? `<h3 style="margin:28px 0 8px;font-size:14px;color:#0b66ff;font-family:Helvetica,Arial,sans-serif;text-transform:uppercase;letter-spacing:0.12em;">Project details</h3>
       <p style="margin:0 0 8px;font-size:14px;color:#3a3a3a;line-height:1.7;white-space:pre-wrap;">${escapeHtml(
         data.details,
       )}</p>`
    : "";

  const html = emailShell(
    `Project enquiry — ${data.fullName}`,
    `<h2 style="margin:0 0 4px;font-size:20px;color:#071833;font-weight:700;font-family:Helvetica,Arial,sans-serif;">New project enquiry</h2>
     <p style="margin:0 0 20px;color:#3b82f6;font-size:12px;font-family:Helvetica,Arial,sans-serif;letter-spacing:0.1em;text-transform:uppercase;">Submitted via axentratechsolutions.com</p>
     ${detailTable("Enquiry overview", rows)}
     ${detailsHtml}
     <p style="margin:28px 0 0;font-size:13px;color:#5b6475;font-family:Helvetica,Arial,sans-serif;">
       Reply directly to the client at <a href="mailto:${escapeHtml(data.email)}" style="color:#0b66ff;text-decoration:none;">${escapeHtml(data.email)}</a>${data.phone ? ` or call ${escapeHtml(data.phone)}` : ""}.
     </p>`,
  );

  return {
    subject: `Project Enquiry — ${data.fullName}${type ? ` (${type})` : ""}`,
    html,
  };
}

export function buildGeneralEnquiryEmail(
  data: {
    fullName: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  },
  ref: string,
): { subject: string; html: string } {
  const rows: [string, string][] = [
    ["Reference", ref],
    ["Full name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Subject", data.subject],
  ];

  const html = emailShell(
    `General enquiry — ${data.fullName}`,
    `<h2 style="margin:0 0 4px;font-size:20px;color:#071833;font-weight:700;font-family:Helvetica,Arial,sans-serif;">${escapeHtml(
      firstName(data.fullName),
    )} sent a general enquiry</h2>
     <p style="margin:0 0 20px;color:#3b82f6;font-size:12px;font-family:Helvetica,Arial,sans-serif;letter-spacing:0.1em;text-transform:uppercase;">Submitted via axentratechsolutions.com</p>
     ${detailTable("Contact", rows)}
     <h3 style="margin:28px 0 8px;font-size:14px;color:#0b66ff;font-family:Helvetica,Arial,sans-serif;text-transform:uppercase;letter-spacing:0.12em;">Message</h3>
     <p style="margin:0 0 8px;font-size:14px;color:#3a3a3a;line-height:1.7;white-space:pre-wrap;">${escapeHtml(
       data.message,
     )}</p>
     <p style="margin:28px 0 0;font-size:13px;color:#5b6475;font-family:Helvetica,Arial,sans-serif;">
       Reply to <a href="mailto:${escapeHtml(data.email)}" style="color:#0b66ff;text-decoration:none;">${escapeHtml(data.email)}</a>.
     </p>`,
  );

  return {
    subject: `General Enquiry — ${data.fullName} (${data.subject})`,
    html,
  };
}

export function makeRef() {
  const prefix = "AXE";
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.random().toString(16).slice(2, 6).toUpperCase();
  return `${prefix}-${date}-${rand}`;
}

export { COMPANY, INFO_DESK };
