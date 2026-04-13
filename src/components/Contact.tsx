"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const recaptchaToken = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, {
              action: "contact",
            })
            .then(resolve)
            .catch(reject);
        });
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

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
            quote.
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
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder-gray-400 outline-none transition-colors focus:border-[#1172ae]/50 focus:ring-1 focus:ring-[#1172ae]/20"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder-gray-400 outline-none transition-colors focus:border-[#1172ae]/50 focus:ring-1 focus:ring-[#1172ae]/20"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder-gray-400 outline-none transition-colors focus:border-[#1172ae]/50 focus:ring-1 focus:ring-[#1172ae]/20"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
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
              name="message"
              placeholder="Tell us about your project..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder-gray-400 outline-none transition-colors focus:border-[#1172ae]/50 focus:ring-1 focus:ring-[#1172ae]/20 resize-none"
            />

            {status === "success" && (
              <div className="flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                <CheckCircle className="h-4 w-4 shrink-0" />
                Thank you! Your message has been sent. We&apos;ll be in touch soon.
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full bg-[#1172ae] px-8 py-4 text-sm font-semibold text-white hover:bg-[#3b9dd4] transition-all duration-200 shadow-lg shadow-[#1172ae]/25 hover:shadow-[#1172ae]/40 hover:scale-105 disabled:opacity-60 disabled:pointer-events-none"
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {status === "loading" ? "Sending..." : "Send Message"}
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
                href="tel:(902)802-9044"
                className="flex items-start gap-4 group"
              >
                <div className="rounded-lg bg-[#1172ae]/10 p-2.5">
                  <Phone className="h-5 w-5 text-[#1172ae]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-black group-hover:text-[#1172ae] transition-colors">
                    (902) 802-9044
                  </p>
                </div>
              </a>

              <a
                href="mailto:derrick@marshallelectrichfx.com"
                className="flex items-start gap-4 group"
              >
                <div className="rounded-lg bg-[#1172ae]/10 p-2.5">
                  <Mail className="h-5 w-5 text-[#1172ae]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-black group-hover:text-[#1172ae] transition-colors">
                    derrick@marshallelectrichfx.com
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
                  <span className="text-black">8:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Saturday - Sunday</span>
                  <span className="text-black">Closed</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-[#1172ae]">
                
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
