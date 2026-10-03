import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  Sparkles,
  Wrench,
  Cpu,
  Layers,
  FileText,
  Download,
  Eye,
  Send,
  HelpCircle,
  Check,
  Zap,
  Waves,
  Compass,
  Award,
  Quote,
  MapPin
} from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider';
import { TrustStrip } from '../components/TrustStrip';
import { HomepageProductCard } from '../components/HomepageProductCard';
import { PRODUCTS, CATEGORIES, COMPANY } from '../data/siteData';

interface HomePageProps {
  onOpenEnquiry: (productName?: string) => void;
  onOpenCatalogue: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry, onOpenCatalogue }) => {
  const [activeProductTab, setActiveProductTab] = useState<string>('all');

  const filteredProducts = activeProductTab === 'all'
    ? PRODUCTS.filter((p) => p.isFeatured)
    : PRODUCTS.filter((p) => p.category === activeProductTab);

  const whatWeDoItems = [
    {
      icon: Droplets,
      title: 'Pool Lighting',
      desc: 'Certified IP68 underwater LED luminaires engineered for swimming pools, spas, resort lagoons, and residential or commercial aquatic installations.',
      badge: '01 • SUBMERSIBLE',
      iconBg: 'bg-gradient-to-br from-[#062B4C] to-[#082E4F]',
      iconColor: 'text-[#08B8C2]',
      iconShadow: 'shadow-[#08B8C2]/20',
      tags: ['IP68 Waterproof', 'Cree & Edison LEDs', 'Slim & Surface Mount'],
      link: '/pool-lighting',
    },
    {
      icon: Sparkles,
      title: 'Fountain Lighting',
      desc: 'High-power submersible spotlights, donut center-hole nozzle fixtures, and synchronized DMX512 color-changing systems for architectural fountains.',
      badge: '02 • ARCHITECTURAL',
      iconBg: 'bg-gradient-to-br from-[#041B30] to-[#062B4C]',
      iconColor: 'text-sky-400',
      iconShadow: 'shadow-sky-400/20',
      tags: ['Center-Hole Donut', 'DMX512 RGB Control', 'High-Lumen Spotlights'],
      link: '/fountain-lighting',
    },
    {
      icon: Cpu,
      title: 'Precision Manufacturing',
      desc: 'Factory-direct production using marine-grade SS 304/316, heavy-duty ABS composites, impact-resistant PC glass, and 100% pressure-chamber testing.',
      badge: '03 • FACTORY DIRECT',
      iconBg: 'bg-gradient-to-br from-[#062B4C] to-[#082E4F]',
      iconColor: 'text-[#E8B84A]',
      iconShadow: 'shadow-[#E8B84A]/20',
      tags: ['SS 304 / 316 Marine', 'ISO 9001:2015 Plant', '100% In-House Tested'],
      link: '/about-us',
    },
    {
      icon: Wrench,
      title: 'Fitting & Installation',
      desc: 'Specialized fitting accessories, niche mounts, conduit glands, and technical installation blueprints for both new construction and retrofit pools.',
      badge: '04 • INSTALLATION',
      iconBg: 'bg-gradient-to-br from-[#062B4C] to-[#0a3963]',
      iconColor: 'text-[#08B8C2]',
      iconShadow: 'shadow-[#08B8C2]/20',
      tags: ['Niche & Wall Brackets', 'Waterproof Glands', 'Retrofit Adaptors'],
      link: '/services',
    },
    {
      icon: Layers,
      title: 'Water Feature Lighting',
      desc: 'Linear IP65 LED wall washers, sheer descent waterfall illumination, cascade spouts, and decorative outdoor water streams.',
      badge: '05 • WATER FEATURES',
      iconBg: 'bg-gradient-to-br from-[#041B30] to-[#062B4C]',
      iconColor: 'text-teal-400',
      iconShadow: 'shadow-teal-400/20',
      tags: ['Linear Wall Washers', 'Cascade Waterfall Glow', 'Custom Lengths 1–12ft'],
      link: '/water-feature-lighting',
    },
    {
      icon: HelpCircle,
      title: 'Technical Support',
      desc: 'Dedicated engineering desk providing cable sizing, low-voltage 12V/24V safety calculations, photometric lux planning, and DMX wiring schemes.',
      badge: '06 • CONSULTATION',
      iconBg: 'bg-gradient-to-br from-[#062B4C] to-[#082E4F]',
      iconColor: 'text-[#E8B84A]',
      iconShadow: 'shadow-[#E8B84A]/20',
      tags: ['12V / 24V Safety', 'Photometric Planning', 'Wire Gauge Calculation'],
      link: '/services',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Understand Your Requirement',
      phase: 'Phase 1 • Planning',
      desc: 'We review your pool or fountain dimensions, water depth, surrounding ambient light, and specific architectural goals.',
      icon: Compass,
      color: 'text-sky-500',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      tag: 'Basin Dimensions & Lux Audit',
    },
    {
      step: '02',
      title: 'Select the Right Lighting Solution',
      phase: 'Phase 2 • Selection',
      desc: 'We recommend exact catalogue models (surface SS, ultra-slim ABS, spot or center-hole) matched to water chemistry and mounting style.',
      icon: Droplets,
      color: 'text-[#08B8C2]',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      tag: 'Catalogue Luminaire Match',
    },
    {
      step: '03',
      title: 'Technical Guidance',
      phase: 'Phase 3 • Engineering',
      desc: 'We provide dimensional drawings, transformer wattage calculations, cable recommendations, and beam spread configurations.',
      icon: Cpu,
      color: 'text-[#E8B84A]',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      tag: '12V Calculations & Wiring Schemes',
    },
    {
      step: '04',
      title: 'Fitting & Installation Support',
      phase: 'Phase 4 • Execution',
      desc: 'Precision fitting accessories and clear installation procedures ensure trouble-free watertight integration on site.',
      icon: Wrench,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      tag: 'Watertight Mounting Blueprints',
    },
    {
      step: '05',
      title: 'Testing & Completion',
      phase: 'Phase 5 • Quality Audit',
      desc: 'Verification of thermal dissipation, IP68 water sealing, and balanced photometric coverage across the aquatic basin.',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      tag: 'IP68 Seal & Lux Verification',
    },
    {
      step: '06',
      title: 'After-Sales Support',
      phase: 'Phase 6 • Warranty',
      desc: '2-Year factory warranty, spare housing parts availability, and ongoing product guidance directly from the manufacturer.',
      icon: Award,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      tag: '2-Year Factory Replacement',
    },
  ];

  const whyChoosePoints = [
    {
      title: 'Dedicated Lighting Expertise',
      desc: 'Dedicated exclusively to underwater pool and fountain illumination engineering—not general pool construction.',
      badge: '100% LIGHTING FOCUS',
      icon: Droplets,
      iconColor: 'text-[#08B8C2]',
      iconBg: 'bg-cyan-50 border-cyan-200',
      stat: 'Specialized Niche',
    },
    {
      title: 'Manufacturing Since 2010',
      desc: 'Over 14 years of manufacturing excellence with proven IP68 durability across thousands of aquatic installations in India.',
      badge: '14+ YEARS HERITAGE',
      icon: Award,
      iconColor: 'text-[#E8B84A]',
      iconBg: 'bg-amber-50 border-amber-200',
      stat: 'Established 2010',
    },
    {
      title: 'Marine-Grade Materials',
      desc: 'Complete catalogue-supported line of marine SS 304/316, heavy-duty ABS, impact PC glass, and Cree/Edison LEDs.',
      badge: 'PREMIUM RAW MATERIALS',
      icon: Layers,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50 border-blue-200',
      stat: 'SS 304 / SS 316',
    },
    {
      title: 'Precision Fitting Systems',
      desc: 'Comprehensive selection of surface brackets, niche conduits, and plumbing adapters engineered for aquatic reliability.',
      badge: 'WATERTIGHT FITTINGS',
      icon: Wrench,
      iconColor: 'text-teal-600',
      iconBg: 'bg-teal-50 border-teal-200',
      stat: 'Watertight Glands',
    },
    {
      title: 'Optical & Chemical Mastery',
      desc: 'Deep engineering knowledge of water refraction indices, chlorine resistance, saline pools, and narrow/wide beam angles.',
      badge: 'OPTICAL EFFICIENCY',
      icon: Zap,
      iconColor: 'text-amber-500',
      iconBg: 'bg-amber-50 border-amber-200',
      stat: '10° – 90° Optics',
    },
    {
      title: 'Direct Engineering Desk',
      desc: 'Direct consultation from lighting engineers for transformer sizing, DMX color show synchronization, and installation blueprints.',
      badge: 'FACTORY DIRECT SUPPORT',
      icon: Cpu,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50 border-indigo-200',
      stat: 'Vasai-Virar Desk',
    },
  ];

  const applicationsList = [
    {
      title: 'Residential Swimming Pools',
      desc: 'Crisp underwater illumination and ultra-slim flush profiles for private villas and residential estates.',
      image: '/assets/applications/app-residential-pool.webp',
      link: '/pool-lighting',
    },
    {
      title: 'Commercial Swimming Pools',
      desc: 'High-lumen, continuous-duty illumination for clubhouse, olympic, and fitness aquatic facilities.',
      image: '/assets/applications/app-commercial-pool.webp',
      link: '/pool-lighting',
    },
    {
      title: 'Hotels & Resorts',
      desc: 'Atmospheric twilight glows, infinity pool accents, and color-changing RGB resort lagoon features.',
      image: '/assets/applications/app-hotel-resort-pool.webp',
      link: '/pool-lighting',
    },
    {
      title: 'Fountain Installations',
      desc: 'High-intensity spot and center-hole fixtures penetrating vertical water columns and dancing jets.',
      image: '/assets/applications/app-fountain-plaza.webp',
      link: '/fountain-lighting',
    },
    {
      title: 'Architectural Water Features',
      desc: 'Civic landmarks, reflecting pools, and illuminated water blades creating bold nocturnal signatures.',
      image: '/assets/applications/app-architectural-water.webp',
      link: '/water-feature-lighting',
    },
    {
      title: 'Cascading Water Walls & Landscapes',
      desc: 'Linear IP65 LED wall washers and stainless steel shear cascades for garden retaining walls.',
      image: '/assets/applications/app-architectural-facade.webp',
      link: '/water-feature-lighting',
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Slider */}
      <HeroSlider
        onOpenEnquiry={onOpenEnquiry}
        onOpenCatalogue={onOpenCatalogue}
      />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. About HUMA Section (High-Impact Architectural Enhancement) */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#F8FCFC] via-white to-[#F4FAFB] relative overflow-hidden">
        {/* Ambient Architectural Lighting Shimmers */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E8B84A]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-aqua-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7">
              {/* Premium Eyebrow Badge with Gold Accent */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#062B4C] border border-[#E8B84A]/60 text-[#E8B84A] text-xs font-bold tracking-wider uppercase shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#E8B84A]" />
                <span>ABOUT HUMA FOUNTAINS & POOLS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8B84A]"></span>
                <span className="text-white font-medium">MFG SINCE 2010</span>
              </div>

              {/* Main Heading with Dual-Tone Lighting Accents */}
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#062B4C] leading-[1.16] tracking-tight">
                  Lighting Water Spaces With{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08B8C2] via-sky-500 to-[#062B4C]">
                    Purpose & Precision
                  </span>
                </h2>
                <div className="flex items-center space-x-3 pt-1">
                  <div className="h-1.5 w-16 bg-gradient-to-r from-[#E8B84A] to-amber-300 rounded-full shadow-[0_0_12px_rgba(232,184,74,0.6)]"></div>
                  <div className="h-1.5 w-8 bg-aqua-500 rounded-full"></div>
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                    Innovative Lighting Solution
                  </span>
                </div>
              </div>

              {/* Founder Executive Highlight Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#062B4C] via-[#09355C] to-[#041D33] border border-[#E8B84A]/40 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#E8B84A]/10 via-transparent to-transparent rounded-bl-full pointer-events-none"></div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 relative z-10">
                  <div className="flex items-center space-x-3.5 shrink-0">
                    {/* Executive Monogram Avatar */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8B84A] via-amber-400 to-[#C9972E] text-[#041B30] flex items-center justify-center font-serif font-black text-xl shadow-lg ring-2 ring-[#E8B84A]/50 group-hover:scale-105 transition-transform">
                      NK
                    </div>
                    <div className="sm:hidden">
                      <div className="flex items-center space-x-2">
                        <span className="text-base font-bold text-white tracking-wide">Nassar Khan</span>
                        <span className="text-[10px] font-bold text-[#E8B84A] bg-[#E8B84A]/15 px-2 py-0.5 rounded-full border border-[#E8B84A]/40 uppercase">
                          Founder & MD
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-300">EST. 2010 • Vasai-Virar</span>
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="hidden sm:flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <span className="text-base sm:text-lg font-bold text-white tracking-wide">Nassar Khan</span>
                        <span className="text-[10px] font-bold text-[#E8B84A] bg-[#E8B84A]/15 px-2.5 py-0.5 rounded-full border border-[#E8B84A]/40 uppercase tracking-wider">
                          Founder & Managing Director
                        </span>
                      </div>
                      <span className="text-xs text-amber-300/80 font-medium">14+ Years Leadership</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light italic">
                      &ldquo;With over a decade of dedicated manufacturing since 2010, our engineering team continuously brings cutting-edge technology, robust underwater durability, and creative photometric designs to aquatic environments.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Narrative Text */}
              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-navy-950 font-semibold">Huma Fountains and Pools</strong> has been a reputable manufacturer of underwater LED lights and fountain luminaires since 2010. With over a decade of specialized industry experience, we have established ourselves as a reliable and innovative provider of high-quality illumination systems for aquatic environments.
                </p>
                <p>
                  Our commitment to excellence is reflected in the durability, efficiency, and aesthetic appeal of our products. From stainless steel (SS 304/316) underwater pool lights to nozzle-mounted fountain fixtures, linear LED wall washers, and waterfall fittings, each luminaire is engineered in-house to withstand continuous immersion and demanding water chemistry.
                </p>
              </div>

              {/* 4 Core Engineering Pillars Strip (Multi-Color Visualization) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#062B4C] block leading-tight">Marine Metallurgy</span>
                  <span className="text-[11px] text-slate-500 block pt-0.5">SS 304 & SS 316</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#062B4C] block leading-tight">IP68 Hermetic Seal</span>
                  <span className="text-[11px] text-slate-500 block pt-0.5">3-Bar Pressure Tested</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-amber-400 hover:shadow-md transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#062B4C] block leading-tight">Safe 12V Voltage</span>
                  <span className="text-[11px] text-slate-500 block pt-0.5">Poly Cab Marine Core</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-cyan-400 hover:shadow-md transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#062B4C] block leading-tight">Precision Optics</span>
                  <span className="text-[11px] text-slate-500 block pt-0.5">10°–90° PMMA Lenses</span>
                </div>
              </div>

              {/* Mission & Vision Duo Cards with Gold & Aqua Theming */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Mission Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-aqua-500 shadow-sm hover:shadow-xl transition-all space-y-3 group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-aqua-50 text-aqua-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform shadow-xs">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#062B4C] block">Our Mission</span>
                      <span className="text-[11px] text-aqua-600 font-semibold">Elevating Aquatic Spaces</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To illuminate and elevate aquatic environments through the design and manufacturing of top-quality underwater LED lights and fountain lights that inspire awe and delight.
                  </p>
                  <div className="pt-1 flex flex-wrap gap-2 text-[10px] font-semibold text-slate-600">
                    <span className="bg-aqua-50 text-aqua-700 px-2 py-0.5 rounded-md">✓ IP68 Zero Ingress</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">✓ High-Lumen Cree LEDs</span>
                  </div>
                </div>

                {/* Vision Card with #E8B84A Gold */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8B84A]/60 hover:border-[#E8B84A] shadow-sm hover:shadow-xl transition-all space-y-3 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#E8B84A]/10 rounded-bl-full pointer-events-none"></div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E8B84A] text-[#041B30] flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#062B4C] block">Our Vision</span>
                      <span className="text-[11px] text-[#B8871E] font-semibold">Technological Advancement</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To push the boundaries of creativity and engineering, envisioning a world where every underwater space becomes a canvas for breathtaking, reliable illumination.
                  </p>
                  <div className="pt-1 flex flex-wrap gap-2 text-[10px] font-semibold text-slate-600">
                    <span className="bg-amber-50 text-[#B8871E] px-2 py-0.5 rounded-md">★ DMX512 Color Symphony</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">★ Landmark Installations</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about-us"
                  className="inline-flex items-center px-6 py-3.5 bg-[#062B4C] hover:bg-[#082E4F] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-xl transition-all group border border-white/10"
                >
                  <span>Know More About HUMA</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-[#E8B84A] transition-transform group-hover:translate-x-1" />
                </Link>
                <button
                  onClick={() => onOpenEnquiry('Factory Engineering Consultation')}
                  className="inline-flex items-center px-6 py-3.5 border-2 border-[#E8B84A] hover:bg-[#E8B84A] text-[#062B4C] hover:text-[#041B30] text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-[#E8B84A]/25"
                >
                  <Send className="w-3.5 h-3.5 mr-2" />
                  <span>Speak With Our Engineers</span>
                </button>
              </div>
            </div>

            {/* Right Factory Image Showcase Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative">
                {/* Gold and Aqua Ambient Lighting Halo */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#E8B84A]/30 via-aqua-500/20 to-blue-600/20 blur-xl opacity-70 pointer-events-none"></div>

                {/* Outer Architectural Teal / Navy Frame matching screenshot style */}
                <div className="relative rounded-3xl p-3 sm:p-3.5 bg-gradient-to-br from-[#06395A] via-[#084D72] to-[#042842] border-2 border-aqua-500/30 shadow-2xl">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-slate-900 group">
                    <img
                      src="/assets/factory/huma-factory-facility.webp"
                      alt="HUMA Fountains & Pools Manufacturing Facility in Vasai-Virar"
                      className="w-full h-auto min-h-[310px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041B30] via-black/15 to-transparent"></div>

                    {/* Top-Right Floating Quality Badge with Gold Accent */}
                    <div className="absolute top-3.5 right-3.5 z-10 bg-[#062B4C]/95 backdrop-blur-md border border-[#E8B84A] text-[#E8B84A] text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-xl flex items-center space-x-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#E8B84A]" />
                      <span>ISO 9001:2015 CERTIFIED</span>
                    </div>

                    {/* Top-Left Live Status Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10 bg-white/95 backdrop-blur-md border border-slate-200 text-navy-950 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Vasai-Virar Facility</span>
                    </div>

                    {/* Bottom Details Overlay with Plant Address */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10">
                      <div className="bg-[#041B30]/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/15 space-y-1 shadow-xl">
                        <div className="flex items-center space-x-2 text-[#E8B84A] text-xs font-bold">
                          <MapPin className="w-3.5 h-3.5 text-[#E8B84A] shrink-0" />
                          <span>HUMA MANUFACTURING PLANT & HEAD OFFICE</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {COMPANY.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Milestone Stat Cards Below the Image */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-md border border-slate-200/90 text-center space-y-0.5 hover:border-[#E8B84A] transition-colors">
                  <span className="text-xl sm:text-2xl font-serif font-black text-[#062B4C] block leading-none">
                    2010
                  </span>
                  <span className="text-[10px] font-bold text-[#E8B84A] uppercase tracking-wider block">
                    MFG SINCE
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium block pt-0.5">
                    14+ Years Exp.
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-md border border-slate-200/90 text-center space-y-0.5 hover:border-emerald-500 transition-colors">
                  <span className="text-xl sm:text-2xl font-serif font-black text-emerald-700 block leading-none">
                    100%
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                    IP68 SEAL
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium block pt-0.5">
                    Pressure Tested
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-md border border-slate-200/90 text-center space-y-0.5 hover:border-aqua-500 transition-colors">
                  <span className="text-xl sm:text-2xl font-serif font-black text-aqua-600 block leading-none">
                    50K+
                  </span>
                  <span className="text-[10px] font-bold text-aqua-600 uppercase tracking-wider block">
                    INSTALLED
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium block pt-0.5">
                    Pan India Reach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Do - Enhanced Core Capabilities Showcase */}
      <section className="py-24 bg-gradient-to-b from-[#F4FAFB] via-white to-[#F4FAFB] border-y border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Radial Aquatic Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none blur-3xl opacity-60"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(8, 184, 194, 0.12) 0%, rgba(221, 247, 248, 0.25) 45%, transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[#08B8C2] bg-[#DDF7F8] border border-[#08B8C2]/30 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#08B8C2]" />
              <span>CORE CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#062B4C] leading-tight">
              What We Do
            </h2>

            {/* Luminous Lighting Element with Gold Accent */}
            <div className="flex items-center justify-center space-x-2 pt-1 pb-1">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#08B8C2] rounded-full" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E8B84A] shadow-[0_0_10px_#E8B84A]" />
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#08B8C2] rounded-full" />
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We specialize exclusively in pool and fountain lighting products, precision-machined fitting systems, and certified technical installation guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-[#08B8C2]/60 shadow-sm hover:shadow-2xl hover:shadow-[#062B4C]/10 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Ambient Lighting Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#08B8C2]/30 to-transparent group-hover:via-[#08B8C2] transition-colors" />

                  {/* Ambient Corner Glow Watermark */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#08B8C2]/5 rounded-full group-hover:scale-150 group-hover:bg-[#08B8C2]/10 transition-all duration-500 pointer-events-none blur-2xl" />

                  <div className="space-y-5">
                    {/* Top Row: Glowing Icon & Category Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl ${item.iconBg} text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md ${item.iconShadow}`}>
                        <Icon className={`w-7 h-7 ${item.iconColor}`} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#08B8C2] transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#062B4C] group-hover:text-[#08B8C2] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Technical Capability Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium bg-[#F4FAFB] text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/70 group-hover:border-[#08B8C2]/30 group-hover:bg-[#DDF7F8]/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100/90 flex items-center justify-between">
                    <Link
                      to={item.link}
                      className="inline-flex items-center text-xs font-bold text-[#062B4C] group-hover:text-[#08B8C2] transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#08B8C2] transition-transform group-hover:translate-x-1.5" />
                    </Link>
                    <span className="text-[11px] font-bold text-[#E8B84A] opacity-0 group-hover:opacity-100 transition-opacity">
                      HUMA Certified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-aqua-600 bg-aqua-50 px-3 py-1 rounded-full">
                Catalogue Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mt-2">
                Explore Our Lighting Solutions
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center text-xs font-bold text-navy-900 hover:text-aqua-600 transition-colors"
            >
              <span>View All Catalogue Products</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative flex flex-col justify-end min-h-[420px]"
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={`${cat.name} solutions by HUMA Fountains & Pools`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031525] via-[#062B4C]/75 to-transparent"></div>

                {/* Content Overlay */}
                <div className="relative z-10 p-7 space-y-3 text-white">
                  <div className="text-[11px] font-bold text-aqua-400 tracking-wider uppercase">
                    {cat.tagline}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {cat.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {cat.subCategories.map((sub, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-white/10 backdrop-blur-sm text-slate-200 px-2 py-0.5 rounded"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/15">
                    <Link
                      to={`/${cat.slug}`}
                      className="inline-flex items-center text-xs font-bold text-aqua-400 hover:text-white transition-colors"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Products Showcase */}
      <section className="py-20 bg-[#F4FAFB] border-y border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Radial Aqua Glow Background */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none blur-3xl opacity-60"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(8, 184, 194, 0.16) 0%, rgba(221, 247, 248, 0.3) 45%, transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#08B8C2] bg-[#DDF7F8] px-3.5 py-1 rounded-full border border-[#08B8C2]/30">
              OUR PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#062B4C]">
              Explore Our Lighting Solutions
            </h2>

            {/* Subtle Aqua Decorative Line / Lighting Element */}
            <div className="flex items-center justify-center space-x-2 pt-1 pb-1">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#08B8C2] rounded-full" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#08B8C2] shadow-[0_0_10px_#08B8C2]" />
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#08B8C2] rounded-full" />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Precision-engineered underwater pool luminaires, fountain spotlights, and architectural wall washers manufactured to IP68 submersible standards for swimming pools, musical fountains, and luxury water installations.
            </p>

            {/* Redesigned Category Filters with Multi-Color Signatures */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {[
                { id: 'all', label: 'Featured Highlights', icon: Sparkles, activeClass: 'bg-[#062B4C] text-[#E8B84A] ring-2 ring-[#E8B84A] shadow-md shadow-[#E8B84A]/20', iconColor: 'text-[#E8B84A]' },
                { id: 'pool-lighting', label: 'Pool Lighting', icon: Waves, activeClass: 'bg-[#062B4C] text-[#08B8C2] ring-2 ring-[#08B8C2] shadow-md shadow-[#08B8C2]/20', iconColor: 'text-[#08B8C2]' },
                { id: 'fountain-lighting', label: 'Fountain Lighting', icon: Droplets, activeClass: 'bg-[#062B4C] text-sky-400 ring-2 ring-sky-400 shadow-md shadow-sky-400/20', iconColor: 'text-sky-400' },
                { id: 'water-feature-lighting', label: 'Water Feature & Wall Washers', icon: Layers, activeClass: 'bg-[#062B4C] text-emerald-400 ring-2 ring-emerald-400 shadow-md shadow-emerald-400/20', iconColor: 'text-emerald-400' },
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeProductTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveProductTab(tab.id)}
                    className={`inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${
                      isActive
                        ? tab.activeClass
                        : 'bg-white hover:bg-slate-50 text-[#062B4C] border border-slate-200/90 hover:border-[#08B8C2] hover:text-[#08B8C2] hover:shadow-md'
                    }`}
                  >
                    <TabIcon className={`w-3.5 h-3.5 ${isActive ? tab.iconColor : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <HomepageProductCard
                key={product.id}
                product={product}
                onEnquire={onOpenEnquiry}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-[#062B4C] hover:bg-[#082E4F] text-white text-xs font-bold rounded-xl shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <span>View All Products ({PRODUCTS.length} Models)</span>
              <ArrowRight className="w-4 h-4 ml-2.5 text-[#08B8C2] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Catalogue CTA Section with Cinematic Parallax Background */}
      <section className="py-24 text-white relative overflow-hidden group">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed transform transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage: "url('/assets/hero/huma-hero-illuminated-fountain-night.webp')",
          }}
        />

        {/* Deep Navy Multi-stop Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031525]/95 via-[#062B4C]/90 to-[#041B30]/85 backdrop-blur-[2px]" />

        {/* Luminous Lighting Blooms */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(8,184,194,0.22)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(232,184,74,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Texts */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#08B8C2] bg-white/10 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase border border-white/15">
                <Sparkles className="w-4 h-4 text-[#E8B84A]" />
                <span>OFFICIAL TECHNICAL CATALOGUES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Explore the HUMA Product Catalogue
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-light">
                Get full access to our comprehensive product documentation containing detailed dimensional drawings, wattage variations, LED chip specifications, IP ratings, and plumbing thread sizes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-200 pt-2">
                <div className="flex items-start space-x-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10 backdrop-blur-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#08B8C2] shrink-0 mt-0.5" />
                  <span>Pool Lights: Surface SS, ABS, Ultra-Slim 15mm & Concealed Niches</span>
                </div>
                <div className="flex items-start space-x-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10 backdrop-blur-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#E8B84A] shrink-0 mt-0.5" />
                  <span>Fountain Lights: Stand Spots, Center-Hole Threaded & Swivel Rings</span>
                </div>
                <div className="flex items-start space-x-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10 backdrop-blur-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#08B8C2] shrink-0 mt-0.5" />
                  <span>Water Features: Linear IP65 Wall Washers (1–12 Ft) & Cascade Spouts</span>
                </div>
                <div className="flex items-start space-x-2.5 bg-white/5 p-3.5 rounded-xl border border-white/10 backdrop-blur-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Nozzles & Waterfalls: Cobra, Dolphin, Acrylic Cascade & Geysers</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenCatalogue()}
                  className="px-7 py-4 bg-[#08B8C2] hover:bg-[#0ad0dc] text-[#062B4C] font-bold rounded-xl shadow-lg hover:shadow-[#08B8C2]/30 transition-all flex items-center space-x-2 text-sm sm:text-base cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#062B4C]" />
                  <span>Download Catalogues (PDF)</span>
                </button>
                <button
                  onClick={() => onOpenCatalogue()}
                  className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/25 transition-all flex items-center space-x-2 text-sm sm:text-base cursor-pointer backdrop-blur-sm"
                >
                  <Eye className="w-4 h-4 text-[#08B8C2]" />
                  <span>View Online Catalogue</span>
                </button>
              </div>
            </div>

            {/* Right Catalogue Covers Preview with Glassmorphism */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-5">
              <div
                className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-md cursor-pointer hover:border-[#08B8C2] hover:scale-105 transition-all group shadow-xl"
                onClick={() => onOpenCatalogue()}
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-800 mb-3 shadow-md">
                  <img
                    src="/assets/catalogue/catalogue-cover-pool.webp"
                    alt="HUMA Swimming Pool Lighting Catalogue Cover"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white truncate">Pool Lighting 2024</h4>
                <p className="text-xs text-aqua-300">18 Pages • Technical Specs</p>
              </div>

              <div
                className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-md cursor-pointer hover:border-[#E8B84A] hover:scale-105 transition-all group shadow-xl"
                onClick={() => onOpenCatalogue()}
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-800 mb-3 shadow-md">
                  <img
                    src="/assets/catalogue/catalogue-cover-fountain.webp"
                    alt="HUMA Fountain Lighting & Equipments Catalogue Cover"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white truncate">Fountain Lighting 2024</h4>
                <p className="text-xs text-[#E8B84A]">28 Pages • Complete Range</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Applications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#08B8C2] bg-[#DDF7F8] px-3.5 py-1.5 rounded-full border border-[#08B8C2]/30">
              Aquatic Environments
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#062B4C]">
              Lighting Solutions for Different Water Environments
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Every aquatic installation presents unique optical refraction, depth, and mounting parameters. HUMA designs purpose-built solutions for diverse applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationsList.map((app, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 bg-white flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={app.image}
                    alt={`${app.title} underwater lighting by HUMA`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold drop-shadow">
                      {app.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {app.desc}
                  </p>
                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      to={app.link}
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-[#062B4C] hover:text-[#08B8C2] transition-colors"
                    >
                      <span>Explore Suitable Lights</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1 text-[#08B8C2]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Systematic Execution - Graphical Visual Workflow Pipeline */}
      <section className="py-24 bg-gradient-to-b from-[#F4FAFB] via-white to-[#F4FAFB] border-y border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none blur-3xl opacity-60"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(8, 184, 194, 0.12) 0%, rgba(232, 184, 74, 0.10) 45%, transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[#08B8C2] bg-[#DDF7F8] border border-[#08B8C2]/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase">
              <Compass className="w-4 h-4 text-[#08B8C2]" />
              <span>SYSTEMATIC EXECUTION PIPELINE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#062B4C]">
              From Product Selection to Installation
            </h2>

            {/* Glowing Accent Beam */}
            <div className="flex items-center justify-center space-x-2 pt-1 pb-1">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#08B8C2] rounded-full" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E8B84A] shadow-[0_0_10px_#E8B84A]" />
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#08B8C2] rounded-full" />
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Our structured 6-stage engineering process ensures seamless coordination from initial technical inquiry through long-term after-sales reliability.
            </p>
          </div>

          {/* Graphical Pipeline Grid with Visual Flow Badges & Step Connections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#08B8C2]/60 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group flex flex-col justify-between"
                >
                  {/* Top Ambient Glow Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#08B8C2]/40 to-transparent group-hover:via-[#08B8C2] transition-colors" />

                  {/* Watermark Step Number in Background */}
                  <div className="absolute top-2 right-4 text-6xl font-serif font-black text-slate-100 group-hover:text-cyan-50/60 transition-colors pointer-events-none select-none">
                    {step.step}
                  </div>

                  <div className="space-y-4 relative z-10">
                    {/* Top Row: Graphic Icon & Phase Pill */}
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                        <StepIcon className={`w-7 h-7 ${step.color}`} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200/70">
                        {step.phase}
                      </span>
                    </div>

                    {/* Step Title - Larger & Bold */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#062B4C] group-hover:text-[#08B8C2] transition-colors leading-snug">
                      {step.title}
                    </h3>

                    {/* Step Description - Larger Text */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Deliverable Tag */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
                    <span className="font-semibold text-slate-500 bg-[#F4FAFB] px-2.5 py-1 rounded-md border border-slate-200/60">
                      {step.tag}
                    </span>
                    <span className="font-bold text-[#08B8C2] group-hover:translate-x-1 transition-transform">
                      Stage {idx + 1} →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Why Choose HUMA & Factual Quality Assurance - With Visual Distinction & Metric Counter Strip */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#08B8C2] bg-[#DDF7F8] px-3.5 py-1.5 rounded-full border border-[#08B8C2]/30">
              The HUMA Distinction
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#062B4C]">
              Why Choose HUMA
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Factory-direct manufacturing integrity, certified ISO quality systems, and dedicated underwater lighting engineering.
            </p>
          </div>

          {/* Visual Metric Counter Strip / Achievement Highlights */}
          <div className="mb-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-[#062B4C] to-[#082E4F] text-white p-6 rounded-2xl border border-amber-400/40 shadow-xl shadow-amber-500/5 text-center space-y-1 relative overflow-hidden group hover:border-amber-300 hover:scale-105 transition-all">
              <div className="text-3xl sm:text-4xl font-serif font-black text-[#E8B84A] drop-shadow-[0_2px_10px_rgba(232,184,74,0.3)]">14+</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">Years Manufacturing</div>
              <div className="text-[11px] text-[#08B8C2]">MFG Since 2010</div>
            </div>

            <div className="bg-gradient-to-br from-[#062B4C] to-[#082E4F] text-white p-6 rounded-2xl border border-cyan-400/40 shadow-xl shadow-cyan-500/5 text-center space-y-1 relative overflow-hidden group hover:border-cyan-300 hover:scale-105 transition-all">
              <div className="text-3xl sm:text-4xl font-serif font-black text-[#08B8C2] drop-shadow-[0_2px_10px_rgba(8,184,194,0.3)]">100%</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">Pressure Immersion</div>
              <div className="text-[11px] text-emerald-400">Zero-Leak Testing</div>
            </div>

            <div className="bg-gradient-to-br from-[#062B4C] to-[#082E4F] text-white p-6 rounded-2xl border border-sky-400/40 shadow-xl shadow-sky-500/5 text-center space-y-1 relative overflow-hidden group hover:border-sky-300 hover:scale-105 transition-all">
              <div className="text-3xl sm:text-4xl font-serif font-black text-sky-400 drop-shadow-[0_2px_10px_rgba(56,189,248,0.3)]">50,000+</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">Submersible Fixtures</div>
              <div className="text-[11px] text-amber-300">Installed Across India</div>
            </div>

            <div className="bg-gradient-to-br from-[#062B4C] to-[#082E4F] text-white p-6 rounded-2xl border border-emerald-400/40 shadow-xl shadow-emerald-500/5 text-center space-y-1 relative overflow-hidden group hover:border-emerald-300 hover:scale-105 transition-all">
              <div className="text-3xl sm:text-4xl font-serif font-black text-emerald-400 drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)]">2-Year</div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">Replacement Guarantee</div>
              <div className="text-[11px] text-slate-300">Direct Factory Warranty</div>
            </div>
          </div>

          {/* Visual Distinction Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {whyChoosePoints.map((pt, idx) => {
              const PtIcon = pt.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl border border-slate-200/90 bg-white hover:border-[#08B8C2]/60 hover:shadow-xl transition-all duration-300 shadow-sm flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl ${pt.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs`}>
                        <PtIcon className={`w-6 h-6 ${pt.iconColor}`} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                        {pt.stat}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#062B4C] group-hover:text-[#08B8C2] transition-colors leading-snug">
                      {pt.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#08B8C2]">
                      {pt.badge}
                    </span>
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Factual Quality Standards Box - Cinematic Manufacturing Compliance Showcase with Parallax */}
          <div className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
            {/* Background Image with Desktop Subtle Parallax */}
            <div
              className="absolute inset-0 bg-cover bg-center md:bg-fixed transform transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: "url('/assets/factory/huma-factory-facility.webp')",
              }}
            />

            {/* Dark Navy Overlay (75-80% opacity) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#041B30]/95 via-[#062B4C]/88 to-[#082E4F]/92 backdrop-blur-[2px]" />

            {/* Subtle Aqua Lighting Bloom / Glow Streaks */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[radial-gradient(circle,_rgba(8,184,194,0.22)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[radial-gradient(circle,_rgba(8,184,194,0.15)_0%,_transparent_70%)] pointer-events-none blur-2xl" />

            {/* Glassmorphic Inner Container */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-14 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-8 space-y-5">
                  {/* Category Pill with Shield */}
                  <div className="inline-flex items-center space-x-2 text-[#08B8C2] bg-[#08B8C2]/15 border border-[#08B8C2]/30 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                    <ShieldCheck className="w-4 h-4 text-[#08B8C2]" />
                    <span>MANUFACTURING QUALITY COMPLIANCE</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
                    ISO 9001:2015 Certified Manufacturing Facility
                  </h3>

                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-light">
                    Every luminaire leaving our Vasai-Virar manufacturing plant undergoes pressure-chamber submersion testing, photometric lumen verification, and thermal burn-in analysis to guarantee long-term IP68 reliability under permanent water immersion.
                  </p>

                  {/* Compliance Verification Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center space-x-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#08B8C2] shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">100% In-House Pressure Chamber Immersion Tested</span>
                    </div>
                    <div className="flex items-center space-x-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#E8B84A] shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">Marine-Grade SS 304 / SS 316 / Heavy ABS Enclosures</span>
                    </div>
                    <div className="flex items-center space-x-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#08B8C2] shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">ISO 9001:2015 Quality Management Certified</span>
                    </div>
                    <div className="flex items-center space-x-2.5 bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">Mfg Since 2010 • 2-Year Replacement Warranty</span>
                    </div>
                  </div>
                </div>

                {/* Right Call-To-Action Buttons */}
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-end">
                  <button
                    onClick={() => onOpenEnquiry()}
                    className="px-7 py-4 bg-[#08B8C2] hover:bg-[#0ad0dc] text-[#062B4C] font-bold rounded-xl text-xs sm:text-sm text-center transition-all shadow-lg hover:shadow-[#08B8C2]/30 cursor-pointer flex items-center justify-center space-x-2 group/btn"
                  >
                    <span>Request Factory Specification</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <Link
                    to="/services"
                    className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs sm:text-sm text-center border border-white/25 backdrop-blur-sm transition-all"
                  >
                    View Fitting & Testing Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final CTA Section with Background Image */}
      <section className="py-24 text-white relative overflow-hidden group">
        {/* Cinematic Parallax Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed transform transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage: "url('/assets/hero/huma-hero-luxury-pool-waterfall.webp')",
          }}
        />

        {/* Multi-stop Dark Navy Gradient Overlay for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031525]/95 via-[#062B4C]/90 to-[#041B30]/85 backdrop-blur-[2px]" />

        {/* Luminous Lighting Glows */}
        <div className="absolute -top-24 left-1/3 w-96 h-96 bg-[radial-gradient(circle,_rgba(8,184,194,0.25)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 w-96 h-96 bg-[radial-gradient(circle,_rgba(232,184,74,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 text-[#08B8C2] bg-white/10 px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider border border-white/20 backdrop-blur-md">
            <Zap className="w-4 h-4 text-[#E8B84A]" />
            <span>LET&apos;S LIGHT UP YOUR PROJECT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight drop-shadow-md">
            Let&apos;s Light Up Your Pool or Fountain
          </h2>

          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-light max-w-2xl mx-auto">
            Tell us about your project requirements and our engineering team will help you choose the ideal underwater lighting solution, wiring calculation, and factory quotation.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-9 py-4 bg-gradient-to-r from-[#08B8C2] to-cyan-500 hover:from-[#0ac3ce] hover:to-cyan-400 text-[#062B4C] font-extrabold rounded-xl transition-all shadow-xl hover:shadow-[#08B8C2]/40 flex items-center space-x-2.5 text-base cursor-pointer"
            >
              <Send className="w-5 h-5 text-[#062B4C]" />
              <span>Request a Quote</span>
            </button>
            <Link
              to="/products"
              className="px-9 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/25 backdrop-blur-md text-base hover:border-white/40"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
