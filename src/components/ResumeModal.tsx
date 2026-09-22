import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  Building, 
  GraduationCap, 
  Code2, 
  Cloud, 
  Sparkles, 
  Check, 
  Briefcase, 
  Award, 
  Languages, 
  ExternalLink, 
  ShieldCheck, 
  Cpu 
} from 'lucide-react';
import { useState } from 'react';
import { PROFILE_DATA, RESUME_DATA } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCloudModal?: () => void;
}

export function ResumeModal({ isOpen, onClose, onOpenCloudModal }: ResumeModalProps) {
  const { photoUrl } = useProfilePhoto();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `RAKSHAK SAINI
${RESUME_DATA.address}
Phone: ${RESUME_DATA.phone} | Email: ${RESUME_DATA.email}
LinkedIn: ${PROFILE_DATA.linkedin} | GitHub: ${PROFILE_DATA.github}

SUMMARY:
${RESUME_DATA.summary}

EDUCATION:
- Meerut Institute of Engineering and Technology, Meerut U.P — B.Tech (2024 - 2028)
  Relevant Coursework: Networking, Cloud Computing Fundamentals, Data Structures and Operating System.
- K.D International, Meerut U.P — 12th (2023 - 2024)
- Karan Public School, Meerut U.P — 10th (2021 - 2022)

PROJECTS:
1. NagrikSetu A.I — An AI-powered platform that automatically classifies citizen complaints, detects duplicate reports, assigns them to the correct municipal department, and tracks resolution status.
   Live Link: https://rakshakcodes-dot.github.io/NagrikSetu-AI/
2. Smart Bin — It is a smart bin which automatically segregates the waste. It is mainly used by the sensor to detect the moisture from the waste(Dry waste or Wet waste) and separate into two parts. (Hardware)
3. Cloud Services Implementation — Deployed scalable web application infrastructure using AWS EC2 for compute, S3 for storage, EBS for volumes, and IAM for secure access.

SKILLS:
- Technical Skill: Python, AWS Cloud Console, Networking fundamentals like TCP/IP and DNS, and Linux commands.
- Soft Skill: Teamwork, problem solving, time management, willingness, effective communication.

AWARDS:
- AWS Cloud Computing Certification from Tutedude (TD-RAKS-CC-0734)
- Python with AI from AIForTechies (https://certx.in/certificate/27431ebc-ac17-43c8-9713-f5b20ad95b991483724)

LANGUAGES:
- English (basic knowledge)
- Hindi (Bilingual)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Container */}
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600" />
            <h3 className="font-bold text-slate-900 text-base">
              Resume Preview — {RESUME_DATA.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              title="Copy formatted text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : null}
              <span>{copied ? 'Copied!' : 'Copy Plaintext'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto print:p-0 space-y-7 text-slate-800 text-sm">
          
          {/* Resume Header Area */}
          <div className="pb-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border-2 border-blue-600 shrink-0 bg-slate-950 shadow-xs">
                <img
                  src={photoUrl}
                  alt={RESUME_DATA.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-1 right-1 px-1 py-0.2 bg-[#0066FF] text-white text-[8px] font-extrabold font-mono rounded">
                  RS
                </div>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {RESUME_DATA.name}
                </h1>
                <p className="text-sm font-semibold text-blue-700 mt-1">
                  B.Tech in Information Technology • MIET Meerut
                </p>
              </div>
            </div>
            
            <div className="text-xs text-slate-600 sm:text-right space-y-1 font-medium">
              <p className="flex items-center sm:justify-end gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {RESUME_DATA.address}
              </p>
              <p className="flex items-center sm:justify-end gap-1">
                <Phone className="w-3 h-3 text-slate-400" />
                <a href={`tel:${PROFILE_DATA.phoneRaw}`} className="hover:text-blue-600">
                  {RESUME_DATA.phone}
                </a>
              </p>
              <p className="flex items-center sm:justify-end gap-1">
                <Mail className="w-3 h-3 text-slate-400" />
                <a href={`mailto:${RESUME_DATA.email}`} className="text-blue-600 hover:underline">
                  {RESUME_DATA.email}
                </a>
              </p>
            </div>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Summary, Education, Projects */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* SUMMARY */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
                  Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {RESUME_DATA.summary}
                </p>
              </div>

              {/* EDUCATION */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                  Education
                </h2>

                <div className="space-y-3.5">
                  {RESUME_DATA.education.map((edu, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">
                          {edu.institution}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {edu.period}
                        </span>
                      </div>
                      <div className="text-xs text-blue-700 font-semibold mt-0.5">
                        — {edu.degree}
                      </div>
                      {edu.coursework && (
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          <strong className="text-slate-800">Relevant Coursework:</strong> {edu.coursework}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* PROJECTS */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  Projects
                </h2>

                <div className="space-y-4">
                  {/* Project 1: NagrikSetu A.I */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                        {RESUME_DATA.projects[0].title}
                      </h3>
                      <span className="text-[10px] font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                        AI &amp; Civic Tech
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      {RESUME_DATA.projects[0].description}
                    </p>
                    <a
                      href={RESUME_DATA.projects[0].link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      <span>{RESUME_DATA.projects[0].link}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Project 2: Smart Bin */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                        {RESUME_DATA.projects[1].title}
                      </h3>
                      <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                        {RESUME_DATA.projects[1].tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {RESUME_DATA.projects[1].description}
                    </p>
                  </div>

                  {/* Project 3: AWS Scalable Web Application Infrastructure */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                        {RESUME_DATA.projects[2].title}
                      </h3>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {RESUME_DATA.projects[2].badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      {RESUME_DATA.projects[2].description}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 inline-block">
                        {RESUME_DATA.projects[2].tag}
                      </span>
                      {onOpenCloudModal && (
                        <button
                          onClick={() => {
                            onClose();
                            onOpenCloudModal();
                          }}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0066FF] hover:underline cursor-pointer"
                        >
                          <Cloud className="w-3 h-3" />
                          <span>View 8-Module AWS Architecture →</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Skills, Awards, Languages */}
            <div className="lg:col-span-5 space-y-7">
              
              {/* SKILLS */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-600" />
                  Skills
                </h2>

                <div className="space-y-3.5">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 mb-1">Technical Skill</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Python, AWS Cloud Console, Networking fundamentals like TCP/IP and DNS, and Linux commands.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 mb-1">Soft Skill</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Teamwork, problem solving, time management, willingness, effective communication.
                    </p>
                  </div>
                </div>
              </div>

              {/* AWARDS */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  Awards &amp; Certifications
                </h2>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/50">
                    <p className="text-xs font-bold text-slate-900">
                      {RESUME_DATA.awards[0].title}
                    </p>
                    <p className="text-xs text-slate-600">
                      Certification from {RESUME_DATA.awards[0].issuer}
                    </p>
                    <p className="text-[11px] font-mono text-blue-700 mt-1">
                      ({RESUME_DATA.awards[0].credentialId})
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/50">
                    <p className="text-xs font-bold text-slate-900">
                      {RESUME_DATA.awards[1].title}
                    </p>
                    <p className="text-xs text-slate-600 mb-1">
                      From {RESUME_DATA.awards[1].issuer}
                    </p>
                    {RESUME_DATA.awards[1].verificationUrl && (
                      <a
                        href={RESUME_DATA.awards[1].verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-blue-600 hover:underline break-all inline-flex items-center gap-1"
                      >
                        <ShieldCheck className="w-3 h-3 shrink-0" />
                        <span>View Certificate Verification</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* LANGUAGES */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-blue-600" />
                  Languages
                </h2>

                <div className="text-xs space-y-1.5 text-slate-700">
                  <p>English (basic knowledge)</p>
                  <p>Hindi (Bilingual)</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Official candidate profile data • MIET Meerut</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 font-semibold text-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>

    </div>
  );
}
