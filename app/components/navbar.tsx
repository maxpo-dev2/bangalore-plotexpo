"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Past Events", href: "/past-event" },
  { label: "Exhibitor Registration", href: "/registration?type=exhibitor" },
  { label: "Visitor Registration", href: "/registration?type=visitor" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white text-black shadow-sm py-2"
          : "bg-transparenttext-white py-4"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <div
            className={`rounded-lg transition-all duration-300 `}
          >
            <img
              src="/images/bpe-logo.png"
              alt="BPE Logo"
              className={`w-auto object-contain transition-all duration-300 transform ${
                scrolled ? "h-12 md:h-14 scale-90" : "h-20 md:h-24 scale-100"
              }`}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm xl:text-base font-medium transition-all duration-200 ${
                scrolled
                  ? "text-primary hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Link href="/registration?type=enquiry">
              <Button variant="primary" size="sm">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled
                ? "hover:bg-gray-100 text-black"
                : "hover:bg-white/10 text-white"
            }`}
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#00620F] text-white px-6 pt-6 pb-8 space-y-5 flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-base text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4 last:border-0"
            >
              {item.label}
            </Link>
          ))}

          <Button
            asChild
            className="w-full bg-white text-primary hover:bg-gray-100 font-semibold py-3 mt-2"
          >
            <Link
              href="/registration?type=exhibitor"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Your Stall
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
