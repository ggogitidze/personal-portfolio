"use client";
import { motion } from "framer-motion";
import { FaPython, FaBrain } from "react-icons/fa";
import { SiTensorflow, SiKeras } from "react-icons/si";

const researchExperience = [
  {
    title: "Machine Learning Research Assistant",
    org: "The Cog AI Lab, Caldwell University",
    date: "03/23 – 05/25",
    description:
      "Developed and visualized model performance, improved GPT-2 training speed by 20%, reduced response time by 23%, and increased lexical diversity through reinforcement learning integration.",
    achievements: [
      "Leveraged Python, TensorFlow, Keras, and Matplotlib for model transparency and interpretability.",
      "Published research: Using a GPT with Reinforcement Learning for More Personalized or Targeted Text Generation.",
    ],
    tech: ["Python", "TensorFlow", "Keras", "Reinforcement Learning"],
  },
];

const personalProjects = [
  {
    title: "Snippedia",
    org: "Personal Project",
    date: "10/24 – present",
    description:
      "Developed a secure, full-stack web app for sharing, searching, and bookmarking code snippets with GitHub OAuth and mobile responsiveness.",
    achievements: [
      "Designed backend with Go (Fiber), MongoDB Atlas, JWT-secured REST APIs.",
      "Built a responsive React interface with TailwindCSS, real-time filtering, and search.",
      "Automated deployments with GitHub Actions, Vercel, and Render.",
    ],
  },
  {
    title: "CodeBoard",
    org: "Personal Project",
    date: "03/25 – present",
    description:
      "Engineered a live multi-user code editor supporting 10+ languages with WebSocket-based real-time collaboration and session management.",
    achievements: [
      "Built WebSocket backend (Node.js + Express) for <110ms latency.",
      "React + Monaco Editor for syntax highlighting and collaborative editing.",
      "Role-based access control for instructors and viewers.",
    ],
  },
  {
    title: "TaskFlow",
    org: "Personal Project",
    date: "02/25 – present",
    description:
      "Developed a real-time task management system with drag-and-drop boards, real-time sync, and secure multi-user authentication.",
    achievements: [
      "Socket.io-based real-time sync backend (Node.js + MongoDB).",
      "JWT authentication and modular Express backend.",
      "Seamless React frontend with board state accuracy.",
    ],
  },
];

const techIcons = {
  Python: <FaPython color="#3776AB" size={22} title="Python" />,
  TensorFlow: <SiTensorflow color="#FF6F00" size={22} title="TensorFlow" />,
  Keras: <SiKeras color="#D00000" size={22} title="Keras" />,
  "Reinforcement Learning": <FaBrain color="#4A90E2" size={22} title="Reinforcement Learning" />,
};

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

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.8,
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-16 flex flex-col items-center relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-12 text-accent tracking-tight sticky top-4 z-30 bg-background/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-2 rounded-2xl shadow-soft border border-accent/10"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
      >
        Research Experience
      </motion.h2>

      <div className="w-full max-w-4xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {researchExperience.map((exp) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className="group relative bg-white/60 dark:bg-black/40 rounded-2xl shadow-soft p-8 border border-accent/10 overflow-hidden backdrop-blur-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Content */}
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <div className="flex gap-2 items-center">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">{exp.org}</span>
                    <span className="text-xs opacity-70">{exp.date}</span>
                  </div>
                </div>

                <p className="text-foreground/80">{exp.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="flex items-center gap-1 px-3 py-1 bg-accent/10 rounded-xl text-sm font-medium"
                      whileHover={{ scale: 1.08, backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {techIcons[tech as keyof typeof techIcons]}
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Achievements */}
                <ul className="list-disc ml-5 space-y-2 text-foreground/80">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 80, damping: 12 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 