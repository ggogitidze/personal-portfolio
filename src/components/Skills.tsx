"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGo,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Go", icon: SiGo },
  { name: "Python", icon: SiPython },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
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
                className="flex flex-col items-center gap-3 p-6 bg-[#f6f6f6] rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <skill.icon className="text-3xl text-black/70" />
                <span className="text-xl font-bold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
