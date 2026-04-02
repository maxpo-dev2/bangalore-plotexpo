import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const images = [
  "2026/bpe26-15.webp",
  "2026/bpe26-1.webp",
  "2026/bpe26-3.webp",
  "2026/bpe26-4.webp",
  "2026/bpe26-14.webp",
  "2026/bpe26-6.webp",
  "2026/bpe26-7.webp",
  "2026/bpe26-8.webp",
  "2026/bpe26-9.webp",
];

const PastEventSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center ">
            Past Events Gallery
          </h2>
          <p className="text-black">
            A glimpse into our previous exhibitions, showcasing innovation,
            collaboration, and impact.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-square shadow-sm"
            >
              <img
                src={`/images/past-events/${img}`}
                alt={`Past Event ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Hover Text */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-semibold text-sm">
                  Bengaluru Plot Expo 2026
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link href="/past-event">
            <Button variant="primary" className="px-8 py-3 text-base">
              View All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PastEventSection;
