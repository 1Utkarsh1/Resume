'use client';

import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { 
  Code, 
  Brain, 
  Database, 
  Globe, 
  Settings, 
  Cpu,
  Terminal,
  GitBranch,
  Cloud,
  Smartphone
} from 'lucide-react';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="w-6 h-6" />,
    color: "blue",
    skills: [
      "Python", "C++", "Java", "Assembly", "JavaScript/TypeScript", 
      "PyTorch", "Django", "Node.js", "React", "Next.js"
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: <Brain className="w-6 h-6" />,
    color: "purple",
    skills: [
      "CNNs", "RNN/LSTM", "Transformers", "LLMs", "Recommender Systems",
      "Computer Vision", "NLP", "Deep Learning", "Model Optimization"
    ]
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6" />,
    color: "green",
    skills: [
      "SQL (MySQL/PostgreSQL)", "Feature Engineering", "Data Analysis",
      "Statistical Modeling", "Data Visualization", "ETL Pipelines"
    ]
  },
  {
    title: "Web & Cloud Technologies",
    icon: <Globe className="w-6 h-6" />,
    color: "orange",
    skills: [
      "HTML/CSS/JS", "REST APIs", "GraphQL", "Microservices",
      "AWS", "Docker", "Kubernetes", "CI/CD"
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Settings className="w-6 h-6" />,
    color: "red",
    skills: [
      "Git/GitHub", "Docker", "CI/CD", "GitHub Actions",
      "Linux", "Bash Scripting", "Monitoring", "Testing"
    ]
  },
  {
    title: "Specialized Skills",
    icon: <Cpu className="w-6 h-6" />,
    color: "cyan",
    skills: [
      "Arduino Automation", "IoT Systems", "Technical Writing",
      "Agile/Scrum", "Team Leadership", "Mentoring"
    ]
  }
];

const colorVariants = {
  blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  green: "bg-green-500/20 text-green-400 border-green-500/30",
  orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  red: "bg-red-500/20 text-red-400 border-red-500/30",
  cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across the full technology stack, from AI research to production systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8 h-full">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${colorVariants[category.color as keyof typeof colorVariants]}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-white/10 text-gray-300 rounded-lg text-sm border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
            <h3 className="text-2xl font-bold text-gradient-accent mb-6 text-center">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">AI/ML Research</h4>
                <p className="text-gray-400 text-sm">Deep expertise in neural networks, NLP, and computer vision with published research</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Full-Stack Development</h4>
                <p className="text-gray-400 text-sm">Production-ready web applications with modern frameworks and cloud deployment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">System Architecture</h4>
                <p className="text-gray-400 text-sm">Scalable system design, DevOps practices, and team leadership experience</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}