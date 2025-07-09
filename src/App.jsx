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
        <section className="bg-gray-900 py-20 px-4 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Currently building exciting full-stack products using React, Node, and cloud services. 
            Previously worked on real-time location apps and blockchain projects.
          </p>
        </section>
      </div>

      <div ref={highlightsRef} id="highlights">
        <section className="bg-gray-950 py-20 px-4 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Highlights</h2>
          <ul className="text-gray-300 list-disc list-inside max-w-2xl mx-auto space-y-2 text-left">
            <li>🚀 Built & deployed 3 production apps</li>
            <li>🌐 15K+ combined users across platforms</li>
            <li>💡 Open-sourced multiple tools on GitHub</li>
          </ul>
        </section>
      </div>

      <div ref={contactRef} id="contact">
        <section className="bg-gray-900 py-20 px-4 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-4">
            Let's connect! I'm open to freelance, collaboration, or just a quick tech chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:harsha@example.com"
              className="bg-purple-600 px-6 py-2 rounded-full text-white hover:bg-purple-700 transition"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 px-6 py-2 rounded-full text-white hover:bg-purple-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="tel:+919000000000"
              className="bg-purple-600 px-6 py-2 rounded-full text-white hover:bg-purple-700 transition"
            >
              Call
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
