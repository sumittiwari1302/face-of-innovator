"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Command } from "lucide-react";

const searchData = [
  { title: "About Us", href: "#about", description: "Learn about Face of Innovator" },
  { title: "Upcoming Event", href: "#event", description: "BUILD SOMETHING Hackathon details" },
  { title: "Tracks", href: "#tracks", description: "AI, Web3, Cloud, Hardware, Design, Security" },
  { title: "Schedule", href: "#schedule", description: "Hackathon day timeline" },
  { title: "The Foundation", href: "#founders", description: "Meet the team behind FOI" },
  { title: "Community", href: "#community", description: "Join the Discord and WhatsApp" },
  { title: "Previous Events", href: "#previous-events", description: "Photos from past build nights" },
  { title: "Gallery", href: "#gallery", description: "The room IRL" },
  { title: "Journey", href: "#journey", description: "From first meetup to leader" },
  { title: "FAQ", href: "#faq", description: "Common questions answered" },
  { title: "Sponsors", href: "#sponsors", description: "Our partners and supporters" },
  { title: "Ambassadors", href: "#chapters", description: "Start a campus chapter" },
  { title: "Contact", href: "#contact", description: "Get in touch with us" },
  { title: "Privacy Policy", href: "/privacy", description: "How we handle your data" },
  { title: "Terms & Conditions", href: "/terms", description: "Site terms of use" },
];

export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredResults = searchData
    .filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 8);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, filteredResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
      e.preventDefault();
      window.location.href = filteredResults[selectedIndex].href;
      setOpen(false);
      setQuery("");
      setSelectedIndex(0);
    } else if (e.key === "Escape") {
      setOpen(false);
      setQuery("");
      setSelectedIndex(0);
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur active:scale-95 transition-transform hover:bg-white/20"
        aria-label="Search (⌘K)"
      >
        <Search size={18} />
        <kbd className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 ml-1 text-[10px] font-mono font-medium text-white/50 bg-white/10 rounded">
          <Command size={10} />K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-3 w-96 glass rounded-2xl border border-slate-200 shadow-lg overflow-hidden z-50"
            role="dialog"
            aria-label="Search results"
          >
            <div className="relative p-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Search... (⌘K)"
                  className="w-full pl-10 pr-10 py-2.5 bg-white/5 dark:bg-slate-800/5 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-foi-red transition-colors"
                  autoComplete="off"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
            {filteredResults.length > 0 ? (
              <div className="divide-y divide-slate-200 dark:divide-slate-700 max-h-96 overflow-y-auto">
                {filteredResults.map((result, index) => (
                  <motion.a
                    key={result.href}
                    href={result.href}
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                      setSelectedIndex(0);
                    }}
                    className={`flex items-start gap-3 px-3 py-2.5 transition-colors ${
                      index === selectedIndex
                        ? "bg-foi-red/10 dark:bg-foi-red/20"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-foi-red/10 flex items-center justify-center shrink-0">
                      <Search size={16} className="text-foi-red" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-900 dark:text-white truncate">
                        {result.title}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 truncate">
                        {result.description}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center">
                <Search className="mx-auto text-slate-300 dark:text-slate-600" size={32} />
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">No results found</p>
              </div>
            )}
            <div className="p-2 border-t border-slate-200 dark:border-slate-700">
              <kbd className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded">
                <Command size={10} />K to open · Esc to close
              </kbd>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}