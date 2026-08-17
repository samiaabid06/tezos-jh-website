"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  ArrowRight,
  X,
  Clock,
  Radio,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollGrid from "@/components/ScrollGrid";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  location: string;
  category: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Tezos Code Verse",
    date: "25 April 2026",
    description:
      "A 3-hour Web-Dev Hackathon where participants build, innovate and compete. Teams of two compete for exciting prizes with mentorship from seniors throughout the event.",
    image: "/events/code-verse.jpg",
    location: "Jamia Hamdard, New Delhi",
    category: "Hackathon",
  },
  {
    id: 2,
    title: "Elevate — Women in Tech",
    date: "8 March 2026",
    description:
      "A Women's Day special focused on empowering and inspiring women in technology through insights, experiences and conversations around learning, careers and building meaningful connections.",
    image: "/events/elevate.jpg",
    location: "Online — Google Meet",
    category: "Women in Tech",
  },
  {
    id: 3,
    title: "Pathfinder'25",
    date: "27 August 2025",
    description:
      "Introducing Tezos JH club to the new students and welcoming them into the blockchain community.",
    image: "/events/pathfinder.jpg",
    location: "Jamia Hamdard, New Delhi",
    category: "Community",
  },
  {
    id: 4,
    title: "Supermove Tour",
    date: "15 October 2024",
    description:
      "A Web3-focused session featuring wallet integration and Aptos deployment with Spheron.",
    image: "/e5.png",
    location: "New Delhi",
    category: "Web3",
  },
  {
    id: 5,
    title: "Hacktoberfest: Build-a-thon",
    date: "15 October 2024",
    description:
      "A hands-on open-source and web development event encouraging students to build and contribute together.",
    image: "/e4.png",
    location: "Jamia Hamdard, New Delhi",
    category: "Hackathon",
  },
  {
    id: 6,
    title: "Profile Building",
    date: "2 October 2024",
    description:
      "A session focused on version control, collaborative coding and building a strong developer profile.",
    image: "/events/profile.jpg",
    location: "Jamia Hamdard, New Delhi",
    category: "Workshop",
  },
  {
    id: 7,
    title: "Build on Azure",
    date: "4 September 2024",
    description:
      "An introduction to Microsoft Azure along with blockchain, DevOps and cybersecurity concepts.",
    image: "/events/azure.jpg",
    location: "Jamia Hamdard, New Delhi",
    category: "Workshop",
  },
];

