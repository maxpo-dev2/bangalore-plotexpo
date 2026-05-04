// app/register/thankyou/ThankYouClient.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Home, Info } from "lucide-react";

const messages: Record<
  string,
  { title: string; subtitle: string; description: string }
> = {
  exhibitor: {
    title: "Thank You For Registering as an Exhibitor!",
    subtitle: "You are now part of the Bengaluru Plot Expo 2026 community",
    description:
      "Our team will be in touch with you soon to discuss your exhibition requirements.",
  },
  visitor: {
    title: "Thank You For Registering as a Visitor!",
    subtitle: "You are now registered for Bengaluru Plot Expo 2026",
    description:
      "We look forward to seeing you at the event. You will receive further details via email.",
  },
  sponsor: {
    title: "Thank You For Your Sponsorship Interest!",
    subtitle: "You are now part of the Bengaluru Plot Expo 2026 community",
    description:
      "Our sponsorship team will contact you shortly to discuss partnership opportunities.",
  },
  enquiry: {
    title: "Thank You For Your Enquiry!",
    subtitle: "We have received your message",
    description:
      "Our team will get back to you within 24 hours with the information you requested.",
  },
  delegate: {
    title: "Thank You For Registering as a Delegate!",
    subtitle: "Your delegate registration is confirmed",
    description:
      "Our team will be in touch with you soon with further details about your participation.",
  },
};

export default function ThankYouClient() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type")?.toLowerCase() ?? "enquiry";
  const [visible, setVisible] = useState(false);
  const [checkDrawn, setCheckDrawn] = useState(false);

  const heading =
    type.charAt(0).toUpperCase() + type.slice(1) || "Registration";
  const msg = messages[type] ?? messages.enquiry;

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 80);
    const t2 = setTimeout(() => setCheckDrawn(true), 300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white md:mt-16 flex items-center justify-center px-4 py-24">
      <div
        className={`w-full max-w-6xl transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Top banner — spans full width */}
        <div className="bg-[#00620F] text-white text-center py-5 px-8 rounded-t-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-75 mb-1">
            Bengaluru Plot Expo 2026
          </p>
          <h1 className="text-xl lg:text-2xl font-bold">
            BPE – {heading} Registration
          </h1>
        </div>

        {/* Two-column row on lg+, single column on mobile */}
        <div className="flex flex-col lg:flex-row rounded-b-2xl overflow-hidden shadow-2xl shadow-green-100">
          {/* LEFT — content */}
          <div className="bg-white flex-1 px-8 pt-10 pb-10 flex flex-col justify-center">
            {/* Animated checkmark */}
            <div className="flex justify-center mb-8">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full bg-green-100 scale-125 animate-pulse" />
                <div className="relative w-24 h-24 bg-[#00620F] rounded-full flex items-center justify-center shadow-lg shadow-green-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-11 h-11"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeDasharray="24"
                      strokeDashoffset={checkDrawn ? "0" : "24"}
                      style={{ transition: "stroke-dashoffset 0.55s ease" }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Main text */}
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 text-center leading-tight mb-3">
              {msg.title}
            </h2>
            <p className="text-base font-semibold text-[#00620F] text-center mb-2">
              {msg.subtitle}
            </p>
            <p className="text-sm text-gray-500 text-center max-w-md mx-auto mb-8">
              {msg.description}
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-7">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                Event Details
              </span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Event detail cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
              <div className="flex items-start gap-3 bg-[#f6fdf6] border border-green-100 rounded-xl p-4">
                <div className="w-9 h-9 bg-[#00620F] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                    Date
                  </p>
                  <p className="text-sm font-bold text-gray-800">
                    27–28 June 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#f6fdf6] border border-green-100 rounded-xl p-4">
                <div className="w-9 h-9 bg-[#00620F] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                    Venue
                  </p>
                  <p className="text-sm font-bold text-gray-800 leading-snug">
                    White House Convention Center, HSR Layout, Bengaluru
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 bg-[#00620F] hover:bg-[#004d0b] text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center gap-2 border-2 border-[#00620F] text-[#00620F] hover:bg-[#f0faf0] font-semibold px-8 py-3 rounded-full transition-colors text-sm"
              >
                <Info className="w-4 h-4" />
                About BPE 2026
              </Link>
            </div>

            {/* Footer contact */}
            <p className="text-xs text-gray-400 text-center mt-8">
              For any queries, email us at{" "}
              <a
                href="mailto:annu@mindsquaremedia.com"
                className="text-[#00620F] hover:underline font-medium"
              >
                annu@mindsquaremedia.com
              </a>
            </p>
          </div>

          {/* RIGHT — image (laptop only) */}
          <div className="hidden lg:block lg:w-[420px] xl:w-[480px] relative">
            <Image
              src="/images/register.webp"
              alt="Bengaluru Plot Expo venue"
              fill
              className="object-cover"
              priority
            />
            {/* dark gradient overlay at bottom for polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary  via-[#ffffff2f] to-transparent" />
            <div className="absolute bottom-8 left-6 right-6">
              <p className="text-white font-bold text-lg leading-snug drop-shadow">
                White House Convention Center
              </p>
              <p className="text-white text-sm mt-1 drop-shadow">
                HSR Layout, Bengaluru · 27–28 June 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
