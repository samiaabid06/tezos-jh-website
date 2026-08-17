"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";

const orbitTags = [
  { label: "LIGO", angle: 0 },
  { label: "SmartPy", angle: 60 },
  { label: "Michelson", angle: 120 },
  { label: "Web3", angle: 180 },
];

const particles = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  radius: 85 + Math.random() * 110,
  speed: 8 + Math.random() * 16,
  size: 1.5 + Math.random() * 3.5,
  delay: Math.random() * -20,
  tiltX: Math.random() * 360,
  tiltZ: Math.random() * 360,
  color: i % 3 === 0 ? "#00E5FF" : i % 3 === 1 ? "#2C7DF7" : "#9fe8ff",
  beam: i % 4 === 0,
}));

function useTicker(target: number, duration = 2000, startDelay = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      const controls = animate(0, target, {
        duration: duration / 1000,
        ease: "easeOut",
        onUpdate: (v) => setValue(Math.floor(v)),
      });

      return () => controls.stop();
    }, startDelay);

    return () => clearTimeout(t);
  }, [target, duration, startDelay]);

  return value;
}

export default function HeroObject() {
  const ref = useRef<HTMLDivElement>(null);

  const [hovering, setHovering] = useState(false);
  const [materialized, setMaterialized] = useState(false);

  const autoRotate = useMotionValue(0);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [18, -18]), {
    stiffness: 100,
    damping: 20,
  });

  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), {
    stiffness: 100,
    damping: 20,
  });

  /*
   * Tezos logo rotates independently from the cube.
   */
  const logoRotate = useMotionValue(0);

  useEffect(() => {
    const controls = animate(logoRotate, 360, {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    });

    return () => controls.stop();
  }, [logoRotate]);

  /*
   * Materialize animation
   */
  useEffect(() => {
    const t = setTimeout(() => {
      setMaterialized(true);
    }, 200);

    return () => clearTimeout(t);
  }, []);

  /*
   * Cube rotation
   */
  useEffect(() => {
    const controls = animate(autoRotate, 360, {
      duration: 24,
      repeat: Infinity,
      ease: "linear",
    });

    return () => controls.stop();
  }, [autoRotate]);

  const spinY = useTransform(autoRotate, (v) => v);

  /*
   * Mouse interaction
   */
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;

    if (!el) return;

    const rect = el.getBoundingClientRect();

    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
    setHovering(false);
  };

  /*
   * HUD values
   */
  const blockHeight = useTicker(4829173, 2400, 600);
  const tps = useTicker(38, 1800, 900);

  const faceBase = "absolute inset-0 flex items-center justify-center border";

  const faceGlow =
    "0 0 30px rgba(44,125,247,0.18), inset 0 0 30px rgba(0,229,255,0.08)";

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleLeave}
      className="relative w-full aspect-square flex items-center justify-center"
      style={{ perspective: "1400px" }}
    >
      {/* ==========================================================
          AMBIENT GLOW
      ========================================================== */}

      <div className="absolute inset-0 bg-[#2C7DF7]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute w-[50%] h-[50%] bg-[#00E5FF]/15 blur-[80px] rounded-full pointer-events-none animate-float-slow" />

      <div className="absolute bottom-[8%] w-[45%] h-6 bg-[#2C7DF7]/25 blur-2xl rounded-full pointer-events-none" />

      {/* ==========================================================
          MATERIALIZE SWEEP FLASH
      ========================================================== */}

      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        initial={{ opacity: 0.9, scale: 0.3 }}
        animate={{ opacity: 0, scale: 1.6 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: 0.15,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.5), transparent 70%)",
        }}
      />

      {/* ==========================================================
          ORBIT RINGS
      ========================================================== */}

      <motion.div
        className="absolute w-[92%] h-[92%] rounded-full border border-[#2C7DF7]/15 pointer-events-none"
        style={{ rotateX: 70 }}
        animate={{ rotateZ: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-[75%] h-[75%] rounded-full border border-[#00E5FF]/20 pointer-events-none"
        style={{ rotateX: 70 }}
        animate={{ rotateZ: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-[#4D5EFF]/20 pointer-events-none"
        style={{ rotateX: 70 }}
        animate={{ rotateZ: 360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ==========================================================
          PARTICLE FIELD
      ========================================================== */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute top-1/2 left-1/2"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateY: 360,
            }}
            transition={{
              duration: p.speed,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          >
            <div
              style={{
                transform: `rotateX(${p.tiltX}deg) rotateZ(${p.tiltZ}deg) translateX(${p.radius}px)`,
              }}
            >
              <motion.div
                className="rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  boxShadow: `0 0 8px ${p.color}`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {p.beam && (
                <div
                  className="absolute top-1/2 right-full h-px origin-right"
                  style={{
                    width: p.radius,
                    background: `linear-gradient(to left, ${p.color}55, transparent)`,
                  }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ==========================================================
          ORBITING TECH TAGS
          
          Rollups removed
          L1 removed
      ========================================================== */}

      <motion.div
        className="absolute w-[92%] h-[92%] pointer-events-none z-10"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {orbitTags.map((tag, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `rotate(${tag.angle}deg) translate(0, -50%)`,
              transformOrigin: "center 0",
            }}
          >
            <motion.div
              className="px-2.5 py-1 rounded-full bg-[#08080c]/95 border border-[#2C7DF7]/40 text-[9px] font-mono text-[#9fe8ff] tracking-wider uppercase whitespace-nowrap shadow-[0_0_12px_rgba(44,125,247,0.15)]"
              style={{
                transform: `rotate(-${tag.angle}deg)`,
              }}
              animate={{
                boxShadow: [
                  "0 0 12px rgba(44,125,247,0.15)",
                  "0 0 20px rgba(0,229,255,0.35)",
                  "0 0 12px rgba(44,125,247,0.15)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            >
              {tag.label}
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* ==========================================================
          THE CUBE
      ========================================================== */}

      <motion.div
        initial={{
          scale: 0.2,
          opacity: 0,
        }}
        animate={
          materialized
            ? {
                scale: 1,
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          rotateX: tiltX,
          rotateY: spinY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 z-20"
      >
        <motion.div
          style={{
            rotateY: tiltY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full"
        >
          {[
            {
              t: "translateZ(90px)",
              bg: "linear-gradient(135deg, rgba(44,125,247,0.22), rgba(0,229,255,0.1))",
              border: "border-[#00E5FF]/60",
            },
            {
              t: "translateZ(-90px) rotateY(180deg)",
              bg: "linear-gradient(135deg, rgba(0,229,255,0.14), rgba(44,125,247,0.18))",
              border: "border-[#2C7DF7]/50",
            },
            {
              t: "rotateY(90deg) translateZ(90px)",
              bg: "linear-gradient(135deg, rgba(77,94,255,0.2), rgba(44,125,247,0.1))",
              border: "border-[#4D5EFF]/50",
            },
            {
              t: "rotateY(-90deg) translateZ(90px)",
              bg: "linear-gradient(135deg, rgba(44,125,247,0.12), rgba(0,229,255,0.18))",
              border: "border-[#2C7DF7]/50",
            },
            {
              t: "rotateX(90deg) translateZ(90px)",
              bg: "linear-gradient(135deg, rgba(0,229,255,0.3), rgba(255,255,255,0.08))",
              border: "border-[#00E5FF]/70",
            },
            {
              t: "rotateX(-90deg) translateZ(90px)",
              bg: "linear-gradient(135deg, rgba(19,72,201,0.32), rgba(0,0,0,0.28))",
              border: "border-[#1348C9]/50",
            },
          ].map((face, i) => (
            <div
              key={i}
              className={`${faceBase} ${face.border}`}
              style={{
                transform: face.t,
                background: face.bg,
                boxShadow: faceGlow,
              }}
            >
              {/* Scan sweep light */}
              <motion.div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                  mixBlendMode: "screen",
                }}
              >
                <motion.div
                  className="absolute top-0 left-[-40%] w-[40%] h-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(0,229,255,0.35), transparent)",
                  }}
                  animate={{
                    left: ["-40%", "140%"],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ==========================================================
          FLOATING TEZOS LOGO
          
          This is completely independent of the cube.
          It stays centered while the cube rotates underneath.
      ========================================================== */}

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
        style={{
          rotateY: logoRotate,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Logo glow */}
          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-[#00E5FF]/20 blur-[35px]" />

          {/* Tezos logo */}
          <span
            className="relative text-8xl sm:text-9xl lg:text-[11rem] font-bold text-tezos-gradient drop-shadow-[0_0_25px_rgba(0,229,255,0.45)]"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              lineHeight: 1,
              transform: "translateZ(25px)",
            }}
          >
            ꜩ
          </span>
        </motion.div>
      </motion.div>

      {/* ==========================================================
          PULSE RINGS
      ========================================================== */}

      <motion.div
        className="absolute w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full border border-[#00E5FF]/40 pointer-events-none z-25"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full border border-[#2C7DF7]/30 pointer-events-none z-25"
        animate={{
          scale: [1, 1.7, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1.2,
        }}
      />

      {/* ==========================================================
          HOVER GLITCH
      ========================================================== */}

      {hovering && (
        <motion.div
          className="absolute w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 pointer-events-none mix-blend-screen z-40"
          animate={{
            x: [0, 2, -2, 1, 0],
            opacity: [0, 0.4, 0, 0.3, 0],
          }}
          transition={{
            duration: 0.25,
            repeat: Infinity,
            repeatDelay: 1.4,
          }}
          style={{
            background:
              "linear-gradient(90deg, rgba(255,0,80,0.15), transparent 40%, rgba(0,229,255,0.15))",
          }}
        />
      )}

      {/* ==========================================================
          LIVE HUD
      ========================================================== */}

      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-none z-50"
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.4,
          duration: 0.6,
        }}
      >
        <div className="px-3 py-1.5 rounded-lg bg-[#08080c]/80 border border-white/[0.08] backdrop-blur-md">
          <div className="text-[8px] text-gray-500 font-mono uppercase tracking-widest">
            Block
          </div>

          <div className="text-xs font-mono text-[#9fe8ff] tabular-nums">
            #{blockHeight.toLocaleString()}
          </div>
        </div>

        <div className="px-3 py-1.5 rounded-lg bg-[#08080c]/80 border border-white/[0.08] backdrop-blur-md">
          <div className="text-[8px] text-gray-500 font-mono uppercase tracking-widest">
            TPS
          </div>

          <div className="text-xs font-mono text-[#00E5FF] tabular-nums flex items-center gap-1">
            {tps}

            <span className="w-1 h-1 rounded-full bg-[#00E5FF] pulse-dot" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
