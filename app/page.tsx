"use client";

import HeroSection from "./components/home/HeroSection";
import TrustStrip from "./components/home/TrustStrip";
import AboutUsSection from "./components/home/AboutSection";
import WhyInvestSection from "./components/home/WhyInvestSection";
import WhatYouDiscover from "./components/home/WhatYouDiscover";
import WhyAttendExhibit from "./components/home/WhyAttendExhibit";
import WhyExhibit from "./components/home/WhyExhibit";
import StatsSection from "./components/StatsSection";
import InvestmentLocations from "./components/home/InvestmentLocations";
import PastEventSection from "./components/home/PastEventSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import PastSponsors from "./components/PastSponsors";
import FinalCTA from "./components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero - full-screen impact */}
      <HeroSection />

      {/* 2. Trust strip - animated stats */}
      <TrustStrip />

      {/* 3. About the expo */}
      <AboutUsSection />

      {/* 4. Why invest in plots */}
      <WhyInvestSection />

      {/* 5. What you will discover */}
      <WhatYouDiscover />

      {/* 6. Why attend / why exhibit - split */}
      <WhyAttendExhibit />

      {/* 7. Why exhibit - detailed card grid */}
      <WhyExhibit />

      {/* 8. BPE 2026 stats at a glance */}
      <StatsSection />

      {/* 9. Top investment locations */}
      <InvestmentLocations />

      {/* 10. Past event highlights + gallery */}
      <PastEventSection />

      {/* 11. Testimonials */}
      <TestimonialsSection />

      {/* 12. Past exhibitors / partners */}
      {/* <PastSponsors /> */}

      {/* 13. Final CTA */}
      <FinalCTA />
    </div>
  );
}
