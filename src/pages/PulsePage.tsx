import React, { useState } from 'react';
import { HOURLY_PULSE, GYM_INFO } from '../data/gymData';
import { Clock, Flame } from 'lucide-react';

interface PulseSectionProps {
  onScrollTo: (sectionId: string) => void;
}

export const PulseSection: React.FC<PulseSectionProps> = ({ onScrollTo }) => {
  const [selectedHour, setSelectedHour] = useState<number>(20); // Default to evening peak 8:00 PM
  const [selectedDay, setSelectedDay] = useState<string>('Monday - Thursday');

  const currentHourData = HOURLY_PULSE.find((h) => h.hour === selectedHour) || HOURLY_PULSE[0];

  return (
    <section id="pulse" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16 border-t border-slate-200">
      
      {/* 1. Header & Live Indicator */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-800 shadow-2xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-[#064E3B]">Live Sensor Stream:</span>
            <span className="font-medium text-slate-900">Trending Busier Than Usual</span>
          </div>
          <span className="text-xs font-mono text-slate-500">DHA Phase 8 Turnstile Stream</span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
          Live Gym Pulse & 24-Hour Occupancy Index.
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Plan your training sessions with mathematical clarity. Our live occupancy tracking helps you select quiet, undisturbed platforms or vibrant, high-energy group environments around the clock.
        </p>
      </div>

      {/* 2. Interactive Occupancy Dashboard */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-10">
        
        {/* Controls: Day Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <h3 className="font-editorial text-2xl font-bold text-slate-900">
              Typical Hourly Density
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Select time slot to preview platform availability and floor rhythm.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs">
            {['Monday - Thursday', 'Friday (Jummah Rhythm)', 'Saturday - Sunday'].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  selectedDay === day
                    ? 'bg-white text-[#064E3B] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bar Chart across 24 Hours */}
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-2 h-48 pt-6 px-2">
            {HOURLY_PULSE.map((item) => {
              const isSelected = item.hour === selectedHour;
              const isPeak = item.typicalLevel > 80;
              const isQuiet = item.typicalLevel < 35;

              return (
                <button
                  key={item.hour}
                  onClick={() => setSelectedHour(item.hour)}
                  className="flex-1 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer"
                  title={`${item.label}: ${item.typicalLevel}% typical density`}
                >
                  {/* Occupancy Bar */}
                  <div
                    style={{ height: `${item.typicalLevel}%` }}
                    className={`w-full max-w-[32px] rounded-t-md transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#064E3B] ring-2 ring-[#064E3B]/30 scale-105'
                        : isPeak
                        ? 'bg-slate-400 group-hover:bg-[#064E3B]/70'
                        : isQuiet
                        ? 'bg-slate-200 group-hover:bg-slate-300'
                        : 'bg-slate-300 group-hover:bg-[#064E3B]/50'
                    }`}
                  />
                  {/* Hour Label */}
                  <span
                    className={`text-[10px] font-mono whitespace-nowrap transition-colors ${
                      isSelected ? 'font-bold text-[#064E3B]' : 'text-slate-500'
                    }`}
                  >
                    {item.label.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 px-2 border-t border-slate-100 font-mono">
            <span>12:00 AM (Midnight)</span>
            <span>12:00 PM (Noon)</span>
            <span>10:00 PM (Late Night)</span>
          </div>
        </div>

        {/* Selected Hour Diagnostic Spotlight */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#064E3B]">
              Selected Time Window
            </span>
            <div className="font-editorial text-3xl font-bold text-slate-900">
              {currentHourData.label}
            </div>
            <div className="text-xs text-slate-500">
              {selectedDay}
            </div>
          </div>

          <div className="space-y-1 md:border-l md:border-slate-200 md:pl-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Floor Capacity Level
            </span>
            <div className="font-editorial text-3xl font-bold text-[#064E3B] tabular-nums">
              {currentHourData.typicalLevel}%
            </div>
            <div className="text-xs text-slate-800 font-medium">
              {currentHourData.typicalLevel > 80
                ? 'High Community Energy · CrossFit Prime'
                : currentHourData.typicalLevel < 35
                ? 'High Availability · Platforms Wide Open'
                : 'Balanced Floor · Fluid Rotation'}
            </div>
          </div>

          <div className="space-y-2 md:border-l md:border-slate-200 md:pl-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Coach Insight
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              {currentHourData.description}
            </p>
          </div>

        </div>

      </div>

      {/* 3. Recommended Training Windows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono text-[#064E3B] font-semibold uppercase">
            <Clock className="w-4 h-4" />
            <span>Late Night Window</span>
          </div>
          <h4 className="font-editorial text-xl font-bold text-slate-900">
            11:00 PM — 04:30 AM
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Perfect for solitary heavy lifts, shift workers, and Ramadan athletes. Complete freedom across all barbell racks with zero wait times.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono text-[#064E3B] font-semibold uppercase">
            <Clock className="w-4 h-4" />
            <span>Midday Focus Window</span>
          </div>
          <h4 className="font-editorial text-xl font-bold text-slate-900">
            10:30 AM — 02:00 PM
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Quiet, focused hours ideal for detailed movement analysis with our coaches or quick 45-minute superset training.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#064E3B]/30 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono text-[#064E3B] font-semibold uppercase">
            <Flame className="w-4 h-4" />
            <span>High-Octane Peak</span>
          </div>
          <h4 className="font-editorial text-xl font-bold text-slate-900">
            06:00 PM — 09:30 PM
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Vibrant community energy. Coach Mishel’s CrossFit WODs run simultaneously with personal training sessions.
          </p>
        </div>

      </div>

    </section>
  );
};
