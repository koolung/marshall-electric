"use client";

import { Zap, Phone, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-[#1172ae]" />
              <span className="text-lg font-bold text-black">
                Marshall <span className="text-[#1172ae]">Electric</span>
              </span>
            </a>
            <p className="text-sm text-gray-500">
              Professional electrical services for the HRM area.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-black mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="tel:(902)802-9044"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1172ae] transition-colors"
              >
                <Phone className="h-4 w-4" />
                (902) 802-9044
              </a>
              <a
                href="mailto:derrick@marshallelectrichfx.com"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1172ae] transition-colors"
              >
                <Mail className="h-4 w-4" />
                derrick@marshallelectrichfx.com
              </a>
            </div>
          </div>

          {/* Links & Social */}
          <div>
            <h3 className="font-semibold text-black mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/marshallelectrichfx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#1172ae]/10 text-[#1172ae] hover:bg-[#1172ae] hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-4 pt-8 border-t border-gray-200 md:flex-row md:justify-between">
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#hero" className="hover:text-[#1172ae] transition-colors">
              Home
            </a>
            <a
              href="#services"
              className="hover:text-[#1172ae] transition-colors"
            >
              Services
            </a>
            <a href="#about" className="hover:text-[#1172ae] transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="hover:text-[#1172ae] transition-colors"
            >
              Contact
            </a>
          </nav>

          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Marshall Electric. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
