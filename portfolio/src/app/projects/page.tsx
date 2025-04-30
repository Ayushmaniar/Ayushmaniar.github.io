'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projectRef, projectInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Header */}
        <motion.section 
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Showcasing research and development work in AI Agents.
            </p>
          </div>
        </motion.section>
        
        {/* Featured Project */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div 
            ref={projectRef}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
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
              
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Collaborating Action by Action: A Multi-agent LLM Framework for Embodied Reasoning
                </h2>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  This research project explores multi-agent collaboration in complex environments like Minecraft. 
                  The framework enables multiple AI agents to reason, plan, and work together to solve complex tasks 
                  that would be difficult for single agents.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                    AI Agents
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    Multi-agent Systems
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    Embodied AI
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                    Minecraft
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://github.com/kolbytn/mindcraft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <FaGithub className="mr-1" /> GitHub Repository
                  </a>
                  <a
                    href="https://arxiv.org/abs/2504.17950"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Research Paper
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* More Projects Placeholder */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">More Projects Coming Soon</h2>
            <p className="text-gray-700 dark:text-gray-300">
              I'm working on adding more of my projects here. Check back soon!
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
