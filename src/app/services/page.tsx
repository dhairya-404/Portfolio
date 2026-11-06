"use client";

import Link from "next/link";
import { Terminal, Network, Code2, LayoutDashboard, BrainCircuit, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    idx: "01",
    icon: Network,
    title: "Multi-Network Bonding & Socket Systems",
    tagline: "Channel aggregation across dual interfaces for maximum throughput.",
    desc: "I design and implement custom socket multiplexers that bond separate network connections (Ethernet + 5G/Wi-Fi) into a unified high-speed stream. Ideal for high-bandwidth data ingestion, remote telemetry, and mission-critical download acceleration.",
    deliverables: [
      "Custom socket bonding daemon with automated link failover",
      "Dynamic chunk schedulers adapting to live interface RTT",
      "Zero-loss packet reassembly with circular in-memory ring buffers",
    ],
    tech: ["C++", "Go", "TCP/UDP Sockets", "Linux Network Stack", "WebSockets"],
  },
  {
    idx: "02",
    icon: Code2,
    title: "Full-Stack Web Development & Next.js 16",
    tagline: "Zero-layout-shift architectures with sub-second execution.",
    desc: "Architecting modern web applications using Next.js 16 (App Router), React 19 Server Components, TypeScript, and modern styling libraries. Built from the ground up for strict type safety, zero layout shift (CLS 0), and instant responsiveness.",
    deliverables: [
      "End-to-end full-stack architectures with modular API endpoints",
      "Server-side streaming hydration and sub-100ms Largest Contentful Paint",
      "Strict type-safe pipelines from database schemas to UI components",
    ],
    tech: ["Next.js 16 (Turbopack)", "React 19", "TypeScript", "Tailwind CSS v4"],
  },
  {
    idx: "03",
    icon: LayoutDashboard,
    title: "Custom Web Applications & Control Dashboards",
    tagline: "High-density control centers streaming live state at 60fps.",
    desc: "Designing and engineering mission-critical dashboards, telemetry control rooms, and data-dense web interfaces that stream live system states via low-latency WebSockets with zero frame stutter.",
    deliverables: [
      "Interactive data visualizations rendered at continuous 60fps",
      "Robust client-side state machines handling high-frequency socket updates",
      "Custom analytics views with drill-down filters and export pipelines",
    ],
    tech: ["WebSockets", "Data Visualization", "State Machines", "REST & GraphQL"],
  },
  {
    idx: "04",
    icon: BrainCircuit,
    title: "Applied Machine Learning & PHP Pipelines",
    tagline: "Sub-50ms local inference integrated into production PHP stacks.",
    desc: "Bridging battle-tested enterprise backends like PHP with embedded machine learning models through high-speed UNIX domain sockets. Run real-time NLP classification, document processing, and prediction without costly cloud cluster overhead.",
    deliverables: [
      "Low-overhead IPC bridges connecting PHP requests to Python runtimes",
      "Automated feature extraction and asynchronous batch inference queues",
      "Model hot-reloading with zero-downtime operational rollouts",
    ],
    tech: ["PHP 8.3+", "Python", "UNIX Sockets", "ONNX / PyTorch", "IPC Protocols"],
  },
  {
    idx: "05",
    icon: Sparkles,
    title: "Creative Coding & Kinetic Micro-Interactions",
    tagline: "Tactile mathematical physics that make software feel alive.",
    desc: "Crafting tactile physical simulations, Runge-Kutta 4th order springs, particle fields, and canvas shaders. I replace sterile cubic-bezier transitions with genuine mechanical dynamics that delight users.",
    deliverables: [
      "Custom physics controllers matching real-world spring mechanics",
      "Interactive prototypes designed and coded directly in production code",
      "Accessible motion states respecting prefers-reduced-motion",
    ],
    tech: ["RK4 Calculus", "HTML5 Canvas", "WebGL Shaders", "GSAP / Framer Motion"],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-24 px-[var(--page-gutter)] max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>Services & Capabilities</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          What I <span className="font-editorial-serif font-normal italic text-[#c084fc]">engineer</span>.
        </h1>
        <p className="text-base sm:text-xl text-neutral-400 max-w-2xl leading-relaxed">
          From low-level network bonding protocols and machine learning bridges to high-craft front-end interfaces that respond instantaneously.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-8">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.idx}
              className="p-8 sm:p-12 rounded-3xl dark-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-sm font-bold text-neutral-500">{service.idx}</span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-teal-300 transition-colors">
                  {service.title}
                </h2>
                <p className="text-xs font-mono text-neutral-400 mb-4">
                  {service.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-neutral-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">Scope & Details</h3>
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">Key Deliverables</h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((d, dIdx) => (
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

      {/* Bottom CTA Card */}
      <div className="mt-20 p-8 sm:p-12 rounded-3xl dark-card flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Have a custom technical challenge?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-lg">
            Let&apos;s evaluate your architectural requirements and build software with predictable precision.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-colors shrink-0"
        >
          <span>Discuss Your Project</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
