"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Building2, LayoutGrid, BadgeCheck } from "lucide-react";

const stats = [
  { icon: Building2, value: 100, suffix: "+", label: "Developers" },
  { icon: Users, value: 5000, suffix: "+", label: "Visitors" },
  { icon: LayoutGrid, value: 50, suffix: "+", label: "Projects" },
  { icon: BadgeCheck, value: 100, suffix: "%", label: "Verified Listings" },
];

export default function TrustStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#00620F] py-10">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="text-green-300 mb-3" size={26} />
              <div className="text-3xl md:text-4xl font-bold text-white leading-none">
                {inView ? (
                  stat.suffix === "%" ? (
                    `${stat.value}%`
                  ) : (
                    <>
                      <CountUp start={0} end={stat.value} duration={2.2} separator="," />
                      {stat.suffix}
                    </>
                  )
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-green-200 text-sm mt-2 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
