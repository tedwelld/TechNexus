import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { transporter, ENQUIRY_TO, MAIL_FROM } from "@/lib/mailer";
import { buildGeneralEnquiryEmail, makeRef } from "@/lib/email/templates";
import { buildGeneralEnquiryWhatsAppMessage } from "@/lib/enquiry";
import { INFO_DESK } from "@/lib/site";

const GeneralEnquirySchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "A subject is required"),
  message: z.string().min(1, "A message is required"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = GeneralEnquirySchema.parse(body);

    const ref = makeRef();
    const { subject, html } = buildGeneralEnquiryEmail(data, ref);

    await transporter.sendMail({
      from: MAIL_FROM,
      to: ENQUIRY_TO,
      replyTo: data.email,
      subject,
      html,
    });

    const whatsappMessage = buildGeneralEnquiryWhatsAppMessage(data);
    const whatsappUrl = `https://wa.me/${INFO_DESK.whatsappE164}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    return NextResponse.json({ success: true, ref, whatsappUrl }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: err.issues },
        { status: 400 },
      );
    }
    const detail = err instanceof Error ? err.message : String(err);
    console.error("General enquiry email error:", detail);
    return NextResponse.json(
      { error: "Failed to send enquiry", detail },
      { status: 500 },
    );
  }
}
