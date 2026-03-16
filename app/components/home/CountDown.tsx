"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

interface CountdownProps {
  targetDate: string;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const eventDate = new Date(targetDate).getTime();

  const [timeLeft, setTimeLeft] = useState(eventDate - Date.now());
  const [showConfetti, setShowConfetti] = useState(true);

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = eventDate - Date.now();

      if (diff <= 0) {
        setTimeLeft(0);
        setShowConfetti(true);
        clearInterval(timer);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <>
      {showConfetti ? (
        <>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={800}
            recycle={false}
            colors={["#16a34a", "#ffffff"]}
          />
          <div className="flex justify-center mt-8 px-4">
            <div className="group w-full max-w-xl">
              <div className="bg-white/70 backdrop-blur-md border border-green-200 shadow-xl rounded-2xl px-6 py-6 md:px-10 md:py-8 text-center transition-all duration-300 hover:shadow-2xl  cursor-pointer">
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-700 mb-2">
                  Thank You!..
                </p>

                <p className="text-lg md:text-xl text-green-800 font-medium mb-4">
                  The event has successfully concluded.
                </p>

                <p className="text-sm md:text-base text-gray-700">
                  We sincerely thank all the{" "}
                  <span className="font-semibold">
                    Exhibitors and Participants
                  </span>{" "}
                  for being part of the event and making it a wonderful
                  experience.
                </p>

                <p className="text-xs text-black mt-4">
                  We look forward to seeing you again at our future events.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-6 px-4">
          <div className="w-full max-w-xl bg-white/60 backdrop-blur-md border border-green-200 shadow-xl rounded-2xl px-4 py-5 md:px-8 md:py-6">
            <div className="grid grid-cols-7 items-center gap-2 md:gap-4 text-center">
              <div>
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-700">
                  {days}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-green-800 mt-1">
                  Days
                </div>
              </div>

              <div className="text-xl md:text-3xl font-bold text-green-700">
                :
              </div>

              <div>
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-700">
                  {hours}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-green-800 mt-1">
                  Hours
                </div>
              </div>

              <div className="text-xl md:text-3xl font-bold text-green-700">
                :
              </div>

              <div>
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-700">
                  {minutes}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-green-800 mt-1">
                  Minutes
                </div>
              </div>

              <div className="text-xl md:text-3xl font-bold text-green-700">
                :
              </div>

              <div>
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-700">
                  {seconds}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-green-800 mt-1">
                  Seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Countdown;
