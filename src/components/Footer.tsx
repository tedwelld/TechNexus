import Link from "next/link";
import { Logo } from "./Logo";
import { PiIcon } from "./PiIcon";
import { COMPANY, DEVELOPERS } from "@/lib/site";

const services = [
  { href: "/services", label: "Web Development" },
  { href: "/services", label: "Software Systems" },
  { href: "/services/it", label: "IT Support" },
  { href: "/services/it", label: "Cloud Infrastructure" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/work", label: "Our Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { name: "Facebook", icon: "facebook" },
  { name: "Twitter", icon: "twitter" },
  { name: "LinkedIn", icon: "linkedin" },
  { name: "Instagram", icon: "instagram" },
] as const;

export function Footer({ dark = false }: { dark?: boolean }) {
  return (
    <footer
      className={`border-t pb-[4.75rem] lg:pb-0 ${
        dark
          ? "border-white/10 bg-navy text-white"
          : "border-border bg-surface text-foreground"
      }`}
    >
      <div className="container-nx grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light={dark} />
          <p
            className={`max-w-xs text-sm leading-relaxed ${
              dark ? "text-white/65" : "text-muted"
            }`}
          >
            {COMPANY.tagline} High-performance digital solutions with direct
            developer access via WhatsApp and email—select packages, checkout,
            and talk to the people who build.
          </p>
          <div className="relative mt-2 h-16 w-16 overflow-hidden rounded-full bg-navy ring-2 ring-accent/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Axentra tech logo.jpeg"
              alt=""
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-2 pt-1">
            {socials.map((social) => (
              <span
                key={social.name}
                title={social.name}
                className={`grid size-9 place-items-center rounded-full border ${
                  dark
                    ? "border-white/15 text-white/70"
                    : "border-border text-muted"
                }`}
              >
                <PiIcon name={social.icon} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4
            className={`mb-4 text-xs font-bold uppercase tracking-[0.14em] ${
              dark ? "text-white/50" : "text-muted"
            }`}
          >
            Services
          </h4>
          <ul className="space-y-2.5">
            {services.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-sm ${
                    dark
                      ? "text-white/75 hover:text-white"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            className={`mb-4 text-xs font-bold uppercase tracking-[0.14em] ${
              dark ? "text-white/50" : "text-muted"
            }`}
          >
            Company
          </h4>
          <ul className="space-y-2.5">
            {company.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-sm ${
                    dark
                      ? "text-white/75 hover:text-white"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            className={`mb-4 text-xs font-bold uppercase tracking-[0.14em] ${
              dark ? "text-white/50" : "text-muted"
            }`}
          >
            Developers
          </h4>
          <ul
            className={`space-y-3 text-sm ${
              dark ? "text-white/75" : "text-foreground/80"
            }`}
          >
            {DEVELOPERS.map((dev) => (
              <li key={dev.id}>
                <p className="font-semibold">{dev.name}</p>
                <p className="inline-flex items-center gap-1.5">
                  <PiIcon name="envelope" size="sm" />
                  {dev.email}
                </p>
                <p className="inline-flex items-center gap-1.5">
                  <PiIcon name="whatsapp" size="sm" />
                  {dev.whatsapp}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`border-t ${dark ? "border-white/10" : "border-border"}`}>
        <div className="container-nx flex flex-col gap-3 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className={dark ? "text-white/55" : "text-muted"}>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/contact"
              className={
                dark
                  ? "text-white/55 hover:text-white"
                  : "text-muted hover:text-foreground"
              }
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className={
                dark
                  ? "text-white/55 hover:text-white"
                  : "text-muted hover:text-foreground"
              }
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
