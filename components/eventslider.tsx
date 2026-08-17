"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const CarouselSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const events = [
    {
      id: 1,
      title: "Pathfinder'25",
      date: "27th August 2025",
      location: "Jamia Hamdard",
      description:
        "Introducing Tezos JH club to the new students, diving deep into the Web3 ecosystem and future opportunities.",
      image: "/events/pathfinder.jpg",
    },
    {
      id: 2,
      title: "Build on Azure (Microsoft)",
      date: "4th September 2024",
      location: "Campus Auditorium",
      description:
        "Revealing the Tezos website, and introducing Blockchain, DevOps, and Cybersecurity fundamentals.",
      image: "/events/azure.jpg",
    },
    {
      id: 3,
      title: "Profile Building",
      date: "2nd October 2024",
      location: "Lab Complex",
      description:
        "Mastering version control, collaborative coding, and building a standout developer portfolio.",
      image: "/events/profile.jpg",
    },
    {
      id: 4,
      title: "Hacktoberfest: Build-a-thon",
      date: "15th October 2024",
      location: "Main Hall",
      description:
        "Celebrating open-source with hands-on web development contributions and building together.",
      image: "/e4.png",
    },
    {
      id: 5,
      title: "Supermove Tour with Spheron x Aptos",
      date: "15th October 2024",
      location: "Tech Center",
      description:
        "Deep dive into Web3 wallet integration and seamless decentralized application deployment.",
      image: "/e5.png",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length]);

  return (
    <div className="w-full py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Event <span className="text-tezos-gradient">Archive</span>
          </h2>
          <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">
            Moments from the last two years
          </p>
        </div>

        <div className="gradient-border relative rounded-[1.75rem]">
          <div
            className="relative z-10 h-[480px] md:h-[560px] rounded-[1.75rem] overflow-hidden border border-white/[0.06] bg-[#08080c] shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className={`w-full h-full object-cover transition-transform duration-[8s] ease-linear ${
                    index === currentSlide ? "scale-110" : "scale-100"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020204] via-[#020204]/55 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020204]/75 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-14 flex flex-col justify-end h-full">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-[#9fe8ff] mb-4 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5 bg-[#2C7DF7]/15 px-3 py-1 rounded-full backdrop-blur-md border border-[#2C7DF7]/25">
                        <Calendar size={12} /> {event.date}
                      </span>
                      {event.location && (
                        <span className="flex items-center gap-1.5 text-gray-400">
                          <MapPin size={12} /> {event.location}
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 tracking-tight">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-7 max-w-xl">
                      {event.description}
                    </p>

                    <Link
                      href="/events"
                      className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[#020204] font-semibold rounded-full hover:scale-105 transition-transform duration-300"
                    >
                      View Gallery <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Nav arrows */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-2.5">
              <button
                onClick={() =>
                  setCurrentSlide(
                    (prev) => (prev - 1 + events.length) % events.length,
                  )
                }
                className="w-11 h-11 flex items-center justify-center bg-white/[0.06] hover:bg-white/15 backdrop-blur-xl border border-white/15 text-white rounded-full transition-all duration-300"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % events.length)
                }
                className="w-11 h-11 flex items-center justify-center bg-white/[0.06] hover:bg-white/15 backdrop-blur-xl border border-white/15 text-white rounded-full transition-all duration-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-20">
              <motion.div
                key={currentSlide}
                className="h-full bg-gradient-to-r from-[#2C7DF7] to-[#00E5FF]"
                initial={{ width: "0%" }}
                animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                transition={{ duration: isAutoPlaying ? 5 : 0, ease: "linear" }}
              />
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
          {events.map((event, index) => (
            <button
              key={event.id}
              onClick={() => setCurrentSlide(index)}
              className={`relative flex-shrink-0 w-28 h-[70px] rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? "ring-2 ring-[#00E5FF] opacity-100"
                  : "opacity-40 hover:opacity-70 grayscale hover:grayscale-0"
              }`}
            >
              <img
                src={event.image}
                alt="thumbnail"
                className="w-full h-full object-cover"
              />
              {index === currentSlide && (
                <div className="absolute inset-0 bg-[#2C7DF7]/20" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
