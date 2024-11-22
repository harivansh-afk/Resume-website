import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, github, demo }) => {
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
      className="bg-white rounded-lg shadow-lg p-6 mb-6"
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex space-x-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <FaExternalLinkAlt className="mr-2" />
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Efficiency of ML Algorithms in Financial Markets",
      description: [
        "Co-authored a research paper on cryptocurrency market predictability with a PHD student at CMU",
        "Created dynamic data visualizations with Matplotlib to compare model performance and analyze trends effectively",
        "Built a LSTM machine learning model using sk-learn for predicting cryptocurrency trends with up to 65% accuracy"
      ],
      github: "https://github.com/harivansh-afk/CryptoCurrencyPredictionLSTM",
      demo: "https://docs.google.com/document/d/1i0IZgHYEERKVdRMBtCdK6jJGRoEoZUY7T43fuGKEDm8/edit?usp=sharing"
    },
    {
      title: "Habit Tracker",
      description: [
        "Built and deployed a full-stack habit tracker web app using React.js and TypeScript, enabling efficient habit tracking",
        "Designed reusable components and state management, enhancing scalability and maintainability",
        "Optimized front-end performance with TypeScript and Vite, reducing build times and runtime errors"
      ],
      github: "https://github.com/harivansh-afk/Habit-Tracker",
      demo: "https://habit-tracker-2-eta.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Projects and Research Work
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;