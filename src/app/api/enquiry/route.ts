import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { transporter, ENQUIRY_TO, MAIL_FROM } from "@/lib/mailer";
import { buildEnquiryEmail, makeRef } from "@/lib/email/templates";
import { buildEnquiryWhatsAppMessage, type EnquiryData } from "@/lib/enquiry";
import { INFO_DESK } from "@/lib/site";

const EnquirySchema = z.object({
  projectType: z.string().min(1),
  services: z.array(z.string()),
  timeline: z.string().optional(),
  flexibleTimeline: z.boolean(),
  budget: z.string().optional(),
  details: z.string().optional(),
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  preferredContact: z.enum(["Email", "WhatsApp", "Phone Call"]),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = EnquirySchema.parse(body) as EnquiryData;

    const ref = makeRef();
    const { subject, html } = buildEnquiryEmail(data, ref);

    await transporter.sendMail({
      from: MAIL_FROM,
      to: ENQUIRY_TO,
      replyTo: data.email,
      subject,
      html,
    });

    const whatsappMessage = buildEnquiryWhatsAppMessage(data);
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
    console.error("Enquiry email error:", detail);
    return NextResponse.json(
      { error: "Failed to send enquiry", detail },
      { status: 500 },
    );
  }
}
