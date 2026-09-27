import React from 'react';
import { MEMBER_STORIES, GYM_INFO } from '../data/gymData';
import { CounterReveal } from '../components/CounterReveal';
import { Star } from 'lucide-react';

interface ReviewsSectionProps {
  onScrollTo: (sectionId: string) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onScrollTo }) => {
  return (
    <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20 border-t border-slate-200">
      
      {/* 1. Header with Trust Metrics */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold">
          Proven Outcomes · Real Athletes
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
          Stories of discipline, correct mechanics, and consistency.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          From busy surgeons fixing postural strain to professionals building confidence with heavy barbells, read how our 24-hour facility and resident coaches have helped members achieve lasting athletic sovereignty.
        </p>

        {/* 4.8★ / 274 Reviews Trust Metric Banner */}
        <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-editorial text-3xl font-bold text-[#064E3B]">
              <CounterReveal value={4.8} decimals={1} />
            </span>
            <div className="text-xs">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
              <span className="text-slate-500">Average Rating</span>
            </div>
          </div>

          <div className="w-px h-8 bg-slate-200" />

          <div>
            <span className="font-editorial text-3xl font-bold text-slate-900">
              <CounterReveal value={274} decimals={0} />
            </span>
            <span className="text-xs text-slate-500 block">Verified Google Reviews</span>
          </div>

          <div className="w-px h-8 bg-slate-200" />

          <div>
            <span className="font-editorial text-3xl font-bold text-[#064E3B]">100%</span>
            <span className="text-xs text-slate-500 block">Authentic Member Reflections</span>
          </div>
        </div>
      </div>

      {/* 2. In-Depth Member Narrative Cards */}
      <div className="space-y-12">
        {MEMBER_STORIES.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-[#064E3B]/50 transition-colors"
          >
            {/* Left Column: Author Meta & Proof Metric */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <h3 className="font-editorial text-2xl font-bold text-slate-900">
                  {story.name}
                </h3>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {story.occupation}
                </div>
                <div className="text-[11px] font-mono text-[#064E3B] uppercase tracking-wider mt-1 font-semibold">
                  {story.tenure}
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Assigned Coach
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {story.coach}
                </span>
              </div>

              {/* Quantified Achievement Metric */}
              <div className="p-4 bg-[#064E3B]/5 rounded-xl border border-[#064E3B]/20">
                <div className="font-editorial text-3xl font-bold text-[#064E3B] tabular-nums">
                  {story.keyMetric}
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  {story.metricLabel}
                </div>
              </div>
            </div>

            {/* Right Column: Paraphrased Review Narrative */}
            <div className="lg:col-span-8 space-y-4 lg:border-l lg:border-slate-100 lg:pl-8">
              <h4 className="font-editorial text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                "{story.headline}"
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {story.narrative}
              </p>
              <div className="pt-4 flex items-center gap-2 text-xs text-slate-400">
                <span>Verified DHA Phase 8 Member</span>
                <span>·</span>
                <span>Paraphrased from public review records</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Community Call to Action */}
      <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
            Start writing your own strength narrative.
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Begin with a comprehensive initial movement audit. Our team will review your lifting mechanics, set measurable milestones, and match you with the ideal coach.
          </p>
        </div>
        <button
          onClick={() => onScrollTo('contact')}
          className="px-6 py-3.5 bg-[#064E3B] hover:bg-[#043629] text-white font-semibold text-xs rounded-xl transition-colors shrink-0 cursor-pointer shadow-xs"
        >
          Book Your Movement Audit
        </button>
      </div>

    </section>
  );
};
