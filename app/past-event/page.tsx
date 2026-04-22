"use client";

import Image from "next/image";
import DownloadButton from "../components/DownloadButton";

const pastEventImages = [
  "2026/bpe26-1.webp",
  "2026/bpe26-2.webp",
  "2026/bpe26-3.webp",
  "2026/bpe26-4.webp",
  "2026/bpe26-5.webp",
  "2026/bpe26-6.webp",
  "2026/bpe26-7.webp",
  "2026/bpe26-8.webp",
  "2026/bpe26-9.webp",
  "2026/bpe26-10.webp",
  "2026/bpe26-11.webp",
  "2026/bpe26-12.webp",
  "2026/bpe26-13.webp",
  "2026/bpe26-14.webp",
  "2026/bpe26-15.webp",
  "2026/bpe26-16.webp",
  "2026/bpe26-17.webp",
  "2026/bpe26-18.webp",
  "2026/bpe26-19.webp",
  "2026/bpe26-20.webp",
  "2026/bpe26-21.webp",
  "2026/bpe26-22.webp",
  "2026/bpe26-23.webp",
  "2026/bpe26-24.webp",

  "2025/bpe25-1.webp",
  "2025/bpe25-2.webp",
  "2025/bpe25-3.webp",
  "2025/bpe25-4.webp",
  "2025/bpe25-5.webp",
  "2025/bpe25-6.webp",
  "2025/bpe25-7.webp",
  "2025/bpe25-8.webp",
  "2025/bpe25-9.webp",
  "2025/bpe25-10.webp",
  "2025/bpe25-11.webp",
  "2025/bpe25-12.webp",
  "2025/bpe25-13.webp",
  "2025/bpe25-14.webp",
  "2025/bpe25-15.webp",
  "2025/bpe25-16.webp",
  "2025/bpe25-17.webp",
  "2025/bpe25-18.webp",

  "2020/bpe20-1.webp",
  "2020/bpe20-2.webp",
  "2020/bpe20-3.webp",
  "2020/bpe20-4.webp",
  "2020/bpe20-5.webp",
  "2020/bpe20-6.webp",
  "2020/bpe20-7.webp",
  "2020/bpe20-8.webp",
  "2020/bpe20-9.webp",
  "2020/bpe20-10.webp",
  "2020/bpe20-11.webp",
  "2020/bpe20-12.webp",
  "2020/bpe20-13.webp",
  "2020/bpe20-14.webp",
  "2020/bpe20-15.webp",
  "2020/bpe20-16.webp",
  "2020/bpe20-17.webp",
  "2020/bpe20-18.webp",
];

export default function PastEventPage() {
  return (
    <section className="min-h-screen py-20 bg-gray-50 relative">
      {/* Download Button */}
      <DownloadButton />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            Past Events
          </h1>
          <p className="text-gray-600 text-lg">
            A glimpse into our successful exhibitions and memorable moments
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {pastEventImages.map((src, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={"/images/past-events/" + src}
                alt={`Event ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Hover Text */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-semibold text-sm">
                  Bengaluru Plot Expo {src.slice(0, 4) ?? ""}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
            Previous Event Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stats */}
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Event Statistics
              </h3>
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li>• 30+ Exhibitors participated</li>
                <li>• 500+ Visitors attended</li>
                <li>• 15+ Plot projects showcased</li>
                <li>• 10+ Farmland opportunities</li>
                <li>• 95% Exhibitor satisfaction rate</li>
              </ul>
            </div>

            {/* Success */}
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Success Stories
              </h3>
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li>• Multiple plot bookings on-site</li>
                <li>• New partnerships formed</li>
                <li>• Successful investor connections</li>
                <li>• Media coverage and recognition</li>
                <li>• Positive feedback from participants</li>
              </ul>
            </div>
          </div>

          {/* Summary */}
          <div className="text-center mt-14 max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our previous event was a tremendous success, bringing together the
              best in Bengaluru&apos;s real estate industry. The positive
              response and strong outcomes motivate us to make{" "}
              <span className="font-semibold text-green-700">BPE 2026</span>{" "}
              even bigger and better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
