import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Royal Advertising",
  description:
    "Complete outdoor advertising and branding solutions by Royal Advertising — ACP boards, glow signs, 3D letters, exhibition stalls, flex banners, standees, wall branding and more.",
};

// ─── Full service categories with all client-specified products ───────────────
const SERVICE_CATEGORIES = [
  {
    id: "boards-signage",
    num: "01",
    title: "Boards & Signage",
    tagline: "Durable, high-visibility static & illuminated signage",
    imageSrc: "/images/storefront-signage.jpg",
    color: "#e31e24",
    items: [
      "ACP Board",
      "Glow Sign Board",
      "Introductory Boards",
      "Flex Boards & Banners",
      "Gate Arch",
      "Lolypops & Flanges",
      "Location Pointers",
      "Sunboards",
    ],
    desc:
      "From ACP composite boards to illuminated glow signs and gateway arches, we fabricate durable, weather-proof static and lit signage that command attention — installed across pan-India locations.",
  },
  {
    id: "3d-letters",
    num: "02",
    title: "3D Acrylic & S.S. Letters",
    tagline: "Architectural lettering that elevates your brand",
    imageSrc: "/images/brand-stationery.jpg",
    color: "#e31e24",
    items: [
      "3D Acrylic Letters",
      "Stainless Steel (S.S.) Letters",
      "LED Backlit 3D Letters",
      "Gold / Chrome Finish Letters",
      "Foam & PVC 3D Letters",
      "Halo-lit Channel Letters",
    ],
    desc:
      "Precision-cut and hand-finished 3D lettering in acrylic, stainless steel, and chrome finishes for retail fronts, corporate lobbies, showrooms, and outdoor fascias.",
  },
  {
    id: "outdoor-advertising",
    num: "03",
    title: "Outdoor Advertising",
    tagline: "Billboard, unipole & large-format outdoor media",
    imageSrc: "/images/outdoor-billboard-advertising.jpg",
    color: "#e31e24",
    items: [
      "Highway & City Billboards",
      "Unipoles & Hoardings",
      "Wall Branding",
      "One Way Vision",
      "Wrapping & Vehicle Branding",
      "Flag & Pennant Installations",
      "Road-side Pointers",
      "Counter Branding",
    ],
    desc:
      "Large-format outdoor media executed with precision — from recce and site measurement to printing and structural installation across highways, malls, and corporate parks in Northern India and beyond.",
  },
  {
    id: "retail-inshop",
    num: "04",
    title: "Retail & In-Shop Branding",
    tagline: "Complete interior branding for every retail format",
    imageSrc: "/images/storefront-signage.jpg",
    color: "#e31e24",
    items: [
      "In-Shop Vinyl Graphics",
      "Window Branding",
      "One Way Vision Films",
      "Translites (Light Boxes)",
      "Counter Branding",
      "Wall Branding",
      "Ceiling Dropdowns",
      "Backlit Posters",
    ],
    desc:
      "Full-service interior and exterior retail branding — from window films and translite lightboxes to counter branding and vinyl wall graphics — for FMCG, pharma, banking and fashion clients.",
  },
  {
    id: "printing-solutions",
    num: "05",
    title: "Large Format Printing",
    tagline: "In-house Eco-Solvent & Solvent machine printing",
    imageSrc: "/images/large-format-printing.jpg",
    color: "#e31e24",
    items: [
      "Flex Banner Printing",
      "Vinyl Printing",
      "One Way Vision Prints",
      "Backlit Film & Translite",
      "Canvas & Fine Art Prints",
      "Sticker & Cut-Vinyl",
      "Eco-Solvent Prints",
      "Mesh Printing",
    ],
    desc:
      "State-of-the-art in-house printing facility — 3,000 sq. ft. production unit with ECO SOLVENT VERSA ART Valuejet, SOLVENT WITCOLOR Star Fire, and ROUTER & LASER 10 FT. machines for the highest quality output.",
  },
  {
    id: "exhibition-events",
    num: "06",
    title: "Exhibition & Events",
    tagline: "Custom stall fabrication, standees & event displays",
    imageSrc: "/images/exhibition-booth.jpg",
    color: "#e31e24",
    items: [
      "Custom Exhibition Stalls",
      "Modular Booth Systems",
      "Standees & Roll-ups",
      "Backdrops & Step-Repeats",
      "Dropdowns & Ceiling Displays",
      "Event Signage & Wayfinding",
      "Media Walls",
      "Portable Display Systems",
    ],
    desc:
      "End-to-end exhibition and event fabrication services — custom modular stalls, branded backdrops, step-and-repeat walls, and all display materials delivered and installed on-site nationwide.",
  },
];

