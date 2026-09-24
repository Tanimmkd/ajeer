import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VerificationSection } from './components/VerificationSection';
import { MarketEmpowermentSection } from './components/MarketEmpowermentSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CustomLookupModal } from './components/CustomLookupModal';
import { SearchModal } from './components/SearchModal';
import { LoginModal } from './components/LoginModal';
import { defaultPermit } from './data/mockData';
import { PermitData } from './types';

export default function App() {
  const [currentPermit, setCurrentPermit] = useState<PermitData>(defaultPermit);
  const [activeTab, setActiveTab] = useState<'document' | 'lookup'>('document');
  const [isLookupModalOpen, setIsLookupModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark mode class with root html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromHero = (_serviceName: string) => {
    scrollToSection('verification-section');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col transition-colors selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Capsule Pattern and Quick Access */}
        <HeroSection
          onScrollToVerification={() => scrollToSection('verification-section')}
          onSelectService={handleSelectServiceFromHero}
        />

        {/* Verification and Certificate Section matching Image 1, 2, 3 */}
        <VerificationSection
          permit={currentPermit}
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            if (tab === 'lookup') {
              setIsLookupModalOpen(true);
            }
          }}
          onOpenLookup={() => setIsLookupModalOpen(true)}
        />

        {/* Market Empowerment and Vision 2030 section matching Image 4 */}
        <MarketEmpowermentSection />

        {/* FAQ and 19911 Contact support banner matching Image 5 & 6 */}
        <FaqSection />
      </main>

      {/* Comprehensive Dark Navy Footer matching Image 6 */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenLookup={() => setIsLookupModalOpen(true)}
      />

      {/* Interactive Modals */}
      <CustomLookupModal
        isOpen={isLookupModalOpen}
        onClose={() => {
          setIsLookupModalOpen(false);
          setActiveTab('document');
        }}
        onSelectPermit={(p) => {
          setCurrentPermit(p);
          setActiveTab('document');
          scrollToSection('verification-section');
        }}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onNavigateSection={scrollToSection}
        onSelectPermitDirect={() => {
          setIsSearchModalOpen(false);
          scrollToSection('verification-section');
        }}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

    </div>
  );
}
