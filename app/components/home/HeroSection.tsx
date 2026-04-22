import { zenTokyoZoo } from "@/app/fonts";
import Countdown from "./CountDown";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { eventConfig } from "@/config/event";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen -translate-y-10 flex flex-col justify-center overflow-hidden bg-[#C6FFC2]"
      style={{
        backgroundImage: "url('/images/hero-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center section-container pt-32 pb-20 ">
        {/* Heading (FIX: force white + shadow) */}
        <h1
          className={`${zenTokyoZoo.className} text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-bold leading-[1.1] mb-6 max-w-5xl drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]`}
        >
          Bengaluru&apos;s Largest Plot & Farmland Expo 2026
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white max-w-2xl mb-10 leading-relaxed">
          Discover premium villa plots, farmland, and high-growth investment
          opportunities at Bengaluru&apos;s most exclusive real estate showcase.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link href="/registration?type=visitor">
            <button className="px-8 py-4 bg-[#00620F] hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
              Register as Visitor
            </button>
          </Link>

          <Link href="/registration?type=exhibitor">
            <button className="px-8 py-4 bg-white/20 hover:bg-white/30 border border-white/40 text-white font-semibold rounded-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5">
              Book Exhibition Stall
            </button>
          </Link>
        </div>

        {/* Event info */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white/15 border border-white/20 backdrop-blur-md rounded-full px-4 py-2">
            <Calendar size={15} className="text-green-300" />
            <span className="text-white text-sm font-medium">
              {eventConfig.dateRange}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white/15 border border-white/20 backdrop-blur-md rounded-full px-4 py-2">
            <MapPin size={15} className="text-green-300" />
            <span className="text-white text-sm font-medium">
              {eventConfig.venue}, {eventConfig.address}
            </span>
          </div>
        </div>
      </div>

      {/* Optional: bottom fade (lighter now) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent z-0" />
    </section>
  );
};

export default HeroSection;
