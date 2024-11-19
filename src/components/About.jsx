import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 mx-auto mb-6"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-lg transform scale-110"></div>
            <img
              src="/img/profile.jpg"
              alt="Harivansh Rathi"
              className="w-full h-full rounded-full object-cover shadow-xl ring-4 ring-blue-600 ring-opacity-50"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              Harivansh <span className="text-blue-600">Rathi</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium">Software Developer & ML Enthusiast</p>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          I'm a software developer with expertise in full-stack web development 
          and a strong interest in machine learning. I enjoy working with both front-end and 
          back-end technologies to build complete solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 bg-white p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact me</h2>
          <div className="space-y-2">
            <a 
              href="mailto:rathiharivansh@gmail.com" 
              className="block text-blue-600 hover:text-blue-700 transition-colors"
            >
              rathiharivansh@gmail.com
            </a>
            <a 
              href="mailto:zng2gc@virginia.edu" 
              className="block text-blue-600 hover:text-blue-700 transition-colors"
            >
              zng2gc@virginia.edu
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://www.linkedin.com/in/harivansh-rathi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/harivansh-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-600 hover:text-gray-800 transition-colors transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;