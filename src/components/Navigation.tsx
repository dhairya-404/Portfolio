"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Menu, X } from "lucide-react";

interface NavProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavProps) {
  const [isScrolledAway, setIsScrolledAway] = useState(true);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Hide when near top of hero, reveal when scrolling up in content
          if (currentScrollY > 240) {
            if (currentScrollY > lastScrollY + 6) {
              setIsScrolledAway(true);
            } else if (currentScrollY < lastScrollY - 4) {
              setIsScrolledAway(false);
            }
          } else {
            setIsScrolledAway(true);
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dhairyagajera470@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const navLinks = [
    { id: "work", label: "Work" },
    { id: "services", label: "Capabilities" },
    { id: "process", label: "Process" },
    { id: "about", label: "About" },
    { id: "writing", label: "Writing" },
    { id: "experiments", label: "Play" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-5 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ease-[cubic-bezier(0.2,0.715,0.205,0.99)] pointer-events-none ${
          isScrolledAway
            ? "-translate-y-12 opacity-0 blur-[4px] pointer-events-none"
            : "translate-y-0 opacity-100 blur-none"
        }`}
      >
        <div className="pointer-events-auto flex items-center justify-between gap-2 sm:gap-3 nav-pill px-3 sm:px-4 py-2 rounded-full max-w-2xl w-full shadow-sm hover:shadow-md transition-shadow">
          {/* Brand mark */}
          <a
            href="#"
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-full hover:bg-black/5 transition-colors text-sm text-neutral-900 group shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse group-hover:scale-125 transition-transform" />
            <span className="font-semibold tracking-tight">Dhairya</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-neutral-900 text-white shadow-xs"
                      : "text-neutral-600 hover:text-neutral-950 hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Condensed Links for Medium Screens */}
          <nav className="hidden md:flex lg:hidden items-center gap-1">
            {navLinks.filter(l => ["work", "services", "about", "writing", "contact"].includes(l.id)).map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-600 hover:text-neutral-950 hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Quick email action */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-700 bg-black/5 hover:bg-black/10 active:scale-95 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 opacity-60" />
                  <span>Copy email</span>
                </>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="lg:hidden p-1.5 rounded-full text-neutral-700 hover:bg-black/5 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden flex items-start justify-center pt-24 px-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200/80 p-5 w-full max-w-sm flex flex-col gap-2">
            <div className="text-xs font-mono text-neutral-400 px-3 py-1 uppercase tracking-wider">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-neutral-100 text-sm font-medium text-neutral-900 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
            <div className="h-px bg-neutral-100 my-1" />
            <a
              href="mailto:dhairyagajera470@gmail.com"
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Dhairya</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
