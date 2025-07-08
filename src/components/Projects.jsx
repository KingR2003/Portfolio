import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Party App',
    description: 'A location-based app for discovering house parties and events. Built with React Native and Firebase.',
    tech: ['React Native', 'Firebase', 'Google Maps API'],
    github: 'https://github.com/yourusername/party-app',
    live: ''
  },
  {
    title: 'Crowdfunding DApp',
    description: 'Decentralized crowdfunding platform with ETH + UPI support. Smart contract + Web3 frontend.',
    tech: ['Solidity', 'React', 'Tailwind', 'Razorpay'],
    github: 'https://github.com/yourusername/crowdfunding-dapp',
    live: ''
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio site! Built with React + Tailwind + Vite and deployed via Vercel.',
    tech: ['React', 'Tailwind', 'Vite'],
    github: 'https://github.com/yourusername/portfolio',
    live: ''
  }
];

const Projects = () => {
  return (
    <section id="projects" className="pt-24 bg-gray-950 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Projects</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: '0px 10px 20px rgba(139, 92, 246, 0.5)'
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-gray-800 p-6 rounded-xl shadow-md transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs"
                >
                  {techItem}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline text-sm"
                >
                  GitHub →
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline text-sm"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
