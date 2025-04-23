'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PDFViewer from '@/components/PDFViewer';
import { FaArrowDown, FaLaptopCode, FaDatabase, FaRobot, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [resumeRef, resumeInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center min-h-screen pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ y: 20 }}
            animate={heroInView ? { y: 0 } : { y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Hi, I'm your one and only <span className="text-purple-400">Ayush Maniar</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20 }}
            animate={heroInView ? { y: 0 } : { y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8"
          >
            MSCS Student at UC San Diego | Former Data Scientist at Walmart | AI Agents & Deep Learning Specialist
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#resume" 
              className="px-8 py-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300 flex items-center"
            >
              View Resume <FaArrowDown className="ml-2" />
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-300"
            >
              Explore Projects
            </a>
          </motion.div>
        </div>
      </motion.section>
      
      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-bold text-white mb-4">About Me</h1>
            <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-gray-800 rounded-lg shadow-md p-6 md:p-8"
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4 text-gray-300">
                I'm currently pursuing a Master of Science in Computer Science at the University of California, San Diego, 
                where I'm focusing on advanced topics in artificial intelligence and machine learning.
              </p>
              <p className="mb-4 text-gray-300">
                Prior to my graduate studies, I worked as a Data Scientist at Walmart where I helped develop 
                data-driven solutions to optimize business operations and enhance customer experience.
              </p>
              <p className="mb-4 text-gray-300">
                My research interests lie at the intersection of AI agents, deep learning, and multi-agent 
                collaboration. I'm particularly passionate about developing intelligent systems that can 
                reason, collaborate, and solve complex problems.
              </p>
              <p className="text-gray-300">
                When I'm not coding or researching, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge with the community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-2">My Skills</h2>
            <div className="w-12 h-1 bg-purple-600 mx-auto"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-lg text-center"
            >
              <FaRobot className="text-purple-400 text-3xl mb-2 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Agents</h3>
              <p className="text-gray-300">Developing intelligent agents capable of reasoning and decision making in complex environments.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-lg text-center"
            >
              <FaLaptopCode className="text-purple-400 text-3xl mb-2 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Deep Learning</h3>
              <p className="text-gray-300">Neural networks architecture, computer vision, and natural language processing models.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-lg text-center"
            >
              <FaDatabase className="text-purple-400 text-3xl mb-2 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Data Science</h3>
              <p className="text-gray-300">Statistical analysis, data visualization, and machine learning algorithms.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-bold text-white mb-4">My Projects</h1>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">
              Showcasing my research and development work in AI and deep learning.
            </p>
          </motion.div>
          
          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden mb-10"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/jFIWlEv6ZXo"
                title="Multi-agent collaboration in Minecraft"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                Collaborating Action by Action: A Multi-agent LLM Framework for Embodied Reasoning
              </h2>
              
              <p className="text-gray-300 mb-4">
                This research project explores multi-agent collaboration in complex environments like Minecraft. 
                The framework enables multiple AI agents to reason, plan, and work together to solve complex tasks 
                that would be difficult for single agents.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">
                  AI Agents
                </span>
                <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">
                  Multi-agent Systems
                </span>
                <span className="px-3 py-1 bg-green-900 text-green-200 rounded-full text-sm">
                  Embodied AI
                </span>
                <span className="px-3 py-1 bg-yellow-900 text-yellow-200 rounded-full text-sm">
                  Minecraft
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-400 hover:underline"
                >
                  <FaGithub className="mr-1" /> GitHub Repository
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-400 hover:underline"
                >
                  <FaExternalLinkAlt className="mr-1" /> View Paper
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Resume Section */}
      <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={resumeRef}
            initial={{ opacity: 0, y: 50 }}
            animate={resumeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Resume</h2>
            
            <PDFViewer pdfUrl="/Ayush_Maniar_Resume.pdf" />
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Home;
