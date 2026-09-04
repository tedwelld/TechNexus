"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/site";
import { useTimeTheme } from "./TimeThemeProvider";

const LOGO_LIGHT = "/images/logo/axentralt.png";
const LOGO_DARK = "/images/logo/axentradt.png";

export function Logo({ showWordmark = true }: { showWordmark?: boolean }) {
  const { theme } = useTimeTheme();
  const src = theme === "dark" ? LOGO_DARK : LOGO_LIGHT;

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={COMPANY.name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={160}
        height={56}
        className="h-11 w-auto max-w-[9.5rem] object-contain object-left sm:h-12 sm:max-w-[11rem]"
        decoding="async"
      />
      {showWordmark && (
        <span className="hidden min-[380px]:block leading-tight">
          <span className="block font-display text-sm font-extrabold tracking-tight text-foreground sm:text-[0.95rem]">
            {COMPANY.shortName}
          </span>
          <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
            Tech Solutions
          </span>
        </span>
      )}
    </Link>
  );
}
