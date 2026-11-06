"use client";

import { useState } from "react";
import { ArrowUpRight, Network, Code2, LayoutDashboard, BrainCircuit, Sparkles } from "lucide-react";

interface Service {
  id: string;
  idx: string;
  icon: typeof Network;
  title: string;
  description: string;
  tags: string[];
  deliverables: string[];
}

const SERVICES: Service[] = [
  {
    id: "systems",
    idx: "01",
    icon: Network,
    title: "Multi-Network Bonding & Socket Systems",
    description: "Concurrent dual-WAN channel aggregation, sub-millisecond socket multiplexing, chunk reordering protocols, and download acceleration engines that maximize network throughput.",
    tags: ["TCP / UDP Bonding", "Socket Multiplexing", "Packet Reassembly", "WAN Failover", "C++ / Rust / Go"],
    deliverables: [
      "Custom socket bonding daemon with automatic link failure fallback",
      "Dynamic chunk scheduler optimizing bandwidth across disparate ISPs",
      "Real-time bandwidth telemetry & packet loss compensation",
    ],
  },
  {
    id: "fullstack",
    idx: "02",
    icon: Code2,
    title: "Full-Stack Web Development & Next.js",
    description: "Architecting zero-layout-shift web applications using Next.js 16 Turbopack, React 19 Server Components, TypeScript, and modern styling libraries built for instantaneous responsiveness.",
    tags: ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "Edge Middleware"],
    deliverables: [
      "End-to-end full-stack architectures with modular API endpoints",
      "Server-side rendering and streaming hydration with optimal Core Web Vitals",
      "Strict type-safe data pipelines from database to UI components",
    ],
  },
  {
    id: "apps",
    idx: "03",
    icon: LayoutDashboard,
    title: "Custom Web Applications & Control Dashboards",
    description: "Designing and engineering mission-critical dashboards, telemetry control rooms, and data-dense web applications that stream live system states via low-latency WebSockets.",
    tags: ["Real-Time Telemetry", "WebSocket Streams", "High-Density UI", "State Machines", "REST & GraphQL"],
    deliverables: [
      "Interactive data visualizations rendered at continuous 60fps",
      "Robust state management handling high-frequency socket updates",
      "Custom analytics views with drill-down filters and export pipelines",
    ],
  },
  {
    id: "ml",
    idx: "04",
    icon: BrainCircuit,
    title: "Applied Machine Learning & PHP Pipelines",
    description: "Bridging mature backend stacks like PHP with embedded machine learning inference micro-services, automated document classification, and real-time predictive algorithms.",
    tags: ["PHP 8.3+", "Python Inference", "Model Serving", "NLP Classification", "Sub-50ms P95"],
    deliverables: [
      "Low-overhead IPC bridges connecting PHP requests to Python models",
      "Automated feature extraction and asynchronous batch inference queues",
      "Robust input sanitization and zero-downtime model hot-reloading",
    ],
  },
  {
    id: "creative",
    idx: "05",
    icon: Sparkles,
    title: "Creative Coding & Kinetic Micro-Interactions",
    description: "Crafting tactile physical simulations, Runge-Kutta 4th order springs, particle fields, and canvas shaders that make software feel alive, responsive, and delightful to touch.",
    tags: ["RK4 Kinetic Springs", "HTML5 Canvas Shaders", "GSAP / Framer Motion", "SVG Micro-UX"],
    deliverables: [
      "Custom physics controllers matching real-world spring dynamics",
      "Interactive prototypes designed directly in production code",
      "Accessible motion states respecting prefers-reduced-motion",
    ],
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string>("systems");

  return (
    <section id="services" className="py-28 px-[var(--page-gutter)] border-b border-neutral-200/70 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-600 mb-3">
              <span>Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950">
              What I <span className="font-editorial-serif italic font-normal text-neutral-800">engineer</span>.
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-base leading-relaxed">
            From low-level socket protocol design and machine learning bridges to high-craft front-end interfaces that respond instantaneously.
          </p>
        </div>

        {/* Services List / Grid */}
        <div className="space-y-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isExpanded = activeService === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveService(isExpanded ? "" : service.id)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? "bg-neutral-50/90 border-neutral-900/40 shadow-xs"
                    : "bg-white border-neutral-200/80 hover:border-neutral-400 hover:bg-neutral-50/40"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Index & Title */}
                  <div className="flex items-start sm:items-center gap-5">
                    <span className="font-mono text-sm sm:text-base font-semibold text-neutral-400">
                      {service.idx}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 border border-neutral-200/60">
                      <Icon className="w-5 h-5 text-neutral-800" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium text-neutral-950 tracking-tight">
                        {service.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {service.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-block px-2.5 py-0.5 rounded-md bg-white border border-neutral-200 text-xs font-mono text-neutral-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Expand / Arrow indicator */}
                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-xs font-mono font-medium text-neutral-500 uppercase">
                      {isExpanded ? "Collapse" : "Explore"}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? "rotate-90 bg-neutral-900 text-white border-neutral-900" : "text-neutral-700"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-8 pt-6 border-t border-neutral-200/80 grid grid-cols-1 md:grid-cols-2 gap-8 animate-word-in">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                        Technical Scope
                      </h4>
                      <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                        Key Engineering Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
