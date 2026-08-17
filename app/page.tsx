"use client";

import BoardMembers from "@/components/BoardMembers";
import CarouselSlider from "@/components/eventslider";
import Footer from "@/components/foot";
import HeroSection from "@/components/hero";
import TeacherC from "@/components/Teacher";
import TeamSliderCards from "@/components/teamslider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TeacherC />
      <BoardMembers />
      <TeamSliderCards />
      <CarouselSlider />
      <Footer />
    </main>
  );
}
