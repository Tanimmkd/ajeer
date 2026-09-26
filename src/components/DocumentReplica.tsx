import React, { useState } from 'react';
import { Printer, ShieldCheck, CheckCircle2, QrCode, FileText, Check, Edit3, RotateCcw } from 'lucide-react';
import { PermitData } from '../types';
import { PermitQrCode } from './PermitQrCode';
import { AjeerLogo } from './AjeerLogo';

interface DocumentReplicaProps {
  permit: PermitData;
  onUpdatePermit: (updated: PermitData) => void;
  onResetPermit: () => void;
}

export const DocumentReplica: React.FC<DocumentReplicaProps> = ({
  permit,
  onUpdatePermit,
  onResetPermit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<PermitData>(permit);

  const handlePrint = () => {
    window.print();
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePermit(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#ecefe6]/50 dark:bg-slate-950 py-6 sm:py-10 px-3 sm:px-6 transition-colors selection:bg-emerald-100 selection:text-emerald-900" dir="rtl">
      
      {/* Top Floating Control Toolbar (Excluded from print) */}
      <div className="no-print max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
              إشعار العمل المؤقت المعتمد (منصة أجير)
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
              وثيقة إلكترونية رسمية صادرة من وزارة الموارد البشرية والتنمية الاجتماعية
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Edit Data Button */}
          <button
            type="button"
            onClick={() => {
              setFormData(permit);
              setIsEditing(!isEditing);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
            title="تعديل نصوص الوثيقة"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditing ? 'إغلاق التعديل' : 'تعديل البيانات'}</span>
          </button>

          {/* Reset button */}
          <button
            type="button"
            onClick={onResetPermit}
            className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
            title="استعادة البيانات الأصلية"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">استعادة الأصل</span>
          </button>

          {/* Print Button */}
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold bg-[#05825a] hover:bg-[#046c4a] text-white shadow-sm transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>طباعة الوثيقة الرسمية</span>
          </button>
        </div>

      </div>

      {/* Optional Interactive Edit Drawer (Excluded from print) */}
      {isEditing && (
        <div className="no-print max-w-4xl mx-auto mb-6 bg-white dark:bg-slate-900 p-5 rounded-xl border border-emerald-300 dark:border-emerald-700 shadow-md">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
            <h3 className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-emerald-600" />
              <span>تعديل حقول الوثيقة المباشرة</span>
            </h3>
            <span className="text-xs text-slate-500">التغييرات تنعكس فوراً على المعاينة والطباعة</span>
          </div>

          <form onSubmit={handleSaveEdit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">اسم العامل</label>
              <input
                type="text"
                value={formData.workerName}
                onChange={(e) => setFormData({ ...formData, workerName: e.target.value })}
                className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">المهنة</label>
              <input
                type="text"
                value={formData.profession}
                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">رقم الهوية / الإقامة</label>
              <input
                type="text"
                value={formData.iqamaNumber}
                onChange={(e) => setFormData({ ...formData, iqamaNumber: e.target.value })}
                className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">الجنسية</label>
              <input
                type="text"
                value={formData.nationality}
                onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">المنشأة المقدمة للخدمة</label>
              <input
                type="text"
                value={formData.providerName}
                onChange={(e) => setFormData({ ...formData, providerName: e.target.value })}
                className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">رقم منشأة المقدم (الوزارة)</label>
              <input
                type="text"
                value={formData.providerMhrsdNumber}
                onChange={(e) => setFormData({ ...formData, providerMhrsdNumber: e.target.value })}
                className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">المنشأة المستفيدة من الخدمة</label>
              <input
                type="text"
                value={formData.beneficiaryName}
                onChange={(e) => setFormData({ ...formData, beneficiaryName: e.target.value })}
                className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">رقم منشأة المستفيد (الوزارة)</label>
              <input
                type="text"
                value={formData.beneficiaryMhrsdNumber}
                onChange={(e) => setFormData({ ...formData, beneficiaryMhrsdNumber: e.target.value })}
                className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">تاريخ بداية التصريح</label>
              <input
                type="text"
                value={formData.issueDateText}
                onChange={(e) => setFormData({ ...formData, issueDateText: e.target.value })}
                className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">تاريخ نهاية التصريح</label>
              <input
                type="text"
                value={formData.expiryDateText}
                onChange={(e) => setFormData({ ...formData, expiryDateText: e.target.value })}
                className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">مواقع العمل</label>
              <input
                type="text"
                value={formData.workLocations}
                onChange={(e) => setFormData({ ...formData, workLocations: e.target.value })}
                className="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div className="sm:col-span-3 flex justify-end gap-2 mt-2 pt-3 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-1.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-pointer"
              >
                تطبيق التغييرات
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ============================================================== */}
      {/* THE OFFICIAL AJEER DOCUMENT REPLICA (Exact A4 Sheet)           */}
      {/* ============================================================== */}
      <div className="document-paper max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden text-slate-800">
        
        {/* Document Top Header Banner (Official Green Bar #05825a) */}
        <div className="bg-[#05825a] px-6 py-4 sm:px-8 text-white flex flex-wrap items-center justify-between gap-4">
          
          {/* Left Action / Print (hidden in print) */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="no-print inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-400/40 text-xs font-semibold text-white transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>طباعة الوثيقة</span>
            </button>
            <div className="print-only text-xs text-emerald-100 font-mono">
              رقم الوثيقة: {permit.permitNumber}
            </div>
          </div>

          {/* Right Status Title */}
          <div className="flex items-center gap-3 text-right">
            <div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-900/70 text-emerald-200 border border-emerald-400/40">
                  {permit.badgeLabel}
                </span>
                <span className="text-base sm:text-lg font-black tracking-tight">
                  حالة التصريح: {permit.statusLabel}
                </span>
              </div>
              <p className="text-[11px] text-emerald-100 font-normal mt-0.5 opacity-90">
                {permit.registryNote}
              </p>
            </div>

            <div className="w-8 h-8 rounded-full border border-emerald-300/40 bg-emerald-700/60 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-white stroke-[2.5]" />
            </div>
          </div>

        </div>

        {/* Document White Paper Interior */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Subheader: QR Code with Iqama ID on left, Logo and Title on right */}
          <div className="flex flex-row-reverse items-center justify-between gap-4 pb-5 border-b border-slate-200">
            
            {/* Left Box (QR Code & Iqama) */}
            <div className="flex items-center gap-3.5">
              <PermitQrCode value={permit.iqamaNumber} size={64} />
              <div className="text-right">
                <div className="text-[11px] text-slate-500 font-medium">
                  رقم الإقامة / الهوية
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 tracking-wider font-mono tabular-nums">
                  {permit.iqamaNumber}
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  رقم التصريح: {permit.permitNumber}
                </div>
              </div>
            </div>

            {/* Right Box (Ajeer Logo & Official Ministry Title) */}
            <div className="text-right">
              <AjeerLogo size="sm" layout="horizontal" />
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                إشعار العمل المؤقت المعتمد
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                وزارة الموارد البشرية والتنمية الاجتماعية • المملكة العربية السعودية
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* TABLE 1: بيانات العامل (Worker Information)               */}
          {/* ========================================================= */}
          <div className="border border-slate-300 rounded-lg overflow-hidden shadow-2xs">
            <div className="bg-slate-100 px-4 py-1.5 text-center text-xs font-bold text-slate-800 border-b border-slate-300">
              بيانات العامل
            </div>
            <div className="divide-y divide-slate-300 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-3 border-b sm:border-b-0 sm:border-l border-slate-300 flex justify-between items-center bg-white">
                  <span className="font-bold text-slate-900 font-mono uppercase tracking-wide">{permit.workerName}</span>
                  <span className="text-slate-500 font-medium mr-2">اسم العامل</span>
                </div>
                <div className="p-3 flex justify-between items-center bg-white">
                  <span className="font-bold text-slate-900">{permit.profession}</span>
                  <span className="text-slate-500 font-medium mr-2">المهنة</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-3 border-b sm:border-b-0 sm:border-l border-slate-300 flex justify-between items-center bg-white">
                  <span className="font-bold text-slate-900 font-mono tabular-nums tracking-wider">{permit.iqamaNumber}</span>
                  <span className="text-slate-500 font-medium mr-2">رقم الهوية / الإقامة</span>
                </div>
                <div className="p-3 flex justify-between items-center bg-white">
                  <span className="font-bold text-slate-900">{permit.nationality}</span>
                  <span className="text-slate-500 font-medium mr-2">الجنسية</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* TABLE 2: بيانات مقدم الخدمة (Service Provider)             */}
          {/* ========================================================= */}
          <div className="border border-slate-300 rounded-lg overflow-hidden shadow-2xs">
            <div className="bg-slate-100 px-4 py-1.5 text-center text-xs font-bold text-slate-800 border-b border-slate-300">
              بيانات مقدم الخدمة
            </div>
            <div className="divide-y divide-slate-300 text-xs sm:text-sm">
              <div className="p-3 flex justify-between items-center bg-white">
                <span className="font-bold text-slate-900 text-right">{permit.providerName}</span>
                <span className="text-slate-500 font-medium whitespace-nowrap mr-3">المنشأة المقدمة للخدمة</span>
              </div>
              <div className="p-3 flex justify-between items-center bg-white">
                <span className="font-bold text-slate-900 font-mono tabular-nums">{permit.providerMhrsdNumber}</span>
                <span className="text-slate-500 font-medium text-right leading-tight max-w-[260px] mr-3">
                  رقم المنشأة في وزارة الموارد البشرية و التنمية الإجتماعية
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* TABLE 3: بيانات المستفيد من الخدمة (Beneficiary)          */}
          {/* ========================================================= */}
          <div className="border border-slate-300 rounded-lg overflow-hidden shadow-2xs">
            <div className="bg-slate-100 px-4 py-1.5 text-center text-xs font-bold text-slate-800 border-b border-slate-300">
              بيانات المستفيد من الخدمة
            </div>
            <div className="divide-y divide-slate-300 text-xs sm:text-sm">
              <div className="p-3 flex justify-between items-center bg-white">
                <span className="font-bold text-slate-900 text-right leading-normal">{permit.beneficiaryName}</span>
                <span className="text-slate-500 font-medium whitespace-nowrap mr-3">المنشأة المستفيدة من الخدمة</span>
              </div>
              <div className="p-3 flex justify-between items-center bg-white">
                <span className="font-bold text-slate-900 font-mono tabular-nums">{permit.beneficiaryMhrsdNumber}</span>
                <span className="text-slate-500 font-medium text-right leading-tight max-w-[260px] mr-3">
                  رقم المنشأة في وزارة الموارد البشرية و التنمية الإجتماعية
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* TABLE 4: بيانات التصريح (Permit Details)                  */}
          {/* ========================================================= */}
          <div className="border border-slate-300 rounded-lg overflow-hidden shadow-2xs">
            <div className="bg-slate-100 px-4 py-1.5 text-center text-xs font-bold text-slate-800 border-b border-slate-300">
              بيانات التصريح
            </div>
            <div className="divide-y divide-slate-300 text-xs sm:text-sm">
              <div className="p-3 flex justify-between items-center bg-white">
                <span className="font-bold text-slate-900">{permit.contractSummary}</span>
                <span className="text-slate-500 font-medium mr-3">نبذة عن التعاقد</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-3 border-b sm:border-b-0 sm:border-l border-slate-300 flex justify-between items-center bg-white">
                  <span className="font-bold text-slate-900 font-mono tabular-nums">{permit.issueDateText}</span>
                  <span className="text-slate-500 font-medium mr-3">تاريخ بداية التصريح</span>
                </div>
                <div className="p-3 flex justify-between items-center bg-white">
                  <span className="font-bold text-slate-900 font-mono tabular-nums">{permit.expiryDateText}</span>
                  <span className="text-slate-500 font-medium mr-3">تاريخ نهاية التصريح</span>
                </div>
              </div>

              <div className="p-3 flex justify-between items-center bg-white">
                <span className="font-bold text-slate-900 text-right">{permit.workLocations}</span>
                <span className="text-slate-500 font-medium whitespace-nowrap mr-3">مواقع العمل</span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* UNDERTAKINGS & CONDITIONS (التعهدات والشروط)              */}
          {/* ========================================================= */}
          <div className="border border-slate-300 rounded-lg p-3.5 bg-slate-50/70 text-[11px] leading-relaxed text-slate-700">
            <div className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>التعهدات والشروط النظامية:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pr-1">
              <li>تلتزم المنشأة المستفيدة بتشغيل العامل في المهنة المحددة في هذا الإشعار فقط وموقع العمل المحدد.</li>
              <li>لا يعتبر هذا الإشعار نقلاً للخدمات أو كفالة، ويظل العامل على كفالة المنشأة المعيرة (المقدمة للخدمة).</li>
              <li>يعتبر هذا الإشعار وثيقة رسمية معتمدة صادرة آلياً من وزارة الموارد البشرية والتنمية الاجتماعية ولا يتطلب توقيعاً أو ختماً يدوياً.</li>
              <li>تخضع هذه الوثيقة لكافة الأنظمة واللوائح والقرارات الصادرة المنظمة لبرنامج أجير في المملكة العربية السعودية.</li>
            </ul>
          </div>

          {/* ========================================================= */}
          {/* VERIFICATION CALLOUT (نتيجة التحقق)                       */}
          {/* ========================================================= */}
          <div className="p-4 rounded-xl bg-[#e6f7ef] border border-[#86efac] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 order-2 sm:order-1">
              <span className="px-2.5 py-1 rounded bg-white border border-emerald-400 text-emerald-800 font-mono font-bold text-xs tracking-wider">
                STATUS: {permit.status}
              </span>
            </div>

            <div className="text-right order-1 sm:order-2 flex-1">
              <div className="flex items-center justify-end gap-2 text-emerald-900 font-bold text-sm sm:text-base">
                <span>نتيجة التحقق: التصريح ساري المفعول ونظامي (VALID)</span>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              </div>
              <p className="text-[11px] text-slate-600 mt-0.5">
                هذا التصريح صادر رسميًا ومطابق لقواعد وأنظمة العمل المؤقت في المملكة العربية السعودية حتى تاريخ {permit.expiryDateText}.
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* DOCUMENT FOOTER & OFFICIAL SEAL (ذيل الوثيقة)             */}
          {/* ========================================================= */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-[10px] text-slate-500">
            
            {/* Barcode visual representation */}
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-0.5 h-6 opacity-80" title="Barcode">
                <span className="w-1 h-full bg-slate-800"></span>
                <span className="w-0.5 h-full bg-slate-800"></span>
                <span className="w-1.5 h-full bg-slate-800"></span>
                <span className="w-0.5 h-full bg-slate-800"></span>
                <span className="w-1 h-full bg-slate-800"></span>
                <span className="w-2 h-full bg-slate-800"></span>
                <span className="w-0.5 h-full bg-slate-800"></span>
                <span className="w-1 h-full bg-slate-800"></span>
                <span className="w-1.5 h-full bg-slate-800"></span>
                <span className="w-0.5 h-full bg-slate-800"></span>
                <span className="w-2 h-full bg-slate-800"></span>
                <span className="w-1 h-full bg-slate-800"></span>
                <span className="w-0.5 h-full bg-slate-800"></span>
                <span className="w-1.5 h-full bg-slate-800"></span>
                <span className="w-2 h-full bg-slate-800"></span>
                <span className="w-0.5 h-full bg-slate-800"></span>
                <span className="w-1 h-full bg-slate-800"></span>
              </div>
              <span className="font-mono tracking-widest text-[9px]">AJ-{permit.iqamaNumber}-2026</span>
            </div>

            {/* Ministry Electronic Certification Stamp Note */}
            <div className="text-right">
              <div className="font-bold text-slate-700">
                منظومة العمل الموحدة • برنامج أجير للعمل المؤقت والإعارة
              </div>
              <div>
                تاريخ الإصدار: {permit.issueDateText} م • الرمز المرجعي: MHRSD-AJR-{permit.id}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Subtle bottom note (Excluded from print) */}
      <div className="no-print max-w-4xl mx-auto mt-4 text-center text-xs text-slate-400">
        وثيقة إلكترونية رسمية معتمدة قابلة للطباعة والحفظ بصيغة PDF مباشرة
      </div>

    </div>
  );
};
