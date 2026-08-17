"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

interface ScrollFloatProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function ScrollFloat({
  children,
  className = "",
  strength = 1,
}: ScrollFloatProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center 55%", "end 10%"],
  });

const y = useTransform(
  scrollYProgress,
  [0, 0.45, 1],
  [80 * strength, 0, -35 * strength]
);

const scale = useTransform(
  scrollYProgress,
  [0, 0.45, 1],
  [0.94, 1, 0.97]
);


  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.45, 0.85, 1],
    [0.35, 0.7, 1, 1, 0.45]
  );

  // Tiny 3D tilt.
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [4, 0, -2]
  );

  return (
    <div
      ref={ref}
      className={className}
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        style={{
          y,
          scale,
          opacity,
          rotateX,
          transformOrigin: "center center",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}