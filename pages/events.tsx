"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  ArrowRight,
  X,
  Sparkles,
  Clock,
} from "lucide-react";
import Link from "next/link";

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
    title: "Pathfinder'25",
    date: "27 August 2025",
    description:
      "Introducing Tezos JH club to the new students and welcoming them into the blockchain community.",
    image: "/events/pathfinder.jpg",
    location: "Jamia Hamdard, New Delhi",
    category: "Community",
  },
  {
    id: 2,
    title: "Build on Azure",
    date: "4 September 2024",
    description:
      "An introduction to Microsoft Azure along with blockchain, DevOps and cybersecurity concepts.",
    image: "/events/azure.jpg",
    location: "Jamia Hamdard, New Delhi",
    category: "Workshop",
  },
  {
    id: 3,
    title: "Profile Building",
    date: "2 October 2024",
    description:
      "A session focused on version control, collaborative coding and building a strong developer profile.",
    image: "/events/profile.jpg",
    location: "Jamia Hamdard, New Delhi",
    category: "Workshop",
  },
  {
    id: 4,
    title: "Hacktoberfest: Build-a-thon",
    date: "15 October 2024",
    description:
      "A hands-on open-source and web development event encouraging students to build and contribute together.",
    image: "/e4.png",
    location: "Jamia Hamdard, New Delhi",
    category: "Hackathon",
  },
  {
    id: 5,
    title: "Supermove Tour",
    date: "15 October 2024",
    description:
      "A Web3-focused session featuring wallet integration and Aptos deployment with Spheron.",
    image: "/e5.png",
    location: "New Delhi",
    category: "Web3",
  },
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const featuredEvent = events[0];
  const pastEvents = events.slice(1);

  return (
    <main className="min-h-screen bg-[#050509] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#050509]" />

        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[150px]" />

        <div className="absolute top-[40%] right-[-200px] w-[500px] h-[500px] rounded-full bg-pink-600/10 blur-[150px]" />

        <div className="absolute bottom-[-200px] left-[35%] w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[150px]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navbar spacing */}
      <div className="h-24" />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-sm mb-6">
            <Sparkles size={16} />
            Tezos Jamia Hamdard
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Events
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Workshops, hackathons, community sessions and Web3 experiences that
            bring the Tezos community together.
          </p>
        </motion.div>
      </section>

      {/* FEATURED EVENT */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-[2px] bg-purple-500" />
          <span className="text-sm uppercase tracking-[0.3em] text-purple-300">
            Featured Event
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative overflow-hidden rounded-[2rem] border border-purple-500/20 bg-white/[0.03] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-[320px] lg:h-[500px] overflow-hidden">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-full bg-purple-600/80 backdrop-blur-md text-sm font-medium">
                  {featuredEvent.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-purple-400" />
                  {featuredEvent.date}
                </span>

                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-purple-400" />
                  {featuredEvent.location}
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {featuredEvent.title}
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {featuredEvent.description}
              </p>

              <button
                onClick={() => setSelectedEvent(featuredEvent)}
                className="w-fit flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:scale-105 transition-transform"
              >
                Explore Event
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PAST EVENTS */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-purple-500" />
              <span className="text-sm uppercase tracking-[0.3em] text-purple-300">
                Archive
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">Past Events</h2>
          </div>

          <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
            <Clock size={16} />
            Our journey so far
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              onClick={() => setSelectedEvent(event)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-purple-500/40 hover:bg-white/[0.05] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs text-purple-200">
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-purple-300 text-sm mb-3">
                  <CalendarDays size={15} />
                  {event.date}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                  {event.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {event.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-purple-400">
                  View event
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-pink-900/10 p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_60%)]" />

          <div className="relative">
            <Sparkles className="mx-auto mb-5 text-purple-400" />

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to be part of the next one?
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Join the Tezos Jamia Hamdard community and stay connected with
              upcoming workshops, hackathons and Web3 events.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-purple-100 transition-colors"
            >
              Back to Home
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* EVENT MODAL */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-purple-500/30 bg-[#0b0b12] shadow-2xl shadow-purple-900/30"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-purple-600 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12] to-transparent" />
              </div>

              {/* Modal content */}
              <div className="p-8 md:p-10 -mt-10 relative">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-600 text-xs font-semibold mb-5">
                  {selectedEvent.category}
                </span>

                <h2 className="text-3xl md:text-4xl font-bold mb-5">
                  {selectedEvent.title}
                </h2>

                <div className="flex flex-wrap gap-5 text-gray-400 text-sm mb-7">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-purple-400" />
                    {selectedEvent.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-purple-400" />
                    {selectedEvent.location}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedEvent.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
