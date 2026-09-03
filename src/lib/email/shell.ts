import { COMPANY } from "@/lib/site";
import { MAIL_REF_LINK } from "@/lib/mailer";

const LOGO_URL = `${MAIL_REF_LINK}/images/logo/axentralt.png`;

export function emailShell(title: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f0f4fb;font-family:'Plus Jakarta Sans',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4fb;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background:#071833;padding:32px 40px;text-align:center;">
            <img src="${LOGO_URL}" alt="${COMPANY.name}" width="72" height="72" style="width:72px;height:72px;border-radius:50%;object-fit:contain;background:#fff;padding:6px;" />
            <h1 style="margin:12px 0 0;color:#ffffff;font-size:24px;font-weight:700;font-family:Helvetica,Arial,sans-serif;letter-spacing:-0.02em;">
              TechNexus <span style="color:#3b82f6;">Agency</span>
            </h1>
            <p style="margin:6px 0 0;color:#f59e0b;font-size:12px;font-style:italic;">
              ${COMPANY.tagline}
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#ffffff;padding:40px;">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="background:#071833;padding:24px 40px;text-align:center;">
            <p style="margin:0;color:#ffffff;font-size:11px;font-family:Helvetica,Arial,sans-serif;opacity:0.6;">
              ${COMPANY.name} · ${COMPANY.address}
            </p>
            <p style="margin:8px 0 0;font-size:11px;font-family:Helvetica,Arial,sans-serif;">
              <a href="${MAIL_REF_LINK}" style="color:#3b82f6;text-decoration:none;">axentratechsolutions.com</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function detailTable(title: string, rows: [string, string][]) {
  const rowsHtml = rows
    .map(
      ([label, value], i) => `
      <tr style="background:${i % 2 === 0 ? "#ffffff" : "#f4f7fb"};">
        <td style="padding:11px 16px;color:#5b6475;font-size:13px;font-family:Helvetica,Arial,sans-serif;width:40%;vertical-align:top;border-bottom:1px solid #e3e9f2;">${label}</td>
        <td style="padding:11px 16px;color:#121826;font-size:13px;font-family:Helvetica,Arial,sans-serif;font-weight:600;border-bottom:1px solid #e3e9f2;">${value}</td>
      </tr>`
    )
    .join("");

  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e3e9f2;border-radius:8px;overflow:hidden;margin-top:8px;">
      <tr style="background:#0b66ff;">
        <td colspan="2" style="padding:11px 16px;color:#ffffff;font-size:11px;font-family:Helvetica,Arial,sans-serif;letter-spacing:0.14em;text-transform:uppercase;font-weight:700;">${title}</td>
      </tr>
      ${rowsHtml}
    </table>`;
}

export function firstName(fullName: string) {
  return fullName.trim().split(/\s+/)[0] || "there";
}

export function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
