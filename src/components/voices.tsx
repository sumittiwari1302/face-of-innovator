"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const voices = [
  {
    quote:
      "I joined for a workshop and stayed for the people. First weekend I shipped a toy app — a month later it was in front of 100+ builders at demo hour.",
    name: "Riya Kulkarni",
    role: "Frontend · COEP Pune",
    initials: "RK",
    tile: "bg-gradient-to-br from-foi-red to-foi-light-blue",
  },
  {
    quote:
      "FOI is the only room I know where 'let's break it' is a compliment. As a mentor it's exhausting in the best possible way.",
    name: "Aditya Rao",
    role: "Industry Mentor · ex-Flipkart",
    initials: "AR",
    tile: "bg-gradient-to-br from-foi-light-blue to-foi-fuchsia",
  },
  {
    quote:
      "We met at a build night, found our co-founder the same week, and demoed to investors by month two. That timeline only exists here.",
    name: "Meher & Dev",
    role: "Founders · LunaPay",
    initials: "M&D",
    tile: "bg-gradient-to-br from-foi-fuchsia to-foi-yellow",
  },
];

export default function Voices() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % voices.length);
      setKey((k) => k + 1);
    }, 5600);
    return () => clearInterval(id);
  }, []);

  const active = voices[index];

  return (
    <section id="voices" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="aurora right-0 top-1/4 w-[380px] h-[380px] bg-foi-light-blue/15" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="h-px w-8 bg-slate-300" />
            <span className="font-mono text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
              {"// voices.log"}
            </span>
          </motion.div>

          <motion.h2
            className="font-heading text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What the room
            <br />
            <span className="text-shimmer">says back</span>
          </motion.h2>

          <p className="text-slate-600 font-medium text-lg max-w-md">
            Builders, mentors and founders who walked out with something real.
          </p>

          <div className="flex gap-2.5 mt-10">
            {voices.map((v, i) => (
              <button
                key={v.name}
                onClick={() => {
                  setIndex(i);
                  setKey((k) => k + 1);
                }}
                aria-label={`Voice ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-10 bg-foi-red" : "w-4 bg-slate-300 hover:bg-foi-light-blue"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative">
            <div className="absolute -top-16 -right-4 font-heading font-black text-[10rem] leading-none text-white/30 select-none pointer-events-none">
              &ldquo;
            </div>

            <div className="relative glass rounded-3xl p-9 md:p-12 min-h-[300px] flex flex-col">
              <AnimatePresence mode="wait" custom={index}>
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 flex flex-col"
                >
                  <p className="font-heading font-bold text-xl md:text-2xl text-slate-900 leading-snug flex-1">
                    &ldquo;{active.quote}&rdquo;
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl ${active.tile} text-white flex items-center justify-center font-heading font-black text-sm shadow-[3px_3px_0_rgba(11,10,17,0.4)]`}
                    >
                      {active.initials}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-slate-900">
                        {active.name}
                      </div>
                      <div className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 mt-0.5">
                        {active.role}
                      </div>
                    </div>
                    <span className="ml-auto font-mono text-[10px] font-black text-foi-light-blue">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-9 right-9 h-1 rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  key={`bar-${key}`}
                  className="h-full bg-gradient-foi rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5.6, ease: "linear" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}