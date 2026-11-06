"use client";

import { ArrowUpRight, Cpu, Network, Sparkles } from "lucide-react";
import { AndreasSkyCanvas } from "./AndreasSkyCanvas";

interface AndreasHeroProps {
  onSwitchMode?: () => void;
}

export function AndreasHero({ onSwitchMode }: AndreasHeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-4 sm:px-8 pt-6 pb-4 overflow-hidden bg-white select-none">
      {/* Reverse-Engineered Dithered Blue Sky Cloud Mosaic Canvas */}
      <AndreasSkyCanvas seed={12} cell={22} />

      {/* Top Floating Navigation (Photo 3 Recreated) */}
      <header className="relative z-20 flex items-center justify-between max-w-6xl mx-auto w-full pt-2">
        {/* Left Pill: Pegasus Emblem + Nav Items */}
        <div className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-sm">
          {/* Andreas Pegasus / Emblem SVG */}
          <a
            href="#"
            className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-neutral-100 transition-colors mr-1"
            title="Dhairya Vision"
          >
            <svg
              className="w-4 h-4 text-neutral-900"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-1.5V9a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3v1.5H7.5A3 3 0 0 0 4.5 13.5V18a3 3 0 0 0 3 3h12zM9 13.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5V18H9v-4.5z" />
            </svg>
          </a>

          <a
            href="#work"
            className="px-2.5 py-1 rounded-full text-xs font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="px-2.5 py-1 rounded-full text-xs font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
          >
            About
          </a>
          <a
            href="#writing"
            className="px-2.5 py-1 rounded-full text-xs font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
          >
            Writing
          </a>
          <a
            href="#experiments"
            className="px-2.5 py-1 rounded-full text-xs font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
          >
            Play
          </a>
        </div>

        {/* Center: Mode Switch Pill */}
        {onSwitchMode && (
          <button
            onClick={onSwitchMode}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 text-xs font-mono transition-all shadow-xs"
            title="Switch to Thenn.in Dark Mode"
          >
            <span>Switch to Thenn Dark Mode</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          </button>
        )}

        {/* Right Pill: Book a Call / Inquire */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:dhairyagajera470@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-medium transition-colors shadow-sm"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </header>

      {/* Center Content: Massive Italic Calligraphy (Photo 3 Signature) */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center my-auto px-4 py-8">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-editorial-serif font-normal italic tracking-[-0.025em] text-neutral-950 leading-[0.98] mb-8">
          Engineer who <br />
          ships with vision
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
          I&apos;m <span className="font-semibold text-neutral-900">Dhairya</span>, making high-throughput network systems, machine learning pipelines, and the tactile tools to build them, from first packet to production so that your systems scale and your business grows.
        </p>

        {/* Quick Email Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-neutral-200/90 shadow-xs text-xs font-mono text-neutral-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>dhairyagajera470@gmail.com</span>
        </div>
      </div>

      {/* Peeking Floating Bottom Interactive Cards (Photo 3 Signature) */}
      <div className="relative z-20 max-w-5xl mx-auto w-full pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 -mb-8 sm:-mb-6">
          {/* Card 1: Multi-Link Bonding */}
          <div className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-md flex items-center justify-between hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center border border-neutral-200/80">
                <Network className="w-4 h-4 text-neutral-800" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-neutral-900">Multi-WAN Bonding</div>
                <div className="text-[10px] text-neutral-500 font-mono">3.8x Speedup · Active</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Live
            </span>
          </div>

          {/* Card 2: ML Inference Pipeline */}
          <div className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-md flex items-center justify-between hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center border border-neutral-200/80">
                <Cpu className="w-4 h-4 text-neutral-800" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-neutral-900">PHP & ML Pipeline</div>
                <div className="text-[10px] text-neutral-500 font-mono">&lt; 45ms P95 Latency</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              IPC
            </span>
          </div>

          {/* Card 3: Kinetic Physics Sandbox */}
          <div className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-md flex items-center justify-between hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center border border-neutral-200/80">
                <Sparkles className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-neutral-900">RK4 Physics Sandbox</div>
                <div className="text-[10px] text-neutral-500 font-mono">60fps Smooth Springs</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              Play
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
