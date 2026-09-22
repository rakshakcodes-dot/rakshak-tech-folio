import { useState } from 'react';
import { Briefcase, Calendar, Building, Sparkles, Edit3, Check, Terminal, ExternalLink } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export function Experience() {
  // Local state allowing InAmigos internship details to be viewed or customized interactively
  const [experiences, setExperiences] = useState(EXPERIENCE_DATA);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editRole, setEditRole] = useState('');
  const [editPeriod, setEditPeriod] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleStartEdit = (exp: typeof experiences[0]) => {
    setEditingId(exp.id);
    setEditRole(exp.role);
    setEditPeriod(exp.period);
    setEditDescription(exp.description);
  };

  const handleSaveEdit = (id: string) => {
    setExperiences(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          role: editRole || item.role,
          period: editPeriod || item.period,
          description: editDescription || item.description
        };
      }
      return item;
    }));
    setEditingId(null);
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/60 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Experience &amp; Internships
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
            Practical development experience spanning AI-integrated web architecture, modern web stacks, and organizational internships.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical central spine on larger screens */}
          <div className="absolute left-4 md:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-400 to-slate-200" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => {
              const isCurrentlyEditing = editingId === exp.id;

              return (
                <div 
                  key={exp.id}
                  id={`experience-item-${exp.id}`}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-1.5 md:left-5.5 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-blue-700 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>

                  {/* Experience Card */}
                  <div className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all">
                    
                    {/* Header: Title, Org, Period */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                            {exp.badge || 'Experience'}
                          </span>
                          {exp.isEditable && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                              Configurable fields
                            </span>
                          )}
                        </div>

                        {isCurrentlyEditing ? (
                          <input 
                            type="text"
                            value={editRole}
                            onChange={(e) => setEditRole(e.target.value)}
                            className="text-xl font-bold text-slate-900 border border-blue-300 rounded px-2 py-1 w-full max-w-sm"
                            placeholder="Role title"
                          />
                        ) : (
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                            {exp.role}
                          </h3>
                        )}

                        <div className="flex items-center gap-2 text-base font-semibold text-blue-700 mt-1">
                          <Building className="w-4 h-4 text-blue-600" />
                          <span>{exp.organization}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" />
                          {isCurrentlyEditing ? (
                            <input 
                              type="text"
                              value={editPeriod}
                              onChange={(e) => setEditPeriod(e.target.value)}
                              className="text-xs border border-blue-300 rounded px-1.5 py-0.5 w-32"
                              placeholder="e.g. Month Year"
                            />
                          ) : (
                            <span>{exp.period}</span>
                          )}
                        </div>

                        {exp.isEditable && !isCurrentlyEditing && (
                          <button
                            onClick={() => handleStartEdit(exp)}
                            className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                            title="Edit / Customize details"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                        )}

                        {isCurrentlyEditing && (
                          <button
                            onClick={() => handleSaveEdit(exp.id)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors cursor-pointer"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Save</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    {isCurrentlyEditing ? (
                      <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        rows={2}
                        className="w-full text-sm text-slate-700 border border-blue-300 rounded-lg p-2 mb-4"
                        placeholder="Detailed responsibilities..."
                      />
                    ) : (
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                        {exp.description}
                      </p>
                    )}

                    {/* Key Responsibilities list */}
                    <div className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                          <span className="leading-snug">{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies tags */}
                    <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-semibold text-slate-500 mr-1">Tools &amp; Focus:</span>
                      {exp.technologies.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
