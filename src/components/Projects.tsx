"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiGo, SiJavascript, SiSocketdotio, SiExpress, SiVercel, SiRender } from "react-icons/si";
import Image from "next/image";
import React from 'react';

const techIcons: { [key: string]: React.ReactNode } = {
  React: <FaReact color="#61DAFB" size={22} title="React" />,
  "React 18+": <FaReact color="#61DAFB" size={22} title="React 18+" />,
  Node: <FaNodeJs color="#339933" size={22} title="Node.js" />,
  "Node.js": <FaNodeJs color="#339933" size={22} title="Node.js" />,
  Go: <SiGo color="#00ADD8" size={22} title="Go" />,
  Python: <FaPython color="#3776AB" size={22} title="Python" />,
  MongoDB: <SiMongodb color="#47A248" size={22} title="MongoDB" />,
  "MongoDB Atlas": <SiMongodb color="#47A248" size={22} title="MongoDB Atlas" />,
  TypeScript: <SiTypescript color="#3178C6" size={22} title="TypeScript" />,
  JavaScript: <SiJavascript color="#F7DF1E" size={22} title="JavaScript" />,
  SocketIO: <SiSocketdotio color="#010101" size={22} title="Socket.io" />,
  "Socket.io": <SiSocketdotio color="#010101" size={22} title="Socket.io" />,
  "Socket.io Client": <SiSocketdotio color="#010101" size={22} title="Socket.io Client" />,
  Express: <SiExpress color="#000" size={22} title="Express" />,
  "Express.js": <SiExpress color="#000" size={22} title="Express.js" />,
  Cpp: <span title="C++" className="text-lg">C++</span>,
  JWT: <span title="JWT" className="text-lg">JWT</span>,
  Vercel: <SiVercel color="#000" size={22} title="Vercel" />,
  Render: <SiRender color="#46E3B7" size={22} title="Render" />,
  "Material-UI": <span title="Material-UI" className="text-lg text-blue-500 font-bold">MUI</span>,
  "Monaco Editor": <span title="Monaco Editor" className="text-lg text-blue-400 font-bold">Monaco</span>,
  CodeMirror: <span title="CodeMirror" className="text-lg text-gray-400 font-bold">CM</span>,
  CORS: <span title="CORS" className="text-lg text-orange-400 font-bold">CORS</span>,
  TailwindCSS: <span title="TailwindCSS" className="text-lg text-sky-400 font-bold">Tw</span>,
  "React DnD": <span title="React DnD" className="text-lg text-purple-400 font-bold">DnD</span>,
  "React Router": <span title="React Router" className="text-lg text-red-400 font-bold">RR</span>,
};

const projects = [
  {
    title: "Snippedia",
    tagline: "Discover, bookmark, and react to code snippets with secure GitHub OAuth.",
    description:
      "Full-stack Go + React app for sharing, discovering, and bookmarking code snippets. Features GitHub OAuth authentication, a social feed, and a mobile-friendly responsive UI.",
    tech: [
      "React",
      "TailwindCSS",
      "Go",
      "MongoDB Atlas",
      "GitHub OAuth",
      "JWT",
      "Vercel",
      "Render"
    ],
    features: [
      "GitHub OAuth authentication and JWT-secured sessions",
      "Bookmark and react to code snippets",
      "Mobile-first, responsive UI",
      "Deployed on MongoDB Atlas, Render, and Vercel",
      "Personalized dashboard and search"
    ],
    role: "Solo Dev",
    timeline: "2024 – Present",
    github: "https://github.com/ggogitidze/snippedia",
    demo: "https://snippedia.vercel.app/",
    image: "/snippedia-screenshot.png",
    demoVideo: null,
  },
  {
    title: "CodeBoard",
    tagline: "Live code editing and collaboration for instructors and students.",
    description:
      "Multi-language live code editing with instructor-led sessions and dynamic syntax highlighting. WebSocket-based collaboration with React + Node.js stack. Monaco/CodeMirror for interactive editing.",
    tech: [
      "React",
      "Material-UI",
      "Monaco Editor",
      "CodeMirror",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "WebSocket",
      "CORS"
    ],
    features: [
      "Real-time collaborative code editing",
      "Instructor-led sessions and role-based access",
      "Syntax highlighting for 10+ languages",
      "WebSocket backend for <110ms latency",
      "Monaco/CodeMirror integration"
    ],
    role: "Team Lead",
    timeline: "2025 – Present",
    github: "https://github.com/ggogitidze/codeboard",
    demo: "https://codeboard-demo.vercel.app/",
    image: "/codeboard-screenshot.png",
    demoVideo: null,
  },
  {
    title: "TaskFlow",
    tagline: "Real-time task management with drag-and-drop boards.",
    description:
      "Drag-and-drop task boards with real-time sync using Socket.io. Built with React, Express, and MongoDB. Fully responsive design. Secure authentication with JWT.",
    tech: [
      "React 18+",
      "TailwindCSS",
      "React DnD",
      "Socket.io Client",
      "React Router",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT"
    ],
    features: [
      "Drag-and-drop task boards",
      "Real-time sync with Socket.io",
      "Secure JWT authentication",
      "Responsive design for all devices",
      "Modular Express backend"
    ],
    role: "Full Stack Dev",
    timeline: "2025 – Present",
    github: "https://github.com/ggogitidze/taskflow",
    demo: "https://taskflow-demo.vercel.app/",
    image: "/taskflow-screenshot.png",
    demoVideo: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      type: "spring",
      stiffness: 80,
      damping: 18,
      mass: 0.7,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.8,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.8,
      ease: "easeInOut",
    },
  },
};

