"use client";

import Image from "next/image";
import { Trophy, MapPin, Printer, Users } from "lucide-react";

const STATS = [
  { icon: Trophy,  value: "20+ Years", label: "Experience" },
  { icon: MapPin,  value: "Pan India", label: "Operations" },
  { icon: Printer, value: "In-house",  label: "Printing Setup" },
  { icon: Users,   value: "Skilled",   label: "Production Team" },
];

export default function WhoWeAre() {
  return (
    <section id="about" className="relative bg-white overflow-hidden py-14 lg:py-18">

      {/* Faint watermark "R" */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0 overflow-hidden"
        aria-hidden
      >
        <span
          className="text-[#e31e24] font-black"
          style={{ fontSize: "clamp(180px, 24vw, 340px)", opacity: 0.045, lineHeight: 1 }}
        >
          R
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* ── LEFT: Image ── */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full aspect-[4/3]">
              <Image
                src="/images/hero-image.png"
                alt="Royal Advertising – 20 years of making brands stand out"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            {/* Trophy badge */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-[#e31e24] text-white px-5 py-4 rounded-xl shadow-2xl">
              <Trophy size={26} strokeWidth={1.8} className="flex-shrink-0" />
              <div className="leading-tight">
                <div className="text-[24px] font-black leading-none">20+</div>
                <div className="text-[11px] font-semibold tracking-wide mt-0.5 text-white/90">
                  Years of<br />Experience
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-[2.5px] bg-[#e31e24]" />
              <span className="text-[12px] font-bold tracking-[0.25em] text-[#e31e24] uppercase">
                Who We Are
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-black leading-[1.05] tracking-tight text-gray-900 mb-6
              text-[36px] sm:text-[44px] lg:text-[48px] xl:text-[54px]">
              20 YEARS OF
              <br />
              MAKING BRANDS
              <br />
              <span className="text-[#e31e24]">STAND OUT.</span>
            </h2>

            {/* Description */}
            <p className="text-[17px] lg:text-[18px] text-gray-500 leading-relaxed mb-10 max-w-[520px]">
              Royal Advertising is one of the fastest-growing corporate and
              marketing advertising agencies in Northern India. We have been
              providing outdoor advertising services to reputed national and
              international corporate groups across India for more than 20 years.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 lg:gap-5">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-start gap-2.5 group">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-[#e31e24] transition-colors duration-300">
                    <Icon size={22} className="text-[#e31e24] group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                  </div>
                  <div className="text-[17px] font-black text-gray-900 leading-snug">{value}</div>
                  <div className="text-[14px] font-medium text-gray-500 -mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
