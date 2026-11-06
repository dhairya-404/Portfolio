"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Network,
  Terminal,
  Compass,
  HelpCircle,
  Plus,
  Minus,
} from "lucide-react";

const WORDS = [
  "brands",
  "network systems",
  "web apps",
  "ML platforms",
  "socket engines",
  "products",
];

const STATS = [
  {
    metric: "3.8x",
    label: "Bandwidth Multiplier",
    subtext: "Aggregated concurrent TCP/UDP socket bonding across dual network interfaces.",
  },
  {
    metric: "< 45ms",
    label: "Inference Latency",
    subtext: "P95 response time on lightweight ML classification pipelines with PHP bridge.",
  },
  {
    metric: "99.98%",
    label: "Packet Reliability",
    subtext: "Zero-loss stream recovery with automated failover and chunk reordering.",
  },
  {
    metric: "100%",
    label: "Type Safety & Edge QA",
    subtext: "Strict TypeScript compilation, zero layout shift, and 60fps animations.",
  },
];

const FAQS = [
  {
    q: "What types of engineering projects does Dhairya build?",
    a: "I specialize in three key domains: (1) Low-level network optimization and multi-network bonding algorithms that aggregate bandwidth across distinct network interfaces, (2) Machine learning inference systems integrated with robust backends like PHP and Python, and (3) High-performance web applications built using Next.js 16, React 19, and Tailwind CSS with sub-millisecond tactile responsiveness.",
  },
  {
    q: "How does the multi-network bonding and acceleration system work?",
    a: "Standard HTTP requests are constrained to a single socket and a single network interface (e.g. Wi-Fi or Ethernet). My system implements concurrent socket multiplexing: it dynamically splits incoming data streams into variable-sized byte ranges, schedules chunks across multiple interfaces based on real-time round-trip latency, and reassembles them with zero packet loss into a unified stream.",
  },
  {
    q: "Why pair PHP with Machine Learning inference backends?",
    a: "PHP powers over 75% of the existing web and delivers battle-tested concurrency, mature deployment lifecycles, and rapid execution. By connecting PHP to lightweight local inference micro-services or on-device model runtimes via UNIX domain sockets, we achieve under 45ms P95 classification latency without the memory footprint or complexity of monolithic Python clusters.",
  },
  {
    q: "What is your typical development stack and workflow?",
    a: "On the frontend: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide icons, and custom RK4 kinetic physics for micro-interactions. On the backend/systems layer: Go, C++, PHP 8.3+, Python, WebSockets, and low-latency IPC. Every codebase adheres to strict linting, zero layout shift (CLS 0), and comprehensive automated testing.",
  },
  {
    q: "How can someone get in touch or initiate a collaboration?",
    a: "The fastest way to reach me is by direct email at dhairyagajera470@gmail.com. Whether you have questions regarding network bonding architectures, custom full-stack software development, or algorithmic pipelines, I reply promptly with direct technical clarity.",
  },
];

