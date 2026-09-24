import React, { useState } from 'react';
import { X, Search, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { PermitData } from '../types';
import { samplePermits } from '../data/mockData';

interface CustomLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPermit: (permit: PermitData) => void;
}

export const CustomLookupModal: React.FC<CustomLookupModalProps> = ({
  isOpen,
  onClose,
  onSelectPermit,
}) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const trimmed = query.trim();

    if (!trimmed) {
      setError('يرجى إدخال رقم الإقامة أو رقم التصريح');
      return;
    }

    const found = samplePermits.find(
      (p) =>
        p.iqamaNumber.includes(trimmed) ||
        p.permitNumber.toLowerCase().includes(trimmed.toLowerCase()) ||
        p.workerName.toLowerCase().includes(trimmed.toLowerCase())
    );

    if (found) {
      onSelectPermit(found);
      onClose();
    } else {
      // Dynamic fallback preview for custom permit numbers
      const customPermit: PermitData = {
        id: `PRM-${Date.now().toString().slice(-4)}`,
        permitNumber: trimmed.startsWith('AJ') ? trimmed : `AJ-${trimmed}-2026`,
        iqamaNumber: trimmed.replace(/\D/g, '') || '2621590559',
        status: 'VALID',
        statusLabel: 'ساري المفعول (VALID)',
        badgeLabel: 'نشط ومعتمد',
        registryNote: 'موثق في السجل الوطني لبرنامج أجير ووزارة الموارد البشرية والتنمية الاجتماعية',
        issueDateText: '07-13 2026',
        expiryDateText: '2026-12-12',
        workerName: 'IQBAL HUSSAIN',
        profession: 'عامل تحميل وتنزيل',
        nationality: 'باكستاني',
        providerName: 'شركة أحمد غزاي المطيري',
        providerMhrsdNumber: '6-454716',
        beneficiaryName: 'شركة الطرق التقنية للمقاولات الميكانيكية شركة شخص واحد',
        beneficiaryMhrsdNumber: '9-4104699',
        contractSummary: 'عقد العمل',
        workLocations: '55M، الناعة ، المنطقة ، الصناعية 46475',
      };
      onSelectPermit(customPermit);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden text-right animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-[#0c2b42] dark:text-white">
              التحقق من تصريح أو إشعار أجير
            </h3>
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                رقم الهوية الوطنية / الإقامة أو رقم التصريح
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="مثال: 2621590559 أو AJ-94104699-2026"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 dark:bg-slate-700/60 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                  autoFocus
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
              {error && (
                <div className="flex items-center gap-1.5 mt-2 text-xs text-rose-600 dark:text-rose-400">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#05825a] hover:bg-[#046e4c] text-white font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>فحص الوثيقة وسريان المفعول</span>
            </button>
          </form>

          {/* Quick presets */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-700">
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
              نماذج تصاريح جاهزة للاختبار:
            </div>
            <div className="space-y-2">
              {samplePermits.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => {
                    onSelectPermit(sample);
                    onClose();
                  }}
                  className="w-full text-right p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/30 transition-all flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        sample.status === 'VALID'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300'
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300'
                      }`}
                    >
                      {sample.status}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 dark:text-slate-100 font-mono">
                      {sample.workerName} ({sample.iqamaNumber})
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-[11px]">
                      {sample.profession} • {sample.beneficiaryName.slice(0, 32)}...
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
