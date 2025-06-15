'use client';

import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { FileText, Calendar, Users, TrendingUp, Award, ExternalLink, Clock } from 'lucide-react';

const researchProjects = [
  {
    year: "2024 – present",
    status: "under review",
    journal: "IEEE TCSS",
    title: "Cross-Lingual & Temporal Dynamics in Fake News Detection",
    role: "Lead Author",
    type: "current",
    metrics: {
      articles: "44k",
      f1Score: "92%",
      languages: "Hindi + English"
    },
    highlights: [
      "Built multilingual transformer pipeline over 44k articles (Hindi + English) with 92% F1 score",
      "Implemented temporal-aware sampling and topic-drift robustness tests",
      "Advanced cross-lingual transfer learning techniques",
      "Novel approach to handling temporal dynamics in fake news detection"
    ],
    icon: <FileText className="w-6 h-6" />
  },
  {
    year: "2024 – present",
    status: "working paper",
    title: "Neural-Network–Based Trading Strategies in Pine Script",
    role: "Principal Researcher",
    type: "current",
    highlights: [
      "Designing real-time NIFTY/Bank NIFTY options strategy using engineered features",
      "CNN + LSTM hybrid architecture for market prediction",
      "Live-data ingestion via WebSocket with real-time processing",
      "Arrow annotations locked post-placement for strategy validation"
    ],
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    year: "2023 – 2024",
    status: "published",
    journal: "ICAS Tech Symposium '24",
    title: "Feature Engineering Optimisation & Stacked Weighted Model for Heart-Disease Prediction",
    role: "Co-author with faculty advisor",
    type: "published",
    metrics: {
      rocAuc: "89%",
      dataset: "Kaggle Heart Disease",
      techniques: "MICE, SVD, RF, ExtraTrees"
    },
    highlights: [
      "Employed MICE imputation and Truncated SVD (9 components) for data preprocessing",
      "Random Forest (200 trees) and ExtraTrees with advanced stacking techniques",
      "Achieved 89% ROC-AUC on Kaggle Heart Disease dataset",
      "Comprehensive feature engineering optimization pipeline"
    ],
    icon: <Award className="w-6 h-6" />
  }
];

const statusColors = {
  current: "bg-green-500/20 text-green-300 border-green-500/30",
  published: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  review: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
};

export function ResearchSection() {
  return (
    <section id="research" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Research & Publications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge research at the intersection of AI, NLP, and practical applications
          </p>
        </motion.div>

        <div className="space-y-8">
          {researchProjects.map((project, index) => (
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
                      project.type === 'current' ? 'bg-green-500/20 text-green-400' :
                      project.type === 'published' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                        <div className="flex items-center gap-4 text-gray-400 text-sm mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{project.role}</span>
                          </div>
                        </div>
                        {project.journal && (
                          <div className="text-blue-400 text-sm font-semibold mb-2">
                            {project.journal}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col gap-2 mt-2 lg:mt-0">
                        <span className={`px-3 py-1 rounded-full text-sm border w-fit ${
                          project.status === 'under review' ? statusColors.review :
                          project.status === 'published' ? statusColors.published :
                          statusColors.current
                        }`}>
                          {project.status === 'under review' ? 'Under Review' :
                           project.status === 'published' ? 'Published' :
                           'In Progress'}
                        </span>
                        {project.type === 'current' && (
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30 w-fit">
                            Active Research
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        {Object.entries(project.metrics).map(([key, value], idx) => (
                          <div key={idx} className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="text-xs text-gray-400 uppercase tracking-wide">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="text-white font-semibold">{value}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
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

        {/* Research Impact */}
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
            <h3 className="text-2xl font-bold text-gradient-accent mb-6">Research Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">3 Publications</h4>
                <p className="text-gray-400 text-sm">Active research in AI, NLP, and ML applications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">92% F1 Score</h4>
                <p className="text-gray-400 text-sm">State-of-the-art performance in fake news detection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Real-time Systems</h4>
                <p className="text-gray-400 text-sm">Live trading algorithms and real-time data processing</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}