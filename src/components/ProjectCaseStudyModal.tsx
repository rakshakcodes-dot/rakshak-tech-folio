import { X, CheckCircle2, Database, ShieldCheck, Layers, MapPin, ArrowRight, Github, ExternalLink, Workflow } from 'lucide-react';
import { FEATURED_PROJECT } from '../data/portfolioData';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
            <div>
              <h3 className="font-bold text-white text-base">
                Case Study: {FEATURED_PROJECT.title}
              </h3>
              <p className="text-xs text-blue-200">
                Civic-Tech Municipal Pothole Management System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={FEATURED_PROJECT.links.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live App</span>
            </a>
            <a
              href={FEATURED_PROJECT.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-700 text-sm">
          
          {/* Executive Summary */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded inline-block mb-2">
              Executive Summary
            </span>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">
              Transforming Civic Complaints into Transparent Municipal Work Orders
            </h4>
            <p className="text-slate-600 leading-relaxed text-base">
              Potholes and road degradation cause vehicle damage, severe traffic congestion, and accidents. Traditional citizen portals often suffer from lack of coordination: citizens report the same hazard repeatedly, complaints are lost between municipal departments, and citizens are left with no feedback whether their issue is queued, assigned, or resolved.
            </p>
          </div>

          {/* Rakshak's Core Contribution */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/60 p-6 rounded-2xl border-2 border-blue-200">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider mb-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Rakshak's Core Technical Ownership</span>
            </div>
            <h5 className="text-lg font-bold text-slate-900 mb-2">
              {FEATURED_PROJECT.rakshakRole.title}
            </h5>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              {FEATURED_PROJECT.rakshakRole.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-blue-100">
                <span className="font-bold text-slate-900 block mb-1">PostgreSQL Schemas</span>
                <span className="text-slate-600">Structured tables for complaints, geographic points, status enums, and assignment logs on Supabase.</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-blue-100">
                <span className="font-bold text-slate-900 block mb-1">Supabase Authentication</span>
                <span className="text-slate-600">Secure role validation ensuring citizens can log reports and municipal staff can inspect work orders.</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-blue-100">
                <span className="font-bold text-slate-900 block mb-1">Asset Storage Buckets</span>
                <span className="text-slate-600">Configured high-performance image buckets on Supabase Storage for citizen photographic proof.</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-blue-100">
                <span className="font-bold text-slate-900 block mb-1">Database Connectivity</span>
                <span className="text-slate-600">Integrated client-to-backend REST/Realtime connections for prompt status updates.</span>
              </div>
            </div>
          </div>

          {/* Core System Capabilities */}
          <div>
            <h5 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              Core System Features
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { title: 'Duplicate Detection', desc: 'Cross-checks incoming GPS coordinates against active nearby complaints within a threshold to prevent duplicate clutter.' },
                { title: 'Priority Scoring', desc: 'Assesses pothole severity and road importance to rank repair schedules for municipal engineers.' },
                { title: 'Officer & Contractor Coordination', desc: 'Enables quick dispatch to road maintenance crews with specific location coordinates.' },
                { title: 'Full Status Visibility', desc: 'Allows the reporting citizen to track progress continuously from Pending to Resolved.' },
              ].map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block text-xs mb-1">{feat.title}</span>
                  <span className="text-xs text-slate-600 leading-relaxed">{feat.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Tech Stack */}
          <div>
            <h5 className="text-base font-bold text-slate-900 mb-3">
              Technologies Utilized
            </h5>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'Supabase Auth', 'Supabase Storage', 'Browser GPS', 'Interactive Maps'].map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Project by Rakshak Saini &amp; Team</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 font-semibold text-white rounded-lg transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>

      </div>

    </div>
  );
}
