import React from 'react';
import { RAMADAN_BOOTCAMP, GYM_INFO, IMAGES } from '../data/gymData';
import { SafeImage } from '../components/SafeImage';
import { CheckCircle2, Clock, Moon, MessageSquare } from 'lucide-react';

interface SeasonalSectionProps {
  onScrollTo: (sectionId: string) => void;
  onSelectProgramForJoin?: (programName: string) => void;
}

export const SeasonalSection: React.FC<SeasonalSectionProps> = ({ onScrollTo, onSelectProgramForJoin }) => {
  const handleJoinRamadan = () => {
    if (onSelectProgramForJoin) {
      onSelectProgramForJoin('Ramadan Boot Camp 2026');
    }
    onScrollTo('contact');
  };

  return (
    <section id="seasonal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20 border-t border-slate-200">
      
      {/* 1. Header */}
      <div className="max-w-3xl">
        <div className="text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold mb-2">
          Featured Visual Story · Seasonal Intensives
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
          Ramadan Boot Camp 2026: Fasting & Functional Strength.
        </h2>
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
          {RAMADAN_BOOTCAMP.anchorLine}
        </p>
      </div>

      {/* 2. Photo Spotlight on Ramadan Camp */}
      <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px] bg-slate-900 overflow-hidden">
            <SafeImage
              src={IMAGES.bootcamp}
              fallbacks={IMAGES.fallbacks.bootcamp}
              alt="Athletes training during Ramadan twilight session"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none flex flex-col justify-end p-6 text-white lg:hidden">
              <span className="text-xs uppercase font-mono font-semibold text-emerald-400">Ramadan 2026 Cohort</span>
              <h3 className="font-editorial text-xl font-bold">Synchronized with Lahore's Fasting Hours</h3>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold">
              <Moon className="w-4 h-4 text-[#064E3B]" />
              <span>30 Days of Structured Precision</span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
              Why our 24-hour facility makes fasting fitness effortless.
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              In commercial gyms that close at 10 PM, Ramadan fitness becomes an impossible compromise. At Xtreme Fitness, our 24-hour floor operates at peak vitality before Suhoor and following night prayers, allowing you to train when your body is fully fueled and hydrated.
            </p>

            <div className="space-y-3 pt-2">
              {RAMADAN_BOOTCAMP.pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#064E3B] mt-1 shrink-0" />
                  <div>
                    <strong className="text-xs text-slate-900 block">{pillar.title}</strong>
                    <span className="text-xs text-slate-600">{pillar.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={handleJoinRamadan}
                className="px-6 py-3 bg-[#064E3B] hover:bg-[#043629] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                Enroll in Ramadan Cohort 2026
              </button>
              <a
                href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hi, I'd like details on the Ramadan Boot Camp 2026 schedule and nutrition guide"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#064E3B]" />
                <span>WhatsApp Boot Camp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. A Ramadan Boot Camp Day & Week Breakdown */}
      <div className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="font-editorial text-3xl font-bold text-slate-900">
            The Two Daily Fasting Tracks
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Choose either track based on your work schedule and circadian rhythm. Both are fully coached by Mishel and Mehwish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Track 1: Pre-Suhoor */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#064E3B]">
                <Clock className="w-4 h-4" />
                <span>03:15 AM — 04:30 AM</span>
              </div>
              <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 bg-slate-100 rounded text-slate-800">
                Pre-Suhoor
              </span>
            </div>
            <h4 className="font-editorial text-2xl font-bold text-slate-900">
              Track A: The Pre-Suhoor Strength Cohort
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Designed for lifters who prefer training with clean focus before the dawn fast begins. We conduct heavy compound lifts (squats, bench, deadlifts) with adequate rest intervals. Immediately following the session, members consume their protein-dense Suhoor meal and electrolyte replenishment.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-800 space-y-1 border border-slate-100">
              <div className="font-semibold text-[#064E3B]">Coaching Focus:</div>
              <div>Low central fatigue, heavy mechanical tension, prompt nutritional transition.</div>
            </div>
          </div>

          {/* Track 2: Post-Taraweeh */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#064E3B]">
                <Moon className="w-4 h-4" />
                <span>10:30 PM — 12:00 AM</span>
              </div>
              <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 bg-slate-100 rounded text-slate-800">
                Post-Taraweeh
              </span>
            </div>
            <h4 className="font-editorial text-2xl font-bold text-slate-900">
              Track B: Post-Taraweeh Athletic Conditioning
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our most energetic evening cohort. Commencing after evening prayers and Iftar digestion, Coach Mishel runs high-output CrossFit WODs, kettlebell rounds, and cardiovascular capacity work on fully fueled glycogen stores.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-800 space-y-1 border border-slate-100">
              <div className="font-semibold text-[#064E3B]">Coaching Focus:</div>
              <div>Metabolic burn, team sweat, cardiovascular preservation, aerobic endurance.</div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Future Seasonal Programs Format */}
      <div className="space-y-6 pt-4">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="font-editorial text-2xl font-bold text-slate-900">
            Upcoming Seasonal Cohorts
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Xtreme Fitness runs cyclical intensives throughout the year to break plateaus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-[#064E3B] uppercase">Summer 2026 Intensive</span>
              <h4 className="font-editorial text-xl font-bold text-slate-900">Summer Athletic Shred</h4>
              <p className="text-xs text-slate-600">
                An 8-week progressive metabolic overhaul focused on body fat reduction and athletic power output.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Registration Opens May 2026</span>
              <a
                href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hi, please add me to the waitlist for the Summer 2026 Athletic Shred"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#064E3B] hover:underline"
              >
                Join Waitlist
              </a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-[#064E3B] uppercase">Annual Reset</span>
              <h4 className="font-editorial text-xl font-bold text-slate-900">New Year Biomechanical Reset</h4>
              <p className="text-xs text-slate-600">
                Joint mobility audit, squat depth reconstruction, and injury prevention clinic with Abdul Raheem.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Next Intake: Dec 2026</span>
              <a
                href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hi, please send me details about the Biomechanical Reset clinic"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#064E3B] hover:underline"
              >
                Notify Me
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
