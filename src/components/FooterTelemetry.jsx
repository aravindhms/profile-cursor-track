import React from 'react';
import { ShieldCheck, Mail, Maximize2 } from 'lucide-react';

export default function FooterTelemetry({ faceCoords, scaleMode, onScaleModeChange }) {
  return (
    <footer className="fixed bottom-6 sm:bottom-8 right-6 sm:right-10 z-30 flex flex-col items-end gap-3 pointer-events-none select-none">
      
      {/* Sizing & Scale Mode Selector */}
      <div className="pointer-events-auto flex items-center gap-1.5 p-1 rounded-full bg-white/[0.08] backdrop-blur-[20px] border border-white/20 text-xs font-mono text-white/80 shadow-glass">
        <span className="px-2.5 text-[10px] uppercase tracking-wider text-white/50 flex items-center gap-1">
          <Maximize2 className="w-3 h-3" /> Size:
        </span>
        {[
          { id: 'compact', label: 'Compact' },
          { id: 'balanced', label: 'Balanced' },
          { id: 'full', label: 'Full' },
        ].map((mode) => (
          <button
            key={mode.id}
            onClick={() => onScaleModeChange(mode.id)}
            className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
              scaleMode === mode.id
                ? 'bg-white text-neutral-900 font-semibold shadow-sm'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>

      {/* Telemetry pill */}
      <div className="pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-[20px] border border-white/20 text-xs font-mono text-white/80 shadow-glass transition-all hover:bg-white/[0.12] hover:border-white/30">
        <span className="flex items-center gap-1.5 text-white/95">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] tracking-wider uppercase font-semibold">99.99% Reliability</span>
        </span>
        <span className="h-3 w-px bg-white/20"></span>
        <span className="text-[10px] text-white/70">60 FPS · Zero-Lag Lerp</span>
      </div>

      {/* Social & Contact links pill */}
      <div className="pointer-events-auto flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.08] backdrop-blur-[20px] border border-white/20 text-white/80 shadow-glass">
        {/* GitHub */}
        <a
          href="https://github.com/aravindhms"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          title="GitHub: /aravindhms"
          className="p-2 rounded-full hover:bg-white/15 hover:text-white transition-all cursor-pointer"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aravindhms/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          title="LinkedIn: /in/aravindhms"
          className="p-2 rounded-full hover:bg-white/15 hover:text-white transition-all cursor-pointer"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919840693143"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Chat"
          title="WhatsApp: +91-9840693143"
          className="p-2 rounded-full hover:bg-white/15 hover:text-emerald-300 transition-all cursor-pointer"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 0C5.396 0 .013 5.384.013 12.019c0 2.117.553 4.185 1.603 6.006L0 24l6.169-1.619a12.003 12.003 0 005.86 1.519h.005c6.634 0 12.019-5.385 12.019-12.02 0-3.21-1.25-6.226-3.522-8.497A11.946 11.946 0 0012.031 0zm0 22.013h-.004a10.01 10.01 0 01-5.1-1.398l-.366-.217-3.791.994 1.012-3.696-.238-.379a9.99 9.99 0 01-1.536-5.308c0-5.526 4.496-10.021 10.027-10.021 2.678 0 5.195 1.044 7.088 2.937a9.972 9.972 0 012.933 7.086c0 5.527-4.496 10.022-10.025 10.022zm5.494-7.502c-.301-.151-1.782-.879-2.058-.98-.276-.1-.476-.151-.677.151-.2.301-.778.98-.953 1.181-.176.201-.351.226-.652.075-.301-.151-1.274-.469-2.427-1.498-.897-.8-1.503-1.788-1.679-2.09-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.151-.677-1.631-.928-2.234-.244-.588-.493-.508-.677-.518l-.577-.01c-.201 0-.527.075-.803.377-.276.301-1.054 1.029-1.054 2.509 0 1.48 1.079 2.909 1.229 3.11.151.201 2.124 3.244 5.145 4.549.718.311 1.279.497 1.716.636.721.23 1.377.197 1.896.12.577-.086 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.352z"/>
          </svg>
        </a>

        {/* Email Direct */}
        <a
          href="mailto:aravindhms1@gmail.com"
          aria-label="Direct Email"
          title="Email: aravindhms1@gmail.com"
          className="p-2 rounded-full hover:bg-white/15 hover:text-red-300 transition-all cursor-pointer"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
