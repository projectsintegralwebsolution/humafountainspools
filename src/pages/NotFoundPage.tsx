import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-aqua-50 text-aqua-600 flex items-center justify-center mx-auto">
          <Droplets className="w-8 h-8" />
        </div>
        <span className="text-4xl font-serif font-black text-navy-900 block">404</span>
        <h1 className="text-xl font-bold text-navy-900">
          Page Not Found
        </h1>
        <p className="text-xs text-slate-500 leading-relaxed">
          The page or product category you are looking for may have moved or is not in the catalogue. Explore our official lighting solutions below.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-5 py-2.5 bg-navy-900 hover:bg-[#072642] text-white text-xs font-bold rounded-xl transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/products"
            className="px-5 py-2.5 border border-slate-300 hover:border-navy-900 text-slate-800 text-xs font-bold rounded-xl transition-colors"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
};
