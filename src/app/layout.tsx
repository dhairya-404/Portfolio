import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InteractiveDotGrid } from "@/components/InteractiveDotGrid";
import { GlassGleam } from "@/components/GlassGleam";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dhairya — AI & Systems Security Engineer",
  description:
    "Engineering portfolio of Dhairya — specializing in applied machine learning anomaly detection (TraceLabs DFIR), low-level C FFI socket multiplexing (Tesso), and resilient systems architecture.",
  keywords: [
    "Dhairya",
    "AI Engineer",
    "Cybersecurity",
    "DFIR",
    "Isolation Forest",
    "TraceLabs",
    "Tesso",
    "Multi-Network Bonding",
    "Socket Multiplexing",
    "Next.js 16",
    "TypeScript",
  ],
  authors: [{ name: "Dhairya", url: "mailto:dhairyagajera470@gmail.com" }],
  openGraph: {
    title: "Dhairya — AI & Systems Security Engineer",
    description:
      "Bridging applied machine learning threat detection with low-level OS network architectures and tactile systems engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-screen bg-[#070709] text-white font-sans selection:bg-purple-900/50 selection:text-white flex flex-col justify-between overflow-x-hidden relative">
        {/* Full-Screen Interactive Dot Grid (Enlightens dots on hover) */}
        <InteractiveDotGrid />
        {/* Dynamic iOS 27 Specular Glass Light Reflection Glint */}
        <GlassGleam />
        <Navbar />
        <div className="flex-1 flex flex-col relative z-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
