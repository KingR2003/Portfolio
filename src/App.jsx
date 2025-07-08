import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import FadeInWhenVisible from './components/FadeInWhenVisible';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />

      <Hero />

      <FadeInWhenVisible>
        <Skills />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.1}>
        <Projects />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <Experience />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.3}>
        <Highlights />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <Contact />
      </FadeInWhenVisible>
    </div>
  );
}

export default App;
