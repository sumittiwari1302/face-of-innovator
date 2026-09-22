"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FoiLockup } from "./foi-logo";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Event", href: "#event" },
  { label: "Tracks", href: "#tracks" },
  { label: "Schedule", href: "#schedule" },
  { label: "Foundation", href: "#founders" },
  { label: "FAQ", href: "#faq" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={cn(
            "w-full bg-white/90 border-b border-slate-200 backdrop-blur-xl transition-shadow duration-500",
            scrolled ? "shadow-md shadow-slate-900/5" : "",
          )}
        >
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
            <a href="#top" className="flex items-center shrink-0">
              <FoiLockup size="sm" />
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-slate-600 rounded-full transition-colors hover:text-foi-red group"
                >
                  {link.label}
                  <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-foi-red transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex font-mono text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-foi-red transition-colors"
              >
                Sign in
              </a>
              <Button size="sm" href="#event" className="hidden sm:inline-flex">
                Grab a pass <ArrowUpRight size={14} />
              </Button>
              <button
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-foi-blue active:scale-95 transition-transform"
                aria-label="Toggle menu"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden flex flex-col justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
            <div className="relative space-y-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-3 border-b border-slate-100"
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i }}
                >
                  <span className="font-mono text-xs text-slate-300 font-black">
                    0{i + 1}
                  </span>
                  <span className="font-heading font-black text-3xl text-foi-blue group-hover:text-foi-red transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
              <motion.div
                className="pt-8"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 * links.length }}
              >
                <Button size="lg" href="#event" className="w-full">
                  Grab your free pass <ArrowUpRight size={16} />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}