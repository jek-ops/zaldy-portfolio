"use client";

import { useEffect, useRef } from "react";

// Decorative cursor trail for the hero. It is drawn on a canvas that sits behind the text.
// It only runs with a real mouse or pen (not touch), and never when the visitor asks for
// reduced motion. It is hidden from screen readers and never captures clicks.

type Pt = { x: number; y: number; t: number; brk: boolean };

const LIFE_MS = 700; // how long a point of the trail stays visible
const MAX_POINTS = 48;

export default function HeroTrail() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let pts: Pt[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;
    let listening = false;

    function resize() {
      const r = host!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function accentColor() {
      return getComputedStyle(canvas!).getPropertyValue("--accent").trim() || "#1d4ed8";
    }

    function frame(now: number) {
      pts = pts.filter((p) => now - p.t < LIFE_MS);
      ctx!.clearRect(0, 0, w, h);
      if (pts.length === 0) {
        raf = 0; // nothing left to draw: stop the loop until the mouse moves again
        return;
      }
      ctx!.strokeStyle = accentColor();
      // Butt caps: round caps overlap at each joint and show up as little beads on a see-through line.
      ctx!.lineCap = "butt";
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1];
        const b = pts[i];
        if (b.brk) continue; // the mouse left and came back: do not join the two trails
        const k = 1 - (now - b.t) / LIFE_MS; // 1 for a new point, 0 for an old one
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.globalAlpha = 0.16 * k; // wide soft glow
        ctx!.lineWidth = 18 * k + 2;
        ctx!.stroke();
        ctx!.globalAlpha = 0.55 * k; // thin bright core
        ctx!.lineWidth = 3.5 * k + 0.5;
        ctx!.stroke();
      }
      ctx!.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }

    function push(e: PointerEvent, brk: boolean) {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      const r = host!.getBoundingClientRect();
      pts.push({ x: e.clientX - r.left, y: e.clientY - r.top, t: performance.now(), brk });
      if (pts.length > MAX_POINTS) pts.shift();
      if (!raf) raf = requestAnimationFrame(frame);
    }
    const onMove = (e: PointerEvent) => push(e, false);
    const onEnter = (e: PointerEvent) => push(e, true);

    function sync() {
      const shouldRun = fine.matches && !reduce.matches;
      if (shouldRun && !listening) {
        resize();
        host!.addEventListener("pointermove", onMove, { passive: true });
        host!.addEventListener("pointerenter", onEnter, { passive: true });
        listening = true;
      } else if (!shouldRun && listening) {
        host!.removeEventListener("pointermove", onMove);
        host!.removeEventListener("pointerenter", onEnter);
        listening = false;
        pts = [];
        ctx!.clearRect(0, 0, w, h);
      }
    }

    const ro = new ResizeObserver(() => {
      if (listening) resize();
    });
    ro.observe(host);
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    sync();

    return () => {
      ro.disconnect();
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerenter", onEnter);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}
