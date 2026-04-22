"use client";

import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "100+ verified developers and land aggregators",
  "50+ RERA & DTCP approved plot projects",
  "Direct access to exclusive expo-only pricing",
  "Two-day immersive real estate investment experience",
];

export default function AboutUsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} id="about" className="py-20 bg-white overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          {/* Video */}
          <div className="relative w-full min-h-[320px] lg:min-h-[480px] overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://maxpo-storage.blr1.digitaloceanspaces.com/manual-uploads/bpe/bpe%20website%20vedio.mp4"
                type="video/mp4"
              />
            </video>
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[#e6f4ea] p-8 sm:p-10 lg:p-12 flex flex-col justify-center"
          >
            <span className="text-[#00620F] text-sm font-semibold uppercase tracking-widest mb-3">
              About The Expo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-5 leading-tight">
              About Us
            </h2>

            <p className="text-[#444444] mb-4 text-base leading-relaxed">
              Welcome to the{" "}
              <strong className="text-[#00620F]">
                Bengaluru Plot Expo 2026
              </strong>{" "}
              - the city&apos;s largest and most exclusive real estate showcase
              dedicated entirely to plot and farmland investments.
            </p>

            <p className="text-[#444444] mb-7 text-base leading-relaxed">
              This two-day mega event brings together leading developers, land
              aggregators, and investors under one roof. Whether you&apos;re
              looking to showcase your plotted development, reach a premium
              audience, or connect with potential buyers,{" "}
              <strong className="text-[#00620F]">BPE 2026</strong> offers the
              perfect platform.
            </p>

            {/* Highlights list */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#00620F] mt-0.5 shrink-0"
                  />
                  <span className="text-[#444444] text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="https://api.whatsapp.com/send/?phone=919845114655&text=Hello%21+I%27m+interested+and+would+like+to+know+more.+Could+you+please+share+the+details%3F&type=phone_number&app_absent=0">
                <Button variant="outline">Know More</Button>
              </Link>
              <Link href="/registration?type=exhibitor">
                <Button variant="primary">Exhibit With Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
