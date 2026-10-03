import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Calendar,
  Droplets,
  Award,
  Cpu,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Home,
  ChevronRight,
  Sparkles,
  Download,
  Send,
  Zap,
  Layers
} from 'lucide-react';
import { COMPANY } from '../data/siteData';

interface AboutPageProps {
  onOpenEnquiry: (productName?: string) => void;
  onOpenCatalogue: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry, onOpenCatalogue }) => {
  return (
    <div className="bg-white">
      {/* Full-Width Edge-to-Edge Hero Banner */}
      <div className="w-full relative py-16 sm:py-24 bg-[#031525] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/assets/hero/hero-pool-night-luxury.webp"
            alt="HUMA Pool Lighting Background"
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
            <span className="text-aqua-300 font-semibold">About Us</span>
          </nav>

          {/* Badge & Title */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-aqua-400 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/15">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>ESTABLISHED 2010 • VASAI-VIRAR, MAHARASHTRA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Lighting Water Spaces With Purpose & Engineering
            </h1>

            <p className="text-sm sm:text-base text-slate-200 max-w-2xl font-light leading-relaxed">
              HUMA Fountains & Pools is a dedicated manufacturer of certified underwater LED lights, fountain fixtures, and precision aquatic lighting fittings.
            </p>
          </div>

          {/* Feature Highlights Strip */}
          <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-4 text-xs font-semibold">
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-aqua-300">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-aqua-400" />
              {COMPANY.certification}
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-amber-300">
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              14+ Years Manufacturing Excellence
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-emerald-300">
              <Droplets className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              100% Submersion Pressure Tested
            </span>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenEnquiry('About HUMA Consultation')}
              className="inline-flex items-center text-xs sm:text-sm font-bold px-5 py-2.5 bg-aqua-500 hover:bg-aqua-400 text-navy-950 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4 mr-2" />
              Request Consultation
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

      {/* Main Founder & Company Narrative */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-aqua-700 bg-aqua-50 px-3 py-1 rounded-full border border-aqua-200">
                  Our Background & Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 leading-tight">
                  Nassar Khan (Founder) & The HUMA Journey
                </h2>
              </div>

              {/* Founder Executive Highlight Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#062B4C] via-[#09355C] to-[#041D33] border border-[#E8B84A]/40 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#E8B84A]/10 rounded-bl-full pointer-events-none"></div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8B84A] via-amber-400 to-[#C9972E] text-[#041B30] flex items-center justify-center font-serif font-black text-xl shadow-lg ring-2 ring-[#E8B84A]/50 shrink-0">
                    NK
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-white">Nassar Khan</span>
                        <span className="text-[10px] font-bold text-[#E8B84A] bg-[#E8B84A]/15 px-2 py-0.5 rounded-full border border-[#E8B84A]/40 uppercase">
                          Founder & MD
                        </span>
                      </div>
                      <span className="text-xs text-amber-300 font-medium">EST. 2010</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 italic font-light leading-relaxed">
                      &ldquo;Every underwater luminaire we build is engineered with deep respect for water physics, ensuring absolute IP68 watertightness and stunning night-time brilliance.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  <strong className="text-navy-950 font-semibold">Huma Fountains and Pools</strong> has been a reputable manufacturer of underwater LED lights and fountain lights since 2010. With over a decade of experience in the industry, we have established ourselves as a reliable and innovative provider of high-quality lighting solutions for aquatic environments.
                </p>
                <p>
                  Our commitment to excellence is reflected in the durability, efficiency, and aesthetic appeal of our products. We understand the significance of creating captivating visual experiences through well-designed lighting, and our team of experts continuously strives to bring cutting-edge technology and creative designs to our customers.
                </p>
                <p>
                  Whether you&apos;re looking to enhance the beauty of your swimming pool, create a mesmerizing fountain display, or illuminate any underwater space, Huma Fountains and Pools offers a diverse range of lighting options to suit your needs. Our products are known for their energy efficiency, vibrant colors, and long lifespan, ensuring that your aquatic spaces remain stunning and captivating for years to come.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-slate-200 text-sm text-slate-700">
                <div className="flex items-center space-x-2 bg-aqua-50 px-3 py-1.5 rounded-lg border border-aqua-200">
                  <ShieldCheck className="w-5 h-5 text-aqua-600 shrink-0" />
                  <span className="font-semibold text-aqua-950">{COMPANY.certification}</span>
                </div>
                <div className="flex items-center space-x-2 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                  <Calendar className="w-5 h-5 text-amber-600 shrink-0" />
                  <span className="font-semibold text-amber-950">Manufacturing Since 2010</span>
                </div>
              </div>
            </div>

            {/* Right Factory Image Card */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/assets/factory/huma-factory-facility.webp"
                  alt="HUMA Fountains & Pools Manufacturing Plant"
                  className="w-full h-auto object-cover"
                />
                <div className="p-5 bg-navy-900 text-white text-xs sm:text-sm">
                  <span className="font-bold text-aqua-400 block mb-1">Manufacturing Facility & Head Office</span>
                  <span className="text-slate-300 leading-relaxed block">
                    {COMPANY.address}
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-aqua-50 to-blue-50 border border-aqua-200/80 p-6 rounded-2xl text-xs sm:text-sm text-navy-900 space-y-2">
                <span className="font-bold text-base text-navy-950 block">Direct Manufacturer Advantage</span>
                <p className="text-slate-700 leading-relaxed">
                  Unlike traders or pool construction generalists, HUMA manufactures lighting products in-house. This gives engineers and architects direct control over wattages, optical beam spreads, stainless steel grades (SS 304 vs SS 316), and customized cable lengths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#062B4C] text-aqua-400 flex items-center justify-center shadow-md">
                <Droplets className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At Huma Fountains and Pools, our mission is to illuminate and elevate aquatic environments through the design and manufacturing of top-quality underwater LED lights and fountain lights. We are dedicated to enhancing the beauty and ambiance of water features, pools, and fountains, creating captivating visual experiences that inspire awe and delight.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#062B4C] text-amber-400 flex items-center justify-center shadow-md">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We aim to set new industry standards through our commitment to technological advancement, design innovation and sustainability. By pushing the boundaries of creativity and engineering, we envision a world where every underwater space becomes a canvas for breathtaking illumination, sparking emotions and fostering memorable moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-aqua-700 bg-aqua-50 px-3 py-1 rounded-full border border-aqua-200">
              Engineering & Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900">
              Manufacturing & Quality Commitment
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every HUMA fixture is built around five non-negotiable engineering principles to ensure complete safety and photometric performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-blue-200 bg-blue-50/40 space-y-3">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Metallurgy</span>
              <h4 className="text-lg font-bold text-navy-900">SS 304 & SS 316 Stainless Steel</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                CNC-machined marine stainless steel grades resisting galvanic corrosion, chlorinated pool sanitizers, and coastal saline atmospheres.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-amber-200 bg-amber-50/40 space-y-3">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Optics</span>
              <h4 className="text-lg font-bold text-navy-900">UV-Stabilized Polycarbonate</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Toughened PC glass diffusers that do not yellow under sunlight and provide high light transmittance without fragility.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-200 bg-purple-50/40 space-y-3">
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">LED Engines</span>
              <h4 className="text-lg font-bold text-navy-900">Cree & Edison LED Diodes</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Genuine Cree SMD 2835 and Edison Power LED chips ensuring consistent color rendering (CRI &gt; 80) and 50,000+ hour operational lifespans.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/40 space-y-3">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Ingress Seal</span>
              <h4 className="text-lg font-bold text-navy-900">Certified IP68 Submersion</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dual silicone gaskets, vacuum potting resin, and Poly Cab marine submersible cables rated for permanent high-pressure underwater depth.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-8 py-4 bg-navy-900 hover:bg-[#072642] text-white text-sm sm:text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              Discuss Technical Requirements With Nassar Khan & Engineering Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
