"use client";

import { motion } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "Join the Community",
    description:
      "Find us on WhatsApp, Discord, or at any campus club. Show us what you've built or want to build.",
    tag: "First stop",
    dot: "bg-foi-red",
    glow: "from-foi-red/40",
  },
  {
    number: "02",
    title: "Show Up & Network",
    description:
      "Attend meetups, hack nights, and workshops. Meet your people - co-founders included.",
    tag: "Show up",
    dot: "bg-foi-blue",
    glow: "from-foi-blue/40",
  },
  {
    number: "03",
    title: "Build & Learn",
    description:
      "Ship real projects with mentorship, snacks, and friendly competition fueling the way.",
    tag: "Build it",
    dot: "bg-foi-light-blue",
    glow: "from-foi-light-blue/40",
  },
  {
    number: "04",
    title: "Ship & Lead",
    description:
      "Deploy your project, present to founders and engineers, and become a mentor yourself.",
    tag: "Lead it",
    dot: "bg-foi-fuchsia",
    glow: "from-foi-fuchsia/40",
  },
];

export default function Journey() {
  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-black tracking-tight text-5xl md:text-7xl text-slate-900 leading-[0.9] mb-6">
                The{" "}
                <span className="text-shimmer">Innovator</span>
                <br />
                Journey.
              </h2>
              <p className="text-lg text-slate-600 font-medium max-w-sm">
                From your first meetup to leading the community - here&apos;s how it
                works.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative pl-8 md:pl-10">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-foi-red via-foi-fuchsia to-foi-light-blue rounded-full" />

            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                className="relative group pb-12 last:pb-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span
                  className={`absolute -left-[13px] top-2 w-[19px] h-[19px] rounded-full ${phase.dot} ring-4 ring-white shadow-sm group-hover:scale-125 transition-transform`}
                >
                  <span className={`absolute inset-0 rounded-full ${phase.dot} opacity-60 animate-ping-soft`} />
                </span>

                <div className="relative overflow-hidden rounded-3xl glass p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[12px_12px_0_rgba(11,10,17,0.15)]">
                  <div
                    className={`absolute -top-4 -right-4 w-28 h-28 rounded-full bg-gradient-to-br ${phase.glow} to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <span className="absolute right-6 top-4 font-heading font-black text-6xl text-slate-100 group-hover:text-foi-red/10 transition-colors duration-500">
                    {phase.number}
                  </span>

                  <div className="relative flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Phase {phase.number}
                    </span>
                    <span className="h-px flex-1 bg-slate-200" />
                    <span className={`font-mono text-[10px] font-black uppercase tracking-widest ${phase.dot}`}>
                      {phase.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2 transition-colors group-hover:text-foi-blue">
                    {phase.title}
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed max-w-md">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}