export default function HomePage() {
  const [wordIndex, setWordIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Cycling words animation
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[92vh] flex flex-col justify-center px-[var(--page-gutter)] pt-20 pb-16 overflow-hidden bg-dot-matrix">
        <div className="relative z-10 max-w-5xl mx-auto w-full my-auto">
          {/* Status Kicker Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
            <span className="text-xs font-mono font-medium tracking-tight text-neutral-300">
              Dhairya · Systems & Full-Stack Developer
            </span>
          </div>

          {/* Huge Typography with Glowing Purple Neon Glass Capsule (Photo 1 Signature) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.035em] text-white leading-[1.05] mb-8">
            <div>We build</div>

            {/* The Glowing Purple Neon Glass Capsule */}
            <div className="my-2 sm:my-3 inline-block">
              <span className="neon-capsule inline-flex items-center px-6 sm:px-8 py-1.5 sm:py-2.5 rounded-3xl sm:rounded-4xl font-bold tracking-tight">
                <span key={wordIndex} className="animate-word-in">
                  {WORDS[wordIndex]}
                </span>
              </span>
            </div>

            <div>worth remembering.</div>
          </h1>

          {/* Narrative Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-neutral-400 font-normal leading-relaxed tracking-tight max-w-2xl mb-12">
            We design and build websites, web apps and systems for startups and growing businesses worldwide. One engineer, from the first conversation to launch.
          </p>

          {/* Action Triggers (Photo 1 Signature — Liquid Glass Capsule) */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full text-white font-medium text-sm sm:text-base transition-all duration-300 group hover:-translate-y-0.5 active:scale-98 cursor-pointer"
              style={{
                background: "rgba(14, 14, 22, 0.75)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.4), 0 16px 40px rgba(0,0,0,0.6)",
              }}
            >
              <span>Start a project</span>
              <div className="w-8 h-8 rounded-full bg-[#2dd4bf] flex items-center justify-center text-neutral-950 group-hover:translate-x-0.5 transition-transform shadow-[0_0_10px_rgba(45,212,191,0.6)]">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm text-neutral-300 hover:text-white transition-colors group cursor-pointer"
            >
              <span>See the work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-white" />
            </Link>
          </div>
        </div>

        {/* Infinite Marquee Ticker */}
        <div className="relative z-10 w-full pt-20 pb-4 border-t border-white/10 overflow-hidden">
          <div className="animate-marquee flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-500">
            {[
              "Multi-Network Bonding",
              "Socket Multiplexing",
              "Next.js 16 Turbopack",
              "React 19",
              "TypeScript",
              "PHP & ML Inference",
              "Packet Aggregation",
              "Sub-50ms Latency",
              "RK4 Kinetic Physics",
              "Tailwind CSS v4",
              "WebSocket Telemetry",
              "Sub-millisecond IPC",
              "Multi-Network Bonding",
              "Socket Multiplexing",
              "Next.js 16 Turbopack",
              "React 19",
              "TypeScript",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-8 shrink-0">
                <span className="hover:text-white transition-colors cursor-default">
                  {item}
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TELEMETRY & NUMBERS ===================== */}
      <section className="py-24 px-[var(--page-gutter)] border-y border-white/10 bg-[#09090d]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-2">
                Dhairya in Numbers
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Telemetry & engineering{" "}
                <span className="font-editorial-serif font-normal italic text-[#c084fc]">
                  benchmarks
                </span>
                .
              </h2>
            </div>
            <p className="text-sm md:text-base text-neutral-400 max-w-md font-normal leading-relaxed">
              Measurable impact across multi-socket aggregation, on-device machine learning inference, and 60fps frontend execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl dark-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-150 transition-transform" />
                  </div>
                  <div className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {stat.metric}
                  </div>
                  <div className="text-base font-semibold text-neutral-200 mb-3">
                    {stat.label}
                  </div>
                </div>
                <div className="text-xs text-neutral-400 leading-relaxed font-normal pt-4 border-t border-white/10">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED WORK ===================== */}
      <section className="py-28 px-[var(--page-gutter)] border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-3">
                <Network className="w-3.5 h-3.5" />
                <span>Selected Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Engineered with{" "}
                <span className="font-editorial-serif font-normal italic text-[#c084fc]">
                  rigor
                </span>
                .
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              <span>Explore all case studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-8">
            {/* Project 1: Multi-Network Bonding */}
            <div className="p-8 sm:p-12 rounded-3xl dark-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono">
                    Systems Engineering · 2026
                  </span>
                  <span className="text-xs font-mono text-neutral-500">Dual-WAN Socket Bonding</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-teal-200 transition-colors">
                  Multi-Network Bonding & Download Acceleration Engine
                </h3>

                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base mb-6">
                  Concurrent dual-interface channel aggregation that bonds Wi-Fi and Ethernet interfaces into a single unified virtual link. Implements dynamic chunk scheduling and sub-millisecond packet reassembly with zero stream corruption.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["C++ / Go", "Socket Multiplexing", "TCP / UDP Reassembly", "Dynamic Load Balancer"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/work/multi-network-bonding"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: Live Interactive Telemetry Preview */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-neutral-400">MULTIPLEXER STATUS</span>
                  <span className="text-teal-400 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    BONDED (3.8x)
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-neutral-300 mb-1">
                      <span>eth0 (Fiber WAN)</span>
                      <span className="text-teal-300">840 Mbps</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-teal-400 h-full w-[84%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-neutral-300 mb-1">
                      <span>wlan0 (5G Cellular)</span>
                      <span className="text-purple-300">640 Mbps</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-purple-400 h-full w-[64%]" />
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-[11px] text-neutral-400 flex justify-between">
                  <span>Reassembly Loss: 0.00%</span>
                  <span>P95 Latency: 14ms</span>
                </div>
              </div>
            </div>

            {/* Project 2: PHP & ML Inference Platform */}
            <div className="p-8 sm:p-12 rounded-3xl dark-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
                    Applied ML & Systems · 2026
                  </span>
                  <span className="text-xs font-mono text-neutral-500">Low-Latency IPC Architecture</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-purple-200 transition-colors">
                  Machine Learning Inference Platform with PHP IPC Bridge
                </h3>

                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base mb-6">
                  Bridging PHP backends with local embedded machine learning runtimes through low-overhead UNIX domain sockets. Achieves sub-45ms P95 classification latency without monolithic server clusters.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["PHP 8.3+", "Python Inference", "UNIX Domain Sockets", "Sub-45ms P95", "NLP Classifier"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/work/ml-inference-engine"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: IPC Telemetry Diagram */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-neutral-400">IPC PIPELINE TELEMETRY</span>
                  <span className="text-purple-400 font-bold">&lt; 45ms P95</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-[11px] text-neutral-300 space-y-1.5">
                  <div className="text-teal-400">1. Client Request &rarr; PHP 8.3 Worker</div>
                  <div className="text-neutral-400">&nbsp;&nbsp;&bull; Preprocessing & Tokenization (3.2ms)</div>
                  <div className="text-purple-300">2. UNIX Domain Socket IPC (0.4ms)</div>
                  <div className="text-neutral-400">&nbsp;&nbsp;&bull; Python Model Inference (32.1ms)</div>
                  <div className="text-teal-400">3. JSON Response Stream (1.8ms)</div>
                </div>
                <div className="text-[11px] text-neutral-400 flex justify-between">
                  <span>Throughput: 1,840 req/s</span>
                  <span className="text-emerald-400">Memory: 48MB stable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES / CAPABILITIES ===================== */}
      <section className="py-28 px-[var(--page-gutter)] border-b border-white/10 bg-[#09090d]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                What we <span className="font-editorial-serif font-normal italic text-[#c084fc]">deliver</span>.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              <span>Explore services breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                idx: "01",
                title: "Multi-Network Bonding & Socket Systems",
                desc: "Concurrent channel bonding across disparate ISPs, low-overhead socket multiplexers, and packet schedulers.",
                tags: ["TCP/UDP", "Multiplexing", "WAN Failover"],
              },
              {
                idx: "02",
                title: "Full-Stack Development & Next.js 16",
                desc: "Zero-layout-shift web applications using Turbopack, React 19 Server Components, and sub-second routing.",
                tags: ["Next.js 16", "React 19", "TypeScript"],
              },
              {
                idx: "03",
                title: "Custom Web Applications & Control Dashboards",
                desc: "High-density control centers streaming live system states via low-latency WebSockets at 60fps.",
                tags: ["WebSockets", "Telemetry", "State Machines"],
              },
              {
                idx: "04",
                title: "Applied Machine Learning & PHP Pipelines",
                desc: "Bridging battle-tested PHP architectures with embedded local inference models with sub-50ms latency.",
                tags: ["PHP 8.3", "Inference IPC", "NLP"],
              },
              {
                idx: "05",
                title: "Creative Coding & Kinetic Micro-Interactions",
                desc: "Tactile physical simulations, Runge-Kutta 4th order springs, and canvas shaders that feel alive.",
                tags: ["RK4 Springs", "HTML5 Canvas", "Micro-UX"],
              },
              {
                idx: "06",
                title: "Edge Performance & Architecture Audits",
                desc: "Eliminating memory leaks, optimizing Core Web Vitals, and strict end-to-end type safety verification.",
                tags: ["CLS 0", "Sub-100ms LCP", "100% Strict"],
              },
            ].map((service) => (
              <div
                key={service.idx}
                className="p-8 rounded-2xl dark-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-neutral-500">
                      {service.idx}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-150 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-teal-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {service.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROCESS / APPROACH ===================== */}
      <section className="py-28 px-[var(--page-gutter)] border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>Methodology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                How a project <span className="font-editorial-serif font-normal italic text-[#c084fc]">runs</span>.
              </h2>
            </div>
            <Link
              href="/approach"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              <span>Read detailed approach</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                roman: "I",
                title: "Understand",
                summary: "Auditing constraints, socket topologies, latency budgets, and user journeys. No assumptions.",
              },
              {
                num: "02",
                roman: "II",
                title: "Design",
                summary: "Designing data contracts, interface hierarchy, tokens, and tactile kinetic spring states in code.",
              },
              {
                num: "03",
                roman: "III",
                title: "Build",
                summary: "Developing strict TypeScript, low-latency socket multiplexers, and modular Next.js components.",
              },
              {
                num: "04",
                roman: "IV",
                title: "Refine",
                summary: "Adversarial stress testing, packet drop validation, 60fps frame rate QA, and zero layout shift.",
              },
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl dark-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-neutral-500">{step.num}</span>
                    <span className="font-mono text-xs font-bold text-teal-400">{step.roman}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {step.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ACCORDION ===================== */}
      <section className="py-28 px-[var(--page-gutter)] border-b border-white/10 bg-[#09090d]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions, answered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Engineering <span className="font-editorial-serif font-normal italic text-[#c084fc]">inquiries</span>.
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                  >
                    <span className="text-lg sm:text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors tracking-tight">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-white text-neutral-950 border-white" : "text-neutral-400 group-hover:border-white/50"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-4 pt-2 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal animate-word-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
