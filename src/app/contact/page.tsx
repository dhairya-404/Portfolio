"use client";

import { useState } from "react";
import { Mail, Check, Copy, ArrowRight, MessageSquare, Clock, Globe } from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState("Full-Stack Web App");
  const [selectedTimeline, setSelectedTimeline] = useState("1-2 Months");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [projectMessage, setProjectMessage] = useState("");
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dhairyagajera470@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${selectedService} (${clientName || "Client"})`);
    const body = encodeURIComponent(
      `Hi Dhairya,\n\nName: ${clientName}\nEmail: ${clientEmail}\nService: ${selectedService}\nTimeline: ${selectedTimeline}\n\nProject Overview:\n${projectMessage}\n`
    );
    window.location.href = `mailto:dhairyagajera470@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="py-24 px-[var(--page-gutter)] max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Start a Project</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Let&apos;s build something <span className="font-editorial-serif font-normal italic text-[#c084fc]">remarkable</span>.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed font-normal">
          Whether you need low-latency socket systems, machine learning inference backends, or a bespoke full-stack product.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Interactive Project Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl dark-card space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                1. What service do you need?
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {[
                  "Systems & Network Bonding",
                  "Full-Stack Web App",
                  "PHP & ML Pipeline",
                  "Architecture Audit",
                ].map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSelectedService(s)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                      selectedService === s
                        ? "bg-white/15 border-[#2dd4bf] text-white font-bold shadow-[0_0_15px_rgba(45,212,191,0.25)]"
                        : "glass-chip text-neutral-400 hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                2. Target Timeline
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                {["Immediate", "1-2 Months", "Flexible"].map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setSelectedTimeline(t)}
                    className={`p-3.5 rounded-2xl border text-center transition-all duration-200 cursor-pointer ${
                      selectedTimeline === t
                        ? "bg-white/15 border-[#2dd4bf] text-white font-bold shadow-[0_0_15px_rgba(45,212,191,0.25)]"
                        : "glass-chip text-neutral-400 hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Chen"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-white text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all placeholder:text-neutral-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@domain.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-white text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all placeholder:text-neutral-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                Project Overview
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about your system constraints, goals, and technical requirements..."
                value={projectMessage}
                onChange={(e) => setProjectMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-white text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all placeholder:text-neutral-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-all shadow-lg cursor-pointer"
            >
              <span>{sent ? "Opening Email Client..." : "Send Project Brief"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Right: Direct Contact & Availability Details */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Email Card */}
          <div className="p-8 rounded-3xl dark-card space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>Direct Inquiries</span>
            </div>

            <a
              href="mailto:dhairyagajera470@gmail.com"
              className="text-xl sm:text-2xl font-mono font-bold text-white hover:text-teal-300 transition-colors break-all block"
            >
              dhairyagajera470@gmail.com
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-neutral-300 border border-white/10 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-teal-400">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 opacity-60" />
                  <span>Copy email address</span>
                </>
              )}
            </button>
          </div>

          {/* Timezone & Availability */}
          <div className="p-8 rounded-3xl dark-card space-y-4 text-xs font-mono">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-neutral-400">
                <Globe className="w-3.5 h-3.5" />
                <span>Base Location</span>
              </div>
              <span className="text-white font-bold">India</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-neutral-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Timezone</span>
              </div>
              <span className="text-white font-bold">IST (UTC+5:30)</span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-neutral-400">Current Status</span>
              <span className="text-teal-400 flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Available for New Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
