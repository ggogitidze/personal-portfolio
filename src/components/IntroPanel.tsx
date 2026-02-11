"use client";
import { motion } from "framer-motion";


export default function IntroPanel() {
  return (
    <section id="about" className="section-spacing px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">

          {/* Left Column: Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 flex flex-col justify-between"
          >
            <div className="mb-12 md:mb-0">
              <h2 className="text-xl font-bold tracking-tight mb-8">WHO / WHAT</h2>
              <p className="body-text max-w-xl">
                Passionate about building scalable, beautiful web experiences and researching NLP & reinforcement learning.
                Full-stack with React, Go, Node.js, Python.
                Always open to new opportunities and collaborations!
              </p>
            </div>
          </motion.div>

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-black" />

          {/* Right Column: Capabilities & Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-6 md:pl-12 flex flex-col gap-12"
          >


            <div className="flex flex-col gap-4 items-start">
              <span className="text-lg font-bold uppercase tracking-tight">Capabilities</span>
              <ul className="flex flex-col gap-2 text-lg text-black/70">
                <li>Product Design</li>
                <li>Full-Stack Development</li>
                <li>Systems Thinking</li>
                <li>User Research</li>
                <li>AI / ML Integration</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
