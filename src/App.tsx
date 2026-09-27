import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './pages/HomePage';
import { FacilitySection } from './pages/FacilityPage';
import { ProgramsSection } from './pages/ProgramsPage';
import { CoachesSection } from './pages/CoachesPage';
import { SeasonalSection } from './pages/SeasonalPage';
import { ReviewsSection } from './pages/StoriesPage';
import { MembershipSection } from './pages/MembershipPage';
import { PulseSection } from './pages/PulsePage';
import { FaqSection } from './pages/FaqPage';
import { ContactSection } from './pages/JoinPage';

export default function App() {
  const [selectedCoachForJoin, setSelectedCoachForJoin] = useState<string>('Any Master Coach');
  const [selectedProgramForJoin, setSelectedProgramForJoin] = useState<string>('Personal Strength Coaching');
  const [selectedTierForJoin, setSelectedTierForJoin] = useState<string>('Access + CrossFit & Classes');

  const handleScrollTo = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCoachSelect = (coachName: string) => {
    setSelectedCoachForJoin(coachName);
    setSelectedProgramForJoin('Personal Strength Coaching');
    handleScrollTo('contact');
  };

  const handleProgramSelect = (programName: string) => {
    setSelectedProgramForJoin(programName);
    handleScrollTo('contact');
  };

  const handleTierSelect = (tierName: string) => {
    setSelectedTierForJoin(tierName);
    handleScrollTo('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      
      {/* Slim Top Navigation Bar & Mobile 1-Thumb Dock */}
      <Navbar />

      {/* ONE CONTINUOUS LONG-FORM HOMEPAGE EXPERIENCE */}
      <main className="flex-1">
        
        {/* 1. HERO & 24-HOUR RHYTHM TEASER */}
        <HomeSection onScrollTo={handleScrollTo} />

        {/* 2. INTRO / BRAND STORY & THE FACILITY */}
        <FacilitySection onScrollTo={handleScrollTo} />

        {/* 3. MAIN SERVICES / OFFER (TIMELINE-BRANCH TRAINING PROGRAMS & CROSSFIT) */}
        <ProgramsSection
          onScrollTo={handleScrollTo}
          onSelectProgramForJoin={handleProgramSelect}
        />

        {/* 4. UNIQUE VALUE / APPROACH (THE MENTORSHIP STANDARD & RESIDENT COACHES) */}
        <CoachesSection
          onScrollTo={handleScrollTo}
          onSelectCoachForJoin={handleCoachSelect}
        />

        {/* 5. FEATURED CONTENT / VISUAL STORY (RAMADAN BOOT CAMP 2026 ANCHOR FEATURE) */}
        <SeasonalSection
          onScrollTo={handleScrollTo}
          onSelectProgramForJoin={handleProgramSelect}
        />

        {/* 6. TRUST / REVIEWS (4.8★ / 274 REVIEWS & MEMBER NARRATIVES) */}
        <ReviewsSection onScrollTo={handleScrollTo} />

        {/* 7. PROCESS / HOW IT WORKS (MEMBERSHIP PROGRESSION CONTINUUM & PRIVILEGES) */}
        <MembershipSection
          onScrollTo={handleScrollTo}
          onSelectTierForJoin={handleTierSelect}
        />

        {/* 8. BUSINESS-SPECIFIC INFORMATION (LIVE GYM PULSE & OCCUPANCY INDEX) */}
        <PulseSection onScrollTo={handleScrollTo} />

        {/* 8B. FREQUENTLY ASKED QUESTIONS */}
        <FaqSection />

        {/* 9. LOCATION / CONTACT & 10. FINAL CTA */}
        <ContactSection
          initialCoach={selectedCoachForJoin}
          initialProgram={selectedProgramForJoin}
          initialTier={selectedTierForJoin}
        />

      </main>

      {/* 11. QUIET EDITORIAL FOOTER */}
      <Footer />

    </div>
  );
}
