"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/giorgigogitidze/",
    icon: <FaLinkedin color="#0A66C2" size={24} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/ggogitidze",
    icon: <FaGithub color="#171515" size={24} />,
  },
  {
    name: "Email",
    href: "mailto:gogitidzegiorgi1@outlook.com",
    icon: <FaEnvelope color="#EA4335" size={24} />,
  },
];

const jobTitles = [
  "Full-Stack Developer",
  "Software Engineer",
  "Software Developer",
  "AI Researcher"
];

function useTypewriter(words: string[], delay = 120, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? delay / 2 : delay);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, delay, pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
}

export default function IntroPanel() {
  const faceRef = useRef<HTMLDivElement>(null);

  const typewriter = useTypewriter(jobTitles);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!faceRef.current) return;
      const rect = faceRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const maxDist = 18;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4 font-[Rubik]"
          >
            Hi, I&apos;m Giorgi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 80, damping: 16 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-accent mb-6 h-12"
            style={{ minHeight: 48 }}
          >
            {typewriter}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 80, damping: 16 }}
            className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto"
          >
            Passionate about building scalable, beautiful web experiences and researching NLP & reinforcement learning. Full-stack with React, Go, Node.js, Python. Always open to new opportunities and collaborations!
          </motion.p>
        </motion.div>

        {/* Socials and Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 80, damping: 16 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          {socials.map((s) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 hover:bg-accent/20 p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={s.name}
              whileHover={{ scale: 1.15, rotate: 8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 80, damping: 16 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="/Giorgi_Gogitidze_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white text-lg font-bold rounded-xl shadow-lg hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px 4px #7963E6' }}
            whileTap={{ scale: 0.97 }}
          >
            <FaDownload className="text-2xl" />
            Download Resume
          </motion.a>
          <motion.a
            href="mailto:gogitidzegiorgi1@outlook.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-accent text-lg font-bold rounded-xl shadow-lg hover:bg-accent/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-colors border border-accent"
            style={{ color: '#171717' }}
            whileHover={{ scale: 1.08, backgroundColor: '#222', color: '#fff', boxShadow: '0 0 32px 8px #222' }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
} 