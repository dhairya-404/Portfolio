"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  Search,
  Lock,
  Cpu,
  AlertTriangle,
  RefreshCw,
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

const SAMPLE_INCIDENTS = [
  {
    id: "win-4624",
    name: "Windows Event 4624/4625 (Pass-the-Hash)",
    logType: "Windows EVTX (Auth)",
    rawDigest: "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
    sourceIp: "10.0.4.182",
    target: "DC-PRIMARY.CORP",
    user: "SVC_BACKUP$",
    anomalyScore: 94.8,
    threatLevel: "CRITICAL",
    ruleTrigger: "RULE-T1075: Pass the Hash Lateral Movement Pattern",
    mlVerdict: "Isolation Forest Outlier (-0.428)",
    events: [
      { time: "03:14:02.118", actor: "10.0.4.182", action: "Logon Type 3 (Network) Anomaly", status: "Failed (0xC000006D)" },
      { time: "03:14:02.482", actor: "10.0.4.182", action: "NTLM Auth Request (NTLMv1 downgraded)", status: "Success (0x0)" },
      { time: "03:14:03.011", actor: "SVC_BACKUP$", action: "RPC Service Pipe Bound \\pipe\\svcctl", status: "Elevated" },
    ],
  },
  {
    id: "ssh-brute",
    name: "Linux /var/log/auth.log (Distributed SSH)",
    logType: "Linux Syslog (PAM)",
    rawDigest: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    sourceIp: "194.26.29.114",
    target: "edge-gateway-01",
    user: "root / deploy",
    anomalyScore: 89.2,
    threatLevel: "HIGH",
    ruleTrigger: "RULE-T1110: High-Frequency PAM Authentication Bursts",
    mlVerdict: "Temporal Burst Score (> 42 att/sec)",
    events: [
      { time: "02:45:10.004", actor: "194.26.29.114", action: "Failed password for invalid user admin", status: "Rejected" },
      { time: "02:45:10.042", actor: "194.26.29.114", action: "Failed password for invalid user deploy", status: "Rejected" },
      { time: "02:45:11.109", actor: "194.26.29.114", action: "Connection closed by authenticating user", status: "Terminated" },
    ],
  },
  {
    id: "palo-alto",
    name: "Palo Alto Firewall (DNS Data Exfiltration)",
    logType: "Palo Alto Traffic CEF",
    rawDigest: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    sourceIp: "172.16.88.42",
    target: "ns1.malicious-c2.cc",
    user: "SYSTEM",
    anomalyScore: 97.6,
    threatLevel: "CRITICAL",
    ruleTrigger: "RULE-T1048: High-Entropy DNS Query Length Anomaly",
    mlVerdict: "Shannon Entropy Spike (4.82 bits/byte)",
    events: [
      { time: "04:02:18.441", actor: "172.16.88.42", action: "DNS Query: a1f8b39c0d.malicious-c2.cc", status: "Forwarded (Port 53)" },
      { time: "04:02:19.102", actor: "172.16.88.42", action: "DNS Query: 4e99f01ab2.malicious-c2.cc", status: "Forwarded (Port 53)" },
      { time: "04:02:19.980", actor: "172.16.88.42", action: "Payload Exfiltration Threshold Exceeded", status: "Sinkholed" },
    ],
  },
];

