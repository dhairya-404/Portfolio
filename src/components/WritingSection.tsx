"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, X } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  date: string;
  content: string[];
}

export function WritingSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: "tcp-bonding",
      title: "On packet scheduling and multi-network bonding: why TCP fights back",
      excerpt:
        "When you aggregate Wi-Fi and cellular connections, TCP treats out-of-order packets as congestion loss. Here is how packet re-sequencing buffers and pacing restore full throughput.",
      readTime: "6 min read",
      category: "Systems & Networking",
      date: "Nov 2026",
      content: [
        "Modern mobile devices and workstations are constantly connected to multiple network interfaces simultaneously—Wi-Fi 6, 5G cellular, and Gigabit Ethernet. Yet traditional operating systems route all socket traffic down a single default gateway.",
        "When attempting to stripe a single download across multiple disparate physical interfaces, naive chunking fails immediately. TCP's congestion control algorithms (like Cubic or BBR) interpret out-of-order packet arrivals as catastrophic packet loss, triggering aggressive window throttling.",
        "The solution lies in creating a user-space virtual network interface (TUN/TAP) coupled with an adaptive round-trip-time (RTT) pacing scheduler. By calculating dynamic delay offsets per interface, packets arrive at the receiver in synchronized sequential order, unlocking near-linear multi-pipe throughput aggregation without kernel modifications.",
      ],
    },
    {
      id: "php-ml-bridging",
      title: "Bridging legacy PHP backends with modern ML inference pipelines",
      excerpt:
        "HTTP microservices introduce 40ms of latency per call. A lightweight Unix domain socket daemon with shared memory buffers reduces PHP-to-ML inference overhead to under 1.2ms.",
      readTime: "5 min read",
      category: "Architecture",
      date: "Oct 2026",
      content: [
        "In enterprise and large-scale web development, PHP often powers resilient, battle-tested business logic and database persistence. However, integrating modern machine learning models (written in PyTorch or ONNX) frequently leads developers into the trap of spinning up bulky Python HTTP microservices.",
        "Making an HTTP POST request from PHP to a Python container over localhost incurs TCP handshakes, TLS overhead, JSON serialization, and memory copying—costing 30ms to 60ms of overhead before the model even executes.",
        "By replacing the HTTP transport layer with a persistent background daemon communicating via local Unix domain sockets and memory-mapped IPC (shmop), PHP scripts can pass tensor payloads and retrieve inference scores with sub-2ms latency.",
      ],
    },
    {
      id: "latency-state-machines",
      title: "The latency budget in client-side state machines",
      excerpt:
        "Human perception detects visual delay at 16ms. When state updates are bound to optimistic client mutations, complex interfaces feel immediate rather than sluggish.",
      readTime: "4 min read",
      category: "Frontend Craft",
      date: "Sep 2026",
      content: [
        "User experience is governed by latency budgets. A 100ms response is perceived as instantaneous; beyond 200ms, the illusion of direct physical manipulation dissolves.",
        "When building web applications, waiting for remote server round-trips before updating the UI introduces perceived sluggishness. Decoupling the optimistic local state machine from network synchronization ensures interactive elements respond within the immediate 16ms frame window.",
        "Careful error reconciliation, rollback queues, and idempotent idempotency tokens allow interfaces to feel as tactile and responsive as desktop software while preserving backend consistency.",
      ],
    },
    {
      id: "tools-disappear",
      title: "Why the best developer tools disappear into speed",
      excerpt:
        "Friction in development is cumulative. When compilation, testing, and hot-reloading happen in milliseconds, the developer stays inside the creative flow state.",
      readTime: "3 min read",
      category: "Engineering Philosophy",
      date: "Aug 2026",
      content: [
        "Every second spent waiting for a compiler, a test runner, or an asset bundle is an opportunity for cognitive interruption. Over an eight-hour engineering day, tiny 10-second delays drain energy and fracture deep thought.",
        "The modern revolution in systems-level tooling—compilers written in Rust, Go, and C++, zero-dependency runtimes, and incremental AST parsers—is not about micro-benchmarks. It is about protecting human focus.",
        "When tools become instantaneous, they cease to feel like tools and become direct extensions of thought.",
      ],
    },
  ];

  return (
    <section id="writing" className="py-24 px-[var(--page-gutter)] max-w-7xl mx-auto w-full border-t border-neutral-200/80">
      {/* Kicker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-neutral-200/80">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            03 / Taste Notes & Writing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 mt-2">
            Technical Essays
          </h2>
        </div>
        <p className="text-sm font-mono text-neutral-500 max-w-xs">
          Reflections on distributed networking, hybrid backend design, and frontend performance.
        </p>
      </div>

      {/* Editorial Article List */}
      <div className="divide-y divide-neutral-200/80 border-b border-neutral-200/80">
        {articles.map((article) => (
          <div
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="group py-7 sm:py-9 cursor-pointer transition-colors hover:bg-neutral-50/60 px-4 -mx-4 rounded-xl flex flex-col md:flex-row md:items-baseline justify-between gap-6"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-2.5">
                <span>{article.category}</span>
                <span>·</span>
                <span>{article.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1 text-neutral-600">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-neutral-600 mt-2 leading-relaxed font-normal">
                {article.excerpt}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-center shrink-0">
              <span className="text-xs font-mono text-neutral-900 group-hover:underline flex items-center gap-1 font-medium">
                <span>Read note</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Article Modal Reader */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 sm:p-10 shadow-2xl border border-neutral-200 my-8 relative">
            <button
              onClick={() => setSelectedArticle(null)}
              aria-label="Close article modal"
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-4">
              <span>{selectedArticle.category}</span>
              <span>·</span>
              <span>{selectedArticle.readTime}</span>
              <span>·</span>
              <span>{selectedArticle.date}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 mb-6 leading-tight">
              {selectedArticle.title}
            </h3>

            <div className="space-y-4 text-base text-neutral-700 leading-relaxed font-normal border-t border-neutral-100 pt-6">
              {selectedArticle.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>Author: Dhairya</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
