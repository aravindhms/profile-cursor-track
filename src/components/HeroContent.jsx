import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export default function HeroContent({ onOpenWork, onOpenContact }) {
  return (
    <>
      {/* Soft Readability Ambient Cushion */}
      <div
        className="fixed bottom-0 left-0 w-full sm:w-[680px] h-[520px] pointer-events-none z-20 bg-gradient-to-tr from-black/50 via-black/15 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />

      <div className="fixed bottom-8 sm:bottom-12 left-6 sm:left-12 lg:left-16 z-30 max-w-[460px] pointer-events-none select-none">
        <div className="pointer-events-auto space-y-4">
          
          {/* Professional Role Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.12] backdrop-blur-md border border-white/20 text-[11px] uppercase tracking-widest font-semibold text-white/95 shadow-glass transition-transform hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            SRE & Application Support Lead · Chennai
          </div>

          {/* Hero Title & Modern Executive Typography */}
          <div className="space-y-1">
            <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/75">
              Hello, I'm
            </p>
            <div className="flex items-baseline gap-3">
              <h1
                className="font-sans text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none"
                style={{
                  textShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)',
                }}
              >
                Aravindh
              </h1>
              <span className="text-2xl sm:text-3xl font-mono font-bold text-red-200 tracking-wider">
                MS
              </span>
            </div>
          </div>

          {/* Hero Value Proposition */}
          <p className="font-sans text-sm sm:text-base font-normal leading-relaxed text-white/95 max-w-[420px] drop-shadow-sm">
            Architecting high-availability infrastructure and automating mission-critical production systems across FinTech and Enterprise IT with 99.99% uptime excellence.
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
          {/* Explore Work */}
          <button
            onClick={onOpenWork}
            className="group relative px-6 py-3 rounded-full bg-white text-neutral-900 font-semibold text-sm tracking-wide shadow-luxury transition-all duration-300 hover:bg-neutral-100 hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Work</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

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
  </>
  );
}
