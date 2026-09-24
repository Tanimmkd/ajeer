import React, { useState } from 'react';
import { Building2, Users, ArrowDown, Zap, ChevronDown, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onScrollToVerification: () => void;
  onSelectService: (serviceName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToVerification,
  onSelectService,
}) => {
  const [selectedService, setSelectedService] = useState('خدمة أجير للأفراد...');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const servicesList = [
    'خدمة أجير للأفراد...',
    'إشعار العمل المؤقت للمنشآت',
    'تصريح العمل في موسم الحج',
    'تصريح التعاقد المباشر والمشاريع',
    'التحقق من صحة تصاريح وإشعارات أجير',
  ];

  const handleLaunch = () => {
    if (selectedService.includes('التحقق')) {
      onScrollToVerification();
    } else {
      onSelectService(selectedService);
    }
  };

  return (
    <section id="hero-top" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background Decorative Capsule Pill Grid matching Image 1 */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-30 dark:opacity-10 overflow-hidden">
        <div className="grid grid-cols-5 gap-6 sm:gap-10 transform -translate-y-6">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-12 h-20 sm:w-14 sm:h-24 rounded-full border-2 border-emerald-400/40"
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Content (Visual Right in RTL, 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0c2b42] dark:text-white tracking-tight leading-[1.25]">
              مرحبًا بك في أجير
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
              يُعد برنامج أجير أحد برامج وزارة الموارد البشرية والتنمية الاجتماعية، الذي يهدف إلى تسهيل وصول منشآت السوق إلى القوى العاملة داخل السوق السعودي.
            </p>

            {/* Badges and Call-to-actions row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>تنظيم وتيسير إعارة العمالة</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>مرونة استقطاب الكفاءات والمواسم</span>
              </div>

              <button
                onClick={onScrollToVerification}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm font-bold transition-colors cursor-pointer shadow-2xs group"
              >
                <span>التحقق من التصاريح والوثائق</span>
                <ArrowDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Quick Access Card Widget (Visual Left in RTL, 5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white dark:bg-slate-800/95 rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
              
              <div className="text-right mb-5">
                <h2 className="text-xl font-bold text-[#0c2b42] dark:text-white">
                  الوصول السريع
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  ابحث عن المعلومات أو الخدمات...
                </p>
              </div>

              {/* Service Selector Dropdown */}
              <div className="relative mb-4">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-sm font-medium hover:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer"
                >
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  <div className="flex items-center gap-2">
                    <span className="truncate">{selectedService}</span>
                    <Zap className="w-4 h-4 text-emerald-500 fill-emerald-500 shrink-0" />
                  </div>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 z-20 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 py-1.5 text-right overflow-hidden">
                    {servicesList.map((service, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedService(service);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-right px-4 py-2.5 text-sm transition-colors cursor-pointer flex items-center justify-between ${
                          selectedService === service
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
                        }`}
                      >
                        {selectedService === service && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                        <span>{service}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button matching screenshot style */}
              <button
                type="button"
                onClick={handleLaunch}
                className="w-full py-3 px-4 bg-slate-200/80 hover:bg-emerald-600 dark:bg-slate-700 dark:hover:bg-emerald-600 text-slate-800 hover:text-white dark:text-slate-200 dark:hover:text-white font-bold rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.99]"
              >
                إنطلق
              </button>

              {/* Card Footer badges */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">خدمة فورية ومعتمدة</span>
                </div>
                <div className="font-semibold text-slate-600 dark:text-slate-300">
                  قوى • أجير
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
