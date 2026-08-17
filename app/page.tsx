"use client";

import BoardMembers from "@/components/BoardMembers";
import CarouselSlider from "@/components/eventslider";
import Footer from "@/components/foot";
import HeroSection from "@/components/hero";
import TeacherC from "@/components/Teacher";
import TeamSliderCards from "@/components/teamslider";
import ScrollFloat from "@/components/ScrollFloat";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <HeroSection />

      {/* FACULTY */}
      <ScrollFloat strength={0.7}>
        <TeacherC />
      </ScrollFloat>

      <ScrollFloat strength={1}>
        <BoardMembers />
      </ScrollFloat>

      <ScrollFloat strength={1.25}>
        <TeamSliderCards />
      </ScrollFloat>

      <ScrollFloat strength={0.8}>
        <CarouselSlider />
      </ScrollFloat>

      <ScrollFloat strength={0.7}>
        <Footer />
      </ScrollFloat>
    </main>
  );
}
