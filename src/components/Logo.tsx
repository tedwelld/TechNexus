import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/site";

const LOGO_SRC = "/images/Axentra tech logo.jpeg";

export function Logo({
  light = false,
  showWordmark = true,
}: {
  light?: boolean;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      className="inline-flex min-w-0 items-center gap-2.5 group"
      aria-label={COMPANY.name}
    >
      <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-navy shadow-[0_8px_22px_rgba(11,102,255,0.28)] ring-2 ring-accent/80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LOGO_SRC}
          alt={`${COMPANY.name} logo`}
          width={96}
          height={96}
          className="h-full w-full object-cover"
          decoding="async"
        />
      </span>
      {showWordmark && (
        <span className="min-w-0 leading-tight">
          <span
            className={`font-display block truncate text-[1.05rem] font-bold tracking-tight ${
              light ? "text-white" : "text-foreground"
            }`}
          >
            <span className={light ? "text-white" : "text-foreground"}>TECH</span>
            <span className="text-primary">NEXUS</span>
          </span>
          <span
            className={`hidden truncate text-[0.62rem] font-semibold uppercase tracking-[0.18em] sm:block ${
              light ? "text-accent" : "text-accent"
            }`}
          >
            Agency · {COMPANY.tagline}
          </span>
        </span>
      )}
    </Link>
  );
}

/** Larger logo mark for hero / brand moments */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src={LOGO_SRC}
      alt={COMPANY.name}
      width={160}
      height={160}
      priority
      unoptimized
      className={`rounded-full object-cover ring-2 ring-accent/70 ${className}`}
    />
  );
}
