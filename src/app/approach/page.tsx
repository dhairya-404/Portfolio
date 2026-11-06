"use client";

import Link from "next/link";
import { Compass, Palette, TerminalSquare, CheckCircle2, ArrowRight } from "lucide-react";

export default function ApproachPage() {
  const steps = [
    {
      num: "01",
      roman: "I",
      icon: Compass,
      title: "Understand",
      tagline: "Rigorous discovery and constraint analysis before code.",
      summary:
        "Every project begins by interrogating physical constraints: bandwidth limits across distinct ISPs, packet loss curves, compute budgets, and database bottlenecks. We establish quantifiable performance budgets before writing a single line of architecture.",
      deliverables: [
        "Network protocol and socket topology audit",
        "P95 latency and memory budget definitions",
        "User flow mapping and data contracts",
      ],
    },
    {
      num: "02",
      roman: "II",
      icon: Palette,
      title: "Design",
      tagline: "Translating engineering logic into tactile, intuitive systems.",
      summary:
        "Designing the interface hierarchy, tokens, responsive layout grids, and kinetic spring dynamics that render complex system state transparent. We design directly in code and interactive prototypes to ensure what is designed is what ships.",
      deliverables: [
        "Token-driven design systems (strict typography, dark mode, high contrast)",
        "Interactive component prototypes matching mechanical physics",
        "Accessible contrast, focus rings, and prefers-reduced-motion states",
      ],
    },
    {
      num: "03",
      roman: "III",
      icon: TerminalSquare,
      title: "Build",
      tagline: "Strict TypeScript, zero bloat, and sub-millisecond execution.",
      summary:
        "Developing clean, modular code in Next.js 16, React 19, and low-overhead backend services. Every third-party dependency is evaluated critically, every memory leak eliminated, and strict type safety enforced across the entire stack.",
      deliverables: [
        "Turbopack builds with streaming SSR hydration",
        "Low-latency socket multiplexers and IPC data pipelines",
        "100% strict type checking with zero runtime warnings or layout shift",
      ],
    },
    {
      num: "04",
      roman: "IV",
      icon: CheckCircle2,
      title: "Refine",
      tagline: "Testing under adverse conditions until it never breaks.",
      summary:
        "Stress testing under real-world packet drop conditions, profiling 60fps frame budgets under heavy DOM load, verifying screen reader accessibility, and deploying to edge infrastructure with automated rollback capabilities.",
      deliverables: [
        "Cumulative Layout Shift (CLS) verified at 0.000",
        "Real-world socket drop and automatic sub-12ms reconnect testing",
        "Cross-browser and multi-viewport regression QA",
      ],
    },
  ];

  return (
    <div className="py-24 px-[var(--page-gutter)] max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Methodology & Standards</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          How a project <span className="font-editorial-serif font-normal italic text-[#c084fc]">runs</span>.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed font-normal">
          A clear scope up front. A staging link from week one. Continuous verification at every step.
        </p>
      </div>

      {/* Steps List */}
      <div className="space-y-12">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="p-8 sm:p-12 rounded-3xl dark-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs font-bold text-neutral-500">{step.num}</span>
                  <span className="font-mono text-xs font-bold text-teal-400">{step.roman}</span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-teal-300 transition-colors">
                  {step.title}
                </h2>

                <p className="text-sm font-mono text-neutral-400 mb-4">
                  {step.tagline}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                  {step.summary}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Verification Checklist</h3>
                  <ul className="space-y-2">
                    {step.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 p-8 sm:p-12 rounded-3xl dark-card flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Have a project in mind?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-lg">
            Let&apos;s run your project with clear scope, direct engineering accountability, and zero guesswork.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-colors shrink-0"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
