"use client";

import { Cpu, Zap, ShieldCheck, Activity } from "lucide-react";

const STATS = [
  {
    icon: Zap,
    metric: "3.8x",
    label: "Bandwidth Multiplier",
    subtext: "Aggregated concurrent TCP/UDP socket bonding across dual network interfaces.",
  },
  {
    icon: Cpu,
    metric: "< 45ms",
    label: "Inference Latency",
    subtext: "P95 response time on lightweight ML classification pipelines with PHP bridge.",
  },
  {
    icon: ShieldCheck,
    metric: "99.98%",
    label: "Packet Reliability",
    subtext: "Zero-loss stream recovery with automated failover and chunk reordering.",
  },
  {
    icon: Activity,
    metric: "100%",
    label: "Type Safety & Edge QA",
    subtext: "Strict TypeScript compilation, zero layout shift, and 60fps animations.",
  },
];

export function NumbersSection() {
  return (
    <section className="py-20 px-[var(--page-gutter)] border-y border-neutral-200/70 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              Telemetry & Benchmarks
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
              Dhairya in <span className="font-editorial-serif font-normal italic text-neutral-300">numbers</span>.
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-400 max-w-md font-normal leading-relaxed">
            Measurable engineering impact across socket aggregation, machine learning inference throughput, and front-end execution speed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800/80 flex flex-col justify-between hover:border-neutral-700 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-4xl md:text-5xl font-mono font-semibold tracking-tight text-white mb-2 group-hover:text-neutral-100">
                    {stat.metric}
                  </div>
                  <div className="text-base font-medium text-neutral-200 mb-3">
                    {stat.label}
                  </div>
                </div>
                <div className="text-xs text-neutral-400 leading-relaxed font-normal pt-4 border-t border-neutral-800/60">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
