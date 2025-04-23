'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="flex space-x-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="https://github.com/ayushmaniar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/ayush-maniar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </motion.div>
          <p className="text-gray-600 dark:text-gray-400">© {currentYear} Ayush Maniar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
