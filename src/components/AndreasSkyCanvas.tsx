"use client";

import { useEffect, useRef } from "react";

function hash(e: number, n: number, t: number) {
  let o = (Math.imul(e, 374761393) + Math.imul(n, 668265263) + Math.imul(t, 982451653)) | 0;
  o = Math.imul(o ^ (o >>> 13), 1274126177);
  return ((o ^ (o >>> 16)) >>> 0) / 4294967296;
}

function noise(e: number, n: number, t: number) {
  const o = Math.floor(e);
  const r = Math.floor(n);
  const a = e - o;
  const l = n - r;
  const u = a * a * (3 - 2 * a);
  const i = l * l * (3 - 2 * l);
  const O = hash(o, r, t) + (hash(o + 1, r, t) - hash(o, r, t)) * u;
  const h = hash(o, r + 1, t) + (hash(o + 1, r + 1, t) - hash(o, r + 1, t)) * u;
  return O + (h - O) * i;
}

function fbm(e: number, n: number, t: number) {
  return 0.6 * noise(e, n, t) + 0.3 * noise(e * 2, n * 2, t + 1) + 0.1 * noise(e * 4, n * 4, t + 2);
}

function createDitherPattern(ctx: CanvasRenderingContext2D, c1: string, c2: string, size: number) {
  if (typeof document === "undefined") return c1;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size * 2;
  const pctx = canvas.getContext("2d");
  if (!pctx) return c1;
  pctx.fillStyle = c1;
  pctx.fillRect(0, 0, size * 2, size * 2);
  pctx.fillStyle = c2;
  pctx.fillRect(0, 0, size, size);
  pctx.fillRect(size, size, size, size);
  return ctx.createPattern(canvas, "repeat") || c1;
}

interface SkyProps {
  seed?: number;
  cell?: number;
  className?: string;
}

export function AndreasSkyCanvas({ seed = 12, cell = 22, className = "" }: SkyProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const deep = "#1e90ff"; // deep vibrant sky blue
    const mid = "#60b0ff";  // mid cyan sky blue
    const pale = "#ffffff"; // pure white center

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();

    // Create dither patterns
    const ditherSize = 2;
    const dither1 = createDitherPattern(ctx, deep, mid, ditherSize);
    const dither2 = createDitherPattern(ctx, mid, pale, ditherSize);
    const palette = [deep, dither1, mid, dither2, pale];

    const start = performance.now();

    const render = (time: number) => {
      const elapsed = (time - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      // We generate pixelated cloud framing around the perimeter:
      // Top, Bottom, Left, Right bands with variable noisy thickness
      const cols = Math.ceil(width / cell);
      const rows = Math.ceil(height / cell);

      // Center clear area normalized coordinates
      const centerX = width / 2;
      const centerY = height / 2;
      const radiusX = width * 0.44;
      const radiusY = height * 0.38;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * cell;
          const y = r * cell;

          // Normalized distance from center (0 at center, 1 at edge ellipse)
          const dx = (x + cell / 2 - centerX) / radiusX;
          const dy = (y + cell / 2 - centerY) / radiusY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // If inside the clear reading viewport, skip (keep white)
          if (dist < 0.65) continue;

          // Noise value with slow horizontal drift
          const nx = c * 0.12 + elapsed * 0.02;
          const ny = r * 0.12;
          const nVal = fbm(nx, ny, seed);

          // Combine distance with noise
          const cloudScore = (dist - 0.65) * 1.6 + (nVal - 0.5) * 0.9;

          if (cloudScore <= 0.1) {
            // inside clear area
            continue;
          }

          // Quantize into 4 shades:
          // 0 = deep, 1 = dither(deep, mid), 2 = mid, 3 = dither(mid, pale)
          let toneIdx = 3;
          if (cloudScore > 0.85) toneIdx = 0;
          else if (cloudScore > 0.6) toneIdx = 1;
          else if (cloudScore > 0.35) toneIdx = 2;
          else toneIdx = 3;

          ctx.fillStyle = palette[toneIdx];
          ctx.fillRect(x, y, cell, cell);
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleResize = () => {
      updateSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [seed, cell]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ imageRendering: "pixelated" }}
      aria-hidden="true"
    />
  );
}
