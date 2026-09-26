"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setShow(true), 1000);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "false");
    setShow(false);
  };

  if (!show) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-4 right-4 left-4 md:right-4 md:left-auto md:w-96 z-50 glass rounded-2xl border border-slate-200 p-4 shadow-lg"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            We use cookies to improve your experience and analyze site traffic. By clicking Accept, you consent to our use of cookies.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-medium bg-foi-red text-white rounded-lg hover:bg-foi-red/90 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setShow(false)}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}