"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const WORDS = [
  "brands",
  "network systems",
  "web apps",
  "ML platforms",
  "socket engines",
  "products",
];

interface ThennHeroProps {
  onSwitchMode?: () => void;
}

export function ThennHero({ onSwitchMode }: ThennHeroProps) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-4 sm:px-8 pt-6 pb-12 overflow-hidden bg-[#070709] text-white select-none">
      {/* Background Dot Matrix Pattern (Photo 1 Signature) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.22) 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top Floating Glass Navigation Bar (Photo 1 Signature) */}
      <header className="relative z-20 flex items-center justify-between max-w-5xl mx-auto w-full pt-2">
        <div className="flex items-center justify-between w-full p-1.5 sm:p-2 rounded-full bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)]">
          {/* Logo Brand with Teal Dot */}
          <a href="#" className="flex items-center gap-1 px-3 py-1 text-white font-bold tracking-tight text-sm sm:text-base">
            <span>dhairya</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 inline-block" />
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-medium text-neutral-300">
            <a href="#work" className="px-2.5 py-1 hover:text-white transition-colors">
              Work
            </a>
            <a href="#services" className="px-2.5 py-1 hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="px-2.5 py-1 hover:text-white transition-colors">
              Studio
            </a>
            <a href="#process" className="px-2.5 py-1 hover:text-white transition-colors">
              Approach
            </a>
            <a href="#writing" className="px-2.5 py-1 hover:text-white transition-colors">
              Journal
            </a>
          </nav>

          {/* Mode Switch Button */}
          {onSwitchMode && (
            <button
              onClick={onSwitchMode}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-neutral-200 text-xs font-mono transition-colors"
              title="Switch to Andreas Vision Mode"
            >
              <span>Andreas Vision Mode</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            </button>
          )}

          {/* Right Action: White Pill with Teal Arrow */}
          <a
            href="mailto:dhairyagajera470@gmail.com"
            className="flex items-center gap-2 pl-3.5 pr-1.5 py-1.5 rounded-full bg-white text-neutral-950 font-medium text-xs sm:text-sm hover:bg-neutral-100 transition-all shadow-sm group"
          >
            <span>Start a project</span>
            <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center text-neutral-950 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </header>

      {/* Hero Typography with Glowing Purple Neon Glass Pill (Photo 1 Signature) */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-left my-auto px-4 sm:px-6 py-12">
        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.035em] text-white leading-[1.05] mb-8">
          <div>I build</div>

          {/* The Glowing Purple Neon Glass Capsule */}
          <div className="my-2 sm:my-3 inline-block">
            <span
              className="inline-flex items-center px-6 sm:px-8 py-1.5 sm:py-2.5 rounded-3xl sm:rounded-4xl font-bold tracking-tight text-[#c084fc] transition-all duration-300"
              style={{
                background: "rgba(168, 85, 247, 0.12)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "2px solid rgba(168, 85, 247, 0.75)",
                boxShadow:
                  "0 0 45px rgba(168, 85, 247, 0.5), inset 0 0 24px rgba(168, 85, 247, 0.3)",
              }}
            >
              <span key={wordIndex} className="animate-word-in">
                {WORDS[wordIndex]}
              </span>
            </span>
          </div>

          <div>worth remembering.</div>
        </div>

        {/* Narrative Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mb-12">
          I design and build websites, web apps and systems for startups and growing businesses worldwide. An independent engineer, from the first conversation to launch.
        </p>

        {/* Action Triggers */}
        <div className="flex flex-wrap items-center gap-4 mb-16 sm:mb-20">
          <a
            href="mailto:dhairyagajera470@gmail.com"
            className="flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-white border border-white/20 transition-all shadow-lg group"
          >
            <span className="text-sm font-medium">Start a project</span>
            <div className="w-7 h-7 rounded-full bg-teal-400 flex items-center justify-center text-neutral-950 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          <a
            href="#work"
            className="flex items-center gap-1.5 px-4 py-2 text-sm text-neutral-300 hover:text-white transition-colors group"
          >
            <span>See the work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Footer ticker */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex items-center justify-between text-xs font-mono text-neutral-500 pt-8 border-t border-white/10">
        <div>Dhairya · Systems & Full-Stack Engineer</div>
        <div>dhairyagajera470@gmail.com</div>
      </div>
    </section>
  );
}
