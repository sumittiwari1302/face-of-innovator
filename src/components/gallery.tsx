"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import home from "@/images/home-hero.png";
import galleryImg from "@/images/gallery.jpeg";

const tiles = [
  {
    label: "Live from the room",
    tag: "reels/046",
    img: galleryImg,
    position: "50% 32%",
    scale: 1.25,
    rotate: 0,
    big: true,
    video: true,
    duration: "0:32",
  },
  {
    label: "The build room at 2 AM",
    tag: "build_night/042",
    img: home,
    position: "50% 45%",
    scale: 1.5,
    rotate: 0,
    big: false,
  },
  {
    label: "Whiteboard talks",
    tag: "async/standup",
    img: home,
    position: "30% 20%",
    scale: 1.8,
    rotate: -1.5,
    big: false,
  },
  {
    label: "Demo hour",
    tag: "showtime/ow",
    img: home,
    position: "75% 65%",
    scale: 2,
    rotate: 1.5,
    big: false,
  },
  {
    label: "Team zero, shipping",
    tag: "deploy/*",
    img: home,
    position: "85% 25%",
    scale: 1.9,
    rotate: 0,
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

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.h2
            className="font-heading text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[0.95] max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The room,{" "}
            <span className="text-shimmer">IRL.</span>
            <br />
            <span className="text-xl md:text-2xl font-bold text-slate-600 mt-4 block">
              Same couch, same energy - every single build night.
            </span>
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
              {"// momentos, not slides"}
            </span>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {tiles.map((tile) => (
            <motion.div
              key={tile.label}
              variants={item}
              className={tile.big ? "md:col-span-2 row-span-2" : ""}
            >
                <div
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[14px_14px_0_rgba(11,10,17,0.35)] transition-all duration-500 hover:-translate-y-1.5`}
                  style={{ transform: `rotate(${tile.rotate}deg)` }}
                >
                  <div className={tile.big ? "aspect-[16/10]" : "aspect-[4/3]"}>
                    <Image
                      src={tile.img}
                      alt={tile.label}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                      style={{
                        objectPosition: tile.position,
                        zoom: tile.scale,
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a11]/85 via-transparent to-transparent transition-opacity duration-500 group-hover:from-[#0b0a11]/90" />

                  {tile.video && tile.big && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-[#0b0a11]/45 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-foi-red/70">
                        <svg
                          className="absolute -inset-4 h-full w-full"
                          viewBox="0 0 100 100"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="48"
                            stroke="rgba(255,255,255,0.35)"
                            strokeWidth="1"
                            strokeDasharray="4 6"
                          />
                        </svg>
                        <Play size={26} className="text-white translate-x-0.5" fill="currentColor" />
                      </span>
                    </div>
                  )}

                  <span className="absolute top-4 left-5 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
                    <span className="text-foi-yellow">0{tiles.indexOf(tile) + 1}.</span>{" "}
                    {tile.tag}
                  </span>

                  {tile.video && tile.big && (
                    <span className="absolute top-4 right-5 rounded-md bg-[#0b0a11]/70 px-2 py-1 font-mono text-[10px] font-black text-white/90 border border-white/10">
                      {tile.duration}
                    </span>
                  )}

                  <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between gap-3">
                    <span className="font-heading font-bold text-white text-lg leading-tight">
                      {tile.label}
                    </span>
                    <span className="font-mono text-[9px] font-black uppercase tracking-widest text-foi-light-blue shrink-0 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      open ↗
                    </span>
                  </div>
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}