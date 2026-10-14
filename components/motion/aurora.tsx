"use client";

import { useReducedMotion } from "framer-motion";

/** One blurred radial gradient drifting behind the hero. No canvas, no three.js. */
export function Aurora() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl ${
        reduceMotion ? "" : "animate-aurora"
      }`}
      style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
    />
  );
}
