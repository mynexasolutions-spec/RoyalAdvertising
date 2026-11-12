"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, X } from "lucide-react";

export type HomeGalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  gridSpan?: string; // Tailwind grid span classes
  aspect?: string;
};

// ── 7 Image Configuration for Homepage Gallery ─────────────────────────────
// You can easily swap or add any of your 7 image filenames here!
export const HOME_GALLERY_IMAGES: HomeGalleryItem[] = [
  {
    id: "hg-1",
    title: "",
    category: "",
    image: "/gallery/home-gallery.jpeg",
    gridSpan: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
  },
  {
    id: "hg-2",
    title: "",
    category: "",
    image: "/gallery/home-gallery2.jpeg",
    gridSpan: "lg:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: "hg-4",
    title: "",
    category: "",
    image: "/gallery/home-gallery3.jpeg",
    gridSpan: "lg:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: "hg-5",
    title: "",
    category: "",
    image: "/gallery/home-gallery4.jpeg",
    gridSpan: "lg:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: "hg-6",
    title: "",
    category: "",
    image: "/gallery/home-gallery5.jpeg",
    gridSpan: "lg:col-span-2",
    aspect: "aspect-[16/9] lg:aspect-[2/1]",
  },
];

export default function HomeGallerySection() {
  const [lightboxImage, setLightboxImage] = useState<HomeGalleryItem | null>(null);

  return (
    <section id="gallery-preview" className="bg-white py-14 lg:py-20 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2.5px] bg-[#e31e24]" />
              <span className="text-[12px] font-bold tracking-[0.28em] text-[#e31e24] uppercase">
                Production Showcase
              </span>
            </div>

            <h2 className="font-black leading-[1.05] tracking-tight text-gray-900 text-[36px] sm:text-[44px] lg:text-[50px]">
              FEATURED WORK & <br />
              <span className="text-[#e31e24]">SIGNAGE GALLERY.</span>
            </h2>

            <p className="text-[16px] text-gray-500 leading-relaxed mt-4">
              Real project execution photos — ACP boards, glow signs, 3D acrylic letters, unipoles, and retail branding across India.
            </p>
          </div>

          {/* View in Gallery Button */}
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 bg-[#e31e24] hover:bg-[#c01820] text-white text-[15px] font-bold px-8 py-4 rounded-full transition-all duration-200 group shadow-lg shadow-red-500/25 flex-shrink-0 w-fit"
          >
            View in Gallery
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* ── 7-IMAGE BENTO GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOME_GALLERY_IMAGES.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className={`group relative rounded-[22px] overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100 ${item.gridSpan || ""}`}
            >
              <div className={`relative w-full ${item.aspect || "aspect-[4/3]"} overflow-hidden`}>
                <Image
                  src={item.image}
                  alt={item.title || "Gallery image"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent group-hover:from-black/75 transition-all" />

                {/* Eye Badge — always visible on hover */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Eye size={18} />
                </div>

                {/* Content Overlay — only shown if title/category exist */}
                {(item.title || item.category) && (
                  <div className="absolute bottom-4 left-5 right-5 z-10">
                    {item.category && (
                      <span className="text-[11px] font-bold tracking-widest text-[#e31e24] uppercase mb-1 block drop-shadow-sm">
                        {item.category}
                      </span>
                    )}
                    {item.title && (
                      <h3 className="text-white font-black text-[18px] sm:text-[20px] leading-tight drop-shadow-md">
                        {item.title}
                      </h3>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[88vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.image}
              alt={lightboxImage.title || "Gallery image"}
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[85vh]"
              sizes="(max-width: 1024px) 95vw, 1024px"
            />
          </div>
        </div>
      )}
    </section>
  );
}
