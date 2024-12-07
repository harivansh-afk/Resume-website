import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceItem = ({ title, company, date, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="mb-8 border-l-4 border-blue-600 pl-4"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="text-lg text-blue-600 mb-2">{company}</div>
      <div className="text-gray-600 mb-2">{date}</div>
      <ul className="list-disc list-inside text-gray-700">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Front End Development Intern",
      company: "UNIKOVE TECHNOLOGIES",
      date: "June 2024 - August 2024",
      description: [
        "Utilized JavaScript and React.js to refine UX design elements, ensuring seamless functionality and integration",
        "Collaborated with the design team to conceptualize and implement new web interfaces, improving user experience",
        "Optimized front-end code by reducing JavaScript file sizes by 20%, improving website load time"
      ]
    },
    {
      title: "Software Development Intern",
      company: "MOGLIX",
      date: "June 2023 - August 2023",
      description: [
        "Developed Python algorithm to optimize transportation routes, increasing time and supply chain efficiency by 20%",
        "Developed ETL pipelines to streamline lead data processing, enabling faster outreach",
        "Automated data extraction and transformation using various libraries in Python, reducing manual workload"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "SAN AUTO",
      date: "June 2022 - August 2022",
      description: [
        "Implemented manufacturing data analysis tools using Excel and Python, improving reporting speed by 20%",
        "Optimized manufacturing data storage using mySQL, improving query performance",
        "Created React dashboards with real-time production metrics visualization, increasing ease of data access"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Experience
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
