import React from 'react';

const experience = [
  {
    title: 'Cloud Computing (AWS) Intern',
    company: 'Rapsol Technologies',
    duration: 'Feb 2023 – June 2023',
    points: [
      'Built and optimized frontend website for a Flight ticket prediction.',
      'Worked on ML Models for the predictions.',
      'Collaborated with AWS to host the website for a better scalability.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Nearlly',
    duration: 'Jun 2025 – Current',
    points: [
      'Developed full-stack applications for the company.',
      'Delivered mobile-first responsive web apps with Firebase backend.',
      'Improved SEO and performance, scoring 90+ on Lighthouse audits.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-24 bg-gray-950 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experience.map((exp, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-sm text-purple-400">{exp.company} • {exp.duration}</p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300 text-sm">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
