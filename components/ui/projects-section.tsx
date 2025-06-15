'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Package, Brain, Camera, Repeat, DollarSign, TrendingUp } from 'lucide-react';
import { GlowingEffect } from './glowing-effect';

const projects = [
  {
    title: "Local-LLM Kit",
    description: "PyPI package providing an OpenAI-compatible REST/streaming API for local LLMs; supports function-calling, JSON-mode & logprobs; Dockerised with CI/CD for on-prem deployment.",
    icon: <Package className="h-6 w-6" />,
    tags: ["Python", "Docker", "API", "LLM"],
    github: "https://github.com/1Utkarsh1",
    demo: null,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Model-Compression Pipeline",
    description: "End-to-end framework for pruning, quantisation, distillation & lottery-ticket search; shrinks SOTA models by ≤ 75% and doubles edge-GPU throughput.",
    icon: <Brain className="h-6 w-6" />,
    tags: ["PyTorch", "Model Optimization", "Edge Computing"],
    github: "https://github.com/1Utkarsh1",
    demo: null,
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Dynamic-NeRF",
    description: "Temporal NeRF with spatio-temporal attention to render moving scenes; full training & rendering pipeline.",
    icon: <Camera className="h-6 w-6" />,
    tags: ["Computer Vision", "3D Rendering", "Neural Networks"],
    github: "https://github.com/1Utkarsh1",
    demo: null,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Continual-Learning System",
    description: "Research platform implementing EWC, Experience Replay & LwF with visual forgetting metrics for lifelong learning benchmarks.",
    icon: <Repeat className="h-6 w-6" />,
    tags: ["Machine Learning", "Research", "Continual Learning"],
    github: "https://github.com/1Utkarsh1",
    demo: null,
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Money Manager",
    description: "Django + MySQL web app for personal-finance budgeting & expense tracking; live demo + Bootstrap UI.",
    icon: <DollarSign className="h-6 w-6" />,
    tags: ["Django", "MySQL", "Web Development", "Finance"],
    github: "https://github.com/1Utkarsh1",
    demo: "https://demo.example.com",
    gradient: "from-emerald-500 to-cyan-600"
  },
  {
    title: "iStockz Paper-Trading Platform",
    description: "MVC Python web app with yfinance feeds, secure auth and portfolio analytics.",
    icon: <TrendingUp className="h-6 w-6" />,
    tags: ["Python", "Trading", "Analytics", "Finance"],
    github: "https://github.com/1Utkarsh1",
    demo: null,
    gradient: "from-indigo-500 to-blue-600"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions at the intersection of AI and practical applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm p-6 hover:border-white/20 transition-all duration-300">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>

                  {/* Project title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-accent transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors duration-300 border border-white/10 hover:border-white/20"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm rounded-lg transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/1Utkarsh1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}