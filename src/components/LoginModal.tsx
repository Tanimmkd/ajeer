import React, { useState } from 'react';
import { X, ShieldCheck, Check, KeyRound, Building, Smartphone } from 'lucide-react';
import { AjeerLogo } from './AjeerLogo';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'nafath' | 'qiwa' | 'ajeer'>('nafath');
  const [nationalId, setNationalId] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nationalId.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 1800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden text-right animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <AjeerLogo size="sm" />
          </div>
        </div>

        {/* Login tabs */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#0c2b42] dark:text-white text-center mb-1">
            تسجيل الدخول إلى منصة أجير
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center mb-6">
            اختر وسيلة الدخول المعتمدة عبر المنظومة الوطنية
          </p>

          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-slate-750 rounded-xl mb-6 text-xs font-bold">
            <button
              onClick={() => setTab('nafath')}
              className={`py-2 rounded-lg transition-colors cursor-pointer ${
                tab === 'nafath'
                  ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              نفاذ الوطني
            </button>
            <button
              onClick={() => setTab('qiwa')}
              className={`py-2 rounded-lg transition-colors cursor-pointer ${
                tab === 'qiwa'
                  ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              منصة قوى
            </button>
            <button
              onClick={() => setTab('ajeer')}
              className={`py-2 rounded-lg transition-colors cursor-pointer ${
                tab === 'ajeer'
                  ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              حساب أجير
            </button>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/60 dark:text-emerald-300 mx-auto flex items-center justify-center">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                جاري التحقق من الهوية عبر نفاذ...
              </div>
              <div className="text-xs text-slate-500">يرجى قبول الطلب في تطبيق نفاذ على هاتفك</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {tab === 'nafath' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    رقم بطاقة الأحوال / الإقامة
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={nationalId}
                      onChange={(e) => setNationalId(e.target.value)}
                      placeholder="10XXXXXXXX أو 2XXXXXXXXX"
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                    <Smartphone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-normal">
                    سيتم إرسال رمز تحقق وتأكيد للطلب عبر تطبيق نفاذ المعتمد.
                  </p>
                </div>
              )}

              {tab === 'qiwa' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      البريد الإلكتروني أو اسم المستخدم في قوى
                    </label>
                    <input
                      type="text"
                      placeholder="user@organization.sa"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      كلمة المرور
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                </div>
              )}

              {tab === 'ajeer' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      رقم المنشأة / السجل التجاري
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="70XXXXXXXX"
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      كلمة المرور
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                      <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#05825a] hover:bg-[#046e4c] text-white font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2 mt-4"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>دخول آمن وموثق</span>
              </button>
            </form>
          )}

          <div className="mt-5 text-center text-xs text-slate-400">
            بوابة آمنة ومشفرة تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية
          </div>
        </div>

      </div>
    </div>
  );
};
