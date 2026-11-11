import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0c0e] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-14">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#e31e24] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-2xl leading-none">R</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[17px] font-black tracking-widest text-white uppercase">
                  ROYAL
                </span>
                <span className="text-[11px] font-bold tracking-[0.22em] text-[#e31e24] uppercase">
                  ADVERTISING
                </span>
                <span className="text-[8px] font-medium tracking-wider text-gray-400 uppercase">
                  A Better Way to Advertising
                </span>
              </div>
            </a>

            <p className="text-gray-400 text-[15px] leading-relaxed max-w-md mb-6">
              One of the fastest-growing corporate advertising agencies in Northern India.
              Delivering high-impact outdoor media, premium print production, and bespoke branding solutions across India.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold tracking-wider uppercase">
              <span>EST. 2004</span>
              <span>•</span>
              <span>PAN INDIA NETWORK</span>
              <span>•</span>
              <span>OVER 20+ YEARS</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-[15px] font-black uppercase tracking-wider text-white mb-5 border-l-2 border-[#e31e24] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[14px] text-gray-400 font-medium">
              <li>
                <a href="#home" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (With real phone numbers & email provided by user) */}
          <div>
            <h4 className="text-[15px] font-black uppercase tracking-wider text-white mb-5 border-l-2 border-[#e31e24] pl-3">
              Contact Us
            </h4>

            <div className="space-y-4 text-[14px] text-gray-400">
              {/* Phone 1 */}
              <a href="tel:9910327224" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Phone size={16} className="text-[#e31e24] flex-shrink-0" />
                <span className="font-semibold text-white">+91 99103 27224</span>
              </a>

              {/* Phone 2 */}
              <a href="tel:9315238601" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Phone size={16} className="text-[#e31e24] flex-shrink-0" />
                <span className="font-semibold text-white">+91 93152 38601</span>
              </a>

              {/* Email */}
              <a href="mailto:royaladvertising786@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Mail size={16} className="text-[#e31e24] flex-shrink-0" />
                <span className="font-medium break-all">royaladvertising786@gmail.com</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="text-[#e31e24] flex-shrink-0 mt-0.5" />
                <span>Northern India & Corporate Hubs Pan-India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & legal */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Royal Advertising. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
