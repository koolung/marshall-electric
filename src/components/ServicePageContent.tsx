"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { notFound } from "next/navigation";

interface Props {
  slug: string;
}

export default function ServicePageContent({ slug }: Props) {
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gray-50">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1172ae] transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center rounded-2xl bg-[#1172ae]/10 p-4">
                <service.icon className="h-8 w-8 text-[#1172ae]" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[#1172ae]">
                {service.tagline}
              </span>
            </div>

            <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
              {service.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1172ae] px-8 py-4 text-base font-semibold text-white hover:bg-[#3b9dd4] transition-all duration-200 shadow-lg shadow-[#1172ae]/25 hover:shadow-[#1172ae]/40 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call for a Free Estimate
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-black transition-all duration-200 hover:scale-105"
              >
                Send a Message
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detail content */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-6"
            >
              {/* Service image */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-100 mb-8">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>

              {service.fullDescription.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-600 leading-relaxed text-base"
                >
                  {paragraph}
                </p>
              ))}

              {service.bullets && service.bullets.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#1172ae] mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA bar */}
              <div className="mt-10 rounded-2xl border border-[#1172ae]/20 bg-[#1172ae]/5 p-8 text-center">
                <h3 className="text-xl font-bold text-black">
                  Ready to Get Started?
                </h3>
                <p className="mt-2 text-gray-500">
                  Contact Marshall Electric today for a free, no-obligation
                  estimate.
                </p>
                <a
                  href="tel:+15551234567"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1172ae] px-8 py-4 text-base font-semibold text-white hover:bg-[#3b9dd4] transition-all duration-200 shadow-lg shadow-[#1172ae]/25"
                >
                  <Phone className="h-5 w-5" />
                  (555) 123-4567
                </a>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-black mb-6">Other Services</h3>
                <ul className="space-y-4">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 rounded-xl p-3 -mx-3 transition-colors hover:bg-gray-50 group"
                      >
                        <div className="rounded-lg bg-[#1172ae]/10 p-2">
                          <s.icon className="h-4 w-4 text-[#1172ae]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800 group-hover:text-[#1172ae] transition-colors">
                            {s.title}
                          </p>
                          <p className="text-xs text-gray-400 line-clamp-1">
                            {s.tagline}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}
