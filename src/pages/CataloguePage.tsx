import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  Eye,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight,
  Award,
  Sparkles,
  BookOpen,
  Layers,
  Zap
} from 'lucide-react';
import { COMPANY } from '../data/siteData';

interface CataloguePageProps {
  onOpenEnquiry: (req?: string) => void;
}

export const CataloguePage: React.FC<CataloguePageProps> = ({ onOpenEnquiry }) => {
  const [activeViewerPdf, setActiveViewerPdf] = useState<string | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Full-Width Edge-to-Edge Hero Banner */}
      <div className="w-full relative py-16 sm:py-24 bg-[#031525] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/assets/hero/huma-hero-illuminated-fountain-night.webp"
            alt="HUMA Technical Product Catalogues"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#031525] via-[#062B4C]/85 to-[#031525]/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
            <Link to="/" className="hover:text-aqua-400 flex items-center transition-colors">
              <Home className="w-3.5 h-3.5 mr-1 text-aqua-400" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-aqua-300 font-semibold">Technical Catalogues</span>
          </nav>

          {/* Badge & Title */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-aqua-400 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/15">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>OFFICIAL TECHNICAL DOCUMENTATION • 2024 EDITIONS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Explore the HUMA Product Catalogues
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              Download or view our official 2024 Product Catalogues. Featuring verified product codes, dimensional line drawings, mounting cutout measurements, and photometric specifications for aquatic lighting professionals.
            </p>
          </div>

          {/* Feature Highlights Strip */}
          <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-4 text-xs font-semibold">
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-aqua-300">
              <BookOpen className="w-3.5 h-3.5 mr-1.5 text-aqua-400" />
              High-Resolution Photographic Plates
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-amber-300">
              <Layers className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              Dimensional Cutouts & CAD Sizes
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              IP68 & Low-Voltage Wiring Guides
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-blue-300">
              <Download className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              Direct PDF Instant Download
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        {/* Catalogues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPANY.catalogues.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative group shadow-inner">
                  <img
                    src={cat.cover}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3 bg-[#062B4C]/90 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-xl font-bold border border-white/15 shadow-sm">
                    {cat.pages} Pages • Full Edition
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 leading-snug">
                  {cat.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-aqua-600 shrink-0" />
                    <span>Includes high-resolution photographic catalog plates</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-aqua-600 shrink-0" />
                    <span>Includes complete wattage, beam angle & cutout tables</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-aqua-600 shrink-0" />
                    <span>Includes certified IP68 and low-voltage electrical guidance</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                <a
                  href={cat.file}
                  download
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center py-3 px-4 bg-navy-900 hover:bg-[#072642] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors"
                >
                  <Download className="w-4 h-4 mr-2 text-aqua-400" />
                  <span>Download Catalogue (PDF)</span>
                </a>
                <button
                  onClick={() => setActiveViewerPdf(cat.file)}
                  className="inline-flex items-center justify-center py-3 px-4 border border-slate-300 hover:border-navy-900 text-slate-800 hover:text-navy-900 text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 mr-1.5 text-aqua-600" />
                  <span>Preview Online</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded PDF Viewer if activated */}
        {activeViewerPdf && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-base sm:text-lg font-bold text-navy-900 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-aqua-600" />
                <span>Interactive Technical Catalogue Viewer</span>
              </h3>
              <div className="flex items-center space-x-3">
                <a
                  href={activeViewerPdf}
                  download
                  className="text-xs sm:text-sm font-bold text-aqua-600 hover:underline flex items-center"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Save PDF to Device
                </a>
                <button
                  onClick={() => setActiveViewerPdf(null)}
                  className="text-xs sm:text-sm font-semibold px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 cursor-pointer"
                >
                  Close Viewer
                </button>
              </div>
            </div>
            <div className="h-[75vh] rounded-2xl overflow-hidden border border-slate-300 bg-slate-100 shadow-inner">
              <iframe
                src={activeViewerPdf}
                title="HUMA Catalogue Viewer"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        )}

        {/* Customized Catalogue Support Callout */}
        <div className="bg-gradient-to-r from-[#031525] via-[#062B4C] to-[#031525] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center text-xs font-bold text-amber-400 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Custom Manufacturing Services
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Looking for a Model Code Not Listed in the Standard Catalogue?
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              HUMA also produces customized underwater LED luminaires, special cable harness lengths, and custom stainless steel housing fixtures on request.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('Custom Catalogue Requirement')}
            className="px-7 py-3.5 bg-aqua-500 hover:bg-aqua-400 text-navy-950 font-bold rounded-xl text-sm whitespace-nowrap shadow-lg hover:shadow-aqua-500/20 cursor-pointer transition-all shrink-0"
          >
            Enquire for Customized Lights
          </button>
        </div>
      </div>
    </div>
  );
};
