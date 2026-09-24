import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { AjeerLogo } from './AjeerLogo';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenLookup: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenLookup,
}) => {
  return (
    <footer id="contact-section" className="bg-[#081423] text-slate-300 pt-12 pb-10 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Contact Center Bar (Image 6) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-800/80">
          
          {/* Action buttons (Left in RTL) */}
          <div className="flex flex-wrap items-center gap-3 order-2 md:order-1">
            <a
              href="mailto:support@ajeer.gov.sa"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span className="font-mono">support@ajeer.gov.sa</span>
            </a>

            <a
              href="tel:19911"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/40 text-xs sm:text-sm font-bold text-emerald-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span className="font-mono tracking-wider">19911</span>
            </a>
          </div>

          {/* Heading text (Right in RTL) */}
          <div className="text-right order-1 md:order-2">
            <h3 className="text-base sm:text-lg font-bold text-white">
              مركز الاتصال الموحد لخدمات قطاع العمل
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              نحن هنا للإجابة عن كافة استفساراتكم المتعلقة بتصاريح وإشعارات أجير
            </p>
          </div>

        </div>

        {/* 4 Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 py-12 border-b border-slate-800/80">
          
          {/* Column 1: Ajeer Brand & Mission (Visual Right in RTL, 4 cols) */}
          <div className="lg:col-span-4 text-right space-y-4">
            <AjeerLogo variant="light" size="md" />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              برنامج وطني تشرف عليه وزارة الموارد البشرية والتنمية الاجتماعية، يهدف إلى تنظيم العمل المؤقت وتيسير وصول المنشآت إلى القوى العاملة داخل المملكة العربية السعودية.
            </p>

            <div className="pt-2 text-xs font-semibold text-emerald-400 flex items-center gap-1 justify-end">
              <span>منظومة العمل الوطنية: قوى • نفاذ • مساند</span>
            </div>
          </div>

          {/* Column 2: الخدمات الرئيسية (3 cols) */}
          <div className="lg:col-span-3 text-right space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              الخدمات الرئيسية
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateSection('verification-section')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  إشعار العمل المؤقت
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('verification-section')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  تصريح موسم الحج
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('verification-section')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  تصريح التقاول والمشاريع
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('verification-section')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  خدمة أجير للأفراد
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenLookup}
                  className="text-emerald-400 font-semibold hover:underline cursor-pointer"
                >
                  التحقق من التصاريح
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: اللوائح والأنظمة (3 cols) */}
          <div className="lg:col-span-3 text-right space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              اللوائح والأنظمة
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href="https://hrsd.gov.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  نظام العمل السعودي
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about-ajeer')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  قواعد عمل المنشآت في نطاقات
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about-ajeer')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  دليل مستخدم بوابة أجير
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('faq-section')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  الأسئلة الأكثر تداولاً
                </button>
              </li>
              <li>
                <span className="text-slate-400 cursor-default">
                  سياسة حماية البيانات والخصوصية
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: رؤية المملكة 2030 (2 cols) */}
          <div className="lg:col-span-2 text-right space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              رؤية المملكة 2030
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              نعمل معاً نحو اقتصاد وطني مزدهر، وسوق عمل رقمي مرن يتيح أعلى مستويات الإنتاجية والتمكين.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1.5 rounded-lg border border-emerald-500/50 text-emerald-400 text-xs font-bold bg-emerald-950/30">
                المملكة العربية السعودية
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-right">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} منصة أجير - وزارة الموارد البشرية والتنمية الاجتماعية
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>النسخة المعتمدة 2.4</span>
            <span>•</span>
            <span>بوابة الخدمات الموحدة</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
