"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

interface NavbarProps {
  forceDarkLogo?: boolean;
}

export default function Navbar({ forceDarkLogo = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <img src={forceDarkLogo || scrolled ? "/images/logo.svg" : "/images/logo-white.svg"} alt="Logo" className={`h-14 w-28 transition-transform duration-300 group-hover:scale-110 ${forceDarkLogo || scrolled ? "text-[#1172ae]" : "text-white"}`} />
          </div>
          {/* <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-black" : "text-white"}`}>
            Marshall <span className="text-[#1172ae]">Electric</span>
          </span> */}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium hover:text-[#1172ae] transition-colors duration-200 relative group ${scrolled ? "text-gray-600" : "text-white/80"}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#1172ae] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:(902)802-9044"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#1172ae] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3b9dd4] transition-colors duration-200 shadow-lg shadow-[#1172ae]/25"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden hover:text-[#1172ae] transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-black/5"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-[#1172ae] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:(902)802-9044"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1172ae] px-6 py-3 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
