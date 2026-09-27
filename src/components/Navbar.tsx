import React, { useState, useEffect } from 'react';
import { GYM_INFO } from '../data/gymData';
import { 
  Home, 
  Dumbbell, 
  Users, 
  Activity, 
  MessageSquare, 
  Menu, 
  X, 
  Phone
} from 'lucide-react';

interface NavbarProps {
  onSelectCoachForJoin?: (coachName: string) => void;
  onSelectProgramForJoin?: (programName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navLinks = [
    { id: 'story', label: 'Story & Facility' },
    { id: 'programs', label: 'Programs' },
    { id: 'coaches', label: 'Coaches' },
    { id: 'seasonal', label: 'Ramadan 2026' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'membership', label: 'Plans' },
    { id: 'pulse', label: 'Live Pulse' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Scroll listener to update active section indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'story', 'programs', 'coaches', 'seasonal', 'reviews', 'membership', 'pulse', 'faqs', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar for Desktop & Tablet */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark in Fraunces serif */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-left group cursor-pointer focus:outline-hidden"
            aria-label="Scroll to top of Xtreme Fitness homepage"
          >
            <span className="font-editorial text-2xl font-bold tracking-tight text-[#064E3B] group-hover:text-[#043629] transition-colors">
              Xtreme Fitness
            </span>
          </button>

          {/* Zone 2: Clean Anchor Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-900">
            {navLinks.slice(0, 6).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-[#064E3B] font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#064E3B] rounded-full" />
                )}
              </button>
            ))}

            {/* Quick anchors for Pulse & FAQs */}
            <button
              onClick={() => scrollToSection('pulse')}
              className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap ${
                activeSection === 'pulse' ? 'text-[#064E3B] font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pulse
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap ${
                activeSection === 'faqs' ? 'text-[#064E3B] font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              FAQs
            </button>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="tel:+923364255323"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 whitespace-nowrap"
              title="Call Xtreme Fitness Front Desk"
            >
              <Phone className="w-3.5 h-3.5 text-[#064E3B]" />
              <span>Call</span>
            </a>

            <a
              href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hi, I'd like to know more about membership at Xtreme Fitness DHA Phase 8"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#064E3B] hover:bg-[#064E3B]/10 rounded-lg transition-colors border border-[#064E3B]/20 whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#064E3B] hover:bg-[#043629] rounded-lg transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              Start Membership
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#064E3B] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Menu Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-3">
            <div className="text-xs uppercase font-mono tracking-widest text-slate-400 font-semibold mb-2">
              Jump to Section
            </div>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-[#064E3B] text-white font-medium'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#064E3B] rounded-lg cursor-pointer"
              >
                Start Your Membership
              </button>
              <a
                href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hi, I'd like to know more about membership at Xtreme Fitness DHA Phase 8"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-sm font-semibold text-[#064E3B] border border-[#064E3B] rounded-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +92 336 4255323</span>
              </a>
              <a
                href="tel:+923364255323"
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-800 border border-slate-300 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#064E3B]" />
                <span>Call Desk: +92 336 4255323</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Fixed Bottom Dock for 1-Thumb Smooth Jumping */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-xl px-2 py-1.5 flex items-center justify-around h-[58px]"
      >
        <button
          onClick={() => scrollToSection('home')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            activeSection === 'home' ? 'text-[#064E3B] font-semibold' : 'text-slate-600'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-tight">Top</span>
        </button>

        <button
          onClick={() => scrollToSection('programs')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            activeSection === 'programs' ? 'text-[#064E3B] font-semibold' : 'text-slate-600'
          }`}
        >
          <Dumbbell className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-tight">Programs</span>
        </button>

        <button
          onClick={() => scrollToSection('coaches')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            activeSection === 'coaches' ? 'text-[#064E3B] font-semibold' : 'text-slate-600'
          }`}
        >
          <Users className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-tight">Coaches</span>
        </button>

        <button
          onClick={() => scrollToSection('pulse')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            activeSection === 'pulse' ? 'text-[#064E3B] font-semibold' : 'text-slate-600'
          }`}
        >
          <Activity className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-tight">Pulse</span>
        </button>

        <button
          onClick={() => scrollToSection('contact')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            activeSection === 'contact' ? 'text-[#064E3B] font-semibold' : 'text-slate-600'
          }`}
        >
          <div className="w-5 h-5 rounded-full bg-[#064E3B] text-white flex items-center justify-center mb-0.5 shadow-xs">
            <span className="text-[10px] font-bold">+</span>
          </div>
          <span className="text-[10px] tracking-tight font-medium text-[#064E3B]">Join</span>
        </button>
      </nav>
    </>
  );
};
