import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Send,
  ShieldCheck,
  Zap,
  Layers,
  Droplets,
  Sparkles,
  Waves
} from 'lucide-react';
import type { Product } from '../types';

interface HomepageProductCardProps {
  product: Product;
  onEnquire: (productName: string) => void;
}

export const HomepageProductCard: React.FC<HomepageProductCardProps> = ({ product, onEnquire }) => {
  // Category-specific multicolour styling & icons
  const getCategoryBadge = () => {
    switch (product.category) {
      case 'pool-lighting':
        return {
          icon: Waves,
          label: 'Pool Lighting',
          badgeClass: 'text-[#08B8C2] bg-[#DDF7F8] border-[#08B8C2]/40',
        };
      case 'fountain-lighting':
        return {
          icon: Sparkles,
          label: 'Fountain Lighting',
          badgeClass: 'text-[#2563EB] bg-blue-50 border-blue-200',
        };
      case 'water-feature-lighting':
        return {
          icon: Layers,
          label: 'Water Feature',
          badgeClass: 'text-[#B8871E] bg-[#E8B84A]/15 border-[#E8B84A]/40',
        };
      default:
        return {
          icon: Droplets,
          label: product.categoryName || 'Lighting',
          badgeClass: 'text-[#08B8C2] bg-[#DDF7F8] border-[#08B8C2]/40',
        };
    }
  };

  const categoryMeta = getCategoryBadge();
  const CategoryIcon = categoryMeta.icon;

  // Wattage summary helper
  const wattageDisplay = product.specifications['Available Wattages']
    ? product.specifications['Available Wattages'].split(',').slice(0, 2).join(',')
    : 'Multi-Watt';

  // Body material summary helper
  const materialDisplay = product.specifications['Body Material']
    ? product.specifications['Body Material'].split('/')[0].trim()
    : 'SS 304/316';

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#08B8C2]/60 shadow-sm hover:shadow-2xl hover:shadow-[#062B4C]/12 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden relative">
      {/* Decorative top lighting glow line with multi-colour gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#08B8C2]/50 to-transparent group-hover:via-[#08B8C2] transition-colors" />

      {/* Top Product Image Container - Pure Crisp White Background */}
      <div className="relative pt-12 px-6 pb-3 bg-white flex items-center justify-center overflow-hidden border-b border-slate-100">
        {/* Product Code Badge - Brought to the front with z-20 */}
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-[#062B4C] text-[#08B8C2] shadow-sm border border-[#08B8C2]/30 tracking-wide">
            {product.code}
          </span>
        </div>

        {/* Category Identity Badge - Brought to the front with z-20 */}
        <div className="absolute top-3 right-3 z-20 pointer-events-none">
          <span className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-xs border ${categoryMeta.badgeClass}`}>
            <CategoryIcon className="w-3.5 h-3.5" />
            <span>{categoryMeta.label}</span>
          </span>
        </div>

        {/* Product Image on Pure White Background - Cleanly layered with z-0 */}
        <Link
          to={`/products/${product.slug}`}
          className="block w-full text-center relative z-0 focus:outline-none"
        >
          <div className="w-full aspect-square max-w-[210px] mx-auto flex items-center justify-center p-2 transition-transform duration-500 group-hover:scale-105">
            <img
              src={product.image}
              alt={`${product.name} manufactured by HUMA Fountains & Pools`}
              loading="lazy"
              width="400"
              height="400"
              className="max-h-full max-w-full object-contain filter drop-shadow-[0_6px_12px_rgba(6,43,76,0.08)] transition-all"
            />
          </div>
        </Link>
      </div>

      {/* Layered Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div>
          {/* Subcategory & Protection Class */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {product.subCategory}
            </span>
            <span className="text-xs font-bold text-[#08B8C2] bg-[#DDF7F8] px-2.5 py-0.5 rounded-full border border-[#08B8C2]/30">
              {product.specifications['Protection Class']?.includes('IP68')
                ? 'IP68 Submersible'
                : (product.specifications['Protection Class'] || 'IP68 Submersible')}
            </span>
          </div>

          {/* Product Title - Slightly Larger & Bold */}
          <Link
            to={`/products/${product.slug}`}
            className="block group-hover:text-[#08B8C2] transition-colors focus:outline-none"
          >
            <h3 className="text-lg sm:text-[19px] font-bold text-[#062B4C] leading-snug line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* Short Description - Larger text for better readability */}
          <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Compact Specification Chips - Multi-colour Accents */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
            {/* Power / Wattage Chip with Amber/Gold Accent */}
            <div className="flex items-center text-[#062B4C] bg-amber-50/60 px-2.5 py-2 rounded-lg border border-amber-200/60 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#E8B84A] mr-1.5 shrink-0" />
              <span className="truncate font-semibold text-slate-800">{wattageDisplay}</span>
            </div>

            {/* Material Chip with Royal Blue Accent */}
            <div className="flex items-center text-[#062B4C] bg-blue-50/60 px-2.5 py-2 rounded-lg border border-blue-200/60 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-[#2563EB] mr-1.5 shrink-0" />
              <span className="truncate font-semibold text-slate-800">{materialDisplay}</span>
            </div>

            {/* Ingress Protection Chip with Aqua Accent */}
            <div className="flex items-center text-[#062B4C] bg-cyan-50/60 px-2.5 py-2 rounded-lg border border-cyan-200/60 shadow-xs">
              <Droplets className="w-3.5 h-3.5 text-[#08B8C2] mr-1.5 shrink-0" />
              <span className="truncate font-semibold text-slate-800">100% Submersible</span>
            </div>

            {/* Warranty Chip with Emerald Green Accent */}
            <div className="flex items-center text-[#062B4C] bg-emerald-50/60 px-2.5 py-2 rounded-lg border border-emerald-200/60 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
              <span className="truncate font-semibold text-slate-800">
                {product.specifications['Warranty'] || '2-Year Warranty'}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons: 1-line guaranteed with whitespace-nowrap */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            to={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center py-2.5 px-2 border border-slate-200 hover:border-[#08B8C2] text-[#062B4C] hover:text-[#08B8C2] text-xs font-semibold rounded-xl bg-white hover:bg-slate-50 transition-colors text-center whitespace-nowrap"
          >
            <span className="whitespace-nowrap">View Details</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 text-slate-400 group-hover:text-[#08B8C2] shrink-0" />
          </Link>

          <button
            onClick={() => onEnquire(product.name)}
            className="flex-1 inline-flex items-center justify-center py-2.5 px-2 bg-[#062B4C] hover:bg-[#082E4F] text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer group/btn whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5 mr-1.5 text-[#08B8C2] transition-transform group-hover/btn:translate-x-0.5 shrink-0" />
            <span className="whitespace-nowrap">Enquire Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
