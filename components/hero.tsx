"use client";

import React, { useEffect, useRef } from "react";
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

// Lightweight Interactive Blockchain Particle Background
const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: any[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.min(window.innerWidth / 15, 100); // Responsive amount
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(44, 125, 247, 0.5)"; // Tezos Blue
        ctx.fill();

        // Draw connecting lines
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(44, 125, 247, ${0.15 - distance / 120})`;
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

const HeroSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030305]">
      {/* 1. Background Effects */}
      <ParticleNetwork />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2C7DF7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Radial Gradient overlay to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030305_100%)] z-0 pointer-events-none" />

      {/* 2. Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left: Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left mt-16 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tech Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2C7DF7]/30 bg-[#2C7DF7]/5 mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs sm:text-sm text-[#00E5FF] font-medium tracking-wide uppercase">
                Innovating on Web3
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-2"
            >
              TEZOS
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-400 mb-8"
            >
              JAMIA HAMDARD
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-sans"
            >
              A student-driven blockchain community fostering innovation,
              research, and real-world applications on the{" "}
              <span className="text-white font-medium">Tezos ecosystem</span>.
            </motion.p>

            {/* Social Links (Premium Glass Style) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {[
                { icon: FaGithub, href: "https://github.com/tezosjh" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/company/tezos-club-jamia-hamdard/",
                },
                { icon: FaTwitter, href: "https://x.com/tezosclubjh" },
                { icon: FaDiscord, href: "https://discord.gg/DHMfYMfu" },
                { icon: FaYoutube, href: "https://www.youtube.com/@TezosJH" },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/tezosclub.jh/",
                },
                {
                  icon: FaWhatsapp,
                  href: "https://chat.whatsapp.com/KE7NMuGrncu3KTfSpvFqmo",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.05] text-gray-400 hover:text-white hover:bg-[#2C7DF7]/10 hover:border-[#2C7DF7]/50 hover:shadow-[0_0_20px_rgba(44,125,247,0.2)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Floating 3D Cube */}
          <motion.div
            className="flex-1 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Soft glow specifically behind the cube */}
            <div className="absolute inset-0 bg-[#2C7DF7]/20 blur-[100px] rounded-full z-0" />

            <motion.img
              src="/cube6.png"
              alt="Tezos 3D Cube"
              className="w-full h-auto relative z-10 drop-shadow-[0_0_30px_rgba(44,125,247,0.15)]"
              animate={{
                y: [0, -20, 0],
                rotateZ: [-2, 2, -2], // Very subtle rotation
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