// ─── Why Choose Royal ─────────────────────────────────────────────────────────
const WHY_ROYAL = [
  { label: "20+", sub: "Years of Experience" },
  { label: "3,000+", sub: "Sq. Ft. Production Unit" },
  { label: "10+", sub: "States Covered" },
  { label: "100+", sub: "National Brands Served" },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-20">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative bg-[#0d0e10] overflow-hidden py-24 lg:py-32">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/large-format-printing.jpg"
              alt="Royal Advertising production facility"
              fill
              className="object-cover object-center opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e10] via-[#0d0e10]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2.5px] bg-[#e31e24]" />
                <span className="text-[12px] font-bold tracking-[0.28em] text-[#e31e24] uppercase">
                  Our Services
                </span>
              </div>
              <h1 className="font-black text-white text-[42px] sm:text-[56px] lg:text-[70px] leading-[1.0] tracking-tight mb-6">
                Complete{" "}
                <span className="text-[#e31e24]">Branding &</span>
                <br />
                Advertising{" "}
                <span className="text-[#e31e24]">Solutions.</span>
              </h1>
              <p className="text-gray-300 text-[17px] lg:text-[18px] leading-relaxed max-w-2xl mb-10">
                From ACP boards and glow signs to 3D letters, flex banners, standees, exhibition stalls and large-format printing — Royal Advertising delivers every branding need under one roof with 20+ years of expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-list"
                  className="inline-flex items-center gap-3 bg-[#e31e24] hover:bg-[#c01820] text-white font-bold text-[15px] px-8 py-4 rounded-full transition-all shadow-lg shadow-red-600/30 group"
                >
                  Explore Services
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-[15px] px-8 py-4 rounded-full transition-all backdrop-blur-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-20">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {WHY_ROYAL.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-5 text-center"
                >
                  <p className="text-[32px] sm:text-[36px] font-black text-white leading-none mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[13px] text-gray-400 font-medium">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES LIST ─────────────────────────────────────────────────── */}
        <section id="services-list" className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-[2.5px] bg-[#e31e24]" />
                <span className="text-[12px] font-bold tracking-[0.28em] text-[#e31e24] uppercase">
                  What We Offer
                </span>
                <div className="w-8 h-[2.5px] bg-[#e31e24]" />
              </div>
              <h2 className="text-[36px] sm:text-[44px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                Every Service Your Brand Needs —{" "}
                <span className="text-[#e31e24]">In-House.</span>
              </h2>
              <p className="text-[16px] text-gray-500 leading-relaxed">
                All design, printing, fabrication, and installation handled under one roof by our skilled team across India.
              </p>
            </div>

            {/* Alternating service rows */}
            <div className="space-y-20 lg:space-y-28">
              {SERVICE_CATEGORIES.map((svc, index) => (
                <div
                  key={svc.id}
                  id={svc.id}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative h-[320px] sm:h-[400px] lg:h-[480px] rounded-[28px] overflow-hidden shadow-2xl group ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <Image
                      src={svc.imageSrc}
                      alt={svc.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Number badge */}
                    <div className="absolute top-6 left-6 bg-[#e31e24] text-white font-black text-[22px] w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                      {svc.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <span className="text-[12px] font-bold text-[#e31e24] tracking-[0.25em] uppercase block mb-3">
                      {svc.tagline}
                    </span>
                    <h3 className="text-[32px] sm:text-[38px] lg:text-[42px] font-black text-gray-900 tracking-tight leading-tight mb-4">
                      {svc.title}
                    </h3>
                    <p className="text-[16px] text-gray-500 leading-relaxed mb-8">{svc.desc}</p>

                    {/* Items grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                      {svc.items.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <CheckCircle2 size={17} className="text-[#e31e24] flex-shrink-0" />
                          <span className="text-[14px] font-semibold text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2.5 bg-[#e31e24] hover:bg-[#c01820] text-white font-bold text-[14px] px-7 py-3.5 rounded-full transition-all shadow-md shadow-red-500/25 group"
                    >
                      Inquire About {svc.title}
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FULL PRODUCTS CATALOG ─────────────────────────────────────────── */}
        <section className="bg-[#0d0e10] py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-[2.5px] bg-[#e31e24]" />
                <span className="text-[12px] font-bold tracking-[0.28em] text-[#e31e24] uppercase">
                  Complete Product Range
                </span>
                <div className="w-8 h-[2.5px] bg-[#e31e24]" />
              </div>
              <h2 className="text-[32px] sm:text-[40px] font-black text-white tracking-tight mb-4">
                Everything We{" "}
                <span className="text-[#e31e24]">Manufacture & Install</span>
              </h2>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                Our in-house 3,000 sq. ft. fabrication unit produces the full range of branding materials — no outsourcing, no delays.
              </p>
            </div>

            {/* Full product list in a card grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {[
                "ACP Board",
                "Glow Sign Board",
                "Introductory Boards",
                "Lolypops",
                "Flags",
                "Gate Arch",
                "One Way Vision",
                "Location Pointers",
                "Wall Branding",
                "Counter Branding",
                "Inshop Vinyl",
                "Sunboards",
                "Translites",
                "Standees",
                "Dropdowns",
                "Backdrops",
                "Flex Boards",
                "Banners",
                "3D Acrylic Letters",
                "S.S. Letters",
                "LED Backlit Signs",
                "Window Branding",
                "Exhibition Stalls",
                "Roll-up Displays",
                "Media Walls",
              ].map((product) => (
                <div
                  key={product}
                  className="bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3.5 text-center hover:bg-[#e31e24]/10 hover:border-[#e31e24]/40 transition-all group"
                >
                  <span className="text-[13px] font-semibold text-gray-300 group-hover:text-white transition-colors">
                    {product}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS STEPS ─────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-[2.5px] bg-[#e31e24]" />
                <span className="text-[12px] font-bold tracking-[0.28em] text-[#e31e24] uppercase">
                  How We Work
                </span>
                <div className="w-8 h-[2.5px] bg-[#e31e24]" />
              </div>
              <h2 className="text-[32px] sm:text-[40px] font-black text-gray-900 tracking-tight">
                Our <span className="text-[#e31e24]">4-Step</span> Execution Process
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "Designing & Printing",
                  desc: "Creative concept, precision artwork, and high-resolution industrial printing on eco-solvent and solvent machines.",
                },
                {
                  num: "02",
                  title: "Recce of the Site",
                  desc: "On-site survey, structural measurements, visibility angle audit, and full engineering planning before any installation.",
                },
                {
                  num: "03",
                  title: "Production of Branding",
                  desc: "Interior and exterior branding, window branding, and specialized remote branding — all manufactured in-house.",
                },
                {
                  num: "04",
                  title: "Installation",
                  desc: "Professional pan-India installation of all branding material with structural safety and on-time delivery guarantee.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="bg-white rounded-[22px] p-7 shadow-sm border border-gray-100 hover:border-[#e31e24]/30 hover:shadow-lg transition-all group"
                >
                  <div className="text-[42px] font-black text-[#e31e24]/20 group-hover:text-[#e31e24]/40 leading-none mb-4 transition-colors">
                    {step.num}
                  </div>
                  <h4 className="text-[18px] font-black text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
        <section className="bg-[#e31e24] py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-[32px] sm:text-[40px] font-black text-white tracking-tight leading-tight mb-2">
                  Ready to Start Your Branding Project?
                </h2>
                <p className="text-white/80 text-[16px]">
                  Call us or write to us — we respond within 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <a
                  href="tel:9910327224"
                  className="inline-flex items-center gap-3 bg-white text-[#e31e24] font-black text-[15px] px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg group"
                >
                  <Phone size={18} />
                  +91 99103 27224
                </a>
                <a
                  href="mailto:royaladvertising786@gmail.com"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-[14px] px-8 py-4 rounded-full transition-all group"
                >
                  <Mail size={16} />
                  royaladvertising786@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
