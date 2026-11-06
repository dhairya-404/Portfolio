"use client";

import { useEffect, useRef } from "react";

/*
 * Interactive Full-Screen Dot Grid Canvas
 *
 * Covers the entire screen with Thenn's signature dot matrix.
 * Whenever the user hovers their mouse anywhere, the dots within
 * a radius around the cursor become enlightened (brighter, larger,
 * and glowing with vibrant teal/white luminance).
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

    // Mouse coordinates (target and smoothly interpolated)
    let mouseX = -1000;
    let mouseY = -1000;
    let smoothMouseX = -1000;
    let smoothMouseY = -1000;
    let hasMoved = false;

    // Dot grid configuration
    const SPACING = 28; // 28px grid spacing matching thenn.in
    const RADIUS_HOVER = 190; // Spotlight enlightenment radius (pixels)

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const onPointerMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!hasMoved) {
        smoothMouseX = mouseX;
        smoothMouseY = mouseY;
        hasMoved = true;
      }
    };

    const onPointerLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);

    const render = () => {
      // Smoothly interpolate cursor position for organic fluid movement
      smoothMouseX += (mouseX - smoothMouseX) * 0.15;
      smoothMouseY += (mouseY - smoothMouseY) * 0.15;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      // Draw each dot in the grid
      for (let c = 0; c < cols; c++) {
        const x = c * SPACING;

        for (let r = 0; r < rows; r++) {
          const y = r * SPACING;

          // Compute distance to interpolated cursor
          const dx = x - smoothMouseX;
          const dy = y - smoothMouseY;
          const distSq = dx * dx + dy * dy;
          const hoverDist = Math.sqrt(distSq);

          let radius = 1.1;
          let alpha = 0.14;
          let isHovered = false;

          if (hoverDist < RADIUS_HOVER) {
            isHovered = true;
            // Smooth cosine falloff for fluid spotlight aura
            const t = 1 - hoverDist / RADIUS_HOVER;
            const ease = 0.5 - 0.5 * Math.cos(t * Math.PI);

            // Enlighten: enlarge dot and increase brightness
            radius = 1.1 + ease * 1.8; // expands up to ~2.9px
            alpha = 0.14 + ease * 0.82; // brightens up to ~0.96
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);

          if (isHovered && alpha > 0.45) {
            // Enlightened dots: luminous glowing teal/cyan highlight
            ctx.fillStyle = `rgba(45, 212, 191, ${alpha})`;
            ctx.shadowColor = "rgba(45, 212, 191, 0.6)";
            ctx.shadowBlur = radius * 3;
          } else {
            // Resting dots: subtle crisp silver/white
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.shadowBlur = 0;
          }

          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
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
