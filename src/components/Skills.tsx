import { Cloud, Code2, Sparkles, Layout, Terminal, CheckCircle2, Cpu, Database, Server, ShieldCheck } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud & Infrastructure':
        return <Cloud className="w-5 h-5 text-blue-600" />;
      case 'Programming & Core CS':
        return <Code2 className="w-5 h-5 text-indigo-600" />;
      case 'Networking & Systems':
        return <Terminal className="w-5 h-5 text-slate-700" />;
      case 'AI & Machine Intelligence':
        return <Sparkles className="w-5 h-5 text-sky-600" />;
      case 'Web Development':
        return <Layout className="w-5 h-5 text-blue-600" />;
      case 'Professional Soft Skills':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#fafaf9] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Reference Style) */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.25em] text-slate-800 uppercase mb-3 select-none">
            <span className="text-[#eb2d4b]">▶</span>
            <span>SKILLS &amp; COMPETENCIES</span>
          </div>
          <h2 className="font-display-serif text-3xl sm:text-4xl font-bold text-[#eb2d4b] tracking-tight">
            Technical Capabilities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-normal">
            A cohesive toolkit centered on cloud infrastructure (AWS), core networking (TCP/IP &amp; DNS), Linux systems, Python with AI, and problem solving.
          </p>
        </div>

        {/* Primary Skill Pillars Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {[
            { name: 'Python', tag: 'Scripting & AI' },
            { name: 'AWS Console', tag: 'Cloud EC2/S3' },
            { name: 'Networking', tag: 'TCP/IP & DNS' },
            { name: 'Linux Commands', tag: 'OS & CLI' },
            { name: 'Java & DSA', tag: 'Algorithms' },
            { name: 'Web Dev & AI', tag: 'React / APIs' },
          ].map((pill, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-xs flex flex-col items-center text-center hover:border-blue-400 hover:shadow-sm transition-all"
            >
              <span className="text-[10px] font-mono text-blue-600 font-semibold uppercase tracking-wider mb-1">
                {pill.tag}
              </span>
              <span className="text-sm font-bold text-slate-900">
                {pill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((categoryGroup, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between ${
                index === 0 || index === 1 ? 'md:col-span-1' : ''
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center shrink-0">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      {categoryGroup.category}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {categoryGroup.subtitle}
                    </p>
                  </div>
                </div>

                {/* Individual Skills in Category */}
                <div className="space-y-4">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-blue-50/40 hover:border-blue-200 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Domain Focus</span>
                <span className="text-blue-600 font-medium">Applied Competency</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
