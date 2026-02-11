"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 pb-12 overflow-hidden"
    >
      <div className="max-w-[1600px] w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 h-auto md:h-[600px] items-center">

        {/* Left: Typography */}
        <div className="md:col-span-8 flex flex-col justify-center h-full relative pr-8 md:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start w-full"
          >
            <h1 className="heading-massive mb-6 tracking-tighter text-left w-full leading-[0.9]">
              GIORGI<br />GOGITIDZE
            </h1>

            <div className="w-full h-[2px] bg-black mb-8 origin-left transform scale-x-100" />

            <h2 className="text-xl md:text-2xl font-bold text-black uppercase tracking-wider flex items-center gap-3">
              <span className="bg-black text-white px-2 py-1">( SOFTWARE ENGINEER )</span>
              <span>✶</span>
              <span>BUILDING SCALABLE SYSTEMS</span>
            </h2>
          </motion.div>

          {/* Vertical Grid Line (Desktop) */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-black" />
        </div>

        {/* Right: Image "Grid" Style (Option B) */}
        <div className="md:col-span-4 h-full flex items-end justify-center md:justify-end relative mt-12 md:mt-0 pl-0 md:pl-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative w-full max-w-[400px] aspect-[3/4] border border-black p-2 md:p-4"
          >
            <div className="w-full h-full relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="/GiorgiGogitidzeLinkedin.webp"
                alt="Giorgi Gogitidze"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            {/* Decorative Grid Corners */}
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-l border-t border-black bg-white" />
            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-r border-t border-black bg-white" />
            <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-l border-b border-black bg-white" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-r border-b border-black bg-white" />
          </motion.div>
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4"
      >
        <div className="h-[1px] w-12 bg-black" />
        <span className="text-xs uppercase tracking-widest text-black font-bold">Scroll Down</span>
      </motion.div>
    </section>
  );
}
