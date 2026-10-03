import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ShieldCheck,
  Zap,
  Layers,
  ChevronRight,
  Download,
  Send,
  CheckCircle2,
  Wrench,
  Droplets,
  Share2,
  Check,
  Home,
  Sparkles,
  Phone,
  Award
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES, COMPANY } from '../data/siteData';

interface ProductDetailPageProps {
  onOpenEnquiry: (productName?: string) => void;
  onOpenCatalogue: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  onOpenEnquiry,
  onOpenCatalogue,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState<string>(product ? product.image : '');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const category = CATEGORIES.find((c) => c.id === product.category);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Full-Width Edge-to-Edge Product Header Banner */}
      <div className="w-full bg-[#031525] text-white py-8 sm:py-12 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/assets/hero/huma-hero-luxury-pool-waterfall.webp"
            alt="HUMA Pool Lighting Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#031525] via-[#062B4C]/80 to-[#031525]/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center space-x-2 text-xs sm:text-sm text-slate-300">
            <Link to="/" className="hover:text-aqua-400 flex items-center transition-colors">
              <Home className="w-3.5 h-3.5 mr-1 text-aqua-400" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link to="/products" className="hover:text-aqua-400 transition-colors">
              Products
            </Link>
            {category && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                <Link to={`/${category.slug}`} className="hover:text-aqua-400 transition-colors">
                  {category.name}
                </Link>
              </>
            )}
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-aqua-300 font-semibold truncate max-w-[240px] sm:max-w-none">
              {product.code} - {product.name}
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-xs text-aqua-400 font-bold">
                <span className="bg-white/10 px-2.5 py-0.5 rounded border border-white/15">
                  {product.code}
                </span>
                <span>•</span>
                <span className="text-slate-300">{product.subCategory}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => onOpenEnquiry(product.name)}
                className="px-5 py-2.5 bg-aqua-500 hover:bg-aqua-400 text-navy-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center"
              >
                <Send className="w-3.5 h-3.5 mr-1.5" />
                <span>Enquire Now</span>
              </button>
              <button
                onClick={onOpenCatalogue}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all border border-white/20 cursor-pointer flex items-center"
              >
                <Download className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                <span>Catalogue PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        {/* Main Product Showcase Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Image Gallery */}
            <div className="lg:col-span-5 space-y-4">
              <div className="aspect-square bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-center relative overflow-hidden group shadow-xs">
                <span className="absolute top-4 left-4 z-20 pointer-events-none bg-[#062B4C] text-aqua-400 text-xs font-bold px-3 py-1 rounded-lg shadow-sm border border-white/10 flex items-center">
                  <Sparkles className="w-3 h-3 mr-1 text-aqua-400" />
                  {product.code}
                </span>
                <img
                  src={activeImage || product.image}
                  alt={`${product.name} manufactured by HUMA Fountains & Pools`}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  width="600"
                  height="600"
                />
              </div>

              {/* Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex flex-wrap gap-2.5">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-16 rounded-xl border-2 p-1 bg-white overflow-hidden transition-all cursor-pointer ${
                        (activeImage || product.image) === img
                          ? 'border-aqua-500 shadow-sm scale-105'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Share & Download actions */}
              <div className="pt-2 flex items-center justify-between text-xs sm:text-sm text-slate-500 border-t border-slate-100">
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-1.5 hover:text-navy-900 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share Product'}</span>
                </button>
                <span className="text-slate-300">•</span>
                <button
                  onClick={onOpenCatalogue}
                  className="flex items-center space-x-1.5 text-aqua-700 hover:text-aqua-800 font-bold cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Catalogue PDF</span>
                </button>
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-xs font-bold mb-2">
                  <span className="text-aqua-700 bg-aqua-50 border border-aqua-200 px-3 py-1 rounded-md">
                    {product.subCategory}
                  </span>
                  <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                    {product.specifications['Protection Class'] || 'IP68 Submersible'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 leading-tight">
                  {product.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-mono">
                  Official Catalogue Code: <strong className="text-navy-900">{product.code}</strong>
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Key Highlights Grid - Multi-Colour */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm">
                {product.specifications['Protection Class'] && (
                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                    <span className="text-[10px] uppercase font-bold text-emerald-800 block">Water Ingress</span>
                    <span className="font-bold text-emerald-950 text-sm">{product.specifications['Protection Class']}</span>
                  </div>
                )}
                {product.specifications['Warranty'] && (
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                    <span className="text-[10px] uppercase font-bold text-amber-800 block">Factory Warranty</span>
                    <span className="font-bold text-amber-950 text-sm">{product.specifications['Warranty']}</span>
                  </div>
                )}
                {product.specifications['LED Chip'] && (
                  <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                    <span className="text-[10px] uppercase font-bold text-blue-800 block">LED Engine</span>
                    <span className="font-bold text-blue-950 text-sm truncate block">{product.specifications['LED Chip']}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenEnquiry(product.name)}
                  className="flex-1 min-w-[200px] py-4 px-6 bg-gradient-to-r from-aqua-500 to-aqua-600 hover:from-aqua-400 hover:to-aqua-500 text-navy-950 font-bold rounded-xl transition-all shadow-md hover:shadow-aqua-500/25 flex items-center justify-center space-x-2 text-sm cursor-pointer whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  <span>Enquire For This Product</span>
                </button>
                <button
                  onClick={onOpenCatalogue}
                  className="py-4 px-6 border border-slate-300 hover:border-navy-900 text-navy-900 font-bold rounded-xl transition-all flex items-center justify-center space-x-2 text-sm cursor-pointer bg-white"
                >
                  <Download className="w-4 h-4 text-aqua-600" />
                  <span>Download Catalogue</span>
                </button>
              </div>

              {/* Direct Call / Contact notice */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-600 font-medium">
                  Need rapid dimensions or installation guidance?
                </span>
                <a
                  href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, '')}`}
                  className="font-bold text-navy-900 hover:text-aqua-600 transition-colors flex items-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-1 text-aqua-600" />
                  <span>Call {COMPANY.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications & Variants Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Detailed Specifications Table */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-4">
              <Layers className="w-5 h-5 text-aqua-600" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900">
                Technical Specifications
              </h2>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-semibold text-slate-500 sm:w-5/12">{key}</span>
                  <span className="text-navy-900 sm:w-7/12 font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Model Variants Table (if available) */}
            {product.variants && product.variants.length > 0 && (
              <div className="pt-6 border-t border-slate-200 space-y-3">
                <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider">
                  Available Catalogue Variants
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-100 text-slate-800 font-bold">
                      <tr>
                        <th className="py-3 px-3.5">Model Code</th>
                        <th className="py-3 px-3.5">Dimensions / Spec</th>
                        <th className="py-3 px-3.5">Available Wattage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {product.variants.map((v, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="py-3 px-3.5 font-bold text-navy-900">{v.code}</td>
                          <td className="py-3 px-3.5 text-slate-700">{v.dimension}</td>
                          <td className="py-3 px-3.5 text-aqua-700 font-bold">{v.wattage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Features, Applications & Fitting Guidance */}
          <div className="lg:col-span-5 space-y-6">
            {/* Features */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900">
                Key Product Features
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-aqua-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900">
                Recommended Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm bg-slate-50 text-slate-800 font-semibold px-3 py-1.5 rounded-xl border border-slate-200"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Fitting & Installation Note */}
            <div className="bg-[#062B4C] text-white rounded-3xl p-6 sm:p-8 space-y-3 border border-white/10 shadow-lg">
              <div className="flex items-center space-x-2 text-aqua-400">
                <Wrench className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Installation & Safety Notice</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                All underwater pool and fountain fixtures operate on safe low-voltage supplies (12V DC / 12V AC). Installation must include appropriate step-down transformers, waterproof junction boxes, and Poly Cab marine submersible cables. HUMA provides factory fitting brackets and technical guidance for every order.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Showcase */}
        {relatedProducts.length > 0 && (
          <div className="pt-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-aqua-600">Similar Solutions</span>
                <h3 className="text-2xl font-serif font-bold text-navy-900">
                  Related Catalogue Lighting
                </h3>
              </div>
              <Link
                to="/products"
                className="text-xs sm:text-sm font-bold text-navy-900 hover:text-aqua-600 transition-colors flex items-center"
              >
                <span>View All Products</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  onEnquire={onOpenEnquiry}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
