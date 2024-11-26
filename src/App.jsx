import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-grid -z-10" aria-hidden="true" />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-16">
          <section id="about" className="fade-in pt-20">
            <About />
          </section>
          <section id="experience" className="fade-in">
            <Experience />
          </section>
          <section id="projects" className="fade-in">
            <Projects />
          </section>
          <section id="education" className="fade-in">
            <Education />
          </section>
          <section id="skills" className="fade-in">
            <Skills />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
