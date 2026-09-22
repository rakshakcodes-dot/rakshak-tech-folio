import { Linkedin, Github, Mail, Phone, ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { MonogramLogo } from './MonogramLogo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#eb2d4b] text-white py-14 sm:py-16 relative overflow-hidden select-none">
      
      {/* Background architectural fine texture */}
      <div className="absolute inset-0 bg-hatch-pattern-white pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Block: Dot Motifs & Framed Monogram Box (Matching Reference Bottom Left) */}
          <div className="flex items-center gap-6">
            
            {/* White Circle Dots Cluster */}
            <div className="flex flex-col gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white/60 ml-2" />
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>

            {/* Framed Hatched Monogram Box */}
            <div className="p-3 bg-white/10 border border-white/40 shadow-xs flex items-center justify-center">
              <MonogramLogo size="lg" variant="white" />
            </div>

            {/* Name & Academic Credentials */}
            <div className="hidden sm:block">
              <span className="font-display-serif font-bold text-xl sm:text-2xl tracking-wide block">
                RAKSHAK SAINI
              </span>
              <span className="text-[11px] font-mono tracking-widest text-white/80 uppercase block">
                MIET MEERUT // B.TECH IT (2024–2028)
              </span>
            </div>

          </div>

          {/* Center / Right Block: Editorial Serif Nav Links & Copyright */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-4">
            
            {/* Large Editorial Serif Nav: About / Work / Resume / Contacts */}
            <nav className="font-display-serif text-xl sm:text-2xl font-bold tracking-wider text-white flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <a href="#about" className="hover:text-white/80 transition-colors">About</a>
              <span className="text-white/50 text-base font-normal">/</span>
              <a href="#projects" className="hover:text-white/80 transition-colors">Work</a>
              <span className="text-white/50 text-base font-normal">/</span>
              <a href="#resume" className="hover:text-white/80 transition-colors">Resume</a>
              <span className="text-white/50 text-base font-normal">/</span>
              <a href="#contact" className="hover:text-white/80 transition-colors">Contacts</a>
            </nav>

            {/* Spaced Copyright Line (Reference style) */}
            <p className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/80 uppercase">
              2026 COPYRIGHT &nbsp;/&nbsp; RAKSHAK SAINI &nbsp;/&nbsp; ALL RIGHTS RESERVED
            </p>

            {/* Social & Contact Bar */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/15 hover:bg-white hover:text-[#eb2d4b] text-white transition-colors border border-white/30"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/15 hover:bg-white hover:text-[#eb2d4b] text-white transition-colors border border-white/30"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="p-2 bg-white/15 hover:bg-white hover:text-[#eb2d4b] text-white transition-colors border border-white/30"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PROFILE_DATA.phoneRaw}`}
                className="p-2 bg-white/15 hover:bg-white hover:text-[#eb2d4b] text-white transition-colors border border-white/30"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="p-2 bg-white/15 hover:bg-white hover:text-[#eb2d4b] text-white transition-colors border border-white/30 ml-2"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