// span pattern for the bento grid — deliberately asymmetric, not uniform 3-col
const spanPattern = [
  "md:col-span-2 md:row-span-2", // big feature card
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2", // tall card
  "md:col-span-2 md:row-span-1", // wide card
  "md:col-span-1 md:row-span-1",
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const featuredEvent = events[0];
  const pastEvents = events.slice(1);

  return (
    <ScrollReveal>
      <section>
        <main className="min-h-screen text-white relative selection:bg-[#2C7DF7] selection:text-white">
          <Navbar />

          <div className="relative z-10 pt-32 pb-20">
            {/* HERO */}
            <section className="spotlight-zone max-w-7xl mx-auto px-6 mb-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="scan-line inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2C7DF7]/25 bg-[#2C7DF7]/[0.06] mb-6">
                  <Radio size={12} className="text-[#00E5FF]" />
                  <span className="text-[11px] font-mono tracking-[0.2em] text-[#9fe8ff] uppercase">
                    Event Log
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                  What We've{" "}
                  <span className="text-tezos-gradient">Built Together</span>
                </h1>
                <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
                  Every hackathon, workshop, and late-night build session — the
                  full record of what this community has actually shipped.
                </p>
              </motion.div>
            </section>

            {/* FEATURED EVENT */}
            <section className="max-w-7xl mx-auto px-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={() => setSelectedEvent(featuredEvent)}
                className="gradient-border group cursor-pointer relative overflow-hidden rounded-[1.75rem]"
              >
                <div className="relative z-10 grid lg:grid-cols-2 bg-[#08080c] rounded-[1.75rem] overflow-hidden border border-white/[0.06]">
                  <div className="relative h-[360px] lg:h-[500px] overflow-hidden">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover filter grayscale-[10%] transition-transform duration-[6s] ease-out group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] lg:bg-gradient-to-r lg:from-transparent lg:to-[#08080c] opacity-90" />
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] pulse-dot" />
                      <span className="px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-[11px] font-mono tracking-widest text-[#00E5FF] uppercase">
                        Featured · {featuredEvent.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 lg:p-14 flex flex-col justify-center relative">
                    <div className="flex flex-wrap gap-5 text-sm font-medium text-gray-400 mb-6">
                      <span className="flex items-center gap-2">
                        <CalendarDays size={16} className="text-[#2C7DF7]" />
                        {featuredEvent.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#2C7DF7]" />
                        {featuredEvent.location}
                      </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                      {featuredEvent.title}
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mb-10">
                      {featuredEvent.description}
                    </p>

                    <span className="group/btn relative w-fit inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-[#020204] font-semibold rounded-full transition-transform hover:scale-105">
                      Explore Event
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* BENTO ARCHIVE GRID — asymmetric, not uniform cards */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
              <div className="flex items-end justify-between mb-10">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Archive
                </h2>
                <div className="hidden md:flex items-center gap-2 text-gray-500 text-xs font-mono uppercase tracking-widest">
                  <Clock size={14} /> {pastEvents.length} Past Events
                </div>
              </div>

              <div className="grid md:grid-cols-3 auto-rows-[240px] gap-5">
                {pastEvents.map((event, index) => (
                  <motion.article
                    key={event.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    onClick={() => setSelectedEvent(event)}
                    className={`gradient-border group cursor-pointer relative rounded-[1.5rem] overflow-hidden ${spanPattern[index % spanPattern.length]}`}
                  >
                    <div className="relative z-10 w-full h-full rounded-[1.5rem] overflow-hidden border border-white/[0.06] bg-[#08080c]">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover filter grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-[#020204]/50 to-transparent" />

                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-gray-300 uppercase">
                        {event.category}
                      </span>

                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="flex items-center gap-2 text-[#00E5FF] text-[11px] font-mono tracking-widest uppercase mb-2">
                          <CalendarDays size={12} />
                          {event.date}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#9fe8ff] transition-colors tracking-tight leading-tight">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6">
              <div className="gradient-border relative rounded-[1.75rem]">
                <div className="relative z-10 rounded-[1.75rem] border border-white/[0.06] bg-[#08080c] p-12 text-center overflow-hidden">
                  <ScrollGrid opacity={0.4} />
                  <h2 className="relative text-3xl font-bold mb-4 text-white">
                    Don't miss the next one.
                  </h2>
                  <p className="relative text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
                    Join the Discord to get early access to our upcoming
                    workshops and hackathons — no spam, just the good stuff.
                  </p>
                  <a
                    href="https://discord.gg/DHMfYMfu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#020204] font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    Join the Community <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* MODAL */}
          <AnimatePresence>
            {selectedEvent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-[#020204]/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
                onClick={() => setSelectedEvent(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 30 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide rounded-[1.75rem] border border-white/[0.08] bg-[#08080c] shadow-[0_0_80px_rgba(44,125,247,0.15)]"
                >
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <X size={20} />
                  </button>

                  <div className="relative h-64 md:h-96">
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/40 to-transparent" />
                  </div>

                  <div className="relative px-8 pb-12 md:px-12 md:pb-16 -mt-16 z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 text-[11px] font-mono tracking-widest text-[#00E5FF] uppercase mb-6">
                      {selectedEvent.category}
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                      {selectedEvent.title}
                    </h2>

                    <div className="flex flex-wrap gap-4 text-gray-300 text-sm font-medium mb-8">
                      <span className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-lg border border-white/5">
                        <CalendarDays size={16} className="text-[#2C7DF7]" />
                        {selectedEvent.date}
                      </span>
                      <span className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-lg border border-white/5">
                        <MapPin size={16} className="text-[#2C7DF7]" />
                        {selectedEvent.location}
                      </span>
                    </div>

                    <div className="w-full h-px bg-white/[0.06] mb-8" />

                    <p className="text-gray-400 leading-relaxed text-lg whitespace-pre-line">
                      {selectedEvent.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </section>
    </ScrollReveal>
  );
}