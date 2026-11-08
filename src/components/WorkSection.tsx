"use client";

import { useState } from "react";
import { ArrowUpRight, Activity, Network, ArrowRight } from "lucide-react";

export function WorkSection() {
  const [packetCount, setPacketCount] = useState(1480);

  const triggerPacketBurst = () => {
    setPacketCount((prev) => prev + 240);
  };

  const caseStudies = [
    {
      id: "tracelab-dfir",
      kicker: "Forensics & Incident Response",
      title: "TraceLab — Digital activity forensics and incident triage platform",
      description:
        "Engineered a digital forensic detective workbench that normalizes heterogeneous system logs, generates SHA-256 non-repudiation evidence digests, reconstructs synchronized timeline swimlanes, and triages cyber attacks via hybrid rule heuristics and scikit-learn ML.",
      tags: ["PHP 8.3 MVC", "Python & scikit-learn", "SHA-256 Non-Repudiation", "vis-timeline", "DFIR"],
      metrics: [
        { value: "SHA-256", label: "tamper-evident proof" },
        { value: "< 18ms", label: "triage response time" },
      ],
      status: "Live in Production",
      liveUrl: "https://tracelabs-ops.vercel.app",
      githubUrl: "https://github.com/dhairya-404/Trace-Labs",
    },
    {
      id: "network-bonding",
      kicker: "Systems & Network Engineering",
      title: "Multi-network bonding and download acceleration engine",
      description:
        "Engineered a multi-interface packet aggregation and socket bonding system that stripes downloads concurrently over Wi-Fi, Ethernet, and Cellular channels. Implements dynamic chunk reassembly, adaptive TCP congestion backoff, and seamless sub-second link failover.",
      tags: ["Socket Architecture", "Network Bonding", "TCP / UDP", "Concurrency"],
      metrics: [
        { value: "+340%", label: "throughput gain" },
        { value: "0ms", label: "uninterrupted failover" },
      ],
      status: "Active Engineering Research",
    },
    {
      id: "php-ml-system",
      kicker: "Architecture & Machine Learning",
      title: "Hybrid predictive inference pipeline for PHP backends",
      description:
        "Designed an ultra-low latency bridging layer that enables monolithic and modern PHP application services to execute asynchronous machine learning inference. Uses shared memory buffers and local daemon sockets to eliminate HTTP serialization overhead.",
      tags: ["PHP 8.3", "Machine Learning", "ONNX Runtime", "Micro-Daemon"],
      metrics: [
        { value: "< 14ms", label: "p99 inference latency" },
        { value: "99.2%", label: "classification accuracy" },
      ],
      status: "Production Architecture",
    },
    {
      id: "design-system-core",
      kicker: "Interface Engineering",
      title: "High-precision component system & token pipeline",
      description:
        "Constructed a zero-overhead frontend foundation built on Next.js 16 and Tailwind CSS v4. Features sub-millisecond interaction feedback, accessible Radix/Base UI primitives, and programmatic design tokens.",
      tags: ["Next.js 16", "Tailwind CSS v4", "TypeScript", "Performance"],
      metrics: [
        { value: "100/100", label: "Lighthouse Performance" },
        { value: "< 1.8KB", label: "critical runtime footprint" },
      ],
      status: "In Daily Use",
    },
  ];

  const experimentsWall = [
    {
      id: "exp-1",
      title: "TCP Window Visualizer",
      category: "Network",
      badge: "Canvas",
      detail: "Visualizes sliding ACK windows and congestion collapse mitigation.",
    },
    {
      id: "exp-2",
      title: "Bandwidth Striping Sim",
      category: "Systems",
      badge: "Realtime",
      detail: "Calculates chunk distribution across three asymmetric ISP pipes.",
    },
    {
      id: "exp-3",
      title: "Micro-Inference Buffer",
      category: "ML",
      badge: "Daemon",
      detail: "Unix domain socket serialization test achieving 48,000 req/sec.",
    },
    {
      id: "exp-4",
      title: "OKLCH Palette Matrix",
      category: "Color Math",
      badge: "CSS",
      detail: "Dynamic perceptual lightness contrast validation against WCAG 3.0.",
    },
    {
      id: "exp-5",
      title: "Zero-Jank Spring Physics",
      category: "Motion",
      badge: "Physics",
      detail: "RK4 integration step spring solver running on 120Hz display refresh.",
    },
    {
      id: "exp-6",
      title: "ASCII Packet Trace",
      category: "Terminal",
      badge: "Tool",
      detail: "Realtime text-mode packet header inspector for debugging raw frames.",
    },
  ];

  return (
    <section id="work" className="py-24 px-[var(--page-gutter)] max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-neutral-200/80">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            01 / Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 mt-2">
            Systems & Solutions
          </h2>
        </div>
        <p className="text-sm font-mono text-neutral-500 max-w-xs">
          Each project is engineered with an emphasis on speed, reliability, and architectural clarity.
        </p>
      </div>

      {/* Main Grid: Left Featured Studies / Right Wall of Micro-Experiments */}
      <div className="work-grid items-start">
        {/* Left Column: Featured Projects */}
        <div className="flex flex-col gap-12">
          {caseStudies.map((study, idx) => (
            <article
              key={study.id}
              className="group rounded-3xl bg-neutral-50/80 border border-neutral-200/90 p-7 sm:p-9 card-lift relative overflow-hidden"
            >
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="text-xs font-mono font-medium text-neutral-500">
                  {study.kicker}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-white border border-neutral-200 text-neutral-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {study.status}
                </span>
              </div>

              {/* Title & Floating View Pill */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  {study.title}
                </h3>
                {/* andreas.vision style subtle view indicator */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 hidden sm:flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-950 text-white text-xs font-medium">
                  <span>View</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
                {study.description}
              </p>

              {/* Interactive Visual Sandbox for Case Study 1 */}
              {idx === 0 && (
                <div className="mb-6 p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-inner">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-700">
                      <Network className="w-3.5 h-3.5 text-blue-600" />
                      <span>Live Multi-Link Bonding Simulation</span>
                    </div>
                    <button
                      onClick={triggerPacketBurst}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-900 text-white hover:bg-neutral-800 transition-colors flex items-center gap-1 cursor-pointer active:scale-95"
                    >
                      <Activity className="w-3 h-3 text-emerald-400" />
                      <span>Inject 240 Packets</span>
                    </button>
                  </div>

                  {/* Multi-channel throughput bars */}
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-neutral-500 mb-1">
                        <span>Interface A (Wi-Fi 6 / 5GHz)</span>
                        <span className="text-neutral-900 font-semibold">
                          {Math.round(packetCount * 0.45)} pkts/s (45%)
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all duration-300"
                          style={{ width: "45%" }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-neutral-500 mb-1">
                        <span>Interface B (Gigabit Ethernet)</span>
                        <span className="text-neutral-900 font-semibold">
                          {Math.round(packetCount * 0.4)} pkts/s (40%)
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                        <div
                          className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                          style={{ width: "40%" }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-neutral-500 mb-1">
                        <span>Interface C (5G Fallback Channel)</span>
                        <span className="text-neutral-900 font-semibold">
                          {Math.round(packetCount * 0.15)} pkts/s (15%)
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                        <div
                          className="h-full bg-amber-500 rounded-full transition-all duration-300"
                          style={{ width: "15%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Case Study 2: Micro-Inference Visualization */}
              {idx === 1 && (
                <div className="mb-6 p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-inner text-xs font-mono">
                  <div className="text-[11px] text-neutral-500 mb-2 font-semibold">
                    IPC Routing Architecture
                  </div>
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/60">
                    <div className="text-center">
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold text-[10px]">
                        PHP App
                      </span>
                      <div className="text-[10px] text-neutral-400 mt-1">Payload</div>
                    </div>
                    <span className="text-neutral-400">→ [IPC Shmop] →</span>
                    <div className="text-center">
                      <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-semibold text-[10px]">
                        ONNX Daemon
                      </span>
                      <div className="text-[10px] text-neutral-400 mt-1">&lt; 1.2ms</div>
                    </div>
                    <span className="text-neutral-400">→ [Response] →</span>
                    <div className="text-center">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold text-[10px]">
                        99.2% Conf
                      </span>
                      <div className="text-[10px] text-neutral-400 mt-1">Resolved</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Metrics Row */}
              <div className="grid grid-cols-2 gap-4 py-4 mb-6 border-y border-neutral-200/60">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl font-bold tracking-tight text-neutral-950">
                      {m.value}
                    </div>
                    <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags & Action Links */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-white border border-neutral-200/80 text-neutral-600 hover:border-neutral-300 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  )}
                  {study.githubUrl && (
                    <a
                      href={study.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-800 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  )}
                  <a
                    href="mailto:dhairyagajera470@gmail.com?subject=Inquiry regarding project"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-800 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
                  >
                    <span>Discuss project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Right Column: The Wall of Experiments / Micro-Prototypes */}
        <div className="rounded-3xl bg-neutral-950 text-white p-7 sm:p-9 sticky top-24">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Interactive Wall
              </span>
              <h3 className="text-xl font-medium tracking-tight text-white mt-1">
                Engineering Prototypes
              </h3>
            </div>
            <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-neutral-800 text-neutral-300">
              {experimentsWall.length} modules
            </span>
          </div>

          <p className="text-xs font-mono text-neutral-400 mb-6 leading-relaxed">
            Exploratory prototypes investigating wire protocols, low-level data structures, and responsive rendering.
          </p>

          {/* Grid of Experiment Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {experimentsWall.map((exp) => (
              <a
                key={exp.id}
                href="#experiments"
                className="group/tile p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-800/80 transition-all block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wide text-neutral-400">
                    {exp.category}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300 group-hover/tile:text-white">
                    {exp.badge}
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-neutral-200 group-hover/tile:text-white mb-1">
                  {exp.title}
                </h4>
                <p className="text-[11px] text-neutral-500 leading-tight">
                  {exp.detail}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-5 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>Explore full playground below</span>
            <a
              href="#experiments"
              className="text-white hover:underline flex items-center gap-1 font-sans font-medium"
            >
              <span>View all</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
