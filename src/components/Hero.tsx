"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-[68px] lg:pt-20"
    >
      {/* ── Background Image ── */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-image.png')" }}
      />

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 z-[1] bg-black/62" />

      {/* ── Red top accent line ── */}
      <div className="absolute top-0 left-0 w-36 h-1.5 bg-[#e31e24] z-[2]" />

      {/* ── Content — left-aligned ── */}
      <div className="relative z-[3] max-w-[1400px] mx-auto px-5 lg:px-8 h-full">
        <div className="flex flex-col justify-center min-h-[calc(100vh-5rem)] pt-12 pb-16 lg:pt-14 lg:pb-20 max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#e31e24]" />
            <span className="text-[13px] font-bold tracking-[0.25em] text-[#e31e24] uppercase">
              A Better Way in Advertising
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-black leading-[1.02] tracking-tight text-white mb-6
            text-[50px] sm:text-[64px] lg:text-[76px] xl:text-[84px]">
            WE MAKE
            <br />
            <span className="text-[#e31e24]">BRANDS</span>
            <br />
            IMPOSSIBLE
            <br />
            TO IGNORE.
          </h1>

          {/* Description */}
          <p className="text-[16px] lg:text-[18px] text-white/80 leading-relaxed max-w-[500px] mb-8 font-normal">
            From creative printing to large-scale outdoor branding, we
            transform ideas into powerful brand experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/services"
              className="inline-flex items-center gap-2.5 bg-[#e31e24] hover:bg-[#c01820] text-white text-[15px] font-bold px-8 py-4 rounded-md transition-colors duration-200 group"
            >
              Explore Our Services
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="/work"
              className="inline-flex items-center border border-white/60 hover:border-white hover:bg-white/10 text-white text-[15px] font-bold px-8 py-4 rounded-md transition-all duration-200"
            >
              Watch Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Bottom red accent */}
      <div className="absolute bottom-0 left-0 w-72 h-[3px] bg-gradient-to-r from-[#e31e24] to-transparent z-[3]" />
    </section>
  );
}
