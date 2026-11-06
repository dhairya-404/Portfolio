"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Copy, Check, Sparkles, Terminal } from "lucide-react";

const WORDS = [
  "network systems",
  "web applications",
  "socket bonding engines",
  "ML architectures",
  "tactile interfaces",
  "creative experiments",
];

const MARQUEE_ITEMS = [
  "Multi-Network Bonding",
  "Socket Multiplexing",
  "Next.js 16 Turbopack",
  "TypeScript",
  "React 19",
  "PHP & ML Inference",
  "Packet Aggregation",
  "Sub-50ms Latency",
  "RK4 Kinetic Physics",
  "Tailwind CSS v4",
  "WebSocket Streaming",
  "Sub-millisecond IPC",
  "Zero Layout Shift",
  "Creative Coding",
];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  // Cycling words like thenn.in
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Subtle ambient particle grid canvas (recreating andreas.vision sky/cloud canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Subtle floating cloud / ambient nodes
    const nodeCount = Math.min(32, Math.floor(width / 40));
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2.5 + 1.2,
      opacity: Math.random() * 0.18 + 0.05,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(13, 13, 17, ${0.04 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(13, 13, 17, ${node.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dhairyagajera470@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between px-[var(--page-gutter)] pt-32 pb-12 overflow-hidden">
      {/* Background Interactive Ambient Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-80"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto">
        {/* Status Kicker Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/70 mb-8 backdrop-blur-sm shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium tracking-tight text-neutral-700">
            Dhairya · Systems & Full-Stack Developer
          </span>
        </div>

        {/* Hero Title with Thenn-style Word Cycle & Andreas-style Italic Highlight */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-[-0.035em] text-neutral-950 leading-[1.08] mb-8">
          Engineering{" "}
          <span className="inline-block relative min-w-[280px] sm:min-w-[340px] md:min-w-[480px]">
            <span
              key={wordIndex}
              className="animate-word-in inline-block font-editorial-serif text-neutral-800 font-normal underline decoration-neutral-300 underline-offset-8"
            >
              {WORDS[wordIndex]}
            </span>
          </span>{" "}
          <br className="hidden sm:inline" />
          with obsessive craft.
        </h1>

        {/* Narrative Bio */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 font-normal leading-relaxed tracking-tight max-w-3xl mb-10">
          I&apos;m <span className="font-semibold text-neutral-900">Dhairya</span>. I build high-throughput multi-network bonding protocols, machine learning inference backends, and tactile digital products. Bridging low-level socket streaming with ultra-responsive frontend architecture.
        </p>

        {/* Action Triggers */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow"
          >
            <span>Selected Projects</span>
            <ArrowDown className="w-4 h-4 opacity-70" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 text-sm font-medium transition-colors border border-neutral-200/50"
          >
            <Terminal className="w-4 h-4 opacity-70 text-neutral-700" />
            <span>Capabilities</span>
          </a>

          <a
            href="#experiments"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 text-sm font-medium transition-colors border border-neutral-200/50"
          >
            <Sparkles className="w-4 h-4 opacity-70 text-amber-600" />
            <span>Interactive Lab</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 text-sm font-mono border border-neutral-200/80 transition-colors shadow-xs"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs font-sans text-emerald-700 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 opacity-60" />
                <span className="text-xs font-mono">dhairyagajera470@gmail.com</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Infinite Marquee Ticker Bar (Thenn.in Signature Pattern) */}
      <div className="relative z-10 w-full pt-16 pb-4 border-t border-neutral-200/60 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-500">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <div key={index} className="flex items-center gap-8 shrink-0">
              <span className="hover:text-neutral-950 transition-colors cursor-default">
                {item}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
