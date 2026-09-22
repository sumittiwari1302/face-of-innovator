"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

export function FoiLogo({
  className = "",
  title = "Face Of Innovator",
  variant = "light",
}: {
  className?: string;
  title?: string;
  variant?: "light" | "dark";
}) {
  const id = useId();
  const dark = variant === "dark";

  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {dark && (
        <defs>
          <linearGradient id={`${id}-foi-bolt`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7c8fd6" />
            <stop offset="0.5" stopColor="#9a8fc4" />
            <stop offset="1" stopColor="#86a2e6" />
          </linearGradient>
        </defs>
      )}

      <circle
        cx="38"
        cy="28"
        r="6"
        fill={dark ? "#d6d2dd" : "#10122b"}
      />
      <circle
        cx="62"
        cy="28"
        r="6"
        fill={dark ? "#d6d2dd" : "#10122b"}
      />

      <path
        d="M 44 38 H 70 L 52 74 H 66 L 42 92 L 54 62 H 34 Z"
        fill={dark ? `url(#${id}-foi-bolt)` : "#10122b"}
      />
    </svg>
  );
}

const marks = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
} as const;

const words = {
  sm: "text-[13px]",
  md: "text-lg",
  lg: "text-2xl md:text-3xl",
} as const;

const tags = {
  sm: "hidden",
  md: "text-[9px]",
  lg: "text-[10px] md:text-[11px]",
} as const;

export function FoiLockup({
  size = "sm",
  variant = "light",
  className = "",
}: {
  size?: keyof typeof marks;
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3 shrink-0", className)}>
      <FoiLogo
        className={cn(marks[size], "drop-shadow-[0_3px_10px_rgba(124,143,214,0.35)]")}
        title="Face Of Innovator — home"
        variant={variant}
      />
      <span className={cn("flex flex-col leading-none justify-center", tags[size] === "hidden" ? "hidden sm:flex" : "flex")}>
        <span
          className={cn(
            "font-heading font-black tracking-tight whitespace-nowrap",
            words[size],
            variant === "dark" ? "text-white" : "text-slate-900",
          )}
        >
          FACE OF INNOVATOR<span className="caret text-foi-red">_</span>
        </span>
        <span
          className={cn(
            "font-mono font-black uppercase tracking-[0.3em] mt-1",
            tags[size],
            variant === "dark" ? "text-white/60" : "text-slate-400",
          )}
        >
          build · ship · launch
        </span>
      </span>
    </span>
  );
}