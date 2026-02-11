"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaPython, FaBrain } from "react-icons/fa";
import { SiTensorflow, SiKeras } from "react-icons/si";

type ResearchExperience = {
  title: string;
  org: string;
  date: string;
  description: string;
  achievements: string[];
  tech: { label: string; icon?: IconType }[];
};

const researchExperience: ResearchExperience[] = [
  {
    title: "Machine Learning Research Assistant",
    org: "The Cog AI Lab, Caldwell University",
    date: "03/23 - 05/25",
    description:
      "Developed and visualized model performance, improved GPT-2 training speed by 20%, reduced response time by 23%, and increased lexical diversity through reinforcement learning integration.",
    achievements: [
      "Leveraged Python, TensorFlow, Keras, and Matplotlib for model transparency and interpretability.",
      "Published research: Using a GPT with Reinforcement Learning for More Personalized or Targeted Text Generation.",
    ],
    tech: [
      { label: "Python", icon: FaPython },
      { label: "TensorFlow", icon: SiTensorflow },
      { label: "Keras", icon: SiKeras },
      { label: "Reinforcement Learning", icon: FaBrain },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-spacing px-6 md:px-12 w-full">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="w-full h-[1px] bg-black mb-8" />
          <h2 className="heading-medium uppercase mb-8">Experience</h2>

          {/* Experience Grid */}
          <div className="w-full">
            {researchExperience.map((exp) => (
              <motion.article
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-8 border-t border-black/10"
              >
                {/* Left: Date & Org */}
                <div className="md:col-span-4 flex flex-col justify-between">
                  <div className="text-xl font-bold">{exp.org}</div>
                  <div className="text-lg text-black/60 font-mono mt-2">{exp.date}</div>
                </div>

                {/* Right: Details */}
                <div className="md:col-span-8 flex flex-col gap-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold"
                  >
                    {exp.title}
                  </motion.h3>
                  <p className="body-text text-black/80 max-w-2xl">{exp.description}</p>

                  <ul className="list-disc ml-4 space-y-2 mt-2 text-black/70">
                    {exp.achievements.map((ach) => (
                      <li key={ach}>{ach}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <span
                          key={tech.label}
                          className="px-3 py-1 border border-black/20 rounded-full text-sm font-mono uppercase tracking-wide inline-flex items-center gap-2"
                        >
                          {Icon ? <Icon className="text-base" aria-hidden /> : null}
                          {tech.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
