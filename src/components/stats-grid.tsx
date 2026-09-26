"use client";

import { Building2, GraduationCap, Users, Trophy } from "lucide-react";

const stats = [
  {
    value: "1000+",
    label: "Community Members",
    icon: Users,
  },
  {
    value: "50+",
    label: "Build Nights Hosted",
    icon: Building2,
  },
  {
    value: "20+",
    label: "Campus Clubs",
    icon: GraduationCap,
  },
  {
    value: "100+",
    label: "Projects Shipped",
    icon: Trophy,
  },
];

export default function StatsGrid() {
  return (
    <section className="bg-white relative overflow-hidden py-20">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-slate-300" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            The numbers, if you need them
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative glass rounded-3xl p-7 overflow-hidden"
            >
              <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6">
                <stat.icon size={22} />
              </div>
              <div className="font-heading font-black text-5xl md:text-6xl tracking-tight leading-none text-slate-900">
                {stat.value}
              </div>
              <div className="mt-3 font-mono text-[10px] font-black uppercase tracking-widest text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}