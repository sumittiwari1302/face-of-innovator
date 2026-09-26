"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Rocket, Users, Zap } from "lucide-react";

const pillars = [
  {
    index: "02",
    icon: Users,
    title: "Find your community",
    description:
      "Meet your next co-founder, collaborator, or best friend across Pune&apos;s tech clubs.",
    gradient: "from-foi-light-blue to-foi-blue",
    glow: "group-hover:shadow-[10px_10px_0_rgba(134,162,230,0.3)]",
  },
  {
    index: "03",
    icon: Zap,
    title: "Accelerate your career",
    description:
      "Get noticed by top companies, land internships, and grow with mentors who&apos;ve been there.",
    gradient: "from-foi-red to-foi-fuchsia",
    glow: "group-hover:shadow-[10px_10px_0_rgba(124,143,214,0.3)]",
  },
];

export default function WhatIs() {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute aurora right-0 top-0 w-[360px] h-[360px] bg-foi-red/15 hidden lg:block" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="font-heading font-black tracking-tight text-5xl md:text-7xl text-slate-900 leading-[0.92] mb-8">
                What is
                <br />
                <span className="text-shimmer">Face of</span>
                <br />
                Innovator<span className="text-foi-yellow">?</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                Not just a community - a movement to empower the next generation
                of builders in Pune. We believe in learning by doing, breaking
                things, and collaborating to build what actually matters.
              </p>
            </div>

            <a
              href="#community"
              className="mt-12 inline-flex items-center gap-2 font-mono text-[11px] font-black uppercase tracking-widest text-foi-blue hover:text-foi-red transition-colors w-fit"
            >
              Join the movement <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.a
            href="#join"
            className="lg:col-span-7 relative bg-foi-blue text-white rounded-[1.75rem] border border-foi-fuchsia/40 shadow-[10px_10px_0_rgba(154,143,196,0.35)] p-8 md:p-10 overflow-hidden group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-foi-yellow/20 blur-3xl animate-blob pointer-events-none" />
            <div className="relative flex flex-col justify-between h-full">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-foi-yellow text-slate-900 flex items-center justify-center shadow-[3px_3px_0_rgba(124,143,214,0.9)]">
                  <Code2 size={24} />
                </div>
                <span className="font-mono text-[11px] font-black uppercase tracking-widest text-white/60">
                  (01)
                </span>
              </div>
              <div className="my-8">
                <h3 className="font-heading font-black text-2xl md:text-3xl text-white mb-3">
                  Learn by building
                </h3>
                <p className="text-white/70 font-medium leading-relaxed max-w-md">
                  Workshops are great, but shipping is better. Build real
                  projects that end up in your portfolio.
                </p>
              </div>
              <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-foi-yellow to-foi-light-blue" />
              </div>
            </div>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className={`relative glass rounded-[1.5rem] p-8 overflow-hidden transition-all duration-300 group hover:-translate-y-1.5 ${pillar.glow}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <span className="absolute top-5 right-6 font-heading font-black text-4xl text-slate-100 transition-colors group-hover:text-foi-red/10">
                {pillar.index}
              </span>

              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white flex items-center justify-center mb-7 shadow-md group-hover:rotate-6 group-hover:scale-110 transition-transform`}
              >
                <pillar.icon size={22} />
              </div>

              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 transition-colors group-hover:text-foi-blue">
                {pillar.title}
              </h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}

          <motion.div
            className="relative overflow-hidden rounded-[1.5rem] bg-gradient-foi p-8 flex flex-col justify-center text-white shadow-[10px_10px_0_rgba(11,10,17,0.35)] transition-all duration-300 group hover:-translate-y-1.5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Rocket
              size={110}
              className="absolute -right-4 -bottom-6 opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
            />
            <QuoteMark />
            <p className="relative font-heading font-bold text-lg leading-snug mb-4">
              Real products over lecture slides. Every single time.
            </p>
            <div className="relative inline-flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-widest text-white/85">
              FOI Manifesto, line 1
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuoteMark() {
  return (
    <span
      className="relative mb-4 font-heading font-black text-6xl leading-none text-white/70"
      aria-hidden="true"
    >
      &quot;
    </span>
  );
}