"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Members", path: "/members" },
    { name: "Events", path: "/events" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-[#030305]/75 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-2.5 px-5"
            : "bg-[#030305]/20 backdrop-blur-md border border-transparent py-3.5 px-5"
        }`}
      >
        <div className="flex justify-between items-center h-9">
          {/* Logo — unchanged, just wrapped with a signal dot */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="Tezos JH Logo"
              className="h-8 md:h-9 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <span className="hidden sm:flex items-center gap-1.5 pl-2.5 border-l border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] pulse-dot" />
            </span>
          </Link>

          {/* Desktop Menu — real moving indicator across ALL links */}
          <div className="hidden md:flex items-center gap-1 relative">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative px-4 py-2 text-sm font-medium"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/[0.08]"
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA — subtle magnetic-feel hover, no gimmicky expanding circle */}
          <div className="hidden md:block">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSez2eFOWo1-tg3415GIub6zA4LhOSeAW35FSe4pbOaAJ7W6Ew/viewform"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-[#030305] bg-white rounded-full overflow-hidden transition-transform duration-300 hover:scale-[1.04]"
            >
              <span className="relative z-10">Join Us</span>
              <ArrowUpRight
                size={14}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span className="absolute inset-0 bg-gradient-to-r from-[#00E5FF] to-[#2C7DF7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu — staggered reveal instead of a flat fade */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#030305]/97 backdrop-blur-3xl md:hidden pt-32 px-6"
          >
            <div className="absolute inset-0 grid-overlay pointer-events-none" />
            <motion.div
              className="relative flex flex-col space-y-2 text-center"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {links.map((link) => (
                <motion.div
                  key={link.path}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-3xl font-bold tracking-tight ${
                      pathname === link.path
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2C7DF7] to-[#00E5FF]"
                        : "text-gray-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSez2eFOWo1-tg3415GIub6zA4LhOSeAW35FSe4pbOaAJ7W6Ew/viewform"
                target="_blank"
                rel="noreferrer"
                className="mt-8 mx-auto w-full max-w-xs py-4 bg-white text-[#030305] rounded-full font-bold text-lg"
              >
                Join the Community
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;