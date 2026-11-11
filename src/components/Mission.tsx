"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Mission() {
  return (
    <section id="mission" className="bg-white py-14 lg:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Real Mission Image ── */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-gray-100 bg-[#e31e24]">
            <Image
              src="/images/our mission.jpg"
              alt="Royal Advertising Our Mission"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* ── RIGHT: Mission Text & Details ── */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[3px] bg-[#e31e24]" />
              <span className="text-[14px] font-bold tracking-[0.25em] text-[#e31e24] uppercase">
                Our Mission
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-black leading-[1.05] tracking-tight text-gray-900 mb-7
              text-[38px] sm:text-[48px] lg:text-[54px]">
              CREATIVITY MEETS
              <br />
              <span className="text-[#e31e24]">PRODUCTION.</span>
            </h2>

            {/* Description */}
            <p className="text-[17px] lg:text-[18px] text-gray-600 leading-relaxed mb-10 max-w-[540px]">
              TO PROVIDE & GIVE PROFESSIONALLY AND EFFECTIVELY QUALITY AND COST EFFICIENT SERVICES MEETING THE CLIENT'S NEEDS AND EXPECTATIONS. WE ALSO FOCUS ON THE CLIENTS MOTTO WHAT THEY ACTUALLY WANT BY ADVERTISING TO GROW THEIR COMPANY. WE WANT TO GROW AND ACHIEVE THE PEAK OF SUCCESS ALONG WITH OUR CLIENTS.
            </p>

            {/* CTA Button */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#e31e24] hover:bg-[#c01820] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all duration-200 group shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30"
              >
                Learn More
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
