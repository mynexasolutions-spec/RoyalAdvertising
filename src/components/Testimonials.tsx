"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Royal Advertising has been an exceptional partner. Their creativity and professionalism helped us achieve outstanding results across our nationwide outdoor campaign.",
    author: "Rohit Sharma",
    role: "Marketing Head",
    company: "Philips India Limited",
    logoText: "Philips",
  },
  {
    quote:
      "The precision in fabrication and unmatched turnaround times for our retail branch signages made Royal Advertising our preferred brand experience vendor across India.",
    author: "Vikram Malhotra",
    role: "Brand Director",
    company: "Hindustan Coca-Cola",
    logoText: "Coca-Cola",
  },
  {
    quote:
      "From metro hoardings to massive exhibition pavillions, their production quality consistently exceeds expectations. Truly a leader in advertising.",
    author: "Pooja Singhania",
    role: "VP Corporate Communications",
    company: "Bisleri",
    logoText: "Bisleri",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="bg-gray-50/60 py-16 lg:py-20 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Title ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[3px] bg-[#e31e24]" />
              <span className="text-[13px] font-bold tracking-[0.25em] text-[#e31e24] uppercase">
                What Our Clients Say
              </span>
            </div>

            <h2 className="font-black leading-[1.05] tracking-tight text-gray-900 mb-6
              text-[40px] sm:text-[48px] lg:text-[52px]">
              Words That{" "}
              <span className="text-[#e31e24]">Inspire.</span>
            </h2>

            <p className="text-[16px] lg:text-[17px] text-gray-500 leading-relaxed max-w-[340px]">
              Our clients trust us for creativity, quality and commitment.
            </p>
          </div>

          {/* ── RIGHT: Testimonial Card with Quotes & Slider Controls (Matches 2nd screenshot) ── */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">

              {/* Giant Red Quote Mark */}
              <div className="text-[#e31e24] mb-4">
                <Quote size={38} className="fill-[#e31e24]" />
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 text-[18px] sm:text-[20px] lg:text-[21px] leading-relaxed font-medium mb-8">
                "{item.quote}"
              </p>

              {/* Client Info with Circular Badge */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-black text-xs">
                  {item.logoText}
                </div>
                <div>
                  <h4 className="text-[17px] font-black text-gray-900 leading-tight">
                    {item.author}
                  </h4>
                  <p className="text-[13px] text-gray-500 font-medium">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows positioned on top right of the card */}
              <div className="absolute top-8 right-8 flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-gray-400 transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-gray-400 transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${current === i ? "w-8 bg-[#e31e24]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
