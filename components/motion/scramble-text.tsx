"use client";

import { useEffect, useState } from "react";

import { useReducedMotion } from "framer-motion";

const GLYPHS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#$%&@*";
const FRAME_MS = 40;

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
}

export function ScrambleText({
  text,
  className = "",
  duration = 1200,
}: ScrambleTextProps) {
  const reduceMotion = useReducedMotion();
  const [output, setOutput] = useState(text);

  useEffect(() => {
    if (reduceMotion) return;

    const totalFrames = Math.max(1, Math.round(duration / FRAME_MS));
    let frame = 0;

    const intervalId = setInterval(() => {
      frame += 1;
      const revealed = Math.floor((frame / totalFrames) * text.length);
      setOutput(
        Array.from(text, (char, index) =>
          char === " " || index < revealed
            ? char
            : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        ).join("")
      );
      if (frame >= totalFrames) {
        clearInterval(intervalId);
        setOutput(text);
      }
    }, FRAME_MS);

    return () => clearInterval(intervalId);
  }, [text, duration, reduceMotion]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{reduceMotion ? text : output}</span>
    </span>
  );
}
