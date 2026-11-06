"use client";

import { useState } from "react";
import { AndreasHero } from "./AndreasHero";
import { ThennHero } from "./ThennHero";

export function Hero() {
  // Allow toggling between Andreas Vision (Photo 3) and Thenn Dark (Photo 1)
  const [mode, setMode] = useState<"andreas" | "thenn">("andreas");

  return (
    <div className="relative">
      {/* Floating Mode Switcher Badge at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center p-1 rounded-full bg-neutral-900/90 text-white backdrop-blur-xl border border-white/20 shadow-2xl">
        <button
          onClick={() => setMode("andreas")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
            mode === "andreas"
              ? "bg-sky-500 text-white font-semibold shadow-xs"
              : "text-neutral-400 hover:text-white"
          }`}
          title="Switch to Andreas Vision (Photo 3)"
        >
          <span>⛅ Andreas Vision</span>
        </button>
        <button
          onClick={() => setMode("thenn")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
            mode === "thenn"
              ? "bg-purple-600 text-white font-semibold shadow-xs"
              : "text-neutral-400 hover:text-white"
          }`}
          title="Switch to Thenn Dark (Photo 1)"
        >
          <span>🌙 Thenn Dark</span>
        </button>
      </div>

      {/* Render Active Hero Edition */}
      {mode === "andreas" ? (
        <AndreasHero onSwitchMode={() => setMode("thenn")} />
      ) : (
        <ThennHero onSwitchMode={() => setMode("andreas")} />
      )}
    </div>
  );
}
