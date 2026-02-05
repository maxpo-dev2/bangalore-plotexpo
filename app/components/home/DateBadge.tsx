import React from "react";

const DateBadge = () => {
  return (
    <div
      className="
      absolute  right-4 
        bottom-0 md:right-6
        w-[90vw] max-w-1/6 md:w-auto
        bg-gradient-to-b from-secondary to-primary
        shadow-lg rounded-t-3xl overflow-hidden
      "
    >
      <div className="flex items-center justify-center">
        {/* Left Date */}
        <div className="flex items-end gap-2 px-4 md:px-6 pt-4 text-white">
          <p className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-none drop-shadow-2xl">
            14
          </p>
          <div className="leading-tight">
            <p className="text-xs sm:text-sm md:text-2xl font-semibold drop-shadow-2xl">
              th
            </p>
            <p className="text-xs sm:text-sm md:text-2xl font-semibold drop-shadow-2xl">
              Mar 2026
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-12 sm:h-16 md:h-20 w-px bg-white/40"></div>

        {/* Right Date */}
        <div className="flex items-end gap-2 px-4 md:px-6 pt-4 text-white">
          <p className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-none drop-shadow-2xl">
            15
          </p>
          <div className="flex flex-col justify-between">
            <p className="text-xs sm:text-sm md:text-2xl font-semibold drop-shadow-2xl">
              th
            </p>
            <p className="text-xs sm:text-sm md:text-2xl font-semibold drop-shadow-2xl">
              Mar 2026
            </p>
          </div>
        </div>
      </div>

      {/* Location */}
      <p
        className="
          text-white text-center 
          text-xs sm:text-sm md:text-lg 
          font-bold drop-shadow-2xl 
          px-4 py-3
        "
      >
        SHUBH, CONVENTION CENTER, J P NAGAR, BANGALORE
      </p>
    </div>
  );
};

export default DateBadge;
