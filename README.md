# 🚀 Pranav Abhimanyu — Developer Portfolio

A modern, responsive, and high-performance **developer portfolio website** built using **Next.js 16 (App Router)** and **React 19**.  
This portfolio showcases my **skills, projects, and education** with a clean UI, smooth animations, and an optimized SSR/CSR rendering architecture.

🌐 **Live Website:**  
https://pranav-abhimanyu.vercel.app/

📦 **GitHub Repository:**  
https://github.com/dubeypranaviiit/portfolio

---

## ✨ Features

- ⚡ Built with **Next.js 16 (App Router)** & **React 19**
- 🚀 Optimized **SSR & CSR Mix** to reduce bundle size and prevent hydration mismatch errors
- 🎨 Modern UI using **Tailwind CSS**
- 🎥 Smooth viewport entrance transitions with **Framer Motion**
- 🧭 Native smooth scrolling navigation combined with sticky navbar
- 📩 Fully functional **Contact Form API** using **Resend Email Service**
- 📱 Fully responsive (Mobile → Desktop)
- 🚀 Deployed on **Vercel**
- 🛠️ Clean and scalable modular architecture

---

## 🧑‍💻 Tech Stack

### Frontend
- Next.js 16
- React 19
- JavaScript
- Tailwind CSS
- Framer Motion
- React Icons
- Typewriter Effect

### Backend
- Next.js Route Handlers
- Resend SDK
- Axios

### DevOps & Tools
- Vercel
- Docker
- Git & GitHub
- ESLint

---

## 📂 Folder Structure

```txt
app/
├── api/
│   └── contact/
│       └── route.js
├── globals.css
├── layout.js
└── page.js

components/
├── project/
│   ├── ProjectCard.jsx
│   ├── ProjectGrid.jsx (Client state)
│   ├── ProjectModal.jsx (Client interaction)
│   ├── ProjectSection.jsx (Server container)
│   └── Tech.jsx
├── BackgroundParticles.jsx (Client particles)
├── Contact.jsx (Server container)
├── ContactForm.jsx (Client form)
├── Education.jsx (Server container)
├── FadeIn.jsx (Client animator)
├── Footer.jsx (Server container)
├── Hero.jsx (Server container)
├── HeroTypewriter.jsx (Client typewriter)
├── HeroVisual.jsx (Client visuals)
├── Nav.jsx (Client navigation)
├── Skills.jsx (Server container)
└── SocialSidebar.jsx

public/
├── assets/
├── resume.pdf
├── file.svg
├── globe.svg
├── next.svg
└── window.svg

.env.local
Dockerfile
next.config.mjs
package.json
README.md
```
