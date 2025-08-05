# 👨‍💻 Personal Portfolio (React + Vite + Tailwind)

## ✍️ Overview
A static personal portfolio web app built using:

- **React** (frontend framework)
- **Vite** (fast build tool)
- **TypeScript/JavaScript**
- **Tailwind CSS** for styling
- **Deployed to AWS S3** (+ CloudFront + Route 53)

Includes:
- Personal info
- Projects
- Career/experience
- Education
- Skills / Tech Stack


## 📆 Project Initialization (Vite)

### Why Vite over Create-React-App?
- ⚡ Faster dev server
- 🏦 Smaller production builds (via Rollup)
- ✨ Simpler configuration

## 🚀 Getting Started

Follow the steps below to build and run this portfolio locally.

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```

### 2. **Install Dependencies**

Make sure you have **Node.js v18+** (preferably v22+).

```bash
npm install
```

### 3. **Run in Development Mode**

Launch the Vite dev server with hot reload:

```bash
npm run dev
```

Open your browser and go to [http://localhost:5173](http://localhost:5173)

### 4. **Build for Production**

Create an optimized production build:

```bash
npm run build
```

### 5. **Preview Production Build Locally**

Run a local server to test the build:

```bash
npm run preview
```

This will serve the site at [http://localhost:4173](http://localhost:4173)

---

### ✅ Optional: Analyze Bundle Size

If `rollup-plugin-visualizer` is installed:

```bash
npm run build && open dist/stats.html
```

---

## 🌐 Production Build Optimizations

### 1. Manual Chunking (vite.config.ts)
**Purpose:** Split large libraries (React, Router, GSAP, Framer Motion) for smaller main bundle and better caching.
```ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        react: ['react', 'react-dom'],
        router: ['react-router-dom'],
        framer: ['framer-motion'],
        gsap: ['gsap']
      }
    }
  }
}
```

### 2. Lazy Loading Page Sections
**Purpose:** Defer rendering of below-the-fold sections to reduce initial bundle.
```ts
const CareerSection = lazy(() => import("../components/CareerSection"));
<Suspense fallback={<div>Loading...</div>}>
  <CareerSection />
</Suspense>
```

### 3. Bundle Visualization
**Tool:** `rollup-plugin-visualizer`
```bash
npm install --save-dev rollup-plugin-visualizer
```
In `vite.config.ts`:
```ts
import { visualizer } from 'rollup-plugin-visualizer';
plugins: [react(), visualizer({ filename: 'stats.html' })]
```
Then:
```bash
npm run build && open dist/stats.html
```

### 4. Result:
- Main bundle reduced from **514 kB** → **264 kB**
- Page sections lazy-loaded
- Libraries split into chunks (cached separately)

---

## ⁉️ Deployment Decision

### Preferred:
**AWS S3 + CloudFront + Route53**
- ✨ Static site hosting (perfect for React builds)
- 💸 Very low cost
- ⏩ Fast global delivery via CDN
- 🌐 Easy custom domain + HTTPS (ACM)
- 🧰 Minimal maintenance

### Alternative:
**AWS Amplify**
- Git-based CI/CD deploys
- Branch previews
- Built-in domain + HTTPS

### Not Recommended:
- **EC2 / Lightsail / Elastic Beanstalk / Lambda** — overkill for a static React app

---

## ☁️ AWS S3 Deployment Steps
1. Create S3 bucket
2. Upload `dist/` build output
3. Enable public read access via Bucket Policy
4. Enable static site hosting
5. Set both **Index** and **Error** document to `index.html`
6. Use **CloudFront** + **ACM** for HTTPS
7. Use **Route53** for custom domain

---

---

## 📄 Libraries & Tools Used
- **React** + **Vite** + **TypeScript**
- **Tailwind CSS** + **tailwind-merge**
- **Framer Motion** (animations)
- **React Router**
- **Lucide Icons**
- **Radix UI** + `clsx` + `cva`
- **react-hot-toast**
- **SVGR Plugin** for SVGs
- **rollup-plugin-visualizer**

---

## 📅 References
- [Kirokaze GIFs](https://www.deviantart.com/kirokaze/gallery?page=5)
- [Lucide Icons](https://lucide.dev/icons/)
- [React Portfolio Reddit Thread](https://www.reddit.com/r/webdev/comments/112r7m5/whats_the_best_portfolio_website_youve_ever_seen/)
