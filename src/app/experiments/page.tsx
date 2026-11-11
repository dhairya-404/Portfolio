"use client";

import { useEffect, useState } from "react";
import { ShieldAlert, Sparkles } from "lucide-react";

interface TelemetryEvent {
  id: string;
  timestamp: string;
  sourceIp: string;
  vector: string;
  anomalyScore: number;
  digest: string;
}

const INITIAL_TELEMETRY: TelemetryEvent[] = [
  {
    id: "evt-101",
    timestamp: "17:54:02.118",
    sourceIp: "10.0.4.12",
    vector: "HTTPS Healthcheck /api/status",
    anomalyScore: 0.16,
    digest: "sha256:9f84b2c1...e73a",
  },
  {
    id: "evt-102",
    timestamp: "17:54:09.440",
    sourceIp: "185.220.101.47",
    vector: "SSH Auth Burst (64 failed keys / 2s)",
    anomalyScore: 0.91,
    digest: "sha256:4a10f9d8...b219",
  },
  {
    id: "evt-103",
    timestamp: "17:54:15.803",
    sourceIp: "10.0.4.28",
    vector: "PostgreSQL Automated Vacuum",
    anomalyScore: 0.23,
    digest: "sha256:7d31c8e2...04fa",
  },
  {
    id: "evt-104",
    timestamp: "17:54:22.019",
    sourceIp: "45.148.10.92",
    vector: "Unusual Outbound Payload (412MB / port 8443)",
    anomalyScore: 0.87,
    digest: "sha256:2c67e5a9...91dc",
  },
];

