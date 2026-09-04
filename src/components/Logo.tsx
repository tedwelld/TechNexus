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
      className="group inline-flex max-w-full items-center gap-2"
      aria-label={COMPANY.name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={160}
        height={56}
        className="h-9 w-auto max-w-[7.5rem] object-contain object-left sm:h-11 sm:max-w-[10rem]"
        decoding="async"
      />
      {showWordmark && (
        <span className="hidden leading-tight md:block">
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
