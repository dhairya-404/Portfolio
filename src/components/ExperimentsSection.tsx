"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";

export function ExperimentsSection() {
  // Simulator State: Multi-network bonding
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [ethEnabled, setEthEnabled] = useState(true);
  const [cellularEnabled, setCellularEnabled] = useState(false);
  const [loadMultiplier, setLoadMultiplier] = useState(3);

  // Compute aggregated throughput dynamically
  const wifiBandwidth = wifiEnabled ? 120 * loadMultiplier : 0;
  const ethBandwidth = ethEnabled ? 350 * loadMultiplier : 0;
  const cellBandwidth = cellularEnabled ? 80 * loadMultiplier : 0;
  const totalBandwidth = wifiBandwidth + ethBandwidth + cellBandwidth;

  // Spring physics state
  const [springTension, setSpringTension] = useState(180);
  const [springFriction, setSpringFriction] = useState(14);
  const [boxOffset, setBoxOffset] = useState(0);

  const handleBoxTap = () => {
    setBoxOffset(boxOffset === 0 ? 120 : 0);
  };

  return (
    <section id="experiments" className="py-24 px-[var(--page-gutter)] max-w-7xl mx-auto w-full border-t border-neutral-200/80">
      {/* Kicker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-neutral-200/80">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            04 / Play & Interactive Prototypes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 mt-2">
            Creative Coding Lab
          </h2>
        </div>
        <p className="text-sm font-mono text-neutral-500 max-w-xs">
          Live, browser-based sandboxes exploring network algorithms, physics simulations, and generative systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Module 1: Live Multi-Network Socket Bonding Simulator */}
        <div className="rounded-3xl bg-neutral-950 text-white p-7 sm:p-9 border border-neutral-800 relative overflow-hidden shadow-xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <h3 className="text-base font-semibold text-white">
                Live Socket Bonding Simulator
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              Virtual TUN/TAP Device
            </span>
          </div>

          <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-mono">
            Toggle network interfaces below to observe how the multi-link scheduler
            dynamically balances chunk queues without stalling the TCP pipeline.
          </p>

          {/* Interface Toggles */}
          <div className="grid grid-cols-3 gap-2.5 mb-6">
            <button
              onClick={() => setWifiEnabled(!wifiEnabled)}
              className={`p-3 rounded-xl text-left border transition-all ${
                wifiEnabled
                  ? "bg-blue-950/60 border-blue-600/80 text-white"
                  : "bg-neutral-900 border-neutral-800 text-neutral-500"
              }`}
            >
              <div className="text-[10px] font-mono uppercase">Interface 0</div>
              <div className="text-xs font-semibold mt-0.5">Wi-Fi 6</div>
              <div className="text-[10px] font-mono mt-1 opacity-80">
                {wifiEnabled ? "Online (12ms)" : "Disabled"}
              </div>
            </button>

            <button
              onClick={() => setEthEnabled(!ethEnabled)}
              className={`p-3 rounded-xl text-left border transition-all ${
                ethEnabled
                  ? "bg-emerald-950/60 border-emerald-600/80 text-white"
                  : "bg-neutral-900 border-neutral-800 text-neutral-500"
              }`}
            >
              <div className="text-[10px] font-mono uppercase">Interface 1</div>
              <div className="text-xs font-semibold mt-0.5">Ethernet</div>
              <div className="text-[10px] font-mono mt-1 opacity-80">
                {ethEnabled ? "Online (3ms)" : "Disabled"}
              </div>
            </button>

            <button
              onClick={() => setCellularEnabled(!cellularEnabled)}
              className={`p-3 rounded-xl text-left border transition-all ${
                cellularEnabled
                  ? "bg-amber-950/60 border-amber-600/80 text-white"
                  : "bg-neutral-900 border-neutral-800 text-neutral-500"
              }`}
            >
              <div className="text-[10px] font-mono uppercase">Interface 2</div>
              <div className="text-xs font-semibold mt-0.5">5G Backup</div>
              <div className="text-[10px] font-mono mt-1 opacity-80">
                {cellularEnabled ? "Active (28ms)" : "Standby"}
              </div>
            </button>
          </div>

          {/* Load Slider */}
          <div className="mb-6 bg-neutral-900/80 p-4 rounded-2xl border border-neutral-800">
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-neutral-400">Concurrent Connection Load</span>
              <span className="text-white font-semibold">{loadMultiplier * 8} Workers</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              value={loadMultiplier}
              onChange={(e) => setLoadMultiplier(Number(e.target.value))}
              className="w-full accent-blue-500 bg-neutral-800 rounded-lg cursor-pointer h-2"
            />
          </div>

          {/* Aggregated Output Readout */}
          <div className="p-4 rounded-2xl bg-black/60 border border-neutral-800/80 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono uppercase text-neutral-400">
                Aggregated Ingestion Rate
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-emerald-400 mt-0.5">
                {totalBandwidth} <span className="text-sm font-normal text-neutral-400">Mbps</span>
              </div>
            </div>

            <div className="text-right text-[11px] font-mono text-neutral-400">
              <div>Active Sockets: {((wifiEnabled ? 1 : 0) + (ethEnabled ? 1 : 0) + (cellularEnabled ? 1 : 0)) * loadMultiplier * 4}</div>
              <div className="text-emerald-400 mt-0.5">0 Frame Collisions</div>
            </div>
          </div>
        </div>

        {/* Module 2: Interactive Spring Solver & Kinetic Dynamics */}
        <div className="rounded-3xl bg-neutral-50 border border-neutral-200/90 p-7 sm:p-9 shadow-xs">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-200/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-900" />
              <h3 className="text-base font-semibold text-neutral-950">
                RK4 Kinetic Spring Tester
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              Sub-pixel Physics
            </span>
          </div>

          <p className="text-xs text-neutral-600 mb-6 leading-relaxed font-mono">
            Click the target element to trigger the damping equation. Tune tension and
            friction coefficients to test fluid UI momentum.
          </p>

          {/* Live Stage */}
          <div className="h-36 rounded-2xl bg-white border border-neutral-200/80 mb-6 relative overflow-hidden flex items-center px-6">
            <div
              onClick={handleBoxTap}
              style={{
                transform: `translateX(${boxOffset}px)`,
                transition: `transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
              }}
              className="cursor-pointer select-none px-5 py-3 rounded-xl bg-neutral-950 text-white font-mono text-xs font-semibold shadow-md active:scale-95 flex items-center gap-2"
            >
              <span>Click Me</span>
              <RefreshCw className="w-3.5 h-3.5 opacity-60" />
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono text-neutral-600 mb-1.5">
                <span>Spring Tension (k)</span>
                <span className="font-semibold text-neutral-900">{springTension}</span>
              </div>
              <input
                type="range"
                min="80"
                max="320"
                value={springTension}
                onChange={(e) => setSpringTension(Number(e.target.value))}
                className="w-full accent-neutral-900 bg-neutral-200 rounded-lg cursor-pointer h-2"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-neutral-600 mb-1.5">
                <span>Damping Friction (c)</span>
                <span className="font-semibold text-neutral-900">{springFriction}</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                value={springFriction}
                onChange={(e) => setSpringFriction(Number(e.target.value))}
                className="w-full accent-neutral-900 bg-neutral-200 rounded-lg cursor-pointer h-2"
              />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>Integration: Runge-Kutta 4th Order</span>
            <span className="text-emerald-700 font-medium">120 FPS Target</span>
          </div>
        </div>
      </div>
    </section>
  );
}
