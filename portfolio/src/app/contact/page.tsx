'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactItems = [
    {
      icon: <FaEnvelope className="text-3xl text-purple-500" />,
      title: "Email",
      description: "ayushmaniar70@gmail.com",
      link: "mailto:ayushmaniar70@gmail.com",
    },
    {
      icon: <FaLinkedin className="text-3xl text-purple-500" />,
      title: "LinkedIn",
      description: "Connect with me on LinkedIn",
      link: "https://www.linkedin.com/in/ayush-maniar",
    },
    {
      icon: <FaGithub className="text-3xl text-purple-500" />,
      title: "GitHub",
      description: "Check out my code and projects",
      link: "https://github.com/ayushmaniar",
    },
    {
      icon: <FaTwitter className="text-3xl text-purple-500" />,
      title: "Twitter",
      description: "Follow me for updates",
      link: "https://x.com/AyushManiar",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                If you'd like to collaborate on a project, discuss research opportunities, 
                or just have a chat about AI and data science, feel free to reach out!
              </p>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {contactItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mr-4">{item.icon}</div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
