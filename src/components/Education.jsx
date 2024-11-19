import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Education
      </motion.h2>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold text-blue-600">
          University of Virginia, Charlottesville, VA
        </h3>
        <div className="text-lg font-semibold mb-2">
          Bachelor of Arts, Computer Science
        </div>
        <div className="text-gray-600 mb-4">Expected May 2026</div>
        <div className="mb-2">
          <span className="font-semibold">GPA:</span> 3.7/4.0
        </div>
        <div>
          <span className="font-semibold">Relevant Coursework:</span>
          <p className="text-gray-700">
            Data structures and algorithms, Computer systems and organization, 
            Software development essentials
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;