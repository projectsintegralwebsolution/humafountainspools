import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, ShieldCheck } from 'lucide-react';
import type { CookiePreferences } from '../types';

interface CookieBannerProps {
  forceOpen?: boolean;
  onCloseForceOpen?: () => void;
}

const STORAGE_KEY = 'huma_cookie_consent_v1';

export const CookieBanner: React.FC<CookieBannerProps> = ({ forceOpen = false, onCloseForceOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);

  // Categories
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [preferences, setPreferences] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Delay slightly for smooth page load experience
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed: CookiePreferences = JSON.parse(saved);
        setAnalytics(parsed.analytics);
        setMarketing(parsed.marketing);
        setPreferences(parsed.preferences);
      } catch (e) {
        console.error('Error parsing cookie consent:', e);
      }
    }
  }, []);

  useEffect(() => {
    if (forceOpen) {
      setShowManageModal(true);
    }
  }, [forceOpen]);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setIsVisible(false);
    setShowManageModal(false);
    if (onCloseForceOpen) onCloseForceOpen();
  };

  const handleAcceptAll = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      timestamp: new Date().toISOString(),
    };
    saveConsent(prefs);
  };

  const handleRejectAll = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: new Date().toISOString(),
    };
    saveConsent(prefs);
  };

  const handleSavePreferences = () => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics,
      marketing,
      preferences,
      timestamp: new Date().toISOString(),
    };
    saveConsent(prefs);
  };

  return (
    <>
      {/* Bottom Sticky Banner */}
      {isVisible && !showManageModal && (
        <div className="fixed bottom-14 md:bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 animate-slideUp">
          <div className="bg-[#062B4C]/95 backdrop-blur-md border border-white/20 text-white p-5 rounded-2xl shadow-2xl space-y-4">
            <div className="flex items-start space-x-3">
              <Cookie className="w-6 h-6 text-aqua-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  We Respect Your Privacy & Cookie Choices
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We use cookies to ensure optimal functionality, understand traffic patterns for our technical lighting catalogue, and enhance your B2B browsing experience. You can customize your preferences anytime. Read our{' '}
                  <Link to="/cookie-policy" className="text-aqua-400 underline hover:text-white">
                    Cookie Policy
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2 px-3 bg-aqua-500 hover:bg-aqua-400 text-navy-950 font-bold text-xs rounded-lg transition-colors cursor-pointer text-center"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectAll}
                className="flex-1 py-2 px-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer text-center"
              >
                Reject All
              </button>
              <button
                onClick={() => setShowManageModal(true)}
                className="py-2 px-3 border border-white/20 hover:border-aqua-400 text-slate-200 hover:text-white font-medium text-xs rounded-lg transition-colors cursor-pointer text-center whitespace-nowrap"
              >
                Manage Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Management Modal */}
      {showManageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
            <div className="bg-[#062B4C] text-white p-5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-aqua-400" />
                <h3 className="text-base font-bold">Manage Cookie Preferences</h3>
              </div>
              <button
                onClick={() => {
                  setShowManageModal(false);
                  if (onCloseForceOpen) onCloseForceOpen();
                }}
                className="p-1 text-white/70 hover:text-white"
                aria-label="Close preferences"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 text-xs text-slate-700 max-h-[70vh] overflow-y-auto">
              <p className="text-slate-600 leading-relaxed">
                Configure your cookie settings below. Essential cookies are required for fundamental site navigation and catalogue functionality, while optional cookies can be enabled or disabled according to your preference.
              </p>

              {/* Necessary */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start justify-between">
                <div className="pr-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-navy-900">Necessary Cookies</span>
                    <span className="bg-slate-200 text-slate-700 text-[10px] px-1.5 py-0.5 rounded font-medium">Always Active</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Required for core security, session continuity, quote enquiry protection, and basic layout rendering. Cannot be disabled.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="mt-1 h-4 w-4 rounded accent-aqua-600 cursor-not-allowed opacity-60"
                />
              </div>

              {/* Analytics */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start justify-between">
                <div className="pr-4">
                  <span className="font-bold text-navy-900">Analytics Cookies</span>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Help us understand aggregated visitor counts, product category interests, and page load speeds to improve catalog discoverability.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded accent-aqua-600 cursor-pointer"
                />
              </div>

              {/* Preferences */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start justify-between">
                <div className="pr-4">
                  <span className="font-bold text-navy-900">Preference Cookies</span>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Enable the website to remember choices such as recently viewed products or preferred enquiry filters.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences}
                  onChange={(e) => setPreferences(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded accent-aqua-600 cursor-pointer"
                />
              </div>

              {/* Marketing */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start justify-between">
                <div className="pr-4">
                  <span className="font-bold text-navy-900">Marketing & Campaign Cookies</span>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Used to measure technical inquiry campaigns across business-to-business industry channels.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded accent-aqua-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs">
              <button
                onClick={handleRejectAll}
                className="text-slate-600 hover:text-slate-900 font-medium underline"
              >
                Reject All Optional
              </button>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleAcceptAll}
                  className="px-3.5 py-2 border border-slate-300 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Accept All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
