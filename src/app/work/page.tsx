"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, Filter, CheckCircle2 } from "lucide-react";

type WorkItem = {
  id: string;
  title: string;
  category: "all" | "outdoor" | "printing" | "signage" | "exhibition" | "retail";
  categoryLabel: string;
  client: string;
  location: string;
  image: string;
  tags: string[];
};

const PORTFOLIO_ITEMS: WorkItem[] = [
  {
    id: "1",
    title: "High-Rise Metro Corridor Unipole",
    category: "outdoor",
    categoryLabel: "Outdoor Advertising",
    client: "Hindustan Coca-Cola",
    location: "Delhi-NCR Expressways",
    image: "/images/outdoor-billboard-advertising.jpg",
    tags: ["Unipole", "All-Weather Flex", "Night Illumination"],
  },
  {
    id: "2",
    title: "Mega Wide-Format Print Fleet Production",
    category: "printing",
    categoryLabel: "Printing Solutions",
    client: "Parag Milk Foods (Gowardhan)",
    location: "3,000 Sq. Ft. Facility",
    image: "/images/large-format-printing.jpg",
    tags: ["StarFire Solvent", "Eco Solvent", "High DPI"],
  },
  {
    id: "3",
    title: "National Industrial Expo Pavilion",
    category: "exhibition",
    categoryLabel: "Exhibition Solutions",
    client: "Philips India & Signify",
    location: "Pragati Maidan, New Delhi",
    image: "/images/exhibition-booth.jpg",
    tags: ["Modular Stall", "Backlit Fabric", "Gate Arch"],
  },
  {
    id: "4",
    title: "Architectural 3D LED Storefront Signage",
    category: "signage",
    categoryLabel: "Signage & Display",
    client: "Prestige Brands",
    location: "Flagship Retail Hubs",
    image: "/images/storefront-signage.jpg",
    tags: ["ACP Board", "3D Acrylic Letters", "Glow Sign"],
  },
  {
    id: "5",
    title: "Corporate Identity & Franchise Kit",
    category: "retail",
    categoryLabel: "Branding & Identity",
    client: "Baidyanath Ayurved",
    location: "Multi-State Rollout",
    image: "/images/brand-stationery.jpg",
    tags: ["Window Branding", "Translites", "In-Shop Sunboards"],
  },
  {
    id: "6",
    title: "Highway Billboard Strategic Network",
    category: "outdoor",
    categoryLabel: "Outdoor Advertising",
    client: "Bajaj Electricals Ltd.",
    location: "Rajasthan & U.P. Highways",
    image: "/images/hero-image.png",
    tags: ["Large Format Hoarding", "Recce Site Audit"],
  },
];

const CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "outdoor", label: "Outdoor Advertising" },
  { key: "printing", label: "Printing Solutions" },
  { key: "signage", label: "Signage & Display" },
  { key: "exhibition", label: "Exhibitions" },
  { key: "retail", label: "In-Shop & Retail" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems = activeFilter === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

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
                  Our Portfolio & Case Studies
                </span>
              </div>

              <h1 className="text-[42px] sm:text-[54px] lg:text-[64px] font-black leading-[1.05] tracking-tight mb-6">
                OUR WORK. <br />
                <span className="text-[#e31e24]">OUR PRIDE.</span>
              </h1>

              <p className="text-gray-300 text-[17px] sm:text-[19px] leading-relaxed font-normal max-w-2xl">
                Explore two decades of specialized outdoor media installations, retail branding, high-resolution printing, and exhibition architectures created for leading national brands.
              </p>
            </div>
          </div>
        </section>

        {/* ── FILTER TABS & PORTFOLIO GRID ── */}
        <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap mb-12 sm:mb-16">
              {CATEGORIES.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all duration-200 cursor-pointer ${activeFilter === tab.key
                    ? "bg-[#e31e24] text-white shadow-md shadow-red-500/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200/80"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-[26px] overflow-hidden border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black tracking-wider uppercase text-white bg-[#e31e24] px-3.5 py-1.5 rounded-full shadow-md">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Client stamp */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold text-red-200 uppercase tracking-widest block">
                        Client
                      </span>
                      <span className="text-[15px] font-bold drop-shadow-sm">
                        {item.client}
                      </span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-gray-400 block mb-1">
                        Location: {item.location}
                      </span>
                      <h3 className="text-[20px] font-black text-gray-900 tracking-tight leading-snug group-hover:text-[#e31e24] transition-colors mb-4">
                        {item.title}
                      </h3>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
        {/* ── BOTTOM CTA BANNER ── */}
        <section className="bg-[#0b0c0e] text-white py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h2 className="text-[34px] sm:text-[44px] font-black tracking-tight mb-5">
              Ready to execute your next corporate campaign?
            </h2>
            <p className="text-gray-400 text-[16px] sm:text-[17px] mb-8">
              From site recce to wide-format printing and nationwide mounting, we handle every detail with guaranteed quality.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#e31e24] hover:bg-[#c01820] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-red-500/25"
              >
                Discuss Your Campaign
              </Link>
              <a
                href="tel:9910327224"
                className="border border-white/20 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-all"
              >
                Call: +91 99103 27224
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
