"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import pwLogo from "@/images/pw-logo.png";
import pwIoiLogo from "@/images/pwioi.jpg";

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-slate-50 border-y-2 border-slate-200 relative overflow-hidden">
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-foi-light-blue/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-2xl mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[0.9] mb-6">
            Backed by the{" "}
            <span className="text-shimmer">Best</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium mb-6">
            Partner with us to reach the brightest minds in the student
            developer ecosystem.
          </p>
          <Button variant="outline" href="#contact" className="group">
            Partner with FOI
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest mb-4">
            Venue Partners
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="gradient-border rounded-3xl group bg-white">
              <div className="relative h-36 rounded-3xl flex items-center gap-5 md:gap-9 px-6 md:px-12 overflow-hidden">
                <div className="absolute inset-0 bg-dots opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative shrink-0 w-32 h-20 md:w-44 md:h-24 rounded-2xl bg-white border-2 border-foi-light-blue/40 flex items-center justify-center shadow-[6px_6px_0_rgba(124,143,214,0.3)] group-hover:rotate-2 group-hover:scale-[1.04] transition-transform duration-300 overflow-hidden">
                  <Image
                    src={pwLogo}
                    alt="PW Institute of Innovation"
                    width={148}
                    height={152}
                    priority
                    quality={95}
                    className="object-contain w-full h-full p-3 md:p-4"
                  />
                </div>
                <div className="relative">
                  <div className="font-heading font-bold text-xl md:text-2xl text-slate-900 group-hover:text-foi-blue transition-colors tracking-tight">
                    PW Institute of Innovation
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border rounded-3xl group bg-white">
              <div className="relative h-36 rounded-3xl flex items-center gap-5 md:gap-9 px-6 md:px-12 overflow-hidden">
                <div className="absolute inset-0 bg-dots opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative shrink-0 w-32 h-20 md:w-44 md:h-24 rounded-2xl bg-white border-2 border-foi-fuchsia/40 flex items-center justify-center shadow-[6px_6px_0_rgba(180,60,200,0.3)] group-hover:rotate-2 group-hover:scale-[1.04] transition-transform duration-300 overflow-hidden">
                  <Image
                    src={pwIoiLogo}
                    alt="Pune Tech Club"
                    width={148}
                    height={152}
                    priority
                    quality={95}
                    className="object-contain w-full h-full p-3 md:p-4"
                  />
                </div>
                <div className="relative">
                  <div className="font-heading font-bold text-xl md:text-2xl text-slate-900 group-hover:text-foi-fuchsia transition-colors tracking-tight">
                    Pune Tech Club
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest mb-4">
            Title Partner
          </div>
          <div className="gradient-border rounded-3xl group">
            <div className="relative h-32 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-dots opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative text-center">
                <div className="font-heading font-bold text-2xl text-slate-300 group-hover:text-foi-blue transition-colors">
                  Your Logo Here
                </div>
                <div className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-foi-red transition-colors mt-1">
                  The room is yours — claim it
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest mb-4">
            Gold Partners
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Sponsor A", "Sponsor B", "Sponsor C"].map((sponsor) => (
              <div
                key={sponsor}
                className="relative h-24 rounded-2xl border-2 border-dashed border-slate-300 bg-white flex items-center justify-center overflow-hidden group hover:border-foi-red hover:shadow-[8px_8px_0_rgba(124,143,214,0.3)] transition-all duration-300"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg, rgba(124,143,214,0.06) 0 8px, transparent 8px 16px)",
                  }}
                />
                <div className="relative font-heading font-bold text-slate-400 group-hover:text-foi-blue transition-colors">
                  {sponsor}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}