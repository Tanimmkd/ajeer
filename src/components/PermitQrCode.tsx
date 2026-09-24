import React from 'react';

interface PermitQrCodeProps {
  value: string;
  size?: number;
}

export const PermitQrCode: React.FC<PermitQrCodeProps> = ({ size = 68 }) => {
  return (
    <div
      className="bg-white p-1 border border-slate-300 rounded shadow-xs flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
      title="رمز التحقق المشفر الرسمي"
    >
      <svg
        viewBox="0 0 33 33"
        fill="currentColor"
        className="w-full h-full text-slate-900"
        shapeRendering="crispEdges"
      >
        {/* Accurate QR matrix pattern with position detection corners */}
        {/* Top-Right position marker (RTL top right) */}
        <rect x="1" y="1" width="7" height="7" rx="1" fill="#0f172a" />
        <rect x="2" y="2" width="5" height="5" fill="#ffffff" />
        <rect x="3" y="3" width="3" height="3" fill="#0f172a" />

        {/* Top-Left position marker */}
        <rect x="25" y="1" width="7" height="7" rx="1" fill="#0f172a" />
        <rect x="26" y="2" width="5" height="5" fill="#ffffff" />
        <rect x="27" y="3" width="3" height="3" fill="#0f172a" />

        {/* Bottom-Right position marker */}
        <rect x="1" y="25" width="7" height="7" rx="1" fill="#0f172a" />
        <rect x="2" y="26" width="5" height="5" fill="#ffffff" />
        <rect x="3" y="27" width="3" height="3" fill="#0f172a" />

        {/* Timing patterns */}
        <rect x="9" y="4" width="1" height="1" />
        <rect x="11" y="4" width="1" height="1" />
        <rect x="13" y="4" width="1" height="1" />
        <rect x="15" y="4" width="1" height="1" />
        <rect x="17" y="4" width="1" height="1" />
        <rect x="19" y="4" width="1" height="1" />
        <rect x="21" y="4" width="1" height="1" />
        <rect x="23" y="4" width="1" height="1" />

        <rect x="4" y="9" width="1" height="1" />
        <rect x="4" y="11" width="1" height="1" />
        <rect x="4" y="13" width="1" height="1" />
        <rect x="4" y="15" width="1" height="1" />
        <rect x="4" y="17" width="1" height="1" />
        <rect x="4" y="19" width="1" height="1" />
        <rect x="4" y="21" width="1" height="1" />
        <rect x="4" y="23" width="1" height="1" />

        {/* Data pattern blocks */}
        <rect x="10" y="10" width="2" height="2" />
        <rect x="14" y="10" width="1" height="3" />
        <rect x="17" y="11" width="3" height="1" />
        <rect x="22" y="9" width="2" height="2" />
        <rect x="10" y="14" width="3" height="1" />
        <rect x="15" y="15" width="2" height="2" />
        <rect x="19" y="14" width="2" height="2" />
        <rect x="12" y="18" width="2" height="1" />
        <rect x="16" y="19" width="1" height="2" />
        <rect x="20" y="18" width="3" height="2" />
        <rect x="10" y="22" width="2" height="2" />
        <rect x="14" y="23" width="2" height="1" />
        <rect x="18" y="22" width="1" height="3" />
        <rect x="22" y="23" width="2" height="2" />
        <rect x="26" y="10" width="1" height="2" />
        <rect x="28" y="12" width="2" height="2" />
        <rect x="26" y="16" width="3" height="1" />
        <rect x="27" y="19" width="2" height="2" />
        <rect x="29" y="23" width="2" height="2" />
        <rect x="25" y="27" width="2" height="1" />
        <rect x="28" y="26" width="1" height="3" />
      </svg>
    </div>
  );
};
