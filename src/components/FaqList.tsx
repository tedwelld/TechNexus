"use client";

import { useState } from "react";
import { PiIcon } from "./PiIcon";

type Item = { q: string; a: string };

export function FaqList({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="card overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold">
                {item.q}
              </span>
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-full bg-surface text-primary transition ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <PiIcon name="chevron-down" />
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-border px-5 pb-5 pt-3 text-sm leading-relaxed text-muted">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
