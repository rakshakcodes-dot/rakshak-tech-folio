import { useState, useEffect } from 'react';
import { 
  X, 
  Cloud, 
  Server, 
  Database, 
  ShieldCheck, 
  Terminal, 
  Workflow, 
  Cpu, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  ChevronRight,
  Layers,
  Lock,
  Globe,
  Radio,
  FileCode2,
  Printer
} from 'lucide-react';
import { AWS_CLOUD_PROJECT } from '../data/portfolioData';

interface AWSCloudCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AWSCloudCaseStudyModal({ isOpen, onClose }: AWSCloudCaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'modules' | 'cli'>('architecture');
  const [selectedModuleId, setSelectedModuleId] = useState<string>(AWS_CLOUD_PROJECT.modules[0].id);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const selectedModule = AWS_CLOUD_PROJECT.modules.find(m => m.id === selectedModuleId) || AWS_CLOUD_PROJECT.modules[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-6xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-300 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* ========================================================= */}
        {/* MODAL HEADER                                              */}
        {/* ========================================================= */}
        <div className="bg-[#0f172a] text-white px-6 py-5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0066FF] flex items-center justify-center text-white shadow-sm">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold">
                  {AWS_CLOUD_PROJECT.badge}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-mono text-emerald-300">HANDS-ON DEPLOYMENT</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                {AWS_CLOUD_PROJECT.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              title="Print Cloud Documentation"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Docs</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SUBHEADER NAVIGATION TABS                                 */}
        {/* ========================================================= */}
        <div className="bg-slate-100/90 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between gap-4 shrink-0 overflow-x-auto">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-white text-[#0066FF] shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Architecture &amp; Topology
            </button>
            <button
              onClick={() => setActiveTab('modules')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                activeTab === 'modules'
                  ? 'bg-white text-[#0066FF] shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              8 Step-by-Step Modules
            </button>
            <button
              onClick={() => setActiveTab('cli')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                activeTab === 'cli'
                  ? 'bg-white text-[#0066FF] shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              AWS CLI &amp; IaC Commands
            </button>
          </div>

          <span className="text-[11px] font-mono text-slate-500 hidden md:block">
            AWS Well-Architected Framework
          </span>
        </div>

        {/* ========================================================= */}
        {/* MODAL BODY (SCROLLABLE)                                   */}
        {/* ========================================================= */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* TAB 1: ARCHITECTURE & TOPOLOGY */}
          {activeTab === 'architecture' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              
              {/* Project Abstract Banner */}
              <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0066FF] block mb-1">
                  ASSIGNMENT SCOPE
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {AWS_CLOUD_PROJECT.assignmentTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {AWS_CLOUD_PROJECT.overview}
                </p>
              </div>

              {/* Architectural Workflow Map */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#0066FF]" />
                    <span>End-to-End System Topology</span>
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">8 Integrated Services</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* Layer 1: Ingress & Edge */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0066FF] block mb-2">
                      01 // EDGE &amp; INGRESS
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 mb-2">Route 53 &amp; AWS WAF</h5>
                    <p className="text-xs text-slate-600 mb-3">
                      Global DNS routing, DDoS mitigations, and Web Application Firewall ACL rules inspecting incoming HTTP/HTTPS traffic.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700">Route 53</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700">AWS WAF</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700">CloudFront</span>
                    </div>
                  </div>

                  {/* Layer 2: Compute & Traffic Distribution */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0066FF] block mb-2">
                      02 // COMPUTE &amp; ALB
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 mb-2">Multi-AZ ALB &amp; EC2</h5>
                    <p className="text-xs text-slate-600 mb-3">
                      Application Load Balancer spanning 3 AZ subnets routing traffic to Amazon Linux EC2 instances with mounted persistent EBS volumes.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700">ALB</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700">EC2 Linux</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700">EBS Volumes</span>
                    </div>
                  </div>

                  {/* Layer 3: Persistence & Encryption */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0066FF] block mb-2">
                      03 // STORAGE &amp; DATA
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 mb-2">S3 &amp; RDS MySQL</h5>
                    <p className="text-xs text-slate-600 mb-3">
                      General-purpose S3 with SSE-KMS and bucket versioning for static assets, alongside auto-connected managed RDS MySQL database.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700">S3 SSE-KMS</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700">RDS MySQL</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700">AWS KMS</span>
                    </div>
                  </div>

                  {/* Layer 4: Serverless & Automation */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0066FF] block mb-2">
                      04 // SERVERLESS &amp; IAC
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 mb-2">Lambda, SNS &amp; IaC</h5>
                    <p className="text-xs text-slate-600 mb-3">
                      S3-triggered Python Lambda for image resizing, SNS &amp; SQS decoupling, CloudWatch alarms, and CloudFormation CLI automation.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700">Python Lambda</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700">SNS / SQS</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-700">CloudFormation</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Core Architectural Highlights List */}
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-4">
                  Implementation Highlights &amp; Safeguards
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {AWS_CLOUD_PROJECT.architectureHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: STEP-BY-STEP MODULES */}
          {activeTab === 'modules' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-150">
              
              {/* Left Column: Module Selector Navigation */}
              <div className="lg:col-span-4 space-y-2">
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-400 block px-2 mb-1">
                  MODULE INDEX (01–08)
                </span>

                {AWS_CLOUD_PROJECT.modules.map((mod) => (
                  <button
                    key={mod.id}
                    onClick={() => setSelectedModuleId(mod.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 cursor-pointer ${
                      selectedModuleId === mod.id
                        ? 'bg-[#0066FF] text-white border-[#0066FF] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                          selectedModuleId === mod.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          MODULE {mod.number}
                        </span>
                        <span className={`text-[10px] font-mono ${
                          selectedModuleId === mod.id ? 'text-white/80' : 'text-slate-400'
                        }`}>
                          {mod.category}
                        </span>
                      </div>
                      <h5 className="text-xs font-bold leading-snug">
                        {mod.title}
                      </h5>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 mt-1 ${
                      selectedModuleId === mod.id ? 'text-white' : 'text-slate-400'
                    }`} />
                  </button>
                ))}
              </div>

              {/* Right Column: Selected Module Detailed Steps Viewer */}
              <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
                
                {/* Header for Selected Module */}
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-wider">
                      MODULE {selectedModule.number} // {selectedModule.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedModule.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {selectedModule.summary}
                  </p>
                </div>

                {/* Sub-steps in the module */}
                <div className="space-y-5">
                  {selectedModule.steps.map((subStep, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200">
                      <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0066FF] text-[10px] flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <span>{subStep.title}</span>
                      </h5>

                      <ul className="space-y-2">
                        {subStep.steps.map((st, sIdx) => (
                          <li key={sIdx} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                            <span className="text-[#0066FF] font-bold shrink-0 mt-0.5">▶</span>
                            <span>{st}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          )}

          {/* TAB 3: AWS CLI & IAC COMMANDS */}
          {activeTab === 'cli' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              <div className="p-4 bg-slate-900 text-slate-200 rounded-xl">
                <span className="text-[10px] font-mono text-emerald-400 font-bold block mb-1">
                  AUTOMATION &amp; CLOUDFORMATION CLI
                </span>
                <p className="text-xs text-slate-300">
                  Execute these commands to reproduce and inspect the deployed CloudFormation stacks and AWS CLI environment.
                </p>
              </div>

              <div className="space-y-4">
                {AWS_CLOUD_PROJECT.cliHighlights.map((cli, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                        {cli.label}
                      </span>
                      <button
                        onClick={() => handleCopy(cli.command, `cli-${idx}`)}
                        className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-slate-100 hover:bg-blue-50 hover:text-[#0066FF] text-slate-600 transition-colors cursor-pointer"
                      >
                        {copiedCmd === `cli-${idx}` ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600 font-bold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Command</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="p-3 bg-slate-950 text-emerald-400 font-mono text-xs rounded-lg overflow-x-auto border border-slate-800">
                      <code>{cli.command}</code>
                    </pre>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

        {/* ========================================================= */}
        {/* MODAL FOOTER                                              */}
        {/* ========================================================= */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="font-bold text-slate-700">Rakshak Saini</span>
            <span>•</span>
            <span>B.Tech IT (MIET)</span>
            <span>•</span>
            <span>Verified AWS Architecture</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-mono tracking-wider uppercase transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
