# Mobolade Daniel - Portfolio Website

A modern, professional portfolio website showcasing my work as a Web Developer and Cloud/DevOps Engineer.

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Fully mobile-responsive
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Framer Motion animations
- 🌈 Beautiful gradient effects and glassmorphism
- 📧 Contact form
- 🚀 Optimized for performance

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── ContactForm.tsx  # Contact form component
│   ├── ProjectCard.tsx # Project card component
│   └── SkillBadge.tsx  # Skill badge component
├── public/              # Static assets
└── package.json
```

## Customization

Update the following to customize the portfolio:

1. **Personal Information**: Edit `app/page.tsx` - update name, title, and description
2. **Projects**: Modify the `projects` array in `app/page.tsx`
3. **Skills**: Update the `skills` object in `app/page.tsx`
4. **Contact**: Update email addresses and social links
5. **Colors**: Modify `tailwind.config.js` for color scheme changes

## Deployment

This portfolio can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Cloudflare Pages**

## License

© 2025 Mobolade Daniel. All rights reserved.

