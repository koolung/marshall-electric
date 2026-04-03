"use client";

import { motion } from "framer-motion";
import { Users, Zap, CheckCircle2, TrendingUp } from "lucide-react";

const stats = [
  { icon: Zap, value: "15+", label: "Years of Experience" },
  { icon: Users, value: "Locally", label: "Owned & Operated" },
  { icon: CheckCircle2, value: "HRM", label: "Area Served" },
  { icon: TrendingUp, value: "100%", label: "Satisfaction Rate" },
];

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24 md:py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1172ae]">
              About Us
            </span>
            <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl md:text-5xl leading-tight">
              Who
              <br />
              <span className="text-[#1172ae]">We Are</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Marshall Electric is a locally-owned and operated business that was
              established in 2020. Serving the HRM area, we take pride in all
              that we do and have over 15 years of experience in the electrical
              trade. This experience allows us to assist with a wide range of
              electrical projects, both large and small.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {["Locally Owned", "Licensed & Insured", "HRM Area", "Est. 2020"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right - Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:border-[#1172ae]/30 hover:shadow-lg hover:shadow-[#1172ae]/5"
              >
                <div className="mx-auto mb-3 inline-flex items-center justify-center rounded-xl bg-[#1172ae]/10 p-3">
                  <s.icon className="h-6 w-6 text-[#1172ae]" />
                </div>
                <p className="text-3xl font-bold text-black">{s.value}</p>
                <p className="mt-1 text-sm text-gray-500">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
