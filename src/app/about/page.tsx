"use client";

import Link from "next/link";
import { User, Terminal, ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      num: "01",
      icon: ShieldCheck,
      title: "Rigor",
      desc: "Code is not done when it works on the happy path; it is done when it withstands packet loss, adversarial input, edge cases, and heavy concurrency without degradation.",
    },
    {
      num: "02",
      icon: Zap,
      title: "Subtraction",
      desc: "Every line of code and every third-party dependency is an operational liability. The best systems achieve maximum velocity by removing unnecessary abstractions.",
    },
    {
      num: "03",
      icon: Terminal,
      title: "Agency",
      desc: "Direct, transparent communication. No bloated agency hierarchies or middle managers—from the initial protocol design to production deployment, you work directly with the engineer.",
    },
    {
      num: "04",
      icon: Sparkles,
      title: "Craft",
      desc: "True craft lives in the details: zero layout shift on hydration, smooth 60fps kinetic spring physics, and clear semantic architecture that remains maintainable for years.",
    },
  ];

  return (
    <div className="py-24 px-[var(--page-gutter)] max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-4">
          <User className="w-3.5 h-3.5" />
          <span>Studio & Profile</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Meet <span className="font-editorial-serif font-normal italic text-[#c084fc]">Dhairya</span>.
        </h1>
        <p className="text-lg sm:text-2xl text-neutral-300 max-w-3xl leading-relaxed font-normal">
          I&apos;m a systems developer and full-stack engineer who builds software from first principles. I bridge low-level network socket protocols with ultra-responsive digital products.
        </p>
      </div>

      {/* Narrative Bio */}
      <div className="p-8 sm:p-12 rounded-3xl dark-card mb-20 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
        <p>
          I am captivated by the space where low-level systems logic meets tactile digital design. Too often, software development is bifurcated: backend systems engineers who don&apos;t care about the user interface, and frontend designers who treat network latency and data streams as black boxes.
        </p>
        <p>
          My focus is holistic: understanding the physical byte flow across network adapters, minimizing IPC serialization overhead in ML pipelines, and rendering the resulting state instantaneously in the browser at a steady 60 frames per second.
        </p>
        <p>
          When you work with me, there are no handoffs or artificial friction. Every architectural decision is guided by measurable telemetry, strict type safety, and obsessive craft.
        </p>
      </div>

      {/* Core Principles */}
      <div className="mb-20">
        <div className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3">
          Guiding Values
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-10">
          Four principles that govern my work.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.num} className="p-8 rounded-2xl dark-card flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-neutral-500">{v.num}</span>
                    <Icon className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-teal-300 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Daily Tooling & Environment */}
      <div className="p-8 sm:p-10 rounded-3xl dark-card mb-20">
        <div className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-2">
          Environment & Tooling
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight mb-6">
          The engineering toolkit.
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="text-neutral-500 mb-1">Systems</div>
            <div className="text-white font-bold">C++, Go, Linux Sockets</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="text-neutral-500 mb-1">Backend & ML</div>
            <div className="text-white font-bold">PHP 8.3, Python, ONNX</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="text-neutral-500 mb-1">Frontend</div>
            <div className="text-white font-bold">Next.js 16, React 19, TS</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="text-neutral-500 mb-1">Location</div>
            <div className="text-white font-bold">India (IST UTC+5:30)</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10">
        <div>
          <h3 className="text-lg font-bold text-white">Ready to collaborate?</h3>
          <p className="text-xs font-mono text-neutral-400">Direct inquiries welcome anytime.</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors"
        >
          <span>Start a conversation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
