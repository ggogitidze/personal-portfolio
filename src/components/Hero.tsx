"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section id="home" ref={containerRef} className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          variants={itemVariants}
          animate={floatingAnimation}
          style={{ y, scale }}
          className="rounded-full overflow-hidden w-32 h-32 shadow-soft border-4 border-accent mb-2"
        >
          <Image
            src="/profile-placeholder.png"
            alt="Giorgi Gogitidze profile photo"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight">
          Giorgi Gogitidze
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-xl font-semibold text-accent">
          Software Engineer
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-xl text-lg text-foreground/80 dark:text-foreground-dark/80"
        >
          Building scalable full-stack applications with precision and performance.
        </motion.p>
      </motion.div>
      <div className="flex-1 flex items-center justify-center relative w-full h-[320px] md:h-[420px]">
        <video
          src="/assets/male-programmer.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain rounded-2xl shadow-2xl"
          style={{ background: 'transparent' }}
        />
      </div>
    </section>
  );
} 