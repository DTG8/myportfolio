'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Cloud, 
  Database, 
  Server, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowDown,
  Sparkles,
  Zap,
  Award
} from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import SkillBadge from '@/components/SkillBadge'
import ContactForm from '@/components/ContactForm'
import ThemeToggle from '@/components/ThemeToggle'
import WhatsAppButton from '@/components/WhatsAppButton'
import { useActiveSection } from '@/hooks/useActiveSection'

const projects = [
  {
    id: 1,
    title: 'Cloud Phoenix',
    description: 'Enterprise-grade monitoring and escalation management system with real-time incident tracking, AVR reporting, and webhook integrations (PRTG, Zabbix). Features customer management, team assignments, and comprehensive analytics.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Material-UI', 'Chart.js'],
    category: 'DevOps / Monitoring',
    features: ['Real-time monitoring', 'AVR reporting', 'Webhook integrations', 'Team management', 'Analytics dashboard'],
    color: 'from-primary-500 via-accent-500 to-secondary-500',
    url: 'https://cloudphoenix.netlify.app/'
  },
  {
    id: 2,
    title: 'Ratel Store',
    description: 'Full-featured e-commerce platform with user authentication, product management, payment processing via Paystack, order tracking, and admin dashboard with analytics.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'NextAuth', 'Paystack', 'Chart.js', 'Tailwind CSS'],
    category: 'E-commerce',
    features: ['User authentication', 'Payment processing', 'Order management', 'Admin dashboard', 'Analytics'],
    color: 'from-accent-500 via-primary-500 to-secondary-500',
    url: ''
  },
  {
    id: 3,
    title: 'Onedata Payment System',
    description: 'Payment processing platform for ISP services with Paystack integration, admin panel, customer management, and automated invoice generation. Supports monthly/yearly billing cycles.',
    technologies: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Paystack', 'Puppeteer'],
    category: 'Payment Processing',
    features: ['Payment processing', 'Admin dashboard', 'Invoice generation', 'Customer management', 'Analytics'],
    color: 'from-secondary-500 via-primary-500 to-accent-500',
    url: ''
  },
  {
    id: 4,
    title: 'Project Alpha - Bank Analyzer',
    description: 'Advanced bank statement analyzer for tracking customer payment patterns. Processes multi-bank statements (Paystack, Providus, GTBank, etc.), provides customer analytics, and generates comprehensive reports.',
    technologies: ['Python', 'Flask', 'SQLite', 'Pandas', 'OpenPyXL', 'Bootstrap'],
    category: 'Data Analytics',
    features: ['Multi-bank support', 'Customer analytics', 'Payment tracking', 'Report generation', 'Database management'],
    color: 'from-primary-600 via-accent-600 to-secondary-600',
    url: ''
  },
  {
    id: 5,
    title: 'Derby Kids Online School',
    description: 'Modern educational platform website with responsive design, course management, contact forms with EmailJS integration, and WhatsApp integration. Built with smooth animations and modern UI.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    category: 'Education',
    features: ['Responsive design', 'Email integration', 'Course management', 'Contact forms', 'WhatsApp integration'],
    color: 'from-accent-400 via-primary-400 to-secondary-400',
    url: 'https://derbykids.netlify.app/'
  }
]

