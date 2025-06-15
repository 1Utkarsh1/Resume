'use client';

import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Calendar, MapPin, Building2, Code, Brain, Users, TrendingUp } from 'lucide-react';

const experiences = [
  {
    period: "Jun 2025 – Present",
    role: "Software Engineer for AI Training (Code Quality & Debugging)",
    company: "Outlier",
    location: "Freelance, Remote (US)",
    type: "current",
    icon: <Brain className="w-6 h-6" />,
    contributions: [
      "Create and answer advanced questions on software-engineering concepts to train AI models",
      "Review AI-generated code (JavaScript, Python, Go, Java, TypeScript, C++), analysing quality, maintainability and adherence to real-world standards",
      "Provide expert feedback on version control workflows, collaborative coding practices and debugging techniques",
      "Contribute datasets used for full-stack development, ML and model-interpretation tasks"
    ]
  },
  {
    period: "May 2025 – Present",
    role: "Software Engineering Project Lead",
    company: "InderMoney Services Pvt Ltd",
    location: "New Delhi, India",
    type: "current",
    icon: <Code className="w-6 h-6" />,
    contributions: [
      "Re-platformed a legacy MS-Access banking stack to a secure real-time web system serving 30k+ users",
      "Built AI-driven reporting pipelines and a corporate-spend module that cut processing time by 60%",
      "Led full-stack development using modern web technologies and cloud infrastructure",
      "Implemented security best practices and real-time data synchronization"
    ]
  },
  {
    period: "Dec 2023 – Feb 2024",
    role: "AI Developer",
    company: "SKOLAR",
    location: "Remote",
    type: "past",
    icon: <Brain className="w-6 h-6" />,
    contributions: [
      "Designed and evaluated ML models for educational technology applications",
      "Handled feature engineering & data pipelines for large-scale datasets",
      "Presented insights to stakeholders and contributed to product strategy",
      "Collaborated with cross-functional teams to integrate AI solutions"
    ]
  },
  {
    period: "May 2024 – Jul 2024",
    role: "Web-Developer Intern",
    company: "InderMoney Services",
    location: "New Delhi, India",
    type: "past",
    icon: <Code className="w-6 h-6" />,
    contributions: [
      "Delivered a responsive Django-based site with modern UI/UX design",
      "Implemented SEO & performance optimizations improving load times by 40%",
      "Improved cross-browser compatibility and mobile responsiveness",
      "Collaborated with design team to implement pixel-perfect interfaces"
    ]
  },
  {
    period: "Sep 2023 – May 2025",
    role: "Head of Software Development",
    company: "Enigma Technical Society",
    location: "Manipal, India",
    type: "leadership",
    icon: <Users className="w-6 h-6" />,
    contributions: [
      "Led agile team of 12 developers across multiple AI/ML projects",
      "Ran code reviews and established development best practices",
      "Mentored juniors on AI/ML projects and career development",
      "Organized technical workshops and hackathons for 200+ students"
    ]
  }
];

const additionalRoles = [
  "AI Job Simulation – Cognizant (Nov 2023)",
  "Fund-raising Intern – TopTrove Foundation (Nov–Dec 2023)",
  "Team Lead – Mohan Foundation Organ-Donation drive (Sep 2019 – Jan 2020)"
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building production systems and leading teams in AI research and full-stack development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`p-3 rounded-xl ${
                      exp.type === 'current' ? 'bg-green-500/20 text-green-400' :
                      exp.type === 'leadership' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {exp.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {exp.type === 'current' && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30 mt-2 lg:mt-0 w-fit">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      {exp.contributions.map((contribution, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">{contribution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 relative"
        >
          <div className="glass-effect rounded-2xl p-8">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />
            <h3 className="text-2xl font-bold text-gradient-accent mb-6">Additional Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalRoles.map((role, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <TrendingUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}