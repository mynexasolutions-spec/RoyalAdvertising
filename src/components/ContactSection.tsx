"use client";

import React, { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Compose formatted WhatsApp text and redirect to +91 93152 38601
    const text = encodeURIComponent(
      `Hello Royal Advertising,\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919315238601?text=${text}`, "_blank");

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="bg-white py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Outer dark container */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#121418] shadow-2xl border border-gray-800">

          <div className="grid lg:grid-cols-[0.85fr_1.5fr] items-stretch min-h-[560px]">

            {/* ── LEFT: Dark Visual Banner ── */}
            <div className="relative h-full p-8 sm:p-12 lg:p-14 flex flex-col justify-between z-10">

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2.5px] bg-[#e31e24]" />
                  <span className="text-[12px] font-bold tracking-[0.28em] text-[#e31e24] uppercase">
                    Our Commitment
                  </span>
                </div>

                <h2 className="text-white font-black text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.05] tracking-tight mb-5">
                  LET&apos;S BRING
                  <br />
                  YOUR IDEAS
                  <br />
                  <span className="text-white">TO LIFE.</span>
                </h2>

                <p className="text-gray-300 text-[15px] lg:text-[16px] leading-relaxed max-w-[360px] mb-8">
                  Have a project in mind? Get in touch with us today.
                </p>

                <a
                  href="tel:+911146252249"
                  className="inline-flex items-center gap-3 bg-[#e31e24] hover:bg-[#c01820] text-white text-[14px] font-bold px-7 py-3 rounded-full transition-all duration-200 group w-fit shadow-lg shadow-red-600/30"
                >
                  <Phone size={15} />
                  Call Now: 011 4625 2249
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800/80 flex flex-wrap gap-x-4 gap-y-1 text-gray-500 text-xs font-semibold">
                <span>Pan-India Presence</span>
                <span>•</span>
                <span>24/7 Client Support</span>
                <span>•</span>
                <span>ISO 9001 Certified</span>
              </div>
            </div>

            {/* ── RIGHT: White Card with Full-Width Form ── */}
            <div className="p-4 sm:p-6 lg:p-8 flex items-center">
              <div
                id="contact-form"
                className="bg-white rounded-[26px] p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-100 w-full"
              >

                {/* Title */}
                <h3 className="text-[26px] sm:text-[30px] font-black text-gray-900 tracking-tight mb-1.5">
                  Get in Touch
                </h3>
                <p className="text-[14px] text-gray-500 mb-7">
                  Send us a message and we will connect with you on <span className="font-semibold text-gray-800">+91 93152 38601</span>.
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 text-sm font-semibold p-5 rounded-2xl text-center mb-6">
                    Connecting to +91 93152 38601 on WhatsApp... Thank you for reaching out!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 text-[15px] font-medium text-gray-800 placeholder-gray-400 bg-gray-50 focus:outline-none focus:border-[#e31e24] focus:bg-white focus:ring-0 transition-all"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 text-[15px] font-medium text-gray-800 placeholder-gray-400 bg-gray-50 focus:outline-none focus:border-[#e31e24] focus:bg-white focus:ring-0 transition-all"
                      />
                    </div>

                    {/* Message */}
                    <textarea
                      rows={5}
                      required
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 text-[15px] font-medium text-gray-800 placeholder-gray-400 bg-gray-50 focus:outline-none focus:border-[#e31e24] focus:bg-white focus:ring-0 transition-all resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full bg-[#e31e24] hover:bg-[#c01820] text-white font-bold text-[16px] py-4 rounded-xl transition-all shadow-md shadow-red-500/25 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      Send Message
                      <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}

                {/* Contact info row below form */}
                <div className="mt-7 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <a
                    href="tel:+911146252249"
                    className="flex items-center gap-3 text-gray-700 hover:text-[#e31e24] transition-colors group flex-shrink-0"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-50 text-[#e31e24] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e31e24] group-hover:text-white transition-all">
                      <Phone size={17} />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">Direct Line</p>
                      <p className="text-[14px] font-black text-gray-900 group-hover:text-[#e31e24] leading-tight whitespace-nowrap">+91 11 4625 2249</p>
                      <p className="text-[12px] font-semibold text-gray-500 leading-tight whitespace-nowrap">+91 93152 38601</p>
                    </div>
                  </a>

                  <a
                    href="mailto:royaladvertising786@gmail.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-[#e31e24] transition-colors group flex-shrink-0"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-50 text-[#e31e24] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e31e24] group-hover:text-white transition-all">
                      <Mail size={17} />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">Email us</p>
                      <p className="text-[13px] sm:text-[14px] font-bold leading-tight whitespace-nowrap">
                        royaladvertising786@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-gray-700 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-50 text-[#e31e24] flex items-center justify-center flex-shrink-0">
                      <MapPin size={17} />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 font-medium">Location</p>
                      <p className="text-[13px] sm:text-[14px] font-bold leading-tight whitespace-nowrap">Northern India</p>
                      <p className="text-[12px] text-gray-500 leading-tight whitespace-nowrap">Pan-India Network</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
