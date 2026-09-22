"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Building2, GraduationCap, Users, Trophy } from "lucide-react";

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Community Members",
    icon: Users,
    gradient: "from-foi-red to-foi-fuchsia",
    bar: "bg-gradient-foi",
  },
  {
    value: 50,
    suffix: "+",
    label: "Build Nights Hosted",
    icon: Building2,
    gradient: "from-foi-yellow to-foi-light-blue",
    bar: "bg-gradient-to-r from-foi-yellow to-foi-light-blue",
  },
  {
    value: 20,
    suffix: "+",
    label: "Campus Clubs",
    icon: GraduationCap,
    gradient: "from-foi-light-blue to-foi-red",
    bar: "bg-gradient-to-r from-foi-light-blue to-foi-red",
  },
  {
    value: 100,
    suffix: "+",
    label: "Projects Shipped",
    icon: Trophy,
    gradient: "from-foi-fuchsia to-foi-yellow",
    bar: "bg-gradient-to-r from-foi-fuchsia to-foi-yellow",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function StatsGrid() {
  return (
    <section className="bg-white relative overflow-hidden py-20">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-foi-red/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-slate-300" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            The numbers, if you need &apos;em
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative glass rounded-3xl p-7 overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[14px_14px_0_rgba(124,143,214,0.2)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div
                className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white flex items-center justify-center mb-6 shadow-md group-hover:rotate-6 group-hover:scale-110 transition-transform`}
              >
                <stat.icon size={22} />
              </div>
              <div className="font-heading font-black text-5xl md:text-6xl tracking-tight leading-none text-foi-blue">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 font-mono text-[10px] font-black uppercase tracking-widest text-slate-500">
                {stat.label}
              </div>
              <div className="mt-5 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className={`h-full w-1/4 rounded-full ${stat.bar} transition-all duration-700 group-hover:w-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}