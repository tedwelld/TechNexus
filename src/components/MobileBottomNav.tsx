"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiIcon } from "./PiIcon";

const items = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/services", label: "Services", icon: "th-large" },
  { href: "/work", label: "Work", icon: "briefcase" },
  { href: "/pricing", label: "Pricing", icon: "dollar" },
  { href: "/contact", label: "Contact", icon: "envelope" },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-[var(--header-bg)] backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Mobile"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5 gap-0 px-0.5 pt-1 pb-1">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href} className="min-w-0">
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-0.5 rounded-xl px-0.5 py-1 text-[0.62rem] font-semibold transition-colors ${
                  active
                    ? "text-primary"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <span
                  className={`grid size-8 place-items-center rounded-xl transition-colors sm:size-9 ${
                    active ? "bg-primary-soft" : "bg-transparent"
                  }`}
                >
                  <PiIcon name={item.icon} size="lg" />
                </span>
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
