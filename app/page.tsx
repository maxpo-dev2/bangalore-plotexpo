"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";

import { zenTokyoZoo } from "./fonts"; // adjust path if needed
import StatsSection from "./components/StatsSection";
import PastSponsors from "./components/PastSponsors";
import AboutPage from "./components/home/AboutSection";
import HeroSection from "./components/home/HeroSection";
import WhyExhibit from "./components/home/WhyExhibit";
import AboutUsSection from "./components/home/AboutSection";
import PastEventPage from "./past-event/page";
import PastEventSection from "./components/home/PastEventSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutUsSection />
      <StatsSection />
      <WhyExhibit />
      <PastEventSection />
    </div>
  );
}
