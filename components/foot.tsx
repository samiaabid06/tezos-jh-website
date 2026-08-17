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
  Globe,
  Award,
  ChevronRight,
  MessageCircle,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollGrid from "@/components/ScrollGrid";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/tezosjh" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/tezos-club-jamia-hamdard/",
    },
    { name: "Twitter", icon: Twitter, url: "https://x.com/tezosclubjh" },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://chat.whatsapp.com/KE7NMuGrncu3KTfSpvFqmo",
    },
    { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@TezosJH" },
    { name: "Discord", icon: Users, url: "https://discord.gg/DHMfYMfu" },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/tezosclub.jh/",
    },
  ];

  const quickActions = [
    {
      title: "Call for Speakers",
      icon: Mic,
      description: "Share your blockchain expertise with the club",
      action: "Apply Now",
    },
    {
      title: "Sponsor Us",
      icon: Handshake,
      description: "Partner with a growing dev community",
      action: "Become Sponsor",
    },
    {
      title: "Join Community",
      icon: Users,
      description: "Be part of the build sessions and events",
      action: "Join Discord",
    },
    {
      title: "Read Blogs",
      icon: BookOpen,
      description: "Tutorials and write-ups from our devs",
      action: "Read Articles",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden border-t border-white/[0.06]">
      {/* Pre-Footer CTA */}
      <section className="spotlight-zone relative py-24 border-b border-white/[0.06]">
        <ScrollGrid opacity={0.4} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="scan-line inline-flex items-center space-x-2 bg-[#2C7DF7]/[0.06] border border-[#2C7DF7]/25 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] pulse-dot" />
              <span className="text-[#9fe8ff] text-[11px] font-mono font-medium uppercase tracking-[0.2em]">
                Connect With Us
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Build The{" "}
              <span className="text-tezos-gradient">Decentralized Web</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Join India&apos;s most dynamic blockchain society where students,
              developers, and enthusiasts come together to shape the
              decentralized future with{" "}
              <span className="text-purple-400 font-semibold">
                Tezos technology
              </span>
              .
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { number: "100+", label: "Members" },
                { number: "25+", label: "Events" },
                { number: "15+", label: "Workshops" },
                { number: "50+", label: "Projects" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-purple-300 text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
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
                      <Icon
                        className="text-gray-300 group-hover:text-[#00E5FF] transition-colors"
                        size={20}
                      />
                    </div>

                    <h3 className="text-white font-bold text-lg mb-2">
                      {action.title}
                    </h3>

                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      {action.description}
                    </p>

                    <button className="flex items-center text-sm font-medium text-[#2C7DF7] group-hover:text-[#00E5FF] transition-colors">
                      {action.action}
                      <ChevronRight
                        size={16}
                        className="ml-1 transition-transform group-hover:translate-x-1"
                      />
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
                  <span className="text-sm font-medium hidden sm:block">
                    {social.name}
                  </span>
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
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Tezos JH
                </h3>

                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] pulse-dot" />
              </div>

              <p className="text-gray-400 leading-relaxed">
                India&apos;s premier student-led blockchain society, empowering
                the next generation of developers to build revolutionary
                decentralized applications on the Tezos ecosystem.
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin size={16} className="text-purple-400" />
                  <span>New Delhi, India</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Globe size={16} className="text-purple-400" />
                  <span>Global Community</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase font-mono">
                Explore
              </h4>

              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Members", href: "/members" },
                  { name: "Events", href: "/events" },
                  { name: "Blogs", href: "/blogs" },
                  { name: "Credits", href: "/credits" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase font-mono">
                Resources
              </h4>

              <ul className="space-y-3">
                {[
                  "Documentation",
                  "Developer Portal",
                  "Tezos Agora",
                  "SmartPy",
                  "Temple Wallet",
                ].map((res) => (
                  <li key={res}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm flex items-center gap-2"
                    >
                      {res}
                      <ExternalLink size={12} className="opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase font-mono">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2">
                {[
                  "Tezos",
                  "Michelson",
                  "LIGO",
                  "SmartPy",
                  "Next.js",
                  "Tailwind",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] text-gray-400 text-xs rounded-lg font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* University Banner - Responsive */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-slate-800">
            <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                <Award className="text-purple-400" size={24} />

                <div>
                  <h5 className="text-xl sm:text-2xl font-bold text-white">
                    Jamia Hamdard University
                  </h5>

                  <p className="text-purple-300 text-sm sm:text-base">
                    Fostering Innovation in Blockchain &amp; Web3
                  </p>
                </div>
              </div>

              <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                Recognized as one of India&apos;s leading institutions for
                technology education, supporting student-led initiatives that
                drive innovation in emerging technologies.
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 mt-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>

              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>

              <a href="#" className="hover:text-white transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            © {currentYear} Tezos JH. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;