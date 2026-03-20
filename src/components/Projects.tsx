"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  role: string;
  year: string;
  image: string;
  imageAlt: string;
  imageDimensions: { width: number; height: number };
  aspectClass?: string;
};

type PosterModalData = {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const projects: Project[] = [
  {
    title: "GPT-2 + Reinforcement Learning for Targeted Text",
    description:
      "CCSCNE 2024 poster on applying conservative PPO updates to a frozen GPT-2 policy. Manual reward shaping penalized repetition, rewarded lexical diversity, and raised diversity from 0.499 to 0.616 while reducing repetition by 23%.",
    tech: ["GPT-2 (124M)", "Proximal Policy Optimization", "Manual reward shaping"],
    role: "Lead Researcher & Presenter",
    year: "2024",
    image: "/poster-gpt-rl.webp",
    imageAlt: "Poster detailing GPT-2 with reinforcement learning for personalized text generation",
    imageDimensions: { width: 1600, height: 1200 },
    aspectClass: "aspect-[4/3]",
  },
  {
    title: "LSTM Modeling for Technical Stock Analysis",
    description:
      "Caldwell University Research & Creative Arts Day study comparing an MSFT forecasting LSTM to linear baselines. Sliding-window preprocessing stabilized training and drove MAE down from 3.65 at epoch 100 to 3.09 by epoch 500.",
    tech: ["LSTM", "Sliding window preprocessing", "MAE / MSE evaluation"],
    role: "Research Co-Author",
    year: "2023",
    image: "/poster-lstm-stock.webp",
    imageAlt: "Poster summarizing LSTM-based technical stock analysis",
    imageDimensions: { width: 1600, height: 1200 },
    aspectClass: "aspect-[4/3]",
  },
  {
    title: "Non-Euclidean Navigation in Reinforcement Learning",
    description:
      "Jun-Aug 2022 paid study on training Delayed Q-learning agents inside a Unity-built hyperbolic environment. Documented partial policy transfer from Euclidean layouts and the predictable degradation as curvature and geometric distortion increase.",
    tech: ["Unity Hyperbolic Environment", "Delayed Q-Learning", "Geometry-aware reward shaping"],
    role: "Summer Researcher",
    year: "2022",
    image: "/non-euclidean-nav.png",
    imageAlt: "Conceptual visualization of a non-Euclidean reinforcement learning environment",
    imageDimensions: { width: 1600, height: 1000 },
    aspectClass: "aspect-[16/10]",
  },
];

export default function Projects() {
  const [activePoster, setActivePoster] = useState<PosterModalData | null>(null);

  const closePoster = () => setActivePoster(null);

  useEffect(() => {
    if (!activePoster) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePoster(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePoster]);

  return (
    <>
      <section id="projects" className="py-20 w-full">
        {projects.map((project, idx) => (
          <div key={project.title} className="w-full relative">
            {/* Horizontal Divider */}
            <div className="w-full h-[1px] bg-black mb-16 md:mb-24" />

            <div className={`max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 md:mb-32 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Content Column */}
              <div className={`lg:col-span-5 flex flex-col justify-center ${idx % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="flex flex-col gap-6 bg-[#f6f6f6] rounded-2xl shadow-md px-8 py-12">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="heading-medium uppercase"
                  >
                    {project.title}
                  </motion.h3>

                  <p className="body-text text-black/70 max-w-md">{project.description}</p>

                  <div className="flex flex-col gap-2 mt-8 py-8 md:border-t md:border-black/10">
                    <div className="grid grid-cols-2 gap-y-4 text-sm font-mono uppercase tracking-wider">
                      <div className="text-black/50">Tech Stack</div>
                      <div className="text-black">{project.tech.join(", ")}</div>

                      <div className="text-black/50">Role</div>
                      <div className="text-black">{project.role}</div>

                      <div className="text-black/50">Year</div>
                      <div className="text-black">{project.year}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className={`lg:col-span-7 relative ${idx % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}>
                <motion.button
                  type="button"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  onClick={() =>
                    setActivePoster({
                      title: project.title,
                      src: project.image,
                      alt: project.imageAlt,
                      width: project.imageDimensions.width,
                      height: project.imageDimensions.height,
                    })
                  }
                  className={`relative w-full ${project.aspectClass ?? "aspect-[16/10]"} rounded-2xl overflow-hidden shadow-lg group bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-black/20`}
                >
                  <div className="absolute inset-0 bg-white" />
                  <div className="relative z-10 w-full h-full p-6">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                  <span className="sr-only">Expand {project.title} poster</span>
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {activePoster && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" onClick={closePoster} />
          <div className="relative z-10 w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
              <p className="text-lg font-semibold uppercase tracking-wide text-black">{activePoster.title}</p>
              <button
                type="button"
                onClick={closePoster}
                className="text-sm font-bold uppercase tracking-wide text-black/70 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded-full px-3 py-1"
                aria-label="Close poster preview"
              >
                Close
              </button>
            </div>
            <div className="p-6 bg-[#f6f6f6] max-h-[85vh] overflow-auto">
              <Image
                src={activePoster.src}
                alt={`${activePoster.alt} (full view)`}
                width={activePoster.width}
                height={activePoster.height}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
