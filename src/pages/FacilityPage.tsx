import React from 'react';
import { GYM_INFO, IMAGES } from '../data/gymData';
import { CheckCircle2 } from 'lucide-react';

interface FacilitySectionProps {
  onScrollTo: (sectionId: string) => void;
}

export const FacilitySection: React.FC<FacilitySectionProps> = ({ onScrollTo }) => {
  return (
    <section id="story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20 border-t border-slate-200">
      
      {/* 1. Facility Header & Story */}
      <div className="max-w-3xl">
        <div className="text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold mb-2">
          The Facility · DHA Phase 8 Lahore
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
          Engineered for athletic performance, open without closing hours.
        </h2>
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
          Situated in Block M Air Avenue (Ex Air Avenue), Xtreme Fitness was conceived as an antidote to crowded, curfew-bound commercial gyms. We built an intentional training sanctuary where serious lifters, busy surgeons, night executives, and CrossFit athletes have total ownership of their training hours.
        </p>
      </div>

      {/* 2. Photo-Led Facility Grid */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden aspect-4/3 group shadow-md border border-slate-200">
            <img
              src={IMAGES.hero}
              alt="Main barbell floor with warm morning sunlight"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-300 font-semibold">
                Olympic Lifting Zone
              </span>
              <h3 className="font-editorial text-2xl font-bold mt-1">Calibrated Steel & Precision Platforms</h3>
              <p className="text-xs text-slate-200 mt-1">
                Hardwood insert platforms, high-tensile barbells, calibrated steel and rubber bumper plates up to 450kg capacity per station.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-4/3 group shadow-md border border-slate-200">
            <img
              src={IMAGES.lateNight}
              alt="Serene late-night training floor at midnight"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-300 font-semibold">
                24-Hour Access Reality
              </span>
              <h3 className="font-editorial text-2xl font-bold mt-1">Undisturbed Midnight Atmosphere</h3>
              <p className="text-xs text-slate-200 mt-1">
                Peaceful, warm ambient illumination and zero wait times. Train at 1:00 AM or 4:00 AM with complete peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Triple Feature Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <div className="font-editorial text-2xl font-bold text-[#064E3B]">60kg+</div>
            <div className="text-sm font-semibold text-slate-900 mt-1">Dumbbell Rack Capacity</div>
            <p className="text-xs text-slate-600 mt-2">
              Heavy dumbbell pairs stepping in 2kg increments, paired with adjustable competition incline and flat benches.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <div className="font-editorial text-2xl font-bold text-[#064E3B]">25m</div>
            <div className="text-sm font-semibold text-slate-900 mt-1">High-Traction Turf Track</div>
            <p className="text-xs text-slate-600 mt-2">
              Dedicated indoor turf for heavy prowler sled pushes, farmer walks, sprint starts, and kettlebell dynamics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <div className="font-editorial text-2xl font-bold text-[#064E3B]">24/7/365</div>
            <div className="text-sm font-semibold text-slate-900 mt-1">Biometric Security Gate</div>
            <p className="text-xs text-slate-600 mt-2">
              Optical fingerprint authentication, 24-hour on-duty facility supervisor, and private monitored parking.
            </p>
          </div>
        </div>
      </div>

      {/* 3. The 24-Hour Differentiator: Why It Matters in Lahore */}
      <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold">
              The Strategic Differentiator
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900">
              Why round-the-clock access rewrites your fitness trajectory.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In Lahore, life is not built on a rigid 9-to-5 template. Between late family dinners, high-pressure medical residencies, international tech calls, and nighttime religious devotions during Ramadan, rigid gym hours become the primary point of failure for consistency.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] mt-1 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-800">
                  <strong className="text-[#064E3B]">Zero Crowding Friction:</strong> Train at 05:15 AM or 11:30 PM and never wait for a squat rack or cable pulley.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] mt-1 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-800">
                  <strong className="text-[#064E3B]">Ramadan Ready:</strong> Train before Sehri (03:30 AM) or after Taraweeh without negotiating special permission or holiday closures.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] mt-1 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-800">
                  <strong className="text-[#064E3B]">Complete Security:</strong> Continuous gatekeeper and CCTV monitoring in DHA Phase 8 Block M Air Avenue ensures safe access at any hour.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h4 className="font-editorial text-xl font-bold text-slate-900">
              Visit or Tour the Floor
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We welcome prospective members to walk the floor, test bar knurling, and discuss training goals with our resident coaches.
            </p>
            <div className="space-y-2 pt-2">
              <button
                onClick={() => onScrollTo('contact')}
                className="w-full py-3 bg-[#064E3B] hover:bg-[#043629] text-white font-medium text-xs rounded-xl transition-colors cursor-pointer text-center"
              >
                Schedule an Assessment Walkthrough
              </button>
              <button
                onClick={() => onScrollTo('pulse')}
                className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-300 font-medium text-xs rounded-xl transition-colors cursor-pointer text-center"
              >
                Check Live Occupancy First
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
