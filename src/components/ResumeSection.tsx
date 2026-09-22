import { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  MapPin, 
  Phone, 
  Mail, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award, 
  Languages, 
  Maximize2, 
  CheckCircle2,
  Cpu,
  Cloud,
  ShieldCheck
} from 'lucide-react';
import { RESUME_DATA, PROFILE_DATA } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface ResumeSectionProps {
  onOpenModal: () => void;
  onOpenCloudModal?: () => void;
}

export function ResumeSection({ onOpenModal, onOpenCloudModal }: ResumeSectionProps) {
  const { photoUrl } = useProfilePhoto();
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `RAKSHAK SAINI
127 Jubli Gnj Rajban, Meerut Cantt, UP 250001
(+91) 7251961997 | rakshak.codes@gmail.com
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
- Technical Skills: Python, AWS Cloud Console, Networking fundamentals like TCP/IP and DNS, and Linux commands.
- Soft Skills: Teamwork, problem solving, time management, willingness, effective communication.

AWARDS & CERTIFICATIONS:
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
    <section id="resume" className="py-20 md:py-28 bg-[#fafaf9] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Reference Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.25em] text-slate-800 uppercase mb-3 select-none">
              <span className="text-[#eb2d4b]">▶</span>
              <span>CURRICULUM VITAE</span>
            </div>
            <h2 className="font-display-serif text-3xl sm:text-4xl font-bold text-[#eb2d4b] tracking-tight">
              Curriculum Vitae
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-normal">
              Authentic academic credentials, cybersecurity &amp; cloud focus, verified certifications, and technical projects.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-bold tracking-wider uppercase text-slate-700 bg-white border border-slate-300 hover:border-slate-500 transition-colors cursor-pointer"
              title="Copy plaintext resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-bold tracking-wider uppercase text-white bg-[#1b2f9c] hover:bg-[#15257a] border border-[#1b2f9c] transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-bold tracking-wider uppercase text-[#eb2d4b] bg-white border border-[#eb2d4b] hover:bg-red-50 transition-colors cursor-pointer"
              title="Open full view modal"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#eb2d4b]" />
              <span>Full View</span>
            </button>
          </div>
        </div>

        {/* Paper Document Representation */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-300 shadow-xs overflow-hidden print:shadow-none print:border-none">
          
          {/* Top subtle blue accent */}
          <div className="h-1.5 bg-[#1b2f9c]" />

          {/* Resume Header Area */}
          <div className="p-6 sm:p-10 border-b border-slate-200 bg-[#fafaf9]">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-[#1b2f9c] shrink-0 bg-slate-950 shadow-xs">
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
                  <h1 className="font-display-serif text-2xl sm:text-4xl font-bold text-[#1b2f9c] tracking-tight">
                    {RESUME_DATA.name}
                  </h1>
                  <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#eb2d4b] font-bold mt-1">
                    B.Tech IT Student • Cloud &amp; Cybersecurity Aspirant
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Meerut Institute of Engineering and Technology (MIET)
                  </p>
                </div>
              </div>

              {/* Contact Details from Resume */}
              <div className="text-xs space-y-1.5 text-slate-600 sm:text-right font-medium">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{RESUME_DATA.address}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href={`tel:${PROFILE_DATA.phoneRaw}`} className="hover:text-blue-600 transition-colors">
                    {RESUME_DATA.phone}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href={`mailto:${RESUME_DATA.email}`} className="text-blue-600 hover:underline">
                    {RESUME_DATA.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-2 pt-1 text-slate-500">
                  <a 
                    href={PROFILE_DATA.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-blue-600 font-semibold transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span>•</span>
                  <a 
                    href={PROFILE_DATA.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-blue-600 font-semibold transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Two-Column Body Content matching Resume Format */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 text-slate-800 text-sm">
            
            {/* Left Main Column (Summary, Education, Projects) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* SUMMARY Section */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded inline-block mb-3 border border-blue-100">
                  Summary
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed bg-slate-50/60 p-4 rounded-2xl border border-slate-100">
                  {RESUME_DATA.summary}
                </p>
              </div>

              {/* EDUCATION Section */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded inline-block mb-3 border border-blue-100 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                  <span>Education</span>
                </h3>

                <div className="space-y-4">
                  {RESUME_DATA.education.map((edu, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-200 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                        <span className="font-bold text-slate-900 text-sm">
                          {edu.institution}
                        </span>
                        <span className="text-xs font-mono font-medium text-slate-500 shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-blue-700">
                        — {edu.degree}
                      </div>
                      {edu.coursework && (
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <strong className="text-slate-800">Relevant Coursework:</strong> {edu.coursework}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* PROJECTS Section */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded inline-block mb-3 border border-blue-100 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  <span>Projects</span>
                </h3>

                <div className="space-y-4">
                  {/* Project 1: NagrikSetu A.I */}
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/40 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        {RESUME_DATA.projects[0].title}
                      </h4>
                      <span className="text-[11px] font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded border border-blue-200">
                        {RESUME_DATA.projects[0].badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
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
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/40 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                        {RESUME_DATA.projects[1].title}
                      </h4>
                      <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                        {RESUME_DATA.projects[1].tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {RESUME_DATA.projects[1].description}
                    </p>
                  </div>

                  {/* Project 3: AWS Scalable Web Application Infrastructure */}
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/40 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                        <Cloud className="w-3.5 h-3.5 text-blue-600" />
                        {RESUME_DATA.projects[2].title}
                      </h4>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {RESUME_DATA.projects[2].badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {RESUME_DATA.projects[2].description}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Assignment: 8 Modules
                      </span>
                      {onOpenCloudModal && (
                        <button
                          onClick={onOpenCloudModal}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0066FF] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer"
                        >
                          <Cloud className="w-3.5 h-3.5" />
                          <span>View Full 8-Module AWS Documentation →</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (Skills, Awards, Languages) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* SKILLS Section */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded inline-block mb-3 border border-blue-100 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Skills</span>
                </h3>

                <div className="space-y-4">
                  {/* Technical Skills */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                      Technical Skills
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium mb-3">
                      Python, AWS Cloud Console, Networking fundamentals like TCP/IP and DNS, and Linux commands.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {RESUME_DATA.skills.technical.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 bg-white text-slate-800 text-[11px] font-medium rounded-md border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                      Soft Skills
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium mb-3">
                      Teamwork, problem solving, time management, willingness, effective communication.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {RESUME_DATA.skills.soft.map((soft, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 bg-white text-slate-800 text-[11px] font-medium rounded-md border border-slate-200"
                        >
                          {soft}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* AWARDS & CERTIFICATIONS Section */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded inline-block mb-3 border border-blue-100 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  <span>Awards &amp; Certifications</span>
                </h3>

                <div className="space-y-3.5">
                  {/* Award 1 */}
                  <div className="p-3.5 rounded-xl border border-slate-200/90 bg-white shadow-2xs">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-bold text-slate-900 text-xs">
                        {RESUME_DATA.awards[0].title}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {RESUME_DATA.awards[0].badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-1">
                      Certification from <strong className="text-slate-800">{RESUME_DATA.awards[0].issuer}</strong>
                    </p>
                    <div className="font-mono text-[11px] text-blue-700 bg-blue-50/80 px-2 py-0.5 rounded inline-block border border-blue-100">
                      ID: {RESUME_DATA.awards[0].credentialId}
                    </div>
                  </div>

                  {/* Award 2 */}
                  <div className="p-3.5 rounded-xl border border-slate-200/90 bg-white shadow-2xs">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-bold text-slate-900 text-xs">
                        {RESUME_DATA.awards[1].title}
                      </span>
                      <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {RESUME_DATA.awards[1].badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-2">
                      Issued by <strong className="text-slate-800">{RESUME_DATA.awards[1].issuer}</strong>
                    </p>
                    {RESUME_DATA.awards[1].verificationUrl && (
                      <a
                        href={RESUME_DATA.awards[1].verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>View Verified Certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* LANGUAGES Section */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded inline-block mb-3 border border-blue-100 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-blue-600" />
                  <span>Languages</span>
                </h3>

                <div className="grid grid-cols-2 gap-2.5">
                  {RESUME_DATA.languages.map((lang, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block text-xs">
                        {lang.name}
                      </span>
                      <span className="text-xs text-slate-500">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Card Footer */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Verified candidate credentials • Meerut Cantt, UP
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hover:text-blue-600 font-semibold transition-colors cursor-pointer"
              >
                Print / Save PDF
              </button>
              <span>•</span>
              <button
                onClick={onOpenModal}
                className="hover:text-blue-600 font-semibold transition-colors cursor-pointer"
              >
                Open Fullscreen
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
