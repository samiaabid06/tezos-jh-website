"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealType = "fadeUp" | "fadeScale" | "slideLeft" | "slideRight" | "zoom";

interface ScrollRevealProps {
  children: ReactNode;
  type?: RevealType;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  type = "fadeUp",
  delay = 0,
  duration = 0.8,
  className = "",
}: ScrollRevealProps) {
  const variants = {
    fadeUp: {
      hidden: {
        opacity: 0,
        y: 70,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },

    fadeScale: {
      hidden: {
        opacity: 0,
        y: 40,
        scale: 0.94,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
    },

    slideLeft: {
      hidden: {
        opacity: 0,
        x: -80,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },

    slideRight: {
      hidden: {
        opacity: 0,
        x: 80,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },

    zoom: {
      hidden: {
        opacity: 0,
        scale: 0.88,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={variants[type]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
