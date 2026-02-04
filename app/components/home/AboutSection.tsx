import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function AboutUsSection() {
  return (
    <div className="relative min-h-screen" id="about">
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Video Section */}
          <div className="w-full h-[260px] sm:h-[360px] lg:h-full overflow-hidden">
            <video
              className="w-full h-full object-cover"
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
          </div>

          {/* Content Section */}
          <div
            className="
              bg-secondary
              w-full
              my-10
              lg:-translate-x-10
              p-6 sm:p-10 
            "
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              About Us
            </h1>

            <p className="text-gray-700 mb-4 text-base sm:text-lg">
              Welcome to the{" "}
              <strong className="text-primary">Bengaluru Plot Expo 2026</strong>{" "}
              - the city's largest and most exclusive real estate showcase
              dedicated entirely to plot and farmland investments.
            </p>

            <p className="text-gray-700 mb-6 text-base sm:text-lg">
              This two-day mega event is designed to bring together leading
              developers, land aggregators, and investors under one roof.
              Whether you're looking to showcase your plotted development, reach
              a premium audience, or connect with potential buyers,{" "}
              <strong className="text-primary">BPE 2026</strong> offers the
              perfect platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button variant="outline">Know More</Button>
              </Link>
              <Link href="/registration?type=exhibitor">
                <Button variant="secondary">Exhibit</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
