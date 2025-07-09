import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import FadeInWhenVisible from './components/FadeInWhenVisible';
import { useInView } from 'react-intersection-observer';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const options = { triggerOnce: false, threshold: 0.4 };

  const [skillsRef, skillsInView] = useInView(options);
  const [projectsRef, projectsInView] = useInView(options);
  const [experienceRef, experienceInView] = useInView(options);
  const [highlightsRef, highlightsInView] = useInView(options);
  const [contactRef, contactInView] = useInView(options);

  useEffect(() => {
    if (contactInView) setActiveSection('Contact');
    else if (highlightsInView) setActiveSection('Highlights');
    else if (experienceInView) setActiveSection('Experience');
    else if (projectsInView) setActiveSection('Projects');
    else if (skillsInView) setActiveSection('Skills');
    else setActiveSection('Home');
  }, [
    skillsInView,
    projectsInView,
    experienceInView,
    highlightsInView,
    contactInView,
  ]);

  return (
    <div className="bg-gray-900 text-white">
      <Navbar active={activeSection} />

      <Hero />

      <div ref={skillsRef}>
        <FadeInWhenVisible>
          <Skills />
        </FadeInWhenVisible>
      </div>

      <div ref={projectsRef}>
        <FadeInWhenVisible delay={0.1}>
          <Projects />
        </FadeInWhenVisible>
      </div>

      <div ref={experienceRef}>
        <FadeInWhenVisible delay={0.2}>
          <Experience />
        </FadeInWhenVisible>
      </div>

      <div ref={highlightsRef}>
        <FadeInWhenVisible delay={0.3}>
          <Highlights />
        </FadeInWhenVisible>
      </div>

      <div ref={contactRef}>
        <FadeInWhenVisible delay={0.4}>
          <Contact />
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default App;
