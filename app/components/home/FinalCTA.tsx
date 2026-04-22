import Link from "next/link";
import { eventConfig } from "@/config/event";
import { Calendar, MapPin } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#00620F] text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge */}
        <span className="inline-block bg-white/15 text-green-200 text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-7">
          Limited Spots Available
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Don&apos;t Miss Bengaluru&apos;s Biggest Plot Investment Event
        </h2>

        <p className="text-green-100 text-lg mb-8 leading-relaxed">
          Join thousands of investors and top developers at Bengaluru&apos;s most
          exclusive real estate showcase. Early registrations get priority access.
        </p>

        {/* Event info */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
            <Calendar size={15} className="text-green-300 shrink-0" />
            <span className="text-white text-sm font-medium">
              {eventConfig.dateRange}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
            <MapPin size={15} className="text-green-300 shrink-0" />
            <span className="text-white text-sm font-medium">
              {eventConfig.venue}, {eventConfig.address}
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/registration?type=visitor">
            <button className="px-10 py-4 bg-white text-[#00620F] font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 text-base shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
              Register Now →
            </button>
          </Link>
          <Link href="/registration?type=exhibitor">
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200 text-base w-full sm:w-auto hover:-translate-y-0.5">
              Book Your Stall
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
