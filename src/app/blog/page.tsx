"use client";

import { useState } from "react";
import { BookOpen, X, Clock, Calendar, ArrowRight } from "lucide-react";

interface Article {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string[];
}

const ARTICLES: Article[] = [
  {
    slug: "socket-bonding-vs-http2",
    title: "Why Multi-Socket Bonding Beats Standard HTTP/2 Streams for High-Throughput Aggregation",
    date: "March 2026",
    readTime: "7 min read",
    category: "Systems & Networking",
    excerpt: "HTTP/2 multiplexing merges multiple streams over a single TCP connection. But when operating across separate physical network adapters, true socket bonding requires independent TCP sessions and dynamic userspace reassembly.",
    content: [
      "In modern networking, HTTP/2 is widely celebrated for eliminating head-of-line blocking at the application stream layer. However, because HTTP/2 multiplexes all logical streams onto a single underlying TCP socket, it remains fundamentally shackled to a single operating system routing path.",
      "If you plug a workstation into high-speed fiber Ethernet while simultaneously maintaining an active 5G cellular link, HTTP/2 cannot aggregate these two physical pipes. Any packet loss on the Ethernet interface triggers TCP congestion window collapses that stall the entire HTTP/2 stream, completely ignoring the perfectly healthy 5G pipe.",
      "By contrast, our userspace socket multiplexer treats each network interface as an independent transport conduit. By splitting incoming byte ranges and scheduling chunks based on real-time round-trip latency, we achieve true 3.8x aggregate throughput with sub-12ms automated failover.",
      "Conclusion: For intra-connection concurrency, HTTP/2 is sufficient. For multi-physical-interface throughput multiplication, multi-socket userspace bonding is non-negotiable.",
    ],
  },
  {
    slug: "php-on-device-ml",
    title: "Bridging PHP with On-Device ML Models: Architecture, Benchmarks, and UNIX Domain Sockets",
    date: "February 2026",
    readTime: "6 min read",
    category: "Machine Learning & Backends",
    excerpt: "Connecting PHP web workers to embedded Python ML models via UNIX domain sockets delivers under 45ms P95 classification latency without monolithic server clusters.",
    content: [
      "The conventional industry pattern for pairing PHP with machine learning involves spinning up an external Python Flask/FastAPI cluster and routing inference calls over internal HTTP REST APIs.",
      "Under high-concurrency production load, this architecture collapses: HTTP serialization overhead, TCP three-way handshakes, and JSON parsing latency routinely inflate total request times beyond 150ms.",
      "By deploying a local embedded Python daemon listening on a UNIX domain socket (`/tmp/model_ipc.sock`), we eliminate the entire TCP networking stack. The PHP process streams raw binary frames directly into kernel memory buffers.",
      "The result? P95 inference latency plummeted to under 45ms, memory consumption remained pinned at a lean 48MB, and throughput surpassed 1,800 requests per second on standard hardware.",
    ],
  },
  {
    slug: "rk4-kinetic-physics",
    title: "Designing Predictable Kinetic Physics in Modern Web Interfaces (Runge-Kutta 4th Order)",
    date: "January 2026",
    readTime: "5 min read",
    category: "Creative Coding & UI",
    excerpt: "Why cubic-bezier CSS easing curves fail tactile scrutiny, and how Runge-Kutta 4th order numerical integration produces true mechanical spring recoil in production code.",
    content: [
      "Cubic-bezier curves (`cubic-bezier(0.2, 0.8, 0.2, 1)`) are deterministic functions of time: they prescribe where an element should be at time t regardless of the user's velocity at the moment of release.",
      "When a user flicks an element rapidly across the screen, a time-based bezier curve abruptly arrests the element's momentum, creating an artificial, jarring visual sensation.",
      "True mechanical spring dynamics are governed by differential equations of force: F = -k*x - c*v. By solving this second-order system via Runge-Kutta 4th order (RK4) numerical integration, our animations preserve real-world inertia.",
      "The element retains the user's gesture velocity, compresses against its physical limits, and oscillates naturally to rest. Software suddenly feels tangible and alive.",
    ],
  },
];

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="py-24 px-[var(--page-gutter)] max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Journal & Technical Notes</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Engineering <span className="font-editorial-serif font-normal italic text-[#c084fc]">journal</span>.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed font-normal">
          In-depth technical write-ups on socket multiplexing, machine learning IPC bridges, kinetic physics, and frontend craft.
        </p>
      </div>

      {/* Articles List */}
      <div className="space-y-6">
        {ARTICLES.map((article) => (
          <div
            key={article.slug}
            onClick={() => setSelectedArticle(article)}
            className="p-8 sm:p-10 rounded-3xl dark-card flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400 mb-4">
                <span className="px-2.5 py-1 rounded-md bg-white/5 text-teal-300 border border-white/5">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-teal-300 transition-colors">
                {article.title}
              </h2>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-normal mb-6">
                {article.excerpt}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-teal-400 font-semibold group-hover:translate-x-1 transition-transform">
              <span>Read article</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* In-Browser Article Reading Modal (Liquid Glass Dialog) */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 relative glass-card-heavy"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full glass-chip text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-3">
                <span>{selectedArticle.category}</span>
                <span>&bull;</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                {selectedArticle.title}
              </h2>
            </div>

            <div className="space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal pt-6 border-t border-white/10">
              {selectedArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
