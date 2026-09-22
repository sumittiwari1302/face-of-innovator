"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Mail } from "lucide-react";
import { Parallax, staggerParent } from "@/components/motion-reveal";
import { FoiLockup } from "@/components/foi-logo";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/social-icons";
import Image from "next/image";
import footerBg from "@/images/footer.jpeg";

const socials = [
  { icon: LinkedinIcon, label: "LinkedIn", href: "#", hover: "hover:text-foi-blue" },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/face_of_innovators?igsi=NjJiNzJoM3BrMTAw",
    hover: "hover:text-foi-red",
  },
  { icon: XIcon, label: "X (Twitter)", href: "#", hover: "hover:text-foi-light-blue" },
  { icon: GithubIcon, label: "GitHub", href: "#", hover: "hover:text-slate-900" },
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Events & Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Community", href: "#community" },
  { label: "FAQs", href: "#faq" },
];

const companyLinks = [
  { label: "The Foundation", href: "#founders" },
  { label: "The Room", href: "#gallery" },
  { label: "Previous Events", href: "#previous-events" },
  { label: "Code of Conduct", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#0b0a11] mt-24">
      <div className="absolute inset-0 z-0">
        <Image
          src={footerBg}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center opacity-15 contrast-110 saturate-105 brightness-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,10,17,0.85) 0%, rgba(11,10,17,0.95) 30%, rgba(11,10,17,1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(124,143,214,0.15) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 80% 80%, rgba(180,60,200,0.1) 0%, transparent 55%)",
          }}
        />
        <div className="noise-overlay opacity-40" />
      </div>

      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-foi animate-gradient-x" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="pb-12">
          <Link href="/" className="inline-flex mb-4">
            <FoiLockup size="lg" />
          </Link>
          <p className="text-base md:text-lg text-white/70 font-medium max-w-xl leading-relaxed">
            India&apos;s emerging student innovation movement — born in Pune, run
            by the people who run the room. No lectures. Just shipping.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-t border-white/10 pt-12"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={item} className="lg:col-span-2">
            <h3 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 font-medium hover:text-foi-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-2">
            <h3 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 font-medium hover:text-foi-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-3">
            <h3 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Customer Care
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:hello@faceofinnovator.in"
                className="flex items-center gap-3 text-sm text-white/70 font-medium hover:text-foi-yellow transition-colors duration-200"
              >
                <span className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <Mail size={16} className="text-foi-yellow" />
                </span>
                hello@faceofinnovator.in
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70 font-medium">
                <span className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-foi-light-blue" />
                </span>
                Nerds Room HQ · Viman Nagar, Pune
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70 font-medium">
                <span className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-foi-fuchsia" />
                </span>
                Mon–Sun · 9 AM – 9 PM IST
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-3">
            <h3 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Connect With Us
            </h3>
            <div className="flex gap-3 flex-wrap">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 inline-flex items-center justify-center text-white/60 transition-all hover:bg-white/20 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(124,143,214,0.3)]"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-xs text-white/40 font-medium mt-6 leading-relaxed max-w-[200px]">
              Tag <span className="font-bold text-foi-yellow">#FaceOfInnovator</span> on
              Instagram — we repost every build night.
            </p>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-2">
            <h3 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Newsletter
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 rounded-2xl border-2 border-white/10 bg-white/5 p-1.5 pl-4 focus-within:border-foi-yellow/50 focus-within:bg-white/10 transition-colors"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-transparent text-sm font-medium text-white placeholder:text-white/30 outline-none min-w-0"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 h-10 w-10 rounded-xl bg-gradient-foi text-[#0b0a11] inline-flex items-center justify-center active:scale-95 transition-transform hover:shadow-[0_0_20px_rgba(255,210,0,0.5)]"
              >
                <ArrowRight size={16} />
              </button>
            </form>
            <p className="text-xs text-white/40 font-medium mt-3">
              Get the build invites. One email, every build night.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10">
        <Parallax distance={28}>
          <div
            className="pointer-events-none select-none text-center font-heading font-black uppercase leading-none tracking-tight text-transparent whitespace-nowrap pt-6 opacity-40"
            style={{
              WebkitTextStroke: "1.5px rgba(124,143,214,0.5)",
              fontSize: "clamp(2.5rem, 10vw, 8rem)",
            }}
            aria-hidden="true"
          >
            Keep building
          </div>
        </Parallax>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-sm text-white/40 font-medium">
            © 2026 Face of Innovator. Built by student builders.
          </div>
          <div className="flex items-center gap-2 text-sm text-white/40 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-foi-red animate-pulse" />
            Pune, Maharashtra — home of Shaniwar Wada, Aga Khan Palace & the Nerds Room.
          </div>
        </div>
      </div>
    </footer>
  );
}