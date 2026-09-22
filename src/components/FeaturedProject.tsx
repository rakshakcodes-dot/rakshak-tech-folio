import { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  Database, 
  Server, 
  Layout, 
  MapPin, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Workflow,
  Eye,
  FileCheck
} from 'lucide-react';
import { FEATURED_PROJECT } from '../data/portfolioData';

interface FeaturedProjectProps {
  onOpenCaseStudy: () => void;
}

export function FeaturedProject({ onOpenCaseStudy }: FeaturedProjectProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'workflow'>('overview');

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#fafaf9] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Marker (Reference Style: "▶ PORTFOLIO" / "▶ WORK") */}
        <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.25em] text-slate-800 uppercase mb-8 select-none">
          <span className="text-[#eb2d4b]">▶</span>
          <span>PORTFOLIO &amp; WORK</span>
        </div>

        {/* ========================================================= */}
        {/* SECTION 4: ART UNBOUND ODYSSEY STYLE COMPOSITION          */}
        {/* ========================================================= */}
        <div className="bg-white border border-slate-300/80 p-6 sm:p-10 mb-12 shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Box: Framed Architectural Card with Red Border & Hatched Pattern */}
            <div className="lg:col-span-6 relative">
              <div className="relative border-2 border-[#eb2d4b] bg-white p-6 sm:p-8 bg-hatch-pattern shadow-xs">
                
                {/* Status Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#eb2d4b]">
                    01 // CIVIC TECH PLATFORM
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    LIVE PRODUCTION
                  </span>
                </div>

                <h3 className="font-display-serif text-2xl sm:text-3xl font-bold text-[#1b2f9c] mb-3">
                  {FEATURED_PROJECT.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {FEATURED_PROJECT.tagline}
                </p>

                {/* Rakshak's Primary Contribution Box */}
                <div className="p-4 bg-white/95 border border-slate-200 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1b2f9c] font-bold block mb-1">
                    {FEATURED_PROJECT.rakshakRole.title}
                  </span>
                  <p className="text-xs text-slate-800 leading-relaxed font-medium">
                    {FEATURED_PROJECT.rakshakRole.summary}
                  </p>
                </div>

                {/* Direct Action Links */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={FEATURED_PROJECT.links.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold tracking-[0.15em] uppercase text-white bg-[#eb2d4b] hover:bg-[#d61f3d] transition-colors"
                  >
                    <span>LIVE APP</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={onOpenCaseStudy}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold tracking-[0.15em] uppercase text-[#1b2f9c] bg-white border border-[#1b2f9c] hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#1b2f9c]" />
                    <span>CASE STUDY</span>
                  </button>

                  <a
                    href={FEATURED_PROJECT.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-bold tracking-[0.15em] uppercase text-slate-700 hover:text-slate-900 border border-slate-300 bg-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>CODE</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Right Box: Floating Red Circle & Stacked Classical Royal Blue Serif Title */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left pl-0 lg:pl-6">
              
              {/* Floating Solid Red Circle Graphic (Reference Signature) */}
              <div className="w-14 h-14 rounded-full bg-[#eb2d4b] mb-6 shadow-sm flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white" />
              </div>

              {/* Massive Stacked Serif Typography */}
              <h2 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1b2f9c] leading-[1.05] tracking-tight mb-4">
                CIVIC<br />
                INTELLIGENCE<br />
                PLATFORM
              </h2>

              <span className="text-[#eb2d4b] text-sm block mb-4">▼</span>

              <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-slate-500 block mb-6">
                FEATURED PRODUCTION PROJECT
              </span>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                Deployed using Supabase PostgreSQL, edge storage buckets, GIS coordinate mapping, and intelligent multi-report triage algorithms.
              </p>

            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE SPECIFICATION TABS: OVERVIEW / ARCH / WORKFLOW */}
        {/* ========================================================= */}
        <div className="bg-white border border-slate-300/80 p-6 sm:p-8">
          
          <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-4 mb-6 gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">SPECS //</span>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Architecture Deep Dive</span>
            </div>

            <div className="flex items-center gap-2">
              {(['overview', 'architecture', 'workflow'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#1b2f9c] text-white'
                      : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#fafaf9] border border-slate-200">
                  <span className="text-[10px] font-mono font-bold text-[#eb2d4b] block mb-2 uppercase">
                    THE PROBLEM CONTEXT
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium mb-3">
                    {FEATURED_PROJECT.problem}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {FEATURED_PROJECT.problemDetails.map((pd, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#eb2d4b] shrink-0 font-bold">•</span>
                        <span>{pd}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#fafaf9] border border-slate-200">
                  <span className="text-[10px] font-mono font-bold text-[#1b2f9c] block mb-2 uppercase">
                    THE ARCHITECTURAL SOLUTION
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium mb-3">
                    {FEATURED_PROJECT.solution}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {FEATURED_PROJECT.solutionHighlights.map((sh, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#1b2f9c] shrink-0 font-bold">✓</span>
                        <span>{sh}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies used */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase block">TECH STACK BY LAYER:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {FEATURED_PROJECT.techStack.map((stack, i) => (
                    <div key={i} className="p-3 bg-[#fafaf9] border border-slate-200">
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1.5">
                        {stack.category}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {stack.items.map((item, itemIdx) => (
                          <span key={itemIdx} className="text-[11px] font-mono px-2 py-0.5 bg-white border border-slate-200 text-slate-800">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE (Rakshak's Backend Role) */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-5 bg-[#fafaf9] border border-slate-200">
                <h4 className="font-mono text-xs font-bold text-[#1b2f9c] uppercase tracking-wider mb-2">
                  {FEATURED_PROJECT.rakshakRole.title}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  {FEATURED_PROJECT.rakshakRole.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {FEATURED_PROJECT.rakshakRole.details.map((detail, idx) => (
                    <div key={idx} className="p-3 bg-white border border-slate-200 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: WORKFLOW */}
          {activeTab === 'workflow' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {FEATURED_PROJECT.workflow.map((step) => (
                  <div key={step.step} className="p-4 bg-[#fafaf9] border border-slate-200">
                    <span className="text-xs font-mono font-bold text-[#eb2d4b] block mb-1">
                      STEP {step.step}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 mb-1">{step.title}</h5>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
