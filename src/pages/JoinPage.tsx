import React, { useState } from 'react';
import { GYM_INFO, COACHES, PROGRAMS, MEMBERSHIP_TIERS } from '../data/gymData';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Copy, 
  Navigation, 
  ArrowRight 
} from 'lucide-react';

interface ContactSectionProps {
  initialCoach?: string;
  initialProgram?: string;
  initialTier?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialCoach = 'Any Master Coach',
  initialProgram = 'Personal Strength Coaching',
  initialTier = 'Access + CrossFit & Classes',
}) => {
  const [selectedCoach, setSelectedCoach] = useState<string>(initialCoach);
  const [selectedProgram, setSelectedProgram] = useState<string>(initialProgram);
  const [selectedTier, setSelectedTier] = useState<string>(initialTier);
  const [preferredTime, setPreferredTime] = useState<string>('Flexible 24-Hour');

  // Fallback Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Generate dynamic WhatsApp URL
  const generateWhatsAppMessage = () => {
    let msg = `Hi, I'd like to know more about membership at Xtreme Fitness DHA Phase 8.`;
    if (selectedProgram) msg += `\n- Program Interest: ${selectedProgram}`;
    if (selectedCoach && selectedCoach !== 'Any Master Coach') msg += `\n- Preferred Coach: ${selectedCoach}`;
    if (selectedTier) msg += `\n- Membership Tier: ${selectedTier}`;
    if (preferredTime) msg += `\n- Typical Workout Window: ${preferredTime}`;
    return encodeURIComponent(msg);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const refId = `XF-2026-${randomSuffix}`;
      setSubmittedRefId(refId);
      setIsSubmitting(false);
    }, 600);
  };

  const copyRefId = () => {
    if (!submittedRefId) return;
    navigator.clipboard.writeText(submittedRefId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16 border-t border-[#B8BAC0]/30">
        
        {/* 1. Header with Prominent 24-Hour Callout */}
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 bg-[#064E3B] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-full">
              Open 24 Hours · 365 Days
            </span>
            <span className="text-xs text-slate-600">
              DHA Phase 8 · Block M Air Avenue
            </span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            Start Your Membership.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Lock in your preferred training window, select your resident coach, and generate an immediate WhatsApp membership inquiry or submit a direct registration ticket.
          </p>
        </div>

        {/* 2. Main Two-Column Layout: WhatsApp Configurator & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct WhatsApp Pre-filled Flow (Fastest) */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-8 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold mb-1">
                <MessageSquare className="w-3.5 h-3.5 text-[#064E3B]" />
                <span>Direct WhatsApp Routing (Instant Confirmation)</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
                Customize Your Inquiry Message
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Select your preferences below to auto-generate a tailored inquiry that routes directly to our head desk.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              
              {/* Program Selection */}
              <div>
                <label className="font-mono uppercase tracking-wider text-slate-600 font-semibold block mb-1.5">
                  Target Program
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium focus:outline-hidden focus:border-[#064E3B]"
                >
                  {PROGRAMS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Ramadan Boot Camp 2026">Ramadan Boot Camp 2026 (Anchor Feature)</option>
                  <option value="General 24/7 Access">General 24/7 Floor Access Only</option>
                </select>
              </div>

              {/* Coach Selection */}
              <div>
                <label className="font-mono uppercase tracking-wider text-slate-600 font-semibold block mb-1.5">
                  Preferred Resident Coach
                </label>
                <select
                  value={selectedCoach}
                  onChange={(e) => setSelectedCoach(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium focus:outline-hidden focus:border-[#064E3B]"
                >
                  <option value="Any Master Coach">Any Available Resident Coach</option>
                  {COACHES.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name} — {c.specialty.split(',')[0]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Time Window */}
              <div>
                <label className="font-mono uppercase tracking-wider text-slate-600 font-semibold block mb-1.5">
                  Usual Workout Schedule
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium focus:outline-hidden focus:border-[#064E3B]"
                >
                  <option value="Early Morning (05:00 - 08:30 AM)">Early Morning (05:00 - 08:30 AM)</option>
                  <option value="Midday Focus (11:00 AM - 02:30 PM)">Midday Focus (11:00 AM - 02:30 PM)</option>
                  <option value="Evening Prime (06:00 - 09:30 PM)">Evening Prime (06:00 - 09:30 PM)</option>
                  <option value="Late Night / Midnight (11:00 PM - 04:00 AM)">Late Night / Midnight (11:00 PM - 04:00 AM)</option>
                  <option value="Pre-Suhoor Ramadan Cohort (03:15 AM)">Pre-Suhoor Ramadan Cohort (03:15 AM)</option>
                  <option value="Post-Taraweeh Ramadan Cohort (10:30 PM)">Post-Taraweeh Ramadan Cohort (10:30 PM)</option>
                </select>
              </div>

              {/* Live Message Preview */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#064E3B] font-semibold block">
                  Pre-Filled WhatsApp Preview
                </span>
                <p className="text-xs text-slate-800 whitespace-pre-line font-mono">
                  {decodeURIComponent(generateWhatsAppMessage())}
                </p>
              </div>

              {/* Launch WhatsApp Button */}
              <a
                href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#064E3B] hover:bg-[#043629] text-white font-semibold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Launch WhatsApp Chat (+92 336 4255323)</span>
              </a>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#064E3B]" />
                <span>Direct connection to Xtreme Fitness front desk. Response typically &lt; 15 mins.</span>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Fallback Form with Reference ID Confirmation */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6 shadow-sm">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold mb-1">
                Alternative Method
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
                Submit Inquiry Ticket
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Do not use WhatsApp? Fill in your details and our team will reach out by phone call or SMS.
              </p>
            </div>

            {!submittedRefId ? (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="font-mono uppercase tracking-wider text-slate-600 font-semibold block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Farhan Ali"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium focus:outline-hidden focus:border-[#064E3B]"
                  />
                </div>

                <div>
                  <label className="font-mono uppercase tracking-wider text-slate-600 font-semibold block mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium focus:outline-hidden focus:border-[#064E3B]"
                  />
                </div>

                <div>
                  <label className="font-mono uppercase tracking-wider text-slate-600 font-semibold block mb-1">
                    Specific Goals or Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Previous lower back issue, looking for Abdul Raheem's form guidance..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium focus:outline-hidden focus:border-[#064E3B]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-slate-900 hover:bg-black text-white font-semibold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Generating Reference ID...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Membership Ticket</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Confirmation State with Reference ID */
              <div className="bg-slate-50 p-6 rounded-2xl border-2 border-[#064E3B] space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#064E3B] uppercase">
                  <CheckCircle2 className="w-4 h-4 text-[#064E3B]" />
                  <span>Inquiry Successfully Registered</span>
                </div>

                <h4 className="font-editorial text-2xl font-bold text-slate-900">
                  Your membership inquiry has been received.
                </h4>

                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold block">
                    Official Reference ID
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-[#064E3B] tracking-wider">
                      {submittedRefId}
                    </span>
                    <button
                      onClick={copyRefId}
                      className="p-1.5 hover:bg-slate-100 rounded-md text-slate-600 transition-colors cursor-pointer"
                      title="Copy ID"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  {copied && <span className="text-[10px] text-emerald-600 block">Copied to clipboard</span>}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Our team will confirm on WhatsApp shortly at <strong>{phone}</strong> with your personalized onboarding timeslot and coach availability.
                </p>

                <button
                  onClick={() => setSubmittedRefId(null)}
                  className="text-xs text-[#064E3B] font-semibold hover:underline block pt-2 cursor-pointer"
                >
                  ← Submit another inquiry
                </button>
              </div>
            )}
          </div>

        </div>

        {/* 3. Facility Location, Pin & Driving Directions */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-8 shadow-sm">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#064E3B] font-semibold mb-1">
                <MapPin className="w-4 h-4 text-[#064E3B]" />
                <span>Location & Driving Accessibility</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
                Block M Air Avenue, DHA Phase 8 Lahore
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Easily accessible via Lahore Ring Road, Bedian Road, and DHA Phase 6 Main Boulevard.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-900">
              <Clock className="w-4 h-4 text-[#064E3B]" />
              <span className="font-medium">Facility Open 24 Hours / 365 Days</span>
            </div>
          </div>

          {/* Driving Distance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[11px] font-mono text-[#064E3B] uppercase font-semibold">From DHA Phase 5 / 6</span>
              <div className="text-sm font-bold text-slate-900">8 — 10 Minutes</div>
              <p className="text-xs text-slate-600">Direct route via Ring Road or Ex Air Avenue corridor.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[11px] font-mono text-[#064E3B] uppercase font-semibold">From Allama Iqbal Airport</span>
              <div className="text-sm font-bold text-slate-900">12 Minutes</div>
              <p className="text-xs text-slate-600">Convenient access for frequent travelers and crew.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[11px] font-mono text-[#064E3B] uppercase font-semibold">Parking Availability</span>
              <div className="text-sm font-bold text-slate-900">Guarded 24/7 Lots</div>
              <p className="text-xs text-slate-600">Private, well-lit spaces directly fronting the entrance.</p>
            </div>
          </div>

          {/* Embedded Interactive Map Pin Representation */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-72 flex flex-col items-center justify-center text-center p-6 space-y-3">
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#064E3B_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#064E3B] text-white flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6 animate-bounce" />
            </div>

            <div className="relative z-10">
              <h4 className="font-editorial text-xl font-bold text-slate-900">
                Xtreme Fitness DHA Phase 8
              </h4>
              <p className="text-xs text-slate-600 max-w-md mt-1">
                Block M Air Avenue (Ex Air Avenue), DHA Phase 8, Lahore, Punjab 54792
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Xtreme+Fitness+Block+M+Air+Avenue+DHA+Phase+8+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 rounded-xl text-xs font-semibold shadow-xs transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-[#064E3B]" />
              <span>Open in Google Maps / Navigation</span>
            </a>
          </div>

        </div>

      </section>

      {/* 10. FINAL CTA SECTION */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#064E3B] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-200 font-semibold">
              Round-The-Clock Sovereignty · Block M DHA Phase 8
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
              Your 24-hour training floor is ready.
            </h2>
            <p className="text-sm sm:text-base text-emerald-50/90 leading-relaxed">
              Step onto the platform without queueing or curfews. Connect with Abdul Raheem, Mehwish, or Mishel on WhatsApp to lock in your initial movement assessment.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hi, I'm ready to start my membership at Xtreme Fitness DHA Phase 8"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-[#064E3B] font-bold text-xs rounded-xl transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp (+92 336 4255323)</span>
              </a>

              <a
                href="tel:+923364255323"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/40 hover:bg-white/10 text-white font-semibold text-xs rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Front Desk Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
