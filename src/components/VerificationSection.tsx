import React from 'react';
import { ShieldCheck, Printer, CheckCircle2, Search, FileText, Check } from 'lucide-react';
import { PermitData } from '../types';
import { PermitQrCode } from './PermitQrCode';
import { AjeerLogo } from './AjeerLogo';

interface VerificationSectionProps {
  permit: PermitData;
  activeTab: 'document' | 'lookup';
  onTabChange: (tab: 'document' | 'lookup') => void;
  onOpenLookup: () => void;
}

export const VerificationSection: React.FC<VerificationSectionProps> = ({
  permit,
  activeTab,
  onTabChange,
  onOpenLookup,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="verification-section" className="py-12 sm:py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>الخدمات الإلكترونية المباشرة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2b42] dark:text-white tracking-tight">
            التحقق من صحة تصاريح وإشعارات أجير
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal">
            خدمة رقابية فورية تتيح للمنشآت والمفتشين التأكد المباشر من موثوقية التصريح وسريانه النظامي
          </p>
        </div>

        {/* Verification View Switcher / Filter Tabs Pill matching screenshot */}
        <div className="flex justify-center mb-8 no-print">
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-2xs">
            <button
              onClick={() => onTabChange('document')}
              className={`flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all cursor-pointer ${
                activeTab === 'document'
                  ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>وثيقة التصريح المعتمدة (ساري المفعول)</span>
            </button>

            <button
              onClick={() => {
                onTabChange('lookup');
                onOpenLookup();
              }}
              className={`flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'lookup'
                  ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>فحص تصريح مخصص</span>
            </button>
          </div>
        </div>

        {/* The Official Ajeer Certificate Card (Matches Image 2 & 3 Pixel for Pixel) */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-200 dark:border-slate-700 overflow-hidden permit-card-print">
          
          {/* Green Certificate Banner */}
          <div className="bg-[#05825a] px-6 py-5 sm:px-8 text-white flex flex-wrap items-center justify-between gap-4">
            
            {/* Print Button (Left side) */}
            <button
              onClick={handlePrint}
              className="no-print inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-800/60 hover:bg-emerald-800 border border-emerald-400/40 text-xs sm:text-sm font-medium text-white transition-colors cursor-pointer shadow-xs"
              title="طباعة هذه الوثيقة الرسمية بصيغة ورقية أو PDF"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة الوثيقة</span>
            </button>

            {/* Status & Verification Title (Right side in RTL) */}
            <div className="flex items-center gap-3 text-right">
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-900/60 text-emerald-200 border border-emerald-400/40">
                    {permit.badgeLabel}
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tight">
                    حالة التصريح: {permit.statusLabel}
                  </span>
                </div>
                <p className="text-xs text-emerald-100 font-light mt-0.5 opacity-90">
                  {permit.registryNote}
                </p>
              </div>

              <div className="w-8 h-8 rounded-full border border-emerald-300/40 bg-emerald-700/50 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-white stroke-[2.5]" />
              </div>
            </div>

          </div>

          {/* Certificate Body Container */}
          <div className="p-6 sm:p-8">
            
            {/* Top Subheader: QR Code on Left, Logo + Official notice on Right */}
            <div className="flex flex-row-reverse items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-700/70">
              
              {/* QR Code and Iqama ID (Left visual in RTL) */}
              <div className="flex items-center gap-3">
                <PermitQrCode value={permit.iqamaNumber} size={64} />
                <div className="text-right">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    رقم الإقامة / الهوية
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 tracking-wider font-mono tabular-nums">
                    {permit.iqamaNumber}
                  </div>
                </div>
              </div>

              {/* Logo & Document Title (Right visual in RTL) */}
              <div className="text-right">
                <AjeerLogo size="sm" />
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1">
                  إشعار العمل المؤقت المعتمد • وزارة الموارد البشرية والتنمية الاجتماعية
                </div>
              </div>

            </div>

            {/* Data Tables Structure matching screenshots */}
            <div className="mt-6 space-y-4">
              
              {/* Table 1: بيانات العامل (Worker Info) */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <div className="bg-slate-100/80 dark:bg-slate-750 px-4 py-2 text-center text-xs font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                  بيانات العامل
                </div>
                <div className="divide-y divide-slate-200 dark:divide-slate-700 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="p-3 border-b sm:border-b-0 sm:border-l border-slate-200 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800">
                      <span className="font-bold text-slate-900 dark:text-white font-mono uppercase">{permit.workerName}</span>
                      <span className="text-slate-500 dark:text-slate-400 font-medium">اسم العامل</span>
                    </div>
                    <div className="p-3 flex justify-between items-center bg-white dark:bg-slate-800">
                      <span className="font-bold text-slate-900 dark:text-white">{permit.profession}</span>
                      <span className="text-slate-500 dark:text-slate-400 font-medium">المهنة</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="p-3 border-b sm:border-b-0 sm:border-l border-slate-200 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800">
                      <span className="font-bold text-slate-900 dark:text-white font-mono tabular-nums">{permit.iqamaNumber}</span>
                      <span className="text-slate-500 dark:text-slate-400 font-medium">رقم الهوية / الإقامة</span>
                    </div>
                    <div className="p-3 flex justify-between items-center bg-white dark:bg-slate-800">
                      <span className="font-bold text-slate-900 dark:text-white">{permit.nationality}</span>
                      <span className="text-slate-500 dark:text-slate-400 font-medium">الجنسية</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table 2: بيانات مقدم الخدمة (Service Provider) */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <div className="bg-slate-100/80 dark:bg-slate-750 px-4 py-2 text-center text-xs font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                  بيانات مقدم الخدمة
                </div>
                <div className="divide-y divide-slate-200 dark:divide-slate-700 text-xs sm:text-sm">
                  <div className="p-3 flex justify-between items-center bg-white dark:bg-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white text-right">{permit.providerName}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap mr-2">المنشأة المقدمة للخدمة</span>
                  </div>
                  <div className="p-3 flex justify-between items-center bg-white dark:bg-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white font-mono tabular-nums">{permit.providerMhrsdNumber}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium text-right leading-tight max-w-[240px]">
                      رقم المنشأة في وزارة الموارد البشرية و التنمية الإجتماعية
                    </span>
                  </div>
                </div>
              </div>

              {/* Table 3: بيانات المستفيد من الخدمة (Beneficiary) */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <div className="bg-slate-100/80 dark:bg-slate-750 px-4 py-2 text-center text-xs font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                  بيانات المستفيد من الخدمة
                </div>
                <div className="divide-y divide-slate-200 dark:divide-slate-700 text-xs sm:text-sm">
                  <div className="p-3 flex justify-between items-center bg-white dark:bg-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white text-right leading-normal">{permit.beneficiaryName}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap mr-2">المنشأة المستفيدة من الخدمة</span>
                  </div>
                  <div className="p-3 flex justify-between items-center bg-white dark:bg-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white font-mono tabular-nums">{permit.beneficiaryMhrsdNumber}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium text-right leading-tight max-w-[240px]">
                      رقم المنشأة في وزارة الموارد البشرية و التنمية الإجتماعية
                    </span>
                  </div>
                </div>
              </div>

              {/* Table 4: بيانات التصريح (Permit Details) */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <div className="bg-slate-100/80 dark:bg-slate-750 px-4 py-2 text-center text-xs font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                  بيانات التصريح
                </div>
                <div className="divide-y divide-slate-200 dark:divide-slate-700 text-xs sm:text-sm">
                  <div className="p-3 flex justify-between items-center bg-white dark:bg-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white">{permit.contractSummary}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">نبذة عن التعاقد</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="p-3 border-b sm:border-b-0 sm:border-l border-slate-200 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800">
                      <span className="font-bold text-slate-900 dark:text-white font-mono tabular-nums">{permit.issueDateText}</span>
                      <span className="text-slate-500 dark:text-slate-400 font-medium">تاريخ بداية التصريح</span>
                    </div>
                    <div className="p-3 flex justify-between items-center bg-white dark:bg-slate-800">
                      <span className="font-bold text-slate-900 dark:text-white font-mono tabular-nums">{permit.expiryDateText}</span>
                      <span className="text-slate-500 dark:text-slate-400 font-medium">تاريخ نهاية التصريح</span>
                    </div>
                  </div>

                  <div className="p-3 flex justify-between items-center bg-white dark:bg-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white text-right">{permit.workLocations}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap mr-2">مواقع العمل</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Verification Status Callout matching screenshot */}
            <div className="mt-6 p-4 rounded-xl bg-[#e6f7ef] dark:bg-emerald-950/40 border border-[#86efac] dark:border-emerald-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 order-2 sm:order-1">
                <span className="px-2.5 py-1 rounded bg-white/90 dark:bg-slate-800 border border-emerald-400 text-emerald-800 dark:text-emerald-300 font-mono font-bold text-xs">
                  STATUS: {permit.status}
                </span>
              </div>

              <div className="text-right order-1 sm:order-2 flex-1">
                <div className="flex items-center justify-end gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm sm:text-base">
                  <span>نتيجة التحقق: التصريح ساري المفعول ونظامي (VALID)</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  هذا التصريح صادر رسميًا ومطابق لقواعد وأنظمة العمل المؤقت في المملكة العربية السعودية حتى تاريخ {permit.expiryDateText}.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Link below certificate card */}
        <div className="text-center mt-6 no-print">
          <button
            onClick={onOpenLookup}
            className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 hover:underline transition-all cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>← التحقق من رقم تصريح آخر أو إدخال بيانات جديدة</span>
          </button>
        </div>

      </div>
    </section>
  );
};
