import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "default"
  | "outline"
  | "secondary"
  | "destructive"
  | "light";

type ButtonSize = "sm" | "default" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-foi-red border-foi-red text-[#0b0a11] hover:bg-foi-light-blue hover:border-foi-light-blue",
  outline:
    "bg-transparent border-slate-300 text-slate-700 hover:border-foi-red hover:text-foi-red",
  secondary:
    "bg-foi-yellow border-foi-yellow text-[#1b1a21] hover:bg-foi-blue hover:border-foi-blue hover:text-foi-yellow",
  destructive:
    "bg-red-600 border-red-600 text-white hover:bg-red-700 hover:border-red-700",
  light:
    "bg-foi-light-blue border-foi-light-blue text-[#0b0a11] hover:bg-foi-yellow hover:border-foi-yellow hover:text-[#0b0a11]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  default: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLAnchorElement>, "href">;

export function Button({
  variant = "default",
  size = "default",
  href,
  target,
  rel,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-bold font-heading rounded-lg border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:translate-y-0.5 shadow-[3px_3px_0_rgba(124,143,214,0.25)] hover:shadow-[1px_1px_0_rgba(124,143,214,0.25)]",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  return (
    <a href={href} target={target} rel={rel} className={classes}>
      {children}
    </a>
  );
}