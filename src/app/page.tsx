"use client";
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import IntroPanel from '../components/IntroPanel';
import Footer from '../components/Footer';
import { useRef } from 'react';

export default function Home() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="relative">
      <section id="home" className="min-h-screen"><IntroPanel /></section>
      <section id="skills" ref={skillsRef} className="min-h-screen py-20"><Skills /></section>
      <section id="projects" ref={projectsRef} className="min-h-screen py-20"><Projects /></section>
      <section id="experience" ref={experienceRef} className="min-h-screen py-20"><Experience /></section>
      <section id="contact" ref={contactRef} className="min-h-screen py-20"><Contact /></section>
      <Footer />
    </div>
  );
}
