"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Meghan Brodmann-Bishop",
    text: "Derrick and his team are fantastic. We needed to upgrade our electrical panel and they were responsive and easy to work with. We are very happy with the service - would highly recommend!",
    rating: 5,
    date: "a year ago",
  },
  {
    name: "Kim Olson",
    text: "Derrick recently upgraded my electrical panel and I couldn't be happier with the service. He is very skilled, kind and kept me updated throughout the process.",
    rating: 5,
    date: "3 months ago",
  },
  {
    name: "Brian MacDonald",
    text: "Derrick and team did a fantastic job, great to work with and very accommodating. Quality work, I definitely would use Marshall Electric again.",
    rating: 5,
    date: "9 months ago",
  },
];

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 md:py-32 relative">
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
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Don&apos;t just take our word for it — hear from homeowners and businesses we&apos;ve served.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col"
            >
              {/* Google header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-[#1172ae]">
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-black">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.date}</p>
                </div>
                <GoogleLogo className="h-5 w-5" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="flex-1 text-sm leading-relaxed text-gray-600">
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Find us on Google button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.google.com/search?q=Marshall+Electric+HRM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 hover:scale-105"
          >
            <GoogleLogo className="h-5 w-5" />
            Find us on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
