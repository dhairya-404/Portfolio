"use client";

import { useEffect, useRef } from "react";

/*
 * 3D Undulating Perspective Dot-Matrix Particle Wave
 *
 * Recreates the thenn.in signature animated 3D particle wave:
 * - Mathematical grid of dots in 3D perspective space (X, Y, Z)
 * - Harmonically layered sinusoidal wave displacement:
 *     Y = sin(ix * 0.25 + time) * 18 + cos(iz * 0.3 + time * 1.2) * 14
 * - Depth projection (X_proj = x / z, Y_proj = y / z) with horizon perspective
 * - Dynamic alpha and size scaling based on Z-depth (particles close to viewer are larger and luminous)
 * - Gentle mouse/pointer parallax reaction
 * - Zero CPU waste: pauses when offscreen via IntersectionObserver
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

    // Grid configuration
    const COLS = 55;
    const ROWS = 45;
    const SEPARATION_X = 38;
    const SEPARATION_Z = 32;

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

    // Track mouse over canvas parent for gentle interactive tilt
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = normX * 80;
      targetMouseY = normY * 35;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // IntersectionObserver to pause rendering when not in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // 3D Camera / Projection settings
    const CAMERA_HEIGHT = 220;
    const FOV = 340;

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      time += 0.024;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mouseX * 0.35;
      const centerY = height * 0.42 + mouseY * 0.25;

      // Draw 3D particle grid
      for (let iz = 0; iz < ROWS; iz++) {
        // Z distance from camera (further in back to closer in front)
        const z = (ROWS - iz) * SEPARATION_Z + 120;
        const scale = FOV / z;

        for (let ix = 0; ix < COLS; ix++) {
          const x3d = (ix - COLS / 2) * SEPARATION_X;

          // Undulating wave equations: multiple sine/cosine frequencies
          // creating organic rolling ripples
          const wave1 = Math.sin(ix * 0.22 + time * 1.3) * 26;
          const wave2 = Math.cos(iz * 0.28 + time * 1.1) * 22;
          const wave3 = Math.sin((ix + iz) * 0.15 + time * 0.8) * 16;
          const y3d = wave1 + wave2 + wave3 - CAMERA_HEIGHT;

          // 2D perspective projection
          const screenX = centerX + x3d * scale;
          const screenY = centerY - y3d * scale;

          // Cull out-of-bounds particles
          if (
            screenX < -20 ||
            screenX > width + 20 ||
            screenY < -20 ||
            screenY > height + 20
          ) {
            continue;
          }

          // Depth-based size and luminescence (alpha)
          // Nearer particles are brighter, farther particles fade into darkness
          const depthRatio = Math.max(0, Math.min(1, (z - 120) / (ROWS * SEPARATION_Z)));
          const alpha = (1 - depthRatio * 0.82) * 0.88;
          const radius = Math.max(0.7, (1 - depthRatio * 0.65) * 2.1);

          // Subtle teal tint on crests
          const isCrest = y3d > -CAMERA_HEIGHT + 14;

          ctx.beginPath();
          ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);

          if (isCrest && alpha > 0.5) {
            ctx.fillStyle = `rgba(45, 212, 191, ${alpha * 0.95})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
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
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`relative w-full h-[380px] sm:h-[440px] overflow-hidden pointer-events-none select-none ${className}`}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
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
