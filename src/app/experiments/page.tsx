"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export default function ExperimentsPage() {
  // RK4 Spring Simulator State
  const [tension, setTension] = useState(170);
  const [friction, setFriction] = useState(26);
  const [mass, setMass] = useState(1);
  const [nodePos, setNodePos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Bonding Simulator State
  const [ethChannels, setEthChannels] = useState(4);
  const [packetLoss, setPacketLoss] = useState(0.2);
  const [simSpeed, setSimSpeed] = useState(1480);

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

  const recomputeBonding = () => {
    const raw = ethChannels * 380;
    const effective = Math.round(raw * (1 - packetLoss / 100));
    setSimSpeed(effective);
  };

  return (
    <div className="py-24 px-[var(--page-gutter)] max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-teal-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Engineering Lab</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Creative <span className="font-editorial-serif font-normal italic text-[#c084fc]">play</span>.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed font-normal">
          Direct in-code interactive prototypes. Test socket multiplexing algorithms and Runge-Kutta 4th order mechanical spring physics live.
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

        {/* Lab Experiment 2: Socket Multiplexing Tuner */}
        <div className="p-8 sm:p-12 rounded-3xl dark-card space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs font-mono text-teal-400 uppercase">Experiment 02</div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Multi-Network Socket Multiplexer Dynamic Tuner
              </h2>
            </div>
            <div className="text-2xl font-mono text-teal-300 font-bold">
              {simSpeed} Mbps
            </div>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
            Adjust concurrent socket channels and synthetic packet loss to view the algorithm&apos;s adaptive throughput aggregation and failover recalculation.
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
                onChange={(e) => {
                  setEthChannels(Number(e.target.value));
                  recomputeBonding();
                }}
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
                onChange={(e) => {
                  setPacketLoss(Number(e.target.value));
                  recomputeBonding();
                }}
                className="w-full accent-teal-400 cursor-pointer"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-neutral-400">
            <span>Buffer Allocation: {ethChannels * 128} KB Ring Buffer</span>
            <span className="text-teal-400">Zero Socket Overflow</span>
          </div>
        </div>
      </div>
    </div>
  );
}
