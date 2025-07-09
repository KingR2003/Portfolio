import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 relative min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 px-4 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/40 via-indigo-500/20 to-blue-600/40 blur-2xl opacity-20 animate-pulse z-0" />
      <div className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-600 rounded-full opacity-30 blur-3xl animate-ping top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
      <svg
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-10"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#8b5cf6"
          fillOpacity="1"
          d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,112C840,85,960,75,1080,106.7C1200,139,1320,213,1380,250.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>

      {/* Animated Content */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
      >
        Harshananda Akkasali
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="z-10 text-base sm:text-lg md:text-xl text-gray-300 mb-6"
      >
        Software Developer | Building with React, AI & Cloud
      </motion.p>

      <motion.a
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        href="/resume.pdf"
        download
        className="z-10 bg-purple-600 px-6 py-2 rounded-full text-white hover:bg-purple-700 transition"
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default Hero;
