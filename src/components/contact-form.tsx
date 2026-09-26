"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Clock, Mail, MapPin, Users, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";

const roles = [
  { id: "student", label: "Student" },
  { id: "organizer", label: "Organizer" },
];

const slots = [
  { id: "morning", label: "Morning · 9 AM – 12 PM" },
  { id: "afternoon", label: "Afternoon · 12 PM – 4 PM" },
  { id: "evening", label: "Evening · 4 PM – 9 PM" },
  { id: "fullday", label: "Full 12 hours" },
];

function getUTMParams() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
    const value = params.get(key);
    if (value) utmParams[key] = value;
  });
  return utmParams;
}

export default function ContactForm() {
  const [role, setRole] = useState("student");
  const [slot, setSlot] = useState("fullday");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const utmParams = getUTMParams();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...utmParams }),
      });

      if (!response.ok) throw new Error("Failed to submit");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] rounded-full bg-gradient-foi opacity-[0.07] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
        <motion.div
          className="lg:col-span-5 lg:sticky lg:top-28"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[11px] font-black uppercase tracking-[0.25em] text-foi-light-blue mb-5 flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-foi-light-blue animate-pulse" />
            {"// say hello - the room is listening"}
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[0.95] mb-6">
            Want a seat in{" "}
            <span className="text-shimmer">the room?</span>
          </h2>
          <p className="text-slate-600 font-medium text-lg mb-10 max-w-md">
            Tell us who you are - student or organizer - and when you plan to
            build. We&apos;ll save your spot for the 12-hour hackathon on 3 Oct
            2026.
          </p>

          <div className="space-y-4">
            {[
              { icon: Clock, label: "Hackathon", value: "Sat 3 Oct 2026 · 12 hours" },
              { icon: MapPin, label: "Venue", value: "PW IOI Pune, Viman Nagar" },
              { icon: Mail, label: "Write to us", value: "hello@faceofinnovator.in" },
            ].map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-4 rounded-2xl border-2 border-slate-100 bg-white px-5 py-4 hover:border-foi-blue hover:-translate-y-0.5 transition-all duration-300"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1 }}
              >
                <span className="w-10 h-10 rounded-xl bg-foi-blue text-foi-yellow flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </span>
                <div>
                  <div className="font-mono text-[9px] font-black uppercase tracking-widest text-slate-400">
                    {label}
                  </div>
                  <div className="font-heading font-bold text-slate-900 text-sm">
                    {value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded-[2rem] border-2 border-slate-200 bg-slate-50 overflow-hidden">
            <div className="flex items-center justify-between px-7 py-4 border-b border-slate-200 bg-white">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-foi-red" />
                <span className="w-3 h-3 rounded-full bg-foi-yellow" />
                <span className="w-3 h-3 rounded-full bg-foi-light-blue" />
              </div>
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                foi://apply
              </span>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center text-center px-8 py-24"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_16px_32px_rgba(16,185,129,0.4)] mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
                  >
                    <Check size={34} strokeWidth={3} />
                  </motion.div>
                  <h3 className="font-heading font-black text-3xl text-slate-900 mb-2">
                    You&apos;re on the list
                  </h3>
                  <p className="text-slate-600 font-medium max-w-md">
                    Seat reserved for the 12-hour hackathon on 3 Oct 2026. Keep
                    an eye on your inbox - we&apos;ll ping you with the details.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-8 font-mono text-[11px] font-black uppercase tracking-widest text-foi-red hover:underline"
                  >
                    Send another response
                  </button>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  key="error"
                  className="flex flex-col items-center justify-center text-center px-8 py-24"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white shadow-[0_16px_32px_rgba(239,68,68,0.4)] mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
                  >
                    <AlertCircle size={34} strokeWidth={3} />
                  </motion.div>
                  <h3 className="font-heading font-black text-3xl text-slate-900 mb-2">
                    Something went wrong
                  </h3>
                  <p className="text-slate-600 font-medium max-w-md mb-6">
                    {errorMessage}
                  </p>
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 rounded-xl bg-foi-red text-white font-heading font-black px-6 py-3"
                  >
                    Try again <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}

              {status === "idle" || status === "loading" ? (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  className="p-7 md:p-9 space-y-6"
                  exit={{ opacity: 0, y: -12 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                        Full name
                      </span>
                      <input
                        name="fullName"
                        required
                        placeholder="What do they call you?"
                        className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-medium text-slate-900 placeholder:text-slate-400 outline-none focus:border-foi-red transition-colors"
                      />
                    </label>
                    <label className="block">
                      <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                        Email
                      </span>
                      <input
                        name="email"
                        required
                        type="email"
                        placeholder="you@campus.edu"
                        className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-medium text-slate-900 placeholder:text-slate-400 outline-none focus:border-foi-red transition-colors"
                      />
                    </label>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-3">
                      <Users size={13} /> I am a…
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {roles.map((r) => (
                        <button
                          type="button"
                          key={r.id}
                          onClick={() => setRole(r.id)}
                          className={`rounded-xl border-2 px-4 py-3 font-bold text-sm text-left transition-all duration-300 ${
                            role === r.id
                              ? "border-foi-red bg-foi-red/10 text-foi-blue"
                              : "border-slate-200 bg-white text-slate-500 hover:border-foi-blue"
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="role" value={role} />
                  </div>

                  <div>
                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2 mb-3">
                      <Clock size={13} /> When will you build?
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {slots.map((s) => (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => setSlot(s.id)}
                          className={`rounded-xl border-2 px-4 py-3 font-bold text-sm text-left transition-all duration-300 ${
                            slot === s.id
                              ? "border-foi-light-blue bg-foi-light-blue/10 text-foi-blue"
                              : "border-slate-200 bg-white text-slate-500 hover:border-foi-light-blue"
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="slot" value={slot} />
                  </div>

                  <label className="block">
                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                      What are you building? (optional)
                    </span>
                    <textarea
                      name="project"
                      rows={3}
                      placeholder="A hack idea, a dream project, or 'I'll know when I get there.'"
                      className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 font-medium text-slate-900 placeholder:text-slate-400 outline-none focus:border-foi-red transition-colors resize-none"
                    />
                  </label>

                  <input type="hidden" name="utm_source" value={getUTMParams().utm_source || ""} className="utm-field" />
                  <input type="hidden" name="utm_medium" value={getUTMParams().utm_medium || ""} className="utm-field" />
                  <input type="hidden" name="utm_campaign" value={getUTMParams().utm_campaign || ""} className="utm-field" />
                  <input type="hidden" name="utm_content" value={getUTMParams().utm_content || ""} className="utm-field" />
                  <input type="hidden" name="utm_term" value={getUTMParams().utm_term || ""} className="utm-field" />
                  <input type="hidden" name="referrer" value={typeof document !== "undefined" ? document.referrer : ""} className="utm-field" />

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-foi text-[#0b0a11] font-heading font-black text-base px-8 py-4 shadow-[6px_6px_0_rgba(124,143,214,0.3)] hover:shadow-[2px_2px_0_rgba(124,143,214,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Reserving...
                      </>
                    ) : (
                      <>
                        Reserve my seat <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}