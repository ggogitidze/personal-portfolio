"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

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

const containerVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      type: "spring",
      stiffness: 80,
      damping: 16,
    },
  },
};

const inputVariants = {
  focus: {
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-16 flex flex-col items-center relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-8 text-accent tracking-tight sticky top-4 z-30 bg-background/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-2 rounded-2xl shadow-soft border border-accent/10"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
      >
        Contact
      </motion.h2>

      {/* Quick Contact CTA removed */}

      <motion.form
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="w-full max-w-lg bg-white/60 dark:bg-black/40 rounded-2xl shadow-soft p-8 border border-accent/10 flex flex-col gap-4 mb-8 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-accent"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); alert('Thank you for reaching out!'); }}
        tabIndex={0}
      >
        <motion.div variants={itemVariants}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-xl border px-4 py-2 bg-background dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-accent/50"
            whileFocus="focus"
            variants={inputVariants}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded-xl border px-4 py-2 bg-background dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-accent/50"
            whileFocus="focus"
            variants={inputVariants}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full rounded-xl border px-4 py-2 bg-background dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-accent/50"
            whileFocus="focus"
            variants={inputVariants}
          />
        </motion.div>

        <motion.button
          type="submit"
          variants={itemVariants}
          className="bg-accent text-white font-semibold rounded-xl py-3 mt-2 hover:bg-accent/90 transition-colors border-2 border-accent"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex gap-6 bg-white/60 dark:bg-black/40 rounded-2xl shadow-soft p-6 border border-accent/10 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-accent"
        tabIndex={0}
      >
        {socials.map((s) => (
          <motion.a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent text-lg font-medium"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {s.icon}
            {s.name}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
} 