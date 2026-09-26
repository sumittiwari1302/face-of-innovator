"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "Who can join the community?",
    answer:
      "Any student or recent graduate who is passionate about building can join. No grades, no experience requirements - just curiosity and drive.",
  },
  {
    question: "Do I need a team?",
    answer:
      "Not at all. Team formation is a core part of our events. Tell us what you love and we'll pair you with people who complement your skills.",
  },
  {
    question: "Is Face of Innovator beginner-friendly?",
    answer:
      "Absolutely. We built FOI for every level - from first-year students writing their first line of code to seasoned open-source contributors.",
  },
  {
    question: "Are events online or offline?",
    answer:
      "Both. Hack nights, meetups, and PW IOI Pune collaboration are offline in Pune, while workshops and mentor hours run online.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Nothing. Every FOI event is free for students - thanks to our partners and sponsors who believe in the movement.",
  },
  {
    question: "Why should I join?",
    answer:
      "Because communities are where careers get made. You'll find mentors, teammates, and friends who push you to build things that matter.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[0.9] mb-6">
            Got{" "}
            <span className="text-shimmer">Questions?</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Can&apos;t find what you&apos;re looking for? Reach out to our team
            on WhatsApp or via email.
          </p>
        </motion.div>

        <div className="lg:col-span-3 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_rgba(124,143,214,0.18)]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="flex items-center gap-3 font-heading font-bold text-slate-900">
                    <span className="font-mono text-xs font-black text-transparent bg-clip-text bg-gradient-to-br from-foi-red to-foi-fuchsia">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? "bg-foi-blue text-foi-yellow rotate-0"
                        : "bg-slate-100 text-slate-500 group-hover:bg-foi-red group-hover:text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 md:pl-[84px] text-sm text-slate-600 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}