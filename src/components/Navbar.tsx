"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

/*
 * Snug Floating Glassmorphism Navbar (inspired by thenn.in & iOS 27)
 *
 * Sits centered at the top as a compact, content-hugging pill:
 *   [ dhairya •  |  Work  Services  Studio  Approach  Journal  Lab  |  (Start a project ->) ]
 *
 * Smooth scroll dynamics:
 *   - At top: comfortable 56px height, ultra-clear liquid glass
 *   - Scrolled: compact 50px height, deeper frosted blur (28px), snugger gaps
 *   - Scroll DOWN fast (>240px): smoothly tucks up out of view
 *   - Scroll UP: snaps back down with spring physics
 */

/*
 * Physics-Driven Thumb Motor (inspired by thenn.in & iOS 27)
 * Runs directly on requestAnimationFrame with spring physics, bypassing React state
 * for true zero-latency, fluid, non-blocking hover tracking with velocity stretch.
 */
function createThumbMotor(el: HTMLElement) {
  // Springs:
  // Position spring: k=460, c=32 (snappy, silky critically damped spring with zero latency)
  // Lift/stretch spring: k=260, c=20
  // Opacity spring: k=340, c=24
  const x = { x: 0, v: 0, to: 0 };
  const y = { x: 0, v: 0, to: 0 };
  const w = { x: 0, v: 0, to: 0 };
  const h = { x: 0, v: 0, to: 0 };
  const lift = { x: 0, v: 0, to: 0 };
  const opacity = { x: 0, v: 0, to: 0 };

  let isInitialized = false;
  let rafId = 0;
  let lastTime = 0;
  let isPressed = false;

  const stepSpring = (
    s: { x: number; v: number; to: number },
    k: number,
    c: number,
    dt: number
  ) => {
    s.v += (-k * (s.x - s.to) - c * s.v) * dt;
    s.x += s.v * dt;
  };

  const isResting = (s: { x: number; v: number; to: number }, tol = 0.05) =>
    Math.abs(s.x - s.to) < tol && Math.abs(s.v) < 10 * tol;

  const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

  const applyStyles = () => {
    const curW = Math.max(0, w.x);
    const curH = Math.max(0, h.x);
    const stretch = Math.min(Math.abs(x.v) / 3600, 0.12);
    const curLift = Math.max(0, lift.x);
    const curOpacity = clamp01(opacity.x);
    const scaleFactor = (1 + 0.08 * curLift) * curOpacity;

    const scaleX = (scaleFactor * (1 + stretch)).toFixed(4);
    const scaleY = (scaleFactor * (1 - 0.45 * stretch)).toFixed(4);

    el.style.width = `${curW}px`;
    el.style.height = `${curH}px`;
    el.style.transform = `translate3d(${x.x.toFixed(2)}px, ${y.x.toFixed(2)}px, 0) scale(${scaleX}, ${scaleY})`;
    el.style.opacity = `${curOpacity.toFixed(3)}`;
    el.style.setProperty("--moving", clamp01(lift.x).toFixed(3));
  };

  const loop = (timestamp: number) => {
    const dt = Math.min(0.032, lastTime ? (timestamp - lastTime) / 1000 : 1 / 60);
    lastTime = timestamp;

    // Sub-step 4 times per frame for high numerical fidelity
    const subDt = dt / 4;
    for (let i = 0; i < 4; i++) {
      stepSpring(x, 460, 32, subDt);
      stepSpring(y, 460, 32, subDt);
      stepSpring(w, 460, 32, subDt);
      stepSpring(h, 460, 32, subDt);
      stepSpring(lift, 260, 20, subDt);
      stepSpring(opacity, 340, 24, subDt);
    }

    if (!isPressed && lift.to === 1 && Math.abs(x.x - x.to) < 4 && Math.abs(w.x - w.to) < 4) {
      lift.to = 0;
    }

    applyStyles();

    if (
      isResting(x) &&
      isResting(y) &&
      isResting(w) &&
      isResting(h) &&
      isResting(opacity) &&
      isResting(lift, 0.01)
    ) {
      x.x = x.to;
      x.v = 0;
      y.x = y.to;
      y.v = 0;
      w.x = w.to;
      w.v = 0;
      h.x = h.to;
      h.v = 0;
      lift.x = lift.to;
      lift.v = 0;
      opacity.x = opacity.to;
      opacity.v = 0;
      applyStyles();
      rafId = 0;
      lastTime = 0;
      return;
    }

    rafId = requestAnimationFrame(loop);
  };

  const kick = () => {
    if (!rafId) {
      lastTime = performance.now();
      rafId = requestAnimationFrame(loop);
    }
  };

  return {
    moveTo(rect: { x: number; y: number; w: number; h: number }, animate = true) {
      // If first entry or lens was hidden, snap instantly to link coordinates
      const snap = !animate || !isInitialized || opacity.x < 0.05;
      x.to = rect.x;
      y.to = rect.y;
      w.to = rect.w;
      h.to = rect.h;
      isInitialized = true;

      if (snap) {
        x.x = rect.x;
        x.v = 0;
        y.x = rect.y;
        y.v = 0;
        w.x = rect.w;
        w.v = 0;
        h.x = rect.h;
        h.v = 0;
        applyStyles();
        return;
      }

      lift.to = 1;
      kick();
    },
    show(visible: boolean, animate = true) {
      opacity.to = visible ? 1 : 0;
      if (!animate) {
        opacity.x = opacity.to;
        opacity.v = 0;
        applyStyles();
        return;
      }
      kick();
    },
    press(down: boolean) {
      isPressed = down;
      lift.to = down ? 1 : 0;
      kick();
    },
    destroy() {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    },
  };
}

