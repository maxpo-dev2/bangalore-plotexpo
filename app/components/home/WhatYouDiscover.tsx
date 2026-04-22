"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Home,
  Building2,
  Leaf,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: Home,
    title: "Villa Plots",
    desc: "Exclusive villa plots in gated communities across Bengaluru's premium corridors with world-class amenities.",
  },
  {
    icon: Building2,
    title: "Gated Communities",
    desc: "Well-planned residential layouts with 24/7 security, landscaped parks, and clubhouse facilities.",
  },
  {
    icon: Leaf,
    title: "Farmland Investments",
    desc: "Organic farmlands and agri-investment plots with high appreciation potential and lifestyle benefits.",
  },
  {
    icon: CheckCircle2,
    title: "DTCP / RERA Approved",
    desc: "100% legally approved projects with clear titles, proper documentation, and full regulatory compliance.",
  },
  {
    icon: TrendingUp,
    title: "High ROI Opportunities",
    desc: "Strategically located plots in high-growth zones delivering superior long-term returns on investment.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Developers",
    desc: "Connect only with verified, reputed developers and land aggregators committed to transparency.",
  },
];

export default function WhatYouDiscover() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-[#e6f4ea]">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#00620F] text-sm font-semibold uppercase tracking-widest">
            At The Expo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 mb-4 leading-tight">
            What You Will Discover
          </h2>
          <p className="text-[#444444] text-lg leading-relaxed">
            Over 50+ premium projects under one roof - your gateway to
            Bengaluru&apos;s most lucrative land investments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-5 items-start group hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-[#e6f4ea] flex items-center justify-center shrink-0 group-hover:bg-[#00620F] transition-colors duration-300">
                <item.icon
                  size={20}
                  className="text-[#00620F] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <div>
                <h3 className="text-black font-semibold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-[#444444] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
