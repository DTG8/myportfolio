'use client'

import { motion } from 'framer-motion'

interface SkillBadgeProps {
  skill: string
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 glass-strong rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all cursor-default border border-slate-200 dark:border-slate-700 hover:border-primary-500/50 dark:hover:border-primary-400/50"
    >
      {skill}
    </motion.span>
  )
}
