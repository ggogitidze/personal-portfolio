"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "#resume" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Floating menu button */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-8 z-[100] bg-accent text-white rounded-full p-4 shadow-xl focus:outline-none focus:ring-2 focus:ring-accent"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        aria-label="Open menu"
      >
        <FaBars size={28} />
      </motion.button>
      {/* Overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-accent/10 backdrop-blur-2xl flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-full max-w-xs bg-white dark:bg-black h-full shadow-2xl p-8 flex flex-col gap-8 relative"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-accent bg-accent/10 rounded-full p-2 focus:outline-none"
                aria-label="Close menu"
              >
                <FaTimes size={28} />
              </button>
              <div className="flex flex-col items-center mt-4">
                <Image src="/next.svg" alt="Giorgi Gogitidze Logo" width={64} height={64} className="mb-6 rounded-full" />
              </div>
              <nav className="flex flex-col gap-6 mt-16">
                {navLinks.filter(l => l.name !== "About").map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-bold text-accent hover:underline focus:outline-none"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, type: "spring" }}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto pt-8 border-t border-accent/20">
                <div className="text-xs text-accent/70 mb-2">SAY HELLO</div>
                <a href="mailto:gogitidzegiorgi1@outlook.com" className="block text-lg text-accent font-semibold hover:underline mb-1">gogitidzegiorgi1@outlook.com</a>
                <div className="flex gap-4 mt-4">
                  <a href="https://www.linkedin.com/in/giorgigogitidze/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LN</a>
                  <a href="https://github.com/ggogitidze" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GH</a>
                  <a href="mailto:gogitidzegiorgi1@outlook.com" className="text-accent hover:underline">EM</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 