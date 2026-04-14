"use client";

import { motion } from "framer-motion";
import { ArrowDown, Shield, Clock, Award } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/images/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1172ae]/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className=" md:mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm text-white">
            <Shield className="h-4 w-4" />
            Licensed &amp; Insured Professionals
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-3 md:mt-6 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Powering Your World
          <br />
          <span className="bg-gradient-to-r from-[#3b9dd4] to-[#1172ae] bg-clip-text text-transparent">
            With Precision
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mt-2 md:mt-6 max-w-2xl text-md md:text-lg text-white/80 leading-relaxed "
        >
          Marshall Electric delivers expert residential and commercial electrical
          solutions. From new installations to emergency repairs — we keep the
          lights on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-5 md:mt-10 flex flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-[#1172ae]  text-sm md:text-md  px-4 py-4 md:px-8 md:py-4 text-base font-semibold text-white hover:bg-[#3b9dd4] transition-all duration-200 shadow-lg shadow-[#1172ae]/25 hover:shadow-[#1172ae]/40 hover:scale-105"
          >
            Get a Free Estimate
          </a>
          <a
            href="#services"
            className="rounded-full border text-sm md:text-md border-white/30 bg-white/10 px-4 py-4 md:px-8 md:py-4 text-base font-semibold text-white hover:bg-white/20 transition-all duration-200 hover:scale-105"
          >
            Our Services
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-5 md:mt-16 flex flex-wrap items-center justify-center gap-2 md:gap-8 text-sm text-white/70"
        >
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-[#3b9dd4]" />
            <span>15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#3b9dd4]" />
            <span>Fully Licensed &amp; Insured</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-[#3b9dd4] transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
