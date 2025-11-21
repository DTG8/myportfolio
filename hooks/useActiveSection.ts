'use client'

import { useEffect, useState } from 'react'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'contact']
    
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            return
          }
        }
      }
      
      // If at top, clear active section
      if (window.scrollY < 100) {
        setActiveSection('')
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return activeSection
}

