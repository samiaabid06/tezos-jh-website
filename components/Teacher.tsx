"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface TeacherC {
  id: number;
  name: string;
  position: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const TeacherC: React.FC = () => {
  const profiles: TeacherC[] = [
    { id: 1, name: "Tabish Mufti", position: "Teacher Co-ordinator", image: "/sir.jpg", github: "#", linkedin: "#", email: "#" },
    { id: 2, name: "Gautami Tripathi", position: "Teacher Co-ordinator", image: "/gautmi_mam.jpg", github: "#", linkedin: "#", email: "#" },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Faculty <span className="text-tezos-gradient">Mentors</span>
          </h2>
          <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">
            Guiding the club since day one
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="gradient-border group relative rounded-[1.75rem]"
            >
              <div className="relative z-10 overflow-hidden bg-white/[0.02] border border-white/[0.06] rounded-[1.75rem] p-8 backdrop-blur-xl group-hover:bg-white/[0.04] transition-colors duration-500">
                <div className="relative mb-7 flex justify-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-white/10 group-hover:border-[#2C7DF7]/50 transition-colors duration-500 relative z-10">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-full object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#2C7DF7]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="text-center relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-1">{profile.name}</h3>
                  <p className="text-[#9fe8ff] text-xs sm:text-sm mb-6 font-mono font-medium tracking-widest uppercase">
                    {profile.position}
                  </p>

                  <div className="flex justify-center space-x-2.5">
                    {[
                      { icon: Github, link: profile.github },
                      { icon: Linkedin, link: profile.linkedin },
                      { icon: Mail, link: profile.email ? `mailto:${profile.email}` : undefined },
                    ].map(
                      (social, i) =>
                        social.link && (
                          <a
                            key={i}
                            href={social.link}
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-[#2C7DF7]/10 hover:border-[#2C7DF7]/50 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <social.icon className="w-4 h-4" />
                          </a>
                        )
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
};

export default TeacherC;