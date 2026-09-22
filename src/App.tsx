import { useState } from 'react';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { FeaturedProject } from './components/FeaturedProject';
import { EditorialShowcase } from './components/EditorialShowcase';
import { Services } from './components/Services';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { AWSCloudCaseStudyModal } from './components/AWSCloudCaseStudyModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [caseStudyModalOpen, setCaseStudyModalOpen] = useState(false);
  const [cloudCaseStudyModalOpen, setCloudCaseStudyModalOpen] = useState(false);

  return (
    <ProfilePhotoProvider>
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0066FF] selection:text-white">
        {/* Front Page Header matching reference */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        <main id="main-content">
          {/* Front Page Hero matching Reference Screenshot with blue tech grid, Rakshak Saini title, and circular RS avatar */}
          <Hero onOpenResume={() => setResumeModalOpen(true)} />

          {/* About Section */}
          <About />

          {/* Education: MIET B.Tech IT, 12th KD Int, 10th Karan Public */}
          <Education />

          {/* Experience: AI Web Dev Intern & InAmigos Foundation */}
          <Experience />

          {/* Skills & Capabilities */}
          <Skills />

          {/* Featured Project: NagrikSetu AI */}
          <FeaturedProject onOpenCaseStudy={() => setCaseStudyModalOpen(true)} />

          {/* Project Showcase Gallery & Collaboration Callout */}
          <EditorialShowcase 
            onOpenCaseStudy={() => setCaseStudyModalOpen(true)} 
            onOpenCloudStudy={() => setCloudCaseStudyModalOpen(true)}
            onOpenResume={() => setResumeModalOpen(true)} 
          />

          {/* Services & What I Build */}
          <Services />

          {/* Verified On-Page Resume */}
          <ResumeSection 
            onOpenModal={() => setResumeModalOpen(true)} 
            onOpenCloudModal={() => setCloudCaseStudyModalOpen(true)}
          />

          {/* Direct Contact & Collaboration Form */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Full Interactive Modals */}
        <ResumeModal 
          isOpen={resumeModalOpen} 
          onClose={() => setResumeModalOpen(false)} 
          onOpenCloudModal={() => setCloudCaseStudyModalOpen(true)}
        />
        <ProjectCaseStudyModal 
          isOpen={caseStudyModalOpen} 
          onClose={() => setCaseStudyModalOpen(false)} 
        />
        <AWSCloudCaseStudyModal 
          isOpen={cloudCaseStudyModalOpen} 
          onClose={() => setCloudCaseStudyModalOpen(false)} 
        />
      </div>
    </ProfilePhotoProvider>
  );
}
