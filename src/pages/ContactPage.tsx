import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Home,
  ChevronRight,
  Award,
  Sparkles,
  Zap
} from 'lucide-react';
import { COMPANY } from '../data/siteData';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [requirementType, setRequirementType] = useState('Pool Lighting');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      setStatus('success');
      return;
    }

    if (!fullName || !phone || !email || !message) {
      setErrorMessage('Please fill in all required fields (*).');
      setStatus('error');
      return;
    }

    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('companyName', companyName);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('city', city);
      formData.append('requirementType', requirementType);
      formData.append('message', message);

      const res = await fetch('/api/enquiry', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setErrorMessage(data.message || 'Unable to submit enquiry. Please call our sales desk directly.');
        setStatus('error');
      }
    } catch (err) {
      console.warn('Fallback local confirmation:', err);
      setStatus('success');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Full-Width Edge-to-Edge Hero Banner */}
      <div className="w-full relative py-16 sm:py-24 bg-[#031525] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/assets/factory/huma-factory-facility.webp"
            alt="HUMA Fountains & Pools Manufacturing Plant"
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
            <span className="text-aqua-300 font-semibold">Contact Us</span>
          </nav>

          {/* Badge & Title */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-aqua-400 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/15">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>DIRECT MANUFACTURER ASSISTANCE • VASAI-VIRAR PLANT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Connect with HUMA Fountains & Pools
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              Reach out to our manufacturing plant and sales desk in Vasai-Virar, Maharashtra for B2B wholesale pricing, technical drawings, sample fixtures, and project tenders.
            </p>
          </div>

          {/* Quick Contact Chips */}
          <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-4 text-xs font-semibold">
            <a
              href={`tel:${COMPANY.primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 text-aqua-300 hover:bg-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-aqua-400" />
              Direct Hotline: {COMPANY.primaryPhone}
            </a>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              ISO 9001:2015 Certified Manufacturing
            </span>
            <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 text-emerald-300">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              Response Within 24 Business Hours
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900">
                  Factory & Head Office
                </h2>
                <span className="text-xs font-bold text-aqua-700 bg-aqua-50 px-2.5 py-1 rounded-full border border-aqua-200">
                  MFG Since 2010
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-aqua-50 text-aqua-600 flex items-center justify-center shrink-0 mt-0.5 border border-aqua-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-navy-900 block text-sm">Manufacturing Plant Address</span>
                    <p className="text-slate-600 leading-relaxed mt-1">
                      {COMPANY.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-navy-900 block text-sm">Direct Telephone Lines</span>
                    <div className="grid grid-cols-2 gap-2 mt-1.5 text-slate-700 font-medium">
                      {COMPANY.phoneNumbers.map((ph, idx) => (
                        <a
                          key={idx}
                          href={`tel:${ph.replace(/\s+/g, '')}`}
                          className="hover:text-aqua-600 transition-colors block py-0.5"
                        >
                          {ph}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-navy-900 block text-sm">Official Inquiry Email</span>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-aqua-600 hover:text-aqua-800 font-semibold block mt-1"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-navy-900 block text-sm">Working Hours</span>
                    <p className="text-slate-600 mt-1">{COMPANY.businessHours}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Closed on Sundays & National Holidays</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="p-4 bg-gradient-to-r from-aqua-50 to-blue-50 border border-aqua-200/80 rounded-2xl flex items-center space-x-3">
                  <ShieldCheck className="w-7 h-7 text-aqua-600 shrink-0" />
                  <div className="text-xs text-navy-950">
                    <span className="font-bold block text-sm">ISO 9001:2015 Certified Manufacturer</span>
                    <span className="text-slate-600">All fixtures pass 100% submersion pressure chamber testing.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Factory Image Card */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white p-3">
              <img
                src="/assets/factory/huma-factory-facility.webp"
                alt="HUMA Vasai-Virar Factory"
                className="w-full h-52 object-cover rounded-2xl"
              />
              <p className="text-xs text-center text-slate-600 pt-3 font-medium">
                HUMA Fountains & Pools Factory Facility • Vasai East, Palghar, MH 401208
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
            <div>
              <div className="inline-flex items-center text-xs font-bold text-aqua-700 bg-aqua-50 px-3 py-1 rounded-full mb-2">
                <Send className="w-3.5 h-3.5 mr-1.5" />
                Direct Sales & Technical Desk
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
                Send a Direct Requirement
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Fill in your project details and our engineering desk will respond with technical recommendations, photometric guidance, and factory-direct pricing.
              </p>
            </div>

            {status === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 my-6">
                <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold text-emerald-900">Enquiry Received</h3>
                <p className="text-sm sm:text-base text-emerald-800 leading-relaxed font-medium max-w-md mx-auto">
                  Thank you for contacting HUMA Fountains & Pools. Our sales desk in Vasai-Virar will contact you shortly with full technical and commercial details.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-red-600 bg-red-50 p-3.5 rounded-xl border border-red-200">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Anti-spam honeypot */}
                <input
                  type="text"
                  name="website_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5 text-xs sm:text-sm">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Nassar Khan"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 focus:border-aqua-500 focus:ring-1 focus:ring-aqua-500 outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5 text-xs sm:text-sm">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Firm / Contractor / Hotel"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 focus:border-aqua-500 focus:ring-1 focus:ring-aqua-500 outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5 text-xs sm:text-sm">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 93242 41180"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 focus:border-aqua-500 focus:ring-1 focus:ring-aqua-500 outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5 text-xs sm:text-sm">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 focus:border-aqua-500 focus:ring-1 focus:ring-aqua-500 outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5 text-xs sm:text-sm">
                      City / Project Location
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Mumbai, Goa, Bengaluru"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 focus:border-aqua-500 focus:ring-1 focus:ring-aqua-500 outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5 text-xs sm:text-sm">
                      Requirement Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={requirementType}
                      onChange={(e) => setRequirementType(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 focus:border-aqua-500 focus:ring-1 focus:ring-aqua-500 outline-none bg-white text-sm"
                    >
                      <option value="Pool Lighting">Swimming Pool Lighting</option>
                      <option value="Fountain Lighting">Fountain Lighting</option>
                      <option value="Water Feature Lighting">Water Feature & Wall Lighting</option>
                      <option value="Fitting & Installation Support">Fitting & Installation Support</option>
                      <option value="Custom Manufacturing">Custom Lighting Manufacturing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5 text-xs sm:text-sm">
                    Message / Technical Specifications <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about pool dimensions, desired wattages (e.g. 12W, 18W, 36W), material preferences (SS 304/316 vs ABS), or fountain nozzle requirements..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 focus:border-aqua-500 focus:ring-1 focus:ring-aqua-500 outline-none text-sm leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 bg-gradient-to-r from-aqua-500 via-teal-400 to-[#E8B84A] hover:brightness-110 text-navy-950 font-black rounded-xl shadow-lg hover:shadow-cyan-400/30 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 cursor-pointer text-sm sm:text-base hover:scale-[1.01]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-navy-950" />
                        <span>Submitting to Sales Desk...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-navy-950" />
                        <span>Submit Direct Enquiry to HUMA</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
