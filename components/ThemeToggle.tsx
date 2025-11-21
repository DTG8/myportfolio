'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !mounted) {
    return (
      <div className="relative p-2 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-md border border-primary-500/30">
        <Moon className="w-5 h-5 text-primary-400" />
      </div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-md border border-primary-500/30 hover:border-primary-400/50 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-primary-400" />
        ) : (
          <Sun className="w-5 h-5 text-gold-500" />
        )}
      </motion.div>
    </motion.button>
  )
}

