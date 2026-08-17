"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Radio } from "lucide-react";
import ScrollGrid from "@/components/ScrollGrid";

interface BoardMember {
  id: number;
  name: string;
  position: string;
  image: string;
  github: string;
  linkedin: string;
  email: string;
}

export default function BoardMembers() {
  const boardMembers: BoardMember[] = [
    {
      id: 1,
      name: "Naumaan Ali Siddiqui",
      position: "Chairperson",
      image: "/members/noumaan.jpeg",
      github: "",
      linkedin: "https://www.linkedin.com/in/naumaan-siddiqui-24976b261",
      email: "mailto:naumaansiddiqui10@gmail.com",
    },
    {
      id: 2,
      name: "Rakshanda Noor",
      position: "Community Lead",
      image: "/members/rakshanda.jpg",
      github: "https://github.com/rakshanda33",
      linkedin: "https://www.linkedin.com/in/rakshanda-noor-9aaa24291",
      email: "mailto:rakshandanoor20@gmail.com",
    },
    {
      id: 3,
      name: "Shezan Ali",
      position: "Community Co-Lead",
      image: "/members/shezan.jpg",
      github: "",
      linkedin: "https://www.linkedin.com/in/shezanali",
      email: "mailto:shezan.workspace@gmail.com",
    },
    {
      id: 4,
      name: "Arham",
      position: "Community Co-Lead",
      image: "/members/arham.jpg",
      github: "",
      linkedin: "",
      email: "",
    },
    {
      id: 5,
      name: "Mohammed Fardeen",
      position: "General Secretary",
      image: "/members/fardeen.jpeg",
      github: "https://github.com/Fardeen-gamer",
      linkedin: "https://www.linkedin.com/in/mohammed-fardeen-4a903a34b",
      email: "mailto:Fardeensheikh1880@gmail.com",
    },
  ];

  return (
    <section className="spotlight-zone relative py-24 px-4 overflow-hidden">
      <ScrollGrid opacity={0.3} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="scan-line inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2C7DF7]/25 bg-[#2C7DF7]/[0.06] mb-6"
          >
            <Radio size={12} className="text-[#00E5FF]" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#9fe8ff] uppercase">
              Leadership
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Core <span className="text-tezos-gradient">Members</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5 lg:gap-6">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="gradient-border group relative w-full max-w-[260px] rounded-[1.75rem]"
            >
              <div className="relative z-10 bg-white/[0.02] border border-white/[0.06] rounded-[1.75rem] p-7 backdrop-blur-xl group-hover:bg-white/[0.04] transition-colors duration-500">
                <div className="relative mb-5 flex justify-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden border border-white/10 group-hover:border-[#2C7DF7]/50 transition-colors duration-500 relative z-10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#2C7DF7]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="text-center relative z-10">
                  <h3 className="text-lg font-bold text-gray-100 mb-1 group-hover:text-white transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#9fe8ff] text-[11px] font-mono font-medium tracking-widest uppercase mb-5">
                    {member.position}
                  </p>

                  <div className="flex justify-center space-x-2.5">
                    {[
                      { icon: FaGithub, link: member.github },
                      { icon: FaLinkedin, link: member.linkedin },
                      { icon: FaEnvelope, link: member.email },
                    ].map(
                      (social, i) =>
                        social.link && (
                          <a
                            key={i}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-[#2C7DF7]/10 hover:border-[#2C7DF7]/50 transition-all duration-300"
                          >
                            <social.icon className="w-3.5 h-3.5" />
                          </a>
                        ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}