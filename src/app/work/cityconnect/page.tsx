"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Lock,
  RefreshCw,
  Building2,
  FileText,
  MapPin,
  Camera,
  Bell,
  Users,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface CivicComplaint {
  id: string;
  department: string;
  category: "Water" | "Road" | "Electric" | "Sanitation";
  title: string;
  pincode: string;
  city: string;
  ward: string;
  status: "Pending" | "In Progress" | "Resolved";
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  evidenceAsset: string;
  timestamp: string;
  description: string;
  timeline: { time: string; stage: string; actor: string }[];
}

const SAMPLE_COMPLAINTS: CivicComplaint[] = [
  {
    id: "CC-2026-8842",
    department: "Water Supply & Sewerage",
    category: "Water",
    title: "Main Trunk Pipeline Burst & Drinking Water Contamination Risk",
    pincode: "380015",
    city: "Ahmedabad",
    ward: "Ward 12 (Bodakdev)",
    status: "In Progress",
    severity: "CRITICAL",
    evidenceAsset: "https://res.cloudinary.com/cityconnect/evidence_water_burst.jpg",
    timestamp: "10:14 AM Today",
    description: "High pressure potable line burst along main arterial avenue; water overflowing onto roadway and risk of backflow contamination into residential sector pipes.",
    timeline: [
      { time: "10:14:02", stage: "Citizen Grievance Submitted", actor: "Citizen (UID: usr_7891)" },
      { time: "10:14:03", stage: "LocationResolver Auto-Ward Assigned", actor: "Geospatial Engine" },
      { time: "10:14:05", stage: "Cloudinary CDN Proof Verified", actor: "Media Pipeline" },
      { time: "10:28:11", stage: "Status -> In Progress & Crew Dispatched", actor: "Admin Desk (Officer Patel)" },
    ],
  },
  {
    id: "CC-2026-8819",
    department: "Road Engineering & Infrastructure",
    category: "Road",
    title: "Deep Hazardous Asphalt Crater Following Monsoon Drainage Trench",
    pincode: "380009",
    city: "Ahmedabad",
    ward: "Ward 5 (Navrangpura)",
    status: "Pending",
    severity: "HIGH",
    evidenceAsset: "https://res.cloudinary.com/cityconnect/evidence_road_damage.jpg",
    timestamp: "09:32 AM Today",
    description: "4-foot deep open road cave-in creating immediate hazard for two-wheelers and peak hour commuter traffic near junction signal.",
    timeline: [
      { time: "09:32:15", stage: "Citizen Grievance Submitted", actor: "Citizen (UID: usr_4402)" },
      { time: "09:32:16", stage: "Pincode 380009 -> Ward 5 Auto-Resolved", actor: "LocationResolver" },
      { time: "09:32:18", stage: "Queued in Municipal Road Queue", actor: "Firestore Trigger" },
    ],
  },
  {
    id: "CC-2026-8794",
    department: "Electrical Utilities & Lighting",
    category: "Electric",
    title: "High-Voltage Distribution Transformer Arcing & Spark Shower",
    pincode: "380001",
    city: "Ahmedabad",
    ward: "Ward 3 (Lal Darwaja)",
    status: "Resolved",
    severity: "CRITICAL",
    evidenceAsset: "https://res.cloudinary.com/cityconnect/evidence_transformer_spark.jpg",
    timestamp: "Yesterday, 07:45 PM",
    description: "Continuous electric sparking and transformer coolant leak near crowded street market; potential fire breakout prevented by rapid emergency isolation.",
    timeline: [
      { time: "19:45:00", stage: "Emergency Grievance Submitted", actor: "Citizen (UID: usr_1198)" },
      { time: "19:46:12", stage: "Immediate Admin Triaged", actor: "Emergency Admin (Officer Rao)" },
      { time: "20:10:30", stage: "Utility Linemen Repaired Transformer", actor: "Grid Field Tech" },
      { time: "20:35:00", stage: "Resolved & Vector PDF Dossier Generated", actor: "CityConnect System" },
    ],
  },
];

