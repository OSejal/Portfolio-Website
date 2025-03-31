"use client";

import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import About from "@/sections/About";
import Footer from "@/sections/Footer";



export default function Home() {
  return (
    <div className="h-full">
      {/* Hero Section */}
      <section id="home" className="container mx-auto h-[100vh] flex items-center">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto h-[100vh] flex items-center">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto h-[642px] flex items-center mt-20">
        <Skills />
      </section>


      {/* Projects Section */}
      <section id="projects" className="container mx-auto h-[100vh] flex items-center mt-32">
        <Projects />
      </section>


      {/* Contact Section */}
      <section id="contact" className="container mx-auto h-[100vh] flex items-center pt-10">
        <Contact />
      </section>


      {/* Footer Section */}
      <section id="footer" className="container mx-auto h-[142px] flex items-center">
        <Footer />
      </section>
    </div>
  );
}
