import React, { useState } from 'react';
import { X, Search, FileText, HelpCircle, ArrowLeft } from 'lucide-react';
import { faqItems } from '../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectPermitDirect: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
  onSelectPermitDirect,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const quickLinks = [
    { label: 'التحقق من صحة تصاريح وإشعارات أجير', target: 'verification-section', type: 'service' },
    { label: 'خدمة إشعار العمل المؤقت للمنشآت', target: 'verification-section', type: 'service' },
    { label: 'شروط الاستفادة من إعارة العمالة', target: 'faq-section', type: 'faq' },
    { label: 'أثر تصاريح أجير على نسب التوطين (نطاقات)', target: 'faq-section', type: 'faq' },
    { label: 'رؤية المملكة 2030 وسوق العمل', target: 'about-ajeer', type: 'info' },
  ];

  const filteredFaqs = searchTerm
    ? faqItems.filter(
        (faq) =>
          faq.question.includes(searchTerm) || faq.answer.includes(searchTerm)
      )
    : [];

  const handleLinkClick = (target: string) => {
    onNavigateSection(target);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden text-right animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <X className="w-5 h-5" />
          </button>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث عن الخدمات، الشروط، الأسئلة الشائعة..."
            className="w-full text-sm bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
            autoFocus
          />

          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
        </div>

        {/* Content & Results */}
        <div className="p-5 max-h-96 overflow-y-auto space-y-4">
          
          {filteredFaqs.length > 0 ? (
            <div>
              <div className="text-xs font-bold text-slate-400 mb-2">نتائج الأسئلة الشائعة:</div>
              <div className="space-y-2">
                {filteredFaqs.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => handleLinkClick('faq-section')}
                    className="w-full text-right p-3 rounded-xl border border-slate-100 dark:border-slate-700/80 hover:bg-emerald-50/50 dark:hover:bg-slate-700 transition-colors flex items-center justify-between group"
                  >
                    <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {faq.question}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : searchTerm ? (
            <div className="text-center py-6 text-sm text-slate-500 dark:text-slate-400">
              لم يتم العثور على نتائج مطابقة لـ &quot;{searchTerm}&quot;
            </div>
          ) : (
            <div>
              <div className="text-xs font-bold text-slate-400 mb-2">الخدمات والروابط الأكثر بحثاً:</div>
              <div className="space-y-2">
                {quickLinks.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLinkClick(item.target)}
                    className="w-full text-right p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors flex items-center justify-between text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    <ArrowLeft className="w-4 h-4 text-slate-400" />
                    <div className="flex items-center gap-2.5">
                      <span>{item.label}</span>
                      {item.type === 'service' ? (
                        <FileText className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <HelpCircle className="w-4 h-4 text-sky-500" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
