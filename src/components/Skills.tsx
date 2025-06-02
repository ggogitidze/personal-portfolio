"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiGo, SiJavascript, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={36} />, level: "Expert" },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={36} />, level: "Advanced" },
  { name: "React", icon: <FaReact color="#61DAFB" size={36} />, level: "Expert" },
  { name: "Node.js", icon: <FaNodeJs color="#339933" size={36} />, level: "Advanced" },
  { name: "Go", icon: <SiGo color="#00ADD8" size={36} />, level: "Intermediate" },
  { name: "Python", icon: <FaPython color="#3776AB" size={36} />, level: "Advanced" },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" size={36} />, level: "Advanced" },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={36} />, level: "Intermediate" },
  { name: "Docker", icon: <FaDocker color="#2496ED" size={36} />, level: "Intermediate" },
  { name: "Git", icon: <FaGitAlt color="#F05032" size={36} />, level: "Advanced" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: i * 0.1,
      ease: "easeInOut",
    },
  }),
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
      ease: "anticipate",
    },
  },
};

const iconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.2, 1],
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 1.2,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 flex flex-col items-center relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-8 text-accent tracking-tight sticky top-4 z-30 bg-background/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-2 rounded-2xl shadow-soft border border-accent/10"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
      >
        Skills & Tools
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-14"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            custom={i}
            variants={skillVariants}
            whileHover="hover"
            className="flex flex-col items-center cursor-pointer group bg-white/60 dark:bg-black/40 rounded-2xl shadow-soft p-6 md:p-8 border border-accent/10 relative backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-accent"
            tabIndex={0}
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="bg-white dark:bg-black rounded-2xl shadow-soft p-4 mb-2 flex items-center justify-center relative"
            >
              {skill.icon}
              <motion.div
                variants={glowVariants}
                className="absolute inset-0 rounded-2xl bg-accent/10"
                style={{ filter: "blur(8px)" }}
              />
            </motion.div>
            <motion.span
              className="text-sm font-medium opacity-80"
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 