"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Apply to be a chapter lead",
    body: "Any Pune campus can run the room. Apply with your college, your crew, and one honest sentence about why you build.",
    width: "w-2/5",
  },
  {
    number: "02",
    title: "Run a build night with us",
    body: "We bring mentors, swag and the streaming setup. You bring the whiteboard, the snacks and the friends.",
    width: "w-3/4",
  },
  {
    number: "03",
    title: "Go live under the FOI banner",
    body: "Your chapter gets a profile, an event calendar, and a seat at the Pune-wide closing showcase.",
    width: "w-full",
  },
];

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Ambassadors() {
  return (
    <section id="chapters" className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="h-px w-8 bg-slate-300" />
            <span className="font-mono text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
              {"// foi chapters"}
            </span>
          </motion.div>

          <motion.h2
            className="font-heading text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[0.95] mb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Take the room
            <br />
            <span className="text-shimmer">to your campus.</span>
          </motion.h2>

          <motion.div
            className="space-y-5"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={item}
                className="relative overflow-hidden rounded-2xl bg-white border border-white/10 p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5"
              >
                <div className="flex items-center gap-4 md:w-56 shrink-0">
                  <span className="font-heading font-black text-3xl text-slate-200">
                    {step.number}
                  </span>
                  <span className="font-heading font-bold text-slate-900 text-lg leading-tight">
                    {step.title}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-slate-600 text-sm font-medium mb-4">
                    {step.body}
                  </p>
                  <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-foi ${step.width}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" href="#event">
              Start a chapter <ArrowRight size={18} />
            </Button>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-black uppercase tracking-widest text-slate-400">
              <MapPin size={13} className="text-foi-red" />
              Campuses across Pune
            </span>
          </motion.div>
        </div>

        <div className="lg:col-span-5 hidden lg:flex justify-center">
          <motion.div
            className="relative w-full max-w-sm"
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-[-14%] bg-gradient-foi opacity-20 blur-3xl rounded-full animate-blob" />

            <div className="relative bg-foi-blue rounded-3xl border border-foi-light-blue/30 p-8 shadow-[14px_14px_0_rgba(11,10,17,0.4)]">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.25em] text-foi-yellow">
                  chapter.signal
                </span>
                <span className="w-2 h-2 rounded-full bg-foi-light-blue animate-pulse" />
              </div>

              <div className="text-center py-8">
                <p className="text-white/70 font-medium mb-4">
                  Building chapters across Pune campuses
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-2xl p-6">
                    <div className="font-heading font-black text-3xl text-white">
                      12+
                    </div>
                    <div className="font-mono text-[9px] font-black uppercase tracking-widest text-white/50">
                      Active Chapters
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6">
                    <div className="font-heading font-black text-3xl text-white">
                      1000+
                    </div>
                    <div className="font-mono text-[9px] font-black uppercase tracking-widest text-white/50">
                      Community Members
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}