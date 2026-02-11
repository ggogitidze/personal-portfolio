"use client";
import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const iconVariants = {
  initial: { y: 0 },
  hover: {
    y: [0, -4, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default function Resume() {
  return (
    <section id="resume" className="py-16 flex flex-col items-center relative border-4 border-accent outline outline-2 outline-accent rounded-2xl shadow-lg bg-background/80">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-8 text-accent tracking-tight sticky top-4 z-30 bg-background/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-2 rounded-2xl shadow-soft border border-accent/10"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
      >
        Resume
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-6 bg-white/60 dark:bg-black/40 rounded-2xl shadow-soft p-8 border border-accent/10 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-accent"
        tabIndex={0}
      >
        <div className="flex gap-4">
          <motion.a
            href="/Giorgi_Gogitidze_Resume.pdf"
            download
            className="flex items-center gap-2 bg-accent text-white font-semibold rounded-xl px-6 py-3 shadow-soft hover:bg-accent/90 transition-colors"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span variants={iconVariants}>
              <FaDownload />
            </motion.span>
            Download PDF
          </motion.a>

          <motion.a
            href="/Giorgi_Gogitidze_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white dark:bg-black text-accent font-semibold rounded-xl px-6 py-3 shadow-soft border border-accent/20 hover:bg-accent/5 transition-colors"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span variants={iconVariants}>
              <FaEye />
            </motion.span>
            Preview
          </motion.a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-base opacity-70 mt-2 text-center"
        >
          For the latest experience and updates, see my{" "}
          <motion.a
            href="https://www.linkedin.com/in/giorgigogitidze/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn profile
          </motion.a>
          .
        </motion.p>
      </motion.div>
    </section>
  );
} 