"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Cloud,
  Cpu,
  Globe,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const aiChips = ["LLM Wrappers", "RAG Pipelines", "Agent Loops", "GenAI Tools"];

const tracks = [
  {
    icon: Globe,
    title: "Web3 & Blockchain",
    tag: "Smart Contracts · dApps",
    description:
      "Decentralized apps, smart contracts, and the next generation of the internet.",
    chip: "bg-foi-yellow",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    tag: "Infra · CI/CD · IaC",
    description:
      "Scalable architectures, infrastructure as code, and the tools that run the world.",
    chip: "bg-foi-blue",
  },
  {
    icon: Cpu,
    title: "Hardware & IoT",
    tag: "Sensors · Embedded",
    description:
      "Connect the physical world with software, sensors, and embedded systems.",
    chip: "bg-foi-fuchsia",
  },
  {
    icon: Palette,
    title: "Design / UI/UX",
    tag: "Figma · Interfaces",
    description:
      "Create beautiful, accessible, and intuitive interfaces people love to use.",
    chip: "bg-foi-red",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    tag: "Security · Offensive",
    description:
      "Protect data, find vulnerabilities, and build secure systems from day one.",
    chip: "bg-emerald-500",
  },
];

const termLines = [
  { prompt: "$ foi build-agent --name night", color: "text-slate-400" },
  { prompt: "> wiring LLM pipeline...", color: "text-foi-light-blue" },
  { prompt: "> connecting 1000+ builders", color: "text-foi-yellow" },
  { prompt: "> shipped in 36h ✓", color: "text-emerald-500" },
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-28 bg-slate-50 border-y-2 border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-6">
          <div className="lg:col-span-7">
            <h2 className="font-heading font-black tracking-tight text-5xl md:text-7xl text-slate-900 leading-[0.9]">
              Pick your{" "}
              <span className="text-shimmer">track.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-lg text-slate-600 font-medium lg:text-right lg:pb-3">
            Six ways to play — or mix them and build something completely
            unique.
          </p>
        </div>

        <motion.div
          className="mb-10 gradient-border rounded-3xl overflow-hidden shadow-[0_24px_64px_-24px_rgba(124,143,214,0.35)]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-foi-red/10 via-transparent to-foi-light-blue/10 pointer-events-none" />
            <div className="absolute -top-20 right-1/4 w-72 h-72 rounded-full bg-foi-fuchsia/15 blur-3xl pointer-events-none" />

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-foi-red text-white text-[11px] font-mono font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[3px_3px_0px_rgba(11,10,17,0.6)] mb-6">
                <Sparkles size={12} />
                Featured Track · 40% building here
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-foi-red text-white flex items-center justify-center shadow-[3px_3px_0px_rgba(11,10,17,0.6)] animate-float">
                  <Bot size={28} />
                </div>
                <h3 className="font-heading font-black text-3xl md:text-5xl text-slate-900 leading-none">
                  AI &amp; Agents
                </h3>
              </div>

              <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-8">
                Build intelligent systems, LLM wrappers, and autonomous agents
                that do real work. Our most crowded room — bring your wildest
                idea.
              </p>

              <div className="flex flex-wrap gap-2.5 mb-9">
                {aiChips.map((chip) => (
                  <span
                    key={chip}
                    className="font-mono text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-white border-2 border-slate-200 text-slate-600"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <a
                href="#join"
                className="inline-flex items-center gap-2 font-heading font-bold text-foi-red hover:text-foi-blue transition-colors"
              >
                Join the AI track <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="lg:col-span-5 flex items-center">
              <div className="w-full rounded-2xl bg-foi-blue text-left p-6 shadow-[8px_8px_0_rgba(154,143,196,0.6)] rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-foi-fuchsia" />
                  <span className="w-3 h-3 rounded-full bg-foi-yellow" />
                  <span className="w-3 h-3 rounded-full bg-foi-light-blue" />
                  <span className="ml-3 font-mono text-[10px] font-black uppercase tracking-widest text-white/50">
                    foi · terminal
                  </span>
                </div>
                <div className="space-y-2 font-mono text-sm font-bold">
                  {termLines.map((line, i) => (
                    <motion.div
                      key={line.prompt}
                      className={line.color}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.25 }}
                    >
                      {line.prompt}
                    </motion.div>
                  ))}
                  <span className="inline-block w-3 h-4 bg-foi-yellow animate-pulse mt-1" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="border-t-[3px] border-slate-900">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              className="group relative grid grid-cols-12 items-center gap-4 py-6 border-b-2 border-slate-200 transition-all duration-300 hover:bg-white/5 hover:px-4 hover:shadow-[10px_10px_0_rgba(124,143,214,0.15)] rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="col-span-1 font-mono text-transparent bg-clip-text bg-gradient-to-br from-foi-red to-foi-fuchsia font-black text-xl group-hover:scale-110 origin-center transition-transform">
                {String(i + 2).padStart(2, "0")}
              </span>

              <div
                className={`col-span-1 w-11 h-11 rounded-xl ${track.chip} text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-md`}
              >
                <track.icon size={20} />
              </div>

              <h3 className="col-span-6 lg:col-span-3 font-heading font-black text-xl md:text-2xl text-slate-900 group-hover:text-foi-red transition-colors">
                {track.title}
              </h3>

              <span className="hidden md:block col-span-2 font-mono text-[10px] font-black uppercase tracking-widest text-slate-400">
                {track.tag}
              </span>

              <p className="hidden lg:block col-span-4 text-slate-600 font-medium text-sm leading-relaxed">
                {track.description}
              </p>

              <div className="col-span-1 flex justify-end">
                <ArrowUpRight
                  size={22}
                  className="text-slate-200 group-hover:text-foi-red transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}