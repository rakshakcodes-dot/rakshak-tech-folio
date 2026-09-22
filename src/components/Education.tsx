import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export function Education() {
  return (
    <section id="education" className="py-20 md:py-24 bg-[#fafaf9] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Reference Style) */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.25em] text-slate-800 uppercase mb-3 select-none">
            <span className="text-[#eb2d4b]">▶</span>
            <span>EDUCATION &amp; ACADEMICS</span>
          </div>
          <h2 className="font-display-serif text-3xl sm:text-4xl font-bold text-[#eb2d4b] tracking-tight">
            Academic Background
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-normal">
            Formal engineering education at Meerut Institute of Engineering and Technology (MIET), establishing foundational computing and networking principles.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-md shadow-slate-200/40 relative overflow-hidden transition-all hover:shadow-lg hover:border-blue-300/80">
            
            {/* Top decorative accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/70 flex items-center justify-center shrink-0 text-blue-600 shadow-xs">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/80 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Status: {EDUCATION_DATA.status}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="text-lg font-semibold text-blue-700 mt-0.5">
                    {EDUCATION_DATA.field}
                  </p>
                  <p className="text-base text-slate-700 font-medium mt-1">
                    {EDUCATION_DATA.institution}
                  </p>
                </div>
              </div>

              {/* Meta details */}
              <div className="flex flex-col md:items-end gap-2 text-sm text-slate-500 shrink-0">
                <div className="inline-flex items-center gap-1.5 font-medium text-slate-700 bg-slate-100/80 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>{EDUCATION_DATA.period}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{EDUCATION_DATA.location}</span>
                </div>
              </div>

            </div>

            {/* Academic Highlights & Focus Areas */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Key Academic Highlights &amp; Coursework Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {EDUCATION_DATA.highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tag Bar */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-slate-700">Course Disciplines:</span>
                <span>Networking, Cloud Computing Fundamentals, Data Structures, Operating Systems</span>
              </div>
              <span className="font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100">
                B.Tech (IT) 2024–28
              </span>
            </div>

          </div>

          {/* Secondary & Higher Secondary Education from Resume */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-0.5">Higher Secondary (12th)</span>
                <h4 className="text-base font-bold text-slate-900">K.D International</h4>
                <p className="text-xs text-slate-500">Meerut, Uttar Pradesh</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  2023 – 2024
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-0.5">Secondary School (10th)</span>
                <h4 className="text-base font-bold text-slate-900">Karan Public School</h4>
                <p className="text-xs text-slate-500">Meerut, Uttar Pradesh</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  2021 – 2022
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
