"use client";

import { useEffect, useRef } from "react";

/*
 * 3D Full-Bleed Perspective Particle Wave (thenn.in signature)
 *
 * Mathematically adapts to ANY screen width (mobile, 1080p, 1440p, 4K ultrawide):
 * - For every depth slice Z, particles are generated from screen left (X < 0)
 *   to screen right (X > width) so there are ZERO empty black gaps on either side.
 * - Undulating harmonic sine/cosine wave dynamics.
 * - High-DPI crispness with smooth requestAnimationFrame rendering.
 * - Gentle mouse/pointer interactive parallax.
 * - Pauses via IntersectionObserver when offscreen.
 */

interface ParticleWaveProps {
  className?: string;
}

export function ParticleWave({ className = "" }: ParticleWaveProps) {
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
    let isVisible = true;
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let pointerCanvasX = -1000;
    let pointerCanvasY = -1000;

    const ROWS = 42;
    const SEPARATION_Z = 34;
    const STEP_X = 36; // spacing between dots along X axis

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = normX * 90;
      targetMouseY = normY * 40;
      pointerCanvasX = e.clientX - rect.left;
      pointerCanvasY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      pointerCanvasX = -1000;
      pointerCanvasY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const CAMERA_HEIGHT = 200;
    const FOV = 360;

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      time += 0.022;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mouseX * 0.4;
      const centerY = height * 0.44 + mouseY * 0.25;

      // Draw 3D particle rows from back to front
      for (let iz = 0; iz < ROWS; iz++) {
        const z = (ROWS - iz) * SEPARATION_Z + 110;
        const scale = FOV / z;

        // Calculate 3D X range required to cover beyond the screen edges at this depth
        const x3dMin = (-centerX - 60) / scale;
        const x3dMax = (width - centerX + 60) / scale;

        // Align starting X to a multiple of STEP_X for consistent grid alignment
        const startX = Math.floor(x3dMin / STEP_X) * STEP_X;

        const depthRatio = Math.max(0, Math.min(1, (z - 110) / (ROWS * SEPARATION_Z)));
        const baseAlpha = (1 - depthRatio * 0.78) * 0.85;
        const radius = Math.max(0.7, (1 - depthRatio * 0.6) * 2.2);

        for (let x3d = startX; x3d <= x3dMax; x3d += STEP_X) {
          // Index for harmonic wave calculations
          const ix = Math.round(x3d / STEP_X);

          // Undulating wave equations with harmonic sine/cosine layers
          const wave1 = Math.sin(ix * 0.2 + time * 1.25) * 26;
          const wave2 = Math.cos(iz * 0.26 + time * 1.05) * 20;
          const wave3 = Math.sin((ix + iz) * 0.14 + time * 0.75) * 14;
          const y3d = wave1 + wave2 + wave3 - CAMERA_HEIGHT;

          // 2D projection
          const screenX = centerX + x3d * scale;
          const screenY = centerY - y3d * scale;

          if (
            screenX < -25 ||
            screenX > width + 25 ||
            screenY < -25 ||
            screenY > height + 25
          ) {
            continue;
          }

          // Edge falloff on the extreme viewport margins (subtle smooth vignette)
          const edgeDist = Math.min(screenX, width - screenX);
          const edgeFade = Math.min(1, Math.max(0, edgeDist / 60));
          const finalAlpha = baseAlpha * edgeFade;

          if (finalAlpha <= 0.01) continue;

          // Interactive cursor enlightenment (matching thenn.in Photo 5)
          const distToCursor = Math.hypot(screenX - pointerCanvasX, screenY - pointerCanvasY);
          const isCursorEnlightened = distToCursor < 160;

          let curRadius = radius;
          let curAlpha = finalAlpha;

          if (isCursorEnlightened) {
            const ease = 1 - distToCursor / 160;
            curRadius = radius + ease * 2.2;
            curAlpha = Math.min(1, finalAlpha + ease * 0.7);
          }

          // Subtle teal shimmer on wave peaks
          const isPeak = y3d > -CAMERA_HEIGHT + 14;

          ctx.beginPath();
          ctx.arc(screenX, screenY, curRadius, 0, Math.PI * 2);

          if (isCursorEnlightened) {
            ctx.fillStyle = `rgba(45, 212, 191, ${curAlpha})`;
            ctx.shadowColor = "rgba(45, 212, 191, 0.75)";
            ctx.shadowBlur = curRadius * 3;
          } else if (isPeak && curAlpha > 0.4) {
            ctx.fillStyle = `rgba(45, 212, 191, ${curAlpha * 0.95})`;
            ctx.shadowBlur = 0;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${curAlpha * 0.8})`;
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
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`relative w-full h-[400px] sm:h-[460px] overflow-hidden pointer-events-none select-none ${className}`}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
