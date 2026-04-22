"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Shield, Layers, Home } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "High Appreciation Potential",
    desc: "Plotted developments in Bengaluru's growth corridors have historically delivered 15–25% annual appreciation - outperforming most asset classes.",
  },
  {
    icon: Shield,
    title: "Low Maintenance Cost",
    desc: "Unlike built structures, plots have minimal upkeep costs, making them a hassle-free, capital-efficient long-term asset.",
  },
  {
    icon: Layers,
    title: "Flexible Development",
    desc: "Build when you're ready - construct a villa, farm stay, or commercial space as per your vision and timeline.",
  },
  {
    icon: Home,
    title: "Safer Long-Term Asset",
    desc: "Land is a finite resource. RERA-approved plots provide legal security and consistent value growth backed by strong demand.",
  },
];

export default function WhyInvestSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#00620F] text-sm font-semibold uppercase tracking-widest">
            Investment Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 mb-4 leading-tight">
            Why Invest in Plots?
          </h2>
          <p className="text-[#444444] text-lg leading-relaxed">
            Land never loses its value. Discover why savvy investors choose
            plotted developments as their preferred asset class.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#e6f4ea] flex items-center justify-center mb-5 group-hover:bg-[#00620F] transition-colors duration-300">
                <card.icon
                  size={22}
                  className="text-[#00620F] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-black font-bold text-lg mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-[#444444] text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
