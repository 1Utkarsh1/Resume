'use client';

import { Navigation } from '@/components/ui/navigation';
import { TextAnimation } from '@/components/ui/text-animation';
import { Sparkles } from '@/components/ui/sparkles';
import { Spotlight } from '@/components/ui/spotlight';
import { AboutSection } from '@/components/ui/about-section';
import { ExperienceSection } from '@/components/ui/experience-section';
import { EducationSection } from '@/components/ui/education-section';
import { SkillsSection } from '@/components/ui/skills-section';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { ResearchSection } from '@/components/ui/research-section';
import { ContactSection } from '@/components/ui/contact-section';
import { ProjectsSection } from '@/components/ui/projects-section';
import { motion } from 'framer-motion';
import { VideoScroll } from '@/components/ui/video-scroll';

export default function Home() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <VideoScroll />
      <Navigation />
      
      {/* Hero Section */}
      <main className="relative z-10">
        <Sparkles />
        
        <section className="min-h-screen flex relative pt-16 overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          {/* Main Hero content centered */}
          <div className="w-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 relative z-10 text-center">
            <TextAnimation />
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Education Section */}
        <EducationSection />

        {/* Projects Section - Now above Skills */}
        <ProjectsSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Research Section */}
        <ResearchSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 mb-4">
                © 2025 Utkarsh Rajput. Crafted with passion and precision.
              </p>
              <p className="text-gray-500 text-sm">
                Building the future, one algorithm at a time.
              </p>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
}