import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send, CheckCircle2, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ContactFormData } from '../types';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please provide a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please enter a message of at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift client processing & open mailto option if desired
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Optional mailto link launch or keep state
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleQuickSubject = (preset: string) => {
    setFormData(prev => ({
      ...prev,
      subject: preset,
      message: prev.message || `Hi Rakshak, I came across your portfolio and would like to connect regarding ${preset.toLowerCase()}...`
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#fafaf9] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Reference Style) */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.25em] text-slate-800 uppercase mb-3 select-none">
            <span className="text-[#eb2d4b]">▶</span>
            <span>CONTACT &amp; INQUIRIES</span>
          </div>
          <h2 className="font-display-serif text-3xl sm:text-4xl font-bold text-[#eb2d4b] tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-normal">
            Available for internships, entry-level cybersecurity and cloud engineering roles, or project collaborations.
          </p>
        </div>

        {/* Contact Grid: Info Cards (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Connect Directly
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Feel free to email me directly, connect on LinkedIn, or inspect my repositories on GitHub.
              </p>

              {/* Channels List */}
              <div className="space-y-4">
                
                {/* Email item */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="block text-[11px] font-semibold uppercase text-slate-400">Email Address</span>
                      <a 
                        href={`mailto:${PROFILE_DATA.email}`}
                        className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                      >
                        {PROFILE_DATA.email}
                      </a>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="block text-[11px] font-semibold uppercase text-slate-400">Phone Number</span>
                      <a 
                        href={`tel:${PROFILE_DATA.phoneRaw}`}
                        className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                      >
                        {PROFILE_DATA.phone}
                      </a>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors shrink-0 cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn item */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="block text-[11px] font-semibold uppercase text-slate-400">LinkedIn Profile</span>
                      <a 
                        href={PROFILE_DATA.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                      >
                        linkedin.com/in/rakshak-saini-461396324
                      </a>
                    </div>
                  </div>
                </div>

                {/* GitHub item */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="block text-[11px] font-semibold uppercase text-slate-400">GitHub Profile</span>
                      <a 
                        href={PROFILE_DATA.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                      >
                        github.com/rakshakcodes-dot
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location item */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase text-slate-400">Current Location</span>
                    <span className="text-sm font-bold text-slate-900">
                      {PROFILE_DATA.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Status pill */}
              <div className="mt-6 p-4 rounded-2xl bg-blue-100/60 border border-blue-200 text-blue-900 text-xs sm:text-sm flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                <span>Currently available for student internships, technical projects, and summer development roles.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative">
              
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Fill out the form below or choose a quick topic preset.
              </p>

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  'Internship Opportunity',
                  'Project Collaboration',
                  'General Inquiry'
                ].map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQuickSubject(preset)}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    + {preset}
                  </button>
                ))}
              </div>

              {isSuccess ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-emerald-200 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out, <span className="font-semibold">{formData.name}</span>. Your message has been prepared. You can also send directly to <a href={`mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`} className="text-blue-600 font-semibold underline">{PROFILE_DATA.email}</a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Inquiry regarding Web & Cloud Internship"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.subject ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.subject && <p className="text-xs text-rose-600 mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Rakshak, I'd like to talk about..."
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-600/25 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Preparing Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <a 
                      href={`mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message || 'Hi Rakshak,')}`}
                      className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      Prefer your native email app? Open Mail Client &rarr;
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
