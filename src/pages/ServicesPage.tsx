import React from 'react';
import { Link } from 'react-router-dom';
import {
  Lightbulb,
  CheckCircle2,
  Wrench,
  Cpu,
  Layers,
  HelpCircle,
  ShieldCheck,
  Send,
  ArrowRight,
  Phone,
  Droplets,
  Home,
  ChevronRight,
  Award,
  Sparkles,
  Zap,
  Download
} from 'lucide-react';
import { COMPANY } from '../data/siteData';

interface ServicesPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
  onOpenCatalogue: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenEnquiry, onOpenCatalogue }) => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Lighting Consultation & Photometric Planning',
      desc: 'Expert photometric guidance for architects, MEP consultants, landscape designers, and pool contractors. We assess pool dimensions, water refraction, depth, and ambient lux levels to recommend the ideal luminaire spacing and wattage distribution.',
      color: 'aqua',
      details: [
        'Photometric lux & lumen calculations for concrete and tiled pools',
        'Refraction and beam angle guidance (10° spot to 90° wide flood)',
        'Selection of color temperatures (Warm White 3000K, Cool White 6500K, RGB/DMX)',
      ],
    },
    {
      icon: Layers,
      title: 'Product Selection Assistance',
      desc: 'Guiding you through the complete HUMA product catalogue to select the exact body materials (marine SS 304 vs SS 316 vs chemical-resistant ABS composites), surface mounting or concealed flush niches, and nozzle fitting types.',
      color: 'blue',
      details: [
        'Matching material specifications to water salinity and chlorine levels',
        'Recommendation between surface-mount and flush-recessed concealed niches',
        'Verification of cutout diameters and conduit clearances',
      ],
    },
    {
      icon: Wrench,
      title: 'Pool Lighting Fitting Support',
      desc: 'Factory-engineered mounting brackets, clamping rings, and specialized fitting accessories designed for seamless attachment to pool wall tiles, vinyl liners, or gunite concrete shells.',
      color: 'amber',
      details: [
        'Supply of heavy-duty SS 304/316 wall mounting brackets and screws',
        'Siliconized dual-lip gaskets for leak-free pool wall conduit penetrations',
        'Ultra-slim bracket solutions for minimum protrusion from pool surfaces',
      ],
    },
    {
      icon: Droplets,
      title: 'Fountain Lighting Fitting Systems',
      desc: 'Specialized nozzle collars, center-hole threaded adapters, and pivoting stand-mounting systems engineered to withstand dynamic fountain vibrations and high pump pressure streams.',
      color: 'emerald',
      details: [
        'Threaded center-hole donut fittings (1/2", 3/4", 1" plumbing threads)',
        'Heavy-duty cast stainless steel pivoting ground stands',
        'Vibration-damped bracket assemblies for dancing water jets',
      ],
    },
    {
      icon: Cpu,
      title: 'Electrical & Cabling Guidance',
      desc: 'Safety is paramount in underwater environments. We provide strict low-voltage engineering recommendations, step-down transformer sizing, and specialized submersible cable calculations.',
      color: 'purple',
      details: [
        'Step-down transformer sizing (230V AC to safe 12V DC / 12V AC)',
        'Poly Cab marine grade submersible underwater cable calculations',
        'IP68 submersible junction box and potting compound specifications',
      ],
    },
    {
      icon: HelpCircle,
      title: 'Technical Guidance & On-Site Troubleshooting',
      desc: 'Direct factory engineering support for lighting contractors during on-site installation, commissioning, and system balancing.',
      color: 'teal',
      details: [
        'Testing procedures for water ingress and thermal dissipation',
        'DMX 512 / RGB synchronization and controller programming guidance',
        'On-call telephone support directly with our manufacturing specialists',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Lighting System Support & Maintenance',
      desc: 'Preventive care advice and factory support to maintain peak luminous output and prevent chemical scale buildup on underwater lenses.',
      color: 'rose',
      details: [
        'Guidance on lens descaling and pool water pH balancing',
        'Factory gasket replacement kits for scheduled servicing',
        'Complete supply of replacement housings and optical diffusers',
      ],
    },
    {
      icon: Award,
      title: 'After-Sales & 2-Year Warranty Support',
      desc: 'Every HUMA luminaire is backed by a 2-Year Manufacturer Warranty. We maintain ready inventory of housing parts, replacement LED driver modules, and mounting hardware.',
      color: 'gold',
      details: [
        '2-Year factory-direct replacement warranty on certified luminaires',
        'Availability of original HUMA spare parts and housing components',
        'Long-term client relationship management established since 2010',
      ],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Full-Width Edge-to-Edge Hero Banner */}
      <div className="w-full relative py-16 sm:py-24 bg-[#031525] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/assets/factory/huma-factory-facility.webp"
            alt="HUMA Manufacturing Support & Installation Services"
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
            <span className="text-aqua-300 font-semibold">Services & Fittings</span>
          </nav>

          {/* Badge & Title */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-aqua-400 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/15">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>DIRECT MANUFACTURER ENGINEERING SUPPORT • SINCE 2010</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Fitting, Installation & Lighting Services
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              We do not just supply luminaires in boxes. HUMA provides comprehensive product selection, mounting fittings, low-voltage wiring guidance, and factory-backed after-sales assistance to ensure every aquatic project succeeds flawlessly.
            </p>
          </div>

          {/* Multi-Colour Feature Highlights */}
          <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-4 text-xs font-semibold">
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-aqua-300">
              <Wrench className="w-3.5 h-3.5 mr-1.5 text-aqua-400" />
              Precision Mounting Brackets
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-blue-300">
              <Zap className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              12V Step-Down Transformer Sizing
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              2-Year Direct Factory Warranty
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              IP68 Waterproof Cable Assemblies
            </span>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenEnquiry('Installation & Services')}
              className="inline-flex items-center text-xs sm:text-sm font-bold px-5 py-2.5 bg-aqua-500 hover:bg-aqua-400 text-navy-950 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4 mr-2" />
              Request Engineering Assistance
            </button>
            <button
              onClick={onOpenCatalogue}
              className="inline-flex items-center text-xs sm:text-sm font-bold px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-navy-950 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Technical Catalogues
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        {/* Services Grid with Multi-Colour Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-aqua-400 shadow-sm hover:shadow-xl transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-[#062B4C] text-aqua-400 flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                      Service 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 leading-snug">
                    {srv.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    {srv.details.map((d, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-aqua-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenEnquiry(srv.title)}
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-navy-900 hover:text-aqua-600 transition-colors cursor-pointer group"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                    Factory Direct
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Support Phone Banner */}
        <div className="bg-gradient-to-r from-[#031525] via-[#062B4C] to-[#031525] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center text-xs font-bold text-amber-400 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5 mr-1" />
              Direct Engineering Hotline
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Need Direct Technical Advice on Site?
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              Our engineering help desk in Vasai-Virar is available Monday through Saturday to answer questions on transformer sizing, cutout depths, DMX programming, or customized Poly Cab submersible cable lengths.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 bg-aqua-500 hover:bg-aqua-400 text-navy-950 font-bold rounded-xl text-sm flex items-center space-x-2 transition-all shadow-lg hover:shadow-aqua-500/20 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY.primaryPhone}</span>
            </a>
            <button
              onClick={() => onOpenEnquiry('On-Site Technical Support')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm border border-white/20 transition-all cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
