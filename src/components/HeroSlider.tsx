import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSliderProps {
  onOpenEnquiry: () => void;
  onOpenCatalogue: () => void;
}

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  primaryCta: { text: string; link?: string; action?: 'enquiry' | 'catalogue' };
  secondaryCta: { text: string; link?: string; action?: 'enquiry' | 'catalogue' };
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Innovative Lighting Solutions for Pools & Fountains',
    subtitle: 'Manufacturing and fitting high-quality lighting solutions designed for swimming pools, fountains and water features.',
    badge: 'MFG SINCE 2010 • ISO 9001:2015 CERTIFIED',
    image: '/assets/hero/huma-hero-illuminated-fountain-night.webp',
    primaryCta: { text: 'Explore Products', link: '/products' },
    secondaryCta: { text: 'Request a Quote', action: 'enquiry' },
  },
  {
    id: 2,
    title: 'Designed for Water. Built for Performance.',
    subtitle: 'Marine-grade SS 304/316 and high-impact ABS swimming pool lights engineered for complete underwater durability and sheer cascade waterfalls.',
    badge: 'UNDERWATER POOL & WATERFALL LIGHTING',
    image: '/assets/hero/huma-hero-luxury-pool-waterfall.webp',
    primaryCta: { text: 'Explore Pool Lights', link: '/pool-lighting' },
    secondaryCta: { text: 'Request a Quote', action: 'enquiry' },
  },
  {
    id: 3,
    title: 'Bring Water Features to Life With Light',
    subtitle: 'High-intensity IP68 underwater fixtures, precision nozzle center-hole lights, and dynamic color systems built for lasting brilliance.',
    badge: 'FOUNTAIN LIGHTING SPECIALISTS',
    image: '/assets/hero/hero-fountain-grand.webp',
    primaryCta: { text: 'Explore Fountain Lights', link: '/fountain-lighting' },
    secondaryCta: { text: 'Download Catalogue', action: 'catalogue' },
  },
  {
    id: 4,
    title: 'Underwater Brilliance for Luxury Pools & Resorts',
    subtitle: 'Over a decade of manufacturing expertise, factory-backed fitting support, and dedicated aquatic illumination engineering.',
    badge: 'PRECISION LIGHTING ENGINEERING',
    image: '/assets/hero/hero-pool-night-luxury.webp',
    primaryCta: { text: 'Explore All Products', link: '/products' },
    secondaryCta: { text: 'Contact Lighting Desk', link: '/contact-us' },
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenEnquiry, onOpenCatalogue }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const handleCtaClick = (cta: Slide['primaryCta']) => {
    if (cta.action === 'enquiry') {
      onOpenEnquiry();
    } else if (cta.action === 'catalogue') {
      onOpenCatalogue();
    }
  };

  return (
    <div
      className="relative w-full h-[620px] sm:h-[680px] lg:h-[740px] bg-[#031525] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Background Images */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background image with vivid clarity and sharp visibility */}
          <img
            src={slide.image}
            alt={slide.title}
            // Prioritize loading the first hero image for LCP Core Web Vitals
            loading={idx === 0 ? 'eager' : 'lazy'}
            fetchPriority={idx === 0 ? 'high' : 'auto'}
            className="w-full h-full object-cover object-center"
          />

          {/* Minimal soft gradient overlay — protects text on the left while leaving the center & right completely bright and vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#031525]/75 via-[#031525]/25 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#031525]/40 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 pt-12 sm:pt-0">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#031525]/80 backdrop-blur-md border border-white/25 text-aqua-400 text-xs font-bold tracking-wider shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-aqua-400" />
            <span>{slides[current].badge}</span>
          </div>

          {/* Heading with high-contrast drop shadow */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white leading-[1.15] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {slides[current].title}
          </h1>

          {/* Subtitle with soft shadow */}
          <p className="text-base sm:text-lg text-white font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            {slides[current].subtitle}
          </p>

          {/* Call to Actions & Multi-Color Feature Bar */}
          <div className="space-y-5 pt-2">
            <div className="flex flex-wrap items-center gap-4">
              {slides[current].primaryCta.link ? (
                <Link
                  to={slides[current].primaryCta.link!}
                  className="px-7 py-4 bg-gradient-to-r from-aqua-400 via-teal-300 to-[#E8B84A] hover:brightness-110 text-navy-950 font-black rounded-xl transition-all shadow-xl hover:shadow-cyan-400/30 flex items-center space-x-2 text-sm sm:text-base hover:scale-105"
                >
                  <span>{slides[current].primaryCta.text}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              ) : (
                <button
                  onClick={() => handleCtaClick(slides[current].primaryCta)}
                  className="px-7 py-4 bg-gradient-to-r from-aqua-400 via-teal-300 to-[#E8B84A] hover:brightness-110 text-navy-950 font-black rounded-xl transition-all shadow-xl hover:shadow-cyan-400/30 flex items-center space-x-2 text-sm sm:text-base cursor-pointer hover:scale-105"
                >
                  <span>{slides[current].primaryCta.text}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              )}

              {slides[current].secondaryCta.link ? (
                <Link
                  to={slides[current].secondaryCta.link!}
                  className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/30 backdrop-blur-md text-sm sm:text-base hover:border-white/50"
                >
                  {slides[current].secondaryCta.text}
                </Link>
              ) : (
                <button
                  onClick={() => handleCtaClick(slides[current].secondaryCta)}
                  className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/30 backdrop-blur-md text-sm sm:text-base cursor-pointer hover:border-white/50"
                >
                  {slides[current].secondaryCta.text}
                </button>
              )}
            </div>

            {/* Multi-Color Aquatic Capabilities Floating Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold">
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#041D33]/90 border border-aqua-400/40 text-aqua-300 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-aqua-400 mr-2 shadow-[0_0_8px_#08B8C2]"></span>
                IP68 Submersible
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#041D33]/90 border border-[#E8B84A]/40 text-amber-300 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2 shadow-[0_0_8px_#E8B84A]"></span>
                Safe 12V Operation
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#041D33]/90 border border-blue-400/40 text-blue-300 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 shadow-[0_0_8px_#3B82F6]"></span>
                Marine SS 304 / 316
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#041D33]/90 border border-emerald-400/40 text-emerald-300 backdrop-blur-md shadow-sm hidden sm:inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 shadow-[0_0_8px_#10B981]"></span>
                2-Year Factory Warranty
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 transition-all backdrop-blur-sm hidden sm:block focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 transition-all backdrop-blur-sm hidden sm:block focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Pagination Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center space-x-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current ? 'w-8 h-2 bg-aqua-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