export default function CityConnectCaseStudy() {
  const [selectedComplaint, setSelectedComplaint] = useState<CivicComplaint>(SAMPLE_COMPLAINTS[0]);
  const [currentStatus, setCurrentStatus] = useState<"Pending" | "In Progress" | "Resolved">(SAMPLE_COMPLAINTS[0].status);
  const [totalResolved, setTotalResolved] = useState(148);
  const [showPdfModal, setShowPdfModal] = useState(false);

  useEffect(() => {
    if (!showPdfModal) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowPdfModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPdfModal]);

  const handleSelectComplaint = (c: CivicComplaint) => {
    setSelectedComplaint(c);
    setCurrentStatus(c.status);
  };

  const advanceStatus = () => {
    if (currentStatus === "Pending") {
      setCurrentStatus("In Progress");
    } else if (currentStatus === "In Progress") {
      setCurrentStatus("Resolved");
      setTotalResolved((prev) => prev + 1);
    } else {
      setCurrentStatus("Pending");
    }
  };

  const evidenceFilename = selectedComplaint.evidenceAsset.split("/").pop() ?? "evidence.jpg";

  const liveTimeline =
    currentStatus === selectedComplaint.status
      ? selectedComplaint.timeline
      : [
          ...selectedComplaint.timeline,
          {
            time: "LIVE",
            stage:
              currentStatus === "In Progress"
                ? "Status -> In Progress & Municipal Crew Assigned"
                : currentStatus === "Resolved"
                  ? "Status -> Resolved & Vector PDF Audit Sealed"
                  : "Status -> Reopened to Pending Triage Queue",
            actor: "Simulated Admin Console",
          },
        ];

  return (
    <article className="py-24 px-[var(--page-gutter)] max-w-5xl mx-auto w-full">
      {/* Back button */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors mb-10 group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to all projects</span>
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-4">
          <Building2 className="w-3.5 h-3.5" />
          <span>Case Study · Cross-Platform Mobile & Civic Tech (Flutter & Firebase)</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          CityConnect — Civic Grievance Redressal & Municipal Management Platform
        </h1>

        <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal mb-8 max-w-4xl">
          An end-to-end municipal governance mobile ecosystem engineered with Flutter 3 and Firebase. Connects citizens with municipal authorities across water, electricity, roads, and sanitation through smart location auto-resolution, cloud photographic evidence pipelines, role-based administration consoles, and automated vector PDF audit dossiers.
        </p>

        {/* Live Repository & Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/dhairya230508/CityConnect"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg shadow-white/5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setShowPdfModal(true)}
            className="glass-chip inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm text-blue-300 hover:text-white transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Preview Generated A4 PDF Dossier</span>
          </button>

          <span className="text-xs font-mono text-neutral-500 px-3 py-1">
            Stack: Flutter 3.x · Dart · Cloud Firestore · Cloudinary · PDF Engine
          </span>
        </div>
      </div>

      {/* Metadata Telemetry Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl dark-card mb-16 text-xs font-mono">
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Architecture</div>
          <div className="text-blue-400 font-bold">Dual RBAC (Citizen & Admin)</div>
        </div>
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Mobile Engine</div>
          <div className="text-white font-bold">Flutter 3.x / Dart</div>
        </div>
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Cloud Datastore</div>
          <div className="text-teal-400 font-bold">Firebase Cloud Firestore</div>
        </div>
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Audit Reports</div>
          <div className="text-blue-300 font-bold">Client-Side Vector PDF (A4)</div>
        </div>
      </div>

      {/* ===================== INTERACTIVE MUNICIPAL DISPATCH CONSOLE ===================== */}
      <div className="p-8 sm:p-10 rounded-3xl dark-card mb-16 space-y-6 border border-blue-500/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs font-mono uppercase text-blue-400 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Interactive Municipal Command Console</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
              Grievance Lifecycle & Dispatch Simulation
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={advanceStatus}
              className="px-4 py-2 rounded-full text-xs font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-colors flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Cycle Grievance State ({currentStatus})</span>
            </button>
          </div>
        </div>

        {/* Complaint Scenario Switcher */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-neutral-400">Select Municipal Incident Channel:</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {SAMPLE_COMPLAINTS.map((c) => (
              <button
                key={c.id}
                onClick={() => handleSelectComplaint(c)}
                className={`p-3 rounded-xl text-left transition-all border text-xs font-mono cursor-pointer ${
                  selectedComplaint.id === c.id
                    ? "bg-blue-500/15 border-blue-500/40 text-white shadow-sm"
                    : "bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <div className="font-bold text-neutral-200 truncate">{c.title}</div>
                <div className="text-[11px] text-neutral-500 mt-1 flex items-center justify-between">
                  <span>{c.ward}</span>
                  <span className="text-blue-300">{c.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Incident Terminal */}
        <div className="p-5 rounded-2xl glass-terminal font-mono text-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-neutral-400">TICKET: {selectedComplaint.id}</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-bold ${
                  currentStatus === "Resolved"
                    ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                    : currentStatus === "In Progress"
                    ? "bg-blue-500/15 border-blue-500/40 text-blue-300"
                    : "bg-amber-500/15 border-amber-500/40 text-amber-300"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    currentStatus === "Resolved"
                      ? "bg-emerald-400"
                      : currentStatus === "In Progress"
                      ? "bg-blue-400 animate-pulse"
                      : "bg-amber-400 animate-pulse"
                  }`}
                />
                STATUS: {currentStatus.toUpperCase()}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-[11px]">
                {selectedComplaint.severity}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-black/60 border border-white/10 text-neutral-300 text-[12px] leading-relaxed">
            <span className="text-blue-400 font-bold block mb-1">Grievance Narrative:</span>
            {selectedComplaint.description}
          </div>

          {/* Geospatial and Cloud Storage Resolution */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-neutral-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-400" />
                <span>Smart Ward</span>
              </div>
              <div className="text-white font-bold truncate mt-0.5">{selectedComplaint.ward}</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-neutral-500">Pincode Auto-Resolved</div>
              <div className="text-teal-300 font-bold truncate mt-0.5">{selectedComplaint.pincode} ({selectedComplaint.city})</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-neutral-500 flex items-center gap-1">
                <Camera className="w-3 h-3 text-purple-400" />
                <span>Media Proof</span>
              </div>
              <div className="text-purple-300 font-bold truncate mt-0.5" title={selectedComplaint.evidenceAsset}>
                {evidenceFilename}
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-neutral-500">Resolved Total</div>
              <div className="text-emerald-300 font-bold truncate mt-0.5">{totalResolved} Dossiers</div>
            </div>
          </div>

          {/* Audit Trail & Timeline */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-neutral-400 text-[11px]">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>Municipal Lifecycle Audit Trail</span>
              </span>
              <span className="text-neutral-500">Firestore Realtime Listener</span>
            </div>

            <div className="space-y-2">
              {liveTimeline.map((event, idx) => (
                <div
                  key={`${event.time}-${idx}`}
                  className={`p-2.5 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] ${
                    event.time === "LIVE"
                      ? "bg-blue-500/10 border-blue-500/40"
                      : "bg-black/40 border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={event.time === "LIVE" ? "text-emerald-400 font-bold" : "text-blue-400 font-bold"}>
                      {event.time}
                    </span>
                    <span className="text-neutral-600">|</span>
                    <span className="text-neutral-200">{event.stage}</span>
                  </div>
                  <span className="text-neutral-500 font-mono text-[10px]">[{event.actor}]</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===================== CORE ARCHITECTURAL WRITEUP ===================== */}
      <div className="space-y-14 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
        {/* Section 1: The Civic Dilemma */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            The Municipal Governance Challenge
          </h2>
          <p className="mb-4">
            Urban municipal corporations handle thousands of daily civic breakdown reports across expansive jurisdictions: potable water line fractures, road sinkholes, non-functional high-tension transformers, and overflowing garbage dumps. Traditional civic reporting suffers from acute structural bottlenecks:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-neutral-400 text-sm sm:text-base font-mono mb-6">
            <li>
              <strong className="text-white">Fragmented Routing & Ward Ambiguity:</strong> Citizens often don’t know which municipal administrative ward or sub-division handles their street, leading to grievances routed to wrong departmental desks.
            </li>
            <li>
              <strong className="text-white">Lack of Verifiable Photographic Proof:</strong> Without structured photo evidence and image compression at the time of submission, municipal crews arrive unprepared or cannot verify bogus complaints.
            </li>
            <li>
              <strong className="text-white">Absence of Tamper-Evident Audit Dossiers:</strong> Grievances get silently lost or marked resolved without downloadable, printable evidence summaries that citizens and civic auditors can inspect.
            </li>
          </ol>
          <p>
            CityConnect was engineered as a high-reliability Flutter and Firebase mobile ecosystem that unifies citizen issue reporting, geospatial ward auto-resolution, cloud photographic evidence ingestion, role-based administrative dispatch, and automated vector PDF audit reports.
          </p>
        </div>

        {/* Section 2: Architectural Pillars */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
            Five Core Architectural Pillars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl dark-card space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">1. Dual RBAC & Auth Security</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Segregates citizen and administrative roles with Firestore security rules. Municipal administrators maintain consoles for status management, user blocking moderation, and city directory configurations.
              </p>
            </div>

            <div className="p-6 rounded-2xl dark-card space-y-3">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">2. Geospatial Ward Auto-Resolver</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Smart <code className="text-teal-300">LocationResolver</code> maps 6-digit postal pincodes to exact city administrative wards. Eliminates user error and directly queues issues to the relevant ward supervisor.
              </p>
            </div>

            <div className="p-6 rounded-2xl dark-card space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">3. Cloudinary Photo Pipeline</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Direct camera/gallery media compression and serverless upload via Cloudinary REST APIs. Binds tamper-proof asset URLs to the grievance record with zero server latency overhead.
              </p>
            </div>

            <div className="p-6 rounded-2xl dark-card space-y-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">4. Client-Side Vector PDF Engine</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Synthesizes publication-grade A4 PDF audit dossiers on-device with Flutter <code className="text-amber-300">pdf</code> & <code className="text-amber-300">printing</code>. Supports date ranges, city filtering, and departmental breakdown tables.
              </p>
            </div>

            <div className="p-6 rounded-2xl dark-card space-y-3">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Bell className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">5. Real-Time Municipal Alerts</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Ward-scoped bulletin board delivering urgent public advisories: scheduled water cutoffs, road resurfacing closures, and electrical grid outages with High/Medium severity tagging.
              </p>
            </div>

            <div className="p-6 rounded-2xl dark-card space-y-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">6. Admin Moderation & Control</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Empowers administrative supervisors to inspect citizen registration registries, audit past complaint histories, and enforce immediate account blocking for bad-faith abuse.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Engineering Stack & Architecture */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Under the Hood: Flutter 3, Dart & Firebase Suite
          </h2>
          <p className="mb-4">
            CityConnect is architected for fluid performance, reactive real-time updates, and dependable offline resilience across low-end mobile devices:
          </p>

          <ul className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 text-sm sm:text-base font-mono">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Flutter 3.x Reactive UI:</strong> Custom Material & Cupertino UI components styled with Google Fonts Poppins, responsive layouts adapting to both handheld mobile and tablet-scale municipal admin terminals.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Cloud Firestore NoSQL Architecture:</strong> Structured collections (<code className="text-blue-300">ComplaintDescription</code>, <code className="text-blue-300">UserDetails</code>, <code className="text-blue-300">AdminDetails</code>, <code className="text-blue-300">CityDetails</code>) with reactive StreamBuilders for instant status propagation.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Cloudinary Media REST Integration:</strong> Unsigned upload presets with automated image scaling, bandwidth reduction, and secure HTTPS delivery to ensure municipal workers can inspect photos over 2G/3G connectivity.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Zero-Server Client-Side PDF Generation:</strong> Uses <code className="text-blue-300">pdf</code> & <code className="text-blue-300">printing</code> packages to assemble vector PDF tables, summary statistics, municipal headers, and print intents without server-side compute bills.
              </div>
            </li>
          </ul>
        </div>

        {/* Section 4: Repository Callout */}
        <div className="p-8 sm:p-10 rounded-3xl dark-card flex flex-col md:flex-row md:items-center justify-between gap-6 border border-blue-500/20">
          <div>
            <div className="text-xs font-mono uppercase text-blue-400 mb-1">Open Source Mobile Application</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Explore CityConnect on GitHub
            </h3>
            <p className="text-sm text-neutral-400 mt-2 max-w-lg">
              Inspect the Dart codebase, Firestore query models, PDF document generators, and location resolution heuristics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/dhairya230508/CityConnect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>dhairya230508/CityConnect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {showPdfModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cityconnect-pdf-modal-title"
          onClick={() => setShowPdfModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#0d1117] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div id="cityconnect-pdf-modal-title" className="flex items-center gap-2 text-blue-400 font-mono text-sm">
                <FileText className="w-4 h-4" />
                <span>Generated Municipal Audit Dossier (A4 Layout)</span>
              </div>
              <button
                type="button"
                aria-label="Close dossier preview"
                onClick={() => setShowPdfModal(false)}
                className="text-neutral-400 hover:text-white text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="p-6 bg-white text-neutral-900 rounded-xl font-mono text-xs space-y-4 shadow-inner max-h-[60vh] overflow-y-auto">
              <div className="text-center border-b pb-3">
                <h4 className="text-base font-bold text-neutral-950 uppercase">Municipal Corporation of CityConnect</h4>
                <p className="text-neutral-500 text-[10px]">Official Grievance Audit & Action-Taken Dossier</p>
                <p className="text-neutral-400 text-[9px] mt-1">
                  Active Jurisdiction: {selectedComplaint.city} · Scope: All Active Municipal Wards
                </p>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center py-2 bg-neutral-100 rounded-lg">
                <div>
                  <div className="text-[10px] text-neutral-500">Total Registered</div>
                  <div className="font-bold text-sm text-neutral-900">{236 + totalResolved}</div>
                </div>
                <div>
                  <div className="text-[10px] text-amber-600">Pending Review</div>
                  <div className="font-bold text-sm text-amber-600">42</div>
                </div>
                <div>
                  <div className="text-[10px] text-blue-600">In Progress</div>
                  <div className="font-bold text-sm text-blue-600">89</div>
                </div>
                <div>
                  <div className="text-[10px] text-emerald-600">Resolved</div>
                  <div className="font-bold text-sm text-emerald-600">{totalResolved}</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold text-[11px] uppercase tracking-wider text-neutral-700">Active & Recent Dossier Entries:</div>
                <div className="p-2 border rounded bg-neutral-50 text-[10px] space-y-1">
                  <div className="flex justify-between font-bold">
                    <span>#{selectedComplaint.id} · {selectedComplaint.department}</span>
                    <span
                      className={
                        currentStatus === "Resolved"
                          ? "text-emerald-600"
                          : currentStatus === "In Progress"
                            ? "text-blue-600"
                            : "text-amber-600"
                      }
                    >
                      {currentStatus.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-neutral-600">
                    Location: {selectedComplaint.ward} · Pincode: {selectedComplaint.pincode}
                  </div>
                  <div className="text-neutral-500 text-[9px]">
                    Proof: {evidenceFilename} · Cloudinary Verified
                  </div>
                </div>
                <div className="p-2 border rounded bg-neutral-50 text-[10px] space-y-1">
                  <div className="flex justify-between font-bold">
                    <span>#CC-2026-8794 · Electrical Utility</span>
                    <span className="text-emerald-600">RESOLVED</span>
                  </div>
                  <div className="text-neutral-600">Location: Ward 3 (Lal Darwaja) · Pincode: 380001</div>
                  <div className="text-neutral-500 text-[9px]">Action Taken: Transformer repair executed · Verification Confirmed</div>
                </div>
              </div>

              <div className="pt-4 border-t flex justify-between text-[9px] text-neutral-400">
                <span>Verification Signature: SEC-SHA256-AUTHENTIC</span>
                <span>Page 1 of 1 · CityConnect Mobile PDF Engine</span>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowPdfModal(false)}
                className="px-4 py-2 rounded-full bg-blue-500 text-white font-mono text-xs font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
