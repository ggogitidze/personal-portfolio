"use client";
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import IntroPanel from '../components/IntroPanel';
import Footer from '../components/Footer';
import { useEffect, useState, useRef } from 'react';

const sectionIds = [
  "home",
  "skills",
  "projects",
  "experience",
  "about",
  "contact",
  "resume"
];

export default function Home() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Custom scroll handler for nav links
  const handleNav = (id: string) => {
    let ref = null;
    if (id === 'skills') ref = skillsRef;
    if (id === 'projects') ref = projectsRef;
    if (id === 'experience') ref = experienceRef;
    if (id === 'contact') ref = contactRef;
    if (ref && ref.current) {
      const el = ref.current as HTMLElement;
      window.scrollTo({
        top: el.offsetTop + el.offsetHeight - window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

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
