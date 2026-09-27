import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { MapPin, Phone, Clock, MessageSquare, ShieldCheck, ArrowUpRight, ArrowUp } from 'lucide-react';
import { CounterReveal } from './CounterReveal';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0F172A] text-slate-100 border-t border-slate-800 pt-16 pb-24 lg:pb-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Differentiator */}
          <div className="space-y-4">
            <button
              onClick={() => scrollTo('home')}
              className="text-left font-editorial text-2xl font-bold tracking-tight text-white hover:text-slate-300 transition-colors cursor-pointer"
            >
              Xtreme Fitness
            </button>
            <p className="text-sm text-slate-400 leading-relaxed">
              DHA Phase 8’s dedicated 24-hour athletic training center. Founded on uncompromising biomechanics, certified strength coaching, and round-the-clock physical discipline.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <span className="font-semibold text-white">
                <CounterReveal value={4.8} decimals={1} />★ Rating
              </span>
              <span>·</span>
              <span>
                <CounterReveal value={274} decimals={0} /> Verified Reviews
              </span>
              <span>·</span>
              <span className="text-slate-300">Lahore</span>
            </div>
          </div>

          {/* Quick Navigation Links on Same Page */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-semibold">
              The Journey
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => scrollTo('story')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  The Facility & Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Training Programs & CrossFit
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('coaches')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Meet the Coaches (Mehwish, Mishel, Abdul Raheem)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('seasonal')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ramadan Boot Camp 2026
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('reviews')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Member Transformation Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('membership')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Membership Plans & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('pulse')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Live Gym Pulse & Busy Hours
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faqs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Access & Policy FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-semibold">
              Location & Hours
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Xtreme+Fitness+Block+M+Air+Avenue+DHA+Phase+8+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
                title="Open Xtreme Fitness in Google Maps"
              >
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-snug text-slate-200 group-hover:underline">
                  DHA Phase 8 - Ex Air Avenue, Block M Air Avenue, Lahore, Pakistan
                </span>
              </a>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-slate-200 font-medium">
                  Open 24 Hours · 365 Days a Year
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs">Continuous On-Site Security & Biometric Gate</span>
              </div>
            </div>
          </div>

          {/* Contact & WhatsApp CTA */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-semibold">
              Direct Inquiries
            </h4>
            <p className="text-xs text-slate-400">
              Connect directly with our desk to confirm membership availability, coach allocations, or visit scheduling.
            </p>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hi, I'd like to know more about membership at Xtreme Fitness"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 bg-[#064E3B] hover:bg-[#043629] text-white rounded-lg text-xs font-semibold transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: {GYM_INFO.phone}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:+923364255323"
                className="flex items-center justify-between px-4 py-2.5 border border-slate-700 hover:border-slate-500 text-slate-200 hover:bg-white/5 rounded-lg text-xs font-semibold transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call: {GYM_INFO.phone}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-2.5 border border-slate-700 text-slate-200 hover:bg-white/5 rounded-lg text-xs font-semibold transition-colors text-center cursor-pointer"
              >
                Inquire Online (Generate ID)
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Hairline & Legal */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Xtreme Fitness Lahore.</span>
            <span>·</span>
            <span>DHA Phase 8 Athletic Facility</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
            <span>·</span>
            <button onClick={() => scrollTo('reviews')} className="hover:text-white transition-colors cursor-pointer">
              Reviews & Stories
            </button>
            <span>·</span>
            <button onClick={() => scrollTo('faqs')} className="hover:text-white transition-colors cursor-pointer">
              Access FAQs
            </button>
            <span>·</span>
            <button onClick={() => scrollTo('pulse')} className="hover:text-white transition-colors cursor-pointer">
              Live Occupancy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