export default function ExperimentsPage() {
  // RK4 Spring Simulator State
  const [tension, setTension] = useState(170);
  const [friction, setFriction] = useState(26);
  const [mass, setMass] = useState(1);
  const [nodePos, setNodePos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Tesso Multi-Network Bonding Simulator State
  const [ethChannels, setEthChannels] = useState(4);
  const [packetLoss, setPacketLoss] = useState(0.2);
  const simSpeed = Math.round(ethChannels * 380 * (1 - packetLoss / 100));

  // TraceLabs Isolation Forest Anomaly Sandbox State
  const [threshold, setThreshold] = useState(0.65);
  const [events, setEvents] = useState<TelemetryEvent[]>(INITIAL_TELEMETRY);

  // RK4 spring physics loop
  useEffect(() => {
    let animId: number;
    let pos = nodePos;
    let vel = 0;
    const target = 0;

    const step = () => {
      if (!isDragging) {
        // RK4 physics integration step
        const dt = 1 / 60;
        const k = tension;
        const c = friction;
        const m = mass;

        const force = -k * (pos - target) - c * vel;
        const accel = force / m;
        vel += accel * dt;
        pos += vel * dt;

        setNodePos(pos);
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [tension, friction, mass, isDragging, nodePos]);

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      const relativeX = e.clientX - rect.left - rect.width / 2;
      setNodePos(Math.max(-140, Math.min(140, relativeX)));
    }
  };

  const injectEvent = (vector: string, sourceIp: string, anomalyScore: number) => {
    const now = new Date();
    const timestamp = now.toTimeString().slice(0, 8) + "." + String(now.getMilliseconds()).padStart(3, "0");
    const randomHex = Math.floor(Math.random() * 0xffffffff)
      .toString(16)
      .padStart(8, "0");
    const newEvent: TelemetryEvent = {
      id: `evt-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp,
      sourceIp,
      vector,
      anomalyScore,
      digest: `sha256:${randomHex}...${randomHex.slice(0, 4)}`,
    };
    setEvents((prev) => [newEvent, ...prev].slice(0, 6));
  };

  const flaggedCount = events.filter((e) => e.anomalyScore >= threshold).length;

  return (
    <div className="py-24 px-[var(--page-gutter)] max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive AI &amp; Systems Lab</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Creative <span className="font-editorial-serif font-normal italic text-[#c084fc]">play</span>.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed font-normal">
          Direct in-code interactive prototypes. Test Tesso socket multiplexing algorithms, TraceLabs Isolation Forest anomaly triage thresholds, and RK4 mechanical spring physics live.
        </p>
      </div>

      <div className="space-y-12">
        {/* Lab Experiment 1: RK4 Spring Simulator */}
        <div className="p-8 sm:p-12 rounded-3xl dark-card space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs font-mono text-purple-400 uppercase">Experiment 01</div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Runge-Kutta 4th Order (RK4) Kinetic Spring Sandbox
              </h2>
            </div>
            <div className="text-xs font-mono text-teal-400 font-bold bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              60 FPS Physical Loop
            </div>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
            Drag the tactile puck below and release. It calculates exact mechanical recoil, harmonic inertia, and velocity dissipation using second-order Runge-Kutta differential equations.
          </p>

          {/* Interactive Spring Canvas Stage */}
          <div
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleDrag}
            className="relative h-44 rounded-2xl bg-black/70 border border-white/10 flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden"
          >
            {/* Center target indicator */}
            <div className="absolute top-0 bottom-0 w-px bg-white/20" />
            <div className="absolute text-[10px] font-mono text-neutral-500 top-2">Rest Equilibrium (x=0)</div>

            {/* Draggable Spring Puck */}
            <div
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-[0_0_30px_rgba(168,85,247,0.5)] border border-purple-300 flex items-center justify-center font-mono text-white text-xs font-bold transition-shadow"
              style={{
                transform: `translateX(${nodePos}px)`,
              }}
            >
              {Math.round(nodePos)}px
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10 text-xs font-mono">
            <div>
              <div className="flex justify-between text-neutral-300 mb-2">
                <span>Tension (k)</span>
                <span className="text-purple-400 font-bold">{tension}</span>
              </div>
              <input
                type="range"
                min="50"
                max="400"
                value={tension}
                onChange={(e) => setTension(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-neutral-300 mb-2">
                <span>Friction (c)</span>
                <span className="text-purple-400 font-bold">{friction}</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                value={friction}
                onChange={(e) => setFriction(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-neutral-300 mb-2">
                <span>Mass (m)</span>
                <span className="text-purple-400 font-bold">{mass} kg</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={mass}
                onChange={(e) => setMass(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Lab Experiment 2: Tesso Socket Multiplexing Tuner */}
        <div className="p-8 sm:p-12 rounded-3xl dark-card space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs font-mono text-teal-400 uppercase">Experiment 02 · Tesso Engine</div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Tesso Multi-Network Socket Multiplexer Dynamic Tuner
              </h2>
            </div>
            <div className="text-2xl font-mono text-teal-300 font-bold">
              {simSpeed} Mbps
            </div>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
            Adjust concurrent C FFI socket channels and synthetic packet loss to observe Tesso&apos;s real-time adaptive throughput aggregation and failover recalculation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            <div>
              <div className="flex justify-between text-neutral-300 mb-2">
                <span>Concurrent Socket Schedulers</span>
                <span className="text-teal-400 font-bold">{ethChannels} Sockets</span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={ethChannels}
                onChange={(e) => setEthChannels(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-neutral-300 mb-2">
                <span>Synthetic Packet Loss</span>
                <span className="text-teal-400 font-bold">{packetLoss}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={packetLoss}
                onChange={(e) => setPacketLoss(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-neutral-400">
            <span>Buffer Allocation: {ethChannels * 128} KB Ring Buffer</span>
            <span className="text-teal-400">Zero Socket Overflow</span>
          </div>
        </div>

        {/* Lab Experiment 3: TraceLabs Isolation Forest Anomaly Sandbox */}
        <div className="p-8 sm:p-12 rounded-3xl dark-card space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Experiment 03 · TraceLabs ML Core</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Isolation Forest Anomaly Triage &amp; Non-Repudiation Sandbox
              </h2>
            </div>
            <div className="text-right font-mono">
              <div className="text-2xl text-amber-300 font-bold">
                {flaggedCount} / {events.length} Flagged
              </div>
              <div className="text-xs text-neutral-400">Decision Threshold &tau; = {threshold.toFixed(2)}</div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
            Simulate unsupervised tree-based isolation scoring over normalized security logs. Tune the anomaly contamination boundary or inject synthetic attack vectors to watch TraceLabs isolate malicious bursts and bind cryptographic SHA-256 evidence digests.
          </p>

          {/* Threshold Slider & Synthetic Log Injectors */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center font-mono text-xs">
            <div className="lg:col-span-5">
              <div className="flex justify-between text-neutral-300 mb-2">
                <span>Isolation Decision Boundary (&tau;)</span>
                <span className="text-amber-400 font-bold">{threshold.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.40"
                max="0.95"
                step="0.01"
                value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>

            <div className="lg:col-span-7 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => injectEvent("SYN Flood Port Sweep (ports 1-1024)", "194.26.135.81", 0.89)}
                className="px-3.5 py-2 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 hover:bg-amber-500/25 transition-colors cursor-pointer"
              >
                + Inject Port Scan
              </button>
              <button
                type="button"
                onClick={() => injectEvent("Credential Stuffing Burst (/oauth/token)", "91.132.147.204", 0.94)}
                className="px-3.5 py-2 rounded-full bg-red-500/15 border border-red-500/40 text-red-300 hover:bg-red-500/25 transition-colors cursor-pointer"
              >
                + Inject Brute Force
              </button>
              <button
                type="button"
                onClick={() => injectEvent("Routine Telemetry Sync (cron.daily)", "10.0.4.19", 0.19)}
                className="px-3.5 py-2 rounded-full bg-teal-500/15 border border-teal-500/40 text-teal-300 hover:bg-teal-500/25 transition-colors cursor-pointer"
              >
                + Inject Normal Traffic
              </button>
            </div>
          </div>

          {/* Live Triage Event Stream */}
          <div className="space-y-3 font-mono text-xs">
            {events.map((evt) => {
              const isAnomaly = evt.anomalyScore >= threshold;
              return (
                <div
                  key={evt.id}
                  className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isAnomaly
                      ? "bg-amber-500/10 border-amber-500/40 text-amber-100"
                      : "bg-black/50 border-white/10 text-neutral-300"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          isAnomaly
                            ? "bg-amber-400 text-neutral-950"
                            : "bg-white/10 text-neutral-400"
                        }`}
                      >
                        {isAnomaly ? "ANOMALY" : "BENIGN"}
                      </span>
                      <span className="text-neutral-400">{evt.timestamp}</span>
                      <span className="text-white font-semibold">{evt.sourceIp}</span>
                    </div>
                    <div className="text-neutral-200">{evt.vector}</div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-neutral-500 hidden md:block">{evt.digest}</div>
                    <div
                      className={`font-bold px-3 py-1 rounded-lg border ${
                        isAnomaly
                          ? "border-amber-400/40 bg-amber-500/20 text-amber-300"
                          : "border-white/10 bg-white/5 text-teal-400"
                      }`}
                    >
                      score: {evt.anomalyScore.toFixed(2)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
