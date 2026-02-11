"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="w-full py-32 px-6 md:px-12 flex flex-col justify-between min-h-[80vh]" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>
      <div className="max-w-[1600px] w-full mx-auto flex flex-col h-full justify-between gap-24">

        {/* Main CTA */}
        <div className="flex flex-col gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-none font-bold tracking-tighter uppercase"
          >
            Let&rsquo;s<br />Talk.
          </motion.h2>
        </div>

        {/* Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div className="flex flex-col gap-4 text-2xl font-bold">
            <a href="mailto:gogitidzegiorgi1@outlook.com" className="hover:opacity-70 transition-opacity">gogitidzegiorgi1@outlook.com</a>
            <div className="flex gap-6 mt-4">
              <a href="https://www.linkedin.com/in/giorgigogitidze/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">LinkedIn</a>
              <a href="https://github.com/ggogitidze" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">GitHub</a>
              <a href="/Giorgi_Gogitidze_Resume.pdf" download className="hover:opacity-70 transition-opacity">Resume</a>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-end text-white/60 text-sm">
            <span>&copy; {new Date().getFullYear()} Giorgi Gogitidze</span>
            <span>Designed &amp; Built by Giorgi Gogitidze</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
