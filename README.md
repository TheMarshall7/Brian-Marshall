# Brian Marshall Portfolio - React + Vite

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Modern React with hooks
- 📘 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🚀 **React Router** - Client-side routing
- 🔍 **SEO Optimized** - React Helmet Async for meta tags
- 📱 **Fully Responsive** - Mobile-first design
- ✨ **Smooth Animations** - Intersection Observer based scroll animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/     # Reusable React components
│   │   └── Navigation.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   └── Calendar.tsx
│   ├── hooks/          # Custom React hooks
│   │   └── useScrollAnimation.ts
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles and Tailwind
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **React Helmet Async** - SEO management
- **Iconify** - Icon library

## Development

The site is fully responsive and optimized for all screen sizes. All animations are handled through CSS and Intersection Observer for performance.

## License

© 2026 Brian Marshall. All Systems Go.
