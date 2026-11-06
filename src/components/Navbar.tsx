"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Check, Copy, Menu, X } from "lucide-react";

/*
 * iOS 27 / visionOS Dynamic Island-inspired glassmorphism navbar.
 *
 * Scroll states:
 *   top      (scrollY <  40)  → wide pill, full opacity, blur-md
 *   compact  (scrollY >= 40)  → narrower pill, deepened glass, hidden email
 *   hidden   (scrollY > 220 & scrolling DOWN) → slides out of view
 *   revealed (scrolling UP after hidden) → snaps back as compact pill
 *
 * Spring transition: cubic-bezier(0.34, 1.56, 0.64, 1) gives the
 * physical bounce that Apple uses for Dynamic Island morphing.
 */

export function Navbar() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const prev = lastScrollY.current;

      setScrollY(current);

      // Hide when scrolling DOWN past 220px
      if (current > 220 && current > prev + 4) {
        setHidden(true);
      }
      // Reveal on ANY upward movement
      if (current < prev - 2) {
        setHidden(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dhairyagajera470@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      /* ignore */
    }
  };

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "Studio" },
    { href: "/approach", label: "Approach" },
    { href: "/blog", label: "Journal" },
    { href: "/experiments", label: "Lab" },
  ];

  // Derived scroll state
  const isCompact = scrollY >= 40;
  const isTop = scrollY < 40;

  return (
    <>
      {/* ─── Floating Navbar ──────────────────────────────────────────── */}
      <header
        style={{
          position: "fixed",
          top: "16px",
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          padding: "0 16px",
          pointerEvents: "none",
          // iOS 27 spring: slides up on hide, snaps down on reveal
          transform: hidden ? "translateY(-110%)" : "translateY(0)",
          transition: hidden
            ? "transform 380ms cubic-bezier(0.4, 0, 0.2, 1)"
            : "transform 520ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // Spring-animated pill width — wider to fit content naturally
            maxWidth: isCompact ? "860px" : "1100px",
            width: "100%",
            // Vertical padding shrinks when compact
            padding: isCompact ? "6px 6px" : "8px 8px",
            borderRadius: "9999px",
            // Transition: spring for width/padding morph
            transition:
              "max-width 500ms cubic-bezier(0.34, 1.56, 0.64, 1), padding 400ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 300ms ease, background 300ms ease, border-color 300ms ease",
            // ── Glassmorphism layers ──
            background: isCompact
              ? "rgba(8, 8, 14, 0.78)"
              : "rgba(12, 12, 20, 0.65)",
            backdropFilter: isCompact
              ? "blur(28px) saturate(180%)"
              : "blur(20px) saturate(160%)",
            WebkitBackdropFilter: isCompact
              ? "blur(28px) saturate(180%)"
              : "blur(20px) saturate(160%)",
            // Multi-layer border + glow
            border: `1px solid ${isCompact ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.1)"}`,
            boxShadow: isCompact
              ? [
                  "0 0 0 0.5px rgba(255,255,255,0.1)",      // outer rim
                  "inset 0 1px 0 rgba(255,255,255,0.18)",   // inner top rim light
                  "inset 0 -1px 0 rgba(0,0,0,0.3)",         // inner bottom depth
                  "0 8px 32px rgba(0,0,0,0.65)",            // main shadow
                  "0 32px 64px rgba(0,0,0,0.35)",           // deep ambient
                  "0 0 80px rgba(0,0,0,0.2)",               // wide soft bloom
                ].join(",")
              : [
                  "0 0 0 0.5px rgba(255,255,255,0.08)",
                  "inset 0 1px 0 rgba(255,255,255,0.14)",
                  "0 10px 30px rgba(0,0,0,0.5)",
                  "0 20px 50px rgba(0,0,0,0.25)",
                ].join(","),
            // Noise texture overlay — subtle grain on the glass
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          }}
        >
          {/* ── LEFT GROUP: Logo + Nav Links ───────────────────────────── */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "4px 10px 4px 14px",
                color: "#fff",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                fontSize: isCompact ? "13px" : "14px",
                textDecoration: "none",
                transition: "font-size 400ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ opacity: isTop ? 1 : 0.95 }}>dhairya</span>
              {/* Teal glowing dot */}
              <span
                style={{
                  display: "inline-block",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#2dd4bf",
                  boxShadow:
                    "0 0 6px rgba(45,212,191,0.9), 0 0 14px rgba(45,212,191,0.5)",
                  flexShrink: 0,
                }}
              />
            </Link>

            {/* Divider */}
            <span
              style={{
                width: "1px",
                height: "16px",
                background: "rgba(255,255,255,0.12)",
                marginRight: "4px",
              }}
              className="hidden md:block"
            />

            {/* Desktop Nav Links — immediately after logo */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: isCompact ? "0px" : "2px",
                transition: "gap 400ms ease",
              }}
              className="hidden md:flex"
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      padding: isCompact ? "5px 9px" : "5px 11px",
                      borderRadius: "9999px",
                      fontSize: isCompact ? "12px" : "13px",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                      background: isActive
                        ? "rgba(255,255,255,0.12)"
                        : "transparent",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      transition:
                        "padding 400ms cubic-bezier(0.34,1.56,0.64,1), font-size 400ms ease, background 200ms ease, color 200ms ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#fff";
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.background = "rgba(255,255,255,0.07)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(255,255,255,0.6)";
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.background = "transparent";
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* ── RIGHT GROUP: Email + CTA + Hamburger ─────────────────── */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Copy email — hidden when compact */}
            {isTop && (
              <button
                onClick={copyEmail}
                style={{
                  display: "none", // shown via media query below — use className
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  borderRadius: "9999px",
                  fontSize: "11px",
                  fontFamily: "var(--font-geist-mono), monospace",
                  color: "rgba(255,255,255,0.45)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 200ms ease, background 200ms ease",
                }}
                className="hidden lg:flex"
                title="Copy email"
              >
                {copied ? (
                  <>
                    <Check
                      style={{ width: "13px", height: "13px", color: "#2dd4bf" }}
                    />
                    <span style={{ color: "#2dd4bf" }}>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy
                      style={{
                        width: "13px",
                        height: "13px",
                        opacity: 0.5,
                      }}
                    />
                    <span>dhairyagajera470@gmail.com</span>
                  </>
                )}
              </button>
            )}

            {/* Start a project CTA */}
            <Link
              href="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                paddingLeft: isCompact ? "12px" : "14px",
                paddingRight: "6px",
                paddingTop: "6px",
                paddingBottom: "6px",
                borderRadius: "9999px",
                background: "#ffffff",
                color: "#0a0a0f",
                fontWeight: 600,
                fontSize: isCompact ? "12px" : "13px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                transition:
                  "padding 400ms cubic-bezier(0.34,1.56,0.64,1), font-size 400ms ease, background 200ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#e8e8e8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#ffffff";
              }}
            >
              <span>Start a project</span>
              <span
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "#2dd4bf",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0a0a0f",
                  flexShrink: 0,
                  boxShadow: "0 0 10px rgba(45,212,191,0.6)",
                  transition: "transform 200ms ease",
                }}
              >
                <ArrowRight style={{ width: "13px", height: "13px" }} />
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.7)",
                cursor: "pointer",
                transition: "background 200ms ease, color 200ms ease",
              }}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X style={{ width: "16px", height: "16px" }} />
              ) : (
                <Menu style={{ width: "16px", height: "16px" }} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Drawer ──────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "88px",
            padding: "88px 16px 16px",
          }}
          className="md:hidden"
        >
          <div
            style={{
              // Glassmorphism drawer
              background: "rgba(8, 8, 14, 0.9)",
              backdropFilter: "blur(32px) saturate(160%)",
              WebkitBackdropFilter: "blur(32px) saturate(160%)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: [
                "inset 0 1px 0 rgba(255,255,255,0.15)",
                "0 20px 60px rgba(0,0,0,0.7)",
              ].join(","),
              borderRadius: "24px",
              padding: "20px",
              width: "100%",
              maxWidth: "380px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontFamily: "var(--font-geist-mono), monospace",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "0 8px 4px",
              }}
            >
              Navigation
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  borderRadius: "14px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  transition: "background 200ms ease, color 200ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.8)";
                }}
              >
                <span>{link.label}</span>
                <ArrowRight
                  style={{
                    width: "14px",
                    height: "14px",
                    color: "rgba(255,255,255,0.3)",
                  }}
                />
              </Link>
            ))}

            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.08)",
                margin: "4px 0",
              }}
            />

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                borderRadius: "14px",
                background: "#ffffff",
                color: "#0a0a0f",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 200ms ease",
              }}
            >
              <span>Start a project</span>
              <span
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "#2dd4bf",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowRight style={{ width: "12px", height: "12px" }} />
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
