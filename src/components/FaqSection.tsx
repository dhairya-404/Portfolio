"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
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
    a: "PHP powers over 75% of the existing web and delivers battle-tested concurrency, mature deployment lifecycles, and rapid execution. By connecting PHP to lightweight local inference micro-services or on-device model runtimes via UNIX domain sockets, we achieve under 45ms P95 classification latency without the memory footprint or complexity of monolithic Python clusters.",
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

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 px-[var(--page-gutter)] border-b border-neutral-200/70 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-600 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950">
            Questions, <span className="font-editorial-serif italic font-normal text-neutral-800">answered</span>.
          </h2>
          <p className="text-neutral-600 text-base mt-2">
            Details on technical architecture, systems bonding, and development methodology.
          </p>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors tracking-tight">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-neutral-900 text-white border-neutral-900" : "text-neutral-700 group-hover:border-neutral-500"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-2 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal animate-word-in">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
