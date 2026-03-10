"use client";

import Image from "next/image";
import WAIcon from "@/public/images/wa-icon.svg";
import { useState } from "react";
// import WAEnquiryModal from '../register/WAEnquiryModel';

const WARoutingUrl =
  "https://api.whatsapp.com/send/?phone=919845114655&text=Hello%21+I%27m+interested+and+would+like+to+know+more.+Could+you+please+share+the+details%3F&type=phone_number&app_absent=0";

const WAEnquirySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {/* {isModalOpen ? (
        <WAEnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      ) : ( */}
      <div
        onClick={() => window.open(WARoutingUrl, "_blank")}
        className="fixed right-8 bottom-10 z-[999] flex cursor-pointer items-center gap-1 rounded-full bg-[#25D366] p-2 shadow-lg shadow-green-500/40 transition-all duration-300 hover:scale-105"
      >
        <Image src={WAIcon} width={40} height={40} alt="WhatsApp" />
        <span className="hidden pr-2 text-sm font-medium whitespace-nowrap text-white md:block">
          Chat With Us
        </span>
      </div>
      {/* )} */}
    </>
  );
};

export default WAEnquirySection;
