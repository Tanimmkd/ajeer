import React from 'react';

interface AjeerLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  layout?: 'stacked' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
}

export const AjeerLogo: React.FC<AjeerLogoProps> = ({
  className = '',
  variant = 'dark',
  layout = 'stacked',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  // Sizing definitions
  const arabicTextClass =
    size === 'sm'
      ? 'text-xl sm:text-2xl font-black'
      : size === 'lg'
      ? 'text-3xl sm:text-4xl font-black'
      : 'text-2xl sm:text-3xl font-black';

  const englishTextClass =
    size === 'sm'
      ? 'text-[8px] sm:text-[9px] font-extrabold tracking-[0.24em]'
      : size === 'lg'
      ? 'text-[11px] sm:text-[12px] font-extrabold tracking-[0.26em]'
      : 'text-[9px] sm:text-[10px] font-extrabold tracking-[0.25em]';

  const arabicColor = isLight ? 'text-white' : 'text-[#0c2b44] dark:text-white';
  const greenColor = isLight ? 'text-[#34d399]' : 'text-[#059669] dark:text-[#34d399]';

  if (layout === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-2 select-none ${className}`} dir="rtl">
        <span
          className={`${arabicTextClass} ${arabicColor} leading-none tracking-tight`}
          style={{ fontFamily: "'Cairo', 'IBM Plex Sans Arabic', sans-serif" }}
        >
          أجيـر
        </span>
        <span
          className={`${englishTextClass} ${greenColor} uppercase leading-none font-sans`}
          style={{ letterSpacing: '0.22em' }}
        >
          AJEER
        </span>
      </div>
    );
  }

  // Stacked Layout (Default for Navbar, Footer, and Hero)
  return (
    <div
      className={`inline-flex flex-col items-center justify-center select-none ${className}`}
      dir="rtl"
    >
      {/* Arabic Wordmark with official green accent dot */}
      <div className="relative inline-flex items-center leading-none">
        <span
          className={`${arabicTextClass} ${arabicColor} tracking-tight`}
          style={{ fontFamily: "'Cairo', 'IBM Plex Sans Arabic', sans-serif" }}
        >
          أجيـر
        </span>
        {/* Subtle green indicator dot characteristic of the digital Ajeer identity */}
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#10b981] inline-block -mt-3.5 -mr-0.5 shadow-2xs"></span>
      </div>

      {/* English submark AJEER in official green */}
      <span
        className={`${englishTextClass} ${greenColor} uppercase font-sans -mt-0.5`}
        style={{ letterSpacing: '0.28em' }}
      >
        AJEER
      </span>
    </div>
  );
};
