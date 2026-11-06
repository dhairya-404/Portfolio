"use client";

import { useEffect, useRef } from "react";

/*
 * Interactive Full-Screen Dot Grid Canvas
 *
 * Covers the background with Thenn's signature dot matrix.
 * Quietly stays in the background (z-0, pointer-events-none).
 *
 * Rules:
 * - NEVER interferes with navbar scrolling:
 *   - Auto-suppressed during scroll (60/120fps buttery scrolling)
 *   - Completely disabled in the navbar zone (top 92px)
 *   - Zero heavy shadowBlur (runs at pure hardware-accelerated 120fps)
 * - NEVER interferes with project glass:
 *   - Suppresses dot enlargement when hovering over hero neon project glass,
 *     project cards (.glass-card, .dark-card), and glass capsules (.glass-capsule-btn)
 *   - Dots behind glass remain at their quiet, crisp 1.0px resting state
 */
export function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates
    let mouseX = -1000;
    let mouseY = -1000;
    let smoothMouseX = -1000;
    let smoothMouseY = -1000;
    let hasMoved = false;

    // Smoothly animated enlightenment intensity (0 = disabled/resting, 1 = active)
    let intensity = 0;
    let targetIntensity = 0;

    // Grid config
    const SPACING = 28;
    const RADIUS_HOVER = 175;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Scroll state: immediately damp during scrolling so navbar scroll is 100% fluid
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;

    const onScroll = () => {
      isScrolling = true;
      targetIntensity = 0;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 90);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const checkOverGlassOrNav = (clientX: number, clientY: number): boolean => {
      // Top 92px is reserved for the floating navbar
      if (clientY < 92) return true;

      // Check DOM element under cursor
      const el = document.elementFromPoint(clientX, clientY);
      if (!el) return false;

      // If over navbar or any project glass element
      return !!el.closest(
        "header, nav, .glass-navbar, .glass-capsule-btn, .neon-capsule-teal, .neon-capsule-purple, .glass-card, .dark-card, .glass-chip, [data-glass], [data-project-glass]"
      );
    };

    const onPointerMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        smoothMouseX = mouseX;
        smoothMouseY = mouseY;
        hasMoved = true;
      }

      if (isScrolling) {
        targetIntensity = 0;
        return;
      }

      // Check if cursor is over navbar or project glass
      const isOverGlassOrNav = checkOverGlassOrNav(e.clientX, e.clientY);
      targetIntensity = isOverGlassOrNav ? 0 : 1;
    };

    const onPointerLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      targetIntensity = 0;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);

    const render = () => {
      // Smoothly interpolate cursor and intensity
      smoothMouseX += (mouseX - smoothMouseX) * 0.16;
      smoothMouseY += (mouseY - smoothMouseY) * 0.16;
      intensity += (targetIntensity - intensity) * 0.14;

      ctx.clearRect(0, 0, width, height);

      const effectiveRadius = RADIUS_HOVER * intensity;
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      // Draw all resting dots in a single batch (ultra fast)
      ctx.fillStyle = "rgba(255, 255, 255, 0.11)";
      ctx.beginPath();
      for (let c = 0; c < cols; c++) {
        const x = c * SPACING;
        for (let r = 0; r < rows; r++) {
          const y = r * SPACING;
          ctx.moveTo(x + 1.0, y);
          ctx.arc(x, y, 1.0, 0, Math.PI * 2);
        }
      }
      ctx.fill();

      // If hover spotlight is active, only draw the enlarged enlightened dots within the radius
      if (effectiveRadius > 4 && intensity > 0.02) {
        const minC = Math.max(0, Math.floor((smoothMouseX - effectiveRadius) / SPACING));
        const maxC = Math.min(cols, Math.ceil((smoothMouseX + effectiveRadius) / SPACING));
        const minR = Math.max(0, Math.floor((smoothMouseY - effectiveRadius) / SPACING));
        const maxR = Math.min(rows, Math.ceil((smoothMouseY + effectiveRadius) / SPACING));

        for (let c = minC; c <= maxC; c++) {
          const x = c * SPACING;
          for (let r = minR; r <= maxR; r++) {
            const y = r * SPACING;

            // Never enlarge dots in the navbar exclusion zone
            if (y < 90) continue;

            const dx = x - smoothMouseX;
            const dy = y - smoothMouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < effectiveRadius) {
              const t = 1 - dist / effectiveRadius;
              // Smooth cosine falloff
              const ease = (0.5 - 0.5 * Math.cos(t * Math.PI)) * intensity;
              const radius = 1.0 + ease * 1.6;
              const alpha = 0.12 + ease * 0.78;

              ctx.beginPath();
              ctx.arc(x, y, radius, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(45, 212, 191, ${alpha.toFixed(3)})`;
              ctx.fill();
            }
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none select-none"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
