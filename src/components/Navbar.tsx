import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { NAV_ITEMS, PROFILE_DATA } from '../data/portfolioData';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const { photoUrl } = useProfilePhoto();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'EDUCATION', href: '#education', id: 'education' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
        scrolled ? 'border-slate-200 shadow-xs py-3.5' : 'border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Brand Identity: Blue Rounded Square RS Logo + Profile Photo + Rakshak Saini */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0066FF] rounded-xl"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-[#0066FF] shadow-xs transition-transform group-hover:scale-105 bg-slate-900">
                <img
                  src={photoUrl}
                  alt="Rakshak Saini"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 px-1 py-0.2 bg-[#0066FF] text-white text-[9px] font-extrabold font-mono rounded border border-white leading-tight">
                RS
              </span>
            </div>
            <span className="font-bold text-slate-900 text-lg sm:text-xl tracking-tight">
              {PROFILE_DATA.name}
            </span>
          </a>

          {/* Desktop Navigation Links matching Reference Header */}
          <nav 
            id="desktop-nav"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold tracking-wider text-slate-600 select-none"
          >
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`transition-colors py-1 hover:text-[#0066FF] ${
                  activeSection === item.id ? 'text-[#0066FF] font-bold' : ''
                }`}
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={onOpenResume}
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0066FF] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs font-semibold text-[#0066FF] bg-blue-50 rounded-lg border border-blue-200"
            >
              Resume
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider text-slate-700 hover:bg-blue-50 hover:text-[#0066FF] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
