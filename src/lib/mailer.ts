import nodemailer from "nodemailer";
import { COMPANY, INFO_DESK } from "./site";

export const SITE_URL = "https://axentratechsolutions.com";

const SMTP = {
  host: process.env.SMTP_HOST ?? "",
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === "true",
  user: process.env.SMTP_USERNAME ?? "",
  pass: process.env.SMTP_PASSWORD ?? "",
};

export const transporter = nodemailer.createTransport({
  host: SMTP.host,
  port: SMTP.port,
  secure: SMTP.secure,
  auth: SMTP.user ? { user: SMTP.user, pass: SMTP.pass } : undefined,
  tls: { rejectUnauthorized: false },
  connectionTimeout: 25_000,
  greetingTimeout: 25_000,
  socketTimeout: 25_000,
});

export const MAIL_FROM =
  process.env.MAIL_FROM ?? `${COMPANY.name} <${SMTP.user || INFO_DESK.email}>`;

/** Inbox(es) that receive website enquiries. Defaults to the info desk email. */
export const ENQUIRY_TO: string[] = (
  process.env.ENQUIRY_TO ?? INFO_DESK.email
)
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

export const MAIL_REF_LINK =
  process.env.SITE_URL ?? SITE_URL;
