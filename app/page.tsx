"use client";

import BoardMembers from "@/components/BoardMembers";
import CarouselSlider from "@/components/eventslider";
import Footer from "@/components/foot";
import HeroSection from "@/components/hero";
import TeacherC from "@/components/Teacher";
import TeamSliderCards from "@/components/teamslider";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <HeroSection />

      {/* FACULTY */}
      <ScrollReveal type="fadeScale">
        <TeacherC />
      </ScrollReveal>

      {/* CORE MEMBERS */}
      <ScrollReveal type="fadeUp">
        <BoardMembers />
      </ScrollReveal>

      {/* DEPARTMENTS */}
      <ScrollReveal type="slideRight">
        <TeamSliderCards />
      </ScrollReveal>

      {/* EVENTS */}
      <ScrollReveal type="fadeScale">
        <CarouselSlider />
      </ScrollReveal>

      {/* FOOTER */}
      <ScrollReveal type="fadeUp">
        <Footer />
      </ScrollReveal>
    </main>
  );
}
