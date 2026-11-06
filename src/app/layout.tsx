import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
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
  title: "Dhairya — Developer Portfolio & Systems Engineer",
  description:
    "Personal portfolio of Dhairya — showcasing multi-network bonding, machine learning systems, full-stack architecture, and creative engineering experiments.",
  keywords: [
    "Dhairya",
    "Systems Engineer",
    "Full-Stack Developer",
    "Network Bonding",
    "Machine Learning",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Dhairya", url: "mailto:dhairyagajera470@gmail.com" }],
  openGraph: {
    title: "Dhairya — Developer Portfolio & Systems Engineer",
    description:
      "Showcasing multi-network bonding, machine learning architectures, and creative engineering experiments.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
