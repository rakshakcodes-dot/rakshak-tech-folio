import { ArrowRight, FileText, CheckCircle2, ShieldCheck, GraduationCap, MapPin, Award } from 'lucide-react';
import { PROFILE_DATA, RESUME_DATA } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

export function About() {
  const { photoUrl } = useProfilePhoto();
  return (
    <section id="about" className="py-20 md:py-28 bg-[#fafaf9] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Marker (Reference style: "▶ PORTFOLIO" / "▶ ABOUT") */}
        <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.25em] text-slate-800 uppercase mb-8 select-none">
          <span className="text-[#eb2d4b]">▶</span>
          <span>ABOUT</span>
        </div>

        {/* Asymmetrical Layout with Hatched Art Frame (Matching Reference Section 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Dots Cluster Indicator (Reference · · · ·) */}
            <div className="flex items-center gap-3 text-[#eb2d4b]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#eb2d4b]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#eb2d4b]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#eb2d4b]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            </div>

            {/* Author / Candidate Eyebrow */}
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#1b2f9c] uppercase block">
              RAKSHAK SAINI
            </span>

            {/* Editorial Serif Heading in Crimson Red (Reference: "Boundless Art: 3D Discovery") */}
            <h2 className="font-display-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#eb2d4b] leading-[1.15] tracking-tight">
              Securing Cloud Infrastructure &amp; Building Resilient Systems
            </h2>

            {/* Body Copy from Verified Resume */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {RESUME_DATA.summary}
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Currently pursuing Bachelor of Technology in Information Technology at <strong className="font-semibold text-slate-900">Meerut Institute of Engineering and Technology (MIET)</strong> (2024–2028). My focus unites core networking principles (TCP/IP, DNS), Linux administration, and hands-on AWS console architecture (EC2, S3, EBS, IAM) with algorithmic problem solving.
            </p>

            {/* Architectural Fact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-white border border-slate-200">
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">Campus</span>
                <span className="font-bold text-slate-900 text-xs mt-0.5 block">MIET, Meerut U.P</span>
                <span className="text-[11px] text-slate-500 font-mono">2024 – 2028</span>
              </div>

              <div className="p-3.5 bg-white border border-slate-200">
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">Primary Focus</span>
                <span className="font-bold text-[#1b2f9c] text-xs mt-0.5 block">Cybersecurity &amp; Cloud</span>
                <span className="text-[11px] text-slate-500 font-mono">AWS • Python • Linux</span>
              </div>

              <div className="p-3.5 bg-white border border-slate-200">
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">Residence</span>
                <span className="font-bold text-slate-900 text-xs mt-0.5 block">Meerut Cantt</span>
                <span className="text-[11px] text-slate-500 font-mono">UP 250001</span>
              </div>
            </div>

            {/* Editorial Button with Chevron (Reference: "READ MORE ▶") */}
            <div className="pt-2">
              <a
                href="#resume"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#1b2f9c] text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#1b2f9c] hover:bg-[#1b2f9c] hover:text-white transition-colors select-none"
              >
                <span>READ RESUME</span>
                <span className="text-xs">▶</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Hatched Illustration Block (Reference Upper-Right Block) */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Outer Decorative Offset Frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#eb2d4b]/30 pointer-events-none" />

              {/* Main Hatched Canvas Box with Profile Photo */}
              <div className="relative bg-white border border-slate-300 p-6 sm:p-8 shadow-xs bg-hatch-pattern">
                
                {/* Profile Photo with RS Brand Badge */}
                <div className="flex items-center gap-4 sm:gap-5 mb-6 border-b border-slate-200/80 pb-5">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#1b2f9c] shadow-md shrink-0 bg-slate-950 group">
                    <img
                      src={photoUrl}
                      alt="Rakshak Saini"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-[#0066FF] text-white text-[9px] font-extrabold font-mono rounded border border-white">
                      RS
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#eb2d4b] font-bold block mb-1">
                      ENGINEERING CREED
                    </span>
                    <h3 className="font-display-serif text-xl sm:text-2xl font-bold text-[#1b2f9c] leading-tight">
                      Reliable Infrastructure. Measured Execution.
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  "Securing systems begins with foundational understanding: networking layers, principle of least privilege in IAM, and verifiable data validation across every node."
                </p>

                {/* Key Pillars */}
                <div className="space-y-2.5 text-xs text-slate-800 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eb2d4b]" />
                    <span>AWS Cloud Infrastructure (EC2, S3, EBS, IAM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eb2d4b]" />
                    <span>Networking (TCP/IP, DNS &amp; Firewalls)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eb2d4b]" />
                    <span>Python Scripting &amp; AI Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eb2d4b]" />
                    <span>Linux System Administration</span>
                  </div>
                </div>

                {/* Bottom Card Code Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>MIET // IT DEPT</span>
                  <span>ID: TD-RAKS-CC-0734</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
