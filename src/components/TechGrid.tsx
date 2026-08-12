"use client";

import { useMemo, useState } from "react";
import { PiIcon } from "./PiIcon";

type Tech = {
  name: string;
  level: number;
  category: string;
  description: string;
  tags: string[];
};

const techs: Tech[] = [
  {
    name: "React.js",
    level: 95,
    category: "Frontend",
    description: "Component-driven interfaces with high interaction fidelity.",
    tags: ["SPA", "Hooks", "Design Systems"],
  },
  {
    name: "Next.js",
    level: 94,
    category: "Frontend",
    description: "App Router delivery with SSR, ISR, and edge-ready routes.",
    tags: ["SSR", "App Router", "SEO"],
  },
  {
    name: "TypeScript",
    level: 96,
    category: "Frontend",
    description: "Type-safe contracts that reduce regressions at scale.",
    tags: ["Strict", "DX", "Safety"],
  },
  {
    name: "Node.js",
    level: 93,
    category: "Backend",
    description: "Event-driven services and API gateways for product velocity.",
    tags: ["APIs", "Workers", "Realtime"],
  },
  {
    name: "Python",
    level: 90,
    category: "Backend",
    description: "Data pipelines, automation, and intelligent services.",
    tags: ["FastAPI", "ETL", "ML"],
  },
  {
    name: "PostgreSQL",
    level: 92,
    category: "Databases",
    description: "Relational backbone with strong integrity and analytics.",
    tags: ["SQL", "Indexing", "JSON"],
  },
  {
    name: "MongoDB",
    level: 88,
    category: "Databases",
    description: "Flexible document models for rapidly evolving domains.",
    tags: ["NoSQL", "Atlas", "Aggregation"],
  },
  {
    name: "AWS",
    level: 91,
    category: "Infrastructure",
    description: "Cloud-native deployment, observability, and autoscaling.",
    tags: ["ECS", "Lambda", "RDS"],
  },
  {
    name: "Docker & K8s",
    level: 89,
    category: "Infrastructure",
    description: "Container orchestration for resilient production fleets.",
    tags: ["CI/CD", "Helm", "Mesh"],
  },
  {
    name: "React Native",
    level: 87,
    category: "Mobile",
    description: "Cross-platform mobile experiences with shared logic.",
    tags: ["iOS", "Android", "Offline"],
  },
  {
    name: "Flutter",
    level: 84,
    category: "Mobile",
    description: "Pixel-consistent mobile UIs with strong performance.",
    tags: ["Dart", "Widgets", "Release"],
  },
  {
    name: "Cybersecurity",
    level: 90,
    category: "Infrastructure",
    description: "Hardened delivery with continuous vulnerability controls.",
    tags: ["Zero Trust", "IAM", "Audit"],
  },
];

const categories = [
  "All Tech",
  "Frontend",
  "Backend",
  "Databases",
  "Infrastructure",
  "Mobile",
];

export function TechGrid() {
  const [category, setCategory] = useState("All Tech");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return techs.filter((tech) => {
      const matchesCategory =
        category === "All Tech" || tech.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        tech.name.toLowerCase().includes(q) ||
        tech.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                category === cat
                  ? "bg-primary text-white"
                  : "bg-surface text-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <label className="relative block w-full max-w-sm">
          <span className="sr-only">Search technologies</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search languages, tools..."
            className="w-full rounded-xl border border-border bg-[var(--panel-bg)] py-2.5 pl-4 pr-10 text-sm outline-none ring-primary/30 focus:ring-2"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">
            <PiIcon name="search" />
          </span>
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tech) => (
          <article key={tech.name} className="card p-5">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-bold">{tech.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-primary">
                  {tech.level}% Expert
                </p>
              </div>
              <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-sm font-bold text-primary">
                {tech.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div className="progress mb-4">
              <span style={{ width: `${tech.level}%` }} />
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {tech.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
