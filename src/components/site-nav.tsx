"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

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
  const { theme, toggleTheme } = useTheme();

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
            "w-full bg-gradient-to-b from-[#04040a]/95 via-[#04040a]/70 to-transparent transition-all duration-500",
            scrolled
              ? "border-b border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(4,4,10,0.35)]"
              : "border-b border-transparent",
          )}
        >
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
            <a href="#top" className="flex items-center gap-3 shrink-0 text-white no-underline">
              <svg
                viewBox="0 0 64 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                aria-hidden="true"
                className="h-[18px] w-[34px] drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
              >
                <path d="M32 16C26 8 22 4 16 4a12 12 0 1 0 0 24c6 0 10-4 16-12s10-12 16-12a12 12 0 1 1 0 24c-6 0-10-4-16-12" />
                <circle cx="32" cy="16" r="4" fill="currentColor" stroke="none" />
              </svg>
              <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-white sm:text-[13px]">
                Face of Innovator
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur active:scale-95 transition-transform hover:bg-white/20"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a
                href="#event"
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:border-white hover:bg-white hover:text-[#04040a]"
              >
                Grab a pass <ArrowUpRight size={13} />
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur active:scale-95 transition-transform"
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
            className="fixed inset-0 z-40 bg-[#04040a]/95 backdrop-blur-xl lg:hidden flex flex-col justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
            <div className="relative space-y-1">
              <motion.div
                className="flex items-center justify-between py-3 border-b border-white/10"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 }}
              >
                <span className="font-heading font-bold text-xl text-white">Appearance</span>
                <button
                  onClick={toggleTheme}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur active:scale-95 transition-transform hover:bg-white/20"
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </motion.div>
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-3 border-b border-white/10"
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * (i + 1) }}
                >
                  <span className="font-mono text-xs text-white/30 font-black">
                    0{i + 1}
                  </span>
                  <span className="font-heading font-black text-3xl text-white group-hover:text-foi-red transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
              <motion.div
                className="pt-8"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 * (links.length + 1) }}
              >
                <a
                  href="#event"
                  onClick={() => setOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-[#04040a]"
                >
                  Grab your free pass <ArrowUpRight size={16} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}