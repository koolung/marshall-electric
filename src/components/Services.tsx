"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#1172ae]">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            From simple repairs to complex installations, Marshall Electric has
            the expertise to handle any electrical project safely and
            efficiently.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.slug}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-[#1172ae]/30 hover:shadow-lg hover:shadow-[#1172ae]/5"
            >
              {/* Image */}
              <div className="relative md:h-60 h-48 overflow-hidden bg-gray-100">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:from-white/0 from-white/0 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-1 flex-col p-6">
                <div className="mb-3 inline-flex w-fit items-center justify-center rounded-xl bg-[#1172ae]/10 p-2.5">
                  <s.icon className="h-5 w-5 text-[#1172ae]" />
                </div>
                <h3 className="text-lg font-semibold text-black">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                  {s.description}
                </p>

                {/* Actions */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="tel:(902)802-9044"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1172ae] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3b9dd4] transition-colors duration-200 shadow-lg shadow-[#1172ae]/25"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm font-medium text-gray-500 hover:text-[#1172ae] transition-colors duration-200"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
