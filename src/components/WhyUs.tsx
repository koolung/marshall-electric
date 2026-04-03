"use client";

import { motion } from "framer-motion";
import {
  ThumbsUp,
  DollarSign,
  HeadphonesIcon,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Fully licensed master electricians carrying comprehensive liability and workers' comp insurance.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Upfront quotes with no hidden fees. You approve the price before any work begins.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    desc: "We respect your schedule. Our team arrives on time and completes work within the agreed timeframe.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    desc: "Not happy? We'll make it right. Our workmanship guarantee covers every project we complete.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    desc: "Electrical emergencies don't wait, and neither do we. Round-the-clock emergency support.",
  },
  {
    icon: Sparkles,
    title: "Clean & Professional",
    desc: "We treat your property with respect - protective coverings, thorough cleanup, and a tidy finish.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24 md:py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#1172ae]">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl md:text-5xl">
            The Marshall Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            We go above and beyond to deliver exceptional service on every job.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="flex gap-4"
            >
              <div className="shrink-0 mt-1">
                <div className="inline-flex items-center justify-center rounded-lg bg-[#1172ae]/10 p-2.5">
                  <r.icon className="h-5 w-5 text-[#1172ae]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black">{r.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
