"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import roomImg from "@/images/home-hero.png";
import crewImg from "@/images/gallery.jpeg";

const tiles = [
  {
    label: "Build Night · 2026",
    tag: "hack_night/071",
    img: roomImg,
    position: "50% 45%",
    zoom: 1.5,
    rotate: 0,
    big: true,
  },
  {
    label: "The founding crew",
    tag: "crew/001",
    img: crewImg,
    position: "50% 30%",
    zoom: 1.25,
    rotate: 1.5,
    big: false,
  },
  {
    label: "Midnight hacking",
    tag: "build/042",
    img: roomImg,
    position: "28% 22%",
    zoom: 1.8,
    rotate: -1.5,
    big: false,
  },
  {
    label: "Open-mic demos",
    tag: "showtime/ow",
    img: crewImg,
    position: "70% 55%",
    zoom: 1.6,
    rotate: -1,
    big: false,
  },
  {
    label: "Workshop Day",
    tag: "workshop/058",
    gradient: "from-foi-fuchsia/80 via-foi-red/60 to-foi-yellow/70",
    rotate: 0,
    big: false,
  },
  {
    label: "Demo Day",
    tag: "showcase/044",
    gradient: "from-foi-light-blue/80 via-foi-blue to-foi-fuchsia/60",
    rotate: 1,
    big: false,
  },
];

const item = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PreviousEvents() {
  return (
    <section
      id="previous-events"
      className="py-28 bg-slate-50 border-y-2 border-slate-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[0.9] mb-6">
            Previous{" "}
            <span className="text-shimmer">Events</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Real nights, real photos - a glimpse into our past meetups and hack
            nights. We can&apos;t wait to see what you build next!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.label}
              variants={item}
              className={tile.big ? "md:col-span-2 row-span-2" : ""}
            >
                <div
                  className="group relative overflow-hidden rounded-3xl shadow-[14px_14px_0_rgba(11,10,17,0.35)] transition-all duration-500 hover:-translate-y-1.5 cursor-pointer border border-white/10"
                  style={{ transform: `rotate(${tile.rotate}deg)` }}
                >
                  <div className={tile.big ? "aspect-[16/10]" : "aspect-[4/3]"}>
                    {tile.img ? (
                      <Image
                        src={tile.img}
                        alt={tile.label}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                        style={{
                          objectPosition: tile.position,
                          zoom: tile.zoom,
                        }}
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${tile.gradient} transition-transform duration-[1.2s] ease-out group-hover:scale-110`}
                      />
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a11]/85 via-transparent to-transparent transition-opacity duration-500 group-hover:from-[#0b0a11]/90" />

                  <span className="absolute top-4 left-5 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
                    <span className="text-foi-yellow">0{i + 1}.</span> {tile.tag}
                  </span>

                  <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between gap-3">
                    <span className="font-heading font-bold text-white text-lg leading-tight">
                      {tile.label}
                    </span>
                    <span className="font-mono text-[9px] font-black uppercase tracking-widest text-foi-light-blue shrink-0 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      recap ↗
                    </span>
                  </div>
                </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 flex flex-wrap items-center justify-between gap-6 glass rounded-3xl p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div>
            <div className="font-mono text-[10px] font-black uppercase tracking-widest text-foi-red mb-2">
              07b · Recaps
            </div>
            <h3 className="font-heading font-black text-2xl md:text-4xl text-slate-900 leading-tight">
              Fancy running the next build night?
            </h3>
            <p className="text-slate-600 font-medium mt-2">
              We hand the mic around. Propose a theme, host a segment, or run the
              whole night.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-heading font-bold text-foi-red hover:text-foi-blue transition-colors text-lg"
          >
            Lead the next one <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}