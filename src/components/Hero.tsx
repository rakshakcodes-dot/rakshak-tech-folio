import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { ArrowRight, Mail, Camera, Check, RefreshCw } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface HeroProps {
  onOpenResume?: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const { photoUrl, isCustomPhoto, setPhotoFromFile, resetToDefault } = useProfilePhoto();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const ok = await setPhotoFromFile(file);
      if (ok) {
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const ok = await setPhotoFromFile(file);
      if (ok) {
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white bg-blueprint-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HERO HEADLINE & ACTIONS (MATCHING REFERENCE) */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Eyebrow Tag: HELLO, I'M */}
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-[#0066FF] block mb-3 sm:mb-4 select-none">
              HELLO, I'M
            </span>

            {/* Huge Stacked Two-Tone Title: Rakshak Saini. */}
            <h1 className="font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-[#0f172a] select-none">
              <span>Rakshak</span>
              <br />
              <span className="text-[#0066FF]">Saini.</span>
            </h1>

            {/* Subtitle with Blue Pipe Divider */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0f172a] mt-4 sm:mt-5 tracking-tight flex flex-wrap items-center">
              <span>B.Tech IT Student</span>
              <span className="text-[#0066FF] font-black mx-2">|</span>
              <span>Cloud, AI &amp; Web Development Enthusiast</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg mt-4 max-w-xl leading-relaxed font-normal">
              Building practical technology solutions with cloud platforms, AI tools, modern web technologies, and strong problem-solving fundamentals.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8 sm:mt-10">
              
              {/* Primary Blue Button: View my projects → */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-semibold shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View my projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary White Outline Button: Contact me ✉ */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold border border-slate-200/90 shadow-xs transition-all hover:border-slate-300"
              >
                <span>Contact me</span>
                <Mail className="w-4 h-4 text-slate-600" />
              </a>

            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: CIRCULAR PROFILE PHOTO AVATAR & ORBIT RINGS */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none mt-6 lg:mt-0">
            
            {/* Hidden File Input for Direct Upload */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
              aria-label="Upload exact profile photo"
            />

            {/* Outer Concentric Orbital Structure */}
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center transition-all ${
                isDragging ? 'scale-105' : ''
              }`}
            >
              
              {/* Outer Dashed Orbit Ring */}
              <div className={`absolute inset-0 rounded-full border ${
                isDragging ? 'border-blue-500 border-2 scale-102' : 'border-dashed border-[#0066FF]/35'
              } pointer-events-none transition-all duration-300 animate-[spin_60s_linear_infinite]`} />

              {/* Middle Faint Solid Circular Orbit */}
              <div className="absolute inset-5 sm:inset-7 rounded-full border border-[#0066FF]/20 pointer-events-none" />

              {/* Main Circular Profile Photo Container */}
              <div 
                onClick={triggerUpload}
                className={`w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 rounded-full shadow-2xl shadow-blue-900/25 relative z-10 overflow-hidden border-4 ${
                  isDragging ? 'border-blue-500 ring-4 ring-blue-300' : 'border-white'
                } bg-slate-950 group cursor-pointer transition-all duration-300`}
                title="Click or drop 'profile photo.png' to use your exact photo"
              >
                <img
                  src={photoUrl}
                  alt="Rakshak Saini - Profile Photo"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid RS Blue Badge on the upper right */}
                <div className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-[#0066FF] text-white flex items-center justify-center font-extrabold text-base shadow-lg border-2 border-white pointer-events-none">
                  RS
                </div>

                {/* Hover Camera Overlay for Easy Direct Photo Update */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center backdrop-blur-xs">
                  <div className="w-12 h-12 rounded-full bg-[#0066FF] flex items-center justify-center mb-2 shadow-md">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold font-mono tracking-wider uppercase">
                    Select Exact Photo
                  </span>
                  <span className="text-[11px] text-slate-300 mt-0.5">
                    Click or drop 'profile photo.png'
                  </span>
                </div>

                {/* Success Banner */}
                {uploadSuccess && (
                  <div className="absolute inset-x-0 top-12 mx-auto w-max px-3 py-1 bg-emerald-600 text-white text-[11px] font-bold rounded-full shadow-lg flex items-center gap-1.5 animate-bounce z-30">
                    <Check className="w-3.5 h-3.5" />
                    <span>Exact photo applied!</span>
                  </div>
                )}

                {/* Bottom cinematic caption gradient */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex items-end justify-center pb-3 pointer-events-none">
                  <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-white uppercase drop-shadow-sm">
                    RAKSHAK SAINI
                  </span>
                </div>
              </div>

              {/* Floating Info Card: BASED IN Meerut, India (Overlapping Bottom Left) */}
              <div className="absolute bottom-4 left-0 sm:bottom-6 sm:-left-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 sm:p-4 rounded-xl shadow-lg shadow-slate-900/10 min-w-[140px] sm:min-w-[160px]">
                <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#0066FF] block mb-0.5">
                  BASED IN
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 block">
                  Meerut, India
                </span>
              </div>

            </div>

            {/* Micro Helper Tag below the Avatar */}
            <div className="mt-4 flex items-center gap-2 text-xs">
              <button
                type="button"
                onClick={triggerUpload}
                className="inline-flex items-center gap-1.5 text-[#0066FF] hover:underline font-semibold cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Upload / Drop 'profile photo.png'</span>
              </button>
              {isCustomPhoto && (
                <>
                  <span className="text-slate-300">•</span>
                  <button
                    type="button"
                    onClick={resetToDefault}
                    className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 text-[11px] cursor-pointer"
                    title="Reset to default image"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
