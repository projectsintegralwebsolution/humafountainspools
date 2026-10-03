import React from 'react';
import { Link } from 'react-router-dom';
import {
  Droplets,
  Sparkles,
  Building2,
  Trees,
  Landmark,
  Waves,
  ArrowRight,
  ShieldCheck,
  Send,
  Home,
  ChevronRight,
  Award,
  Download,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface ApplicationsPageProps {
  onOpenEnquiry: (req?: string) => void;
  onOpenCatalogue: () => void;
}

export const ApplicationsPage: React.FC<ApplicationsPageProps> = ({ onOpenEnquiry, onOpenCatalogue }) => {
  const applications = [
    {
      id: 'residential-pools',
      title: 'Residential Swimming Pools',
      subtitle: 'Private Villas, Courtyard Pools & Luxury Estates',
      badgeColor: 'text-aqua-700 bg-aqua-50 border-aqua-200',
      desc: 'Residential pool lighting requires balanced lumen output, glare suppression, and architectural slim profiles that integrate cleanly with mosaic tile walls. HUMA manufactures ultra-slim (15mm profile) ABS and marine SS 304/316 surface lights that deliver serene warm white (3000K) or tranquil blue atmospheres without overpowering private spaces.',
      image: '/assets/applications/app-residential-pool.webp',
      recommendedFixtures: ['HF012 Ultra-Slim 15mm Pool Light', 'HF04 Surface SS Pool Light', 'HF025 Concealed Step Light'],
      link: '/pool-lighting',
    },
    {
      id: 'commercial-pools',
      title: 'Commercial Swimming Pools',
      subtitle: 'Sports Complexes, Clubhouses & Olympic Aquatic Centers',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
      desc: 'Commercial pools demand rigorous safety standards, high photometric uniformity across large water depths, and heavy-duty thermal dissipation for continuous operation. HUMA high-output 11-inch fixtures (HF011/HF013) powered by Cree SMD arrays provide expansive light throw to ensure maximum swimmer visibility and lifeguard surveillance.',
      image: '/assets/applications/app-commercial-pool.webp',
      recommendedFixtures: ['HF011 High-Output 11" Pool Light', 'HF013 36W Pool Luminaire', 'HF020 Solid SS Body Fixture'],
      link: '/pool-lighting',
    },
    {
      id: 'hotels-resorts',
      title: 'Hotels & Luxury Resorts',
      subtitle: 'Hospitality Pools, Infinity Decks & Lagoon Features',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
      desc: 'In luxury hospitality environments, lighting creates the nighttime guest ambiance and elevates outdoor dining and leisure experiences. HUMA provides color-changing RGB luminaires, blue-accent stainless steel fixtures, and illuminated acrylic waterfall arches that transform resort pools into mesmerizing aquatic focal points.',
      image: '/assets/applications/app-hotel-resort-pool.webp',
      recommendedFixtures: ['HF018 Custom Color Rim Pool Light', 'HF080 Acrylic Cobra Waterfall', 'HF022 Blue/White Rim Luminaire'],
      link: '/pool-lighting',
    },
    {
      id: 'fountain-installations',
      title: 'Fountain Installations & Civic Plazas',
      subtitle: 'Civic Plazas, Dancing Water Shows & Center Jet Basins',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      desc: 'Fountain lighting requires intense optical beam punch to penetrate turbulent aerated water columns. HUMA donut center-hole fixtures mount directly over the water nozzle, ensuring 360-degree color infusion up the water jet, while high-power SS spot lights illuminate broad plume cascades from the basin floor.',
      image: '/assets/applications/app-fountain-plaza.webp',
      recommendedFixtures: ['HF057 Center-Hole Nozzle Light', 'HF042 SS Spot Fountain Light', 'HF064 Foam Jet Nozzle'],
      link: '/fountain-lighting',
    },
    {
      id: 'architectural-water-features',
      title: 'Architectural Water Features',
      subtitle: 'Reflecting Pools, Urban Landmarks & Commercial Entrances',
      badgeColor: 'text-purple-700 bg-purple-50 border-purple-200',
      desc: 'Modern architecture seamlessly weaves water into building facades, grand corporate atriums, and reflection terraces. HUMA manufactures IP65 linear LED wall washers ranging from 1 to 12 feet for grazing water walls, complemented by precision brass multi-jet nozzles and concealed perimeter step lights.',
      image: '/assets/applications/app-architectural-water.webp',
      recommendedFixtures: ['HF062 LED Wall Washer (IP65)', 'HF076 SS Water Cascade', 'HF065 Multi-Jet Finger Nozzle'],
      link: '/water-feature-lighting',
    },
    {
      id: 'landscapes-waterfalls',
      title: 'Landscapes & Decorative Water Cascades',
      subtitle: 'Garden Ponds, Stepped Waterfalls & Decorative Spouts',
      badgeColor: 'text-rose-700 bg-rose-50 border-rose-200',
      desc: 'From natural stone garden streams to stepped architectural water blades, lighting must blend discreetly with hardscape materials. HUMA step blade cascade nozzles, cobra spouts, and pivoting stand-mounted spot lights provide tailored beam spreads that accentuate dynamic water movement.',
      image: '/assets/applications/app-waterfall-cascade.webp',
      recommendedFixtures: ['HF077 Step Water Blade Nozzle', 'HF078 Cobra Waterfall Nozzle', 'HF046 Spot Fountain Stand Light'],
      link: '/water-feature-lighting',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Full-Width Edge-to-Edge Hero Banner */}
      <div className="w-full relative py-16 sm:py-24 bg-[#031525] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/assets/hero/huma-hero-illuminated-fountain-night.webp"
            alt="HUMA Water Environment Lighting Applications"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#031525] via-[#062B4C]/85 to-[#031525]/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
            <Link to="/" className="hover:text-aqua-400 flex items-center transition-colors">
              <Home className="w-3.5 h-3.5 mr-1 text-aqua-400" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-aqua-300 font-semibold">Applications</span>
          </nav>

          {/* Badge & Title */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-aqua-400 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/15">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>PURPOSE-BUILT AQUATIC ILLUMINATION • 6 CORE DOMAINS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Lighting Solutions for Different Water Environments
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              Each water installation presents unique chemical, mechanical, and optical conditions. As specialized manufacturers since 2010, HUMA engineers fixtures tailored to the optical properties, depth, turbulence, and architectural elegance of each environment.
            </p>
          </div>

          {/* Application Quick Chips */}
          <div className="pt-2 flex flex-wrap gap-2 sm:gap-3 text-xs font-semibold">
            <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-aqua-300 flex items-center">
              <Droplets className="w-3.5 h-3.5 mr-1.5 text-aqua-400" />
              Residential Pools
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-blue-300 flex items-center">
              <Building2 className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              Commercial & Olympic
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-amber-300 flex items-center">
              <Landmark className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              Hotels & Resorts
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-emerald-300 flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              Dancing Fountains
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-purple-300 flex items-center">
              <Waves className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
              Water Features
            </span>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenEnquiry('Application Layout Consultation')}
              className="inline-flex items-center text-xs sm:text-sm font-bold px-5 py-2.5 bg-aqua-500 hover:bg-aqua-400 text-navy-950 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4 mr-2" />
              Request Application Layout
            </button>
            <button
              onClick={onOpenCatalogue}
              className="inline-flex items-center text-xs sm:text-sm font-bold px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-navy-950 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Technical Catalogues
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        {/* Application Deep Dives */}
        <div className="space-y-12">
          {applications.map((app, idx) => (
            <div
              key={app.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              {/* Photo Side */}
              <div className={`lg:col-span-5 h-full min-h-[320px] lg:min-h-[400px] relative overflow-hidden group ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={app.image}
                  alt={`${app.title} lighting by HUMA`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="font-bold block text-aqua-400">{app.title}</span>
                  <span className="text-slate-300 text-[11px]">{app.subtitle}</span>
                </div>
              </div>

              {/* Text Content Side */}
              <div className={`lg:col-span-7 p-7 sm:p-10 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${app.badgeColor}`}>
                    {app.subtitle}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 leading-snug">
                    {app.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {app.desc}
                </p>

                {/* Recommended Fixtures */}
                <div className="pt-2">
                  <span className="text-xs sm:text-sm font-bold text-navy-900 block mb-2.5">
                    Recommended HUMA Hardware Models:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {app.recommendedFixtures.map((fix, i) => (
                      <span
                        key={i}
                        className="text-xs sm:text-sm bg-slate-50 text-slate-800 font-semibold px-3 py-1.5 rounded-xl border border-slate-200 flex items-center"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-aqua-600 mr-1.5" />
                        {fix}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenEnquiry(app.title)}
                    className="px-5 py-2.5 bg-navy-900 hover:bg-[#072642] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    Enquire for {app.title.split(' ')[0]} Lighting
                  </button>
                  <Link
                    to={app.link}
                    className="text-xs sm:text-sm font-bold text-aqua-600 hover:text-aqua-800 flex items-center transition-colors"
                  >
                    <span>View Recommended Fixtures</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Layout Consultation Card */}
        <div className="bg-gradient-to-r from-[#031525] via-[#062B4C] to-[#031525] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center text-xs font-bold text-amber-400 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 mr-1" />
              Tailored Photometrics & Layout
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Planning a Custom Aquatic Lighting Layout?
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              Send us your swimming pool dimensions or fountain architectural drawings. Our engineering team in Vasai-Virar will assist in luminaire placement, beam angle selection, and transformer load balancing.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('Custom Aquatic Layout Consultation')}
            className="px-7 py-3.5 bg-aqua-500 hover:bg-aqua-400 text-navy-950 font-bold rounded-xl text-sm whitespace-nowrap shadow-lg hover:shadow-aqua-500/20 cursor-pointer transition-all shrink-0"
          >
            Request Layout Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
