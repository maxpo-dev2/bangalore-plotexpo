"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Past Events", href: "/past-event" },
  {
    label: "Exhibitor Registration",
    href: "/registration?type=exhibitor",
  },
  {
    label: "Visitor Registration",
    href: "/registration?type=visitor",
  },
];

const NavLink = ({
  href,
  label,
  onClick,
  mobile = false,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  mobile?: boolean;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`
      font-semibold transition-colors
      ${mobile ? "text-base" : "text-sm lg:text-base xl:text-lg"}
      hover:text-primary
    `}
  >
    {label}
  </Link>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" fixed w-full top-0 bg-white text-black  py-3 z-50 shadow-md">
      <div className="section-container flex items-center justify-between relative">
        {/* Logo */}
        <div className="absolute top-full left-0 -mt-[65px] h-[160px] w-[200px] z-50">
          <Link href="/">
            <img
              src="/images/bpe-logo.png"
              alt="BPE Logo"
              className="h-24 md:h-full w-auto object-contain"
            />
          </Link>
        </div>

        {/* Spacer */}

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-centeritems-center gap-6 ">
          {navItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center ml-auto gap-4">
          <div className="hidden md:block">
            <Link href="/registration?type=enquiry">
              <Button variant="primary">Contact Us</Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded hover:bg-secondary transition"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-white shadow-inner px-6 pt-10 pb-8 space-y-4 flex flex-col ">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              {...item}
              mobile
              onClick={() => setIsMenuOpen(false)}
            />
          ))}

          <Button
            asChild
            className="w-full bg-white text-primary hover:bg-gray-100 font-semibold py-3"
          >
            <Link href="/registration" onClick={() => setIsMenuOpen(false)}>
              BOOK YOUR STALL
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
