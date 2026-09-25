import React from 'react';

export default function Loader({ progress }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0f12] text-white select-none transition-opacity duration-700">
      <div className="flex flex-col items-center max-w-xs w-full px-6 space-y-6">
        {/* Luxury Monogram */}
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center animate-pulse">
            <span className="font-script text-3xl font-bold">A</span>
          </div>
          <div className="absolute inset-0 rounded-full border border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <div className="text-center space-y-1.5">
          <h2 className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-white/90">
            Aravindh MS
          </h2>
          <p className="text-[10px] text-white/70 tracking-widest font-mono">
            SRE & PRODUCTION OPERATIONS
          </p>
          <p className="text-[10px] text-white/50 tracking-wider font-mono">
            CALIBRATING 60FPS GAZE TRACKING [{progress}%]
          </p>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
