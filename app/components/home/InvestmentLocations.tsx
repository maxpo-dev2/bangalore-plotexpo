"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plane, Monitor, Home } from "lucide-react";

const locations = [
  {
    icon: Plane,
    area: "North Bengaluru",
    subtitle: "Airport Growth Zone",
    growth: "~20% YoY",
    desc: "Driven by Kempegowda International Airport expansion, major IT parks, and significant infrastructure investments. The fastest-appreciating corridor in the city.",
    tags: ["Devanahalli", "Doddaballapur", "Yelahanka"],
  },
  {
    icon: Monitor,
    area: "East Bengaluru",
    subtitle: "IT Corridor",
    growth: "~18% YoY",
    desc: "Home to Whitefield, ITPL, and major tech campuses. High rental demand and strong appreciation backed by one of India's densest corporate ecosystems.",
    tags: ["Whitefield", "Sarjapur", "Budigere"],
  },
  {
    icon: Home,
    area: "South Bengaluru",
    subtitle: "Residential Demand Hub",
    growth: "~15% YoY",
    desc: "An established residential belt with premium villa plot communities, excellent connectivity to the city, and consistent strong end-user demand.",
    tags: ["Electronic City", "Bannerghatta", "Kanakapura"],
  },
];

export default function InvestmentLocations() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-[#e6f4ea]">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#00620F] text-sm font-semibold uppercase tracking-widest">
            Location Intelligence
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 mb-4 leading-tight">
            Top Investment Locations
          </h2>
          <p className="text-[#444444] text-lg leading-relaxed">
            Bengaluru&apos;s growth is multi-directional. Discover the hottest
            investment corridors for 2026 and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#e6f4ea] flex items-center justify-center">
                  <loc.icon size={22} className="text-[#00620F]" />
                </div>
                <span className="text-[#00620F] font-bold text-sm bg-[#e6f4ea] px-3 py-1.5 rounded-full">
                  {loc.growth}
                </span>
              </div>

              <h3 className="text-black font-bold text-xl mb-1">{loc.area}</h3>
              <p className="text-[#00620F] text-sm font-semibold mb-4">
                {loc.subtitle}
              </p>
              <p className="text-[#444444] text-sm mb-6 leading-relaxed">
                {loc.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {loc.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className="text-xs bg-[#e6f4ea] text-[#444444] font-medium px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
