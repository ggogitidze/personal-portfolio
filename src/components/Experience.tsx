"use client";
import { motion } from "framer-motion";
import { FaPython, FaBrain } from "react-icons/fa";
import { SiTensorflow, SiKeras } from "react-icons/si";

const researchExperience = [
  {
    title: "Machine Learning Research Assistant",
    org: "The Cog AI Lab, Caldwell University",
    date: "03/23 – 05/25",
    description: "Developed and visualized model performance, improved GPT-2 training speed by 20%, reduced response time by 23%, and increased lexical diversity through reinforcement learning integration.",
    achievements: [
      "Leveraged Python, TensorFlow, Keras, and Matplotlib for model transparency and interpretability.",
      "Published research: Using a GPT with Reinforcement Learning for More Personalized or Targeted Text Generation.",
    ],
    tech: ["Python", "TensorFlow", "Keras", "Reinforcement Learning"],
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
              <div key={exp.title} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-8 border-t border-black/10">
                {/* Left: Date & Org */}
                <div className="md:col-span-4 flex flex-col justify-between">
                  <div className="text-xl font-bold">{exp.org}</div>
                  <div className="text-lg text-black/60 font-mono mt-2">{exp.date}</div>
                </div>

                {/* Right: Details */}
                <div className="md:col-span-8 flex flex-col gap-6">
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="body-text text-black/80 max-w-2xl">{exp.description}</p>

                  <ul className="list-disc ml-4 space-y-2 mt-2 text-black/70">
                    {exp.achievements.map((ach) => (
                      <li key={ach}>{ach}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-3 py-1 border border-black/20 rounded-full text-sm font-mono uppercase tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
