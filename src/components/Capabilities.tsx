"use client";

import Image from "next/image";
import { ArrowRight, Printer, Settings, Users, Clock } from "lucide-react";

const CAPS = [
  {
    icon: Printer,
    value: "3,000+",
    label: "Sq. Ft. Production",
    sub: "Facility",
  },
  {
    icon: Settings,
    value: "Advanced",
    label: "Printing Technology",
    sub: "",
  },
  {
    icon: Users,
    value: "Expert",
    label: "Production Team",
    sub: "",
  },
  {
    icon: Clock,
    value: "On-Time",
    label: "Delivery",
    sub: "",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-white py-8 lg:py-12">
      {/* Increased max-w for larger width container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Outer Rounded Dark Banner (Increased width, no red cutout on bottom right) ── */}
        <div className="relative rounded-[28px] lg:rounded-[36px] overflow-hidden bg-[#0a0b0d] shadow-2xl border border-gray-900">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-stretch min-h-[300px]">

            {/* ── LEFT: Text & Stats Content ── */}
            <div className="p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between z-10">

              {/* Eyebrow & Headline */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-6 h-[2.5px] bg-[#e31e24]" />
                  <span className="text-[11px] font-bold tracking-[0.28em] text-[#e31e24] uppercase">
                    Our Capabilities
                  </span>
                </div>

                <h2 className="font-black leading-[1.08] tracking-tight text-white mb-4
                  text-[32px] sm:text-[38px] lg:text-[42px] xl:text-[46px]">
                  POWERED BY
                  <br />
                  <span className="text-[#e31e24]">INNOVATION</span>{" "}
                  <span className="text-white">& EXPERTISE.</span>
                </h2>

                <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed mb-6 max-w-[440px]">
                  Our state-of-the-art infrastructure and skilled team ensure the highest quality in every project.
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 bg-[#e31e24] hover:bg-[#c01820] text-white text-[13px] font-bold px-7 py-2.5 rounded-full transition-all duration-200 group w-fit shadow-md shadow-red-600/30 mb-8"
                >
                  Our Capabilities
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* 4 Stats in a clean compact horizontal row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-800/80">
                {CAPS.map(({ icon: Icon, value, label, sub }, i) => (
                  <div key={i} className="flex flex-col gap-1.5 group pr-2">
                    <div className="text-[#e31e24] mb-0.5">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div className="text-[20px] sm:text-[22px] font-black text-white leading-none tracking-tight">
                      {value}
                    </div>
                    <div className="text-[11px] font-medium text-gray-400 leading-tight">
                      {label}
                      {sub && <><br />{sub}</>}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* ── RIGHT: Machine Printing Image (clean finish) ── */}
            <div className="relative min-h-[260px] lg:min-h-full w-full overflow-hidden rounded-r-[28px] lg:rounded-r-[36px]">
              <Image
                src="/images/large-format-printing.jpg"
                alt="Large format industrial printing production"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Left fade gradient */}
              <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0b0d] to-transparent hidden lg:block" />
              {/* Top fade on mobile */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0a0b0d] to-transparent lg:hidden" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
