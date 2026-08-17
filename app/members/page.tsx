"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Users,
  Radio,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { teamData, Member } from "@/data/teamData";

export default function MembersPage() {
  const [selectedTeam, setSelectedTeam] = useState<string>("Tech Team");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const members = teamData[selectedTeam] || [];
  const teams = Object.keys(teamData);

  const shouldShowCrown = (role: string) => {
    const crownRoles = [
      "head",
      "co-head",
      "cohead",
      "coordinator",
      "lead",
      "director",
      "chairperson",
    ];
    return crownRoles.some((r) => role.toLowerCase().includes(r));
  };

  const TeamSelector = () => (
    <div className="flex flex-wrap gap-2">
      {teams.map((team) => (
        <button
          key={team}
          onClick={() => {
            setSelectedTeam(team);
            setSelectedMember(null);
          }}
          className={`relative px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide uppercase transition-all duration-300 ${
            selectedTeam === team
              ? "bg-[#2C7DF7]/10 border border-[#2C7DF7]/40 text-[#9fe8ff] shadow-[0_0_15px_rgba(44,125,247,0.12)]"
              : "bg-white/[0.02] border border-white/10 text-gray-500 hover:text-white hover:bg-white/[0.05] hover:border-white/20"
          }`}
        >
          {team}
        </button>
      ))}
    </div>
  );

  const MemberCard = ({
    member,
    isSelected,
    onClick,
  }: {
    member: Member;
    isSelected: boolean;
    onClick: (member: Member) => void;
  }) => (
    <motion.div
      whileHover={{ x: 3 }}
      onClick={() => onClick(member)}
      className={`gradient-border group cursor-pointer relative rounded-2xl transition-all duration-300 ${
        isSelected ? "scale-[1.01]" : ""
      }`}
    >
      <div
        className={`relative z-10 p-4 rounded-2xl border transition-all duration-300 ${
          isSelected
            ? "bg-[#2C7DF7]/[0.06] border-[#2C7DF7]/40"
            : "bg-white/[0.02] border-white/[0.06] group-hover:bg-white/[0.04]"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <div
              className={`w-14 h-14 rounded-full overflow-hidden border ${
                isSelected
                  ? "border-[#00E5FF]"
                  : "border-white/10 group-hover:border-[#2C7DF7]/50"
              } transition-colors`}
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full bg-[#2C7DF7]/20 flex items-center justify-center text-white font-bold">
                  {member.name.charAt(0)}
                </div>
              )}
            </div>
            {shouldShowCrown(member.position) && (
              <div className="absolute -top-1 -right-1 bg-[#020204] rounded-full p-0.5">
                <Crown className="w-4 h-4 text-[#00E5FF]" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3
              className={`font-semibold truncate transition-colors ${isSelected ? "text-white" : "text-gray-200 group-hover:text-white"}`}
            >
              {member.name}
            </h3>
            <p className="text-[#9fe8ff] text-[11px] font-mono tracking-wide uppercase truncate mt-0.5">
              {member.position}
            </p>
          </div>

          <ChevronRight
            className={`w-5 h-5 transition-transform ${isSelected ? "text-[#00E5FF] translate-x-1" : "text-gray-600 group-hover:text-gray-400"}`}
          />
        </div>
      </div>
    </motion.div>
  );

  const MemberDetails = ({ member }: { member: Member }) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="gradient-border relative rounded-[1.75rem] h-full"
    >
      <div className="relative z-10 bg-[#08080c] border border-white/[0.06] backdrop-blur-xl rounded-[1.75rem] overflow-hidden shadow-2xl h-full flex flex-col">
        {/* Profile Header */}
        <div className="scan-line relative p-8 md:p-10 flex flex-col items-center text-center border-b border-white/[0.06]">
          <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

          <div className="relative mb-6">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border border-white/15 relative z-10 shadow-[0_0_40px_rgba(44,125,247,0.15)]">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#2C7DF7]/20 flex items-center justify-center text-4xl text-white font-bold">
                  {member.name.charAt(0)}
                </div>
              )}
            </div>
            {shouldShowCrown(member.position) && (
              <div className="absolute -top-2 -right-2 bg-[#020204] border border-white/10 rounded-full p-2 z-20 shadow-lg">
                <Crown className="w-6 h-6 text-[#00E5FF]" />
              </div>
            )}
          </div>

          <h2 className="relative text-3xl font-bold text-white mb-2 tracking-tight">
            {member.name}
          </h2>

          <div className="relative inline-flex items-center gap-2 bg-[#2C7DF7]/10 border border-[#2C7DF7]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] pulse-dot" />
            <span className="text-[#9fe8ff] text-xs font-mono font-semibold tracking-widest uppercase">
              {member.position}
            </span>
          </div>

          {member.bio && (
            <p className="relative text-gray-400 leading-relaxed max-w-md mx-auto text-sm">
              {member.bio}
            </p>
          )}
        </div>

        {/* Contact & Socials */}
        <div className="p-8 md:p-10 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-3 mb-8">
            {member.gmail && (
              <div className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 hover:bg-white/[0.04] transition-colors">
                <div className="bg-[#2C7DF7]/10 p-2.5 rounded-xl border border-[#2C7DF7]/20">
                  <Mail className="w-5 h-5 text-[#2C7DF7]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-mono">
                    Email
                  </p>
                  <a
                    href={`mailto:${member.gmail}`}
                    className="text-gray-200 text-sm font-medium truncate hover:text-[#00E5FF] transition-colors block"
                  >
                    {member.gmail}
                  </a>
                </div>
              </div>
            )}

          </div>

          {(member.github || member.linkedin || member.x) && (
            <div className="flex justify-center gap-3 mt-auto">
              {member.github && (
                <div className="gradient-border rounded-xl">
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              )}
              {member.linkedin && (
                <div className="gradient-border rounded-xl">
                  <a
                    href={`https://linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              )}
              {member.x && (
                <div className="gradient-border rounded-xl">
                  <a
                    href={`https://twitter.com/${member.x}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen text-white pt-24 pb-16 relative">
      <Navbar />

      <div className="spotlight-zone relative px-6 text-center mb-16 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="scan-line inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2C7DF7]/25 bg-[#2C7DF7]/[0.06] mb-6">
            <Radio size={12} className="text-[#00E5FF]" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#9fe8ff] uppercase">
              Roster
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Meet The <span className="text-tezos-gradient">Team</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            The students, developers, and visionaries driving Tezos Jamia
            Hamdard forward.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 min-h-[700px]">
          {/* Left: selector + list */}
          <div className="w-full lg:w-5/12 xl:w-1/3 flex flex-col gap-6">
            <div className="glass-panel rounded-3xl p-6">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2 font-mono">
                <Users className="w-4 h-4 text-[#2C7DF7]" /> Select Department
              </h3>
              <TeamSelector />
            </div>

            <div className="glass-panel rounded-3xl p-6 flex-1 flex flex-col h-[500px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 font-mono">
                  <Radio className="w-4 h-4 text-[#00E5FF]" /> Members
                </h3>
                <div className="bg-[#2C7DF7]/15 border border-[#2C7DF7]/25 rounded-full px-2.5 py-0.5 text-xs text-[#9fe8ff] font-mono font-medium">
                  {members.length}
                </div>
              </div>

              <div className="space-y-2 overflow-y-auto pr-1 scrollbar-hide flex-1">
                {members.map((member) => (
                  <MemberCard
                    key={member.name}
                    member={member}
                    isSelected={selectedMember?.name === member.name}
                    onClick={setSelectedMember}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: detail panel */}
          <div className="w-full lg:w-7/12 xl:w-2/3">
            <AnimatePresence mode="wait">
              {selectedMember ? (
                <MemberDetails member={selectedMember} />
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[400px] flex flex-col items-center justify-center bg-white/[0.01] border border-white/[0.06] border-dashed rounded-[1.75rem] p-12 text-center"
                >
                  <div className="w-20 h-20 bg-white/[0.02] rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-300 mb-2">
                    Select a Member
                  </h3>
                  <p className="text-gray-500 max-w-sm">
                    Choose a profile from the left to view their role and social
                    links.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
