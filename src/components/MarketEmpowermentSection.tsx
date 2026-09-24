import React from 'react';
import { Landmark, Users2, ShieldCheck, Award, TrendingUp } from 'lucide-react';

export const MarketEmpowermentSection: React.FC = () => {
  const features = [
    {
      title: 'مرونة إدارة القوى العاملة',
      description:
        'تمكين المنشآت من مواجهة تقلبات العرض والطلب ومواسم الذروة عبر الإعارة المؤقتة دون الحاجة لنقل الكفالة أو الالتزامات طويلة الأجل.',
      icon: Users2,
    },
    {
      title: 'تنظيم وحماية قانونية 100%',
      description:
        'حماية كاملة للمنشآت والأفراد من مخالفات العمل والتفتيش عبر توثيق إلكتروني معتمد لدى الجهات الحكومية والأمنية.',
      icon: ShieldCheck,
    },
    {
      title: 'دعم مستهدفات رؤية 2030',
      description:
        'المساهمة في بناء سوق عمل جاذب ومتطور ورفع كفاءة الإنتاجية الوطنية بما يتوافق مع استراتيجيات التنمية الاقتصادية.',
      icon: Award,
    },
    {
      title: 'خفض تكاليف الاستقدام',
      description:
        'استثمار الكفاءات المتواجدة بالفعل داخل المملكة وإعادة تدوير الطاقات الفائضة بما يسهم في ترشيد نفقات الاستقدام الخارجي.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about-ajeer" className="py-16 md:py-24 bg-[#f8fafc] dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right column in RTL: 4 Feature cards grid (7 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 order-2 lg:order-1">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow text-right flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-800/80 flex items-center justify-center mb-4 self-end">
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0c2b42] dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left column in RTL: Main Text & Vision 2030 Card (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-right order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
              <Landmark className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>مبادرة وزارة الموارد البشرية والتنمية الاجتماعية</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2b42] dark:text-white tracking-tight leading-[1.25]">
              تمكين سوق العمل السعودي بحلول تشغيلية مرنة وموثّقة
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                أُطلق برنامج أجير ليكون المظلة النظامية الأولى لتبادل القوى العاملة المؤقتة في المملكة العربية السعودية، مستهدفاً الربط بين المنشآت ذات الفائض التشغيلي والمنشآت ذات الاحتياج العاجل، وتوفير فرص عمل مرنة للأفراد والتابعين بكل سهولة وشفافية.
              </p>
              <p>
                يرتبط أجير تقنياً ومباشرة مع منصة &quot;قوى&quot; والأنظمة الوطنية الموحدة للتأكد من نظامية كافة المعاملات وسريان الوثائق آلياً على مدار الساعة.
              </p>
            </div>

            {/* Vision 2030 Card matching screenshot */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between gap-4">
              <div className="px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-black text-xl tracking-wider font-mono">
                2030
              </div>
              <div className="text-right flex-1">
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  رؤية المملكة العربية السعودية 2030
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  تحقيق التنمية المستدامة، تحسين بيئة الأعمال، وزيادة مساهمة الكفاءات في الاقتصاد الوطني.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
