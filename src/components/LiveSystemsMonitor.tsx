"use client";

import { useEffect, useState } from "react";

type Service = {
  name: string;
  region: string;
  status: "healthy" | "degraded" | "recovering";
  latency: number;
};

type EventRow = {
  id: number;
  time: string;
  source: string;
  message: string;
  level: "info" | "ok" | "warn";
};

type Snapshot = {
  uptime: number;
  latencyMs: number;
  rps: number;
  errorRate: number;
  cpu: number;
  memory: number;
  spark: number[];
  services: Service[];
  events: EventRow[];
  tick: number;
};

const SERVICE_BASE: Omit<Service, "latency" | "status">[] = [
  { name: "API Gateway", region: "af-south-1" },
  { name: "Auth Service", region: "eu-west-1" },
  { name: "Primary DB", region: "af-south-1" },
  { name: "CDN Edge", region: "global" },
  { name: "Queue Worker", region: "af-south-1" },
];

const EVENT_POOL = [
  { source: "probe", message: "Health check passed · api.gateway", level: "ok" as const },
  { source: "cdn", message: "Edge cache hit ratio 97.4%", level: "info" as const },
  { source: "db", message: "Replica lag 12ms — within SLA", level: "ok" as const },
  { source: "auth", message: "Token mint latency 48ms", level: "info" as const },
  { source: "ops", message: "Auto-scale idle — load normal", level: "ok" as const },
  { source: "net", message: "Packet loss 0.01% on WAN path", level: "info" as const },
  { source: "queue", message: "Job backlog cleared (0 pending)", level: "ok" as const },
  { source: "sec", message: "WAF blocked 3 anomalous requests", level: "warn" as const },
];

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function jitter(base: number, range: number) {
  return base + (Math.random() * 2 - 1) * range;
}

function nowStamp() {
  return new Date().toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function nextSnapshot(prev: Snapshot | null): Snapshot {
  const spark = prev
    ? [...prev.spark.slice(1), clamp(jitter(prev.spark.at(-1) ?? 62, 12), 28, 96)]
    : Array.from({ length: 18 }, () => clamp(jitter(58, 18), 28, 96));

  const services: Service[] = SERVICE_BASE.map((s, i) => {
    const roll = Math.random();
    const status: Service["status"] =
      roll > 0.96 ? "degraded" : roll > 0.9 ? "recovering" : "healthy";
    return {
      ...s,
      status,
      latency: Math.round(
        clamp(jitter(status === "healthy" ? 42 + i * 8 : 110 + i * 12, 18), 18, 220),
      ),
    };
  });

  const eventSeed = EVENT_POOL[Math.floor(Math.random() * EVENT_POOL.length)];
  const nextId = (prev?.tick ?? 0) + 1000;
  const nextEvent: EventRow = {
    id: nextId,
    time: nowStamp(),
    ...eventSeed,
  };
  const events = prev
    ? [nextEvent, ...prev.events].slice(0, 5)
    : Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        time: nowStamp(),
        ...EVENT_POOL[i % EVENT_POOL.length],
      }));

  return {
    uptime: Number(clamp(jitter(99.94, 0.04), 99.86, 99.99).toFixed(2)),
    latencyMs: Math.round(clamp(jitter(48, 14), 22, 95)),
    rps: Math.round(clamp(jitter(1840, 280), 1200, 2600)),
    errorRate: Number(clamp(jitter(0.12, 0.08), 0.02, 0.45).toFixed(2)),
    cpu: Math.round(clamp(jitter(41, 9), 22, 68)),
    memory: Math.round(clamp(jitter(63, 6), 48, 78)),
    spark,
    services,
    events,
    tick: (prev?.tick ?? 0) + 1,
  };
}

function statusColor(status: Service["status"]) {
  if (status === "healthy") return "bg-emerald-500";
  if (status === "recovering") return "bg-amber-400";
  return "bg-rose-500";
}

function levelColor(level: EventRow["level"]) {
  if (level === "ok") return "text-emerald-400";
  if (level === "warn") return "text-amber-300";
  return "text-sky-300";
}

