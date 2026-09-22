"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ParticleField from "@/components/particle-field";
import homeHero from "@/images/home-hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const word = "INNOVATOR";
const base = "FACE OF";

export default function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 55,
    damping: 16,
  });
  const y = useSpring(useTransform(my, [-0.5, 0.5], [-7, 7]), {
    stiffness: 55,
    damping: 16,
  });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    mx.set(px / rect.width - 0.5);
    my.set(py / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="relative min-h-[100svh] overflow-hidden bg-[#0b0a11]"
    >
      <motion.div className="absolute inset-0" style={{ x, y }}>
        <div className="absolute inset-0">
          <Image
            src={homeHero}
            alt=""
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center opacity-95 contrast-[1.05] saturate-[1.1] brightness-[1.03]"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,10,17,0.72) 0%, rgba(11,10,17,0.28) 20%, transparent 42%, transparent 62%, rgba(11,10,17,0.3) 82%, rgba(11,10,17,0.9) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 16% 90%, rgba(11,10,17,0.6) 0%, rgba(11,10,17,0.22) 45%, transparent 75%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 62% 50% at 26% 60%, rgba(255,247,230,0.3) 0%, rgba(255,247,230,0.14) 50%, transparent 72%)",
          }}
        />

        <div className="noise-overlay opacity-60" />

        <div className="ambient-orb -top-24 -right-16 h-[46rem] w-[46rem] bg-foi-fuchsia/25" />
        <div className="ambient-orb ambient-orb-alt -bottom-40 -left-24 h-[40rem] w-[40rem] bg-foi-light-blue/20" />

        <div className="absolute inset-0 opacity-20">
          <ParticleField />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-beam" />
        </div>
      </motion.div>

      <div className="relative z-10 flex min-h-[100svh] items-end">
        <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 pb-44 md:pb-56">
          <h1 className="font-heading font-black tracking-[-0.04em] leading-[0.84] select-none text-transparent bg-clip-text bg-gradient-to-b from-[#0b0a11] via-[#0f1426] to-[#1b2340] [filter:drop-shadow(0_1px_1px_rgba(255,255,255,0.6))_drop-shadow(0_2px_22px_rgba(255,247,230,0.35))]">
            <span className="block text-[12.5vw] sm:text-[9vw] lg:text-[7rem]">
              {base.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 60, rotateX: 60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.12 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </span>
            <span className="block text-[12.5vw] sm:text-[9vw] lg:text-[7rem]">
              {word.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 60, rotateX: 60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {ch}
                </motion.span>
              ))}
              <motion.span
                className="inline-block text-foi-yellow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                aria-hidden="true"
              >
                _
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-7 text-base md:text-xl text-white/80 font-medium max-w-xl [text-shadow:0_1px_12px_rgba(11,10,17,0.6)]"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Pune&apos;s home for builders, makers and dreamers. No lectures. Just
            shipping.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <Button size="lg" href="#community">
              Join the Community <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" href="#founders">
              Meet the crew
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}