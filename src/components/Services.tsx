"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, PenTool, Sparkles, Compass } from "lucide-react";

// Categorized comprehensive products list from user's brief
const CAPABILITIES_LIST = [
  {
    category: "Boards & Signages",
    items: ["ACP Board", "Glow Sign Board", "Introductory Boards", "Flex Boards & Banners", "Gate Arch", "Lolypops & Flanges"],
  },
  {
    category: "3D & Architectural Letters",
    items: ["3D Acrylic Letters", "Stainless Steel (S.S.) Letters", "LED Backlit Letters", "Neon & Metal Signage"],
  },
  {
    category: "Retail, In-Shop & Window",
    items: ["Window Branding", "One Way Vision", "Inshop Vinyl & Sunboards", "Translites", "Counter Branding", "Wall Branding"],
  },
  {
    category: "Events, Display & Promotional",
    items: ["Standees & Roll-ups", "Dropdowns & Cutouts", "Media Backdrops", "Location Pointers", "Flags & Pennants", "Exhibition Stalls"],
  },
];

const WORKFLOW_STEPS = [
  {
    num: "01",
    icon: PenTool,
    title: "Designing & Printing",
    desc: "Creative concept ideation, precision graphic artwork, and high-resolution industrial printing.",
  },
  {
    num: "02",
    icon: Compass,
    title: "Recce of the Branding Site",
    desc: "On-site survey, accurate structural measurements, visibility angle audit, and engineering planning.",
  },
  {
    num: "03",
    icon: Layers,
    title: "Production of Branding",
    desc: "State-of-the-art interior and exterior branding, window branding, and specialized remote branding.",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "Installations & Maintenance",
    desc: "End-to-end professional installation of all branding material across any site with structural safety.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── TOP: Section Intro & 5-Image Featured Grid ── */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start mb-14 lg:mb-18">

          {/* LEFT: Title & CTA */}
          <div className="flex flex-col justify-center lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[3px] bg-[#e31e24]" />
              <span className="text-[13px] font-bold tracking-[0.25em] text-[#e31e24] uppercase">
                Our Services
              </span>
            </div>

            <h2 className="font-black leading-[1.04] tracking-tight text-gray-900 mb-6
              text-[40px] sm:text-[48px] lg:text-[54px]">
              Comprehensive
              <br />
              Advertising
              <br />
              <span className="text-[#e31e24]">Solutions.</span>
            </h2>

            <p className="text-[16px] lg:text-[17px] text-gray-500 leading-relaxed mb-8 max-w-[340px]">
              Complete indoor/outdoor brandings & advertising — from initial site recce and design to manufacturing and nationwide installation.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-[#e31e24] hover:bg-[#c01820] text-white text-[15px] font-bold px-8 py-4 rounded-xl transition-all duration-200 group w-fit shadow-lg shadow-red-500/20"
            >
              Explore All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* RIGHT: Responsive 5 Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-fr sm:auto-rows-[230px] lg:auto-rows-[240px]">

            {/* 01. Outdoor Advertising */}
            <div className="h-[230px] sm:h-full">
              <ServiceCard
                num=""
                title="Outdoor Boards"
                imageSrc="/gallery/outdoor-boards.jpg"
                href="/services#outdoor-advertising"
                active={false}
              />
            </div>

            {/* 05. Printing Solutions */}
            <div className="h-[230px] sm:h-full">
              <ServiceCard
                num=""
                title="Printing Solutions"
                imageSrc="/gallery/home-gallery3.jpeg"
                href="/services#printing-solutions"
                active={true}
              />
            </div>

            {/* 06. Exhibition Solutions */}
            <div className="h-[260px] sm:h-[230px] lg:h-full sm:col-span-2 lg:col-span-1 lg:row-span-2">
              <ServiceCard
                num=""
                title="STANDEES"
                imageSrc="/gallery/standees.jpg"
                href="/services#exhibition-events"
                tall
              />
            </div>

            {/* 03. Signage & Display */}
            <div className="h-[230px] sm:h-full">
              <ServiceCard
                num=""
                title="Inshop Brandings"
                imageSrc="/gallery/inshop-branding.jpg"
                href="/services#boards-signage"
                active={false}
              />
            </div>

            {/* 04. Branding & Identity */}
            <div className="h-[230px] sm:h-full">
              <ServiceCard
                num=""
                title="Main Boards"
                imageSrc="/gallery/main-boards.jpg"
                href="/services#retail-inshop"
                active={false}
              />
            </div>

          </div>

        </div>

        {/* ── MIDDLE: End-to-End Workflow Process (From User's Brief) ── */}
        <div className="bg-[#0e1014] text-white rounded-[32px] p-8 sm:p-12 lg:p-16 mb-14 shadow-2xl border border-gray-800">
          <div className="max-w-3xl mb-12">
            <span className="text-[12px] font-bold text-[#e31e24] tracking-[0.28em] uppercase block mb-3">
              Full Lifecycle Execution
            </span>
            <h3 className="text-[32px] sm:text-[40px] font-black tracking-tight leading-tight">
              From Site Recce to Flawless Nationwide Installation.
            </h3>
            <p className="text-gray-400 text-[15px] sm:text-[16px] mt-3">
              We specialize in interior and exterior branding, window branding, and remote branding for national brands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {WORKFLOW_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#e31e24]/60 transition-all group"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[28px] font-black text-[#e31e24] leading-none">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#e31e24]/10 text-[#e31e24] flex items-center justify-center group-hover:bg-[#e31e24] group-hover:text-white transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h4 className="text-[18px] font-bold text-white mb-2 group-hover:text-red-100 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[13px] text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── BOTTOM: Comprehensive Branding & Signage Production Catalog ── */}
        <div className="border border-gray-200/90 rounded-[32px] p-8 sm:p-12 bg-gray-50/50">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-[2px] bg-[#e31e24]" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#e31e24] uppercase">
                  Manufacturing & Fabrication Range
                </span>
              </div>
              <h3 className="text-[30px] sm:text-[38px] font-black text-gray-900 tracking-tight">
                Complete Indoor & Outdoor <span className="text-[#e31e24]">Branding Portfolio.</span>
              </h3>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-white border border-gray-200 px-4 py-2 rounded-full w-fit">
              Custom Fabricated In-House
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAPABILITIES_LIST.map((col) => (
              <div key={col.category} className="space-y-4">
                <h4 className="text-[16px] font-black text-gray-900 pb-2 border-b-2 border-[#e31e24] inline-block">
                  {col.category}
                </h4>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-700 font-medium group">
                      <CheckCircle2 size={16} className="text-[#e31e24] flex-shrink-0 mt-0.5" />
                      <span className="group-hover:text-black transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick summary pill banner */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-gray-500">
            <span>✓ Complete Indoor/Outdoor Branding & Advertising</span>
            <span>✓ Recce & Site Audit Included</span>
            <span>✓ High-Grade 3D Acrylic & S.S. Letters</span>
            <span>✓ Turnkey All-India Deployment</span>
          </div>
        </div>

      </div>
    </section>
  );
}

function ServiceCard({
  num,
  title,
  imageSrc,
  tall = false,
  active = false,
  href = "/services",
}: {
  num: string;
  title: string;
  imageSrc: string;
  tall?: boolean;
  active?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="relative rounded-[22px] overflow-hidden cursor-pointer h-full w-full border border-gray-100 shadow-md block"
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

      <div className="relative h-full p-6 lg:p-7 flex flex-col justify-end z-10">
        <span className="text-[13px] font-bold text-[#e31e24] mb-1.5 tracking-widest uppercase drop-shadow-sm">
          {num}
        </span>

        <h3 className="text-white font-black text-[26px] lg:text-[30px] leading-snug mb-4 drop-shadow-md">
          {title}
        </h3>
      </div>
    </Link>
  );
}
