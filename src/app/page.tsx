"use client";
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import IntroPanel from '../components/IntroPanel';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="relative flex flex-col gap-0 bg-white">
      <Hero />
      <IntroPanel />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

