import React, { useState } from 'react';
import { Search, ArrowLeft, Moon, Sun, Menu, X } from 'lucide-react';
import { AjeerLogo } from './AjeerLogo';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSearch: () => void;
  onOpenLogin: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenSearch,
  onOpenLogin,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'عن أجير', target: 'about-ajeer' },
    { label: 'التحقق من التصاريح', target: 'verification-section' },
    { label: 'الأسئلة الشائعة', target: 'faq-section' },
    { label: 'تواصل معنا', target: 'contact-section' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigateSection(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Right Zone in RTL: Brand Logo + Nav Links */}
          <div className="flex items-center gap-8 lg:gap-12">
            <button
              onClick={() => onNavigateSection('hero-top')}
              className="flex items-center text-right cursor-pointer focus:outline-none"
              aria-label="الرئيسية منصة أجير"
            >
              <AjeerLogo />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className="text-sm font-semibold text-slate-700 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-emerald-400 transition-colors cursor-pointer py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Left Zone in RTL: Dark mode, Search, Login CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={darkMode ? 'تفعيل الوضع المضيء' : 'تفعيل الوضع الليلي'}
              aria-label="تبديل وضع العرض"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-emerald-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="بحث في المنصة"
            >
              <span>بحث</span>
              <Search className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </button>

            {/* Login CTA with Arrow Icon matching screenshot */}
            <button
              onClick={onOpenLogin}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-emerald-600 dark:hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition-all cursor-pointer shadow-2xs whitespace-nowrap"
            >
              <ArrowLeft className="w-4 h-4 text-slate-600 dark:text-slate-300 transition-transform group-hover:-translate-x-0.5" />
              <span>تسجيل الدخول</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="text-right px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 rounded-lg"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
