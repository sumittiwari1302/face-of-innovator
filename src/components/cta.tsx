"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section id="join" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center bg-gradient-foi animate-gradient-x"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 opacity-[0.14] bg-dots pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-blob pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob-delay pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            <div className="w-[140%] aspect-square rounded-full border border-dashed border-white/20" />
          </motion.div>

          <div className="relative">
            <div className="flex items-center justify-center gap-2.5 font-mono text-[11px] font-black uppercase tracking-[0.2em] text-white/80 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-foi-yellow animate-pulse" />
              Limited seats · Free for students
            </div>

            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.02] mb-5">
              Ready to{" "}
              <span className="text-foi-yellow">Innovate?</span>
            </h2>

            <p className="text-lg text-white/85 font-medium max-w-2xl mx-auto mb-10">
              Join the movement where student builders stop waiting and start
              shipping. No fees. No gatekeeping. Just shipping.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                href="#event"
                className="bg-white border-white text-foi-blue hover:bg-transparent hover:text-white shadow-[4px_4px_0_rgba(11,10,17,0.35)]"
              >
                Register Now <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#community"
                className="!bg-white/10 !text-white !border-white/40 hover:!bg-white hover:!text-foi-blue"
              >
                Join the Community
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}