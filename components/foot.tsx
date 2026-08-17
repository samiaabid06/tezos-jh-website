"use client";

import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  ExternalLink,
  Users,
  Mic,
  Handshake,
  BookOpen,
  MapPin,
  ChevronRight,
  MessageCircle,
  Youtube,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/tezosjh" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/tezos-club-jamia-hamdard/" },
    { name: "Twitter", icon: Twitter, url: "https://x.com/tezosclubjh" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://chat.whatsapp.com/KE7NMuGrncu3KTfSpvFqmo" },
    { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@TezosJH" },
    { name: "Discord", icon: Users, url: "https://discord.gg/DHMfYMfu" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/tezosclub.jh/" },
  ];

  const quickActions = [
    { title: "Call for Speakers", icon: Mic, description: "Share your blockchain expertise with the club", action: "Apply Now" },
    { title: "Sponsor Us", icon: Handshake, description: "Partner with a growing dev community", action: "Become Sponsor" },
    { title: "Join Community", icon: Users, description: "Be part of the build sessions and events", action: "Join Discord" },
    { title: "Read Blogs", icon: BookOpen, description: "Tutorials and write-ups from our devs", action: "Read Articles" },
  ];

  return (
    <div className="relative w-full overflow-hidden border-t border-white/[0.06]">
      {/* Pre-Footer CTA */}
      <section className="spotlight-zone relative py-24 border-b border-white/[0.06]">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="scan-line inline-flex items-center space-x-2 bg-[#2C7DF7]/[0.06] border border-[#2C7DF7]/25 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] pulse-dot" />
              <span className="text-[#9fe8ff] text-[11px] font-mono font-medium uppercase tracking-[0.2em]">
                Connect With Us
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Build The <span className="text-tezos-gradient">Decentralized Web</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A student community on the Tezos ecosystem — builders, designers,
              and curious minds figuring it out together.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-20">
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="gradient-border group relative rounded-[1.75rem]"
                >
                  <div className="relative z-10 bg-white/[0.02] border border-white/[0.06] rounded-[1.75rem] p-6 group-hover:bg-white/[0.04] transition-all duration-500">
                    <div className="w-12 h-12 bg-white/[0.04] border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2C7DF7]/15 group-hover:border-[#2C7DF7]/40 transition-colors">
                      <Icon className="text-gray-300 group-hover:text-[#00E5FF] transition-colors" size={20} />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{action.title}</h3>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{action.description}</p>
                    <button className="flex items-center text-sm font-medium text-[#2C7DF7] group-hover:text-[#00E5FF] transition-colors">
                      {action.action}
                      <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Social row */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-[#2C7DF7]/10 hover:border-[#2C7DF7]/40 transition-all duration-300"
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium hidden sm:block">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="relative pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2C7DF7] to-[#00E5FF] rounded-xl flex items-center justify-center">
                  <Code className="text-white w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Tezos JH</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                A student-run society building on Tezos — real projects, real
                shipping, real community.
              </p>
              <div className="flex flex-col space-y-2 pt-2">
                <a href="mailto:tezosjh@gmail.com" className="text-gray-300 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-2">
                  <Mail size={14} /> tezosjh@gmail.com
                </a>
                <span className="text-gray-500 text-sm flex items-center gap-2">
                  <MapPin size={14} /> Jamia Hamdard, New Delhi
                </span>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase font-mono">Explore</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Members", href: "/members" },
                  { name: "Events", href: "/events" },
                  { name: "Blogs", href: "/blogs" },
                  { name: "Credits", href: "/credits" },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase font-mono">Resources</h4>
              <ul className="space-y-3">
                {["Documentation", "Developer Portal", "Tezos Agora", "SmartPy", "Temple Wallet"].map((res) => (
                  <li key={res}>
                    <a href="#" className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-2">
                      {res} <ExternalLink size={12} className="opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase font-mono">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {["Tezos", "Michelson", "LIGO", "SmartPy", "Next.js", "Tailwind"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] text-gray-400 text-xs rounded-lg font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-mono">
              <span>© {currentYear} Tezos Jamia Hamdard</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;