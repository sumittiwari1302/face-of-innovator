"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import avatarRehan from "@/images/avatars/rehan.jpg";
import avatarSumit from "@/images/avatars/sumit.png";
import avatarNisha from "@/images/avatars/nishaa.png";
import avatarYashraj from "@/images/avatars/yashraj.png";
import avatarAditya from "@/images/avatars/aditya.png";

const team = [
  {
    number: "01",
    avatar: avatarRehan,
    name: "Rehan Azim",
    role: "President",
    quote:
      "FOI started as a late-night idea in a Pune room. Today it's a movement - but the mission hasn't changed: real code, real ships.",
    node: "border-foi-red",
  },
  {
    number: "02",
    avatar: avatarSumit,
    name: "Sumit Tiwari",
    role: "Vice President",
    quote:
      "Our job isn't to teach - it's to remove every wall between a student and the thing they're building. The room does the rest.",
    node: "border-foi-light-blue",
  },
  {
    number: "03",
    avatar: avatarNisha,
    name: "Nisha Chaube",
    role: "Tech Club Lead · PW IOI",
    quote:
      "FOI exists because someone held the door open. We keep doing that - one build night at a time.",
    node: "border-foi-fuchsia",
  },
  {
    number: "04",
    avatar: avatarYashraj,
    name: "Yashraj",
    role: "Lead Organizer",
    quote:
      "Every hack, every demo, every burnt-down server is part of the story. That's the point - we show up, we ship.",
    node: "border-foi-yellow",
  },
  {
    number: "05",
    avatar: avatarAditya,
    name: "Aditya",
    role: "Core Organizer",
    quote:
      "The best thing about the room is the door is always open. Someone new walks in every build night - and they leave shipping.",
    node: "border-foi-red",
  },
];

export default function Founders() {
  return (
    <section
      id="founders"
      className="py-28 bg-slate-50 border-y-2 border-slate-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.h2
            className="font-heading text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[0.9]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The minds behind{" "}
            <span className="text-shimmer">the movement</span>
          </motion.h2>

          <motion.div
            className="flex items-center gap-3 shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="h-px w-10 bg-slate-300" />
            <span className="font-mono text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
              {"// five humans, one room"}
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="relative bg-white rounded-3xl border-2 border-slate-200 p-8 pt-12 flex flex-col group hover:border-foi-blue hover:shadow-[10px_10px_0_rgba(124,143,214,0.18)] transition-all duration-300 hover:-translate-y-1.5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className={`hidden xl:flex absolute -top-[7px] left-8 w-4 h-4 rounded-full bg-white border-4 ${member.node} items-center justify-center`}
              >
                <span className="w-1 h-1 rounded-full bg-foi-red animate-pulse" />
              </div>

              <span className="absolute top-6 right-7 font-heading font-black text-5xl text-slate-100 transition-colors group-hover:text-foi-yellow">
                {member.number}
              </span>

              <div className="relative">
                <motion.div
                  className="relative w-20 h-20 rounded-full overflow-hidden ring-[3px] ring-white shadow-[4px_4px_0_rgba(154,143,196,0.35)] group-hover:rotate-6 group-hover:scale-105 transition-transform mb-6"
                  whileInView={{ rotate: [0, -6, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1 }}
                >
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="80px"
                    className="object-cover object-[50%_38%] scale-[1.06]"
                  />
                </motion.div>
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                  {member.role}
                </p>
                <p className="text-slate-700 font-medium text-[15px] leading-relaxed flex-1 min-h-[120px]">
                  &quot;{member.quote}&quot;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t-2 border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-slate-900 group-hover:text-foi-blue transition-colors">
                    {member.name}
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                    foi/{member.number}
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-slate-300 group-hover:text-foi-fuchsia group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}