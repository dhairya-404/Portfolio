import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  title: "Dhairya — Systems Developer & Full-Stack Engineer",
  description:
    "Personal engineering studio and portfolio of Dhairya — showcasing multi-network bonding protocols, machine learning backends, full-stack Next.js architecture, and creative coding.",
  keywords: [
    "Dhairya",
    "Systems Engineer",
    "Full-Stack Developer",
    "Multi-Network Bonding",
    "Socket Multiplexing",
    "PHP Machine Learning",
    "Next.js 16",
    "Turbopack",
    "TypeScript",
  ],
  authors: [{ name: "Dhairya", url: "mailto:dhairyagajera470@gmail.com" }],
  openGraph: {
    title: "Dhairya — Systems Developer & Full-Stack Engineer",
    description:
      "Engineering high-throughput network architectures, machine learning backends, and tactile digital products with obsessive craft.",
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
      <body className="min-h-screen bg-[#070709] text-white font-sans selection:bg-purple-900/50 selection:text-white flex flex-col justify-between overflow-x-hidden">
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
