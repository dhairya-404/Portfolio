"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Network, FlaskConical, Flame, Biohazard } from "lucide-react";

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

function PeriodicElement({ number, symbol, name, mass }: { number: number; symbol: string; name: string; mass: string }) {
  return (
    <div className="w-14 h-16 sm:w-16 sm:h-20 bg-emerald-950/80 border-2 border-emerald-500/80 rounded-lg p-1.5 flex flex-col justify-between shadow-[0_0_25px_rgba(16,185,129,0.4)] select-none">
      <div className="flex justify-between items-start leading-none">
        <span className="text-[9px] sm:text-[10px] font-mono text-emerald-300 font-bold">{number}</span>
        <span className="text-[8px] font-mono text-emerald-400/70">{mass}</span>
      </div>
      <div className="text-xl sm:text-2xl font-bold font-mono text-white text-center tracking-tight leading-none">
        {symbol}
      </div>
      <div className="text-[8px] font-mono text-emerald-300/80 text-center uppercase tracking-wider truncate">
        {name}
      </div>
    </div>
  );
}

interface Project {
  slug: string;
  title: string;
  category: "systems" | "ml" | "fullstack" | "creative";
  categoryLabel: string;
  year: string;
  highlight: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  caseStudyAvailable: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    slug: "tracelab",
    title: "TraceLab — Digital Activity Forensics & Incident Triage Platform",
    category: "fullstack",
    categoryLabel: "Digital Forensics & ML Triage",
    year: "2026",
    highlight: "Tamper-Evident SHA-256 Non-Repudiation",
    description: "The forensic detective workbench for digital event logs. Ingests heterogeneous system logs (Windows Event 4624/4625, Apache, SSH auth, Palo Alto CEF), generates cryptographic SHA-256 evidence digests, reconstructs synchronized timeline swimlanes, and isolates multi-stage attacks using dual-engine heuristics and scikit-learn Isolation Forests.",
    tags: ["PHP 8.3 MVC", "Python & scikit-learn", "SHA-256 Non-Repudiation", "vis-timeline", "DFIR Forensics", "Anomaly Detection"],
    metrics: [
      { label: "Evidence Integrity", value: "SHA-256 Non-Repudiation" },
      { label: "Log Normalization", value: "Heterogeneous SIEM" },
      { label: "Triage Engine", value: "< 18ms Realtime" },
    ],
    caseStudyAvailable: true,
    liveUrl: "https://tracelabs-ops.vercel.app",
    githubUrl: "https://github.com/dhairya-404/Trace-Labs",
  },
  {
    slug: "multi-network-bonding",
    title: "Multi-Network Bonding & Download Acceleration Engine",
    category: "systems",
    categoryLabel: "Systems & Network Bonding",
    year: "2026",
    highlight: "3.8x Throughput Aggregation",
    description: "Concurrent dual-WAN channel aggregation protocol. Multiplexes TCP/UDP data streams across Wi-Fi and Ethernet interfaces with automated ISP failover and sub-millisecond chunk reassembly.",
    tags: ["C++ / Go", "Socket Multiplexing", "TCP / UDP Bonding", "Packet Schedulers", "Linux Network Stack"],
    metrics: [
      { label: "Bandwidth Multiplier", value: "3.8x" },
      { label: "Packet Loss", value: "0.00%" },
      { label: "Failover Time", value: "< 12ms" },
    ],
    caseStudyAvailable: true,
  },
  {
    slug: "ml-inference-engine",
    title: "Machine Learning Inference Platform with PHP IPC Bridge",
    category: "ml",
    categoryLabel: "Applied Machine Learning",
    year: "2026",
    highlight: "< 45ms P95 Inference Latency",
    description: "Bridging battle-tested PHP backend workers with embedded Python classification models via lightweight UNIX domain sockets. Achieves sub-45ms P95 inference latency without heavy cluster overhead.",
    tags: ["PHP 8.3+", "Python Inference", "UNIX Domain Sockets", "NLP Classification", "Sub-50ms P95"],
    metrics: [
      { label: "P95 Latency", value: "< 45ms" },
      { label: "Throughput", value: "1,840 req/s" },
      { label: "Memory Footprint", value: "48MB stable" },
    ],
    caseStudyAvailable: true,
  },
  {
    slug: "telemetry-dashboard",
    title: "High-Frequency Telemetry & Stream Control Room",
    category: "fullstack",
    categoryLabel: "Full-Stack Development",
    year: "2026",
    highlight: "60fps Live Socket Telemetry",
    description: "Real-time interactive dashboard monitoring thousands of concurrent socket streams. Built using Next.js 16 App Router, React 19 Server Components, and zero layout shift rendering.",
    tags: ["Next.js 16", "React 19", "WebSockets", "Tailwind CSS v4", "TypeScript"],
    metrics: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "CLS Score", value: "0.000" },
      { label: "LCP", value: "82ms" },
    ],
    caseStudyAvailable: false,
  },
];

