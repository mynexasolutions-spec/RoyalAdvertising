"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-white/95 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] lg:h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-[#e31e24] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-black text-2xl leading-none">R</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] font-black tracking-widest text-gray-900 uppercase">
                ROYAL
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#e31e24] uppercase">
                ADVERTISING
              </span>
              <span className="text-[8px] font-medium tracking-wider text-gray-500 uppercase">
                A Better Way to Advertising
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-semibold text-gray-700 hover:text-[#e31e24] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#e31e24] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* ── CTA Button (Direct dial to +91 93152 38601) ── */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+919315238601"
              className="flex items-center gap-2 bg-[#e31e24] hover:bg-[#c01820] text-white text-[14px] font-bold px-6 py-3 rounded-full transition-all shadow-md shadow-red-500/20"
            >
              <Phone size={14} strokeWidth={2.5} />
              Let's Talk
            </a>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#e31e24] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-[1400px] mx-auto px-5 py-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[16px] font-semibold text-gray-700 hover:text-[#e31e24] hover:bg-red-50 px-4 py-3 rounded-md transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919315238601"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-[#e31e24] text-white text-[15px] font-bold px-5 py-3.5 rounded-full shadow-md"
            >
              <Phone size={14} strokeWidth={2.5} />
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
