import React, { useState } from 'react';
import { X, ExternalLink, Mail, Copy, Check, Download, Briefcase, Code, Terminal, Layers, FileText, Phone, MessageSquare, MapPin, Globe } from 'lucide-react';

export default function Modals({ activeModal, onClose }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [resumeView, setResumeView] = useState('structured'); // 'structured' | 'pdf'

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

        {/* WORK / PROFESSIONAL EXPERIENCE MODAL */}
        {activeModal === 'work' && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-red-300 mb-2">
                <Briefcase className="w-3.5 h-3.5" /> Professional Experience
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans">Experience & Responsibilities</h2>
              <p className="text-white/70 text-sm mt-1">Extensive track record in managing, troubleshooting, and automating mission-critical systems.</p>
            </div>

            <div className="space-y-4">
              {/* Role 1: TAO */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-white">Technical Lead</h3>
                    <p className="text-xs text-white/60 font-medium">TAO Digital Solutions, Chennai</p>
                  </div>
                  <span className="text-xs font-mono text-red-300">February 2026 – April 2026</span>
                </div>
                <ul className="text-xs text-white/80 space-y-1.5 list-disc list-inside leading-relaxed pt-1">
                  <li>Supported day-to-day SRE operations in a Healthcare IT environment, adhering to domain-specific compliance and data handling practices.</li>
                  <li>Wrote Python scripts to automate recurring operational tasks, reducing manual effort for the team.</li>
                  <li>Handled incident management activities including triaging, tracking, and resolving production issues in line with ITIL practices.</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Healthcare IT', 'Python Automation', 'ITIL Practices', 'SRE Operations'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/70">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Role 2: Citi */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-white">Application Support Senior Analyst</h3>
                    <p className="text-xs text-white/60 font-medium">Citicorp Services India Private Limited, Chennai</p>
                  </div>
                  <span className="text-xs font-mono text-red-300">October 2024 – September 2025</span>
                </div>
                <ul className="text-xs text-white/80 space-y-1.5 list-disc list-inside leading-relaxed pt-1">
                  <li>Managed and validated stability for complex KNIME workflows, handling job scheduling and error resolution.</li>
                  <li>Provided deployment support and troubleshooting for Appian-based applications.</li>
                  <li>Led daily operational coordination during release windows and high-priority incidents, ensuring smooth handoffs.</li>
                  <li>Participated in business continuity and disaster recovery (DR) planning to ensure application resilience.</li>
                  <li>Mentored junior engineers and enhanced internal SOPs and documentation.</li>
                  <li>Efficiently handled user service requests (access provisioning, data fetch) adhering to ITIL practices.</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['KNIME Workflows', 'Appian', 'BCP & DR Planning', 'Release Coordination', 'SOPs', 'ITIL'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/70">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Role 3: PagoNxt */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-white">Senior Application Engineer</h3>
                    <p className="text-xs text-white/60 font-medium">PagoNxt Merchant Solutions (Formerly WIRECARD), Chennai</p>
                  </div>
                  <span className="text-xs font-mono text-red-300">April 2020 – September 2024</span>
                </div>
                <ul className="text-xs text-white/80 space-y-1.5 list-disc list-inside leading-relaxed pt-1">
                  <li>Spearheaded monitoring and alerting initiatives, reducing production incident response times by 40%.</li>
                  <li>Engineered semi-automated deployment pipelines using Terraform and Jenkins, improving deployment speed and consistency.</li>
                  <li>Coordinated with Data Center (DC) operations for disaster recovery testing and traffic management.</li>
                  <li>Automated daily operational activities using Rundeck and Python scripts, improving service delivery efficiency.</li>
                  <li>Directed deployment and release activities, applying Blue-Green deployment strategy and coordinating with release management for post-deployment validations.</li>
                  <li>Provided L2/L3 support for Payment & Risk applications, investigating issues by analyzing API calls, database logs, and Control-M output.</li>
                  <li>Assisted in cloud migration efforts by providing deployment assistance for key applications moving to Azure platforms.</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Datadog', 'Terraform', 'Jenkins', 'Rundeck', 'Python', 'Blue-Green', 'Control-M', 'Azure Migration'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/70">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Role 4: Cognizant */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-white">Associate – Projects</h3>
                    <p className="text-xs text-white/60 font-medium">Cognizant, Chennai</p>
                  </div>
                  <span className="text-xs font-mono text-red-300">June 2014 – April 2020</span>
                </div>
                <ul className="text-xs text-white/80 space-y-1.5 list-disc list-inside leading-relaxed pt-1">
                  <li>Improved system reliability by proactively monitoring critical 24x7 jobs, successfully reducing downtime incidents by 40%.</li>
                  <li>Drove operational efficiency by implementing automation functionalities using Shell/Python scripts and scheduling crontab jobs, which reduced manual support activities by 30%.</li>
                  <li>Recognized for innovative problem-solving skills, implementing solutions that improved operational performance by 30% and boosted team productivity by 20%.</li>
                  <li>Conducted Root Cause Analysis (RCA) on production issues and developed new application functionalities using Python, Informix, Unix, Shell Scripting, and SQL.</li>
                  <li>Prepared project closure documents, including weekly status, monthly status, and KPI metrics reports.</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['24x7 Job Monitoring', 'Shell / Python Automation', 'crontab', 'Informix', 'Unix', 'SQL', 'RCA'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/70">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Open-Source SRE Tools on GitHub */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 pt-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase tracking-widest text-white/70 font-semibold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-red-300" /> SRE & Operations Open-Source Tools
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    {
                      name: 'sd-dashboard',
                      desc: 'Real-time dashboard for Production Support & SRE teams to monitor system health, incidents, and KPIs.',
                      link: 'https://github.com/aravindhms/sd-dashboard',
                      tags: ['React', 'SRE KPIs', 'Incident Ops'],
                    },
                    {
                      name: 'prod-support-automation-pack',
                      desc: 'Python & Shell scripts automating batch monitoring, auto-recovery routines, and routine support tasks.',
                      link: 'https://github.com/aravindhms/prod-support-automation-pack',
                      tags: ['Python', 'UNIX Shell', 'Auto-Recovery'],
                    },
                    {
                      name: 'terminaldecoder',
                      desc: 'Command syntax & flag analyzer for Unix, Git, Terraform, Docker, and Kubernetes.',
                      link: 'https://github.com/aravindhms/terminaldecoder',
                      tags: ['CLI Analyzer', 'Docker', 'Kubernetes'],
                    },
                    {
                      name: 'unixutils',
                      desc: 'Browser-based Unix sandbox & operational developer toolkit for regex testing and triage.',
                      link: 'https://github.com/aravindhms/unixutils',
                      tags: ['Unix Sandbox', 'Regex Triage', 'DevOps'],
                    }
                  ].map((r) => (
                    <a
                      key={r.name}
                      href={r.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <span className="font-mono text-xs font-bold text-white group-hover:text-red-300 transition-colors flex items-center justify-between">
                          {r.name}
                          <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-white transition-colors" />
                        </span>
                        <p className="text-[11px] text-white/70 mt-1 leading-relaxed">{r.desc}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2 border-t border-white/5">
                        {r.tags.map((t) => (
                          <span key={t} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/10 text-white/80">
                            {t}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT & SKILLS MODAL */}
        {activeModal === 'about' && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-red-300 mb-2">
                <Code className="w-3.5 h-3.5" /> Professional Profile & Skills
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans">Summary & Core Competencies</h2>
            </div>

            {/* Differentiated Engineering Philosophy */}
            <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/15 text-white/90 text-sm leading-relaxed space-y-2">
              <span className="text-xs uppercase tracking-widest text-red-300 font-semibold block font-mono">Philosophy & Focus</span>
              <p>
                Specialized in mission-critical reliability, zero-downtime operations, automated incident triage, and continuous service resilience across FinTech and enterprise architectures. Championing "automate once, protect forever", combining ITIL rigor with modern Cloud, Datadog/Splunk telemetry, and Infrastructure-as-Code tooling.
              </p>
            </div>

            {/* Structured Skills Matrix straight from Resume */}
            <div className="space-y-3 pt-1">
              <h4 className="text-xs uppercase tracking-widest text-white/60 font-semibold">Technical Skills</h4>
              <div className="space-y-2.5">
                {[
                  { category: 'Automation / Scripting', items: 'Python, UNIX Shell, crontab, Rundeck, Control-M' },
                  { category: 'Monitoring / Logging', items: 'Datadog, Kibana (ELK), Splunk' },
                  { category: 'Platform / Tools', items: 'ServiceNow, BMC Remedy, JIRA, Tableau, Power BI, Knime' },
                  { category: 'Cloud / DevOps', items: 'Azure (Migration Support), Terraform, Jenkins, CI/CD, Confluence' },
                  { category: 'Standards / OS', items: 'ITIL (Incident, Change, Problem, Request Management), Linux/Unix, Windows' },
                ].map((s) => (
                  <div key={s.category} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-xs font-semibold text-red-300 block mb-1">{s.category}</span>
                    <p className="text-xs font-mono text-white/90">{s.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3 pt-1">
              <h4 className="text-xs uppercase tracking-widest text-white/60 font-semibold">Education</h4>
              <div className="space-y-2">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="flex justify-between items-baseline font-semibold text-xs text-white">
                    <span>Master of Engineering (M.E.), Computer and Communication</span>
                    <span className="text-xs font-mono text-red-300">June 2014</span>
                  </div>
                  <p className="text-xs text-white/60 mt-0.5">Sri Sivasubramaniya Nadar (SSN) College of Engineering, Chennai</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="flex justify-between items-baseline font-semibold text-xs text-white">
                    <span>Bachelor of Engineering (B.E.), Electronics and Communication</span>
                    <span className="text-xs font-mono text-red-300">June 2011</span>
                  </div>
                  <p className="text-xs text-white/60 mt-0.5">SKR Engineering College, Chennai</p>
                </div>
              </div>
            </div>

            {/* Personal Details & Languages */}
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-300" />
                <span className="text-white/80">Location: <strong className="text-white">Gowrivakkam, Chennai - 600073</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-red-300" />
                <span className="text-white/80">Languages: <strong className="text-white">English, Tamil, Malayalam</strong></span>
              </div>
            </div>
          </div>
        )}

        {/* RESUME MODAL */}
        {activeModal === 'resume' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-red-300 mb-2">
                  <FileText className="w-3.5 h-3.5" /> Official Resume
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-sans">Aravindh MS</h2>
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

            {/* View Selector Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-white/[0.06] border border-white/15 self-start">
              <button
                onClick={() => setResumeView('structured')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  resumeView === 'structured'
                    ? 'bg-white text-neutral-900 font-semibold shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Structured Overview
              </button>
              <button
                onClick={() => setResumeView('pdf')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  resumeView === 'pdf'
                    ? 'bg-white text-neutral-900 font-semibold shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Interactive PDF Viewer
              </button>
            </div>

            {resumeView === 'pdf' ? (
              /* Inline PDF Viewer */
              <div className="w-full h-[62vh] min-h-[480px] rounded-2xl overflow-hidden border border-white/20 bg-neutral-950 shadow-inner">
                <iframe
                  src="/Aravindh_MS_Resume.pdf#toolbar=1"
                  title="Aravindh MS Official Resume PDF"
                  className="w-full h-full border-0 rounded-2xl"
                />
              </div>
            ) : (
              /* Structured Overview Content */
              <div className="space-y-4">
                {/* Official PDF Resume Download Banner */}
                <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-red-500/20 text-red-300">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-sm font-bold text-white block">Official Resume (Aravindh MS)</strong>
                      <span className="text-xs text-white/60 font-mono">SRE & Application Support · Chennai (PDF · 258 KB)</span>
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

                {/* Formal Resume Profile */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5 text-xs text-white/80 leading-relaxed">
                  <strong className="text-white font-semibold uppercase tracking-wider text-[11px] block">Profile</strong>
                  <p>
                    Accomplished SRE and Senior Application Support Analyst with 11+ years of proven delivery across FinTech, Banking, Healthcare, and IT. Track record of driving 40% reduction in downtime through automated self-healing scripts, preemptive alert monitoring, and rigorous ITIL framework execution.
                  </p>
                </div>

            {/* Chronological Work Experience */}
            <div className="space-y-3 text-sm">
              <strong className="text-white font-semibold uppercase tracking-wider text-xs block text-white/70">Professional Experience</strong>
              
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
                <strong className="text-white font-semibold uppercase tracking-wider text-xs block text-white/70">Education</strong>
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
        )}

        {/* CONTACT MODAL */}
        {activeModal === 'contact' && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-red-300 mb-2">
                <Mail className="w-3.5 h-3.5" /> Direct Contact
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans">Connect with Aravindh MS</h2>
              <p className="text-white/70 text-sm mt-1">Available for SRE Leadership, Technical Lead, and Application Support opportunities.</p>
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
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">Email</span>
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
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">LinkedIn</span>
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
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">GitHub</span>
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
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block font-mono">WhatsApp</span>
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

            {/* Direct Instant Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href="mailto:aravindhms1@gmail.com?subject=Opportunity%20Discussion%20-%20Aravindh%20MS"
                className="flex-1 py-3 px-4 rounded-xl bg-white text-neutral-900 font-semibold text-xs tracking-wide shadow-luxury hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Mail className="w-3.5 h-3.5 text-red-600" />
                <span>Launch Email Client</span>
              </a>
              <a
                href="https://wa.me/919840693143?text=Hi%20Aravindh,%20I%20viewed%20your%20profile%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-luxury transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
