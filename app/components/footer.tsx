import Link from "next/link";
import { Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#00620F] text-white">
      <div className="section-container  py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_3fr] gap-12">
          {/* Logo Column */}
          <div className="flex flex-col items-start">
            <img
              src="/images/bpe-logo.png"
              alt="BPE Logo"
              className="h-24 w-auto object-contain mb-6"
            />

            <p className="text-sm text-green-100 max-w-xs leading-relaxed">
              Bengaluru Plot Expo is the city’s premier platform dedicated to
              plotted developments, farmland investments, and real estate
              opportunities.
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Event Info */}
            <div>
              <h3 className="font-semibold text-base mb-4 tracking-wide">
                Event
              </h3>
              <ul className="space-y-2 text-sm text-green-100">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/past-event" className="hover:text-white">
                    Past Events
                  </Link>
                </li>
                <li>
                  <Link href="/past-event" className="hover:text-white">
                    Exhibition
                  </Link>
                </li>
                <li>
                  <Link href="/past-event" className="hover:text-white">
                    Exhibitors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Participants */}
            <div>
              <h3 className="font-semibold text-base mb-4 tracking-wide">
                Participants
              </h3>
              <ul className="space-y-2 text-sm text-green-100">
                <li>
                  <Link href="/past-event" className="hover:text-white">
                    Exhibition
                  </Link>
                </li>
                <li>
                  <Link href="/past-event" className="hover:text-white">
                    Exhibitors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Registration */}
            <div>
              <h3 className="font-semibold text-base mb-4 tracking-wide">
                Registration
              </h3>
              <ul className="space-y-2 text-sm text-green-100">
                <li>
                  <Link
                    href="/registration?type=exhibitor"
                    className="hover:text-white"
                  >
                    Exhibitor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/registration?type=visitor"
                    className="hover:text-white"
                  >
                    Visitor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/registration?type=enquiry"
                    className="hover:text-white"
                  >
                    Enquiry
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-base mb-4 tracking-wide">
                Contact
              </h3>

              <p className="text-sm text-green-100 mb-2">
                <a href="tel:9845114655" className="hover:text-white">
                  +91 98451 14655
                </a>
              </p>

              <p className="text-sm text-green-100 mb-4">
                <a
                  href="mailto:annu@mindsquaremedia.com"
                  className="hover:text-white"
                >
                  annu@mindsquaremedia.com
                </a>
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {[Twitter, Instagram, Linkedin, MessageCircle].map(
                  (Icon, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#00620F] transition"
                    >
                      <Icon size={18} />
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-green-100">
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>

            {/* Partner Logo */}
            <img
              src="/images/mind-square-logo W (1).png"
              alt="Mindsquare Logo"
              className="h-14 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
