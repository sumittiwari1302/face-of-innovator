"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#7c8fd6", "#86a2e6", "#9a8fc4", "#d6d2dd", "#b7c2ea"];

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  phase: number;
  core: boolean;
};

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(130, Math.floor((width * height) / 11000));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.7,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        phase: Math.random() * Math.PI * 2,
        core: i % 11 === 0,
      }));
    };

    const step = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx + Math.sin(t / 2600 + n.phase) * 0.06;
        n.y += n.vy + Math.cos(t / 3000 + n.phase) * 0.05;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 170 && dist > 0) {
          const force = (170 - dist) / 170;
          n.x += (dx / dist) * force * 0.7;
          n.y += (dy / dist) * force * 0.7;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 135) {
            const alpha = (1 - d / 135) * 0.26;
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = a.core || b.core ? "#9a8fc4" : "#7c8fd6";
            ctx.lineWidth = a.core || b.core ? 1.2 : 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const twinkle = 0.5 + 0.5 * Math.abs(Math.sin(t / 600 + n.phase));
        ctx.globalAlpha = twinkle * 0.95;
        ctx.fillStyle = n.color;
        if (n.core) {
          ctx.shadowBlur = 16;
          ctx.shadowColor = n.color;
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.core ? n.r * 1.8 : n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(step);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    build();
    raf = requestAnimationFrame(step);
    window.addEventListener("resize", build);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}