"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { WritingSection } from "@/components/WritingSection";
import { ExperimentsSection } from "@/components/ExperimentsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sectionIds = ["work", "about", "writing", "experiments", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-neutral-950 font-sans selection:bg-neutral-950 selection:text-white">
      {/* Fixed Pill Navigation Dock */}
      <Navigation activeSection={activeSection} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Selected Projects & Experiments Wall */}
        <WorkSection />

        {/* 12-Column About & Core Values Philosophy */}
        <AboutSection />

        {/* Taste Notes & Editorial Writing */}
        <WritingSection />

        {/* Creative Coding Playground & Live Simulators */}
        <ExperimentsSection />
      </main>

      {/* Contact & Closing Colophon */}
      <ContactSection />
    </div>
  );
}
