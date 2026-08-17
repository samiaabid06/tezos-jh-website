"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollGrid({
  opacity = 0.3,
  className = "",
}: {
  opacity?: number;
  className?: string;
}) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 2000], [0, -120]);

  return (
    <motion.div
      className={`absolute inset-0 grid-overlay pointer-events-none ${className}`}
      style={{
        y,
        opacity,
      }}
    />
  );
}
