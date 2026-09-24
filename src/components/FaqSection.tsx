import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquareText, PhoneCall } from 'lucide-react';
import { faqItems } from '../data/mockData';

export const FaqSection: React.FC = () => {
  // First item open by default as shown in Image 5
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>مركز المساعدة والمعرفة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#0c2b42] dark:text-white tracking-tight">
            الأسئلة الشائعة حول برنامج أجير
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400">
            إجابات شافية ومعتمدة للأسئلة الأكثر تداولاً بين المنشآت والأفراد
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqItems.map((item) => {
            const isOpen = openItems.includes(item.id);
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-emerald-300 dark:border-emerald-700 bg-white dark:bg-slate-800 shadow-sm'
                    : 'border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/60 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-5 text-right cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-emerald-100/70 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300'
                        : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <span
                    className={`text-sm sm:text-base font-bold flex-1 ${
                      isOpen
                        ? 'text-emerald-700 dark:text-emerald-400'
                        : 'text-slate-800 dark:text-slate-100'
                    }`}
                  >
                    {item.question}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700/60 font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Banner (Image 6) */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#f0fdf4] dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/80 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-right order-2 sm:order-1">
            <div>
              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                لم تجد إجابة لاستفسارك؟
              </div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                فريق خدمة العملاء متاح للمساعدة على مدار الساعة عبر الرقم الموحد 19911
              </div>
            </div>

            <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
              <MessageSquareText className="w-5 h-5" />
            </div>
          </div>

          <a
            href="tel:19911"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#05825a] hover:bg-[#046e4c] text-white text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer order-1 sm:order-2 shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>اتصل بـ 19911</span>
          </a>
        </div>

      </div>
    </section>
  );
};
