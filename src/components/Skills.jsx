import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  Languages: [
    { name: 'JavaScript', icon: '/assets/skills/javascript.png' },
    { name: 'Python', icon: '/assets/skills/python.png' },
    { name: 'C++', icon: '/assets/skills/cpp.png' }
  ],
  Frameworks: [
    { name: 'React', icon: '/assets/skills/react.png' },
    { name: 'Node.js', icon: '/assets/skills/node.png' },
    { name: 'Django', icon: '/assets/skills/django.png' }
  ],
  Tools: [
    { name: 'Git', icon: '/assets/skills/git.png' },
    { name: 'VS Code', icon: '/assets/skills/vscode.png' },
    { name: 'Cursor', icon: '/assets/skills/cursor.png' }
  ],
  'Cloud & AI': [
    { name: 'AWS', icon: '/assets/skills/aws.png' },
    { name: 'Firebase', icon: '/assets/skills/firebase.png' },
    { name: 'OpenAI API', icon: '/assets/skills/openai.png' },
    { name: 'Azure', icon: '/assets/skills/azure.png' }
  ]
};

const SkillCard = ({ category, items, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gray-800 rounded-xl p-6 shadow-md"
    >
      <h3 className="text-xl font-semibold text-purple-400 mb-4">{category}</h3>
      <ul className="flex flex-wrap gap-4">
        {items.map(({ name, icon }) => (
          <li
            key={name}
            className="flex items-center gap-2 bg-gray-700 text-white px-3 py-2 rounded-full text-sm hover:bg-purple-600 transition duration-300"
          >
            <img src={icon} alt={name} className="w-5 h-5" />
            {name}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-950 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Skills
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], idx) => (
          <SkillCard key={category} category={category} items={items} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
