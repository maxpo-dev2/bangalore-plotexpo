"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "IT Professional & First-Time Investor",
    text: "BPE 2026 was a revelation. I compared 15+ projects in a single day, met developers directly, and secured a villa plot in Devanahalli at an expo-exclusive price. The quality and variety of projects was outstanding.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "NRI Investor, Dubai",
    text: "As an NRI, I was skeptical about investing remotely. BPE connected me with RERA-verified developers and I made a confident, well-informed investment. The transparency and professionalism exceeded every expectation.",
    rating: 5,
  },
  {
    name: "Arun Sharma",
    role: "CEO",
    text: "We've exhibited at BPE for three consecutive years. Lead quality is unmatched - serious, pre-qualified buyers ready to invest. Our conversions from BPE are 3x higher than any other marketing channel we use.",
    rating: 5,
  },
  {
    name: "Meena Reddy",
    role: "Retired Banker & Land Investor",
    text: "Post-retirement, I needed a stable, hassle-free investment. Found farmland plots with excellent documentation and clear titles. Already seen 22% appreciation in 18 months. Highly recommend attending BPE!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#00620F] text-sm font-semibold uppercase tracking-widest">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 mb-4 leading-tight">
            What Our Attendees Say
          </h2>
          <p className="text-[#444444] text-lg leading-relaxed">
            Real investors, real developers, real results. See how BPE has
            transformed investment journeys across Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Quote size={28} className="text-[#00620F]/20 mb-4" />
              <p className="text-[#444444] text-sm md:text-base leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-black text-base">{t.name}</p>
                  <p className="text-[#444444] text-xs mt-0.5">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <span key={si} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
