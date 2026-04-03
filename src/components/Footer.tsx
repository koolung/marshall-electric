"use client";

import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-[#1172ae]" />
            <span className="text-lg font-bold text-black">
              Marshall <span className="text-[#1172ae]">Electric</span>
            </span>
          </a>

          {/* Links */}
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

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Marshall Electric. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
