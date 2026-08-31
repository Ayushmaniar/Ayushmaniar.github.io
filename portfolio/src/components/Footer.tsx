import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/ayushmaniar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300 font-bold"
              aria-label="Ayush Maniar on GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-maniar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300 font-bold"
              aria-label="Ayush Maniar on LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/AyushManiar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300 font-bold"
              aria-label="Ayush Maniar on X"
            >
              <FaTwitter size={24} />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400">© {currentYear} Ayush Maniar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
