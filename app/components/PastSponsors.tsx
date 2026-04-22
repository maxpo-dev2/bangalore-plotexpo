"use client";

import Image from "next/image";
import React from "react";

const sponsorLogos = [
  "/images/past-sponsor/sbi.png",
  "/images/past-sponsor/rd.png",
  "/images/past-sponsor/ts.png",
  "/images/past-sponsor/h.png",
  "/images/past-sponsor/gl.png",
  "/images/past-sponsor/log-1.png",
  "/images/past-sponsor/log-2.png",
  "/images/past-sponsor/log-3.png",
  "/images/past-sponsor/log-5.png",
  "/images/past-sponsor/log-6.png",
  "/images/past-sponsor/log-7.png",
  "/images/past-sponsor/log-8.png",
  "/images/past-sponsor/log-9.png",
  "/images/past-sponsor/log-10.png",
  "/images/past-sponsor/log-11.png",
  "/images/past-sponsor/log-12.png",
  "/images/past-sponsor/log-13.png",
  "/images/past-sponsor/log-14.png",
  "/images/past-sponsor/log-15.png",
  "/images/past-sponsor/log-16.png",
  "/images/past-sponsor/log-17.png",
  "/images/past-sponsor/log-18.png",
  "/images/past-sponsor/log-19.png",
  "/images/past-sponsor/log-20.png",
  "/images/past-sponsor/log-21.png",
  "/images/past-sponsor/log-22.png",
  "/images/past-sponsor/log-23.png",
];

export default function PastSponsors() {
  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="section-container text-center mb-10">
        <span className="text-[#00620F] text-sm font-semibold uppercase tracking-widest">
          Our Network
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-black mt-3">
          Past Exhibitors &amp; Partners
        </h2>
        <p className="text-[#444444] mt-3 text-base max-w-xl mx-auto">
          Trusted by Bengaluru&apos;s most reputed real estate developers and land
          aggregators.
        </p>
      </div>

      {/* Scrolling logo strip */}
      <div className="border-t border-b border-gray-100 py-8 overflow-hidden relative group bg-white">
        <div className="w-full whitespace-nowrap overflow-hidden">
          <div className="inline-flex gap-5 animate-marquee group-hover:paused">
            {[...sponsorLogos, ...sponsorLogos].map((src, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-3 rounded-xl h-[90px] w-[130px] flex items-center justify-center shrink-0 transition-all duration-300 hover:shadow-md hover:border-green-200 group/logo"
              >
                <Image
                  src={src}
                  alt={`Partner ${(index % sponsorLogos.length) + 1}`}
                  width={110}
                  height={70}
                  className="object-contain w-full h-full grayscale group-hover/logo:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
          @media (max-width: 768px) {
            .animate-marquee {
              animation-duration: 90s;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
