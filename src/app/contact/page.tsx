import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { DirectComms } from "@/components/DirectComms";
import { SiteImage, IMAGES } from "@/components/SiteImage";
import { SystemOverview } from "@/components/SystemOverview";
import { CheckItem } from "@/components/ui";
import { INFO_DESK } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TechNexus via WhatsApp or email—our information desk—using ready message templates or the project form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="gradient-mesh">
        <div className="container-nx grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div className="space-y-6">
            <span className="badge">Ready to Transform?</span>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Let&apos;s Build Something{" "}
              <span className="text-primary">Exceptional.</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Tell us how your project should take shape with a short guided
              wizard, send a general enquiry, or message our information desk
              directly. Cart checkouts also land as ready-to-send briefs.
            </p>
            <ul className="grid max-w-md grid-cols-2 gap-3">
              {[
                "NDA Guaranteed",
                "Expert Consulting",
                "Transparent Workflow",
                "Quality Assurance",
              ].map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="/enquiry" className="btn btn-primary">
                Start Your Project →
              </Link>
            </div>
          </div>
          <SiteImage
            src={IMAGES.contactHero}
            alt="Team collaboration"
            className="aspect-[5/4] rounded-2xl shadow-[0_25px_50px_rgba(11,102,255,0.14)] ring-1 ring-border"
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="container-nx">
          <DirectComms />
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-nx grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold">
              Contact Information
            </h2>
            <p className="text-sm text-muted">
              Reach our information desk—the same numbers and inboxes power cart
              checkout and message templates.
            </p>
            <div className="card p-4">
              <p className="font-display font-bold">{INFO_DESK.label}</p>
              <p className="text-xs text-primary">TechNexus Agency</p>
              <p className="mt-2 text-sm">{INFO_DESK.email}</p>
              <p className="text-sm">{INFO_DESK.whatsapp}</p>
            </div>
            <div className="card p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Office / Hours
              </p>
              <p className="mt-1 text-sm font-semibold">
                123 Innovation Way, Tech City
              </p>
              <p className="text-sm text-muted">
                Mon–Fri 9:00–18:00 (CAT) · Managed clients: 24/7
              </p>
            </div>
            <Link href="/pricing" className="btn btn-secondary">
              Browse packages & add to cart →
            </Link>
          </div>
          <ContactForm />
        </div>
      </section>

      <SystemOverview dense />
    </>
  );
}
