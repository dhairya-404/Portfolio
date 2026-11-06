"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, ArrowRight, Check, Copy } from "lucide-react";

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
    <footer className="relative pt-32 pb-16 px-[var(--page-gutter)] border-t border-white/10 bg-[#070709] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-chip text-xs font-mono text-neutral-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
          <span>Available for High-Throughput Systems & Full-Stack Projects</span>
        </div>

        {/* Big Closing Statement (Photo 3 & 4 Signature) */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6">
          Got something worth{" "}
          <span className="font-editorial-serif font-normal italic text-[#c084fc]">
            building
          </span>
          ?
        </h2>

        <p className="text-base sm:text-xl text-neutral-400 leading-relaxed font-normal max-w-2xl mb-12">
          Tell me where you are and what you want to build. I reply within one working day—with architectural clarity and a direct technical roadmap.
        </p>

        {/* Floating Liquid Glass Action Capsules (Photo 3 & 4 Signature) */}
        <div className="relative py-12 mb-16">
          {/* Subtle perspective dot-matrix wave backdrop */}
          <div
            className="absolute inset-x-0 -inset-y-8 bg-dot-matrix-perspective opacity-50 pointer-events-none"
            style={{
              maskImage:
                "radial-gradient(ellipse 90% 70% at 30% 50%, black 20%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 70% at 30% 50%, black 20%, transparent 80%)",
            }}
          />

          <div className="relative z-10 flex flex-wrap items-center gap-4">
            {/* Start a project glass capsule */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full text-white font-medium text-sm sm:text-base transition-all duration-300 group hover:-translate-y-0.5 active:scale-98"
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

            {/* Email glass capsule (copies or mailto) */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-neutral-200 font-mono text-xs sm:text-sm transition-all duration-300 hover:text-white hover:-translate-y-0.5 active:scale-98 cursor-pointer"
              style={{
                background: "rgba(14, 14, 22, 0.6)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.18), 0 12px 32px rgba(0,0,0,0.5)",
              }}
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#2dd4bf]" />
                  <span className="text-[#2dd4bf] font-sans font-medium">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 opacity-50" />
                  <span>dhairyagajera470@gmail.com</span>
                </>
              )}
            </button>
          </div>
        </div>

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
