"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { time: "09:00 AM", title: "Check-in & Coffee", detail: "Grab your badge, claim a seat, and high-five the crew — coffee is on us." },
  { time: "09:45 AM", title: "Opening Ceremony", detail: "The FOI stage lights up: what's broken, what we're shipping, and how to win." },
  { time: "10:30 AM", title: "Team Formation", detail: "Pitch your idea in 60 seconds or board a team that needs your skill." },
  { time: "11:00 AM", title: "Build Begins", detail: "Repo created, caffeine loaded. Zero lectures — all shipping." },
  { time: "01:00 PM", title: "Lunch Break", detail: "Fuel up and network with mentors and fellow builders." },
  { time: "03:00 PM", title: "Mentor Round", detail: "Industry engineers roam the floor. Breakpoints get unblocked, fast." },
  { time: "05:30 PM", title: "Demo Rehearsal", detail: "Tighten your pitch and make sure the demo can't fail." },
  { time: "06:30 PM", title: "Demos & Winners", detail: "Every team shows what shipped. Judges pick standouts for impact, craft, and pure chaos." },
  { time: "07:00 PM", title: "Closing Ceremony", detail: "Prizes, photos, and the after-party plans." },
];

export default function Schedule() {
  const [open, setOpen] = useState(0);

  return (
    <section id="schedule" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute aurora left-1/2 -top-20 w-[420px] h-[420px] bg-foi-red/10 -translate-x-1/2" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[11px] font-black uppercase tracking-[0.25em] text-foi-light-blue mb-5 flex items-center justify-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-foi-light-blue animate-pulse" />
            {"// day 1 · 9:00 AM → 7:00 PM"}
          </p>
          <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[0.9] mb-6">
            <span className="text-shimmer">The</span> Schedule
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Hackathon day 1 — every time slot mapped so you know exactly what
            to expect.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={item.time}
                  className={cn(
                    "glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5",
                    isOpen && "shadow-[8px_8px_0_rgba(124,143,214,0.2)]",
                  )}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <button
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="font-mono text-foi-blue min-w-[84px] font-bold text-sm bg-foi-red/10 border-l-2 border-foi-red rounded-lg px-3 py-1">
                      {item.time}
                    </span>
                    <span className="font-heading font-bold text-slate-900 flex-1">
                      {item.title}
                    </span>
                    <span className="font-mono text-xs font-black text-transparent bg-clip-text bg-gradient-to-br from-foi-red to-foi-fuchsia hidden sm:inline">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "text-slate-400 transition-all",
                        isOpen && "rotate-180 text-foi-red",
                      )}
                    />
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
                        <p className="px-5 pb-4 pl-[108px] text-sm text-slate-600 font-medium border-t border-slate-100 pt-3">
                          {item.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-8 text-center font-mono text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
            Doors open 8:30 AM · Build ends 6:30 PM · Wrap by 7:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}