const skills = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material-UI', 'Framer Motion'],
  'Backend': ['Node.js', 'Express', 'Python', 'Flask', 'REST APIs', 'GraphQL'],
  'Database': ['MongoDB', 'PostgreSQL', 'SQLite', 'Prisma', 'Mongoose'],
  'Cloud/DevOps': ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Monitoring', 'Webhooks', 'Infrastructure Management'],
  'Tools': ['Git', 'GitHub', 'VS Code', 'Postman', 'Puppeteer', 'Socket.io', 'Nginx', 'Linux', 'Bash', 'Prometheus', 'Grafana']
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const activeSection = useActiveSection()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  useEffect(() => {
    setMounted(true)
  }, [])

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-strong border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-bold text-gradient hover:scale-105 transition-transform"
            >
              MDM
            </motion.a>
            <div className="hidden md:flex space-x-2 lg:space-x-4 items-center relative">
              <a 
                href="#about" 
                className="relative px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition-colors duration-300"
              >
                {activeSection === 'about' && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary-500/30 dark:bg-primary-500/40 backdrop-blur-sm rounded-lg border border-primary-500/50 dark:border-primary-400/50"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${activeSection === 'about' ? 'text-primary-600 dark:text-primary-400' : 'text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400'}`}>
                  About
                </span>
              </a>
              <a 
                href="#projects" 
                className="relative px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition-colors duration-300"
              >
                {activeSection === 'projects' && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary-500/30 dark:bg-primary-500/40 backdrop-blur-sm rounded-lg border border-primary-500/50 dark:border-primary-400/50"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${activeSection === 'projects' ? 'text-primary-600 dark:text-primary-400' : 'text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400'}`}>
                  Projects
                </span>
              </a>
              <a 
                href="#skills" 
                className="relative px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition-colors duration-300"
              >
                {activeSection === 'skills' && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary-500/30 dark:bg-primary-500/40 backdrop-blur-sm rounded-lg border border-primary-500/50 dark:border-primary-400/50"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${activeSection === 'skills' ? 'text-primary-600 dark:text-primary-400' : 'text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400'}`}>
                  Skills
                </span>
              </a>
              <a 
                href="#contact" 
                className="relative px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition-colors duration-300"
              >
                {activeSection === 'contact' && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary-500/30 dark:bg-primary-500/40 backdrop-blur-sm rounded-lg border border-primary-500/50 dark:border-primary-400/50"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${activeSection === 'contact' ? 'text-primary-600 dark:text-primary-400' : 'text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400'}`}>
                  Contact
                </span>
              </a>
              
              <div className="relative z-20 ml-2 lg:ml-4">
                <ThemeToggle />
              </div>
            </div>
            <div className="flex space-x-3 sm:space-x-4 items-center md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 section-gradient premium-glow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gradient">Mobolade Daniel Mayowa</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Web Developer & Cloud/DevOps Engineer
            </motion.p>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Building scalable web applications and managing cloud infrastructure with 4 years of experience. 
              Transforming ideas into exceptional digital experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            >
              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all text-base sm:text-lg text-center"
              >
                Explore Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 glass-strong rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary-500/10 dark:hover:bg-primary-500/20 transition-all text-base sm:text-lg border-2 border-primary-500/30 text-center"
              >
                Get In Touch
              </motion.a>
              <motion.a 
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 glass-strong rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:bg-primary-500/10 dark:hover:bg-primary-500/20 transition-all text-base sm:text-lg border-2 border-accent-500/30 text-center flex items-center justify-center gap-2"
              >
                <ArrowDown size={20} />
                Download Resume
              </motion.a>
            </motion.div>
            
            {/* Statistics Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
            >
              {[
                { number: '4+', label: 'Years Experience' },
                { number: '15+', label: 'Projects Completed' },
                { number: '20+', label: 'Technologies' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center card-hover"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 section-gradient-alt">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-gold-500" />
              <span className="text-gold-500 font-semibold text-sm sm:text-base">About Me</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-800 dark:text-white px-4">
              Crafting Digital <span className="text-gradient">Excellence</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                I&apos;m <span className="text-primary-600 dark:text-primary-400 font-semibold">Mobolade Daniel Mayowa</span>, a passionate Web Developer and Cloud/DevOps Engineer with 4 years of experience building robust, scalable applications and managing cloud infrastructure.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                My expertise spans full-stack development, cloud infrastructure management, and DevOps practices. I specialize in creating modern web applications using React, Next.js, and Node.js, while also managing complex cloud environments and monitoring systems.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I&apos;m passionate about writing clean, maintainable code and implementing best practices in software development and infrastructure management. Every project is an opportunity to create something extraordinary.
              </p>
              
              {/* Experience Timeline */}
              <div className="mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-6">Experience Timeline</h3>
                <div className="space-y-6">
                  {[
                    { year: '2020 - Present', role: 'Web Developer & Cloud/DevOps Engineer', company: 'Freelance & Contract', description: 'Building scalable web applications and managing cloud infrastructure for various clients.' },
                    { year: '2020', role: 'Started Career', company: 'Self-Taught', description: 'Began journey in web development and cloud engineering, continuously learning and growing.' },
                  ].map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                      className="relative pl-6 sm:pl-8 border-l-2 border-primary-500/30 dark:border-primary-400/30"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-500 border-2 border-white dark:border-slate-900"></div>
                      <div className="text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">{exp.year}</div>
                      <div className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mb-1">{exp.role}</div>
                      <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-2">{exp.company}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{exp.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {[
                { icon: Code, title: 'Web Development', desc: 'Building modern, responsive web applications', color: 'text-primary-500' },
                { icon: Cloud, title: 'Cloud Engineering', desc: 'Managing cloud infrastructure and services', color: 'text-accent-500' },
                { icon: Database, title: 'Database Design', desc: 'Designing efficient database schemas', color: 'text-secondary-500' },
                { icon: Server, title: 'DevOps', desc: 'CI/CD, monitoring, and automation', color: 'text-primary-500' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-strong p-4 sm:p-6 rounded-xl sm:rounded-2xl card-hover group"
                >
                  <item.icon className={`${item.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform`} size={28} />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-800 dark:text-white">{item.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500" />
              <span className="text-secondary-500 font-semibold text-sm sm:text-base">Expertise</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-800 dark:text-white px-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-strong rounded-xl sm:rounded-2xl p-5 sm:p-6 card-hover group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-white">{category}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                  {items.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-2 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all cursor-default text-center"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 section-gradient-alt">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
              <span className="text-accent-500 font-semibold text-sm sm:text-base">Portfolio</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-800 dark:text-white px-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
              A collection of premium projects showcasing expertise in web development and cloud engineering
            </p>
          </motion.div>

          {/* Project Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/50'
                    : 'glass-strong text-slate-700 dark:text-slate-300 hover:bg-primary-500/10 dark:hover:bg-primary-500/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-800 dark:text-white px-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 px-4">
              Have a project in mind? Let's discuss how we can work together to create something extraordinary.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium text-center md:text-left">
            © {new Date().getFullYear()} Mobolade Daniel Mayowa. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="https://github.com/DTG8" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" aria-label="GitHub">
              <Github size={20} className="sm:w-[22px] sm:h-[22px]" />
            </a>
            <a href="https://www.linkedin.com/in/daniel-mobolade-062817299" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
            </a>
            <a href="mailto:danielmobolade@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" aria-label="Email">
              <Mail size={20} className="sm:w-[22px] sm:h-[22px]" />
            </a>
          </div>
        </div>
      </footer>
      
      <WhatsAppButton />
    </main>
  )
}
