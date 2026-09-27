import React from 'react';
import { MEMBERSHIP_TIERS, GYM_INFO } from '../data/gymData';
import { CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

interface MembershipSectionProps {
  onScrollTo: (sectionId: string) => void;
  onSelectTierForJoin?: (tierName: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onScrollTo, onSelectTierForJoin }) => {
  const handleSelectPlan = (tierName: string) => {
    if (onSelectTierForJoin) {
      onSelectTierForJoin(tierName);
    }
    onScrollTo('contact');
  };

  return (
    <section id="membership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20 border-t border-slate-200">
      
      {/* 1. Header */}
      <div className="max-w-3xl">
        <div className="text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold mb-2">
          Process · How It Works
        </div>
        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
          Transparent membership tiers, zero hidden enrollment fees.
        </h2>
        <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
          Every tier grants biometric 24-hour access to our DHA Phase 8 facility. Whether you prefer independent midnight sessions or comprehensive daily coaching with our master trainers, choose the level of involvement that accelerates your progress.
        </p>
      </div>

      {/* 2. PLANS PRESENTED ALONG THE TIMELINE SPINE (NOT FLAT BOXES) */}
      <div className="space-y-12">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="font-editorial text-3xl font-bold text-slate-900">
            Membership Progression Continuum
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Follow the path from independent floor freedom to direct 1-on-1 athletic mentorship.
          </p>
        </div>

        {/* Timeline Spine Structure */}
        <div className="relative pl-6 sm:pl-12 space-y-16">
          {/* Continuous Vertical Spine */}
          <div className="absolute left-[11px] sm:left-[17px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#064E3B] via-slate-400 to-slate-200" />

          {MEMBERSHIP_TIERS.map((tier, index) => (
            <div key={tier.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Node */}
              <div
                className={`absolute -left-[20px] sm:-left-[24px] top-2 w-7 h-7 rounded-full bg-white border-2 ${
                  tier.popular ? 'border-[#064E3B] bg-[#064E3B] text-white' : 'border-[#064E3B] text-[#064E3B]'
                } flex items-center justify-center shadow-xs transition-transform group-hover:scale-110`}
              >
                <span className="text-[10px] font-mono font-bold">0{index + 1}</span>
              </div>

              {/* Branch Container */}
              <div
                className={`bg-white rounded-2xl border ${
                  tier.popular ? 'border-[#064E3B] ring-1 ring-[#064E3B]/30' : 'border-slate-200'
                } p-6 sm:p-8 space-y-6 shadow-xs hover:border-[#064E3B] transition-all`}
              >
                
                {/* Header Strip with Price */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-[#064E3B] uppercase tracking-wider">
                        {tier.badge}
                      </span>
                    </div>
                    <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                      {tier.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {tier.description}
                    </p>
                  </div>

                  <div className="text-left sm:text-right shrink-0">
                    <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#064E3B] tabular-nums">
                      PKR {tier.price}
                    </div>
                    <div className="text-xs text-slate-500 font-medium font-mono">
                      Per Month · Billed Monthly
                    </div>
                  </div>
                </div>

                {/* Features & Recommended For */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  <div className="md:col-span-8 space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Included Privileges
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B] mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#064E3B] font-semibold block mb-1">
                        Best Suited For
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {tier.recommendedFor}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <button
                        onClick={() => handleSelectPlan(tier.name)}
                        className={`w-full py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer text-center ${
                          tier.popular
                            ? 'bg-[#064E3B] hover:bg-[#043629] text-white shadow-xs'
                            : 'bg-slate-900 hover:bg-black text-white'
                        }`}
                      >
                        Enroll in {tier.name.split(' ')[0]}
                      </button>

                      <a
                        href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                          `Hi, I would like to join the ${tier.name} plan (PKR ${tier.price}/month) at Xtreme Fitness DHA Phase 8`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs text-slate-600 hover:text-[#064E3B] transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Confirm via WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Value Comparison Table */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
        <div>
          <h3 className="font-editorial text-2xl font-bold text-slate-900">
            Side-by-Side Tier Breakdown
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Compare essential privileges across all membership tiers at a glance.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900 font-mono uppercase tracking-wider">
                <th className="py-3 pr-4 font-semibold">Club Privilege</th>
                <th className="py-3 px-4 font-semibold">24/7 Floor Access</th>
                <th className="py-3 px-4 font-semibold text-[#064E3B]">Access + Classes</th>
                <th className="py-3 pl-4 font-semibold">Personal Coaching</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-900">24-Hour Biometric Access 365 Days</td>
                <td className="py-3 px-4">Included</td>
                <td className="py-3 px-4 font-semibold text-slate-900">Included</td>
                <td className="py-3 pl-4 font-semibold text-slate-900">Included</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-900">Olympic Lifting & Calibrated Benches</td>
                <td className="py-3 px-4">Included</td>
                <td className="py-3 px-4 font-semibold text-slate-900">Included</td>
                <td className="py-3 pl-4 font-semibold text-slate-900">Included</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-900">Daily CrossFit WODs & Erg Conditioning</td>
                <td className="py-3 px-4 text-slate-300">—</td>
                <td className="py-3 px-4 font-semibold text-[#064E3B]">Unlimited</td>
                <td className="py-3 pl-4 font-semibold text-slate-900">Unlimited</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-900">Ramadan Boot Camp 2026 Eligibility</td>
                <td className="py-3 px-4 text-slate-300">Add-on Fee</td>
                <td className="py-3 px-4 font-semibold text-[#064E3B]">Included</td>
                <td className="py-3 pl-4 font-semibold text-slate-900">Included</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-900">Dedicated 1-on-1 Form Sessions</td>
                <td className="py-3 px-4 text-slate-300">—</td>
                <td className="py-3 px-4 text-slate-300">—</td>
                <td className="py-3 pl-4 font-semibold text-[#064E3B]">12 Sessions / Month</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-slate-900">Locker, Shower & Sauna Access</td>
                <td className="py-3 px-4">Included</td>
                <td className="py-3 px-4 font-semibold text-slate-900">Included</td>
                <td className="py-3 pl-4 font-semibold text-slate-900">Priority Private Locker</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Assurance Strip */}
      <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#064E3B] shrink-0" />
          <span className="text-slate-800">
            All memberships include a 7-day initial grace period and pause allowances for business travel.
          </span>
        </div>
        <button
          onClick={() => onScrollTo('faqs')}
          className="font-semibold text-[#064E3B] hover:underline shrink-0 cursor-pointer"
        >
          Read Policy & Cancellation FAQs ↓
        </button>
      </div>

    </section>
  );
};
