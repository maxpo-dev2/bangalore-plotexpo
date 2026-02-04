import { zenTokyoZoo } from "@/app/fonts";
import DateBadge from "./DateBadge";

const HeroSection = () => {
  return (
    <section
      className="relative h-[calc(100vh-80px)] bg-center bg-cover bg-[#C6FFC2] bg-no-repeat "
      style={{
        backgroundImage: "url('/images/hero-banner.png')",
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10  h-full flex flex-col justify-start pt-[14vh]">
        <div className="flex justify-center items-center">
          <h1
            className={`${zenTokyoZoo.className} text-2xl  md:text-8xl font-bold leading-[1] text-primary inline-block whitespace-normal sm:whitespace-nowrap`}
          >
            Bengaluru Plot Expo 2026
          </h1>
        </div>
        <DateBadge />
      </div>
    </section>
  );
};

export default HeroSection;
