'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from 'next-themes';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Resume', path: '/#resume' },
  { name: 'Contact', path: '/#contact' },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // When mounted on client, show UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // Always navigate to homepage for hash links
    if (path.startsWith('/#')) {
      e.preventDefault();
      if (window.location.pathname !== '/') {
        window.location.href = path;
        return;
      }
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        window.history.pushState(null, '', path);
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-black border-b-4 border-black dark:border-white z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-black uppercase tracking-tighter text-black dark:text-white border-2 border-black dark:border-white px-2 py-1">
              Ayush Maniar
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="px-3 py-2 border-2 border-transparent hover:border-black hover:dark:border-white text-sm font-black uppercase text-black dark:text-white transition-colors duration-300"
                  onClick={(e) => handleScrollTo(e, link.path)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 border-2 border-transparent hover:border-black hover:dark:border-white transition-colors"
                aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
              >
                {resolvedTheme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 border-4 border-black dark:border-white text-black dark:text-white transition-colors duration-300"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div id="mobile-navigation" className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black border-b-4 border-black dark:border-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block px-3 py-2 border-2 border-transparent hover:border-black hover:dark:border-white text-base font-black uppercase text-black dark:text-white transition-colors duration-300"
                onClick={(e) => {
                  handleScrollTo(e, link.path);
                }}
              >
                {link.name}
              </Link>
              ))}
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="flex items-center gap-2 px-3 py-2 border-2 border-transparent hover:border-black hover:dark:border-white text-base font-black uppercase"
              >
                {resolvedTheme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
                {resolvedTheme === 'dark' ? 'Light theme' : 'Dark theme'}
              </button>
            </div>
        </motion.div>
      )}
    </nav>
  );
}
