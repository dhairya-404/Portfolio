"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Check, Copy, Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "Studio" },
    { href: "/approach", label: "Approach" },
    { href: "/blog", label: "Journal" },
    { href: "/experiments", label: "Lab" },
  ];

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none ${
          isScrolled ? "translate-y-0" : "translate-y-1"
        }`}
      >
        <div className="pointer-events-auto flex items-center justify-between w-full max-w-5xl p-1.5 sm:p-2 rounded-full glass-navbar shadow-2xl">
          {/* Logo Brand with Teal Glowing Dot */}
          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1 text-white font-bold tracking-tight text-sm sm:text-base group"
          >
            <span className="group-hover:text-neutral-200 transition-colors">dhairya</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-medium text-neutral-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white/10 text-white font-semibold shadow-xs"
                      : "hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Signature Start a project Button & Email Copy */}
          <div className="flex items-center gap-2">
            <button
              onClick={copyEmail}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-teal-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 opacity-60" />
                  <span>dhairyagajera470@gmail.com</span>
                </>
              )}
            </button>

            <Link
              href="/contact"
              className="flex items-center gap-2 pl-3.5 pr-1.5 py-1.5 rounded-full bg-white text-neutral-950 font-medium text-xs sm:text-sm hover:bg-neutral-100 transition-all shadow-sm group cursor-pointer"
            >
              <span>Start a project</span>
              <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center text-neutral-950 group-hover:translate-x-0.5 transition-transform shadow-[0_0_8px_rgba(45,212,191,0.5)]">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden flex items-start justify-center pt-24 px-4 animate-in fade-in duration-200">
          <div className="bg-[#0e0e14] rounded-2xl border border-white/10 p-6 w-full max-w-sm flex flex-col gap-3 shadow-2xl">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider px-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 text-sm font-medium text-neutral-200 hover:text-white transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-white text-neutral-950 text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              <span>Start a project</span>
              <div className="w-5 h-5 rounded-full bg-teal-400 flex items-center justify-center text-neutral-950">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
