import React from "react";
import { motion } from "framer-motion";

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
    text: "Connect with a high-intent audience of business owners and salaried professionals.",
  },
  {
    title: "Cost-Effective Advertising",
    text: "Promote your projects directly to a focused and affluent crowd.",
  },
  {
    title: "Diverse Plot Categories",
    text: "Farm lands, villa plots, society plots – all in one place.",
  },
  {
    title: "Project Showcasing & Liquidation",
    text: "Move inventory and attract serious buyers.",
  },
  {
    title: "Brand Visibility",
    text: "Increase recognition among Bengaluru's real estate investment community.",
  },
  {
    title: "Networking",
    text: "Meet investors, partners, and potential collaborators.",
  },
];

const WhyExhibit = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-14">
          Why Exhibit at BPE 2026?
        </h2>

        {/* Grid */}
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
                <div className="w-44 h-44 rounded-full border-[20px] border-secondary flex items-center justify-center">
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

        {/* Footer text */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <p className="text-black">
            Whether you're a developer aiming to boost project visibility or an
            investor seeking your next great opportunity,{" "}
            <span className="font-semibold text-primary">#BPE 2026</span> is
            where connections are made and dreams take shape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyExhibit;
