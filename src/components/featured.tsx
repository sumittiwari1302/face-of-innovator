"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Cloud, MessageSquare, Sofa } from "lucide-react";
import Image from "next/image";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/social-icons";
import avatarRehan from "@/images/avatars/rehan.jpg";
import avatarSumit from "@/images/avatars/sumit.png";
import avatarNisha from "@/images/avatars/nishaa.png";
import avatarYashraj from "@/images/avatars/yashraj.png";
import avatarAditya from "@/images/avatars/aditya.png";

const team = [
  {
    name: "Rehan Azim",
    role: "President",
    avatar: avatarRehan,
    quote:
      "FOI gives students everything they need to just build. High-energy meetups, hands-on mentorship, and zero judgment.",
  },
  {
    name: "Sumit Tiwari",
    role: "Vice President",
    avatar: avatarSumit,
    quote:
      "Every workshop and hack night is designed for absolute focus. You leave with something shipped, not just notes.",
  },
  {
    name: "Nisha Chaube",
    role: "Tech Club Lead · PW IOI",
    avatar: avatarNisha,
    quote:
      "From venues to swag, we sweat the details so students can show up and dream big. It's a movement, not a lecture.",
  },
  {
    name: "Yashraj",
    role: "Lead Organizer",
    avatar: avatarYashraj,
    quote:
      "We keep the room alive 24/7 so anyone can walk in, pick a problem, and ship something real by sunrise.",
  },
  {
    name: "Aditya",
    role: "Core Organizer",
    avatar: avatarAditya,
    quote:
      "Day one of every build night, someone walks in nervous. By 7 PM they're demoing something they actually made.",
  },
];

const perks = [
  {
    icon: Cloud,
    title: "Unlimited cloud credits & tool access",
  },
  {
    icon: MessageSquare,
    title: "1:1 mentorship from industry engineers",
  },
  {
    icon: Sofa,
    title: "Dedicated quiet zones and resting areas",
  },
];

export default function Featured() {
  const [index, setIndex] = useState(0);
  const member = team[index];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] rounded-full bg-gradient-foi opacity-[0.07] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[0.9] mb-6">
            More than a{" "}
            <span className="text-shimmer">Meetup.</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium mb-8">
            FOI gives you an environment designed for absolute focus and
            creativity. From high-speed internet to hardware labs, we provide
            the tools so you can just build.
          </p>

          <ul className="space-y-4 mb-8">
            {perks.map(({ icon: Icon, title }) => (
              <li
                key={title}
                className="flex items-center gap-4 glass rounded-2xl px-5 py-4 transition-all duration-300 group/perk hover:translate-x-1.5 hover:shadow-[8px_8px_0_rgba(124,143,214,0.18)]"
              >
                <span className="w-10 h-10 rounded-xl bg-foi-blue text-foi-yellow flex items-center justify-center shrink-0 shadow-[2px_2px_0_rgba(154,143,196,0.5)] group-hover/perk:rotate-6 transition-transform">
                  <Icon size={18} />
                </span>
                <span className="font-bold text-slate-700">{title}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="gradient-border rounded-3xl shadow-[0_32px_64px_-24px_rgba(11,10,17,0.3)]"
        >
          <div className="p-7 md:p-9 min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-7">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-foi-red" />
                <span className="w-3 h-3 rounded-full bg-foi-yellow" />
                <span className="w-3 h-3 rounded-full bg-foi-light-blue" />
              </div>
              <div className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400">
                foi·core/team
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-mono font-black text-foi-blue uppercase tracking-widest">
                Sound on · Members only
              </div>
              <div className="flex gap-2">
                {[XIcon, GithubIcon, LinkedinIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-slate-50 border-2 border-slate-200 hover:bg-foi-blue hover:border-foi-blue hover:text-white inline-flex items-center justify-center text-slate-500 transition-colors"
                    aria-label={`Social ${i}`}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xl text-slate-700 font-medium leading-relaxed mb-7">
                    &quot;{member.quote}&quot;
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-[3px] ring-foi-fuchsia/60 shadow-[3px_3px_0_rgba(154,143,196,0.4)] shrink-0">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        sizes="56px"
                        className="object-cover object-[50%_38%] scale-[1.06]"
                      />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-slate-900">
                        {member.name}
                      </div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        {member.role}
                      </div>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-center mt-7 pt-6 border-t-2 border-slate-100">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-slate-400">
                {String(index + 1).padStart(2, "0")} / {String(team.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                <button
                  className="w-10 h-10 rounded-xl bg-slate-50 border-2 border-slate-200 hover:bg-foi-blue hover:border-foi-blue hover:text-white inline-flex items-center justify-center text-slate-500 transition-colors"
                  onClick={() => setIndex((index - 1 + team.length) % team.length)}
                  aria-label="Previous"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  className="w-10 h-10 rounded-xl bg-slate-50 border-2 border-slate-200 hover:bg-foi-blue hover:border-foi-blue hover:text-white inline-flex items-center justify-center text-slate-500 transition-colors"
                  onClick={() => setIndex((index + 1) % team.length)}
                  aria-label="Next"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}