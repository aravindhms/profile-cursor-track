import React from 'react';
import { ArrowUpRight, MessageCircle, Download } from 'lucide-react';

export default function HeroContent({ onOpenResume, onOpenContact }) {
  return (
    <div className="fixed bottom-8 sm:bottom-12 left-6 sm:left-12 lg:left-16 z-30 max-w-[440px] pointer-events-none select-none">
      <div className="pointer-events-auto space-y-4">
        
        {/* Professional Role Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.12] backdrop-blur-md border border-white/20 text-[11px] uppercase tracking-widest font-semibold text-white/95 shadow-sm transition-transform hover:scale-105">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          SRE & Application Support Engineer · Chennai
        </div>

        {/* Hero Title & Script Name */}
        <div className="space-y-0.5">
          <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-white/80">
            Hi, I'm
          </p>
          <div className="flex items-baseline gap-3">
            <h1
              className="font-script text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-normal leading-tight"
              style={{
                textShadow: '0 8px 30px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.25)',
              }}
            >
              Aravindh
            </h1>
            <span className="text-xl sm:text-2xl font-mono font-bold text-white/60 tracking-wider">
              MS
            </span>
          </div>
        </div>

        {/* Summary directly from official resume */}
        <p className="font-sans text-sm sm:text-base font-normal leading-relaxed text-white/90 max-w-[390px] drop-shadow-sm">
          Managing and automating mission-critical systems across FinTech, Healthcare, and IT. Driving continuous service improvement through proactive automation, expert L2/L3 support, and ITIL practices.
        </p>

        {/* Core Domains & Automation Highlights */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-white/85">
          <span className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15">
            Python & Shell Automation
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15">
            Datadog · ELK · Splunk
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15">
            Terraform · Jenkins · ITIL
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {/* View Resume */}
          <button
            onClick={onOpenResume}
            className="group relative px-6 py-3 rounded-full bg-white text-neutral-900 font-semibold text-sm tracking-wide shadow-luxury transition-all duration-300 hover:bg-neutral-100 hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>View Resume</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Quick PDF Direct Download */}
          <a
            href="/Aravindh_MS_Resume.pdf"
            download="Aravindh_MS_Resume.pdf"
            title="Download Official Resume PDF"
            className="p-3 rounded-full bg-white/[0.08] backdrop-blur-[20px] border border-white/40 text-white hover:bg-white/20 hover:border-white/70 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-glass group"
          >
            <Download className="w-4 h-4 text-white/90 group-hover:scale-110 transition-transform" />
          </a>

          {/* Contact */}
          <button
            onClick={onOpenContact}
            className="group relative px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-[20px] border border-white/40 text-white font-semibold text-sm tracking-wide shadow-glass transition-all duration-300 hover:bg-white/20 hover:border-white/70 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
            <span>Contact</span>
          </button>
        </div>

      </div>
    </div>
  );
}
