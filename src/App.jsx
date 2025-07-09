import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useInView } from 'react-intersection-observer';

const App = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const options = {
    triggerOnce: false,
    threshold: 0.4,
  };

  const [homeRef, homeInView] = useInView(options);
  const [skillsRef, skillsInView] = useInView(options);
  const [projectsRef, projectsInView] = useInView(options);
  const [experienceRef, experienceInView] = useInView(options);
  const [highlightsRef, highlightsInView] = useInView(options);
  const [contactRef, contactInView] = useInView(options);

  React.useEffect(() => {
    if (contactInView) setActiveSection('Contact');
    else if (highlightsInView) setActiveSection('Highlights');
    else if (experienceInView) setActiveSection('Experience');
    else if (projectsInView) setActiveSection('Projects');
    else if (skillsInView) setActiveSection('Skills');
    else if (homeInView) setActiveSection('Home');
  }, [
    homeInView,
    skillsInView,
    projectsInView,
    experienceInView,
    highlightsInView,
    contactInView,
  ]);

  return (
    <>
      <Navbar active={activeSection} />
      <div ref={homeRef}>
        <Hero />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={experienceRef} id="experience">
        {/* Replace with your Experience component */}
        <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <h2 className="text-4xl">Experience</h2>
        </section>
      </div>
      <div ref={highlightsRef} id="highlights">
        {/* Replace with your Highlights component */}
        <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
          <h2 className="text-4xl">Highlights</h2>
        </section>
      </div>
      <div ref={contactRef} id="contact">
        {/* Replace with your Contact component */}
        <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <h2 className="text-4xl">Contact</h2>
        </section>
      </div>
    </>
  );
};

export default App;
