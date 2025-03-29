"use client";

import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";



export default function Home() {
  return (
    <div className="h-full">
      {/* Hero Section */}
      <section id="home" className="container mx-auto h-[70vh] flex items-center mt-20 ">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto h-[642px] flex items-center mt-20">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto h-[642px] flex items-center mt-32">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto h-[642px] flex items-center mt-32">
        <Contact />
      </section>
    </div>
  );
}
