"use client";

import Image from "next/image";
import DownloadButton from "../components/DownloadButton";

const pastEventImages = [
  "/images/past-events/2025/bpe25-1.jpg",
  "/images/past-events/2025/bpe25-2.jpg",
  "/images/past-events/2025/bpe25-3.jpg",
  "/images/past-events/2025/bpe25-4.jpg",
  "/images/past-events/2025/bpe25-5.jpg",
  "/images/past-events/2025/bpe25-6.jpg",
  "/images/past-events/2025/bpe25-7.jpg",
  "/images/past-events/2025/bpe25-8.jpg",
  "/images/past-events/2025/bpe25-9.jpg",
  "/images/past-events/2025/bpe25-10.jpg",
  "/images/past-events/2025/bpe25-11.jpg",
  "/images/past-events/2025/bpe25-12.jpg",
  "/images/past-events/2025/bpe25-13.jpg",
  "/images/past-events/2025/bpe25-14.jpg",
  "/images/past-events/2025/bpe25-15.jpg",
  "/images/past-events/2025/bpe25-16.jpg",
  "/images/past-events/2025/bpe25-17.jpg",
  "/images/past-events/2025/bpe25-18.jpg",
  "/images/2020events/bpe-2.jpg",
  "/images/2020events/bpe-4.jpg",
  "/images/2020events/bpe-6.jpg",
  "/images/2020events/bpe-7.jpg",
  "/images/2020events/bpe-9.jpg",
  "/images/2020events/bpe-12.jpg",
  "/images/2020events/bpe-13.jpg",
  "/images/2020events/bpe-14.jpg",
  "/images/2020events/bpe-18.jpg",
  "/images/2020events/bpe-20.jpg",
  "/images/2020events/bpe-21.jpg",
  "/images/2020events/bpe-22.jpg",
  "/images/2020events/bpe-23.jpg",
  "/images/2020events/bpe-26.jpg",
  "/images/2020events/bpe-27.jpg",
  "/images/2020events/bpe-28.jpg",
  "/images/2020events/bpe-29.jpg",
  "/images/2020events/bpe-30.jpg",
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
                src={src}
                alt={`Event ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
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
