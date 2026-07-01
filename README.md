# Andymore Business Concept

A modern, highly responsive, and premium web application built for **Andymore Business Concept**, a leading supplier of quality building materials and kitchen appliances based in Ojodu Berger, Lagos.

The platform showcases a premium catalog of tiles, sanitary ware, mirrors, range hoods, gas hobs, bathtubs, and more, complete with direct WhatsApp integration for customer inquiries.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Logic & UI**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Google Fonts ([Inter](https://fonts.google.com/specimen/Inter) and [Playfair Display](https://fonts.google.com/specimen/Playfair+Display))

---

## ✨ Features & Upgrades

### 📱 Responsive Contact Page
- Fully redesigned layout supporting mobile, tablet, and desktop viewports.
- Integrated interactive Google Maps location view, opening hours, directions, and direct contact methods.
- Social media profiles (Instagram, Facebook, TikTok) refactored with wrap-safe containers to prevent viewport overflow.

### 🎭 Hardware-Accelerated Animations
- Powered by `framer-motion` with buttery-smooth `y: 15` to `y: 0` fade-up transitions.
- Removed heavy x-axis translations and custom bezier timings to completely eliminate rendering lag and scroll stuttering.
- Staggered animations across all product, service, testimonial, and info grids.

### ⌨️ Hero Typewriter Effect
- Built an elegant `<HeroTypewriter />` component on the home page hero section.
- Animates text character-by-character with a gold pulsing cursor.

### 🍽️ balanced Kitchen Catalog Grid
- Designed a custom catalog grid structure for kitchen appliances.
- Displays the first three appliances on the main row, and wraps the remaining two appliances centered underneath for a premium visual layout.

### 🎥 Fixed Showroom Gallery Videos
- Fixed the video gallery to load showroom walk-throughs and appliance showcases directly from local `public/videos/` files.
- Optimized performance using `preload="metadata"`.

### 🧭 Active State Navigation Bar
- Modernised the navigation bar to track routing using Next.js `usePathname`.
- Highlights the current route with clear visual markers on both desktop and mobile drawer views.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18.x or later recommended)
- npm or yarn

### Installation

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Run the local development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

To compile a production-ready optimized build:
```bash
npm run build
```
```bash
npm run start
```
