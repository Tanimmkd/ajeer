import React from 'react';

interface AjeerLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const AjeerLogo: React.FC<AjeerLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const isLight = variant === 'light';
  
  // Dimensions based on size
  const height = size === 'sm' ? '32px' : size === 'lg' ? '54px' : '44px';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`} style={{ height }}>
      <div className="flex items-center gap-1.5 leading-none">
        {/* Customized typography simulating the iconic Ajeer Arabic calligraphy lockup */}
        <span
          className={`font-black text-2xl md:text-3xl tracking-tight transition-colors ${
            isLight ? 'text-white' : 'text-[#0d2a45] dark:text-slate-100'
          }`}
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          أجيـ<span className="text-[#0ea5e9] dark:text-[#38bdf8]">ـر</span>
        </span>
        
        {/* Accent dot cluster icon representing labor marketplace connectivity */}
        <div className="flex flex-col items-center justify-center -mt-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] inline-block shadow-sm"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#059669] inline-block -mt-0.5"></span>
        </div>
      </div>
      
      {/* English submark AJEER */}
      <span
        className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] -mt-1 text-[#10b981] uppercase"
        style={{ letterSpacing: '0.22em' }}
      >
        AJEER
      </span>
    </div>
  );
};
