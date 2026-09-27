import React from 'react';
import { PROGRAMS, GYM_INFO, IMAGES } from '../data/gymData';
import { SafeImage } from '../components/SafeImage';
import { CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

interface ProgramsSectionProps {
  onScrollTo: (sectionId: string) => void;
  onSelectProgramForJoin?: (programName: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onScrollTo, onSelectProgramForJoin }) => {
  const handleSelectProgram = (programName: string) => {
    if (onSelectProgramForJoin) {
      onSelectProgramForJoin(programName);
    }
    onScrollTo('contact');
  };

  return (
    <section id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20 border-t border-slate-200">
      
      {/* 1. Header */}
      <div className="max-w-3xl">
        <div className="text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold mb-2">
          Disciplines & Tracks
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
          Training programs designed around movement mastery.
        </h2>
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
          We reject gimmicky routines. Every program at Xtreme Fitness is anchored in biomechanics, progressive loading, and measurable stamina. Choose the track that fits your athletic ambitions.
        </p>
      </div>

      {/* 2. Visual Highlight: CrossFit & Functional Conditioning */}
      <div className="relative rounded-3xl overflow-hidden bg-[#0F172A] text-white p-8 sm:p-12 shadow-xl border border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
              Signature Community Track
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold">
              CrossFit & High-Output Athletic Conditioning
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Led by Coach Mishel, our CrossFit floor brings genuine functional athletic training to DHA Phase 8. From Olympic barbell snatches and clean-and-jerks to rope climbs, heavy wall balls, and ergometer intervals, every workout is scaled to match your current mechanical capacity.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs">
              <span className="px-3 py-1 bg-white/10 rounded-full text-slate-200">Daily Scaled WODs</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-slate-200">Turf Track Sleds</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-slate-200">Concept2 Row & Bike</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div
              className="rounded-2xl overflow-hidden shadow-md border border-slate-700 aspect-[4/3] min-h-[280px] bg-slate-900"
              style={{ aspectRatio: '4/3', minHeight: '280px' }}
            >
              <SafeImage
                src={IMAGES.crossfit}
                fallbacks={IMAGES.fallbacks.crossfit}
                alt="CrossFit training on turf track"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. TIMELINE-BRANCH PRESENTATION OF PROGRAMS (NOT A GRID) */}
      <div className="space-y-12">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="font-editorial text-3xl font-bold text-slate-900">
            The 4 Core Training Tracks
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Structured along our 24-hour training continuum, each track operates with dedicated coaching oversight.
          </p>
        </div>

        {/* Timeline Spine Structure */}
        <div className="relative pl-6 sm:pl-12 space-y-16">
          {/* Continuous Vertical Spine */}
          <div className="absolute left-[11px] sm:left-[17px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#064E3B] via-slate-400 to-slate-200" />

          {PROGRAMS.map((prog, index) => (
            <div key={prog.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Node Pip */}
              <div className="absolute -left-[20px] sm:-left-[24px] top-2 w-7 h-7 rounded-full bg-white border-2 border-[#064E3B] flex items-center justify-center shadow-xs transition-transform group-hover:scale-110">
                <span className="text-[10px] font-mono font-bold text-[#064E3B]">0{index + 1}</span>
              </div>

              {/* Branch Content Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs hover:border-[#064E3B]/60 transition-all">
                
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#064E3B] tracking-wider uppercase">
                      {prog.timelineSlot}
                    </span>
                    <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                      {prog.name}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {prog.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-[11px] font-mono uppercase px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-slate-800">
                      Intensity: {prog.intensity}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {prog.description}
                </p>

                {/* Deliverables & Coaches */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Program Deliverables
                    </span>
                    <ul className="space-y-2">
                      {prog.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B] mt-0.5 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#064E3B] font-semibold block mb-1">
                        Coaching Roster
                      </span>
                      <p className="text-xs text-slate-800">
                        Supervised directly by: <span className="font-semibold">{prog.coaches.join(', ')}</span>
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                      <button
                        onClick={() => handleSelectProgram(prog.name)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] hover:text-[#043629] cursor-pointer"
                      >
                        <span>Join This Track</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                          `Hi, I'm inquiring about the ${prog.name} program at Xtreme Fitness DHA Phase 8`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-600 hover:text-[#064E3B] flex items-center gap-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 4. Seasonal Ramadan Note Link */}
      <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold">
            Seasonal Programming
          </span>
          <h4 className="font-editorial text-2xl font-bold text-slate-900 mt-1">
            Looking for the Ramadan Boot Camp 2026?
          </h4>
          <p className="text-xs text-slate-600 mt-1">
            Fasting schedules, pre-suhoor lifting, and post-taraweeh conditioning cohorts are detailed below.
          </p>
        </div>
        <button
          onClick={() => onScrollTo('seasonal')}
          className="px-5 py-3 bg-[#064E3B] hover:bg-[#043629] text-white text-xs font-semibold rounded-xl transition-colors shrink-0 cursor-pointer"
        >
          View Ramadan Schedule ↓
        </button>
      </div>

    </section>
  );
};
