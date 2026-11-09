"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Network, CheckCircle2, ArrowUpRight } from "lucide-react";

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

export default function MultiNetworkBondingCaseStudy() {
  const [burstCount, setBurstCount] = useState(64);
  const [eth0Speed, setEth0Speed] = useState(840);
  const [wlan0Speed, setWlan0Speed] = useState(640);

  const simulateBurst = () => {
    const newEth = Math.floor(Math.random() * 200 + 780);
    const newWlan = Math.floor(Math.random() * 180 + 580);
    setEth0Speed(newEth);
    setWlan0Speed(newWlan);
    setBurstCount((prev) => prev + Math.floor(Math.random() * 32 + 32));
  };

  const totalSpeed = eth0Speed + wlan0Speed;

  return (
    <article className="py-24 px-[var(--page-gutter)] max-w-5xl mx-auto w-full">
      {/* Back button */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors mb-10 group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to all projects</span>
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono">
            <Network className="w-3.5 h-3.5" />
            <span>Case Study · Systems Engineering</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(245,158,11,0.25)]">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Working Prototype
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Tesso — Multi-Network Bonding & Download Acceleration Engine
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal mb-6">
          Tesso is a high-performance socket bonding desktop client aggregating disparate network connections (Wi-Fi + Fiber Ethernet + 4G/5G Tethering) into a unified high-throughput stream with automated ISP failover and zero stream corruption.
        </p>

        {/* GitHub Repository CTA */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/dhairya-404/Tesso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg shadow-white/5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <span className="text-xs font-mono text-neutral-400">
            Repository: dhairya-404/Tesso
          </span>
        </div>
      </div>

      {/* Metadata Pill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl dark-card mb-16 text-xs font-mono">
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Status</div>
          <div className="text-amber-300 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Working Prototype
          </div>
        </div>
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Architecture</div>
          <div className="text-white font-bold">Socket Multiplexing</div>
        </div>
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Speedup</div>
          <div className="text-teal-400 font-bold">3.8x Multiplier</div>
        </div>
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Failover</div>
          <div className="text-white font-bold">&lt; 12ms Real-time</div>
        </div>
      </div>

      {/* Interactive Simulator Card */}
      <div className="p-8 rounded-3xl dark-card mb-16 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs font-mono uppercase text-teal-400">Live Prototype Simulator</div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Tesso Dual-WAN Channel Aggregation Telemetry
            </h3>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono font-bold text-teal-300">{totalSpeed} Mbps</div>
            <div className="text-xs font-mono text-neutral-400">Aggregated Bandwidth</div>
          </div>
        </div>

        <div className="space-y-4 font-mono text-xs">
          <div>
            <div className="flex justify-between text-neutral-300 mb-1">
              <span>Fiber Interface (eth0)</span>
              <span className="text-teal-400 font-bold">{eth0Speed} Mbps</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-teal-400 h-full transition-all duration-300"
                style={{ width: `${(eth0Speed / 1100) * 100}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-neutral-300 mb-1">
              <span>5G Cellular Interface (wlan0)</span>
              <span className="text-purple-400 font-bold">{wlan0Speed} Mbps</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-purple-400 h-full transition-all duration-300"
                style={{ width: `${(wlan0Speed / 1100) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs">
          <button
            onClick={simulateBurst}
            className="px-5 py-2.5 rounded-full bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Trigger Network Re-balance
          </button>
          <div className="text-neutral-400 font-mono">
            Total chunks multiplexed: <span className="text-white font-bold">{burstCount}</span>
          </div>
        </div>
      </div>

      {/* Main Prose Content */}
      <div className="space-y-12 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            The Fundamental Problem
          </h2>
          <p className="mb-4">
            Under normal operating systems (Windows, Linux, macOS), application layer network connections (HTTP/HTTPS, raw TCP) bind to a single default gateway and single network interface at any given instant. Even if a machine is simultaneously connected to Gigabit Ethernet and ultra-fast 5G Wi-Fi, 50% or more of available physical bandwidth sits completely idle.
          </p>
          <p>
            Standard multi-path protocols like MPTCP require kernel-level modifications on both the client device and the remote web server. This makes them impractical for real-world high-speed downloads from standard CDN nodes and storage endpoints.
          </p>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            The Solution: Application-Layer Dynamic Multiplexing
          </h2>
          <p className="mb-4">
            To bypass kernel restrictions, I engineered a userspace socket bonding daemon. It operates by intercepting requests, splitting the payload into variable-sized byte ranges, and binding separate TCP sockets to specific network adapters via standard socket options (`SO_BINDTODEVICE` on Linux, `IP_UNICAST_IF` on Windows).
          </p>
          <ul className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 text-sm sm:text-base font-mono">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <span>Dynamic Chunk Sizing: Adapting segment size based on real-time interface RTT.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <span>Circular Ring Buffer: Zero-copy in-memory reordering preventing disk bottlenecks.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <span>Sub-12ms Automated Failover: Re-routing orphaned chunks immediately if one interface drops.</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Measurable Benchmarks
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-mono border border-white/10 rounded-xl overflow-hidden">
              <thead className="bg-white/10 text-neutral-200">
                <tr>
                  <th className="p-3">Scenario</th>
                  <th className="p-3">Throughput</th>
                  <th className="p-3">P95 Latency</th>
                  <th className="p-3">Reassembly Loss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-neutral-300">
                <tr>
                  <td className="p-3">Single Fiber Interface</td>
                  <td className="p-3 text-white">410 Mbps</td>
                  <td className="p-3">18ms</td>
                  <td className="p-3">0.00%</td>
                </tr>
                <tr>
                  <td className="p-3">Single 5G Wi-Fi Interface</td>
                  <td className="p-3 text-white">360 Mbps</td>
                  <td className="p-3">34ms</td>
                  <td className="p-3">0.02%</td>
                </tr>
                <tr className="bg-teal-500/10 font-bold text-teal-300">
                  <td className="p-3">Bonded Dual-WAN Engine</td>
                  <td className="p-3">1,480 Mbps (3.8x)</td>
                  <td className="p-3">14ms</td>
                  <td className="p-3">0.00%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
}
