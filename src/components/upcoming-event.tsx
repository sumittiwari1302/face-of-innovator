"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const EVENT = {
  title: "WhyCode4U presents — BUILD SOMETHING Hackathon",
  tagline: "BUILD SOMETHING THAT DIDN'T EXIST YESTERDAY!",
  date: "31 OCTOBER 2026",
  time: "9:00 AM – 9:00 PM IST",
  duration: "12-Hour Hackathon (9H Offline Build)",
  venue: "Pune",
  description:
    "Got an idea that can solve a real-world problem? Turn it into reality and compete with bright minds across India!\n\n" +
    "TOTAL PRIZE POOL: ₹50,000\n" +
    "• 1st Prize — ₹25,000\n" +
    "• 2nd Prize — ₹15,000\n" +
    "• 3rd Prize — ₹10,000\n\n" +
    "📍 Pune | ⏱️ 12-Hour (9H Offline Build) | 💰 FREE Registration\n\n" +
    "What's waiting: Real-world problems • Mentorship • Meet brilliant minds • Exciting prizes • Build. Ship. Stand Out.\n\n" +
    "2 Rounds: ROUND 1 — ONLINE (Submit PPT → Get shortlisted) | ROUND 2 — OFFLINE (Build → Demo → Win)",
  registerUrl: "https://unstop.com/hackathons/whycode4u-build-something-hackathon",
  target: new Date("2026-10-31T09:00:00+05:30").getTime(),
};

const meta = [
  { icon: CalendarDays, label: "Date", value: "31 OCT 2026", color: "text-foi-yellow" },
  { icon: Clock, label: "Duration", value: "12H (9H Build)", color: "text-foi-light-blue" },
  { icon: MapPin, label: "Venue", value: "Pune", color: "text-foi-fuchsia" },
  { icon: Ticket, label: "Passes", value: "Free", color: "text-foi-yellow" },
];

const timeline = [
  {
    date: "10 SEPTEMBER 2026",
    title: "Submissions Open on Unstop (Live)",
    desc: "Online Round 1 registration and PPT submission go live. Form your squad of 1 to 4 members on Unstop.",
    color: "text-foi-light-blue",
    dotColor: "bg-foi-light-blue",
  },
  {
    date: "07 OCTOBER 2026 (09:41 PM IST)",
    title: "Round 1 PPT Submission Closes",
    desc: "Final deadline to upload your max 8-slide presentation for \"Healthcare for Every Individual\" on Unstop.",
    color: "text-foi-yellow",
    dotColor: "bg-foi-yellow",
  },
  {
    date: "10 OCTOBER 2026",
    title: "Round 1 Shortlist Results",
    desc: "The evaluation committee announces qualified teams advancing to the 9-hour in-person hackathon in Pune.",
    color: "text-foi-fuchsia",
    dotColor: "bg-foi-fuchsia",
  },
  {
    date: "31 OCTOBER 2026 (MORNING)",
    title: "9H Offline Hackathon Kickoff",
    desc: "Check-in, keynote, and kickoff of high-intensity 9-hour building sprint in Pune with food, mentors, and power desks.",
    color: "text-foi-red",
    dotColor: "bg-foi-red",
  },
  {
    date: "31 OCTOBER 2026 (EVENING)",
    title: "Evaluation & ₹50,000 Awards",
    desc: "Teams pitch working prototypes live to industry judges, followed by the grand ₹50,000 award ceremony on Unstop.",
    color: "text-foi-green",
    dotColor: "bg-foi-green",
  },
];