export default function WorkPage() {
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (["systems", "ml", "fullstack", "creative", "all"].includes(hash)) {
        setFilter(hash);
      } else {
        const params = new URLSearchParams(window.location.search);
        const f = params.get("filter") || params.get("category");
        if (f && ["systems", "ml", "fullstack", "creative", "all"].includes(f)) {
          setFilter(f);
        }
      }
    }
  }, []);

  const handleFilterChange = (id: string) => {
    setFilter(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", id === "all" ? "/work" : `/work#${id}`);
    }
  };

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="py-24 px-[var(--page-gutter)] max-w-7xl mx-auto w-full">
      {/* Page Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-4">
          <Network className="w-3.5 h-3.5" />
          <span>Case Studies & Projects</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Selected <span className="font-editorial-serif font-normal italic text-[#c084fc]">work</span>.
        </h1>
        <p className="text-base sm:text-xl text-neutral-400 max-w-2xl leading-relaxed">
          Detailed case studies across multi-network bonding, machine learning inference backends, and full-stack software architectures.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-white/10">
          {[
            { id: "all", label: "All Projects" },
            { id: "systems", label: "Systems & Bonding" },
            { id: "ml", label: "Machine Learning" },
            { id: "fullstack", label: "Full-Stack" },
            { id: "creative", label: "Creative Coding" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleFilterChange(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? tab.id === "creative"
                    ? "bg-emerald-400 text-neutral-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                    : "bg-white text-neutral-950 font-bold shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                  : "glass-chip text-neutral-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid or Breaking Bad Cooking Under the Hood Screen */}
      <div className="space-y-8">
        {filter === "creative" ? (
          /* Breaking Bad Laboratory Cooking Screen */
          <div className="p-8 sm:p-12 rounded-3xl bg-[#030a06] border-2 border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.15)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group">
            {/* Ambient Chemical Vapor Background */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content */}
            <div className="lg:col-span-7 relative z-10">
              {/* Periodic Table Brand Tiles */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <PeriodicElement number={35} symbol="Br" name="Bromine" mass="79.90" />
                <PeriodicElement number={56} symbol="Ba" name="Barium" mass="137.33" />
                <span className="px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 ms-2">
                  <Biohazard className="w-4 h-4 text-emerald-400" />
                  METH-GRADE CREATIVE LAB · 99.1% PURITY
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-mono mb-4 leading-tight">
                I AM COOKING <span className="text-emerald-400 underline decoration-emerald-500 decoration-wavy">UNDER THE HOOD!!</span>
              </h2>

              {/* Subtitle */}
              <p className="text-emerald-200/90 leading-relaxed text-sm sm:text-base mb-6 font-mono">
                &ldquo;Say my name.&rdquo; Experimental WebGL shaders, kinetic physics, and bespoke micro-interactions are synthesizing at extreme temperatures inside the private lab.
              </p>

              {/* Prompt Required Section: Till then checkout other things */}
              <div className="pt-6 border-t border-emerald-500/20 space-y-4">
                <div className="flex items-center gap-2 text-sm font-mono text-neutral-200 font-bold">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>till then checkout other things:</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => handleFilterChange("systems")}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-emerald-500/10 text-xs font-mono text-neutral-200 hover:text-emerald-300 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>⚡ Systems &amp; Dual-WAN Bonding</span>
                  </button>
                  <button
                    onClick={() => handleFilterChange("fullstack")}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-emerald-500/10 text-xs font-mono text-neutral-200 hover:text-emerald-300 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>🛡️ TraceLab DFIR Platform</span>
                  </button>
                  <button
                    onClick={() => handleFilterChange("ml")}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-emerald-500/10 text-xs font-mono text-neutral-200 hover:text-emerald-300 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>🧠 Machine Learning IPC Bridge</span>
                  </button>
                  <Link
                    href="/experiments"
                    className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 text-xs font-mono text-emerald-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <FlaskConical className="w-3.5 h-3.5" />
                    <span>Visit Interactive Lab Sandbox &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Heisenberg Lab Telemetry HUD */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-emerald-500/30 font-mono text-xs space-y-4 shadow-[0_0_35px_rgba(16,185,129,0.15)] relative overflow-hidden z-10">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 border-b border-emerald-500/20 pb-3 flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-emerald-400" />
                  LAB TELEMETRY
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  COOKING
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                  <span className="text-neutral-400">Chemical Purity</span>
                  <span className="text-emerald-400 font-bold text-sm font-mono">99.1% (Blue Sky)</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                  <span className="text-neutral-400">Chief Chemist</span>
                  <span className="text-white font-bold text-sm font-mono">Heisenberg // Dhairya</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                  <span className="text-neutral-400">Core Reaction</span>
                  <span className="text-emerald-300 font-bold text-sm font-mono">WebGL × 120Hz Canvas</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                  <span className="text-neutral-400">Batch Status</span>
                  <span className="text-amber-400 font-bold text-sm font-mono">Bubbling In Lab</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          filtered.map((project) => (
            <div
              key={project.slug}
              className="p-8 sm:p-12 rounded-3xl dark-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
            >
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono">
                    {project.categoryLabel} · {project.year}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 font-bold">{project.highlight}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h2>

                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base mb-6 font-normal">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.caseStudyAvailable && (
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-chip inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm text-teal-300 hover:text-white transition-all cursor-pointer"
                    >
                      <span>Visit Live Platform</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-chip inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {!project.caseStudyAvailable && !project.liveUrl && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-mono">
                      <span>Interactive Experiment · Ready in Lab</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Metrics Showcase */}
              <div className="lg:col-span-5 p-6 rounded-2xl glass-terminal font-mono text-xs space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 border-b border-white/10 pb-3 flex justify-between">
                  <span>Verified Telemetry</span>
                  <span className="text-teal-400">ACTIVE</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3 rounded-lg bg-white/5 flex items-center justify-between">
                      <span className="text-neutral-400">{m.label}</span>
                      <span className="text-white font-bold text-sm">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