export default function Projects() {
  const projectEls = useRef<(HTMLDivElement | null)[]>([]);

  // Create scroll and transform hooks for each project
  const scrolls = projects.map((_, idx) => useScroll({ target: projectEls.current[idx] }));
  const yTransforms = scrolls.map(({ scrollYProgress }) => useTransform(scrollYProgress, [0, 1], [0, 60]));
  const scaleTransforms = scrolls.map(({ scrollYProgress }) => useTransform(scrollYProgress, [0, 1], [1, 1.08]));

  const [lightbox, setLightbox] = useState<{ open: boolean; img: string | null }>({ open: false, img: null });

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-16 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-12 text-accent tracking-tight sticky top-4 z-30 bg-background/80 px-6 py-2 rounded-2xl shadow-soft border border-accent/10"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
      >
        Projects
      </motion.h2>
      <div className="w-full max-w-7xl px-4 flex flex-col gap-32">
        {projects.map((project, idx) => {
          return (
            <motion.div
              key={project.title}
              ref={el => { projectEls.current[idx] = el; }}
              className={`project-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Image/Video with parallax and lightbox */}
              <motion.div
                variants={imageVariants}
                style={{ y: yTransforms[idx], scale: scaleTransforms[idx] }}
                className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-soft bg-white/10 border border-accent/10 cursor-pointer group"
                transition={{ type: 'spring', stiffness: 100, damping: 20, mass: 0.8, ease: 'easeInOut' }}
                onClick={() => setLightbox({ open: true, img: project.image })}
                tabIndex={0}
                aria-label={`Expand screenshot for ${project.title}`}
                onKeyDown={e => { if (e.key === 'Enter') setLightbox({ open: true, img: project.image }); }}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-4 right-4 bg-accent text-white text-xs px-3 py-1 rounded-full shadow-lg opacity-80 group-hover:opacity-100 transition-opacity">Click to expand</span>
              </motion.div>

              {/* Project Info */}
              <motion.div variants={projectVariants} className="flex flex-col gap-6 bg-white/5 rounded-2xl shadow-soft border border-accent/10 p-8" style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)' }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-3xl font-extrabold mb-1 text-foreground">{project.title}</h3>
                  <div className="flex gap-2 items-center">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">{project.role}</span>
                    <span className="text-xs opacity-70">{project.timeline}</span>
                  </div>
                </div>
                <div className="text-lg font-medium text-accent mb-2">{project.tagline}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="flex items-center gap-1 px-3 py-1 bg-accent/10 rounded-xl text-sm font-medium"
                      whileHover={{ scale: 1.08, backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {techIcons[tech] || <span className="text-lg font-bold" title={tech}>{tech[0]}</span>}
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <ul className="list-disc ml-5 space-y-1 text-base opacity-90">
                  {project.features.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: i * 0.08, type: 'spring', stiffness: 80, damping: 12 }}
                    >
                      {f}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-4">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-accent text-white font-semibold shadow-soft hover:bg-accent/90 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-accent"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full border border-accent/40 text-accent font-semibold shadow-soft hover:bg-accent/10 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-accent"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    GitHub Repo
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      {/* Lightbox Modal */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setLightbox({ open: false, img: null })}>
          <Image
            src={lightbox.img!}
            alt="Project screenshot enlarged"
            width={1000}
            height={1000}
            className="max-w-[95vw] max-h-[90vh] rounded-2xl shadow-2xl border-4 border-accent"
          />
        </div>
      )}
    </section>
  );
}