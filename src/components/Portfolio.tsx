"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Outdoor Billboard Campaign",
    category: "Billboard & Unipole",
    imageSrc: "/images/outdoor-billboard-advertising.jpg",
    desc: "High-impact highway unipole & billboard installations across Northern India.",
  },
  {
    title: "Exhibition Stall Fabrication",
    category: "Exhibition Solutions",
    imageSrc: "/images/exhibition-booth.jpg",
    desc: "Custom modular stall design, fabrication and installation for leading brands.",
  },
  {
    title: "Storefront & Brand Signage",
    category: "Signage & Display",
    imageSrc: "/images/storefront-signage.jpg",
    desc: "End-to-end storefront branding, ACP boards and glow sign boards.",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="bg-white py-14 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Title & CTA ── */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[3px] bg-[#e31e24]" />
              <span className="text-[13px] font-bold tracking-[0.25em] text-[#e31e24] uppercase">
                Our Portfolio
              </span>
            </div>

            <h2 className="font-black leading-[1.05] tracking-tight text-gray-900 mb-6
              text-[40px] sm:text-[48px] lg:text-[52px]">
              Our Work.{" "}
              <br />
              <span className="text-[#e31e24]">Our Pride.</span>
            </h2>

            <p className="text-[16px] lg:text-[17px] text-gray-500 leading-relaxed mb-10 max-w-[320px]">
              Explore our creative projects across outdoor advertising, exhibitions, and brand identity.
            </p>

            <a
              href="/work"
              className="inline-flex items-center gap-3 bg-[#e31e24] hover:bg-[#c01820] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all duration-200 group w-fit shadow-lg shadow-red-500/25"
            >
              View All Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* ── RIGHT: 3 Real Project Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="relative rounded-[22px] overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-slate-900"
                style={{ aspectRatio: "3/4" }}
              >
                {/* Real full-bleed background image */}
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Bottom card details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <span className="text-[11px] font-bold text-[#e31e24] tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-white font-black text-[18px] leading-snug mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-[12px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
