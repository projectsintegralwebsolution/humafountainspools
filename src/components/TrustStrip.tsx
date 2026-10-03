import React, { useState, useEffect, useRef } from 'react';
import { Clock, Award, Users, MapPin, ShieldCheck } from 'lucide-react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, suffix = '+', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth cubic ease-out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-[#05243F] border-y border-white/10 relative z-20 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {/* 1. Years of Experience (Warm Gold Theme) */}
          <div className="py-5 sm:py-6 lg:py-7 px-3 sm:px-4 xl:px-6 flex items-center space-x-3.5 group hover:bg-white/[0.03] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#041D33] border border-amber-400/40 text-[#E8B84A] flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/10 group-hover:border-amber-300 group-hover:scale-110 transition-all">
              <Clock className="w-5 h-5 text-[#E8B84A]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-black text-[#E8B84A] leading-none tracking-tight drop-shadow-[0_2px_10px_rgba(232,184,74,0.3)]">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                Years of Experience
              </h4>
              <p className="text-[11px] text-slate-300/80 leading-tight mt-0.5">
                Manufacturing & engineering since 2010
              </p>
            </div>
          </div>

          {/* 2. Projects Completed (Aquatic Cyan Theme) */}
          <div className="py-5 sm:py-6 lg:py-7 px-3 sm:px-4 xl:px-6 flex items-center space-x-3.5 group hover:bg-white/[0.03] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#041D33] border border-cyan-400/40 text-[#08B8C2] flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/10 group-hover:border-cyan-300 group-hover:scale-110 transition-all">
              <Award className="w-5 h-5 text-[#08B8C2]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-black text-[#08B8C2] leading-none tracking-tight drop-shadow-[0_2px_10px_rgba(8,184,194,0.3)]">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                Projects Completed
              </h4>
              <p className="text-[11px] text-slate-300/80 leading-tight mt-0.5">
                Villas, resorts & civic landmarks
              </p>
            </div>
          </div>

          {/* 3. Happy Clients (Emerald Green Theme) */}
          <div className="py-5 sm:py-6 lg:py-7 px-3 sm:px-4 xl:px-6 flex items-center space-x-3.5 group hover:bg-white/[0.03] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#041D33] border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/10 group-hover:border-emerald-300 group-hover:scale-110 transition-all">
              <Users className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-black text-emerald-400 leading-none tracking-tight drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)]">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                Happy Clients
              </h4>
              <p className="text-[11px] text-slate-300/80 leading-tight mt-0.5">
                Architects, builders & property owners
              </p>
            </div>
          </div>

          {/* 4. Pan India Service Network (Royal Sapphire Blue Theme) */}
          <div className="py-5 sm:py-6 lg:py-7 px-3 sm:px-4 xl:px-6 flex items-center space-x-3.5 group hover:bg-white/[0.03] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#041D33] border border-sky-400/40 text-sky-400 flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/10 group-hover:border-sky-300 group-hover:scale-110 transition-all">
              <MapPin className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-black text-sky-400 leading-none tracking-tight drop-shadow-[0_2px_10px_rgba(56,189,248,0.3)]">
                Pan India
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                Service Network
              </h4>
              <p className="text-[11px] text-slate-300/80 leading-tight mt-0.5">
                Nationwide installation & AMC support
              </p>
            </div>
          </div>

          {/* 5. International Quality Standards (Purple & Gold Theme) */}
          <div className="py-5 sm:py-6 lg:py-7 px-3 sm:px-4 xl:px-6 flex items-center space-x-3.5 group hover:bg-white/[0.03] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#041D33] border border-[#E8B84A]/40 text-[#E8B84A] flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/10 group-hover:border-[#E8B84A] group-hover:scale-110 transition-all">
              <ShieldCheck className="w-5 h-5 text-[#E8B84A]" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-black text-[#F3C966] leading-none tracking-tight drop-shadow-[0_2px_10px_rgba(232,184,74,0.3)]">
                ISO 9001
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                Quality Standards
              </h4>
              <p className="text-[11px] text-slate-300/80 leading-tight mt-0.5">
                Certified precision manufacturing plant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