export function Navbar() {
  const pathname = usePathname();
  const [isCompact, setIsCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "Studio" },
    { href: "/approach", label: "Approach" },
    { href: "/blog", label: "Journal" },
    { href: "/experiments", label: "Lab" },
  ];

  const activeIndex = navLinks.findIndex(
    (l) => pathname === l.href || pathname.startsWith(l.href + "/")
  );

  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const lensRef = useRef<HTMLDivElement>(null);
  const motorRef = useRef<ReturnType<typeof createThumbMotor> | null>(null);

  useEffect(() => {
    if (!lensRef.current) return;
    const motor = createThumbMotor(lensRef.current);
    motorRef.current = motor;

    if (activeIndex >= 0 && linksRef.current[activeIndex]) {
      const el = linksRef.current[activeIndex]!;
      motor.moveTo(
        { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight },
        false
      );
      motor.show(true, false);
    } else {
      motor.show(false, false);
    }

    const handleResize = () => {
      if (activeIndex >= 0 && linksRef.current[activeIndex]) {
        const el = linksRef.current[activeIndex]!;
        motor.moveTo(
          { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight },
          false
        );
      }
    };

    window.addEventListener("resize", handleResize);
    document.fonts?.ready?.then(handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      motor.destroy();
      motorRef.current = null;
    };
  }, [pathname, activeIndex]);

  const handleLinkPointerEnter = (idx: number) => {
    const motor = motorRef.current;
    const el = linksRef.current[idx];
    if (!motor || !el) return;
    motor.moveTo(
      { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight },
      true
    );
    motor.show(true, true);
  };

  const handleContainerPointerLeave = () => {
    const motor = motorRef.current;
    if (!motor) return;
    motor.press(false);
    if (activeIndex >= 0 && linksRef.current[activeIndex]) {
      const el = linksRef.current[activeIndex]!;
      motor.moveTo(
        { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight },
        true
      );
    } else {
      motor.show(false, true);
    }
  };

  const handleLinkPointerDown = () => motorRef.current?.press(true);
  const handleLinkPointerUp = () => motorRef.current?.press(false);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const prev = lastScrollY.current;

      setIsCompact(current > 30);

      // Hide when scrolling DOWN past 240px
      if (current > 240 && current > prev + 5) {
        setHidden(true);
      }
      // Reveal on ANY scroll UP
      if (current < prev - 3) {
        setHidden(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ─── Floating Centered Wrapper ────────────────────────────────────── */}
      <header
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: hidden ? "translateY(-120%)" : "translateY(0)",
        }}
      >
        {/* ─── The Snug Glass Capsule Pill ───────────────────────────────── */}
        <nav
          aria-label="Primary"
          className="glass-navbar pointer-events-auto inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 transition-all duration-300 ease-out"
          style={{
            height: isCompact ? "50px" : "56px",
            padding: isCompact ? "4px 6px 4px 18px" : "5px 8px 5px 22px",
            borderRadius: "9999px",
          }}
        >
          {/* ── Brand Logo with Encased Glass Pill & Teal Glow Dot ── */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white font-semibold tracking-tight text-sm sm:text-base mr-1 px-3 py-1.5 rounded-full hover:bg-white/[0.08] transition-all cursor-pointer"
          >
            <span>dhairya</span>
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_rgba(45,212,191,0.9)]"
              style={{ marginTop: "2px" }}
            />
          </Link>

          {/* ── Desktop Navigation Links with Zero-Delay Fluid Physics Lens ── */}
          <div
            onPointerLeave={handleContainerPointerLeave}
            className="relative hidden md:flex items-center"
          >
            {/* The Zero-Delay Fluid Physics Glass Lens */}
            <div
              ref={lensRef}
              aria-hidden="true"
              className="absolute top-0 left-0 pointer-events-none rounded-full"
              style={{
                width: 0,
                height: 0,
                opacity: 0,
                willChange: "transform, width, opacity",
                transformOrigin: "50% 50%",
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.04) 100%)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.20)",
                boxShadow: [
                  "0 0 0 1px rgba(255, 255, 255, 0.06)",
                  "inset 0 1.5px 0.5px rgba(255, 255, 255, 0.55)",
                  "inset 0 -1px 0 rgba(0, 0, 0, 0.35)",
                  "0 4px 16px rgba(0, 0, 0, 0.35)",
                  "0 0 14px rgba(45, 212, 191, 0.14)",
                ].join(","),
              }}
            >
              {/* Optical teal tick indicator dot */}
              <span
                className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_#2dd4bf] pointer-events-none transition-opacity duration-150"
                style={{ opacity: "calc(1 - var(--moving, 0) * 2)" }}
              />
            </div>

            {navLinks.map((link, idx) => {
              const isActive = activeIndex === idx;
              return (
                <Link
                  key={link.href}
                  ref={(el) => {
                    linksRef.current[idx] = el;
                  }}
                  href={link.href}
                  onPointerEnter={() => handleLinkPointerEnter(idx)}
                  onPointerDown={handleLinkPointerDown}
                  onPointerUp={handleLinkPointerUp}
                  className={`relative z-10 px-3.5 py-1.5 text-xs lg:text-[13px] font-medium tracking-tight rounded-full select-none cursor-pointer transition-colors duration-100 ${
                    isActive ? "text-white font-semibold" : "text-white/70 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* ── Start a Project Button (thenn.in signature pill) ── */}
          <Link
            href="/contact"
            className="flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-[13px] hover:bg-neutral-100 transition-all shadow-[0_2px_14px_rgba(255,255,255,0.35),inset_0_1px_0_#ffffff] group ml-1 cursor-pointer hover:scale-[1.02] active:scale-98"
          >
            <span className="whitespace-nowrap">Start a project</span>
            <div className="w-6 h-6 rounded-full bg-[#2dd4bf] flex items-center justify-center text-neutral-950 group-hover:translate-x-0.5 transition-transform shadow-[0_0_12px_rgba(45,212,191,0.8)]">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </Link>

          {/* ── Mobile Hamburger Trigger ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </nav>
      </header>

      {/* ─── Mobile Drawer Menu ───────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden flex items-start justify-center pt-24 px-4"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl p-6 flex flex-col gap-3 shadow-2xl"
            style={{
              background: "rgba(10, 10, 16, 0.9)",
              backdropFilter: "blur(32px) saturate(180%)",
              WebkitBackdropFilter: "blur(32px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.2), 0 24px 60px rgba(0,0,0,0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider px-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-3 rounded-2xl hover:bg-white/5 text-sm font-medium text-neutral-200 hover:text-white transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-full bg-white text-neutral-950 text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              <span>Start a project</span>
              <div className="w-6 h-6 rounded-full bg-[#2dd4bf] flex items-center justify-center text-neutral-950">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
