import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mobolade Daniel Mayowa | Web Developer & Cloud/DevOps Engineer',
  description: 'Portfolio of Mobolade Daniel Mayowa - Web Developer and Cloud/DevOps Engineer with 4 years of experience building scalable applications and managing cloud infrastructure. Specializing in React, Next.js, Node.js, AWS, Docker, and Kubernetes.',
  keywords: ['Web Developer', 'Cloud Engineer', 'DevOps', 'Full Stack Developer', 'Portfolio', 'React', 'Next.js', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
  authors: [{ name: 'Mobolade Daniel Mayowa' }],
  creator: 'Mobolade Daniel Mayowa',
  openGraph: {
    title: 'Mobolade Daniel Mayowa | Web Developer & Cloud/DevOps Engineer',
    description: 'Portfolio of Mobolade Daniel Mayowa - Web Developer and Cloud/DevOps Engineer with 4 years of experience.',
    url: 'https://moboladedaniel.com',
    siteName: 'Mobolade Daniel Mayowa Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobolade Daniel Mayowa | Web Developer & Cloud/DevOps Engineer',
    description: 'Portfolio of Mobolade Daniel Mayowa - Web Developer and Cloud/DevOps Engineer.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

