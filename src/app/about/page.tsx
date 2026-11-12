import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLogosSection from "@/components/ClientLogosSection";
import Image from "next/image";
import { 
  MapPin, 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  Printer, 
  Users, 
  Award, 
  ShieldCheck, 
  Globe2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Royal Advertising | 20+ Years of Outdoor Advertising Excellence",
  description:
    "ROYAL ADVERTISING is one of the fastest growing Corporate & Marketing Advertising Agencies of Northern India, providing specialized outdoor media solutions across India for over 20 years.",
};

const STATES_COVERED = [
  "Delhi",
  "Haryana",
  "Rajasthan",
  "Uttar Pradesh (U.P.)",
  "Madhya Pradesh (M.P.)",
  "Bihar",
  "Maharashtra",
  "Uttaranchal",
  "Karnataka",
  "Jharkhand",
  "Chhattisgarh",
  "Pan-India Base Projects",
];

const HIGHLIGHTS = [
  {
    icon: Trophy,
    title: "20+ Years Legacy",
    desc: "Delivering top-tier outdoor media campaigns on an All-India Level Basis for two decades.",
  },
  {
    icon: Globe2,
    title: "11+ States & Pan-India",
    desc: "Deep execution roots spanning Northern India, Central India, and Western/Southern territories.",
  },
  {
    icon: Printer,
    title: "In-House Infrastructure",
    desc: "State-of-the-art wide-format printing machines & dedicated fabrication workshops.",
  },
  {
    icon: Users,
    title: "Trusted by Corporate Giants",
    desc: "Preferred outdoor partner for national and Fortune 500 multinational corporate brands.",
  },
];

export default function AboutPage() {
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
                  About Royal Advertising
                </span>
              </div>

              <h1 className="text-[42px] sm:text-[54px] lg:text-[64px] font-black leading-[1.05] tracking-tight mb-6">
                MAKING BRANDS <br />
                <span className="text-[#e31e24]">IMPOSSIBLE TO IGNORE</span> <br />
                FOR OVER 20 YEARS.
              </h1>

              <p className="text-gray-300 text-[17px] sm:text-[19px] leading-relaxed font-normal max-w-2xl">
                ROYAL ADVERTISING is one of the fastest growing Corporate & Marketing Advertising Agencies of Northern India, delivering impactful outdoor campaigns across India.
              </p>
            </div>
          </div>
        </section>

        {/* ── CORE COMPANY STATEMENT (Matches exact text from user image) ── */}
        <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">

              {/* Text content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[3px] bg-[#e31e24]" />
                  <span className="text-[13px] font-bold tracking-[0.25em] text-[#e31e24] uppercase">
                    Who We Are
                  </span>
                </div>

                <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-black text-gray-900 leading-[1.1] tracking-tight mb-8">
                  Northern India's Premier <br />
                  <span className="text-[#e31e24]">Corporate Advertising Agency</span>
                </h2>

                <div className="space-y-6 text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">
                  <p className="font-semibold text-gray-900 text-[18px] sm:text-[19px] border-l-4 border-[#e31e24] pl-4">
                    ROYAL ADVERTISING is one of the fastest growing Corporate & Marketing Advertising Agencies of Northern India. We have been providing outdoor advertising services to many reputed National and International Corporate groups on an All-India Level Basis.
                  </p>

                  <p>
                    We are covering <span className="font-semibold text-gray-900">Delhi, Haryana, Rajasthan, U.P, M.P., Bihar, Maharashtra, Uttaranchal, Karnataka, Jharkhand and Chhattisgarh</span>, and specialized projects on an All India basis for the last 20 years.
                  </p>

                  <p>
                    We have been providing various types of specialized <span className="font-bold text-gray-900">Outdoor Communication & Marketing services</span> to reputed clients with guaranteed high-impact visibility and production excellence.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-3 bg-[#e31e24] hover:bg-[#c01820] text-white text-[15px] font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-500/25 transition-all group"
                  >
                    Start a Project With Us
                    <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="tel:+911146252249"
                    className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-900 text-gray-900 text-[15px] font-bold px-7 py-4 rounded-xl transition-all"
                  >
                    Call: +91 11 4625 2249
                  </a>
                </div>
              </div>

              {/* Visual Showcase Card */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border border-gray-100">
                  <Image
                    src="/images/outdoor-billboard-advertising.jpg"
                    alt="Royal Advertising Outdoor Billboard Unipole Media"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    <div className="text-[28px] font-black leading-none">20+ Years</div>
                    <div className="text-[13px] text-white/80 font-medium mt-1">
                      Continuous Service to National & Global Corporate Leaders
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── GEOGRAPHIC COVERAGE SECTION ── */}
        <section className="py-20 lg:py-28 bg-[#fcfcfc] border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-6 h-[2.5px] bg-[#e31e24]" />
                <span className="text-[12px] font-bold tracking-[0.25em] text-[#e31e24] uppercase">
                  PAN-INDIA FOOTPRINT
                </span>
              </div>
              <h2 className="text-[36px] sm:text-[44px] font-black text-gray-900 tracking-tight leading-tight">
                States & Territories We Cover
              </h2>
              <p className="text-gray-500 text-[16px] sm:text-[17px] mt-4">
                Full-spectrum outdoor media management, installation networks, and legal hoardings across the nation.
              </p>
            </div>

            {/* State Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {STATES_COVERED.map((state, idx) => (
                <div
                  key={state}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#e31e24]/40 transition-all flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#e31e24] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e31e24] group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                      Zone 0{idx + 1}
                    </span>
                    <span className="text-[16px] font-black text-gray-900 group-hover:text-[#e31e24] transition-colors leading-tight">
                      {state}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4 PILLARS HIGHLIGHTS ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-[34px] sm:text-[42px] font-black text-gray-900 tracking-tight">
                Why Industry Leaders Choose <span className="text-[#e31e24]">Royal Advertising</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-8 rounded-[24px] border border-gray-200/80 bg-white hover:border-[#e31e24]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#e31e24] flex items-center justify-center mb-6 group-hover:bg-[#e31e24] group-hover:text-white transition-colors shadow-sm">
                        <Icon size={26} strokeWidth={2} />
                      </div>
                      <h3 className="text-[20px] font-black text-gray-900 mb-3 group-hover:text-[#e31e24] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CLIENTS CAROUSEL ── */}
        <ClientLogosSection />

      </main>

      <Footer />
    </>
  );
}
