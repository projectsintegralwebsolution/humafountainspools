import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { CatalogueModal } from './components/CatalogueModal';
import { FloatingActions } from './components/FloatingActions';
import { CookieBanner } from './components/CookieBanner';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { ServicesPage } from './pages/ServicesPage';
import { CataloguePage } from './pages/CataloguePage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage, TermsPage, CookiePolicyPage } from './pages/LegalPages';
import { NotFoundPage } from './pages/NotFoundPage';

// Helper to scroll to top on page navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const AppContent: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState<string>('');
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [forceCookiePreferences, setForceCookiePreferences] = useState(false);

  const handleOpenEnquiry = (productName?: string) => {
    setEnquiryProduct(productName || '');
    setIsEnquiryOpen(true);
  };

  const handleOpenCatalogue = () => {
    setIsCatalogueOpen(true);
  };

  const handleOpenCookieSettings = () => {
    setForceCookiePreferences(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-aqua-500 selection:text-white">
      <ScrollToTop />

      {/* Sticky Header with Mega Menu */}
      <Header
        onOpenEnquiry={handleOpenEnquiry}
        onOpenCatalogue={handleOpenCatalogue}
      />

      {/* Main Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCatalogue={handleOpenCatalogue}
              />
            }
          />
          <Route
            path="/about-us"
            element={
              <AboutPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCatalogue={handleOpenCatalogue}
              />
            }
          />
          <Route
            path="/products"
            element={
              <ProductsPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCatalogue={handleOpenCatalogue}
              />
            }
          />
          <Route
            path="/products/:slug"
            element={
              <ProductDetailPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCatalogue={handleOpenCatalogue}
              />
            }
          />
          <Route
            path="/pool-lighting"
            element={
              <CategoryPage
                categorySlug="pool-lighting"
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCatalogue={handleOpenCatalogue}
              />
            }
          />
          <Route
            path="/underwater-pool-lights"
            element={
              <CategoryPage
                categorySlug="pool-lighting"
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCatalogue={handleOpenCatalogue}
              />
            }
          />
          <Route
            path="/fountain-lighting"
            element={
              <CategoryPage
                categorySlug="fountain-lighting"
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCatalogue={handleOpenCatalogue}
              />
            }
          />
          <Route
            path="/fountain-lights"
            element={
              <CategoryPage
                categorySlug="fountain-lighting"
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCatalogue={handleOpenCatalogue}
              />
            }
          />
          <Route
            path="/water-feature-lighting"
            element={
              <CategoryPage
                categorySlug="water-feature-lighting"
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCatalogue={handleOpenCatalogue}
              />
            }
          />
          <Route
            path="/applications"
            element={
              <ApplicationsPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCatalogue={handleOpenCatalogue}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onOpenEnquiry={handleOpenEnquiry}
                onOpenCatalogue={handleOpenCatalogue}
              />
            }
          />
          <Route
            path="/catalogue"
            element={<CataloguePage onOpenEnquiry={handleOpenEnquiry} />}
          />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route
            path="/cookie-policy"
            element={<CookiePolicyPage onOpenPreferences={handleOpenCookieSettings} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Floating Action System */}
      <FloatingActions
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenCatalogue={handleOpenCatalogue}
      />

      {/* Footer */}
      <Footer
        onOpenCookieSettings={handleOpenCookieSettings}
        onOpenCatalogue={handleOpenCatalogue}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialProduct={enquiryProduct}
      />

      {/* Catalogue Modal */}
      <CatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
        onOpenEnquiry={() => handleOpenEnquiry('Catalogue Requirement')}
      />

      {/* Cookie Consent Banner & Preferences Manager */}
      <CookieBanner
        forceOpen={forceCookiePreferences}
        onCloseForceOpen={() => setForceCookiePreferences(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
