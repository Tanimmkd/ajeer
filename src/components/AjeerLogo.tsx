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

  // Sizing definitions
  const dimensions = {
    sm: { width: 90, height: 48 },
    md: { width: 118, height: 60 },
    lg: { width: 152, height: 76 },
  }[size];

  const navyColor = isLight ? '#ffffff' : '#0e2b48';
  const mintDotColor = '#60c3b0'; // Exact mint/teal circle from uploaded image
  const ajeerGreen = isLight ? '#6ee7b7' : '#009e75'; // Exact green for English wordmark

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
    >
      <svg
        viewBox="0 0 128 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-label="أجير - AJEER"
      >
        {/* 1. Mint / Pastel-Teal Dot on the far left (Matches the uploaded reference) */}
        <circle cx="15.5" cy="33.5" r="5.8" fill={mintDotColor} />

        {/* 2. Arabic Logotype: "أجير" in official bold geometric styling */}
        <g fill={navyColor} className="dark:fill-slate-100 transition-colors">
          {/* Alif with Hamza (أ) */}
          {/* Hamza */}
          <path
            d="M109.8 8.8C109.8 6.5 111.4 4.8 114 4.8C116.3 4.8 117.8 6.2 117.8 8.2C117.8 10 116.5 11.2 114.4 12.1L117.8 13.8V15.2H110.2V13.8L114.1 12.4C111.8 11.4 109.8 10.3 109.8 8.8Z"
          />
          {/* Alif vertical stem */}
          <rect x="110.8" y="17" width="6.6" height="25" rx="0.8" />

          {/* Jeem (ج) Head */}
          <path
            d="M87.2 19L102.5 28C104.2 29 105 30.5 105 32.2C105 34.2 103.4 35.8 101 35.8H85L76.5 24.8C75.2 23 75.8 20.4 77.8 19.3C79.6 18.2 82 18.3 83.8 18.8L87.2 19Z"
          />

          {/* Connected baseline of Jeem, Yaa, and swooping Raa (ـجـيـر) */}
          <path
            d="M103.5 35.8H58.5C57.5 35.8 56.5 36.2 55.8 37L51.5 41.5C49 44 46 45.4 41.8 46C36.2 46.8 28.5 46.8 23.5 44C19 41.5 17.5 37.5 18 34.2L24.2 32C24.5 34.2 26.5 37.8 31 39.5C35 41 40.5 40.8 44 39.2L48.8 34.2C51 32 54 30.8 57.2 30.8H83.5L90.5 35.8H103.5V35.8Z"
          />

          {/* Two Diamond-shaped Diacritic dots for Yaa (ـيـ) */}
          {/* Right Diamond dot */}
          <rect
            x="64"
            y="43.5"
            width="5.5"
            height="5.5"
            transform="rotate(45 64 43.5)"
            rx="0.4"
          />
          {/* Left Diamond dot */}
          <rect
            x="48.5"
            y="43.5"
            width="5.5"
            height="5.5"
            transform="rotate(45 48.5 43.5)"
            rx="0.4"
          />
        </g>

        {/* 3. English Sub-Wordmark: "A J E E R" */}
        <text
          x="30"
          y="61"
          fill={ajeerGreen}
          fontSize="10.8"
          fontWeight="800"
          fontFamily="'IBM Plex Sans Arabic', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          letterSpacing="0.28em"
          className="select-none font-bold"
        >
          AJEER
        </text>
      </svg>
    </div>
  );
};
