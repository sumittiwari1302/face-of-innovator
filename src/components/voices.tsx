"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Build First",
    description: "We learn by shipping. No tutorials, no lectures - just real projects with real deadlines.",
  },
  {
    title: "No Gatekeeping",
    description: "Experience level doesn't matter. If you are curious and willing to build, you belong here.",
  },
  {
    title: "Community Over Competition",
    description: "We share knowledge, debug together, and celebrate each other's wins. The room rises together.",
  },
];

export default function Voices() {
  return (
    <section id="voices" className="py-28 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[0.95] mb-6">
            How We Operate
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Three principles that guide every build night, every project, every conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="relative glass rounded-3xl p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                {value.title}
              </h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}