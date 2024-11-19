import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillCategory = ({ title, skills }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <h3 className="text-xl font-bold mb-3 text-blue-600">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript","C/C++", "HTML", "CSS/Tailwind"]
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Node.js","Express.js", "Vite", "Next.js"]
    },
    {
      title: "Tools & Databases",
      skills: ["Git/Github", "SQL", "MongoDB"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Technical Skills
      </motion.h2>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;