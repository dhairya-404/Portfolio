"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { NumbersSection } from "@/components/NumbersSection";
import { WorkSection } from "@/components/WorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { WritingSection } from "@/components/WritingSection";
import { ExperimentsSection } from "@/components/ExperimentsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sectionIds = [
      "work",
      "services",
      "process",
      "about",
      "writing",
      "experiments",
      "faq",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

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
        {/* Hero Section with particle canvas & dynamic marquee */}
        <Hero />

        {/* Telemetry & Impact Numbers Banner (Thenn.in Signature) */}
        <NumbersSection />

        {/* Selected Projects & Interactive Packet Bonding Simulator (Andreas.vision Signature) */}
        <WorkSection />

        {/* Engineering Capabilities & Technical Scope (Thenn.in Signature) */}
        <ServicesSection />

        {/* Project Lifecycle Rail: Understand, Design, Build, Refine (Thenn.in Signature) */}
        <ProcessSection />

        {/* 12-Column Editorial Grid & Core Philosophy (Andreas.vision Signature) */}
        <AboutSection />

        {/* Technical Essays & In-Browser Article Modal (Andreas.vision Signature) */}
        <WritingSection />

        {/* Creative Coding Lab & Live Kinetic Physics Sandbox (Andreas.vision Signature) */}
        <ExperimentsSection />

        {/* Questions, Answered - Interactive Accordion (Thenn.in Signature) */}
        <FaqSection />
      </main>

      {/* Closing Statement, Direct Inquiries & Colophon */}
      <ContactSection />
    </div>
  );
}
