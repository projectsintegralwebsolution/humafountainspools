import React, { useState } from 'react';
import { X, Download, Eye, FileText, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../data/siteData';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({ isOpen, onClose, onOpenEnquiry }) => {
  const [selectedCatalogue, setSelectedCatalogue] = useState<string>(COMPANY.catalogues[0].id);
  const [viewingPdfUrl, setViewingPdfUrl] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentCat = COMPANY.catalogues.find((c) => c.id === selectedCatalogue) || COMPANY.catalogues[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-6 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="catalogue-modal-title"
      >
        {/* Header */}
        <div className="bg-[#062B4C] text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-md">
              <img
                src="/assets/branding/huma-logo.jpg"
                alt="HUMA Fountains & Pools"
                className="h-7 w-auto object-contain"
              />
            </div>
            <div>
              <h2 id="catalogue-modal-title" className="text-base sm:text-lg font-bold">
                HUMA Official Product Catalogues (2024 Edition)
              </h2>
              <p className="text-xs text-aqua-300">
                Direct factory documentation with exact technical dimensions and photometric ratings
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {viewingPdfUrl ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setViewingPdfUrl(null)}
                  className="text-xs font-semibold text-aqua-600 hover:text-aqua-800 flex items-center"
                >
                  ← Back to Catalogue Overview
                </button>
                <a
                  href={viewingPdfUrl}
                  download
                  className="inline-flex items-center text-xs font-semibold px-3 py-1.5 bg-navy-900 text-white rounded hover:bg-navy-800"
                >
                  <Download className="w-3.5 h-3.5 mr-1" />
                  Download Offline PDF
                </a>
              </div>
              <div className="border border-slate-300 rounded-xl overflow-hidden h-[65vh] bg-slate-100">
                <iframe
                  src={viewingPdfUrl}
                  title="HUMA Catalogue Viewer"
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {COMPANY.catalogues.map((cat) => (
                  <div
                    key={cat.id}
                    className={`border-2 rounded-xl p-5 transition-all flex flex-col justify-between ${
                      selectedCatalogue === cat.id
                        ? 'border-aqua-500 bg-aqua-50/20 shadow-md'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                    onClick={() => setSelectedCatalogue(cat.id)}
                  >
                    <div>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 border border-slate-200 mb-4 relative group">
                        <img
                          src={cat.cover}
                          alt={cat.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] px-2 py-0.5 rounded font-medium backdrop-blur-sm">
                          {cat.pages} Technical Pages
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-navy-900 mb-1">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center space-x-3">
                      <a
                        href={cat.file}
                        download
                        className="flex-1 inline-flex items-center justify-center py-2 px-3 bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                      >
                        <Download className="w-3.5 h-3.5 mr-1.5 text-aqua-400" />
                        Download PDF
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setViewingPdfUrl(cat.file);
                        }}
                        className="inline-flex items-center justify-center py-2 px-3 border border-slate-300 hover:border-navy-900 text-slate-700 hover:text-navy-900 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 mr-1.5" />
                        Quick View
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Notice Banner */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-6 h-6 text-aqua-600 shrink-0" />
                  <div className="text-xs text-slate-700">
                    <span className="font-bold text-navy-900 block">Custom Housing & Low-Voltage Wiring Options</span>
                    All fixtures are available with custom beam angles, RGB / DMX control compatibility, and factory pre-wired submersible cables.
                  </div>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenEnquiry();
                  }}
                  className="px-4 py-2 bg-aqua-500 hover:bg-aqua-400 text-navy-950 font-bold rounded-lg text-xs whitespace-nowrap transition-colors cursor-pointer"
                >
                  Request Technical Quotation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
