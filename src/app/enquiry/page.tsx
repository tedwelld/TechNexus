import type { Metadata } from "next";
import { EnquiryWizard } from "@/components/forms/EnquiryWizard";
import { GeneralEnquiry } from "@/components/forms/GeneralEnquiry";
import { SiteImage, IMAGES } from "@/components/SiteImage";
import { INFO_DESK } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start Your Project",
  description:
    "Tell us how you work. A short milestone guide — project type, services, timeline, budget and details — so we can propose a clear plan.",
};

export default function EnquiryPage() {
  return (
    <section className="min-h-screen">
      <div className="container-nx grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="max-w-xl">
          <span className="badge">Project enquiry</span>
          <h1 className="font-display mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Tell us how{" "}
            <span className="text-primary italic">your project</span> should
            take shape.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Five short steps. No payment yet — just enough detail for us to
            propose a clear plan.
          </p>
          <p className="mt-3 text-sm text-muted">
            Prefer a quick message? Try our{" "}
            <a
              href="#general-enquiry"
              className="font-semibold text-primary hover:underline"
            >
              general enquiry
            </a>{" "}
            form instead.
          </p>

          <div className="mt-10">
            <EnquiryWizard />
          </div>
        </div>

        <div className="hidden lg:block">
          <SiteImage
            src={IMAGES.heroNetwork}
            alt="High-performance tech solutions"
            className="aspect-[4/5] max-h-[760px] w-full rounded-2xl shadow-[0_25px_50px_rgba(11,102,255,0.14)] ring-1 ring-border"
            priority
          />
        </div>
      </div>

      <div className="border-t border-border bg-surface">
        <div className="container-nx grid gap-10 py-16 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              General enquiry
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
              Have a quick question, partnership idea, or something that does
              not fit the project form? Send us a general enquiry — we&apos;ll
              be in touch within 24 hours.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-[var(--panel-bg)] p-4">
              <p className="font-display text-sm font-bold text-foreground">
                {INFO_DESK.label}
              </p>
              <p className="text-xs text-primary">Axentra Tech Solutions</p>
              <p className="mt-2 text-sm text-foreground/85">
                {INFO_DESK.email}
              </p>
              <p className="text-sm text-foreground/85">{INFO_DESK.whatsapp}</p>
            </div>
          </div>
          <div id="general-enquiry" className="scroll-mt-24">
            <GeneralEnquiry />
          </div>
        </div>
      </div>
    </section>
  );
}
