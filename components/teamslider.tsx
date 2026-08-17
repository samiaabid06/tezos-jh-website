"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Camera,
  Code,
  Film,
  Megaphone,
  Handshake,
  Users,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface Team {
  id: number;
  name: string;
  description: string;
  details: string;
  memberCount: number;
  technologies: string[];
  icon: React.ReactNode;
}

const TeamSliderCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teams: Team[] = [
    {
      id: 1,
      name: "CONTENT TEAM",
      description: "Turning ideas into words that inform and spark curiosity.",
      details:
        "Writes the blogs, event recaps, and technical breakdowns that make up most of what you're reading right now on this site.",
      memberCount: 6,
      technologies: ["Hashnode", "Medium", "Technical Writing"],
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: 2,
      name: "GRAPHICS TEAM",
      description: "Designs the visuals that carry every event and post.",
      details:
        "Handles posters, social creatives, and brand visuals — everything that gives our events a consistent, recognizable look.",
      memberCount: 4,
      technologies: ["Figma", "Illustrator", "Canva"],
      icon: <Camera className="w-5 h-5" />,
    },
    {
      id: 3,
      name: "TECH TEAM",
      description: "Builds and ships the actual code — this site included.",
      details:
        "Owns everything technical: this website, event tooling, workshop material, and hands-on blockchain project mentorship.",
      memberCount: 6,
      technologies: ["Next.js", "Tailwind", "Smart Contracts"],
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: 4,
      name: "MEDIA TEAM",
      description: "Captures every event through photo and video.",
      details:
        "Handles on-ground photography, event videography, and after-movies — the reason our past events have visual records at all.",
      memberCount: 4,
      technologies: ["Photography", "Video Editing", "Production"],
      icon: <Film className="w-5 h-5" />,
    },
    {
      id: 5,
      name: "SOCIAL MEDIA TEAM",
      description: "Runs our online presence day to day.",
      details:
        "Plans and posts across Instagram, X, and Discord — keeping the community informed between events, not just during them.",
      memberCount: 7,
      technologies: ["Strategy", "Analytics", "Community Management"],
      icon: <Megaphone className="w-5 h-5" />,
    },
    {
      id: 6,
      name: "PR TEAM",
      description: "Handles outreach, sponsors, and external partnerships.",
      details:
        "The point of contact for sponsors, speakers, and partner clubs — manages everything that connects us to the outside.",
      memberCount: 5,
      technologies: ["Outreach", "Partnerships", "Communication"],
      icon: <Handshake className="w-5 h-5" />,
    },
  ];

  const totalSlides = teams.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const active = teams[currentIndex];

  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Our <span className="text-tezos-gradient">Departments</span>
        </h2>
        <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">
          Six teams, one club
        </p>
      </div>

      <div className="relative group">
        <div className="gradient-border relative rounded-[1.75rem]">
          <div className="relative z-10 overflow-hidden rounded-[1.75rem] bg-[#08080c] border border-white/[0.06] backdrop-blur-2xl shadow-2xl">
            <div className="grid md:grid-cols-5 min-h-[380px]">
              {/* Left: icon + stat panel */}
              <div className="md:col-span-2 relative p-10 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#2C7DF7]/[0.08] to-transparent border-b md:border-b-0 md:border-r border-white/[0.06]">
                <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
                <motion.div
                  key={active.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 w-20 h-20 rounded-2xl bg-[#2C7DF7]/10 border border-[#2C7DF7]/30 flex items-center justify-center text-[#00E5FF] mb-6"
                >
                  {active.icon}
                </motion.div>
                <div className="relative z-10 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-[#9fe8ff]" />
                  <span className="text-sm font-mono font-medium text-white">
                    {active.memberCount} Members
                  </span>
                </div>
              </div>

              {/* Right: content */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                    {active.name}
                  </h3>
                  <p className="text-[#9fe8ff] font-medium mb-4 text-sm">
                    {active.description}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                    {active.details}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-mono">
                      Core Focus
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {active.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono text-gray-300 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="/members"
                    className="group/btn inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#00E5FF] transition-colors"
                  >
                    View Team Members
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-[#020204]/60 hover:bg-[#2C7DF7]/20 backdrop-blur-md border border-white/10 text-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-[#020204]/60 hover:bg-[#2C7DF7]/20 backdrop-blur-md border border-white/10 text-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-8 max-w-xs mx-auto">
        <div className="w-full bg-white/[0.05] rounded-full h-1 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-[#2C7DF7] to-[#00E5FF] h-full rounded-full"
            animate={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="flex justify-center gap-1.5 mt-4">
          {teams.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-6 bg-[#00E5FF]" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSliderCards;
