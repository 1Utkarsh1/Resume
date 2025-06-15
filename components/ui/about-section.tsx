'use client';

import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Badge, Award, MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about translating research into scalable products and mentoring budding developers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Journey Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
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
                <h3 className="text-2xl font-bold text-gradient-accent mb-4">My Journey</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Software-developer-turned-AI-researcher with <span className="text-blue-400 font-semibold">1-plus year</span> of hands-on experience building production ML/DL systems and full-stack web apps. Currently pursuing a{' '}
                    <span className="text-blue-400 font-semibold">B.E. (Hons) in Software Engineering at UNSW</span> and leading projects on cross-lingual NLP, AI-driven trading strategies and predictive analytics.
                  </p>
                  <p>
                    Passionate about <span className="text-blue-400 font-semibold">translating research into scalable products</span> and mentoring budding developers. I thrive at the intersection of cutting-edge AI research and practical software engineering.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                <h3 className="text-2xl font-bold text-gradient-accent mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>+91 728 909 3757</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>kumarutkarsh815@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>New Delhi, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <a href="https://www.linkedin.com/in/utkarsh-rajput" className="hover:text-blue-400 transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Github className="w-5 h-5 text-blue-400" />
                    <a href="https://github.com/1Utkarsh1" className="hover:text-blue-400 transition-colors">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications & Awards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
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
                <h3 className="text-2xl font-bold text-gradient-accent mb-6">Certifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Python (Basic)',
                    'Problem Solving (Basic)',
                    'SQL (Advanced)',
                    'SQL (Intermediate)',
                    'Problem Solving (Intermediate)',
                    'CSS (Basic)',
                    'Node.js (Intermediate)',
                    'Software Engineer Intern'
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Badge className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">All certifications from HackerRank</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                <h3 className="text-2xl font-bold text-gradient-accent mb-6">Honors & Awards</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="text-white font-semibold">3rd Place - WARTEX 7.0</p>
                      <p className="text-sm text-gray-400">Technical Competition</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="text-white font-semibold">Top 10 - IECSE Freshers' Codesprint 2023</p>
                      <p className="text-sm text-gray-400">Programming Contest</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="text-white font-semibold">Top 10 - IEEE-SBM WiE Codathon 2023</p>
                      <p className="text-sm text-gray-400">Coding Competition</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                <h3 className="text-2xl font-bold text-gradient-accent mb-4">Work Preferences</h3>
                <div className="flex flex-wrap gap-2">
                  {['Remote', 'Hybrid', 'Relocation'].map((mode, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {mode}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}