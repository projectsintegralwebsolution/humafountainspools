import React from 'react';
import { ShieldCheck, Lock, FileText, Cookie } from 'lucide-react';
import { COMPANY } from '../data/siteData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-aqua-600">
            <Lock className="w-8 h-8" />
            <h1 className="text-3xl font-serif font-bold text-navy-900">
              Privacy Policy
            </h1>
          </div>

          <p className="text-xs text-slate-500">
            Last Updated: October 2026 • HUMA Fountains & Pools
          </p>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h2 className="text-base font-bold text-navy-900 pt-2">1. Information We Collect</h2>
            <p>
              At HUMA Fountains & Pools (&quot;HUMA&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we collect business-to-business information submitted via our product quote and catalogue request forms, including your full name, company name, phone number, email address, project location, and technical requirements.
            </p>

            <h2 className="text-base font-bold text-navy-900 pt-2">2. How We Use Your Information</h2>
            <p>
              The information you provide is used solely for responding to lighting quotation inquiries, providing engineering guidance, supplying technical documentation, and delivering after-sales support. We do not sell, rent, or lease customer contact information to third parties.
            </p>

            <h2 className="text-base font-bold text-navy-900 pt-2">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard administrative, physical, and technical measures to protect your inquiries against unauthorized access, loss, or alteration. All inquiry submissions transmitted over the website are encrypted using Transport Layer Security (TLS).
            </p>

            <h2 className="text-base font-bold text-navy-900 pt-2">4. Contact For Privacy Matters</h2>
            <p>
              If you have any questions regarding your personal or company data, you may reach our administrative office at:
              <br />
              <strong className="text-navy-900">{COMPANY.name}</strong>
              <br />
              {COMPANY.address}
              <br />
              Email: {COMPANY.email} | Phone: {COMPANY.primaryPhone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-aqua-600">
            <FileText className="w-8 h-8" />
            <h1 className="text-3xl font-serif font-bold text-navy-900">
              Terms & Conditions
            </h1>
          </div>

          <p className="text-xs text-slate-500">
            Last Updated: October 2026 • HUMA Fountains & Pools
          </p>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h2 className="text-base font-bold text-navy-900 pt-2">1. Scope of Terms</h2>
            <p>
              Welcome to the corporate website of HUMA Fountains & Pools. By accessing or using this website, you agree to comply with and be bound by the following terms regarding technical catalogue access, quotation requests, and intellectual property.
            </p>

            <h2 className="text-base font-bold text-navy-900 pt-2">2. Product Specifications & Tolerances</h2>
            <p>
              All product photographs, wattage ratings, dimensions, and beam angle representations displayed on this website are derived directly from the official HUMA Product Catalogue. Because we continuously improve our manufacturing methods, dimensions and minor engineering specifications may be updated without prior notice. Final order confirmations and technical cut sheets govern commercial supply contracts.
            </p>

            <h2 className="text-base font-bold text-navy-900 pt-2">3. Intellectual Property</h2>
            <p>
              The HUMA trademark, official brand logo, catalogue layouts, product photographs, and text descriptions are the exclusive intellectual property of HUMA Fountains & Pools. Unauthorized duplication or commercial redistribution without written consent is prohibited.
            </p>

            <h2 className="text-base font-bold text-navy-900 pt-2">4. Manufacturer Warranty</h2>
            <p>
              Standard HUMA underwater luminaires carry a 2-Year Manufacturer Warranty subject to correct low-voltage electrical installation, approved step-down transformers, and standard aquatic operating conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CookiePolicyPage: React.FC<{ onOpenPreferences: () => void }> = ({ onOpenPreferences }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-aqua-600">
            <Cookie className="w-8 h-8" />
            <h1 className="text-3xl font-serif font-bold text-navy-900">
              Cookie Policy
            </h1>
          </div>

          <p className="text-xs text-slate-500">
            Last Updated: October 2026 • HUMA Fountains & Pools
          </p>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              This Cookie Policy explains how HUMA Fountains & Pools uses cookies and similar technologies to enhance your experience, maintain session state, and understand how visitors interact with our technical lighting catalog.
            </p>

            <h2 className="text-base font-bold text-navy-900 pt-2">1. What Are Cookies?</h2>
            <p>
              Cookies are small data files placed on your device by websites you visit. They allow websites to remember user preferences, maintain session security, and provide essential navigation features.
            </p>

            <h2 className="text-base font-bold text-navy-900 pt-2">2. Types of Cookies We Use</h2>
            <div className="space-y-3 pl-2">
              <div>
                <strong className="text-navy-900">A. Necessary Cookies (Always Active):</strong>
                <p className="text-slate-600">Essential for core security, inquiry form submission verification, anti-spam validation, and layout responsiveness. These cannot be disabled.</p>
              </div>
              <div>
                <strong className="text-navy-900">B. Analytics Cookies (Optional):</strong>
                <p className="text-slate-600">Help us measure aggregated anonymous traffic, most viewed catalogue items, and loading performance to optimize site speed.</p>
              </div>
              <div>
                <strong className="text-navy-900">C. Preference Cookies (Optional):</strong>
                <p className="text-slate-600">Remember your chosen filters or product display views across sessions.</p>
              </div>
            </div>

            <h2 className="text-base font-bold text-navy-900 pt-2">3. Managing Your Preferences</h2>
            <p>
              You can adjust or revoke your cookie consent at any time using our Cookie Preferences manager.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenPreferences}
                className="px-6 py-2.5 bg-navy-900 hover:bg-[#072642] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Open Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
