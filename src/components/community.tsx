"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Users, Video } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Find a Team",
    description: "Post your idea or skills and match with the perfect co-founders.",
    gradient: "from-foi-light-blue to-foi-blue",
    glow: "group-hover:shadow-[12px_12px_0_rgba(134,162,230,0.3)]",
    tag: "#collab",
  },
  {
    icon: Users,
    title: "Mentor Hours",
    description: "Get stuck? Open a thread and an industry expert will hop in to help.",
    gradient: "from-foi-red to-foi-fuchsia",
    glow: "group-hover:shadow-[12px_12px_0_rgba(124,143,214,0.3)]",
    tag: "#mentors",
  },
  {
    icon: Video,
    title: "Live Workshops",
    description: "Weekly streams on Next.js, AI, hardware, and pitching.",
    gradient: "from-foi-yellow to-foi-light-blue",
    glow: "group-hover:shadow-[12px_12px_0_rgba(214,210,221,0.3)]",
    tag: "#streams",
  },
];

export default function Community() {
  return (
    <section id="community" className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-foi-yellow/10 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-foi-fuchsia/10 blur-3xl animate-blob-delay pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[0.9] mb-6">
            A Community{" "}
            <span className="text-shimmer">of Doers</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Don&apos;t wait for the next event to meet people. FOI is active all year
            round.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.a
              key={feature.title}
              href="#join"
              className={`relative glass rounded-3xl p-8 block overflow-hidden group hover:-translate-y-2 transition-all duration-300 ${feature.glow}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="absolute top-5 right-6 font-mono text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-foi-red transition-colors">
                {feature.tag}
              </span>

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center mb-8 shadow-md group-hover:rotate-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon size={24} />
              </div>

              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 transition-colors group-hover:text-foi-blue">
                {feature.title}
              </h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">
                {feature.description}
              </p>

              <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-foi-red transition-colors">
                Join now
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}