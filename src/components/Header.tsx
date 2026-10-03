import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Info,
  Layers,
  Droplets,
  Wrench,
  BookOpen,
  PhoneCall,
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Download,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { COMPANY, CATEGORIES, PRODUCTS } from '../data/siteData';

interface HeaderProps {
  onOpenEnquiry: (productName?: string) => void;
  onOpenCatalogue: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry, onOpenCatalogue }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();
  const megaMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
  }, [location.pathname]);

  const handleMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  const handleMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 180);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isProductsActive =
    location.pathname.startsWith('/products') ||
    location.pathname === '/pool-lighting' ||
    location.pathname === '/fountain-lighting' ||
    location.pathname === '/water-feature-lighting';

  return (
    <>
      {/* Top Notification Bar - Sleek Dark Navy with Multi-Color Badges */}
      <div className="bg-[#041B30] text-slate-300 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <span className="inline-flex items-center text-aqua-400 font-semibold bg-aqua-950/60 px-2.5 py-0.5 rounded-full border border-aqua-500/30">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-aqua-400" />
              {COMPANY.certification}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-amber-400 font-semibold flex items-center bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-500/30">
              <Sparkles className="w-3 h-3 mr-1 text-amber-400" />
              MFG SINCE {COMPANY.mfgSince}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-slate-300 flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
              Vasai-Virar, Maharashtra, India
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center text-slate-300 hover:text-aqua-300 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 mr-1.5 text-aqua-400" />
              {COMPANY.primaryPhone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center text-slate-300 hover:text-aqua-300 transition-colors font-medium"
            >
              <Mail className="w-3 h-3 mr-1.5 text-aqua-400" />
              {COMPANY.email}
            </a>
            <button
              onClick={() => onOpenEnquiry()}
              className="bg-gradient-to-r from-aqua-500 via-teal-400 to-[#E8B84A] hover:brightness-110 text-navy-950 font-extrabold px-3.5 py-1 rounded-md text-xs transition-all shadow-sm hover:shadow-cyan-400/25 cursor-pointer"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Header - Clean White / Frosted Translucent (Strictly Contained, No Right Overflow) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md py-2 border-b border-slate-200'
            : 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Official Brand Logo - Prominently Visible & Sharp */}
            <Link to="/" className="flex items-center shrink-0 mr-2 xl:mr-4 group">
              <img
                src="/assets/branding/huma-logo.jpg"
                alt="HUMA Fountains & Pools - Innovative Lighting Solution"
                className="h-11 sm:h-12 lg:h-13 w-auto object-contain transition-transform group-hover:scale-[1.01]"
                width="190"
                height="60"
              />
            </Link>

            {/* Desktop Navigation - Strictly 1 Line with Icons, Balanced Spacing */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 shrink-0">
              {/* Home */}
              <Link
                to="/"
                className={`whitespace-nowrap flex items-center px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-aqua-600 bg-aqua-50/90 font-bold'
                    : 'text-slate-700 hover:text-aqua-600 hover:bg-slate-50'
                }`}
              >
                <Home className="w-3.5 h-3.5 mr-1 text-aqua-600 shrink-0" />
                <span className="whitespace-nowrap">Home</span>
              </Link>

              {/* About Us */}
              <Link
                to="/about-us"
                className={`whitespace-nowrap flex items-center px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                  isActive('/about-us')
                    ? 'text-aqua-600 bg-aqua-50/90 font-bold'
                    : 'text-slate-700 hover:text-aqua-600 hover:bg-slate-50'
                }`}
              >
                <Info className="w-3.5 h-3.5 mr-1 text-aqua-600 shrink-0" />
                <span className="whitespace-nowrap">About Us</span>
              </Link>

              {/* Products with Extra-Wide Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={handleMenuEnter}
                onMouseLeave={handleMenuLeave}
              >
                <Link
                  to="/products"
                  className={`whitespace-nowrap flex items-center px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                    isProductsActive
                      ? 'text-aqua-600 bg-aqua-50/90 font-bold'
                      : 'text-slate-700 hover:text-aqua-600 hover:bg-slate-50'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 mr-1 text-aqua-600 shrink-0" />
                  <span className="whitespace-nowrap">Products</span>
                  <ChevronDown
                    className={`ml-1 w-3 h-3 text-slate-400 transition-transform ${
                      isMegaMenuOpen ? 'rotate-180 text-aqua-600' : ''
                    }`}
                  />
                </Link>
              </div>

              {/* Applications */}
              <Link
                to="/applications"
                className={`whitespace-nowrap flex items-center px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                  isActive('/applications')
                    ? 'text-aqua-600 bg-aqua-50/90 font-bold'
                    : 'text-slate-700 hover:text-aqua-600 hover:bg-slate-50'
                }`}
              >
                <Droplets className="w-3.5 h-3.5 mr-1 text-aqua-600 shrink-0" />
                <span className="whitespace-nowrap">Applications</span>
              </Link>

              {/* Services & Fittings */}
              <Link
                to="/services"
                className={`whitespace-nowrap flex items-center px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                  isActive('/services')
                    ? 'text-aqua-600 bg-aqua-50/90 font-bold'
                    : 'text-slate-700 hover:text-aqua-600 hover:bg-slate-50'
                }`}
              >
                <Wrench className="w-3.5 h-3.5 mr-1 text-aqua-600 shrink-0" />
                <span className="whitespace-nowrap">Services</span>
              </Link>

              {/* Catalogues */}
              <Link
                to="/catalogue"
                className={`whitespace-nowrap flex items-center px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                  isActive('/catalogue')
                    ? 'text-aqua-600 bg-aqua-50/90 font-bold'
                    : 'text-slate-700 hover:text-aqua-600 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 mr-1 text-aqua-600 shrink-0" />
                <span className="whitespace-nowrap">Catalogues</span>
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact-us"
                className={`whitespace-nowrap flex items-center px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                  isActive('/contact-us')
                    ? 'text-aqua-600 bg-aqua-50/90 font-bold'
                    : 'text-slate-700 hover:text-aqua-600 hover:bg-slate-50'
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5 mr-1 text-aqua-600 shrink-0" />
                <span className="whitespace-nowrap">Contact Us</span>
              </Link>
            </nav>

            {/* Right Action Buttons - Perfectly Sized to Avoid Overflow */}
            <div className="hidden lg:flex items-center space-x-2 shrink-0">
              <button
                onClick={() => onOpenCatalogue()}
                className="hidden xl:inline-flex items-center text-xs font-semibold px-3 py-2 text-slate-700 hover:text-navy-950 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded-xl transition-all cursor-pointer shadow-xs whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 mr-1 text-aqua-600" />
                <span>PDF Catalogue</span>
              </button>
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center text-xs xl:text-sm font-extrabold px-3.5 xl:px-4 py-2 bg-gradient-to-r from-aqua-500 via-teal-400 to-[#E8B84A] hover:brightness-110 text-navy-950 rounded-xl transition-all shadow-md hover:shadow-aqua-500/30 hover:scale-[1.02] cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-navy-950" />
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => onOpenEnquiry()}
                className="text-xs font-bold px-3 py-1.5 bg-aqua-500 text-navy-950 rounded-lg shadow-sm cursor-pointer"
              >
                Quote
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-aqua-600 focus:outline-none rounded-lg hover:bg-slate-100"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* =========================================================================
              EXPANSIVE MEGA MENU DROPDOWN (Anchored within Container Bounds)
              Uses left-0 right-0 max-w-6xl mx-auto so it NEVER shoots right or gets cut off!
              ========================================================================= */}
          {isMegaMenuOpen && (
            <div
              className="absolute top-full left-0 right-0 max-w-6xl mx-auto z-50 pt-2 animate-fadeIn"
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              <div className="bg-white border border-slate-200/90 rounded-2xl shadow-2xl p-6 xl:p-8 text-slate-800 backdrop-blur-xl mx-2 sm:mx-0">
                {/* Top Capability Highlights Bar */}
                <div className="bg-slate-50 rounded-xl p-3 mb-5 border border-slate-200/70 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-6">
                    <span className="inline-flex items-center text-emerald-700 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                      IP68 Submersible Luminaires
                    </span>
                    <span className="inline-flex items-center text-blue-700 font-bold">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                      SS 304 & SS 316 Marine Grade
                    </span>
                    <span className="inline-flex items-center text-amber-700 font-bold">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                      12V Safe Voltage Operation
                    </span>
                  </div>
                  <span className="text-slate-500 font-medium hidden sm:block">
                    Custom Submersible Poly Cab Cables Engineered on Request
                  </span>
                </div>

                {/* 4 Balanced Mega Menu Columns */}
                <div className="grid grid-cols-4 gap-5 xl:gap-6">
                  {/* Col 1: Pool Lighting */}
                  <div className="p-4 rounded-xl bg-slate-50/70 hover:bg-slate-100/90 border border-slate-200/80 border-t-4 border-t-aqua-500 flex flex-col justify-between transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Link
                          to="/pool-lighting"
                          className="text-base font-bold text-navy-900 hover:text-aqua-600 flex items-center transition-colors"
                        >
                          Pool Lighting
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Link>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        Certified underwater illumination for concrete, tiled, and commercial pools.
                      </p>
                      <div className="space-y-1.5 mb-4">
                        {CATEGORIES[0].subCategories.map((sub, idx) => (
                          <Link
                            key={idx}
                            to={`/products?category=pool-lighting&subCategory=${encodeURIComponent(sub)}`}
                            className="text-xs text-slate-600 hover:text-aqua-600 transition-colors flex items-center group/sub"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-aqua-500 mr-2 group-hover/sub:scale-125 transition-transform"></span>
                            <span className="font-medium whitespace-nowrap">{sub}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 border-t border-slate-200/80 pt-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Featured Models
                      </span>
                      {PRODUCTS.filter((p) => p.category === 'pool-lighting').slice(0, 2).map((p) => (
                        <Link
                          key={p.id}
                          to={`/products/${p.slug}`}
                          className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-slate-200/60 hover:border-aqua-500 text-xs text-slate-700 shadow-xs"
                        >
                          <div className="flex items-center space-x-2 truncate">
                            <img src={p.image} alt={p.name} className="w-8 h-8 rounded bg-white p-0.5 object-contain" />
                            <span className="font-bold text-navy-900 text-xs truncate">{p.code}</span>
                          </div>
                          <span className="text-[10px] font-semibold text-aqua-700 bg-aqua-50 px-1.5 py-0.5 rounded shrink-0">
                            {p.specifications['Available Wattages']?.split(',')[0]}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 2: Fountain Lighting */}
                  <div className="p-4 rounded-xl bg-slate-50/70 hover:bg-slate-100/90 border border-slate-200/80 border-t-4 border-t-amber-500 flex flex-col justify-between transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Link
                          to="/fountain-lighting"
                          className="text-base font-bold text-navy-900 hover:text-aqua-600 flex items-center transition-colors"
                        >
                          Fountain Lighting
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Link>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        Nozzle center-hole and high-power spot luminaires for dynamic water streams.
                      </p>
                      <div className="space-y-1.5 mb-4">
                        {CATEGORIES[1].subCategories.map((sub, idx) => (
                          <Link
                            key={idx}
                            to={`/products?category=fountain-lighting&subCategory=${encodeURIComponent(sub)}`}
                            className="text-xs text-slate-600 hover:text-aqua-600 transition-colors flex items-center group/sub"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2 group-hover/sub:scale-125 transition-transform"></span>
                            <span className="font-medium whitespace-nowrap">{sub}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 border-t border-slate-200/80 pt-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Featured Models
                      </span>
                      {PRODUCTS.filter((p) => p.category === 'fountain-lighting').slice(0, 2).map((p) => (
                        <Link
                          key={p.id}
                          to={`/products/${p.slug}`}
                          className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-slate-200/60 hover:border-amber-500 text-xs text-slate-700 shadow-xs"
                        >
                          <div className="flex items-center space-x-2 truncate">
                            <img src={p.image} alt={p.name} className="w-8 h-8 rounded bg-white p-0.5 object-contain" />
                            <span className="font-bold text-navy-900 text-xs truncate">{p.code}</span>
                          </div>
                          <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded shrink-0">
                            {p.specifications['Available Wattages']?.split(',')[0]}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 3: Water Feature & Wall Washers */}
                  <div className="p-4 rounded-xl bg-slate-50/70 hover:bg-slate-100/90 border border-slate-200/80 border-t-4 border-t-blue-500 flex flex-col justify-between transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Link
                          to="/water-feature-lighting"
                          className="text-base font-bold text-navy-900 hover:text-aqua-600 flex items-center transition-colors"
                        >
                          Water Feature & Washers
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Link>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        Architectural linear grazers, spillways, cascading nozzles & accessories.
                      </p>
                      <div className="space-y-1.5 mb-4">
                        {CATEGORIES[2].subCategories.map((sub, idx) => (
                          <Link
                            key={idx}
                            to={`/products?category=water-feature-lighting&subCategory=${encodeURIComponent(sub)}`}
                            className="text-xs text-slate-600 hover:text-aqua-600 transition-colors flex items-center group/sub"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 group-hover/sub:scale-125 transition-transform"></span>
                            <span className="font-medium whitespace-nowrap">{sub}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 border-t border-slate-200/80 pt-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Featured Models
                      </span>
                      {PRODUCTS.filter((p) => p.category === 'water-feature-lighting').slice(0, 2).map((p) => (
                        <Link
                          key={p.id}
                          to={`/products/${p.slug}`}
                          className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-slate-200/60 hover:border-blue-500 text-xs text-slate-700 shadow-xs"
                        >
                          <div className="flex items-center space-x-2 truncate">
                            <img src={p.image} alt={p.name} className="w-8 h-8 rounded bg-white p-0.5 object-contain" />
                            <span className="font-bold text-navy-900 text-xs truncate">{p.code}</span>
                          </div>
                          <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded shrink-0">
                            {p.specifications['Available Wattages']?.split(',')[0] || 'IP65'}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 4: Direct Factory Engineering Hub */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#062B4C] to-[#031525] text-white flex flex-col justify-between shadow-md">
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-aqua-400 bg-white/10 px-2.5 py-1 rounded-md inline-block">
                        Direct Manufacturer
                      </span>
                      <h4 className="text-base font-serif font-bold text-white">
                        Custom Fitting & Wiring
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-light">
                        Custom cable lengths, niche adaptors, transformer balancing, and photometric simulations for MEP contractors.
                      </p>
                      <div className="space-y-2 text-xs text-slate-200 pt-1">
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-aqua-400 shrink-0" />
                          <span>2-Year Factory Warranty</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-aqua-400 shrink-0" />
                          <span>SS 304 & SS 316 Options</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/15">
                      <button
                        onClick={() => onOpenEnquiry('Mega Menu Custom Consultation')}
                        className="w-full py-2 bg-aqua-500 hover:bg-aqua-400 text-navy-950 font-bold text-xs rounded-lg transition-colors cursor-pointer text-center block"
                      >
                        Consult an Engineer
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mega Menu Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">
                    ISO 9001:2015 Certified Manufacturing • All luminaires 100% pressure tested in Vasai-Virar
                  </span>
                  <div className="flex items-center space-x-3">
                    <Link
                      to="/products"
                      className="bg-navy-900 hover:bg-[#072642] text-white px-4 py-2 rounded-xl font-bold flex items-center transition-colors shadow-xs"
                    >
                      Explore All 28+ Products <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                    <button
                      onClick={() => onOpenCatalogue()}
                      className="bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 px-4 py-2 rounded-xl font-bold flex items-center transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 mr-1.5 text-amber-700" />
                      Download Catalogues (PDF)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            <Link
              to="/"
              className="flex items-center py-2.5 px-3 text-sm font-semibold text-slate-800 hover:text-aqua-600 rounded-lg hover:bg-slate-50"
            >
              <Home className="w-4 h-4 mr-2.5 text-aqua-600" />
              <span>Home</span>
            </Link>

            <Link
              to="/about-us"
              className="flex items-center py-2.5 px-3 text-sm font-semibold text-slate-800 hover:text-aqua-600 rounded-lg hover:bg-slate-50"
            >
              <Info className="w-4 h-4 mr-2.5 text-aqua-600" />
              <span>About Us</span>
            </Link>

            {/* Mobile Products Accordion */}
            <div>
              <button
                onClick={() => setMobileAccordion(mobileAccordion === 'products' ? null : 'products')}
                className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-semibold text-slate-800 hover:text-aqua-600 rounded-lg hover:bg-slate-50"
              >
                <div className="flex items-center">
                  <Layers className="w-4 h-4 mr-2.5 text-aqua-600" />
                  <span>Products</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'products' ? 'rotate-180' : ''}`} />
              </button>

              {mobileAccordion === 'products' && (
                <div className="pl-6 pr-2 py-2 space-y-3 bg-slate-50 rounded-lg mt-1 border border-slate-100">
                  <Link
                    to="/products"
                    className="block text-xs font-bold text-aqua-700 hover:underline"
                  >
                    View All Products →
                  </Link>
                  {CATEGORIES.map((cat) => (
                    <div key={cat.id} className="space-y-1">
                      <Link
                        to={`/${cat.slug}`}
                        className="block text-xs font-bold text-navy-900"
                      >
                        {cat.name}
                      </Link>
                      <div className="pl-2 space-y-1">
                        {cat.subCategories.slice(0, 3).map((sub, idx) => (
                          <Link
                            key={idx}
                            to={`/products?category=${cat.id}&subCategory=${encodeURIComponent(sub)}`}
                            className="block text-[11px] text-slate-600 hover:text-aqua-600"
                          >
                            • {sub}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/applications"
              className="flex items-center py-2.5 px-3 text-sm font-semibold text-slate-800 hover:text-aqua-600 rounded-lg hover:bg-slate-50"
            >
              <Droplets className="w-4 h-4 mr-2.5 text-aqua-600" />
              <span>Applications</span>
            </Link>

            <Link
              to="/services"
              className="flex items-center py-2.5 px-3 text-sm font-semibold text-slate-800 hover:text-aqua-600 rounded-lg hover:bg-slate-50"
            >
              <Wrench className="w-4 h-4 mr-2.5 text-aqua-600" />
              <span>Services</span>
            </Link>

            <Link
              to="/catalogue"
              className="flex items-center py-2.5 px-3 text-sm font-semibold text-slate-800 hover:text-aqua-600 rounded-lg hover:bg-slate-50"
            >
              <BookOpen className="w-4 h-4 mr-2.5 text-aqua-600" />
              <span>Catalogues</span>
            </Link>

            <Link
              to="/contact-us"
              className="flex items-center py-2.5 px-3 text-sm font-semibold text-slate-800 hover:text-aqua-600 rounded-lg hover:bg-slate-50"
            >
              <PhoneCall className="w-4 h-4 mr-2.5 text-aqua-600" />
              <span>Contact Us</span>
            </Link>

            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCatalogue();
                }}
                className="py-2.5 px-3 text-center text-xs font-semibold bg-slate-100 text-slate-700 rounded-lg border border-slate-200"
              >
                Download PDF
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="py-2.5 px-3 text-center text-xs font-bold bg-aqua-500 text-navy-950 rounded-lg shadow-sm"
              >
                Request Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
