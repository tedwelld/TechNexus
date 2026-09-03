"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/site";
import { useTimeTheme } from "./TimeThemeProvider";

const LOGO_LIGHT = "/images/logo/axentralt.png";
const LOGO_DARK = "/images/logo/axentradt.png";

export function Logo() {
  const { theme } = useTimeTheme();
  const src = theme === "dark" ? LOGO_DARK : LOGO_LIGHT;

  return (
    <Link href="/" className="group inline-block" aria-label={COMPANY.name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`${COMPANY.name} logo`}
        width={48}
        height={48}
        className="h-12 w-auto object-contain"
        decoding="async"
      />
    </Link>
  );
}
