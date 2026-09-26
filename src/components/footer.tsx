"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Mail } from "lucide-react";
import { FoiLockup } from "@/components/foi-logo";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/social-icons";

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
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
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
    <footer id="contact" className="border-t-2 border-slate-200 bg-white mt-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-foi animate-gradient-x" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="pb-12">
          <Link href="/" className="inline-flex mb-4">
            <FoiLockup size="md" />
          </Link>
          <p className="text-sm text-slate-600 font-medium max-w-md leading-relaxed">
            India&apos;s emerging student innovation movement - born in Pune, run
            by the people who run the room. No lectures. Just shipping.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-t border-slate-100 pt-12"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={item} className="lg:col-span-2">
            <h3 className="font-heading font-bold text-slate-900 mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 font-medium hover:text-foi-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-2">
            <h3 className="font-heading font-bold text-slate-900 mb-5 text-sm uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 font-medium hover:text-foi-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-3">
            <h3 className="font-heading font-bold text-slate-900 mb-5 text-sm uppercase tracking-widest">
              Customer Care
            </h3>
            <div className="space-y-4">
              <Link
                href="mailto:hello@faceofinnovator.in"
                className="flex items-center gap-3 text-sm text-slate-600 font-medium hover:text-foi-blue transition-colors"
              >
                <span className="w-9 h-9 rounded-lg bg-foi-blue text-foi-yellow flex items-center justify-center shrink-0">
                  <Mail size={15} />
                </span>
                hello@faceofinnovator.in
              </Link>
              <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                <span className="w-9 h-9 rounded-lg bg-foi-blue text-foi-yellow flex items-center justify-center shrink-0">
                  <MapPin size={15} />
                </span>
                PW IOI Pune · Viman Nagar, Pune
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                <span className="w-9 h-9 rounded-lg bg-foi-blue text-foi-yellow flex items-center justify-center shrink-0">
                  <Clock size={15} />
                </span>
                Mon–Sun · 9 AM – 9 PM IST
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-3">
            <h3 className="font-heading font-bold text-slate-900 mb-5 text-sm uppercase tracking-widest">
              Connect With Us
            </h3>
            <div className="flex gap-3 flex-wrap">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className={`w-11 h-11 rounded-xl border-2 border-slate-200 inline-flex items-center justify-center text-slate-500 transition-all hover:-translate-y-1 hover:shadow-[3px_3px_0_rgba(124,143,214,0.35)] ${social.hover}`}
                >
                  <social.icon size={17} />
                </Link>
              ))}
            </div>
            <p className="text-xs text-slate-400 font-medium mt-6 leading-relaxed max-w-[200px]">
              Tag <span className="font-bold text-foi-blue">#FaceOfInnovator</span> on
              Instagram - we repost every build night.
            </p>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-2">
            <h3 className="font-heading font-bold text-slate-900 mb-5 text-sm uppercase tracking-widest">
              Newsletter
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-slate-50 p-1.5 pl-4 focus-within:border-foi-blue transition-colors"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none min-w-0"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 h-10 w-10 rounded-xl bg-gradient-foi text-[#0b0a11] inline-flex items-center justify-center active:scale-95 transition-transform"
              >
                <ArrowRight size={16} />
              </button>
            </form>
            <p className="text-xs text-slate-400 font-medium mt-3">
              Get the build invites. One email, every build night.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none select-none text-center font-heading font-black uppercase leading-none tracking-tight text-transparent whitespace-nowrap pt-6 opacity-30"
          style={{
            WebkitTextStroke: "1.5px rgba(124,143,214,0.45)",
            fontSize: "clamp(2.5rem, 10vw, 8rem)",
          }}
          aria-hidden="true"
        >
          Keep building
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-sm text-slate-500 font-medium">
            © 2026 Face of Innovator. Built by student builders.
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-foi-red animate-pulse" />
            Pune, Maharashtra - home of Shaniwar Wada, Aga Khan Palace & PW IOI.
          </div>
        </div>
      </div>
    </footer>
  );
}