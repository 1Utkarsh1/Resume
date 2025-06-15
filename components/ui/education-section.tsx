'use client';

import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';

interface EducationEntry {
  period: string;
  degree: string;
  institution: string;
  location: string;
  status: "current" | "completed";
  gpa?: string; // GPA is optional
  highlights: string[];
  icon: JSX.Element;
}

const educationData: EducationEntry[] = [
  {
    period: "2025 – present",
    degree: "B.E. (Hons) Software Engineering",
    institution: "University of New South Wales",
    location: "Sydney, Australia",
    status: "current",
    highlights: [
      "Advanced coursework in Machine Learning and Distributed Systems",
    ],
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    period: "2023 – 2025",
    degree: "B.E. Computer Science",
    institution: "Manipal Academy of Higher Education",
    location: "Manipal, India",
    status: "completed",
    highlights: [
      "AI/ML specialization with focus on Deep Learning",
      "Published heart-disease prediction research",
      "Head of Software Development, Enigma Technical Society"
    ],
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    period: "– 2023",
    degree: "Senior Secondary Education",
    institution: "Sachdeva Global School",
    location: "New Delhi, India",
    status: "completed",
    highlights: [
      "Physics, Chemistry, Mathematics with Computer Science",
      "Arduino automation projects and classroom IoT systems",
    ],
    icon: <Award className="w-6 h-6" />
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Academic journey spanning software engineering, AI research, and technical leadership
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
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
                      edu.status === 'current' ? 'bg-green-500/20 text-green-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {edu.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                          <BookOpen className="w-4 h-4" />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-400 text-sm mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        {edu.gpa && (
                          <div className="text-gray-300 text-sm">
                            <span className="font-semibold">GPA: </span>
                            <span className="text-blue-400">{edu.gpa}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2 mt-2 lg:mt-0">
                        {edu.status === 'current' && (
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30 w-fit">
                            Current
                          </span>
                        )}
                        {edu.status === 'completed' && (
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 w-fit">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
            <h3 className="text-2xl font-bold text-gradient-accent mb-6">Academic Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <Users className="w-8 h-8 text-purple-400" />
                <div>
                  <p className="text-white font-semibold">Leadership</p>
                  <p className="text-gray-400 text-sm">Head of Software Development</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <BookOpen className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-white font-semibold">Research</p>
                  <p className="text-gray-400 text-sm">Published ML Research</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <Award className="w-8 h-8 text-yellow-400" />
                <div>
                  <p className="text-white font-semibold">Innovation</p>
                  <p className="text-gray-400 text-sm">IoT & Arduino Projects</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}