"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, ArrowRight, Check, Copy } from "lucide-react";
import { ParticleWave } from "./ParticleWave";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dhairyagajera470@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "Studio" },
    { href: "/approach", label: "Approach" },
    { href: "/blog", label: "Journal" },
    { href: "/experiments", label: "Lab" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative pt-32 pb-16 border-t border-white/10 bg-[#070709] text-white overflow-hidden w-full">
      {/* ─── TOP CONTENT (Wide Max-Width Container) ─── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 w-full relative z-10">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-chip text-xs font-mono text-neutral-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
          <span>Available for High-Throughput Systems & Full-Stack Projects</span>
        </div>

        {/* Big Closing Statement */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6 max-w-5xl">
          Got something worth{" "}
          <span className="font-editorial-serif font-normal italic text-[#c084fc]">
            building
          </span>
          ?
        </h2>

        <p className="text-base sm:text-xl text-neutral-400 leading-relaxed font-normal max-w-2xl mb-8">
          Tell me where you are and what you want to build. A founder replies within one working day—with questions, then a tailored technical proposal.
        </p>
      </div>

      {/* ─── 100% FULL-BLEED 3D UNDULATING PARTICLE WAVE (NO SIDE PADDING) ─── */}
      <div className="relative w-full my-8 sm:my-12 overflow-hidden">
        {/* 3D Particle Wave Canvas spans 100% of viewport width */}
        <ParticleWave className="w-full" />

        {/* Floating Liquid Glass Capsules overlaying the wave, aligned to content margin */}
        <div className="absolute inset-0 flex items-center justify-start pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 w-full">
            <div className="pointer-events-auto flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Capsule 1: Start a project */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 pl-7 pr-2.5 py-3.5 rounded-full text-white font-medium text-sm sm:text-base transition-all duration-300 group hover:-translate-y-1 active:scale-98 cursor-pointer"
                style={{
                  background: "rgba(10, 10, 16, 0.72)",
                  backdropFilter: "blur(24px) saturate(180%) brightness(1.05)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%) brightness(1.05)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  boxShadow: [
                    "0 0 0 1px rgba(255, 255, 255, 0.08)",
                    "inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                    "inset 0 -1px 0 rgba(0, 0, 0, 0.5)",
                    "0 18px 45px rgba(0, 0, 0, 0.75)",
                    "0 0 35px rgba(45, 212, 191, 0.12)",
                  ].join(","),
                }}
              >
                <span className="tracking-tight">Start a project</span>
                <div className="w-8 h-8 rounded-full bg-[#2dd4bf] flex items-center justify-center text-neutral-950 group-hover:translate-x-0.5 transition-transform shadow-[0_0_12px_rgba(45,212,191,0.7)]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              {/* Capsule 2: Email Liquid Glass Capsule */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-neutral-100 font-editorial-serif italic text-base sm:text-lg transition-all duration-300 hover:text-white hover:-translate-y-1 active:scale-98 cursor-pointer"
                style={{
                  background: "rgba(10, 10, 16, 0.65)",
                  backdropFilter: "blur(24px) saturate(180%) brightness(1.05)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%) brightness(1.05)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  boxShadow: [
                    "0 0 0 1px rgba(255, 255, 255, 0.08)",
                    "inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                    "inset 0 -1px 0 rgba(0, 0, 0, 0.5)",
                    "0 18px 45px rgba(0, 0, 0, 0.7)",
                  ].join(","),
                }}
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#2dd4bf] font-sans not-italic" />
                    <span className="text-[#2dd4bf] font-sans text-sm font-medium not-italic">
                      Copied to clipboard!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 opacity-40 font-sans not-italic" />
                    <span>dhairyagajera470@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── BOTTOM SITEMAP & COLOPHON (Wide Max-Width Container) ─── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 w-full relative z-10">
        {/* Multi-Page Sitemap Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 py-8 border-y border-white/10 text-xs font-mono">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-400 hover:text-white transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Bottom Colophon & Timestamp */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            <span>© 2026 Dhairya · Systems & Full-Stack Engineering.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
              <span>India · IST (UTC+5:30)</span>
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-white transition-colors flex items-center gap-1 text-neutral-400 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
