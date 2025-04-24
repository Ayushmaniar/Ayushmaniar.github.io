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
            Hi, I'm <span className="text-purple-400">Ayush Maniar</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20 }}
            animate={heroInView ? { y: 0 } : { y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8"
          >
            MS-CSE Student at UC San Diego | Ex Data Scientist - III at Walmart
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
        <div className="max-w-6xl mx-auto">
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
            className="bg-gray-800 rounded-lg shadow-md p-6 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-3/10 flex justify-center">
                <motion.img
                  src="/Ayush_Maniar_UCSD_ID_PIC.png"
                  alt="Ayush Maniar"
                  className="rounded-lg shadow-lg max-w-full h-auto w-64 md:w-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="md:w-7/10 prose dark:prose-invert max-w-none text-center">
                <p className="mb-5 text-gray-300 text-lg md:text-xl">
                  Hi, I'm Ayush Maniar. Currently, I'm pursuing a Master of Science in Computer Science (MSCS) at UC San Diego, with a specialization in Artificial Intelligence. I am passionate about AI Agents, particularly in the context of multi-agent systems and Agentic RAG. My other interests include Gaming, Augmented Reality and Bioinformatics.
                </p>
                <p className="mb-5 text-gray-300 text-base md:text-lg">
                  Before joining UCSD, I worked as a Data Scientist III at Walmart Global Tech India (SAMS Club), where I focused on leveraging data science and machine learning to solve complex business problems, particularly in logistics and inventory optimization. I have experience in time series forecasting, optimization using MILP, and building predictive models.
                </p>
                <p className="mb-5 text-gray-300 text-base md:text-lg">
                  I also co-founded 'Eye In The Sky', a Deep Learning & Computer Vision startup focused on disaster management using drones during my undergraduate studies at IIT Madras.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
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
              Showcasing research and development work in AI Agents.
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
                className="w-full h-[28rem]" 
                src="https://www.youtube.com/embed/jFIWlEv6ZXo"
                title="Multi-agent collaboration in Minecraft"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Collaborating Action by Action: A Multi-agent LLM Framework for Embodied Reasoning
              </h2>
              
              <p className="text-gray-300 mb-5 text-base md:text-lg">
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
