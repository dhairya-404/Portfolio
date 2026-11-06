"use client";

import Link from "next/link";
import { ArrowLeft, Cpu, CheckCircle2 } from "lucide-react";

export default function MlInferenceCaseStudy() {
  return (
    <article className="py-24 px-[var(--page-gutter)] max-w-4xl mx-auto w-full">
      {/* Back button */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors mb-10 group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to all projects</span>
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>Case Study · Applied Machine Learning</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Machine Learning Inference Platform with PHP IPC Bridge
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal">
          Connecting production PHP backends to local embedded machine learning classification micro-services via low-overhead UNIX domain sockets with sub-45ms response budgets.
        </p>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl dark-card mb-16 text-xs font-mono">
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">IPC Protocol</div>
          <div className="text-white font-bold">UNIX Domain Sockets</div>
        </div>
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">P95 Latency</div>
          <div className="text-teal-400 font-bold">&lt; 45ms</div>
        </div>
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Throughput</div>
          <div className="text-purple-400 font-bold">1,840 req/sec</div>
        </div>
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Memory</div>
          <div className="text-white font-bold">48MB Resident</div>
        </div>
      </div>

      {/* IPC Pipeline Visualization Card */}
      <div className="p-8 rounded-3xl dark-card mb-16 space-y-6">
        <div className="border-b border-white/10 pb-4">
          <div className="text-xs font-mono text-purple-400 uppercase">Architecture Blueprint</div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Sub-millisecond IPC Handshake Sequence
          </h3>
        </div>

        <div className="p-6 rounded-2xl bg-black/70 border border-white/10 font-mono text-xs sm:text-sm space-y-3">
          <div className="flex items-center gap-2 text-teal-300">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>[PHP 8.3 Worker] Receives raw payload, sanitizes tokens (3.2ms)</span>
          </div>
          <div className="text-neutral-500 pl-4 border-l border-white/10 ml-1">
            &darr; Writes binary framed buffer into `/tmp/model_ipc.sock` (0.4ms)
          </div>
          <div className="flex items-center gap-2 text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>[Python Model Runtime] Zero-copy memory map & ONNX inference (32.1ms)</span>
          </div>
          <div className="text-neutral-500 pl-4 border-l border-white/10 ml-1">
            &darr; Binary classification logits returned over socket (0.3ms)
          </div>
          <div className="flex items-center gap-2 text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>[Client Response Stream] JSON payload transmitted to client (1.8ms)</span>
          </div>
        </div>

        <div className="text-xs font-mono text-neutral-400 flex justify-between pt-2">
          <span>End-to-End P95: 37.8ms</span>
          <span className="text-teal-400">Target Budget Met (&lt; 45ms)</span>
        </div>
      </div>

      {/* Main Prose */}
      <div className="space-y-12 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Why Pair PHP with Machine Learning?
          </h2>
          <p className="mb-4">
            PHP powers the vast majority of enterprise web infrastructure, offering unbeatable concurrency handling, straightforward deployment pipelines, and mature operational tooling. However, modern machine learning ecosystems (PyTorch, TensorFlow, ONNX) thrive in Python and C++.
          </p>
          <p>
            Common enterprise workarounds involve spawning HTTP REST micro-services for every model call. This adds massive HTTP parsing overhead, TCP socket handshakes, serialization bottlenecks, and network jitter—easily driving request latency over 150ms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            The Solution: Lightweight UNIX Sockets & Pre-loaded Weights
          </h2>
          <p className="mb-4">
            By running an embedded Python daemon daemonized locally with weights loaded permanently into memory and communicating via UNIX domain sockets, we eliminate all TCP network stack overhead.
          </p>
          <ul className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 text-sm sm:text-base font-mono">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <span>Zero TCP handshake latency: IPC transfers occur directly in operating system memory.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <span>Hot-reloading: Model weights can be updated without restarting the PHP application workers.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <span>Resilient fallback: Automatically degrades gracefully if an inference worker experiences memory limits.</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
