import React from 'react';
import { Phone, MessageSquare, FileText, Send, ArrowUp } from 'lucide-react';
import { COMPANY } from '../data/siteData';

interface FloatingActionsProps {
  onOpenEnquiry: () => void;
  onOpenCatalogue: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEnquiry, onOpenCatalogue }) => {
  const cleanPhone = COMPANY.primaryPhone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hello HUMA Fountains & Pools, I am looking for pool & fountain lighting solutions for my project.')}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Right-Side Floating Actions */}
      <div className="hidden md:flex fixed right-4 bottom-8 z-40 flex-col items-end space-y-2.5">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold px-0 group-hover:px-2">
            WhatsApp Sales
          </span>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.136 8.136 0 0 1-1.25-4.29c0-4.51 3.67-8.18 8.18-8.18 2.18 0 4.24.85 5.78 2.39a8.14 8.14 0 0 1 2.39 5.78c.01 4.52-3.66 8.17-8.21 8.17zm4.49-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
          </svg>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${cleanPhone}`}
          className="group flex items-center bg-[#062B4C] hover:bg-[#082E4F] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/10"
          aria-label="Call HUMA"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold px-0 group-hover:px-2">
            Call +91 8668466689
          </span>
          <Phone className="w-5 h-5 text-aqua-400" />
        </a>

        {/* Quick Enquiry Button */}
        <button
          onClick={onOpenEnquiry}
          className="group flex items-center bg-aqua-500 hover:bg-aqua-400 text-navy-950 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer font-bold"
          aria-label="Request a Quote"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold px-0 group-hover:px-2">
            Request Quote
          </span>
          <Send className="w-5 h-5 text-navy-950" />
        </button>

        {/* Catalogue Trigger */}
        <button
          onClick={onOpenCatalogue}
          className="group flex items-center bg-gold-500 hover:bg-gold-400 text-navy-950 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer font-bold"
          aria-label="Product Catalogue"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold px-0 group-hover:px-2">
            Catalogues
          </span>
          <FileText className="w-5 h-5 text-navy-950" />
        </button>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full shadow-md transition-all cursor-pointer backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#041B30] border-t border-white/15 px-3 py-2 flex items-center justify-around shadow-2xl backdrop-blur-lg">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-[10px] font-medium text-emerald-400 py-1"
        >
          <svg className="w-5 h-5 fill-current mb-0.5" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.136 8.136 0 0 1-1.25-4.29c0-4.51 3.67-8.18 8.18-8.18 2.18 0 4.24.85 5.78 2.39a8.14 8.14 0 0 1 2.39 5.78c.01 4.52-3.66 8.17-8.21 8.17zm4.49-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
          </svg>
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${cleanPhone}`}
          className="flex flex-col items-center text-[10px] font-medium text-slate-200 py-1"
        >
          <Phone className="w-5 h-5 text-aqua-400 mb-0.5" />
          <span>Call Us</span>
        </a>

        <button
          onClick={onOpenCatalogue}
          className="flex flex-col items-center text-[10px] font-medium text-gold-400 py-1"
        >
          <FileText className="w-5 h-5 mb-0.5" />
          <span>Catalogue</span>
        </button>

        <button
          onClick={onOpenEnquiry}
          className="flex items-center px-4 py-1.5 bg-gradient-to-r from-aqua-500 to-aqua-600 text-navy-950 font-bold text-xs rounded-lg shadow-md"
        >
          <span>Get Quote</span>
        </button>
      </div>
    </>
  );
};
