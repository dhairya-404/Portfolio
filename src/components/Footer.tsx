"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, ArrowRight, Check, Copy, Mail } from "lucide-react";

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
    { href: "/experiments", label: "Creative Lab" },
    { href: "/contact", label: "Start a project" },
  ];

  return (
    <footer className="pt-28 pb-16 px-[var(--page-gutter)] border-t border-white/10 bg-[#070709] text-white">
      <div className="max-w-5xl mx-auto">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-400 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
          <span>Available for High-Throughput Systems & Full-Stack Projects</span>
        </div>

        {/* Big Closing Statement */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-8">
          Got something worth{" "}
          <span className="font-editorial-serif font-normal italic text-[#c084fc]">
            building
          </span>
          ?
        </h2>

        <p className="text-base sm:text-xl text-neutral-400 leading-relaxed font-normal max-w-2xl mb-12">
          From multi-network socket bonding and download acceleration to sub-50ms machine learning inference and high-craft Next.js interfaces — let&apos;s build software that feels instantaneous.
        </p>

        {/* Primary Contact Card */}
        <div className="p-8 sm:p-10 rounded-3xl dark-card flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>Direct Inquiries</span>
            </div>
            <a
              href="mailto:dhairyagajera470@gmail.com"
              className="text-xl sm:text-3xl font-mono font-medium text-white hover:text-teal-300 transition-colors tracking-tight break-all"
            >
              dhairyagajera470@gmail.com
            </a>
            <div className="text-xs text-neutral-400 mt-2">
              Direct response within 24 hours · Open for remote consulting and core architecture
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-white text-neutral-950 text-sm font-semibold hover:bg-neutral-200 transition-all shadow-md group cursor-pointer"
            >
              <span>Start a project</span>
              <div className="w-7 h-7 rounded-full bg-teal-400 flex items-center justify-center text-neutral-950 group-hover:translate-x-0.5 transition-transform shadow-[0_0_8px_rgba(45,212,191,0.5)]">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-neutral-200 text-sm font-medium border border-white/10 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-teal-400" />
                  <span className="text-teal-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 opacity-60" />
                  <span>Copy Email</span>
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
            <span>© 2026 Dhairya. Built with Next.js 16 Turbopack & obsessive craft.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
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
