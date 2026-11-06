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

export function Navbar() {
  const pathname = usePathname();
  const [isCompact, setIsCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

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

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "Studio" },
    { href: "/approach", label: "Approach" },
    { href: "/blog", label: "Journal" },
    { href: "/experiments", label: "Lab" },
  ];

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
            className="glass-nav-link flex items-center gap-1.5 text-white font-semibold tracking-tight text-sm sm:text-base mr-1 px-3 py-1.5 cursor-pointer"
          >
            <span>dhairya</span>
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_rgba(45,212,191,0.9)]"
              style={{ marginTop: "2px" }}
            />
          </Link>

          {/* ── Desktop Navigation Links ── */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`glass-nav-link relative px-3.5 py-1.5 text-xs lg:text-[13px] font-medium tracking-tight cursor-pointer ${
                    isActive ? "is-active text-white" : "text-white/75"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#2dd4bf] shadow-[0_0_6px_#2dd4bf] z-10" />
                  )}
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
