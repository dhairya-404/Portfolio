"use client";

import { useEffect } from "react";

/*
 * iOS 27 / visionOS Dynamic Glass Glint Controller
 *
 * Tracks the cursor position over any element with the `.glass-card`,
 * `.glass-liquid`, or `.glass-gleam` class to update real-time CSS variables
 * (`--gx`, `--gy`) for physical specular light reflections that follow the pointer.
 */

export function GlassGleam() {
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        ".glass-card, .glass-card-heavy, .glass-liquid, .neon-capsule, .neon-capsule-teal, .neon-capsule-purple, .dark-card, .glass-navbar, .glass-capsule-btn, .glass-chip, .glass-terminal"
      ) as HTMLElement | null;

      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      target.style.setProperty("--gx", `${x.toFixed(1)}%`);
      target.style.setProperty("--gy", `${y.toFixed(1)}%`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return null;
}
