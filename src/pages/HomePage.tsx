import React, { useEffect, useState } from 'react';
import { GYM_INFO, IMAGES } from '../data/gymData';
import { SafeImage } from '../components/SafeImage';
import { CounterReveal } from '../components/CounterReveal';
import { 
  ArrowRight, 
  MessageSquare, 
  ChevronRight, 
  Clock 
} from 'lucide-react';

interface HomeSectionProps {
  onScrollTo: (sectionId: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onScrollTo }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollProgress = Math.min(scrollY / 320, 1);
  const heroImageScale = 1 + scrollProgress * 0.05;
  const heroImageBrightness = 1 - scrollProgress * 0.15;

  return (
    <section id="home" className="relative overflow-hidden">
      
      {/* 1. SCROLLING-STORY HERO SECTION */}
      <div className="relative min-h-[92vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        
        {/* Background Visual Carrier with Scrim and Subtle Parallax Scale */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <SafeImage
            src={IMAGES.hero}
            fallbacks={IMAGES.fallbacks.hero}
            alt="Xtreme Fitness DHA Phase 8 athletic interior"
            loading="eager"
            style={{
              transform: `scale(${heroImageScale})`,
              filter: `brightness(${heroImageBrightness})`,
            }}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
            containerClassName="w-full h-full opacity-40 sm:opacity-50"
          />
          {/* Subtle gradient scrim ensuring AAA contrast for typography */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/75 to-transparent pointer-events-none" />
        </div>

        {/* Top Kicker & Live Status */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold">
            <span>DHA Phase 8 · Lahore</span>
            <span className="text-slate-400">·</span>
            <span>Est. 24-Hour Center</span>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-900 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium">Floor Update:</span>
            <span className="text-slate-600">Trending busier than usual · Open 24 Hours</span>
          </div>
        </div>

        {/* Evolving Hero Headline */}
        <div className="relative z-10 max-w-5xl mx-auto w-full my-auto py-12">
          
          {/* Evolving Tagline - Progressive opacity based on scroll motion */}
          <div className="space-y-4">
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] text-balance">
              <span className="inline-block transition-opacity duration-300" style={{ opacity: Math.max(0.4, 0.4 + scrollProgress * 0.6) }}>
                Round-the-clock strength.
              </span>{' '}
              <span className="inline-block text-[#064E3B] transition-opacity duration-500" style={{ opacity: Math.max(0.6, 0.6 + scrollProgress * 0.4) }}>
                Uncompromising form.
              </span>
            </h1>

            <p className="max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
              Lahore’s premier 24-hour boutique athletic club in Block M, DHA Phase 8. Mentored personal training with Mehwish, Mishel, and Abdul Raheem, competition CrossFit rigs, and year-round athletic discipline.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-8">
            <button
              onClick={() => onScrollTo('contact')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#064E3B] hover:bg-[#043629] text-white font-medium text-sm rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
            >
              <span>Start Your Membership</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hi, I'd like to know more about membership at Xtreme Fitness"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-medium text-sm rounded-xl border border-slate-300 transition-colors shadow-xs whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-[#064E3B]" />
              <span>WhatsApp Coach Direct</span>
            </a>

            <button
              onClick={() => onScrollTo('story')}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors cursor-pointer"
            >
              <span>Explore The Facility</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. TRUST BAND WITH COUNTER REVEALS */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="space-y-1">
              <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#064E3B]">
                <CounterReveal value={4.8} decimals={1} />
                <span className="text-xl sm:text-2xl ml-0.5 text-slate-400">★</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">
                Verified Google Rating
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900">
                <CounterReveal value={274} decimals={0} />
                <span className="text-xl sm:text-2xl text-[#064E3B]">+</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">
                Members Strong & Reviewing
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#064E3B]">
                <CounterReveal value={24} decimals={0} />
                <span className="text-lg sm:text-xl font-sans text-slate-600 ml-1">Hours</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">
                Uninterrupted Access 365 Days
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900">
                <CounterReveal value={3} decimals={0} />
                <span className="text-lg sm:text-xl font-sans text-slate-600 ml-1">Resident</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">
                Master Form Coaches On-Site
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 3. TIMELINE TEASER: "A DAY AT XTREME" */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold mb-2">
            The 24-Hour Rhythm
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            A Day at Xtreme Fitness
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Most gyms lock their doors right when your schedule demands flexibility. At Xtreme, the energy shifts seamlessly from dawn lifters to late-night specialists without interruption.
          </p>
        </div>

        {/* Timeline Spine Presentation */}
        <div className="relative pl-6 sm:pl-10 space-y-12">
          
          {/* Continuous Vertical Line */}
          <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-6 w-[2px] bg-gradient-to-b from-[#064E3B] via-slate-400 to-slate-200" />

          {/* Time Slot 1: 05:00 AM */}
          <div className="relative pl-6 sm:pl-8 group">
            <div className="absolute -left-[19px] sm:-left-[23px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#064E3B] flex items-center justify-center shadow-xs">
              <div className="w-2 h-2 rounded-full bg-[#064E3B]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-1">
                <span className="text-xs font-mono font-bold text-[#064E3B] tracking-wider uppercase">05:00 — 08:30 AM</span>
                <h3 className="font-editorial text-xl font-bold text-slate-900 mt-1">Dawn Strength & Executives</h3>
                <p className="text-xs text-slate-600 mt-1">Crisp morning air, chalk-loaded barbells, zero queue for Olympic platforms.</p>
              </div>
              <div className="md:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <p className="text-sm text-slate-800 leading-relaxed">
                  Surgeons, entrepreneurs, and athletes arrive for dedicated barbell work before Lahore traffic builds. Abdul Raheem and Mehwish take the floor for scheduled 1-on-1 form sessions.
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
                  <span className="font-medium text-[#064E3B]">Coaches On-Floor:</span>
                  <span>Abdul Raheem & Mehwish</span>
                </div>
              </div>
            </div>
          </div>

          {/* Time Slot 2: 12:00 PM */}
          <div className="relative pl-6 sm:pl-8 group">
            <div className="absolute -left-[19px] sm:-left-[23px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-slate-400 flex items-center justify-center shadow-xs">
              <div className="w-2 h-2 rounded-full bg-slate-400" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-1">
                <span className="text-xs font-mono font-bold text-[#064E3B] tracking-wider uppercase">11:30 AM — 02:30 PM</span>
                <h3 className="font-editorial text-xl font-bold text-slate-900 mt-1">Focused Midday Conditioning</h3>
                <p className="text-xs text-slate-600 mt-1">Uncrowded floor, deliberate mobility drills, and targeted lifting blocks.</p>
              </div>
              <div className="md:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <p className="text-sm text-slate-800 leading-relaxed">
                  An ideal pocket for remote founders and professionals working flexible hours. Quiet music, open sled tracks, and detailed posture screens.
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
                  <span className="font-medium text-[#064E3B]">Occupancy Index:</span>
                  <span>Quiet (~32% floor capacity)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Time Slot 3: 06:30 PM */}
          <div className="relative pl-6 sm:pl-8 group">
            <div className="absolute -left-[19px] sm:-left-[23px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#064E3B] flex items-center justify-center shadow-xs">
              <div className="w-2 h-2 rounded-full bg-[#064E3B]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-1">
                <span className="text-xs font-mono font-bold text-[#064E3B] tracking-wider uppercase">06:00 — 09:30 PM</span>
                <h3 className="font-editorial text-xl font-bold text-slate-900 mt-1">CrossFit WOD & Prime Energy</h3>
                <p className="text-xs text-slate-600 mt-1">High-velocity team conditioning led by Coach Mishel.</p>
              </div>
              <div className="md:col-span-2 bg-white p-5 rounded-xl border border-[#064E3B]/30 bg-gradient-to-br from-white to-slate-50 shadow-xs">
                <p className="text-sm text-slate-800 leading-relaxed">
                  The gym reaches its peak community atmosphere. Daily Workouts of the Day (WOD) bring competitive push and athletic accountability across kettlebells, rowers, and barbell cycling.
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
                  <span className="font-medium text-[#064E3B]">Live Status:</span>
                  <span className="text-[#064E3B] font-semibold">Currently trending busier than usual</span>
                </div>
              </div>
            </div>
          </div>

          {/* Time Slot 4: 01:00 AM */}
          <div className="relative pl-6 sm:pl-8 group">
            <div className="absolute -left-[19px] sm:-left-[23px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-slate-600 flex items-center justify-center shadow-xs">
              <div className="w-2 h-2 rounded-full bg-slate-600" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-1">
                <span className="text-xs font-mono font-bold text-[#064E3B] tracking-wider uppercase">11:00 PM — 04:00 AM</span>
                <h3 className="font-editorial text-xl font-bold text-slate-900 mt-1">Late-Night Deep Focus</h3>
                <p className="text-xs text-slate-600 mt-1">Serene ambient lighting, undisturbed racks, and pure athletic meditation.</p>
              </div>
              <div className="md:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <p className="text-sm text-slate-800 leading-relaxed">
                  For shift workers, night owls, and athletes during Ramadan fasting. Completely secure biometric access with attentive night security on grounds.
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
                  <span className="font-medium text-[#064E3B]">Access Standard:</span>
                  <span>Biometric Smart Key & Secure Parking</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
