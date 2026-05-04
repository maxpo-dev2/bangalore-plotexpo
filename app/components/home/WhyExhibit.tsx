"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const points = [
  {
    title: "Lead Generation Opportunity",
    text: "Connect with a high-intent audience of business owners and salaried professionals actively looking to invest.",
  },
  {
    title: "Cost-Effective Advertising",
    text: "Promote your projects directly to a focused, affluent crowd at a fraction of traditional marketing costs.",
  },
  {
    title: "Diverse Plot Categories",
    text: "Farmlands, villa plots, society plots - showcase your complete portfolio in one premium setting.",
  },
  {
    title: "Project Showcasing & Liquidation",
    text: "Move inventory faster and attract serious buyers who are ready to make investment decisions.",
  },
  {
    title: "Brand Visibility",
    text: "Increase brand recognition among Bengaluru's elite real estate investment community.",
  },
  {
    title: "Networking",
    text: "Meet investors, channel partners, and potential collaborators from across the industry.",
  },
];

const WhyExhibit = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#00620F] text-sm font-semibold uppercase tracking-widest">
            Exhibitor Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 mb-4 leading-tight">
            Why Exhibit at BPE 2026?
          </h2>
          <p className="text-[#444444] text-lg leading-relaxed">
            Position your brand in front of Bengaluru&apos;s most active real
            estate investors - and convert them into buyers.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center text-center"
            >
              {/* Ring */}
              <div className="relative mb-6">
                <div className="w-44 h-44 rounded-full border-[20px] border-[#b0ffaa] flex items-center justify-center ">
                  <p className="text-md font-semibold text-black px-4">
                    {point.title}
                  </p>
                </div>

                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-secondary border-2 border-white flex items-center justify-center">
                  <span className="text-black font-extrabold text-4xl">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-black text-md max-w-xs">{point.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA callout */}
        <div className="mt-14 p-8 bg-[#e6f4ea] rounded-2xl max-w-3xl mx-auto text-center">
          <p className="text-[#444444] text-base md:text-lg mb-6 leading-relaxed">
            Whether you&apos;re a developer aiming to boost project visibility
            or an investor seeking your next opportunity,{" "}
            <span className="font-semibold text-[#00620F]">#BPE 2026</span> is
            where connections are made and deals are closed.
          </p>
          <Link href="/register?t=exhibitor">
            <button className="px-8 py-3.5 bg-[#00620F] text-white font-semibold rounded-xl hover:bg-green-700 transition-colors duration-200">
              Book Your Stall Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyExhibit;
