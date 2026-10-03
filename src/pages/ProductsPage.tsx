import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Download,
  ArrowRight,
  X,
  Home,
  ChevronRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  Droplets,
  Award
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/siteData';

interface ProductsPageProps {
  onOpenEnquiry: (productName?: string) => void;
  onOpenCatalogue: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenEnquiry, onOpenCatalogue }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');

  // Available subcategories based on category
  const availableSubCategories = useMemo(() => {
    if (selectedCategory === 'all') {
      const set = new Set<string>();
      PRODUCTS.forEach((p) => set.add(p.subCategory));
      return Array.from(set);
    }
    const targetCat = CATEGORIES.find((c) => c.id === selectedCategory);
    return targetCat ? targetCat.subCategories : [];
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.specifications['Body Material'] && p.specifications['Body Material'].toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || p.category === selectedCategory;

      const matchesSubCategory =
        selectedSubCategory === 'all' || p.subCategory === selectedSubCategory;

      return matchesSearch && matchesCategory && matchesSubCategory;
    });
  }, [searchQuery, selectedCategory, selectedSubCategory]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSubCategory('all');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Full-Width Edge-to-Edge Hero Banner */}
      <div className="w-full relative py-16 sm:py-24 bg-[#031525] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/assets/hero/huma-hero-luxury-pool-waterfall.webp"
            alt="HUMA Underwater Lighting Catalogue"
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
            <span className="text-aqua-300 font-semibold">Products Portfolio</span>
          </nav>

          {/* Badge & Title */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-aqua-400 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/15">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>OFFICIAL 2024 PRODUCT CATALOGUE • 28+ CERTIFIED MODELS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Swimming Pool & Fountain Lighting Solutions
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              Explore our comprehensive range of IP68 underwater luminaires, surface stainless steel pool lights, ABS colorway models, nozzle center-hole lights, and architectural waterfall fittings. Direct factory manufacturing with customizable cable lengths.
            </p>
          </div>

          {/* Multi-Colour Feature Highlights Strip */}
          <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-4 text-xs font-semibold">
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-aqua-300">
              <Droplets className="w-3.5 h-3.5 mr-1.5 text-aqua-400" />
              IP68 Certified Underwater
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-blue-300">
              <Layers className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              Marine SS 304 & SS 316
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-amber-300">
              <Zap className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              Safe 12V AC/DC Low-Voltage
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              2-Year Factory Warranty
            </span>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap gap-3">
            <button
              onClick={onOpenCatalogue}
              className="inline-flex items-center text-xs sm:text-sm font-bold px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-navy-950 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Catalogues (PDF)
            </button>
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center text-xs sm:text-sm font-bold px-5 py-2.5 bg-aqua-500 hover:bg-aqua-400 text-navy-950 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by code (e.g. HF04, HF012, HF042) or material..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm sm:text-base text-slate-900 focus:bg-white focus:border-aqua-500 focus:ring-1 focus:ring-aqua-500 outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results count & reset */}
            <div className="flex items-center justify-between md:justify-end space-x-3 text-sm">
              <span className="text-slate-600 font-medium">
                Showing <strong className="text-navy-900 font-bold">{filteredProducts.length}</strong> of {PRODUCTS.length} certified models
              </span>
              {(searchQuery || selectedCategory !== 'all' || selectedSubCategory !== 'all') && (
                <button
                  onClick={resetFilters}
                  className="text-aqua-600 hover:text-aqua-800 font-bold underline cursor-pointer text-xs sm:text-sm"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs with Multi-Color Signatures */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubCategory('all');
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#062B4C] text-[#E8B84A] ring-2 ring-[#E8B84A] shadow-md shadow-[#E8B84A]/15'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Products ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              let activeTheme = 'bg-[#062B4C] text-[#08B8C2] ring-2 ring-[#08B8C2] shadow-md shadow-[#08B8C2]/15';
              if (cat.id === 'fountain-lighting') {
                activeTheme = 'bg-[#062B4C] text-sky-400 ring-2 ring-sky-400 shadow-md shadow-sky-400/15';
              } else if (cat.id === 'water-feature-lighting') {
                activeTheme = 'bg-[#062B4C] text-emerald-400 ring-2 ring-emerald-400 shadow-md shadow-emerald-400/15';
              }

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedSubCategory('all');
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? activeTheme
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.name} ({PRODUCTS.filter((p) => p.category === cat.id).length})
                </button>
              );
            })}
          </div>

          {/* Subcategory Pills */}
          {availableSubCategories.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100/70">
              <span className="text-xs font-bold text-slate-500 mr-1 flex items-center">
                <Filter className="w-3.5 h-3.5 mr-1 text-[#08B8C2]" /> Sub-categories:
              </span>
              <button
                onClick={() => setSelectedSubCategory('all')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedSubCategory === 'all'
                    ? 'bg-[#062B4C] text-[#08B8C2] font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Subcategories
              </button>
              {availableSubCategories.map((sub, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    selectedSubCategory === sub
                      ? 'bg-[#062B4C] text-[#08B8C2] font-bold shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4 my-8">
            <h3 className="text-xl font-bold text-slate-800">No Matching Lighting Products Found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn&apos;t find any catalogue product matching your search criteria. Try adjusting your query or view the complete catalogue.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-navy-900 text-white text-sm font-bold rounded-xl hover:bg-navy-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={onOpenEnquiry}
              />
            ))}
          </div>
        )}

        {/* Bottom Technical Support Banner */}
        <div className="bg-gradient-to-r from-[#062B4C] to-[#041B30] text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center text-xs font-bold text-amber-400 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 mr-1" />
              Direct Engineering Assistance
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Need Complete Technical Cut Sheets & CAD Profiles?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Download the official HUMA 2024 Product Catalogues containing full dimensional line drawings, mounting cutouts, LED chip binning, and submersible wire specifications.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenCatalogue}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-navy-950 text-sm font-bold rounded-xl shadow-md transition-colors flex items-center cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Full Catalogues
            </button>
            <button
              onClick={() => onOpenEnquiry()}
              className="px-5 py-2.5 bg-aqua-500 hover:bg-aqua-400 text-navy-950 text-sm font-bold rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