export function LiveSystemsMonitor() {
  const [snap, setSnap] = useState<Snapshot | null>(null);

  useEffect(() => {
    setSnap(nextSnapshot(null));
    const id = window.setInterval(() => {
      setSnap((prev) => nextSnapshot(prev));
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  if (!snap) {
    return (
      <div className="relative min-h-[22rem] overflow-hidden rounded-2xl border border-border bg-[var(--panel-bg)] shadow-[0_30px_60px_rgba(7,24,51,0.28)] sm:min-h-0 sm:aspect-[5/4] lg:float-y" />
    );
  }

  const maxSpark = Math.max(...snap.spark, 1);

  return (
    <div className="relative flex min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-border bg-[#071833] text-white shadow-[0_30px_60px_rgba(7,24,51,0.28)] sm:min-h-0 sm:aspect-[5/4] lg:float-y">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.28),transparent_42%),radial-gradient(circle_at_85%_80%,rgba(14,165,233,0.18),transparent_40%)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative flex h-full min-h-0 flex-col gap-2.5 p-3 sm:gap-3 sm:p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-sky-200/80 sm:text-[0.65rem] sm:tracking-[0.18em]">
              Live systems · BI monitor
            </p>
            <p className="mt-0.5 font-display text-sm font-bold sm:text-base">
              Operations dashboard
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[0.6rem] font-semibold sm:px-2.5 sm:text-[0.65rem]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            LIVE · {snap.tick.toString().padStart(3, "0")}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { label: "Uptime", value: `${snap.uptime}%` },
            { label: "Latency", value: `${snap.latencyMs}ms` },
            { label: "Throughput", value: `${snap.rps}` },
            { label: "Errors", value: `${snap.errorRate}%` },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-2"
            >
              <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-white/55">
                {kpi.label}
              </p>
              <p className="mt-1 font-display text-sm font-bold tabular-nums sm:text-base">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid min-h-0 flex-1 gap-2 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="flex min-h-0 flex-col rounded-xl border border-white/10 bg-white/5 p-2.5">
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-[0.65rem] font-bold uppercase tracking-wider text-white/60">
                Request load
              </p>
              <p className="text-[0.6rem] text-white/45 sm:text-[0.65rem]">
                CPU {snap.cpu}% · MEM {snap.memory}%
              </p>
            </div>
            <div className="flex h-16 items-end gap-[3px] sm:h-auto sm:min-h-[4.5rem] sm:flex-1">
              {snap.spark.map((v, i) => (
                <span
                  key={`spark-${i}`}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-sky-500/40 to-sky-300 transition-[height] duration-500"
                  style={{ height: `${(v / maxSpark) * 100}%` }}
                />
              ))}
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div>
                <div className="mb-1 flex justify-between text-[0.6rem] text-white/50">
                  <span>CPU</span>
                  <span>{snap.cpu}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-sky-400 transition-all duration-700"
                    style={{ width: `${snap.cpu}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-[0.6rem] text-white/50">
                  <span>Memory</span>
                  <span>{snap.memory}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-300 transition-all duration-700"
                    style={{ width: `${snap.memory}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-col rounded-xl border border-white/10 bg-white/5 p-2.5">
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-wider text-white/60">
              Service health
            </p>
            <ul className="space-y-1.5 overflow-hidden">
              {snap.services.map((svc) => (
                <li
                  key={svc.name}
                  className="flex items-center justify-between gap-2 text-[0.7rem]"
                >
                  <span className="flex min-w-0 items-center gap-1.5">
                    <span
                      className={`size-1.5 shrink-0 rounded-full ${statusColor(svc.status)}`}
                    />
                    <span className="truncate font-medium text-white/90">
                      {svc.name}
                    </span>
                  </span>
                  <span className="shrink-0 tabular-nums text-white/50">
                    {svc.latency}ms
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden rounded-xl border border-white/10 bg-black/25 p-2.5 sm:block">
          <p className="mb-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-white/60">
            Event stream
          </p>
          <ul className="space-y-1">
            {snap.events.map((ev) => (
              <li
                key={ev.id}
                className="grid grid-cols-[auto_auto_1fr] items-baseline gap-2 text-[0.65rem] leading-snug"
              >
                <span className="font-mono text-white/40">{ev.time}</span>
                <span className={`font-semibold uppercase ${levelColor(ev.level)}`}>
                  {ev.source}
                </span>
                <span className="truncate text-white/75">{ev.message}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
