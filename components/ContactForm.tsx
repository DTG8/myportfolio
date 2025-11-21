'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle2, Sparkles } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-strong rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
        {isSubmitted ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <CheckCircle2 className="text-green-500 mx-auto mb-4 sm:mb-6" size={48} />
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-2 sm:mb-3">Message Sent!</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">I'll get back to you as soon as possible.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg sm:rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg sm:rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg sm:rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm sm:text-base"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg sm:rounded-xl text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all text-sm sm:text-base"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 text-white text-base sm:text-lg"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} className="sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        )}
      </div>

      <div className="mt-10 text-center space-y-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-slate-600 dark:text-slate-400 mb-3 sm:mb-4">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
          <span className="font-medium text-sm sm:text-base">Or reach out directly at</span>
        </div>
        <div className="space-y-3">
          <a
            href="mailto:danielmobolade@gmail.com"
            className="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-semibold text-base sm:text-lg break-all"
          >
            danielmobolade@gmail.com
          </a>
          <a
            href="tel:+2348072072891"
            className="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-semibold text-base sm:text-lg"
          >
            +234 807 207 2891
          </a>
        </div>
      </div>
    </motion.div>
  )
}
