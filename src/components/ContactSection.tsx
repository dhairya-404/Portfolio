"use client";

import { useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy, Mail, MessageSquare } from "lucide-react";

export function ContactSection() {
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

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/dhairya-404" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X / Twitter", href: "https://x.com" },
    { label: "Email Dhairya", href: "mailto:dhairyagajera470@gmail.com" },
  ];

  return (
    <footer id="contact" className="pt-28 pb-16 px-[var(--page-gutter)] max-w-7xl mx-auto w-full border-t border-neutral-200/80">
      <div className="max-w-5xl mx-auto">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-mono text-neutral-600 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for High-Impact Projects & Systems Consulting</span>
        </div>

        {/* Big Closing Statement (Thenn.in + Andreas.vision synthesis) */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-neutral-950 leading-[1.08] mb-8">
          Got something worth{" "}
          <span className="font-editorial-serif font-normal italic text-neutral-800">
            building
          </span>
          ?
        </h2>

        <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal max-w-2xl mb-12">
          Whether you need multi-network bonding protocols, machine learning pipelines connected to production backends, or high-craft digital products that feel instantaneous — let&apos;s build together.
        </p>

        {/* Primary Contact Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50/90 border border-neutral-200/90 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 shadow-xs">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Inquiries</span>
            </div>
            <a
              href="mailto:dhairyagajera470@gmail.com"
              className="text-xl sm:text-3xl font-mono font-medium text-neutral-950 hover:underline tracking-tight break-all"
            >
              dhairyagajera470@gmail.com
            </a>
            <div className="text-xs text-neutral-500 mt-2">
              Usually replies within 24 hours · Available for remote contracts & projects
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="mailto:dhairyagajera470@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-sm font-medium transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 opacity-70" />
              <span>Start a Project</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 text-sm font-medium border border-neutral-200 transition-colors shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
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

        {/* Social Links & Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-y border-neutral-200/80 text-sm font-mono">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-2 text-neutral-700 hover:text-neutral-950 transition-colors"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
        </div>

        {/* Bottom Colophon & Timestamp */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            <span>© 2026 Dhairya. Built with Next.js 16, Turbopack & obsessive craft.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>IST (UTC+5:30)</span>
            </span>
            <a
              href="#"
              className="hover:text-neutral-950 transition-colors flex items-center gap-1 text-neutral-600"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
