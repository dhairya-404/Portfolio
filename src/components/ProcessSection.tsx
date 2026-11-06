"use client";

import { useState } from "react";
import { Compass, Palette, TerminalSquare, CheckCircle2, ArrowRight } from "lucide-react";

interface Step {
  roman: string;
  num: string;
  title: string;
  tagline: string;
  icon: typeof Compass;
  summary: string;
  checklist: string[];
}

const STEPS: Step[] = [
  {
    roman: "I",
    num: "01",
    title: "Understand",
    tagline: "A rigorous audit before writing a single line of architecture.",
    icon: Compass,
    summary:
      "Every project starts by interrogating constraints: packet loss patterns across ISPs, compute latency budgets, interface ergonomics, and target user journeys. No guesswork.",
    checklist: [
      "Constraint analysis & latency budgeting",
      "Network protocol & socket topology audit",
      "User interface flow mapping & information architecture",
    ],
  },
  {
    roman: "II",
    num: "02",
    title: "Design",
    tagline: "Translating engineering logic into tactile, intuitive systems.",
    icon: Palette,
    summary:
      "Crafting typographic hierarchy, design tokens, responsive layout grids, and kinetic spring dynamics that render complex technical state transparent and effortless.",
    checklist: [
      "Token-driven design systems (Geist, Newsreader Italic, variable tracking)",
      "Interactive component prototypes in code",
      "Accessible contrast, focus rings, and reduced motion states",
    ],
  },
  {
    roman: "III",
    num: "03",
    title: "Build",
    tagline: "Strict TypeScript, zero bloat, and sub-millisecond execution.",
    icon: TerminalSquare,
    summary:
      "Writing clean, modular components in Next.js 16 and React 19, paired with low-overhead backend services. Every dependency is questioned, every memory leak eliminated.",
    checklist: [
      "Turbopack builds with streaming SSR hydration",
      "High-throughput socket multiplexers & packet schedulers",
      "100% strict type checking with zero runtime warnings",
    ],
  },
  {
    roman: "IV",
    num: "04",
    title: "Refine",
    tagline: "Testing under adverse conditions until it never breaks.",
    icon: CheckCircle2,
    summary:
      "Stress testing on packet loss networks, auditing 60fps frame budgets under heavy DOM load, verifying screen readers, and edge deployment with automated rollbacks.",
    checklist: [
      "Zero Cumulative Layout Shift (CLS) verification",
      "Real-world socket drop & auto-reconnect validation",
      "Cross-browser and multi-viewport visual regression QA",
    ],
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-28 px-[var(--page-gutter)] border-b border-neutral-200/70 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-300 mb-3">
              <span>Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              How a project <span className="font-editorial-serif italic font-normal text-neutral-300">runs</span>.
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-base leading-relaxed">
            From technical discovery to low-latency deployment. A proven, predictable engineering lifecycle.
          </p>
        </div>

        {/* Step Indicator Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                  isCurrent
                    ? "bg-neutral-800 border-neutral-500 shadow-md ring-1 ring-neutral-400/30"
                    : "bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-neutral-500">{step.num}</span>
                  <span className="font-mono text-xs font-semibold text-neutral-400">{step.roman}</span>
                </div>
                <div className={`text-base font-medium tracking-tight ${isCurrent ? "text-white" : "text-neutral-400"}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase */}
        {(() => {
          const current = STEPS[activeStep];
          const Icon = current.icon;
          return (
            <div className="p-8 sm:p-10 rounded-2xl bg-neutral-950 border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center border border-neutral-700">
                    <Icon className="w-5 h-5 text-neutral-200" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-neutral-500">STAGE {current.num} / 04</span>
                    <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-neutral-300 font-medium mb-4 leading-snug">
                  {current.tagline}
                </p>

                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6">
                  {current.summary}
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % STEPS.length)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-950 text-xs font-medium hover:bg-neutral-200 transition-colors"
                  >
                    <span>Next Stage ({STEPS[(activeStep + 1) % STEPS.length].title})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right: Stage deliverables list */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-neutral-900/90 border border-neutral-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
                  Verification Checklist
                </div>
                <div className="space-y-3">
                  {current.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-xs sm:text-sm text-neutral-300 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
