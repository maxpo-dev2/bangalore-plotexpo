"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Building2,
  Briefcase,
  Eye,
  Award,
  Network,
  TrendingUp,
  Star,
} from "lucide-react";
import Link from "next/link";

const visitorBenefits = [
  {
    icon: Building2,
    text: "Compare 50+ verified projects side by side in one day",
  },
  {
    icon: Users,
    text: "Meet 100+ verified developers and land aggregators directly",
  },
  {
    icon: Award,
    text: "Access exclusive expo-only pricing and special offers",
  },
  {
    icon: Eye,
    text: "Explore RERA/DTCP approved plots with clear documentation",
  },
];

const exhibitorBenefits = [
  {
    icon: Briefcase,
    text: "Direct access to 5,000+ serious, investment-ready buyers",
  },
  {
    icon: TrendingUp,
    text: "Generate high-quality, targeted leads with intent to invest",
  },
  {
    icon: Network,
    text: "Build strong brand visibility in Bengaluru's real estate market",
  },
  {
    icon: Star,
    text: "Showcase projects to an affluent, pre-qualified audience",
  },
];

export default function WhyAttendExhibit() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#00620F] text-sm font-semibold uppercase tracking-widest">
            Join The Event
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 mb-4 leading-tight">
            Why Attend or Exhibit?
          </h2>
          <p className="text-[#444444] text-lg leading-relaxed">
            Whether you&apos;re an investor seeking the best land deal or a
            developer looking for serious buyers - BPE 2026 is your platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Visitor card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[#e6f4ea] rounded-2xl p-8 lg:p-10 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#00620F] flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
              <span className="text-[#00620F] text-sm font-semibold uppercase tracking-widest">
                For Visitors
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 mt-1">
              Why Attend?
            </h3>
            <p className="text-[#444444] mb-7 leading-relaxed">
              Whether you&apos;re a first-time buyer or a seasoned investor, BPE
              2026 gives you unmatched access to Bengaluru&apos;s best plot
              investments.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {visitorBenefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                    <b.icon size={15} className="text-[#00620F]" />
                  </div>
                  <span className="text-[#444444] text-sm pt-1 leading-snug">
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/register?t=visitor" className="block">
              <button className="w-full py-3.5 bg-[#00620F] text-white font-semibold rounded-xl hover:bg-green-700 transition-colors duration-200">
                Register as Visitor →
              </button>
            </Link>
          </motion.div>

          {/* Exhibitor card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#00620F] rounded-2xl p-8 lg:p-10 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <Building2 size={20} className="text-white" />
              </div>
              <span className="text-green-300 text-sm font-semibold uppercase tracking-widest">
                For Exhibitors
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 mt-1">
              Why Exhibit?
            </h3>
            <p className="text-green-100 mb-7 leading-relaxed">
              Position your brand in front of serious investors. BPE 2026 is the
              highest-ROI marketing platform for Bengaluru&apos;s real estate
              developers.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {exhibitorBenefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <b.icon size={15} className="text-green-300" />
                  </div>
                  <span className="text-green-100 text-sm pt-1 leading-snug">
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/register?t=exhibitor" className="block">
              <button className="w-full py-3.5 bg-white text-[#00620F] font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200">
                Book Your Exhibition Stall →
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
