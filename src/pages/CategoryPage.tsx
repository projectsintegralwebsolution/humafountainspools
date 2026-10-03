import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Download,
  Send,
  ArrowRight,
  ShieldCheck,
  Droplets,
  Sparkles,
  Layers,
  Home,
  ChevronRight,
  Award,
  Zap,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/siteData';

interface CategoryPageProps {
  onOpenEnquiry: (productName?: string) => void;
  onOpenCatalogue: () => void;
  categorySlug?: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  onOpenEnquiry,
  onOpenCatalogue,
  categorySlug,
}) => {
  const location = useLocation();
  const currentSlug = categorySlug || location.pathname.replace('/', '');

  const category = CATEGORIES.find((c) => c.slug === currentSlug) || CATEGORIES[0];
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');

  const categoryProducts = PRODUCTS.filter((p) => {
    const matchesCategory = p.category === category.id;
    const matchesSub = selectedSubCategory === 'all' || p.subCategory === selectedSubCategory;
    return matchesCategory && matchesSub;
  });

  const getCategoryIcon = () => {
    switch (category.id) {
      case 'pool-lighting':
        return Droplets;
      case 'fountain-lighting':
        return Sparkles;
      default:
        return Layers;
    }
  };

  const Icon = getCategoryIcon();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Full-Width Edge-to-Edge Hero Banner */}
      <div className="w-full relative py-16 sm:py-24 bg-[#031525] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-30">
          <img
            src={category.image}
            alt={`${category.name} Solutions by HUMA`}
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
            <Link to="/products" className="hover:text-aqua-400 transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-aqua-300 font-semibold">{category.name}</span>
          </nav>

          {/* Badge & Title */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-aqua-400 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/15">
              <Icon className="w-3.5 h-3.5 text-aqua-400" />
              <span>{category.tagline}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              {category.name} Solutions
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              {category.description}
            </p>
          </div>

          {/* Feature Highlights Strip */}
          <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-4 text-xs font-semibold">
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              100% Submersion Pressure Tested
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-blue-300">
              <Layers className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              SS 304 & SS 316 Marine Alloys
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-amber-300">
              <Award className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              2-Year Manufacturer Warranty
            </span>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenEnquiry(`${category.name} Requirement`)}
              className="inline-flex items-center text-xs sm:text-sm font-bold px-5 py-2.5 bg-aqua-500 hover:bg-aqua-400 text-navy-950 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4 mr-2" />
              Request {category.name} Quote
            </button>
            <button
              onClick={onOpenCatalogue}
              className="inline-flex items-center text-xs sm:text-sm font-bold px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-navy-950 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Catalogue (PDF)
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        {/* Subcategories Filter Bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 mr-2 flex items-center uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 mr-1 text-aqua-600" /> Filter:
            </span>
            <button
              onClick={() => setSelectedSubCategory('all')}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                selectedSubCategory === 'all'
                  ? 'bg-navy-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Models
            </button>
            {category.subCategories.map((sub, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSubCategory(sub)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  selectedSubCategory === sub
                    ? 'bg-aqua-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <span className="text-xs sm:text-sm text-slate-600 font-medium">
            Showing <strong className="text-navy-900 font-bold">{categoryProducts.length}</strong> catalogue models
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEnquire={onOpenEnquiry}
            />
          ))}
        </div>

        {/* Technical Guidance Box - Multi-Colour Cards */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900">
              Technical Engineering Standards for {category.name}
            </h3>
            <span className="text-xs font-bold text-aqua-700 bg-aqua-50 px-3 py-1 rounded-full border border-aqua-200">
              HUMA Quality Guarantee
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>1. Pressure Rating & Ingress (IP68)</span>
              </div>
              <p className="leading-relaxed text-slate-700">
                All models are factory hermetically sealed to IP68 standards, capable of continuous underwater depth operation with specialized silicone ring seals.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2">
              <div className="flex items-center space-x-2 text-amber-800 font-bold text-sm">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>2. Low Voltage Safety Compliance</span>
              </div>
              <p className="leading-relaxed text-slate-700">
                Complies with international aquatic safety codes, operating strictly on 12V DC / 12V AC low-voltage step-down supplies to guarantee swimmer security.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
              <div className="flex items-center space-x-2 text-blue-800 font-bold text-sm">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>3. Precision Fitting & Submersible Wiring</span>
              </div>
              <p className="leading-relaxed text-slate-700">
                We supply matching niche housings, surface clamping rings, threaded flanges, and Poly Cab marine grade cables tailored to your site specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
