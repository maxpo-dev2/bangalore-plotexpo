import { zenTokyoZoo } from "@/app/fonts";
import DateBadge from "./DateBadge";
import Countdown from "./CountDown";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-center bg-cover overflow-x-hidden bg-[#C6FFC2] bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-banner.png')",
      }}
    >
      <div className="relative z-10 h-full flex flex-col justify-start pt-[14vh]">
        <div className="flex justify-center items-center">
          <h1
            className={`${zenTokyoZoo.className} text-3xl md:text-8xl font-bold leading-[1] text-primary`}
          >
            Bengaluru Plot Expo 2026
          </h1>
        </div>

        <Countdown targetDate="2026-03-14T09:30:00+05:30" />
        <DateBadge />
      </div>
    </section>
  );
};

export default HeroSection;