function useCountdown(target: number) {
  const [now, setNow] = useState<number>(() => {
    if (typeof window !== "undefined") return Date.now();
    return target;
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return { d: 0, h: 0, m: 0, s: 0 };
  }

  const diff = Math.max(0, target - now);
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

export default function UpcomingEvent() {
  const { d, h, m, s } = useCountdown(EVENT.target);
  const units = [
    { label: "Days", value: d },
    { label: "Hours", value: h },
    { label: "Mins", value: m },
    { label: "Secs", value: s },
  ];

  return (
    <section id="event" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="relative rounded-[2rem] bg-foi-blue overflow-hidden border border-foi-fuchsia/30 shadow-[0_48px_96px_-40px_rgba(11,10,17,0.8)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
          <div className="aurora -left-24 -top-24 w-[420px] h-[420px] bg-foi-fuchsia/30" />
          <div className="aurora aurora-delay -right-20 -bottom-24 w-[460px] h-[460px] bg-foi-light-blue/25" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_color-mix(in_oklab,_#7c3aed_30%,_transparent),_transparent_60%)] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 md:p-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-heading font-black tracking-tight text-4xl md:text-6xl leading-[0.95] mb-6 bg-gradient-to-b from-white via-foi-yellow/90 to-foi-light-blue bg-clip-text text-transparent">
                WhyCode4U
                <br />
                <span>presents</span>
                <br />
                <span>BUILD SOMETHING Hackathon</span>
              </h2>

              <p className="text-white/75 text-lg font-medium max-w-xl mb-9 whitespace-pre-line">
                {EVENT.description}
              </p>

              <div className="flex flex-wrap gap-x-10 gap-y-4 mb-10">
                {meta.map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon size={18} className={color} />
                    <div>
                      <div className="font-mono text-[10px] font-black uppercase tracking-widest text-white/45">
                        {label}
                      </div>
                      <div className="font-heading font-bold text-sm bg-gradient-to-r from-white to-foi-light-blue bg-clip-text text-transparent">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button
                  size="lg"
                  href={EVENT.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-foi-yellow border-foi-yellow text-[#1b1a21] hover:bg-foi-light-blue hover:border-foi-light-blue hover:text-[#0b0a11]"
                >
                  Register on Unstop <ArrowRight size={18} />
                </Button>
                <span className="font-mono text-[11px] font-black uppercase tracking-widest text-white/60">
                  Registration closes 7 Oct 2026, 09:41 PM IST
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-7">
              <div className="glass bg-white/10 border-white/15 rounded-3xl p-7">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
                    Hackathon starts in
                  </span>
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-foi-yellow to-foi-light-blue bg-clip-text text-transparent">
                    Pune, IN
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {units.map(({ label, value }) => (
                    <div
                      key={label}
                      className="text-center bg-foi-blue/60 border border-white/15 rounded-2xl py-4"
                    >
                      <div className="font-heading font-black text-3xl md:text-4xl bg-gradient-to-b from-white via-foi-yellow to-foi-light-blue bg-clip-text text-transparent tabular-nums">
                        {String(value).padStart(2, "0")}
                      </div>
                      <div className="font-mono text-[9px] font-black uppercase tracking-widest text-white/50 mt-1">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative bg-white rounded-3xl p-6 shadow-[10px_10px_0_rgba(154,143,196,0.35)] rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-heading font-black text-foi-blue">
                    ADMIT ONE
                  </div>
                  <div className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400">
                    WhyCode4U · Hackathon
                  </div>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <div className="barcode flex-1" />
                  <div className="w-10 h-10 rounded-md bg-foi-blue grid grid-cols-3 gap-[3px] p-[5px] shrink-0">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span
                        key={i}
                        className={
                          [1, 2, 4, 5, 8].includes(i)
                            ? "bg-white rounded-[1px]"
                            : "rounded-[1px]"
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[9px] font-black uppercase tracking-widest text-slate-300">
                    Scan on arrival
                  </span>
                  <span className="font-mono text-[9px] font-black uppercase tracking-widest text-foi-red">
                    Seat #0{String(1 + (Math.floor(d) % 99)).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="font-heading font-black text-3xl md:text-4xl text-slate-900 mb-10">
            Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-foi-light-blue via-foi-yellow to-foi-red opacity-50" />
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-12 pb-10 last:pb-0">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center z-10">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                    {item.date}
                  </div>
                  <h4 className={`font-heading font-bold text-lg ${item.color} mb-2`}>
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}