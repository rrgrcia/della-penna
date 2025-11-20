# della PENNA - Next.js Website

A modern, mobile-friendly Next.js website for della PENNA European Coaches, converted from Vite/React to Next.js 16+ with App Router.

## Features

- ✅ Next.js 16+ with App Router
- ✅ React 18+ with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ Multi-language support (EN, IT, PT, ES)
- ✅ Fully responsive and mobile-friendly
- ✅ Modern UI with parallax effects and smooth animations
- ✅ Optimized for Vercel deployment

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── AboutUs.tsx
│   │   ├── Contact.tsx
│   │   ├── FleetGallery.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── History.tsx
│   │   ├── LanguageProvider.tsx
│   │   ├── LanguageSelector.tsx
│   │   ├── Navbar.tsx
│   │   ├── OurFleet.tsx
│   │   ├── ParallaxSpacer.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── SectionTitle.tsx
│   │   └── TheCompany.tsx
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/                   # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies

```

## Deployment

This project is optimized for Vercel deployment. Simply connect your repository to Vercel and deploy.

## Notes

- All images are currently loaded from external URLs (dellapenna.it)
- The `src/` directory from the original Vite project can be safely deleted
- All components are client components (marked with "use client") where needed
- Language context is provided at the root layout level

## Conversion Summary

### Created Files
- `app/layout.tsx` - Root layout with fonts and metadata
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles
- `app/components/*` - All converted components
- `next.config.js` - Next.js configuration
- `.eslintrc.json` - ESLint configuration

### Modified Files
- `package.json` - Updated with Next.js dependencies
- `tsconfig.json` - Updated for Next.js
- `tailwind.config.js` - Updated for Next.js App Router

### Deleted Files
- `vite.config.ts` - Vite configuration (no longer needed)
- `index.html` - Replaced by Next.js App Router
- `tsconfig.app.json`, `tsconfig.node.json`, `tsconfig.worker.json` - Consolidated into main tsconfig.json
- `wrangler.json` - Cloudflare Workers config (no longer needed)
- `eslint.config.js` - Replaced with Next.js ESLint config

### Manual Cleanup Required
- Delete the `src/` directory (all code has been moved to `app/`)
