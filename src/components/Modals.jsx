import React, { useState } from 'react';
import { X, ExternalLink, Mail, Copy, Check, Download, ShieldCheck, Activity, Terminal, Layers, ArrowRight, Server, RefreshCw, FileText, Phone, MessageSquare, Code2 } from 'lucide-react';

export default function Modals({ activeModal, onClose }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!activeModal) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aravindhms1@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91-9840693143');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-md transition-all duration-300">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-neutral-900/95 text-white border border-white/20 rounded-3xl p-6 sm:p-8 shadow-luxury backdrop-blur-2xl z-10 custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STAR STORIES & SRE REPOSITORIES MODAL */}
        {activeModal === 'work' && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-red-300 mb-2">
                <Activity className="w-3.5 h-3.5" /> Key Production Wins & Tooling
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans">Production Reliability & Wins</h2>
              <p className="text-white/70 text-sm mt-1">Ten years of production support, automation and reliability across FinTech, Healthcare IT and Entertainment.</p>
            </div>

            {/* Five Quantified Wins Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center pt-1">
              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10">
                <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400">−40%</span>
                <p className="text-[10px] text-white/70 uppercase tracking-tight mt-0.5">Incident Response</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10">
                <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400">−40%</span>
                <p className="text-[10px] text-white/70 uppercase tracking-tight mt-0.5">Downtime Incidents</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10">
                <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400">−30%</span>
                <p className="text-[10px] text-white/70 uppercase tracking-tight mt-0.5">Manual Support</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10">
                <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400">+30%</span>
                <p className="text-[10px] text-white/70 uppercase tracking-tight mt-0.5">Ops Performance</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400">+20%</span>
                <p className="text-[10px] text-white/70 uppercase tracking-tight mt-0.5">Team Productivity</p>
              </div>
            </div>

            {/* Resume Stories */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs uppercase tracking-widest text-white/60 font-semibold">Core Production Wins</h4>
              
              {/* Story 1 */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-red-300 font-semibold">PagoNxt · Payments Platform</span>
                    <h3 className="text-lg font-bold">The 40% Response-Time Rescue</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-semibold">
                    −40% Response
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
                  <div className="p-2.5 rounded-xl bg-white/[0.03]">
                    <strong className="text-red-200">Situation:</strong> Payment platform incidents surfaced late; alerts reached on-call engineers after customer impact spread.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03]">
                    <strong className="text-red-200">Action:</strong> Rebuilt monitoring and alerting layer, tied alerts to payment-path components, and embedded runbooks in alert payloads.
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[11px] font-mono text-white/60">Stack:</span>
                  {['Datadog', 'Terraform', 'Blue-Green', 'Runbooks', 'ITIL'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-white/80">{t}</span>
                  ))}
                </div>
              </div>

              {/* Story 2 */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-red-300 font-semibold">PagoNxt · Release Engineering</span>
                    <h3 className="text-lg font-bold">Blue-Green Confidence</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs font-semibold">
                    &lt; 1 min Rollback
                  </span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Introduced parallel Blue-Green deployment stacks with atomic router traffic switching. Replaced high-drama release windows with smoke-tested cutovers and single go/no-go ownership, making rollbacks reversible in minutes.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[11px] font-mono text-white/60">Stack:</span>
                  {['Router / Load Balancer', 'Blue-Green Stacks', 'Automated Smoke Tests'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-white/80">{t}</span>
                  ))}
                </div>
              </div>

              {/* Story 3 */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-red-300 font-semibold">Citi · Production Resilience</span>
                    <h3 className="text-lg font-bold">DR Test Day Lead</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 font-mono text-xs font-semibold">
                    Zero-Surprise DR
                  </span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Led end-to-end disaster recovery failover exercises across active data-centres. Refreshed runbooks, sequenced DNS and database cutover, rehearsed application bring-up, and verified RTO/RPO targets within the agreed change window.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[11px] font-mono text-white/60">Stack:</span>
                  {['BCP / DR Planning', 'RTO / RPO Targets', 'KNIME', 'DC Operations'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-white/80">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Verified SRE & Production GitHub Repositories */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase tracking-widest text-white/60 font-semibold flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-red-300" /> SRE & Operations Open-Source Tooling
                </h4>
                <a
                  href="https://github.com/aravindhms"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-mono text-red-300 hover:text-white flex items-center gap-1"
                >
                  <span>github.com/aravindhms</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    name: 'sd-dashboard',
                    title: 'SRE & Support Telemetry Dashboard',
                    desc: 'Real-time dashboard for Production Support and SRE teams to monitor system health, active incidents, and KPIs.',
                    lang: 'JavaScript',
                    link: 'https://github.com/aravindhms/sd-dashboard',
                  },
                  {
                    name: 'prod-support-automation-pack',
                    title: 'Production Support Automation Pack',
                    desc: 'Automated operational scripts for batch monitoring, auto-recovery routines, and routine task elimination.',
                    lang: 'Python / Shell',
                    link: 'https://github.com/aravindhms/prod-support-automation-pack',
                  },
                  {
                    name: 'terminaldecoder',
                    title: 'Terminal Command Decoder',
                    desc: 'Instant syntax and flag analyzer for Unix, Git, Terraform, Docker, and Kubernetes command-line tools.',
                    lang: 'JavaScript / DevOps',
                    link: 'https://github.com/aravindhms/terminaldecoder',
                  },
                  {
                    name: 'unixutils',
                    title: 'Unix Sandbox & Operations Toolkit',
                    desc: 'Browser-based developer sandbox for rapid regex verification, command prototyping, and log parsing workflows.',
                    lang: 'JavaScript / Shell',
                    link: 'https://github.com/aravindhms/unixutils',
                  }
                ].map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-white group-hover:text-red-300 transition-colors flex items-center gap-1">
                          {repo.name}
                        </span>
                        <ExternalLink className="w-3 h-3 text-white/50 group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-[11px] text-white/60 font-medium mt-0.5">{repo.title}</p>
                      <p className="text-xs text-white/80 mt-1.5 leading-relaxed">{repo.desc}</p>
                    </div>
                    <div className="pt-2">
                      <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/70">
                        {repo.lang}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* CAREER ARC / ABOUT MODAL */}
        {activeModal === 'about' && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-red-300 mb-2">
                <Terminal className="w-3.5 h-3.5" /> Career Narrative & Positioning
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans">A Decade of Systems Reliability</h2>
            </div>

            {/* Core Pitch Quote */}
            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 italic text-white/90 text-sm leading-relaxed">
              "I'm a production operations engineer with 10+ years keeping payments, healthcare and entertainment platforms up — from 24×7 monitoring at Cognizant to Blue-Green releases at PagoNxt and DR planning at Citi. <strong className="text-white not-italic">I automate first, escalate second.</strong>"
            </div>

            {/* The 4-Stop Career Arc */}
            <div className="space-y-3 pt-1">
              <h4 className="text-xs uppercase tracking-widest text-white/60 font-semibold">The Career Arc — One Sentence Per Stop</h4>
              
              <div className="space-y-2.5">
                {[
                  {
                    company: 'TAO',
                    role: 'Technical Lead',
                    desc: 'Production operations leadership, incident escalation governance, and cross-functional reliability ownership.'
                  },
                  {
                    company: 'Citi',
                    role: 'Process Owner',
                    desc: 'BCP/DR planning lead, runbook refresh, junior mentoring, and KNIME workflow stabilization (+20% team productivity).'
                  },
                  {
                    company: 'PagoNxt',
                    role: 'SRE Practitioner',
                    desc: 'Overhauled monitoring & alerting layer (−40% response time), managed Blue-Green cutovers with Datadog and Terraform.'
                  },
                  {
                    company: 'Cognizant',
                    role: 'Support Engineer',
                    desc: '24×7 job monitoring and Shell/Python automation with crontab (−30% manual effort, −40% downtime incidents).'
                  }
                ].map((stop) => (
                  <div key={stop.company} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-sm font-bold text-white">{stop.company}</strong>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-red-300 font-mono">{stop.role}</span>
                      </div>
                      <p className="text-xs text-white/75 mt-1">{stop.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] font-mono text-white/70 text-center">
                Support Engineer → SRE Practitioner → Process Owner → Technical Lead
              </div>
            </div>

            {/* Technical Tooling */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-widest text-white/60 font-semibold">Production Tooling & Systems</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {['Datadog / Splunk / ELK', 'Terraform (IaC)', 'Control-M / Rundeck', 'Python / Shell Scripts', 'Blue-Green Deployment', 'BCP / Disaster Recovery', 'SLO / SLI / Error Budgets', 'ITIL Incident & Problem', 'AWS / Cloud Infrastructure'].map((item) => (
                  <div key={item} className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    <span className="font-mono text-[11px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONTACT MODAL */}
        {activeModal === 'contact' && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-red-300 mb-2">
                <Mail className="w-3.5 h-3.5" /> Direct Contact Channels
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans">Connect with Aravindh MS</h2>
              <p className="text-white/70 text-sm mt-1">Available for SRE Leadership, Technical Lead, and Production Operations opportunities.</p>
            </div>

            {/* Contact Channels Grid */}
            <div className="space-y-2.5">
              {/* Email */}
              <div className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-red-500/20 text-red-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">Email Address</span>
                    <a href="mailto:aravindhms1@gmail.com" className="text-sm font-mono text-white/95 hover:text-white hover:underline">
                      aravindhms1@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* LinkedIn */}
              <div className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/20 text-blue-300">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">LinkedIn Profile</span>
                    <span className="text-sm font-mono text-white/95">linkedin.com/in/aravindhms</span>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/aravindhms/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer text-white"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Connect</span>
                </a>
              </div>

              {/* GitHub */}
              <div className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-neutral-700/50 text-white">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">GitHub Repositories</span>
                    <span className="text-sm font-mono text-white/95">github.com/aravindhms</span>
                  </div>
                </div>
                <a
                  href="https://github.com/aravindhms"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer text-white"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Visit</span>
                </a>
              </div>

              {/* WhatsApp */}
              <div className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 0C5.396 0 .013 5.384.013 12.019c0 2.117.553 4.185 1.603 6.006L0 24l6.169-1.619a12.003 12.003 0 005.86 1.519h.005c6.634 0 12.019-5.385 12.019-12.02 0-3.21-1.25-6.226-3.522-8.497A11.946 11.946 0 0012.031 0zm0 22.013h-.004a10.01 10.01 0 01-5.1-1.398l-.366-.217-3.791.994 1.012-3.696-.238-.379a9.99 9.99 0 01-1.536-5.308c0-5.526 4.496-10.021 10.027-10.021 2.678 0 5.195 1.044 7.088 2.937a9.972 9.972 0 012.933 7.086c0 5.527-4.496 10.022-10.025 10.022zm5.494-7.502c-.301-.151-1.782-.879-2.058-.98-.276-.1-.476-.151-.677.151-.2.301-.778.98-.953 1.181-.176.201-.351.226-.652.075-.301-.151-1.274-.469-2.427-1.498-.897-.8-1.503-1.788-1.679-2.09-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.151-.677-1.631-.928-2.234-.244-.588-.493-.508-.677-.518l-.577-.01c-.201 0-.527.075-.803.377-.276.301-1.054 1.029-1.054 2.509 0 1.48 1.079 2.909 1.229 3.11.151.201 2.124 3.244 5.145 4.549.718.311 1.279.497 1.716.636.721.23 1.377.197 1.896.12.577-.086 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.352z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">WhatsApp Phone</span>
                    <span className="text-sm font-mono text-white/95">+91-9840693143</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyPhone}
                    className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href="https://wa.me/919840693143"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-emerald-600/80 hover:bg-emerald-600 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer text-white"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Note Form */}
            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-emerald-300">Message Received!</h4>
                <p className="text-xs text-emerald-200/80">Thank you for getting in touch. Aravindh will respond promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    type="text"
                    placeholder="Your Name / Org"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                  />
                </div>
                <textarea
                  required
                  rows="2"
                  placeholder="Note regarding SRE / Production Lead opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-white text-neutral-900 font-semibold text-sm tracking-wide shadow-luxury hover:bg-neutral-100 transition-all cursor-pointer active:scale-98"
                >
                  Send Direct Note
                </button>
              </form>
            )}
          </div>
        )}

        {/* RESUME / CHEATSHEET MODAL */}
        {activeModal === 'resume' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-red-300 mb-2">
                  <FileText className="w-3.5 h-3.5" /> Curriculum Vitae
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-sans">Aravindh MS — 10+ Yrs SRE</h2>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-white/70">
                  <a href="mailto:aravindhms1@gmail.com" className="hover:text-white underline">aravindhms1@gmail.com</a>
                  <span>•</span>
                  <a href="https://www.linkedin.com/in/aravindhms/" target="_blank" rel="noreferrer" className="hover:text-white underline">linkedin.com/in/aravindhms</a>
                  <span>•</span>
                  <a href="https://github.com/aravindhms" target="_blank" rel="noreferrer" className="hover:text-white underline">github.com/aravindhms</a>
                  <span>•</span>
                  <span>+91-9840693143</span>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start">
                <a
                  href="/Aravindh_MS_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> View PDF
                </a>
                <a
                  href="/Aravindh_MS_Resume.pdf"
                  download="Aravindh_MS_Resume.pdf"
                  className="px-4 py-2 rounded-full bg-white text-neutral-900 font-semibold text-xs flex items-center gap-2 hover:bg-white/90 transition-all cursor-pointer shadow-luxury"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </a>
              </div>
            </div>

            {/* Official PDF Resume Download Banner */}
            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-red-500/20 text-red-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-sm font-bold text-white block">Official Resume (Aravindh MS)</strong>
                  <span className="text-xs text-white/60 font-mono">Verified Production Resume (PDF · 258 KB)</span>
                </div>
              </div>
              <a
                href="/Aravindh_MS_Resume.pdf"
                download="Aravindh_MS_Resume.pdf"
                className="px-4 py-2 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm self-start sm:self-auto"
              >
                <Download className="w-3.5 h-3.5" /> Download File
              </a>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5">
                <div className="flex justify-between items-baseline font-semibold">
                  <span className="text-white text-base">Technical Lead</span>
                  <span className="text-xs font-mono text-red-300">Feb 2026 – Apr 2026</span>
                </div>
                <p className="text-xs text-white/60 font-medium">TAO Digital Solutions, Chennai</p>
                <p className="text-white/80 text-xs leading-relaxed mt-1">
                  Supported day-to-day SRE operations in a Healthcare IT environment adhering to compliance practices. Wrote Python scripts to automate recurring operational tasks and handled incident management in line with ITIL practices.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5">
                <div className="flex justify-between items-baseline font-semibold">
                  <span className="text-white text-base">Application Support Senior Analyst</span>
                  <span className="text-xs font-mono text-red-300">Oct 2024 – Sep 2025</span>
                </div>
                <p className="text-xs text-white/60 font-medium">Citicorp Services India Private Limited, Chennai</p>
                <p className="text-white/80 text-xs leading-relaxed mt-1">
                  Managed stability for complex KNIME workflows. Led daily operational coordination during release windows and high-priority incidents. Participated in BCP and disaster recovery (DR) planning, mentored junior engineers, and enhanced internal SOPs.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5">
                <div className="flex justify-between items-baseline font-semibold">
                  <span className="text-white text-base">Senior Application Engineer</span>
                  <span className="text-xs font-mono text-red-300">Apr 2020 – Sep 2024</span>
                </div>
                <p className="text-xs text-white/60 font-medium">PagoNxt Merchant Solutions (Formerly WIRECARD), Chennai</p>
                <p className="text-white/80 text-xs leading-relaxed mt-1">
                  Spearheaded monitoring and alerting initiatives, reducing incident response times by 40%. Engineered deployment pipelines using Terraform and Jenkins, automated daily ops using Rundeck & Python, and directed Blue-Green deployments for Payment & Risk applications.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5">
                <div className="flex justify-between items-baseline font-semibold">
                  <span className="text-white text-base">Associate – Projects</span>
                  <span className="text-xs font-mono text-red-300">Jun 2014 – Apr 2020</span>
                </div>
                <p className="text-xs text-white/60 font-medium">Cognizant, Chennai</p>
                <p className="text-white/80 text-xs leading-relaxed mt-1">
                  Proactively monitored critical 24x7 jobs reducing downtime incidents by 40%. Implemented Shell/Python crontab automation reducing manual support by 30%. Improved operational performance by 30% and team productivity by 20%.
                </p>
              </div>

              {/* Education */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <span className="text-xs uppercase tracking-wider text-white/60 font-semibold block">Education</span>
                <div className="space-y-1.5 text-xs">
                  <div>
                    <strong className="text-white font-semibold">Master of Engineering (M.E.), Computer and Communication</strong>
                    <p className="text-white/60">Sri Sivasubramaniya Nadar (SSN) College of Engineering, Chennai · June 2014</p>
                  </div>
                  <div className="pt-1">
                    <strong className="text-white font-semibold">Bachelor of Engineering (B.E.), Electronics and Communication</strong>
                    <p className="text-white/60">SKR Engineering College, Chennai · June 2011</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
