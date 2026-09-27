import React from 'react';
import { COACHES, GYM_INFO, IMAGES } from '../data/gymData';
import { CounterReveal } from '../components/CounterReveal';
import { CheckCircle2, MessageSquare } from 'lucide-react';

interface CoachesSectionProps {
  onScrollTo: (sectionId: string) => void;
  onSelectCoachForJoin?: (coachName: string) => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ onScrollTo, onSelectCoachForJoin }) => {
  const handleBookCoach = (coachName: string) => {
    if (onSelectCoachForJoin) {
      onSelectCoachForJoin(coachName);
    }
    onScrollTo('contact');
  };

  return (
    <section id="coaches" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20 border-t border-slate-200">
      
      {/* 1. Header & Coaching Ethos */}
      <div className="max-w-3xl">
        <div className="text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold mb-2">
          Unique Value · The Mentorship Standard
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
          Meet the coaches shaping Lahore’s lifting culture.
        </h2>
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
          At Xtreme Fitness, personal training is never generic rep-counting. Our resident coaches—Mehwish, Mishel, and Abdul Raheem—are widely recognized in DHA Phase 8 for precise biomechanical corrections, disciplined accountability, and creating confident, injury-free athletes.
        </p>
      </div>

      {/* 2. Form Spotting Visual Spotlight */}
      <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[420px]">
            <img
              src={IMAGES.coaching}
              alt="Hands-on coaching and barbell spotting"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 hidden lg:block" />
          </div>
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold">
              The Coaching Philosophy
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
              Technique before load. Longevity before ego.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every repetition under our supervision starts with foot pressure, bracing mechanics, and joint alignment. Whether you are aiming for a 200kg deadlift or learning your first kettlebell swing, our coaches ensure your nervous system learns correct movement patterns that protect your back and joints for life.
            </p>
            <div className="flex items-center gap-6 pt-4 text-xs font-medium text-slate-900">
              <div>
                <span className="font-bold text-[#064E3B] text-xl font-editorial block">
                  <CounterReveal value={24} />h
                </span>
                <span>Coaching Flexibility</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <span className="font-bold text-[#064E3B] text-xl font-editorial block">
                  <CounterReveal value={100} />%
                </span>
                <span>Hands-On Spotting</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <span className="font-bold text-[#064E3B] text-xl font-editorial block">Zero</span>
                <span>Rushed Progression</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Detailed Profiles: Abdul Raheem, Mehwish, Mishel */}
      <div className="space-y-12">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="font-editorial text-3xl font-bold text-slate-900">
            Resident Head Coaches
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Paraphrased reflections from 274 member reviews highlight their patience, professionalism, and biomechanical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-between shadow-xs hover:border-[#064E3B] transition-colors group"
            >
              <div className="space-y-6">
                
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-mono">
                    <span className="text-[#064E3B] font-semibold">{coach.role}</span>
                    <span className="tabular-nums">{coach.experienceYears}+ Years Exp</span>
                  </div>
                  <h4 className="font-editorial text-2xl font-bold text-slate-900 group-hover:text-[#064E3B] transition-colors">
                    {coach.name}
                  </h4>
                  <div className="text-xs font-medium text-slate-600 mt-1">
                    {coach.specialty}
                  </div>
                </div>

                {/* Sentiment Block (Reflecting Real Member Reviews) */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-800 italic leading-relaxed">
                  "{coach.sentimentQuote}"
                </div>

                {/* Bio Prose */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {coach.bio}
                </p>

                {/* Focus Areas */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Specialized Competencies
                  </span>
                  <div className="space-y-1.5">
                    {coach.focusAreas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B] shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => handleBookCoach(coach.name)}
                  className="w-full py-2.5 bg-[#064E3B] hover:bg-[#043629] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center"
                >
                  Train With {coach.name.split(' ')[0]}
                </button>
                <a
                  href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                    `Hi, I would like to inquire about personal coaching with ${coach.name} at Xtreme Fitness DHA Phase 8`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-slate-600 hover:text-[#064E3B] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Coach Inquiry</span>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 4. Consultation Banner */}
      <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-lg">
        <div className="space-y-2 max-w-xl">
          <h4 className="font-editorial text-2xl sm:text-3xl font-bold">
            Not sure which coach aligns with your goals?
          </h4>
          <p className="text-sm text-slate-300">
            Our head desk will conduct a brief 10-minute diagnostic over WhatsApp to match your injury history, training schedule, and target milestones with the right coach.
          </p>
        </div>
        <button
          onClick={() => onScrollTo('contact')}
          className="px-6 py-3.5 bg-white hover:bg-slate-100 text-[#064E3B] text-xs font-bold rounded-xl transition-colors shrink-0 cursor-pointer shadow-sm"
        >
          Request Coach Match
        </button>
      </div>

    </section>
  );
};
