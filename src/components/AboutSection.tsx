"use client";

export function AboutSection() {
  const pillars = [
    {
      num: "01",
      title: "Rigor Over Assumption",
      description:
        "Test edge cases before celebrating the happy path. Network links drop, memory buffers overflow, and real-world latency fluctuates. Resilient systems are designed to degrade gracefully.",
    },
    {
      num: "02",
      title: "Subtraction & Clarity",
      description:
        "Every dependency, abstraction layer, and network hop must justify its existence. Simpler architectures run faster, debug easier, and withstand scale without hidden failure modes.",
    },
    {
      num: "03",
      title: "Full-Stack Agency",
      description:
        "True engineering freedom comes from knowing what happens under the hood—from raw socket frames and database disk I/O up to the browser compositor and render tree.",
    },
    {
      num: "04",
      title: "Craft As A Standard",
      description:
        "Performance and tactility are not afterthoughts. Fast interactions, clean code structure, and thoughtful UI polish reflect deliberate care and human intention.",
    },
  ];

  const technicalStack = [
    {
      domain: "Systems & Networking",
      skills: ["Multi-Network Bonding", "TCP / UDP Sockets", "Packet Scheduling", "Concurrency & Buffering"],
    },
    {
      domain: "Backend & Machine Learning",
      skills: ["PHP 8.3 Architecture", "Python & ONNX Inference", "Asynchronous Pipelines", "REST & Socket Daemons"],
    },
    {
      domain: "Frontend & Interfaces",
      skills: ["Next.js 16 & React 19", "TypeScript Strict", "Tailwind CSS v4", "Canvas & Interaction Design"],
    },
    {
      domain: "Engineering Practices",
      skills: ["Deterministic Testing", "Zero-Jank Profiling", "Semantic Accessibility", "Modular System Design"],
    },
  ];

  return (
    <section id="about" className="py-24 px-[var(--page-gutter)] max-w-7xl mx-auto w-full border-t border-neutral-200/80">
      {/* Kicker */}
      <div className="mb-14">
        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          02 / Values & Philosophy
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 mt-2">
          Engineering with Intention
        </h2>
      </div>

      {/* 12-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (Span 6): Personal Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-2xl sm:text-3xl font-normal tracking-tight text-neutral-900 leading-snug">
            A system with a feeling. Precision with purpose.{" "}
            <span className="font-editorial-serif text-neutral-700">
              Utility with intention.
            </span>
          </p>

          <div className="space-y-4 text-base text-neutral-600 leading-relaxed font-normal">
            <p>
              I&apos;m Dhairya. I explore computing at the intersection where raw
              infrastructure meets polished user experiences. My development
              journey is driven by an obsession with understanding how digital
              systems actually function from first principles.
            </p>
            <p>
              Whether orchestrating simultaneous network interfaces to aggregate
              bandwidth for lightning-fast downloads, or architecting micro-inference
              pipelines that connect PHP backends with machine learning models, I
              focus on software that is durable, transparent, and measurably fast.
            </p>
            <p>
              I believe great developers do not treat frameworks as black boxes.
              When you comprehend socket descriptors, memory allocations, and
              the browser&apos;s rendering lifecycle, you gain the clarity needed to
              solve hard engineering challenges cleanly.
            </p>
          </div>

          {/* Quick Details Card */}
          <div className="mt-8 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-4">
              At A Glance
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-neutral-400 block mb-0.5">Name</span>
                <span className="text-neutral-900 font-semibold">Dhairya</span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-0.5">Primary Focus</span>
                <span className="text-neutral-900 font-semibold">Systems & Full-Stack</span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-0.5">Contact</span>
                <span className="text-neutral-900 font-semibold">dhairyagajera470@gmail.com</span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-0.5">Status</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  Building & Open for projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Span 6): The Four Pillars & Tech Matrix */}
        <div className="lg:col-span-6 space-y-10">
          {/* The 4 Core Principles */}
          <div className="space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
              Four Core Pillars
            </h3>
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-5 rounded-2xl bg-white border border-neutral-200/80 hover:border-neutral-300 transition-colors shadow-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-neutral-400">
                    {pillar.num}
                  </span>
                  <h4 className="text-base font-semibold text-neutral-950">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Domains Matrix */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
              Technical Stack & Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {technicalStack.map((stack) => (
                <div
                  key={stack.domain}
                  className="p-4 rounded-xl bg-neutral-50/80 border border-neutral-200/70"
                >
                  <h4 className="text-xs font-mono font-semibold text-neutral-800 mb-2">
                    {stack.domain}
                  </h4>
                  <ul className="space-y-1 text-xs text-neutral-600 font-mono">
                    {stack.skills.map((s) => (
                      <li key={s} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-neutral-400" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
