"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import CountUp from "react-countup";

const images = [
  "2026/bpe26-15.webp",
  "2026/bpe26-1.webp",
  "2026/bpe26-3.webp",
  "2026/bpe26-4.webp",
  "2026/bpe26-14.webp",
  "2026/bpe26-6.webp",
  "2026/bpe26-7.webp",
  "2026/bpe26-8.webp",
  "2026/bpe26-9.webp",
];

const highlights = [
  { value: 30, suffix: "+", label: "Exhibitors" },
  { value: 3000, suffix: "+", label: "Visitors Attended" },
  { value: 100, suffix: "Cr+", label: "Deals Closed (₹)" },
];

const PastEventSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#00620F] text-sm font-semibold uppercase tracking-widest">
            Track Record
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 mb-4 leading-tight">
            Past Event Highlights
          </h2>
          <p className="text-[#444444] text-lg leading-relaxed">
            A glimpse into our previous exhibitions - showcasing the scale,
            energy, and impact that defines BPE.
          </p>
        </div>

        {/* Stats row */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {highlights.map((h, i) => (
            <div key={i} className="bg-[#e6f4ea] rounded-2xl p-7 text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#00620F] mb-2 leading-none">
                {inView ? (
                  <>
                    <CountUp
                      start={0}
                      end={h.value}
                      duration={2}
                      separator=","
                    />
                    {h.suffix}
                  </>
                ) : (
                  `0${h.suffix}`
                )}
              </div>
              <div className="text-[#444444] text-sm font-medium">
                {h.label}
              </div>
            </div>
          ))}
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl aspect-square shadow-sm"
            >
              <img
                src={`/images/past-events/${img}`}
                alt={`BPE Past Event ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-semibold text-sm">
                  Bengaluru Plot Expo 2026
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/past-event">
            <Button variant="primary" className="px-8 py-3 text-base">
              View All Photos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PastEventSection;
