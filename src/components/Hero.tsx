"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Copy, Check, Sparkles } from "lucide-react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);

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
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center px-[var(--page-gutter)] pt-28 pb-16 overflow-hidden">
      {/* Background Interactive Ambient Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-80"
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Status Kicker Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-neutral-100/80 border border-neutral-200/60 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium tracking-tight text-neutral-600">
            Dhairya · Systems & Creative Engineering
          </span>
        </div>

        {/* Hero Title with Iconic Editorial Italic Serif Highlight */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-[-0.035em] text-neutral-950 leading-[1.08] mb-8">
          Systems developer who builds with{" "}
          <span className="font-editorial-serif text-neutral-800 font-normal">
            intention
          </span>
          .
        </h1>

        {/* Narrative Bio */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 font-normal leading-relaxed tracking-tight max-w-2xl mb-10">
          I&apos;m Dhairya. I engineer high-throughput network architectures,
          predictive machine learning backends, and tactile digital interfaces.
          Bridging wire protocols, systems logic, and frontend craft.
        </p>

        {/* Action Triggers */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow"
          >
            <span>Selected Projects</span>
            <ArrowDown className="w-4 h-4 opacity-70" />
          </a>

          <a
            href="#experiments"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 text-sm font-medium transition-colors"
          >
            <Sparkles className="w-4 h-4 opacity-60 text-amber-600" />
            <span>Interactive Play</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-neutral-200 hover:border-neutral-300 text-neutral-700 text-sm font-medium hover:bg-neutral-50 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Email Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-neutral-400" />
                <span>dhairyagajera470@gmail.com</span>
              </>
            )}
          </button>
        </div>

        {/* Tech tags kicker */}
        <div className="pt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-500">
          <span className="text-neutral-400">Core Focus:</span>
          <span>Multi-Network Bonding</span>
          <span className="text-neutral-300">/</span>
          <span>PHP + Machine Learning</span>
          <span className="text-neutral-300">/</span>
          <span>Next.js & TypeScript</span>
          <span className="text-neutral-300">/</span>
          <span>Socket Orchestration</span>
        </div>
      </div>
    </section>
  );
}
