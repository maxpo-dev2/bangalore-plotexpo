"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    label: "Expected Numbers",
    value: 10000,
  },
  {
    label: "Sponsors",
    value: 4,
  },
  {
    label: "Premium Stand",
    value: 5,
  },
  {
    label: "Exhibitors",
    value: 20,
  },
  {
    label: "Attendees",
    value: 6000,
  },
];

const StatsRow = ({
  label,
  value,
  labelBg,
  valueBg,
}: {
  label: string;
  value: number;
  labelBg: string;
  valueBg: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid grid-cols-2"
    >
      {/* Label */}
      <div className={`${labelBg} flex items-center p-8`}>
        <h3 className="text-lg md:text-2xl font-bold text-black uppercase">
          {label}
        </h3>
      </div>

      {/* Value */}
      <div className={`${valueBg} flex items-center justify-center`}>
        <span className="text-4xl md:text-6xl font-bold text-black">
          {inView && (
            <CountUp
              start={0}
              end={value}
              duration={1.6}
              formattingFn={(num) => (value < 10 ? `0${num}` : `${num}`)}
            />
          )}
          +
        </span>
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="section-container space-y-4">
        {stats.map((stat, index) => (
          <StatsRow
            key={index}
            label={stat.label}
            value={stat.value}
            valueBg={index % 2 === 1 ? "bg-secondary" : "bg-gray-200"}
            labelBg={index % 2 === 1 ? "bg-gray-200" : "bg-secondary"}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
