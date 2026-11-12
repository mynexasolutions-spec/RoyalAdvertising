"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Outdoor Advertising",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = encodeURIComponent(
      `Hello Royal Advertising,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919315238601?text=${text}`, "_blank");

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "Outdoor Advertising", message: "" });
    }, 4000);
  };

  return (
    <>
      <Navbar />

      <main className="pt-[68px] lg:pt-20 bg-white">

        {/* ── HERO BANNER ── */}
        <section className="relative bg-[#0d0f12] text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e31e24_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e31e24]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[3px] bg-[#e31e24]" />
                <span className="text-[13px] font-bold tracking-[0.28em] text-[#e31e24] uppercase">
                  Contact Us
                </span>
              </div>

              <h1 className="text-[42px] sm:text-[54px] lg:text-[64px] font-black leading-[1.05] tracking-tight mb-6">
                LET'S TALK <br />
                <span className="text-[#e31e24]">ABOUT YOUR BRAND.</span>
              </h1>

              <p className="text-gray-300 text-[17px] sm:text-[19px] leading-relaxed font-normal max-w-2xl">
                Whether you need a full nationwide outdoor campaign, highway unipoles, retail store branding, or exhibition stall fabrication, our executive team is ready to connect.
              </p>
            </div>
          </div>
        </section>

        {/* ── CONTACT CARDS & FORM CONTAINER ── */}
        <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Top 3 Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

              {/* Phone Card */}
              <div className="p-8 rounded-[24px] bg-[#fcfcfc] border border-gray-200/80 hover:border-[#e31e24]/40 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e31e24] flex items-center justify-center mb-5">
                  <Phone size={22} />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                  Call Directly
                </span>
                <div className="space-y-1.5">
                  <a href="tel:+911146252249" className="text-[19px] font-black text-gray-900 hover:text-[#e31e24] block transition-colors">
                    +91 11 4625 2249
                  </a>
                  <a href="tel:+919315238601" className="text-[17px] font-bold text-gray-700 hover:text-[#e31e24] block transition-colors">
                    +91 93152 38601
                  </a>
                  <a href="tel:+919910327224" className="text-[17px] font-bold text-gray-600 hover:text-[#e31e24] block transition-colors">
                    +91 99103 27224
                  </a>
                </div>
                <p className="text-xs text-gray-500 mt-3">Available Mon - Sat (9:00 AM - 8:00 PM)</p>
              </div>

              {/* Email Card */}
              <div className="p-8 rounded-[24px] bg-[#fcfcfc] border border-gray-200/80 hover:border-[#e31e24]/40 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e31e24] flex items-center justify-center mb-5">
                  <Mail size={22} />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                  Official Email
                </span>
                <a
                  href="mailto:royaladvertising786@gmail.com"
                  className="text-[18px] font-black text-gray-900 hover:text-[#e31e24] block transition-colors break-all"
                >
                  royaladvertising786@gmail.com
                </a>
                <p className="text-xs text-gray-500 mt-3">Responses guaranteed within 2-4 business hours.</p>
              </div>

              {/* Location Card */}
              <div className="p-8 rounded-[24px] bg-[#fcfcfc] border border-gray-200/80 hover:border-[#e31e24]/40 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e31e24] flex items-center justify-center mb-5">
                  <MapPin size={22} />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                  Plant & Operations Hubs
                </span>
                <div className="text-[18px] font-black text-gray-900 leading-tight">
                  Northern India & Mumbai
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Operating across Delhi, Haryana, Rajasthan, U.P., M.P., Bihar, Maharashtra, Karnataka & Pan-India.
                </p>
              </div>

            </div>

            {/* Main Form & In-depth Inquiries Container */}
            <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-12 lg:gap-16 items-start">

              {/* Form */}
              <div className="bg-[#fcfcfc] rounded-[28px] p-8 sm:p-12 border border-gray-200/90 shadow-xl">
                <div className="mb-8">
                  <h2 className="text-[28px] sm:text-[34px] font-black text-gray-900 tracking-tight">
                    Send Us an Inquiry
                  </h2>
                  <p className="text-gray-500 text-[15px] mt-1">
                    Fill out the form below and our campaign director will revert with site proposals.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center space-y-2">
                    <CheckCircle2 size={36} className="text-green-600 mx-auto" />
                    <div className="text-lg font-black">Message Sent Successfully!</div>
                    <p className="text-sm text-green-700">
                      Thank you for contacting Royal Advertising. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Rohit Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 text-[15px] focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24] bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rohit@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 text-[15px] focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 text-[15px] focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24] bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                          Required Service *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 text-[15px] focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24] bg-white"
                        >
                          <option>Outdoor Advertising & Unipoles</option>
                          <option>Large Format Printing (Solvent/Eco-Solvent)</option>
                          <option>Signage, ACP & 3D Acrylic Letters</option>
                          <option>Exhibition Stall Design & Setup</option>
                          <option>Retail & Window In-Shop Branding</option>
                          <option>Site Recce & All-India Mounting</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                        Your Project Scope / Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Tell us about your brand, targeted cities, dimensions or project schedule..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 text-[15px] focus:outline-none focus:border-[#e31e24] focus:ring-1 focus:ring-[#e31e24] resize-none bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#e31e24] hover:bg-[#c01820] text-white font-bold text-[16px] py-4 rounded-xl transition-all shadow-lg shadow-red-500/25 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      Send Campaign Inquiry
                      <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>

              {/* Right Side: Trust & Corporate Commitments */}
              <div className="space-y-8">
                <div className="bg-[#0e1014] text-white rounded-[28px] p-8 sm:p-10 border border-gray-800">
                  <span className="text-[11px] font-bold text-[#e31e24] tracking-widest uppercase block mb-2">
                    Why Royal Advertising
                  </span>
                  <h3 className="text-2xl font-black mb-4">
                    Direct Plant Accountability. No Intermediaries.
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Because we run our own 3,000 sq. ft. fabrication unit, StarFire solvent printers, and computerized 10 ft. laser routers, you get direct manufacturing rates and flawless execution.
                  </p>

                  <ul className="space-y-3 text-sm font-semibold text-gray-200">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-[#e31e24]" />
                      <span>Dedicated Account Campaign Manager</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-[#e31e24]" />
                      <span>Professional Site Recce & Structural Audit</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-[#e31e24]" />
                      <span>Certified Skilled Manpower & Riggers</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-[#e31e24]" />
                      <span>11+ States Network Active Coverage</span>
                    </li>
                  </ul>
                </div>

                {/* Direct quick call card */}
                <div className="p-8 rounded-[28px] bg-red-50 border border-red-100 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-[#e31e24] uppercase tracking-wider">
                      Need Urgent Hoarding Space?
                    </div>
                    <div className="text-lg font-black text-gray-900 mt-0.5">
                      Call our 24/7 hotline directly
                    </div>
                  </div>
                  <a
                    href="tel:9910327224"
                    className="w-12 h-12 rounded-full bg-[#e31e24] text-white flex items-center justify-center flex-shrink-0 shadow-md hover:bg-[#c01820] transition-colors"
                  >
                    <Phone size={20} />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
