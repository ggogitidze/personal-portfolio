"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Expert" },
  { name: "Node.js", level: "Advanced" },
  { name: "Go", level: "Intermediate" },
  { name: "Python", level: "Advanced" },
  { name: "MongoDB", level: "Advanced" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-spacing px-6 md:px-12 w-full">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="w-full h-[1px] bg-black mb-8" />
          <h2 className="heading-medium uppercase mb-8">Technical Arsenal</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2 p-6 border border-black/5 hover:border-black/100 transition-colors duration-300"
              >
                <span className="text-xl font-bold">{skill.name}</span>
                <span className="text-xs font-mono uppercase text-black/40">{skill.level}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
