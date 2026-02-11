"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Keep existing data
const projects = [
  {
    title: "Snippedia",
    client: "Personal Project",
    tagline: "Discover, bookmark, and react to code snippets with secure GitHub OAuth.",
    description: "Full-stack Go + React app for sharing, discovering, and bookmarking code snippets. Features GitHub OAuth authentication, a social feed, and a mobile-friendly responsive UI.",
    tech: ["React", "Go", "MongoDB", "GitHub OAuth"],
    features: ["GitHub OAuth authentication", "Social feed", "Responsive UI"],
    role: "Solo Dev",
    year: "2024",
    github: "https://github.com/ggogitidze/snippedia",
    demo: "https://snippedia.vercel.app/",
    image: "/snippedia-screenshot.png",
  },
  {
    title: "CodeBoard",
    client: "Team Project",
    tagline: "Live code editing and collaboration for instructors and students.",
    description: "Multi-language live code editing with instructor-led sessions and dynamic syntax highlighting. WebSocket-based collaboration with React + Node.js stack.",
    tech: ["React", "Node.js", "WebSocket", "Monaco Editor"],
    features: ["Real-time collaboration", "Role-based access", "Syntax highlighting"],
    role: "Team Lead",
    year: "2025",
    github: "https://github.com/ggogitidze/codeboard",
    demo: "https://code-board-three.vercel.app",
    image: "/codeboard-screenshot.png",
  },
  {
    title: "TaskFlow",
    client: "Personal Project",
    tagline: "Real-time task management with drag-and-drop boards.",
    description: "Drag-and-drop task boards with real-time sync using Socket.io. Built with React, Express, and MongoDB. Fully responsive design. Secure authentication with JWT.",
    tech: ["React 18+", "Socket.io", "Express", "JWT"],
    features: ["Drag-and-drop", "Real-time sync", "JWT auth"],
    role: "Full Stack Dev",
    year: "2025",
    github: "https://github.com/ggogitidze/taskflow",
    demo: "https://task-flow-seven-theta.vercel.app",
    image: "/taskflow-screenshot.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 w-full">
      {projects.map((project, idx) => (
        <div key={project.title} className="w-full relative">
          {/* Horizontal Divider */}
          <div className="w-full h-[1px] bg-black mb-16 md:mb-24" />

          <div className={`max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 md:mb-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

            {/* Content Column */}
            <div className={`lg:col-span-5 flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="flex flex-col gap-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="heading-large uppercase"
                >
                  {project.title}
                </motion.h3>

                <p className="body-text text-black/70 max-w-md">
                  {project.description}
                </p>

                <div className="flex flex-col gap-2 mt-8 py-8 md:border-t md:border-black/10">
                  <div className="grid grid-cols-2 gap-y-4 text-sm font-mono uppercase tracking-wider">
                    <div className="text-black/50">Tech Stack</div>
                    <div className="text-black">{project.tech.join(", ")}</div>

                    <div className="text-black/50">Role</div>
                    <div className="text-black">{project.role}</div>

                    <div className="text-black/50">Year</div>
                    <div className="text-black">{project.year}</div>
                  </div>
                </div>

                <div className="flex gap-6 mt-4">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-lg font-bold border-b border-black hover:text-accent hover:border-accent transition-colors pb-1">
                    Live Demo &nearr;
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-lg font-bold border-b border-black hover:text-accent hover:border-accent transition-colors pb-1">
                    GitHub &nearr;
                  </a>
                </div>
              </div>
            </div>

            {/* Image Column (Mockup) */}
            <div className={`lg:col-span-7 relative ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full aspect-[16/10] bg-subtle rounded-lg overflow-hidden border border-black/5 shadow-2xl group"
              >
                {/* Mockup Frame (Browser Header) */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-white border-b border-black/5 flex items-center px-4 gap-2 z-10">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>

                {/* Project Image */}
                <div className="absolute top-6 inset-x-0 bottom-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Decorative Shadow/Depth Element */}
              <div className="absolute -inset-4 bg-black/5 -z-10 rounded-xl transform translate-x-4 translate-y-4" />
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}
