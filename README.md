<div align="center">

# 🚀 Lokesh Sequeira | Developer Portfolio

**A modern, animated, fully responsive personal portfolio built with Next.js, TypeScript and Tailwind CSS.**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-lokesh--portfolio--wheat.vercel.app-4F8CFF?style=for-the-badge)](https://lokesh-portfolio-wheat.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## 📖 About

This is my personal portfolio, built to showcase my projects, skills, work experience and resume in one place. It tells the story of how I moved from NOC and network operations into full-stack software development, and it doubles as a working example of how I build: clean components, thoughtful animation, accessibility, and production details like validation and rate limiting.

🔗 **Live:** [lokesh-portfolio-wheat.vercel.app](https://lokesh-portfolio-wheat.vercel.app)

---

## ✨ Features

| | Feature | Details |
|---|---|---|
| 🌗 | **Dark / light theme** | Black, blue and white palette driven by CSS variables, with a persisted toggle |
| 🕸️ | **Animated hero** | Canvas network-node background that reacts to the cursor and follows the active theme |
| 🧭 | **Scroll-spy navbar** | Sticky, blurred navbar with an animated active-section pill and a mobile menu |
| 🎞️ | **Scroll animations** | Staggered reveals, a self-drawing experience timeline and a page progress bar |
| 💼 | **Project showcase** | Featured project card with a cursor-following spotlight and honest status badges |
| 📬 | **Working contact form** | Next.js API route that emails me through Resend |
| 🛡️ | **Production details** | Server-side validation, HTML escaping, honeypot spam field and rate limiting |
| ♿ | **Accessibility** | Skip link, visible focus states, ARIA attributes and `prefers-reduced-motion` support |
| 🔎 | **SEO** | Open Graph / Twitter metadata, generated social preview image, sitemap and robots |

---

## 🛠️ Tech Stack

| Area | Technology |
|---|---|
| 🖥️ **Framework** | ![Next.js](https://img.shields.io/badge/Next.js_(App_Router)-000000?style=flat-square&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) |
| 🔷 **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| 🎨 **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| 🎬 **Animation** | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) ![Canvas](https://img.shields.io/badge/HTML5_Canvas-E34F26?style=flat-square&logo=html5&logoColor=white) |
| 🌓 **Theming** | `next-themes` |
| 🧩 **Icons** | `lucide-react` |
| ✉️ **Email** | ![Resend](https://img.shields.io/badge/Resend-000000?style=flat-square&logo=resend&logoColor=white) |
| 🔤 **Fonts** | Space Grotesk, Inter, JetBrains Mono via `next/font` |
| ☁️ **Hosting** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |

---

## 🗂️ Sections

1. 🏠 **Hero**: introduction, rotating roles, links and resume button
2. 👤 **About**: background, photo and key numbers
3. 🧪 **Projects**: NEXUS, Security Guard Reporting App and Customer Portal Redesign
4. 🧰 **Skills**: grouped by languages, frontend, backend, data and tools
5. 🧭 **Experience**: animated timeline plus education
6. 💬 **Contact**: validated form and direct links

---

## 📁 Project Structure

```
lokesh-portfolio/
├── public/
│   ├── images/              # Profile photo and project images
│   └── resume.pdf           # Downloadable resume
├── src/
│   ├── app/
│   │   ├── api/contact/     # Contact form API route (Resend)
│   │   ├── layout.tsx       # Fonts, metadata, theme provider
│   │   ├── page.tsx         # Page composition
│   │   ├── globals.css      # Design tokens (dark / light)
│   │   ├── icon.tsx         # Generated favicon
│   │   ├── opengraph-image.tsx
│   │   ├── not-found.tsx    # Custom 404
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/          # Navbar, Hero, About, Projects, Skills,
│   │                        # Experience, Contact, Footer, etc.
│   └── lib/
│       └── site.ts          # All portfolio content in one place
├── next.config.ts
└── package.json
```

All text content (projects, skills, experience, links) lives in `src/lib/site.ts`, so updating the portfolio doesn't require touching components.

---

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js 20 or newer
- A free [Resend](https://resend.com) account (only needed for the contact form)

### ⚙️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/lokesh-portfolio.git
cd lokesh-portfolio

# 2. Install dependencies
npm install

# 3. Create your environment file (see below)

# 4. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=you@example.com

# Optional: defaults to Vercel's production URL, then localhost
NEXT_PUBLIC_SITE_URL=https://lokesh-portfolio-wheat.vercel.app
```

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | ✅ | Sends contact form emails |
| `CONTACT_TO_EMAIL` | ✅ | Inbox that receives messages |
| `NEXT_PUBLIC_SITE_URL` | ➖ | Base URL for metadata, sitemap and social preview |

### 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm start` | Run the production build locally |
| `npm run lint` | Run ESLint |

---

## ☁️ Deployment

The site is deployed on **Vercel**, and every push to `main` redeploys automatically.

1. Push the repo to GitHub
2. Import it in Vercel
3. Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` under **Environment Variables**
4. Deploy

---

## 🧠 Design Notes

- **Color palette:** near-black `#05070D` and white backgrounds with a blue accent (`#4F8CFF` dark / `#2563EB` light) and a cyan secondary.
- **Typography:** Space Grotesk for headings, Inter for body text, JetBrains Mono for small technical labels.
- **Motion:** animation is used to guide attention, and it is automatically reduced for visitors who prefer reduced motion.

---

## 📬 Contact

- ✉️ **Email:** [lokeshsequeira@gmail.com](mailto:lokeshsequeira@gmail.com)
- 🌐 **Portfolio:** [lokesh-portfolio-wheat.vercel.app](https://lokesh-portfolio-wheat.vercel.app)
- 💼 **LinkedIn:** [linkedin.com/in/YOUR-USERNAME](https://www.linkedin.com/in/YOUR-USERNAME)
- 🐙 **GitHub:** [github.com/YOUR-USERNAME](https://github.com/YOUR-USERNAME)

---

<div align="center">

Built with ❤️ using Next.js, TypeScript, Tailwind CSS and Framer Motion

</div>
