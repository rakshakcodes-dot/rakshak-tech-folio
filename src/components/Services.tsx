import { Sparkles, Layout, Cloud, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

export function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-600" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-indigo-600" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-sky-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-700" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100/70 border border-blue-200/80 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What I Build &amp; Contribute To
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
            Practical domains where I bring hands-on implementation capabilities, clean code standards, and enthusiastic problem-solving.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle accent hover indicator on top right */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-3xl -z-0 group-hover:from-blue-100/50 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-100/60 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2.5">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Key Areas of Focus:
                  </span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 mt-7 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>Collaborate on this</span>
                <a href="#contact" className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
