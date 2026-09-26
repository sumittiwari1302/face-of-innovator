"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, X, ExternalLink, Calendar, MapPin } from "lucide-react";

const contactOptions = [
  {
    icon: Calendar,
    label: "Join Event",
    description: "Register for the next build night",
    href: "#event",
  },
  {
    icon: MessageSquare,
    label: "Join Discord",
    description: "Chat with the community",
    href: "https://discord.gg/faceofinnovator",
    external: true,
  },
  {
    icon: Mail,
    label: "Email Us",
    description: "hello@faceofinnovator.in",
    href: "mailto:hello@faceofinnovator.in",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    description: "PW IOI Pune, Viman Nagar",
    href: "https://maps.app.goo.gl/pwioi-pune",
    external: true,
  },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40" role="region" aria-label="Quick contact">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-72 glass rounded-2xl border border-slate-200 shadow-lg overflow-hidden"
            role="menu"
          >
            <div className="p-3 space-y-2">
              {contactOptions.map((option, index) => (
                <motion.a
                  key={option.label}
                  href={option.href}
                  target={option.external ? "_blank" : undefined}
                  rel={option.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                  role="menuitem"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <div className="w-10 h-10 rounded-lg bg-foi-red/10 flex items-center justify-center text-foi-red group-hover:bg-foi-red group-hover:text-white transition-colors">
                    <option.icon size={18} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-slate-900 dark:text-white">{option.label}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{option.description}</div>
                  </div>
                  {option.external && <ExternalLink size={14} className="text-slate-400" />}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-foi text-white shadow-lg shadow-foi-red/30 hover:shadow-xl hover:shadow-foi-red/40 transition-all duration-300"
        whileHover={{ scale: 1.05, rotate: 90 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Mail size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}