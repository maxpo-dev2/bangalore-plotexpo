"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Expected Visitors", value: 10000, suffix: "+" },
  { label: "Sponsors", value: 4, suffix: "+" },
  { label: "Premium Stands", value: 5, suffix: "+" },
  { label: "Exhibitors", value: 20, suffix: "+" },
  { label: "Attendees", value: 6000, suffix: "+" },
];

const StatCard = ({
  label,
  value,
  suffix,
  index,
}: {
  label: string;
  value: number;
  suffix: string;
  index: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white border border-gray-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold text-[#00620F] mb-2 leading-none">
        {inView ? (
          <>
            <CountUp start={0} end={value} duration={2} separator="," />
            {suffix}
          </>
        ) : (
          `0${suffix}`
        )}
      </div>
      <div className="text-[#444444] text-sm font-medium uppercase tracking-wide mt-1">
        {label}
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#e6f4ea]">
      <div className="section-container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[#00620F] text-sm font-semibold uppercase tracking-widest">
            By The Numbers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-3">
            BPE 2026 At A Glance
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