export default function TraceLabCaseStudy() {
  const [selectedIncident, setSelectedIncident] = useState(SAMPLE_INCIDENTS[0]);
  const [hashVerified, setHashVerified] = useState(true);
  const [triageCount, setTriageCount] = useState(2400);

  const simulateTriage = () => {
    setHashVerified(false);
    setTimeout(() => {
      setHashVerified(true);
      setTriageCount((prev) => prev + 120);
    }, 450);
  };

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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Case Study · Digital Forensics & Incident Triage (DFIR)</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          TraceLab — Digital Activity Forensics & Incident Triage Platform
        </h1>

        <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal mb-8 max-w-4xl">
          The forensic detective workbench for digital event logs. Ingest heterogeneous SIEM logs, compute SHA-256 cryptographic non-repudiation digests, reconstruct synchronized timeline swimlanes, and triage multi-stage cyber attacks with hybrid rule heuristics and machine learning.
        </p>

        {/* Live Website & GitHub Action CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://tracelabs-ops.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg shadow-white/5"
          >
            <span>Launch Live Platform</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/dhairya-404/Trace-Labs"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-chip inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm text-neutral-200 hover:text-white transition-all cursor-pointer"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <span className="text-xs font-mono text-neutral-500 px-3 py-1">
            Production Deployment: tracelabs-ops.vercel.app
          </span>
        </div>
      </div>

      {/* Metadata Telemetry Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl dark-card mb-16 text-xs font-mono">
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Evidence Integrity</div>
          <div className="text-teal-400 font-bold">SHA-256 Non-Repudiation</div>
        </div>
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Architecture</div>
          <div className="text-white font-bold">Pure PHP 8.3 MVC</div>
        </div>
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">ML Engine</div>
          <div className="text-purple-400 font-bold">scikit-learn Isolation Forest</div>
        </div>
        <div>
          <div className="text-neutral-500 uppercase tracking-wider mb-1">Ingestion Speed</div>
          <div className="text-teal-400 font-bold">&lt; 18ms / 1,000 Events</div>
        </div>
      </div>

      {/* ===================== INTERACTIVE DFIR WORKBENCH SIMULATOR ===================== */}
      <div className="p-8 sm:p-10 rounded-3xl dark-card mb-16 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs font-mono uppercase text-teal-400 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive Forensic Workbench Preview</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
              Multi-Source Log Ingestion & SHA-256 Non-Repudiation Digest
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={simulateTriage}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30 hover:bg-teal-500/30 transition-colors flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <RefreshCw className={`w-3 h-3 ${!hashVerified ? "animate-spin" : ""}`} />
              <span>Verify Provenance ({triageCount} logs)</span>
            </button>
          </div>
        </div>

        {/* Sample Log Switcher Tabs */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-neutral-400">Select Forensic Investigation Scenario:</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {SAMPLE_INCIDENTS.map((inc) => (
              <button
                key={inc.id}
                onClick={() => setSelectedIncident(inc)}
                className={`p-3 rounded-xl text-left transition-all border text-xs font-mono cursor-pointer ${
                  selectedIncident.id === inc.id
                    ? "bg-teal-500/15 border-teal-500/40 text-white shadow-sm"
                    : "bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <div className="font-bold text-neutral-200 truncate">{inc.name}</div>
                <div className="text-[11px] text-neutral-500 mt-1">{inc.logType}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Forensic Digest Box */}
        <div className="p-5 rounded-2xl glass-terminal font-mono text-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-teal-400" />
              <span className="text-neutral-400">EVIDENCE CHAIN OF CUSTODY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[11px]">
                <CheckCircle2 className="w-3 h-3" />
                {hashVerified ? "SHA-256 Tamper-Evident" : "Computing..."}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px]">
                {selectedIncident.threatLevel} THREAT
              </span>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="text-neutral-500 text-[11px]">Cryptographic Evidence Hash (SHA-256):</div>
            <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-teal-300 text-[11px] break-all select-all font-mono">
              {selectedIncident.rawDigest}
            </div>
          </div>

          {/* Forensic Metadata Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px]">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-neutral-500">Source Entity</div>
              <div className="text-white font-bold truncate mt-0.5">{selectedIncident.sourceIp}</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-neutral-500">Target Endpoint</div>
              <div className="text-white font-bold truncate mt-0.5">{selectedIncident.target}</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-neutral-500">Actor Account</div>
              <div className="text-white font-bold truncate mt-0.5">{selectedIncident.user}</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-neutral-500">ML Anomaly Conf.</div>
              <div className="text-purple-300 font-bold mt-0.5">{selectedIncident.anomalyScore}%</div>
            </div>
          </div>

          {/* Normalized Event Timeline Reconstruction */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-neutral-400 text-[11px]">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-teal-400" />
                <span>Reconstructed Timeline Swimlane Events</span>
              </span>
              <span className="text-neutral-500">Normalized Canonical Schema</span>
            </div>

            <div className="space-y-2">
              {selectedIncident.events.map((ev, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-teal-400 font-bold">{ev.time}</span>
                    <span className="text-neutral-500">|</span>
                    <span className="text-neutral-300">{ev.action}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400 font-mono">[{ev.actor}]</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-200 text-[10px]">
                      {ev.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dual-Engine Triage Verdict */}
          <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-200 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-purple-300">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Dual-Engine Triage Decision:</span>
            </div>
            <div>• Heuristic Rule: {selectedIncident.ruleTrigger}</div>
            <div>• Machine Learning: {selectedIncident.mlVerdict}</div>
          </div>
        </div>
      </div>

      {/* ===================== CORE ARCHITECTURAL WRITEUP ===================== */}
      <div className="space-y-14 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
        {/* Section 1: The Forensic Dilemma */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            The Digital Forensics Dilemma
          </h2>
          <p className="mb-4">
            Security Operations Centers (SOC) and Digital Forensics & Incident Response (DFIR) teams operate in an environment drowning in noise. A single mid-sized corporate network generates tens of millions of raw log entries daily across incompatible schemas: Windows EVTX binary logs, syslog text streams from firewalls, Palo Alto CEF, and web server combined access logs.
          </p>
          <p className="mb-4">
            During an active security breach, investigators face two existential challenges:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-neutral-400 text-sm sm:text-base font-mono mb-6">
            <li>
              <strong className="text-white">Evidence Tampering & Non-Repudiation:</strong> Without immediate, cryptographically sound hashing upon ingestion, logs cannot be verified in legal proceedings or post-mortems against intentional deletion or modification by rootkits.
            </li>
            <li>
              <strong className="text-white">Cognitive Overload & Timeline Disconnect:</strong> Traditional SIEM tools present tabular logs disconnected in time, making lateral movement, pass-the-hash attacks, and slow-and-low DNS exfiltration invisible to analysts.
            </li>
          </ol>
          <p>
            TraceLab was created as a high-speed detective workbench to bridge log ingestion, non-repudiation, visual timeline reconstruction, and automated dual-engine threat triage.
          </p>
        </div>

        {/* Section 2: Architectural Pillars */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
            Three Core Architectural Pillars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl dark-card space-y-3">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">1. Cryptographic Non-Repudiation</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Every log batch undergoes automatic SHA-256 evidence hashing directly upon arrival. Maintains a tamper-evident chain of custody satisfying strict digital forensics auditing requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl dark-card space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">2. Timeline Swimlane Reconstruction</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Ingested events are normalized to canonical schema (actor, target, timestamp, action) and plotted into dynamic, synchronised vis-timeline swimlanes for visual chain-of-event inspection.
              </p>
            </div>

            <div className="p-6 rounded-2xl dark-card space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">3. Dual-Engine Threat Triage</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Marries deterministic Sigma rule matching with unsupervised scikit-learn Isolation Forest ML algorithms. Catches both known exploit signatures and zero-day anomaly deviations.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Engineering Stack & Architecture */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Under the Hood: Pure PHP 8.3 MVC & Machine Learning
          </h2>
          <p className="mb-4">
            TraceLab is built with an intentionally lightweight, ultra-performant technology stack designed to run anywhere with minimal resource consumption:
          </p>

          <ul className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 text-sm sm:text-base font-mono">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Pure PHP 8.3 MVC Engine:</strong> Custom high-throughput parsing pipeline without bulky enterprise framework overhead. Implements fast regex parsers, tokenizers, and binary stream processors.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">scikit-learn Isolation Forest Engine:</strong> Calculates anomaly scores across multi-dimensional feature spaces (temporal frequency, payload entropy, port deviation, and user logon irregularities).
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">vis-timeline Interactive Canvas:</strong> Renders thousands of synchronized log points at 60fps, allowing investigators to zoom from days to sub-second burst windows.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Automated Deployment on Vercel:</strong> Continuous deployment configured with full edge optimization and zero cold-start overhead.
              </div>
            </li>
          </ul>
        </div>

        {/* Section 4: External Links & Repository Callout */}
        <div className="p-8 sm:p-10 rounded-3xl dark-card flex flex-col md:flex-row md:items-center justify-between gap-6 border border-teal-500/20">
          <div>
            <div className="text-xs font-mono uppercase text-teal-400 mb-1">Open Source & Live Deployment</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Explore TraceLab in Action
            </h3>
            <p className="text-sm text-neutral-400 mt-2 max-w-lg">
              Visit the live interactive platform or audit the full source code, parsers, and machine learning models on GitHub.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://tracelabs-ops.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <span>tracelabs-ops.vercel.app</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/dhairya-404/Trace-Labs"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-chip inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm text-neutral-200 hover:text-white transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>dhairya-404/Trace-Labs</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
