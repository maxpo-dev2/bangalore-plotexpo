import Link from "next/link";
import { Instagram, Linkedin, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { eventConfig } from "@/config/event";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/bengaluru_plot_expo/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/bengaluruplotexpo2025/",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/showcase/bengaluru-plot-expo/",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#00620F] text-white">
      <div className="section-container py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_3fr] gap-12 mb-12">
          {/* Brand column */}
          <div className="flex flex-col">
            <img
              src="/images/bpe-logo.png"
              alt="BPE Logo"
              className="h-20 w-auto object-contain mb-5 self-start"
            />
            <p className="text-green-100 text-sm leading-relaxed max-w-xs mb-6">
              Bengaluru Plot Expo is the city&apos;s premier platform dedicated to
              plotted developments, farmland investments, and high-growth real
              estate opportunities.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#00620F] transition-all duration-200"
                >
                  <s.icon size={17} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Event */}
            <div>
              <h3 className="font-semibold text-white text-sm mb-4 tracking-wide uppercase">
                Event
              </h3>
              <ul className="space-y-2.5 text-sm text-green-100">
                <li>
                  <Link href="/#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/past-event" className="hover:text-white transition-colors">
                    Past Events
                  </Link>
                </li>
                <li>
                  <Link href="/past-event" className="hover:text-white transition-colors">
                    Exhibition
                  </Link>
                </li>
                <li>
                  <Link href="/past-event" className="hover:text-white transition-colors">
                    Exhibitors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Register */}
            <div>
              <h3 className="font-semibold text-white text-sm mb-4 tracking-wide uppercase">
                Register
              </h3>
              <ul className="space-y-2.5 text-sm text-green-100">
                <li>
                  <Link
                    href="/registration?type=visitor"
                    className="hover:text-white transition-colors"
                  >
                    As Visitor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/registration?type=exhibitor"
                    className="hover:text-white transition-colors"
                  >
                    As Exhibitor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/registration?type=enquiry"
                    className="hover:text-white transition-colors"
                  >
                    Enquiry
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-white text-sm mb-4 tracking-wide uppercase">
                Legal
              </h3>
              <ul className="space-y-2.5 text-sm text-green-100">
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white text-sm mb-4 tracking-wide uppercase">
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-green-100">
                <li className="flex items-start gap-2">
                  <Phone size={14} className="mt-0.5 shrink-0 text-green-300" />
                  <a
                    href={`tel:${eventConfig.phone.replace(/\s/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {eventConfig.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={14} className="mt-0.5 shrink-0 text-green-300" />
                  <a
                    href={`mailto:${eventConfig.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {eventConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-green-300" />
                  <span className="leading-snug">
                    {eventConfig.venue},{" "}
                    {eventConfig.address}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-green-200 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Bengaluru Plot Expo. All rights reserved.
            </p>
            <img
              src="/images/mind-square-logo W (1).png"
              alt="Mind Square Media"
              className="h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
