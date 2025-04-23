'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaLaptopCode, FaDatabase, FaRobot } from 'react-icons/fa';

export default function About() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "AI Agents", icon: <FaRobot className="text-purple-500 text-3xl mb-2" />, description: "Developing intelligent agents capable of reasoning and decision making in complex environments." },
    { name: "Deep Learning", icon: <FaLaptopCode className="text-purple-500 text-3xl mb-2" />, description: "Neural networks architecture, computer vision, and natural language processing models." },
    { name: "Data Science", icon: <FaDatabase className="text-purple-500 text-3xl mb-2" />, description: "Statistical analysis, data visualization, and machine learning algorithms." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div 
            ref={sectionRef}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
              <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8"
            >
              <div className="prose dark:prose-invert max-w-none">
                <p className="mb-4">
                  I'm currently pursuing a Master of Science in Computer Science at the University of California, San Diego, 
                  where I'm focusing on advanced topics in artificial intelligence and machine learning.
                </p>
                <p className="mb-4">
                  Prior to my graduate studies, I worked as a Data Scientist at Walmart where I helped develop 
                  data-driven solutions to optimize business operations and enhance customer experience.
                </p>
                <p className="mb-4">
                  My research interests lie at the intersection of AI agents, deep learning, and multi-agent 
                  collaboration. I'm particularly passionate about developing intelligent systems that can 
                  reason, collaborate, and solve complex problems.
                </p>
                <p>
                  When I'm not coding or researching, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing my knowledge with the community.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div 
            ref={skillsRef}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Expertise</h2>
              <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={skillsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  {skill.icon}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{skill.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
