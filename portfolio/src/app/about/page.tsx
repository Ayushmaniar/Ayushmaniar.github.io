'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

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
    "AI Agents", "Deep Learning", "Python", "PyTorch", "Huggingface", 
    "LangChain", "smolAgents", "SQL", "Databricks", "JavaScript", 
    "TensorFlow", "Git", "Linux", "PySpark", "StreamLit"
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900" id="about">
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
              <h1 className="text-3xl font-bold text-white mb-4">About Me</h1>
              <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row items-start justify-center gap-8 max-w-[900px] mx-auto py-8"
            >
              <div className="flex-none md:w-[30%] flex justify-center items-start">
                <Image
                  src="/Ayush_Maniar_UCSD_ID_PIC.png"
                  alt="Ayush Maniar"
                  width={240}
                  height={240}
                  className="w-full max-w-[200px] h-auto rounded-xl shadow-xl object-cover"
                  priority
                />
              </div>
              
              <div className="flex-grow md:w-[70%] max-w-[800px] mx-auto text-left">
                <p className="mb-4 text-gray-300 leading-relaxed">
                  Hi, I'm Ayush Maniar. Currently, I'm pursuing a Master of Science in Computer Science (MSCS) at UC San Diego.
                </p>
                <p className="mb-4 text-gray-300 leading-relaxed">
                  Before joining UCSD, I worked as a Data Scientist III at Walmart Global Tech India (SAMS Club), where I focused on leveraging data science and machine learning to solve complex business problems, particularly in logistics and inventory optimization. I have experience in time series forecasting, optimization using MILP, and building predictive models.
                </p>
                <p className="mb-4 text-gray-300 leading-relaxed">
                  I also co-founded 'Eye In The Sky', a Deep Learning & Computer Vision startup focused on disaster management using drones during my undergraduate studies at IIT Madras.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              ref={skillsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[900px] mx-auto pt-6"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">Key Skills</h3>
              
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate={skillsInView ? "visible" : "hidden"}
                className="flex flex-wrap justify-center gap-3 list-none p-0"
              >
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
