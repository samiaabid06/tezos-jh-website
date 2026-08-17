"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Code2,
  Palette,
  FileText,
  ExternalLink,
  Radio,
} from "lucide-react";
import Navbar from "@/components/Navbar";

interface TeamMember {
  name: string;
  role: string;
  icon: React.ReactNode;
  linkedin?: string;
  image?: string;
}

const Credits: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Khubaib",
      role: "Lead Developer",
      icon: <Code2 className="w-4 h-4" />,
      linkedin: "https://linkedin.com/in/khubaib",
    },
    {
      name: "Taaha",
      role: "Developer",
      icon: <Code2 className="w-4 h-4" />,
      linkedin: "https://linkedin.com/in/taha",
    },
    {
      name: "Aatika Kamal",
      role: "Developer",
      icon: <Code2 className="w-4 h-4" />,
      linkedin: "https://linkedin.com/in/aatika",
    },
    {
      name: "Laiba Zeeai",
      role: "Developer",
      icon: <Code2 className="w-4 h-4" />,
      linkedin: "https://linkedin.com/in/laiba-zeeai",
    },
    {
      name: "Heba Faisal",
      role: "Content Manager",
      icon: <FileText className="w-4 h-4" />,
      linkedin: "https://linkedin.com/in/heba-faisal",
    },
    {
      name: "Areeba Aslam",
      role: "Content Manager",
      icon: <FileText className="w-4 h-4" />,
      linkedin: "https://linkedin.com/in/areeba",
    },
    {
      name: "Rakshanda Noor",
      role: "UI/UX Designer",
      icon: <Palette className="w-4 h-4" />,
      linkedin: "https://linkedin.com/in/rakshanda",
    },
    {
      name: "Raina Maryam",
      role: "UI/UX Designer",
      icon: <Palette className="w-4 h-4" />,
      linkedin: "https://linkedin.com/in/raina",
    },
  ];

  const technologies = ["Next.js", "React", "Tailwind CSS", "Framer Motion"];

  return (
    <div className="min-h-screen text-white relative">
      <Navbar />

      <div className="spotlight-zone relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="scan-line inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2C7DF7]/25 bg-[#2C7DF7]/[0.06] mb-6">
              <Radio size={12} className="text-[#00E5FF]" />
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#9fe8ff] uppercase">
                Build Credits
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Who Built <span className="text-tezos-gradient">This</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              This site is entirely built and maintained by the Tezos JH tech
              team — no agency, no template shop.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Users, value: teamMembers.length, label: "Contributors" },
              {
                icon: Code2,
                value: technologies.length,
                label: "Core Technologies",
              },
              { icon: Heart, value: "2025", label: "Built In" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="gradient-border group relative rounded-[1.75rem]"
                >
                  <div className="relative z-10 bg-white/[0.02] border border-white/[0.06] rounded-[1.75rem] p-8 text-center group-hover:bg-white/[0.04] transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2C7DF7]/10 border border-[#2C7DF7]/25 rounded-2xl mb-5">
                      <Icon className="w-6 h-6 text-[#00E5FF]" />
                    </div>
                    <div className="text-3xl font-bold text-tezos-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-mono uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tech pills */}
          <div className="text-center mb-20">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] font-mono mb-6">
              Built With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-white/[0.02] border border-white/[0.06] px-5 py-2.5 rounded-full text-gray-300 text-sm font-mono hover:border-[#2C7DF7]/40 hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Team grid */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12 tracking-tight">
              The Dev Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {teamMembers.map((member, index) => (
                <motion.a
                  key={index}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                  className="gradient-border group relative rounded-[1.5rem]"
                >
                  <div className="relative z-10 bg-white/[0.02] border border-white/[0.06] rounded-[1.5rem] p-7 text-center group-hover:bg-white/[0.04] transition-all duration-300">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-3.5 h-3.5 text-[#00E5FF]" />
                    </div>

                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#2C7DF7]/20 to-[#00E5FF]/10 border border-white/10 flex items-center justify-center group-hover:border-[#2C7DF7]/40 transition-colors">
                      <span className="text-white font-bold text-lg">
                        {member.name.charAt(0)}
                      </span>
                    </div>

                    <div className="inline-flex items-center justify-center w-8 h-8 bg-white/[0.03] border border-white/10 rounded-lg mb-3 text-gray-400 group-hover:text-[#00E5FF] transition-colors">
                      {member.icon}
                    </div>

                    <h3 className="text-white font-semibold text-base mb-1 group-hover:text-[#9fe8ff] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-xs font-mono uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Closing note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="gradient-border relative rounded-[1.75rem]"
          >
            <div className="relative z-10 bg-white/[0.02] border border-white/[0.06] rounded-[1.75rem] p-10 md:p-14 text-center overflow-hidden">
              <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
              <h3 className="relative text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                Every line, shipped by students
              </h3>
              <p className="relative text-gray-400 leading-relaxed max-w-2xl mx-auto">
                No design agency, no outsourced build — this site is a product
                of our own tech team learning and shipping in public.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
