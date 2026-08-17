"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import HeroObject from "@/components/HeroObject";


interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

// Particle network — kept, but now brand-tuned (violet + cyan nodes, not flat blue)
const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const colors = ["44,125,247", "0,229,255", "77,94,255"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];

      const numParticles = Math.min(window.innerWidth / 14, 110);

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.6 + 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -1;
        }

        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, 0.6)`;
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 118) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `rgba(44, 125, 247, ${0.14 - distance / 118})`;

            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);

    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

// Magnetic button — cursor-follow tilt within bounds
const MagneticButton = ({
  children,
  href,
  primary = false,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;

    setPos({ x, y });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{
        x: pos.x,
        y: pos.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 12,
      }}
      className={`relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm overflow-hidden ${
        primary
          ? "bg-white text-[#020204]"
          : "border border-white/15 text-white bg-white/[0.02] backdrop-blur-md"
      }`}
    >
      {children}
    </motion.a>
  );
};

const stats = [
  {
    label: "Members",
    value: "60+",
  },
  {
    label: "Events Hosted",
    value: "12",
  },
  {
    label: "Founded",
    value: "2024",
  },
];

const HeroSection: React.FC = () => {
  const headline = "TEZOS";

  return (
    <div className="spotlight-zone relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <ParticleNetwork />

      <div className="absolute inset-0 grid-overlay z-0 pointer-events-none opacity-60" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020204_100%)] z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-8">
          {/* ==========================================================
              LEFT — HERO CONTENT
          ========================================================== */}

          <motion.div
            className="flex-1 text-center lg:text-left mt-8 lg:mt-[-20px]"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.15,
                },
              },
            }}
          >
            {/* HUD-style status pill */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 12,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
              }}
              className="scan-line inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#2C7DF7]/25 bg-[#2C7DF7]/[0.06] mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] pulse-dot" />

              <span className="text-[11px] text-[#9fe8ff] font-mono tracking-[0.2em] uppercase">
                Live on Web3
              </span>
            </motion.div>

            {/* Per-letter headline reveal */}
            <div className="flex justify-center lg:justify-start mb-1 overflow-hidden">
              {/* Tezos brand mark */}
              {headline.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: {
                      y: "110%",
                      opacity: 0,
                    },
                    visible: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tighter glow-text inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* University */}
            <motion.h2
              variants={{
                hidden: {
                  opacity: 0,
                  y: 16,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-500 mb-8 tracking-tight"
            >
              JAMIA HAMDARD
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 16,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              We&apos;re a student community building, learning, and shipping on
              Tezos — from smart contracts and tooling to the people behind
              them.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 16,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
              }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              <MagneticButton href="https://discord.gg/DHMfYMfu" primary>
                Join the Community <ArrowRight size={16} />
              </MagneticButton>

              <MagneticButton href="https://github.com/tezosjh">
                View on GitHub
              </MagneticButton>
            </motion.div>

            {/* Stat strip — HUD feel */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 16,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
              }}
              className="flex justify-center lg:justify-start gap-8 mb-10 font-mono"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-tezos-gradient">
                    {s.value}
                  </div>

                  <div className="text-[11px] text-gray-500 uppercase tracking-widest mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 16,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
              }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/tezosjh",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/company/tezos-club-jamia-hamdard/",
                },
                {
                  icon: FaTwitter,
                  href: "https://x.com/tezosclubjh",
                },
                {
                  icon: FaDiscord,
                  href: "https://discord.gg/DHMfYMfu",
                },
                {
                  icon: FaYoutube,
                  href: "https://www.youtube.com/@TezosJH",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/tezosclub.jh/",
                },
                {
                  icon: FaWhatsapp,
                  href: "https://chat.whatsapp.com/KE7NMuGrncu3KTfSpvFqmo",
                },
              ].map((social, index) => (
                <div key={index} className="gradient-border rounded-xl">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <social.icon className="text-lg" />
                  </a>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ==========================================================
              RIGHT — FLOATING TEZOS CUBE
          ========================================================== */}

          <motion.div
            className="flex-1 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[520px] relative"
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.3,
            }}
          >
            <HeroObject />
          </motion.div>
        </div>
      </div>

      {/* ==========================================================
          SCROLL CUE
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-mono">
          Scroll
        </span>

        <div className="w-[1px] h-8 bg-gradient-to-b from-[#2C7DF7] to-transparent" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
