const projects = [
{
  id: 1,
  title: "CurioBlog",
  description: "A fully-featured modern blog platform with Clerk authentication, markdown blog editing, email contact support, and a category-based UI built using shadcn/ui.",
  image: "/assets/curio.png", 
  technologies: ["Next.js", "Clerk", "MongoDB", "Nodemailer", "Axios", "shadcn/ui","Tailwind CSS"],
  type: "Blog Website",
  year: 2024,
  github: "https://github.com/dubeypranaviiit/blog-app",
  demo: "https://curio-blog-pranav.vercel.app/",
},
{
  id: 2,
  title: "Meetono",
  description: "A modern video conferencing and meeting platform with real-time scheduling, personal rooms, recordings, and secure authentication.",
  image: "/assets/meetono.png", 
  technologies: ["Next.js", "Clerk", "Tailwind CSS", "shadcn/ui", "getstream"],
  type: "Video Meeting App",
  year: 2025,
  github: "https://github.com/dubeypranaviiit/Meetono",  
  demo: "https://meetono.vercel.app/",                 
},
{
  id: 3,
  title: "Edutom Admin Panel",
  description: "A modern admin dashboard for managing physical and digital book sales. Built for Edutom, an educational book-selling platform, this panel helps administrators manage inventory, e-books, customer orders, and sales reports efficiently.",
  image: "/assets/edutom.png", 
  technologies: [
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "Clerk (Auth)",
    "Axios",
    "SWR",
    "React Icons",
    "shadcn/ui"
  ],
  type: "Admin Dashboard",
  year: 2025,
  github: "https://github.com/dubeypranaviiit/adutom", 
  demo: ""                
},
{
  id: 4,
  title: "Edutom – Book Selling Website",
  description: "A responsive and user-friendly e-commerce platform for purchasing physical and digital books. Built with seamless Stripe integration for payments and Nodemailer for order confirmation emails. Designed for modern educational content sales.",
  image: "/assets/edutom-user.png", 
  technologies: [
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "Stripe",
    "Nodemailer",
    "React Icons",
    "shadcn/ui"
  ],
  type: "E-commerce Website",
  year: 2025,
  github: "https://github.com/dubeypranaviiit/edutom", 
  demo: "https://edutom.vercel.app/"  
},
  {
  id: 5,
  title: "EcoRevive – AI-Powered Waste Management Platform",
  description: "A full-stack sustainability platform that allows users to report waste, verify it using AI-based image analysis, earn rewards, and contribute to environmental initiatives through secure donations. Built with scalable backend architecture, role-based authentication, and real-time payment tracking.",
  image: "/assets/ecorevive-user.png",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Mongoose",
    "Clerk",
    "Stripe",
    "Razorpay",
    "Google Gemini API",
    "Google Maps API",
    "Zustand"
  ],
  type: "Sustainability Platform",
  year: 2025,
  github: "https://github.com/dubeypranaviiit/eco",
  demo: "https://ecorevive-wm.vercel.app/"
},
  {
  id: 6,
  title: "EduTrack – Full-Stack Learning Management System (LMS)",
  description: "A full-featured learning management system supporting courses, chapters, quizzes, assignments, certifications, and role-based access for students, instructors, and admins. Includes secure Stripe-based enrollments, progress tracking, reviews, and a modern dashboard-driven learning experience.",
  image: "/assets/edutrack-user.png",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Mongoose",
    "Clerk",
    "Stripe",
    "Cloudinary",
    "Zustand",
    "Zod",
    "Radix UI",
    "Framer Motion"
  ],
  type: "Learning Management System",
  year: 2025,
  github: "https://github.com/dubeypranaviiit/edu-track", 
  demo: ""
}



];

export default projects;