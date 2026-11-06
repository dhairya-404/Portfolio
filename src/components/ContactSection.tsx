"use client";

import { useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";

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
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X / Twitter", href: "https://x.com" },
    { label: "Email", href: "mailto:dhairyagajera470@gmail.com" },
  ];

  return (
    <footer id="contact" className="pt-28 pb-16 px-[var(--page-gutter)] max-w-7xl mx-auto w-full border-t border-neutral-200/80">
      <div className="max-w-4xl">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-mono text-neutral-600 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for New Projects & Collaboration</span>
        </div>

        {/* Big Closing Statement */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-950 leading-[1.1] mb-8">
          Let&apos;s build software that feels{" "}
          <span className="font-editorial-serif font-normal text-neutral-800">
            instant
          </span>{" "}
          and endures.
        </h2>

        <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal max-w-2xl mb-12">
          Whether you need deep systems engineering, network bandwidth acceleration,
          or high-precision frontend architecture, I&apos;d love to connect.
        </p>

        {/* Primary Contact Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
              Direct Inquiries
            </span>
            <a
              href="mailto:dhairyagajera470@gmail.com"
              className="text-xl sm:text-2xl font-mono font-medium text-neutral-950 hover:underline tracking-tight break-all"
            >
              dhairyagajera470@gmail.com
            </a>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-sm font-medium transition-colors shrink-0 shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 opacity-60" />
                <span>Copy Email</span>
              </>
            )}
          </button>
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
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            <span>© 2026 Dhairya. Built with Next.js 16 & intention.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>IST (UTC+5:30)</span>
            </span>
            <a
              href="#"
              className="hover:text-neutral-900 transition-colors flex items-center gap-1 text-neutral-600"
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
