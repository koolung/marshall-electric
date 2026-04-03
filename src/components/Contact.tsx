"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-24 md:py-32 relative">
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
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl font-bold text-black sm:text-4xl md:text-5xl">
            Request a Free Estimate
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Ready to start your project? Contact us today for a no-obligation
            quote. We typically respond within 2 hours.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5 lg:col-span-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder-gray-400 outline-none transition-colors focus:border-[#1172ae]/50 focus:ring-1 focus:ring-[#1172ae]/20"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder-gray-400 outline-none transition-colors focus:border-[#1172ae]/50 focus:ring-1 focus:ring-[#1172ae]/20"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder-gray-400 outline-none transition-colors focus:border-[#1172ae]/50 focus:ring-1 focus:ring-[#1172ae]/20"
              />
              <select
                defaultValue=""
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-400 outline-none transition-colors focus:border-[#1172ae]/50 focus:ring-1 focus:ring-[#1172ae]/20"
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option>New Construction</option>
                <option>Service Upgrades</option>
                <option>Service Repair</option>
                <option>Renovation</option>
                <option>Lighting Upgrades</option>
                <option>EV Chargers</option>
                <option>Other</option>
              </select>
            </div>
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder-gray-400 outline-none transition-colors focus:border-[#1172ae]/50 focus:ring-1 focus:ring-[#1172ae]/20 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#1172ae] px-8 py-4 text-sm font-semibold text-white hover:bg-[#3b9dd4] transition-all duration-200 shadow-lg shadow-[#1172ae]/25 hover:shadow-[#1172ae]/40 hover:scale-105"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8 lg:col-span-2"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-6">
              <h3 className="font-semibold text-lg text-black">Contact Information</h3>

              <a
                href="tel:+15551234567"
                className="flex items-start gap-4 group"
              >
                <div className="rounded-lg bg-[#1172ae]/10 p-2.5">
                  <Phone className="h-5 w-5 text-[#1172ae]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-black group-hover:text-[#1172ae] transition-colors">
                    (555) 123-4567
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@marshallelectric.com"
                className="flex items-start gap-4 group"
              >
                <div className="rounded-lg bg-[#1172ae]/10 p-2.5">
                  <Mail className="h-5 w-5 text-[#1172ae]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-black group-hover:text-[#1172ae] transition-colors">
                    info@marshallelectric.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#1172ae]/10 p-2.5">
                  <MapPin className="h-5 w-5 text-[#1172ae]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-black">
                    Serving the HRM Area
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-lg text-black mb-4">Business Hours</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between text-gray-500">
                  <span>Monday - Friday</span>
                  <span className="text-black">7:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Saturday</span>
                  <span className="text-black">8:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Sunday</span>
                  <span className="text-black">Emergency Only</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-[#1172ae]">
                24/7 Emergency service available
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
