import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Download,
  ExternalLink,
  Award,
  Zap,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { COMPANY } from '../data/siteData';

interface FooterProps {
  onOpenCookieSettings: () => void;
  onOpenCatalogue: () => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCookieSettings, onOpenCatalogue, onOpenEnquiry }) => {
  return (
    <footer className="bg-[#031525] text-slate-300 border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Lighting Blooms */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(8,184,194,0.08)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(232,184,74,0.06)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

      {/* Top Multicolour Trust & Quality Bar */}
      <div className="border-b border-white/10 bg-[#041B30]/70 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="p-2 rounded-lg bg-amber-500/15 text-[#E8B84A]">
                <Award className="w-5 h-5 text-[#E8B84A]" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">MFG Since 2010</div>
                <div className="text-[11px] text-slate-400">14+ Years Excellence</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="p-2 rounded-lg bg-cyan-500/15 text-[#08B8C2]">
                <ShieldCheck className="w-5 h-5 text-[#08B8C2]" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">ISO 9001:2015</div>
                <div className="text-[11px] text-slate-400">Certified Quality Plant</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">100% Submersion</div>
                <div className="text-[11px] text-slate-400">Pressure Chamber Tested</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">2-Year Warranty</div>
                <div className="text-[11px] text-slate-400">Direct Factory Backing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Bio Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block bg-white p-2 rounded-xl shadow-md border border-white/20">
              <img
                src="/assets/branding/huma-logo.jpg"
                alt="HUMA Fountains & Pools - Innovative Lighting Solution"
                className="h-12 w-auto object-contain"
                width="190"
                height="76"
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Established in 2010, HUMA Fountains & Pools is an ISO 9001:2015 certified manufacturer specializing in precision-engineered underwater LED lighting for swimming pools, musical fountains, and architectural water installations.
            </p>

            <div className="flex items-center space-x-3 text-xs text-[#08B8C2] bg-cyan-950/40 py-2.5 px-3.5 rounded-lg border border-[#08B8C2]/30 w-fit">
              <Sparkles className="w-4 h-4 text-[#E8B84A] shrink-0" />
              <span className="font-semibold">{COMPANY.certification} Registered Plant</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                onClick={() => onOpenCatalogue()}
                className="inline-flex items-center text-xs font-bold px-4 py-2.5 bg-gradient-to-r from-[#08B8C2] to-cyan-500 hover:from-[#0ac3ce] hover:to-cyan-400 text-[#062B4C] rounded-xl transition-all shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4 mr-2 text-[#062B4C]" />
                Download Catalogues (PDF)
              </button>
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center text-xs font-semibold px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors border border-white/20 cursor-pointer"
              >
                Quick Quotation
              </button>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white border-b-2 border-[#08B8C2] pb-2 w-fit">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#08B8C2] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#08B8C2] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#08B8C2] transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/applications" className="hover:text-[#08B8C2] transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#08B8C2] transition-colors">
                  Services & Fittings
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-[#08B8C2] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white border-b-2 border-blue-400 pb-2 w-fit">
              Products
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/pool-lighting" className="hover:text-blue-400 transition-colors">
                  Pool Lighting
                </Link>
              </li>
              <li>
                <Link to="/fountain-lighting" className="hover:text-blue-400 transition-colors">
                  Fountain Lighting
                </Link>
              </li>
              <li>
                <Link to="/water-feature-lighting" className="hover:text-blue-400 transition-colors">
                  Water Feature Lighting
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-400 transition-colors">
                  Concealed Niche Lights
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-400 transition-colors">
                  Center-Hole Nozzle Lights
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-400 transition-colors">
                  Linear IP65 Wall Washers
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-400 transition-colors">
                  Waterfall & Nozzle Spouts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white border-b-2 border-[#E8B84A] pb-2 w-fit">
              Factory & Sales
            </h3>
            <div className="space-y-3.5 text-sm leading-relaxed text-slate-300">
              <div className="flex items-start space-x-2.5">
                <div className="p-1 rounded bg-amber-500/20 text-[#E8B84A] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#E8B84A]" />
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="text-white font-semibold flex items-center mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                    Manufacturing Plant:
                  </span>
                  {COMPANY.address}
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <div className="p-1 rounded bg-cyan-500/20 text-[#08B8C2] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#08B8C2]" />
                </div>
                <div>
                  <a href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, '')}`} className="block hover:text-[#08B8C2] font-bold text-white transition-colors">
                    {COMPANY.primaryPhone}
                  </a>
                  <a href="tel:+919766775542" className="block hover:text-[#08B8C2] text-xs text-slate-400 transition-colors">
                    +91 9766775542 / 8180944842
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="p-1 rounded bg-blue-500/20 text-blue-400 shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-[#08B8C2] text-xs sm:text-sm font-medium transition-colors">
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs text-slate-300">{COMPANY.businessHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} HUMA Fountains & Pools. All Rights Reserved. • Made in Vasai-Virar, Maharashtra, India.
          </div>

          {/* Legal and Cookie Preferences */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/terms-and-conditions" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/cookie-policy" className="hover:text-slate-200 transition-colors">
              Cookie Policy
            </Link>
            <span className="text-white/20">•</span>
            <button
              onClick={onOpenCookieSettings}
              className="hover:text-[#08B8C2] transition-colors underline underline-offset-2 cursor-pointer"
            >
              Cookie Preferences
            </button>
          </div>

          {/* Mandatory Credit: Developed by Integral Web Solution */}
          <div className="text-slate-400 font-normal">
            Developed by{' '}
            <a
              href="https://integralwebsolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#08B8C2] hover:text-cyan-300 font-medium transition-colors inline-flex items-center"
            >
              Integral Web Solution
              <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
