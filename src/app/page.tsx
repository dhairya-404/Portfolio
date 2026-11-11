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
  ShieldCheck,
  Lock,
  Building2,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const WORDS = [
  { text: "products", color: "teal" },
  { text: "network systems", color: "purple" },
  { text: "platforms", color: "teal" },
  { text: "software", color: "purple" },
  { text: "web apps", color: "teal" },
  { text: "experiences", color: "purple" },
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
    a: "PHP powers over 75% of the existing web and delivers battle-tested concurrency, mature deployment lifecycles, and rapid execution. By connecting PHP to lightweight local inference micro-services or on-device model runtimes via UNIX domain sockets, I achieve under 45ms P95 classification latency without the memory footprint or complexity of monolithic Python clusters.",
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
      <section className="relative min-h-[92vh] flex flex-col justify-between px-[var(--page-gutter)] pt-24 sm:pt-28 pb-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 pb-16 sm:pb-20">
          {/* Status Kicker Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-chip mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
            <span className="text-xs font-mono font-medium tracking-tight text-neutral-300">
              Dhairya · Systems & Full-Stack Developer
            </span>
          </div>

          {/* Huge Typography with Glowing Neon Liquid Glass Capsule */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.035em] text-white leading-[1.05] mb-8">
            <div>I build</div>

            {/* The Glowing Neon Liquid Glass Capsule (3D optical lens) */}
            <div className="my-2 sm:my-3 inline-block">
              <span
                className={`inline-flex items-center px-7 sm:px-10 py-2 sm:py-3.5 rounded-full font-bold tracking-tight transition-all duration-500 ${
                  WORDS[wordIndex].color === "teal"
                    ? "neon-capsule-teal"
                    : "neon-capsule-purple"
                }`}
              >
                <span key={wordIndex} className="animate-word-in">
                  {WORDS[wordIndex].text}
                </span>
              </span>
            </div>

            <div>worth remembering.</div>
          </h1>

          {/* Narrative Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-neutral-400 font-normal leading-relaxed tracking-tight max-w-3xl mb-12">
            I design and build websites, web apps and systems for startups and growing businesses worldwide. An independent engineer, from the first conversation to launch.
          </p>

          {/* Action Triggers (Liquid Glass Capsule) */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="glass-capsule-btn inline-flex items-center gap-3 pl-7 pr-2.5 py-3.5 rounded-full text-white font-medium text-sm sm:text-base group active:scale-98 cursor-pointer"
            >
              <span className="tracking-tight">Start a project</span>
              <div className="w-8 h-8 rounded-full bg-[#2dd4bf] flex items-center justify-center text-neutral-950 group-hover:translate-x-0.5 transition-transform shadow-[0_0_12px_rgba(45,212,191,0.7)]">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </Link>

            <Link
              href="/work"
              className="glass-chip inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base text-neutral-200 hover:text-white transition-all group cursor-pointer"
            >
              <span>See the work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-white" />
            </Link>
          </div>
        </div>

        {/* Infinite Marquee Ticker with generous top clearance from buttons */}
        <div className="relative z-10 w-full mt-12 sm:mt-16 pt-8 pb-4 border-t border-white/10 overflow-hidden">
          <div className="animate-marquee flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-500">
            {[
              "CityConnect Mobile",
              "Tesso Prototype",
              "TraceLab Forensics",
              "SHA-256 Non-Repudiation",
              "Multi-Network Bonding",
              "Flutter & Firebase",
              "vis-timeline DFIR",
              "Next.js 16 Turbopack",
              "React 19",
              "Civic Grievance Engine",
              "PHP 8.3 & ML Triage",
              "TypeScript",
              "Socket Multiplexing",
              "Sub-50ms Latency",
              "Tailwind CSS v4",
              "CityConnect Mobile",
              "Tesso Prototype",
              "TraceLab Forensics",
              "WebSocket Telemetry",
              "Sub-millisecond IPC",
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
      <section className="py-24 px-[var(--page-gutter)] border-y border-white/10 glass-section relative">
        <div className="max-w-7xl mx-auto">
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
        <div className="max-w-7xl mx-auto">
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
            {/* Project: TraceLab — Digital Activity Forensics & Incident Triage Platform */}
            <div className="p-8 sm:p-12 rounded-3xl dark-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group border border-teal-500/20">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Digital Forensics & Incident Response · 2026</span>
                  </span>
                  <span className="text-xs font-mono text-neutral-400 font-bold">Tamper-Evident SHA-256 Non-Repudiation</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-teal-200 transition-colors">
                  TraceLab — Digital Activity Forensics & Incident Triage Platform
                </h3>

                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base mb-6 font-normal">
                  The forensic detective workbench for digital event logs. Ingests heterogeneous system logs (Windows Events, Apache, SSH, Palo Alto), generates cryptographic SHA-256 evidence digests, reconstructs synchronized timeline swimlanes, and isolates multi-stage attacks using dual-engine heuristics and scikit-learn Isolation Forests.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["PHP 8.3 MVC", "scikit-learn ML", "SHA-256 Non-Repudiation", "vis-timeline", "DFIR Forensics", "Anomaly Detection"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/work/tracelab"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5 cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://tracelabs-ops.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-chip inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm text-teal-300 hover:text-white transition-all cursor-pointer"
                  >
                    <span>Visit Live Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/dhairya-404/Trace-Labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-chip inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm text-neutral-300 hover:text-white transition-all cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Right: Forensic DFIR Telemetry Preview */}
              <div className="lg:col-span-5 p-6 rounded-2xl glass-terminal font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-teal-400" />
                    <span>CHAIN OF CUSTODY</span>
                  </span>
                  <span className="text-teal-400 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    VERIFIED EVIDENCE
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-neutral-500">SHA-256 Non-Repudiation Digest:</div>
                  <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-teal-300 text-[10px] break-all">
                    7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] text-neutral-300">
                    <span>Heterogeneous Ingestion</span>
                    <span className="text-teal-300 font-bold">4 SIEM Connectors</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px] text-neutral-400">
                    <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center">Windows EVTX 4624</div>
                    <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center">Palo Alto CEF</div>
                    <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center">SSH auth.log</div>
                    <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center">Apache Access</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[11px] flex items-center justify-between">
                  <span className="text-purple-300 font-bold">ML Isolation Forest:</span>
                  <span className="text-teal-300 font-mono">94.8% Threat Suspicion</span>
                </div>
              </div>
            </div>

            {/* Project: Tesso — Multi-Network Bonding & Download Acceleration Engine */}
            <div className="p-8 sm:p-12 rounded-3xl dark-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono">
                    Systems Engineering · 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Working Client
                  </span>
                  <span className="text-xs font-mono text-neutral-400">Multi-Interface Aggregation</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-teal-200 transition-colors">
                  Tesso — Multi-Network Bonding & Download Acceleration Engine
                </h3>

                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base mb-6 font-normal">
                  Multi-network aggregation desktop client that bonds Wi-Fi, Ethernet, and 4G/5G mobile tethering into a unified high-throughput stream. Leverages C FFI socket binding (`koffi`), Windows IP routing, and dynamic byte-range chunking with $0 server cost.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Electron", "Vite & TypeScript", "C FFI (koffi)", "Windows Source Routing", "Socket Multiplexing", "Zero-Cost Infra"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/work/tesso"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://github.com/dhairya-404/Tesso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-chip inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm text-neutral-300 hover:text-white transition-all cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>

              {/* Right: Live Interactive Telemetry Preview */}
              <div className="lg:col-span-5 p-6 rounded-2xl glass-terminal font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-neutral-400">MULTIPLEXER STATUS</span>
                  <span className="text-amber-400 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    PROTOTYPE BONDED (3.8x)
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

            {/* Project: CityConnect — Civic Grievance Redressal & Municipal Management Platform */}
            <div className="p-8 sm:p-12 rounded-3xl dark-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group border border-blue-500/20">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Cross-Platform Mobile & Civic Tech · 2026</span>
                  </span>
                  <span className="text-xs font-mono text-neutral-400 font-bold">Real-Time Grievance Lifecycle & PDF Dossiers</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-blue-200 transition-colors">
                  CityConnect — Civic Grievance Redressal & Municipal Management Platform
                </h3>

                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base mb-6 font-normal">
                  End-to-end civic governance mobile application connecting urban citizens directly with city administrative departments. Features automated pincode-to-ward geospatial resolution, Cloudinary photographic evidence uploads, admin moderation consoles, and automated vector PDF audit dossiers.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Flutter 3.x", "Dart", "Cloud Firestore", "Cloudinary REST", "Vector PDF Engine", "Role-Based Auth"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/work/cityconnect"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5 cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://github.com/dhairya230508/CityConnect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-chip inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm text-neutral-300 hover:text-white transition-all cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Right: Municipal Command Console & Telemetry Preview */}
              <div className="lg:col-span-5 p-6 rounded-2xl glass-terminal font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>MUNICIPAL DISPATCH CONSOLE</span>
                  </span>
                  <span className="text-blue-400 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    REAL-TIME SYNC
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] text-neutral-500">Active Grievance Triage (#CC-2026-8842):</div>
                  <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-neutral-300 text-[11px] space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-300 font-bold">Main Trunk Water Burst</span>
                      <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px]">In Progress</span>
                    </div>
                    <div className="text-neutral-400 text-[10px]">Ward 12 (Bodakdev) · Pincode 380015 Auto-Resolved</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] text-neutral-300">
                    <span>Department Breakdown</span>
                    <span className="text-blue-300 font-bold">384 Total Grievances</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px] text-neutral-400">
                    <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center text-blue-300">Water & Sewerage (38%)</div>
                    <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center text-teal-300">Road Infra (31%)</div>
                    <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center text-purple-300">Electrical Grid (19%)</div>
                    <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center text-amber-300">Sanitation (12%)</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[11px] flex items-center justify-between">
                  <span className="text-blue-300 font-bold">Audit Dossier Engine:</span>
                  <span className="text-teal-300 font-mono">Vector A4 PDF Generated</span>
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
              <div className="lg:col-span-5 p-6 rounded-2xl glass-terminal font-mono text-xs space-y-4">
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
      <section className="py-28 px-[var(--page-gutter)] border-b border-white/10 glass-section relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                What I <span className="font-editorial-serif font-normal italic text-[#c084fc]">deliver</span>.
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
        <div className="max-w-7xl mx-auto">
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
      <section className="py-28 px-[var(--page-gutter)] border-b border-white/10 glass-section relative">
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
