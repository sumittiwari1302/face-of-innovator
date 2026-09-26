"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import homeHero from "@/images/home-hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#0b0a11]">
      <div className="absolute inset-0">
        <Image
          src={homeHero}
          alt="Face of Innovator community space"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,10,17,0.8) 0%, rgba(11,10,17,0.4) 30%, transparent 50%, rgba(11,10,17,0.5) 80%, rgba(11,10,17,0.95) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-end">
        <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 pb-44 md:pb-56">
          <h1 className="font-heading font-black tracking-[-0.04em] leading-[0.84] select-none text-white">
            <span className="block text-[12.5vw] sm:text-[9vw] lg:text-[7rem]">
              FACE OF
            </span>
            <span className="block text-[12.5vw] sm:text-[9vw] lg:text-[7rem]">
              INNOVATOR
            </span>
          </h1>

          <motion.p
            className="mt-7 text-base md:text-xl text-white/80 font-medium max-w-xl"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Pune&apos;s student innovation community. Weekly build nights, mentorship, and a space to ship real projects.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <Button size="lg" href="#event">
              Register for Build Night <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" href="#community">
              Join the Community
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}