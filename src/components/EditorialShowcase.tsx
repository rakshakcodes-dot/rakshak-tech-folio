import { ExternalLink, ArrowRight, FileText, Cpu, Cloud, Database } from 'lucide-react';
import { FEATURED_PROJECT, RESUME_DATA } from '../data/portfolioData';

interface EditorialShowcaseProps {
  onOpenCaseStudy: () => void;
  onOpenCloudStudy: () => void;
  onOpenResume: () => void;
}

export function EditorialShowcase({ onOpenCaseStudy, onOpenCloudStudy, onOpenResume }: EditorialShowcaseProps) {
  return (
    <section className="py-20 md:py-28 bg-[#fafaf9] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* REFERENCE SECTION 5: INQUIRIES / CALL TO ACTION BANNER     */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center justify-center text-center pb-20 border-b border-slate-200">
          
          {/* Subtle dots cluster matching reference: · · · */}
          <div className="flex items-center gap-3 text-[#eb2d4b] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#eb2d4b]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#eb2d4b]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#1b2f9c]" />
          </div>

          {/* Section Marker */}
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#eb2d4b] font-bold block mb-3">
            OPPORTUNITIES &amp; COLLABORATION
          </span>

          {/* Headline in Crimson Red Editorial Serif (Reference: "Organizing a conference?") */}
          <h2 className="font-display-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#eb2d4b] tracking-tight mb-6">
            Seeking an entry-level cloud or cybersecurity engineer?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            Available for internships, entry-level opportunities, and technical projects in cloud infrastructure, networking, and software development.
          </p>

          {/* Bordered Editorial Action Button (Reference: "CONTACT US ▶") */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 border border-[#1b2f9c] text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#1b2f9c] hover:bg-[#1b2f9c] hover:text-white transition-colors"
            >
              <span>CONTACT ME</span>
              <span>▶</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#eb2d4b] text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#eb2d4b] hover:bg-[#eb2d4b] hover:text-white transition-colors cursor-pointer"
            >
              <span>VIEW RESUME</span>
              <span>▶</span>
            </button>
          </div>

        </div>

        {/* ========================================================= */}
        {/* REFERENCE SECTION 6: THREE ARCHITECTURAL FRAMED CARDS     */}
        {/* ========================================================= */}
        <div className="pt-16 sm:pt-20">
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.25em] text-slate-800 uppercase">
              <span className="text-[#eb2d4b]">▶</span>
              <span>PROJECT SHOWCASE</span>
            </div>
            <span className="text-xs font-mono text-slate-400">03 VERIFIED WORKS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Project 1: Featured NagrikSetu AI (Dominant card matching TNQ PROJECT in reference) */}
            <div className="lg:col-span-6 bg-white border border-[#1b2f9c] p-7 flex flex-col justify-between relative shadow-xs">
              
              {/* Hatched Blueprint Box */}
              <div className="w-full h-48 sm:h-56 bg-hatch-pattern border border-[#1b2f9c]/20 mb-6 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#eb2d4b] uppercase mb-2">
                  CIVIC TECH PLATFORM
                </span>
                <h3 className="font-display-serif text-2xl sm:text-3xl font-bold text-[#1b2f9c]">
                  NagrikSetu AI
                </h3>
                <p className="text-xs text-slate-600 mt-2 max-w-sm">
                  Supabase PostgreSQL database, edge storage buckets, GIS coordinates &amp; citizen complaint triage.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenCaseStudy}
                  className="font-mono text-xs font-bold tracking-[0.18em] uppercase text-[#1b2f9c] hover:text-[#eb2d4b] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>NAGRIKSETU PROJECT</span>
                  <span>▶</span>
                </button>

                <a
                  href={FEATURED_PROJECT.links.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-slate-500 hover:text-slate-900 flex items-center gap-1"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Project 2: AWS Cloud Architecture Deployment (Matching Reference Card 2) */}
            <div className="lg:col-span-3 bg-white border border-slate-300 p-6 flex flex-col justify-between relative shadow-2xs hover:border-[#1b2f9c] transition-colors group">
              
              <div className="w-full h-48 sm:h-56 bg-hatch-pattern border border-slate-200 mb-6 flex flex-col items-center justify-center p-4 text-center">
                <Cloud className="w-8 h-8 text-[#1b2f9c] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-mono font-bold text-[#1b2f9c] uppercase tracking-wider block">
                  AWS CLOUD ARCHITECTURE
                </span>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-3">
                  Multi-AZ VPC, ALB, EC2 Linux, EBS, RDS MySQL, S3 SSE-KMS, SNS/SQS, Lambda &amp; CloudFormation CLI.
                </p>
                <span className="mt-2 text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  8 Modules Documented
                </span>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={onOpenCloudStudy}
                  className="font-mono text-xs font-bold tracking-[0.18em] uppercase text-[#1b2f9c] hover:text-[#eb2d4b] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>VIEW BLUEPRINT</span>
                  <span>▶</span>
                </button>
                <span className="text-[10px] font-mono text-slate-400">AWS Console</span>
              </div>
            </div>

            {/* Project 3: Smart Bin Hardware Project (Matching Reference Card 3) */}
            <div className="lg:col-span-3 bg-white border border-slate-300 p-6 flex flex-col justify-between relative shadow-2xs hover:border-[#1b2f9c] transition-colors">
              
              <div className="w-full h-48 sm:h-56 bg-hatch-pattern border border-slate-200 mb-6 flex flex-col items-center justify-center p-4 text-center">
                <Cpu className="w-8 h-8 text-[#eb2d4b] mb-2" />
                <span className="text-[10px] font-mono font-bold text-[#eb2d4b] uppercase tracking-wider block">
                  HARDWARE &amp; IOT
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  Ultrasonic &amp; moisture sensors for real-time dry and wet waste segregation.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#resume"
                  className="font-mono text-xs font-bold tracking-[0.18em] uppercase text-[#eb2d4b] hover:text-[#1b2f9c] transition-colors flex items-center gap-1.5"
                >
                  <span>SMART BIN</span>
                  <span>▶</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
