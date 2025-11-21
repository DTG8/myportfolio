'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  category: string
  features: string[]
  color: string
  url?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-strong rounded-xl sm:rounded-2xl p-6 sm:p-8 card-hover group relative overflow-hidden"
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}></div>
      
      <div className="mb-4 sm:mb-6">
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
        </div>
        <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 dark:from-primary-500/30 dark:to-accent-500/30 text-primary-700 dark:text-primary-300 border border-primary-500/30">
          {project.category}
        </span>
      </div>

      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-4 sm:mb-6">
        <h4 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 sm:mb-3">Key Features:</h4>
        <ul className="space-y-1.5 sm:space-y-2">
          {project.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-center">
              <span className="text-primary-500 mr-2">▸</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4 sm:mb-6">
        <h4 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 sm:mb-3">Technologies:</h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 text-xs rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 sm:px-3 py-1 text-xs rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6 sm:mt-8">
        {project.url ? (
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all text-xs sm:text-sm text-white flex items-center justify-center gap-2"
          >
            View Live Site
            <ExternalLink size={14} className="sm:w-4 sm:h-4" />
          </motion.a>
        ) : (
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all text-xs sm:text-sm text-white flex items-center justify-center gap-2"
          >
            View Details
            <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </motion.button>
        )}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 sm:px-6 py-2.5 sm:py-3 glass rounded-xl hover:bg-primary-500/10 dark:hover:bg-primary-500/20 transition-all border border-primary-500/30 flex items-center justify-center"
        >
          <Github size={16} className="sm:w-[18px] sm:h-[18px] text-slate-700 dark:text-slate-300" />
        </motion.button>
      </div>
    </motion.div>
  )
}
