'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PDFViewer from '@/components/PDFViewer';
import YouTubeFacade from '@/components/YouTubeFacade';
import { projects } from '@/data/projects';
import { FaArrowDown, FaGithub, FaExternalLinkAlt, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [resumeRef, resumeInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactItems = [
    {
      icon: <FaEnvelope className="text-3xl text-black dark:text-white" />,
      title: "Email",
      description: "ayushmaniar70@gmail.com",
      link: "mailto:ayushmaniar70@gmail.com",
    },
    {
      icon: <FaLinkedin className="text-3xl text-black dark:text-white" />,
      title: "LinkedIn",
      description: "Connect with me on LinkedIn",
      link: "https://www.linkedin.com/in/ayush-maniar",
    },
    {
      icon: <FaGithub className="text-3xl text-black dark:text-white" />,
      title: "GitHub",
      description: "Check out my code and projects",
      link: "https://github.com/ayushmaniar",
    },
    {
      icon: <FaTwitter className="text-3xl text-black dark:text-white" />,
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

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center min-h-screen pt-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white border-b-8 border-black dark:border-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ y: 20 }}
            animate={heroInView ? { y: 0 } : { y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 border-4 border-black dark:border-white p-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] inline-block"
          >
            Hi, I&apos;m Ayush Maniar
          </motion.h1>

          <motion.p
            initial={{ y: 20 }}
            animate={heroInView ? { y: 0 } : { y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl font-bold mb-8 flex flex-col items-center gap-2"
          >
            <span className="flex items-center gap-2 justify-center">
              <span role="img" aria-label="desktop computer">🖥️</span>
              MS-CSE Student at UC San Diego
            </span>
            <span className="flex items-center gap-2 justify-center">
              <span role="img" aria-label="chart">📊</span>
              Ex Data Scientist - III at Walmart
            </span>
            <span className="flex items-center gap-2 justify-center">
              <span role="img" aria-label="graduation cap">🎓</span>
              IIT Madras 2021 Alumni
            </span>
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#resume"
              className="px-8 py-3 border-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-300 flex items-center font-black uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0_0_rgba(255,255,255,1)] active:translate-x-2 active:translate-y-2 active:shadow-none"
            >
              View Resume <FaArrowDown className="ml-2" />
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 font-black uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0_0_rgba(255,255,255,1)] active:translate-x-2 active:translate-y-2 active:shadow-none"
            >
              Explore Projects
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white border-b-8 border-black dark:border-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">About Me</h1>
            <div className="w-16 h-2 bg-black dark:bg-white mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white dark:bg-black border-4 border-black dark:border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] p-6 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-3/10 flex justify-center">
                <motion.img
                  src="/Ayush_Maniar_UCSD_ID_PIC.png"
                  alt="Ayush Maniar"
                  className="max-w-full h-auto w-64 md:w-auto border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="md:w-7/10 prose dark:prose-invert max-w-none text-justify">
                <p className="mb-5 text-black dark:text-white font-medium text-lg md:text-lg">
                  Hi, I&apos;m Ayush Maniar. Currently, I&apos;m pursuing a Master of Science in Computer Science (MSCS) at UC San Diego, with a specialization in Artificial Intelligence. I am passionate about AI Agents, particularly in the context of Multi-agent systems and Agentic-RAG. My research focuses on multi-agent collaboration and reasoning, with work accepted at NeurIPS 2025. I&apos;m also the creator of an open-source PowerPoint MCP server that enables AI assistants to automate presentation creation with LaTeX rendering and real-time editing capabilities.
                </p>
                <p className="mb-5 text-black dark:text-white font-medium text-lg md:text-lg">
                  Recently, I completed a Research Scientist Intern - Generative AI position at Riot Games, where I developed AI creative story writing engines using dual-agent architectures, built story-to-code pipelines for game quest systems, and created multimodal AI comic book generators. Before joining UCSD, I worked as a Data Scientist III at Walmart Global Tech India (SAMS Club), where I led multiple high-impact projects creating over $120M in business value. My work included developing patented time series algorithms for transit time prediction, delivery delay prediction models, and optimization solutions using Mixed Integer Linear Programming.
                </p>
                <p className="mb-5 text-black dark:text-white font-medium text-lg md:text-lg">
                  During my undergraduate studies at IIT Madras, I co-founded &apos;Eye In The Sky&apos;, a Deep Learning & Computer Vision startup focused on disaster management using drones. The startup raised INR 19.5 Lakhs in funding, won the Microsoft Codefundo++ 2019 challenge (among 2000+ teams), and received the International Microsoft &apos;AI For Earth&apos; Grant. My other interests include Gaming, Augmented Reality, and Bioinformatics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Life Trajectory Timeline - Modern Vertical & Alternating */}
          <div className="w-full mt-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 text-center">The Adventure Timeline</h2>
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 top-0 h-full w-2 bg-black dark:bg-white z-0" style={{ transform: 'translateX(-50%)' }}></div>
              {/* Timeline Events (Reversed Order) */}
              <div className="flex flex-col gap-16">
                {/* Riot Games Internship (2025) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2 flex justify-end pr-8">
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-right">
                      <div className="flex flex-col items-end">
                        <div className="bg-white p-2 border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] mb-2 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/riot-games.jpg" alt="Riot Games Logo" className="w-16 h-16 object-contain" />
                        </div>
                        <div className="bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] px-4 py-2 font-black text-lg mb-1 uppercase tracking-wider">2025 Summer</div>
                        <div className="text-black dark:text-white font-black text-base uppercase">Riot Games</div>
                        <div className="text-gray-700 dark:text-gray-300 text-sm font-bold">Research Scientist Intern - Generative AI</div>
                      </div>
                    </motion.div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-black dark:bg-white border-4 border-black dark:border-white z-10" style={{ transform: 'translate(-50%,-50%)' }}></div>
                  <div className="w-1/2"></div>
                </div>

                {/* UC San Diego (2024–Now) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-black dark:bg-white border-4 border-black dark:border-white z-10" style={{ transform: 'translate(-50%,-50%)' }}></div>
                  <div className="w-1/2 flex justify-start pl-8">
                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-left">
                      <div className="flex flex-col items-start">
                        <div className="bg-white p-2 border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] mb-2 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/University_of_California_San_Diego.avif" alt="UCSD Seal" className="w-16 h-16 object-contain" />
                        </div>
                        <div className="bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] px-4 py-2 font-black text-lg mb-1 uppercase tracking-wider">2024–Now</div>
                        <div className="text-black dark:text-white font-black text-base uppercase">UC San Diego</div>
                        <div className="text-gray-700 dark:text-gray-300 text-sm font-bold">MS-CSE, AI Specialization</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Walmart (2021-2024) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2 flex justify-end pr-8">
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-right">
                      <div className="flex flex-col items-end">
                        <div className="bg-white p-2 border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] mb-2 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/Walmart_logo.png" alt="Walmart Logo" className="w-16 h-16 object-contain" />
                        </div>
                        <div className="bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] px-4 py-2 font-black text-lg mb-1 uppercase tracking-wider">2021–2024</div>
                        <div className="text-black dark:text-white font-black text-base uppercase">Walmart Global Tech</div>
                        <div className="text-gray-700 dark:text-gray-300 text-sm font-bold">Data Scientist III</div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-black dark:bg-white border-4 border-black dark:border-white z-10" style={{ transform: 'translate(-50%,-50%)' }}></div>
                  <div className="w-1/2"></div>
                </div>
                {/* Hyperverge Internship (2019) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-black dark:bg-white border-4 border-black dark:border-white z-10" style={{ transform: 'translate(-50%,-50%)' }}></div>
                  <div className="w-1/2 flex justify-start pl-8">
                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-left">
                      <div className="flex flex-col items-start">
                        <div className="bg-white p-2 border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] mb-2 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/hyperverge-logo.webp" alt="Hyperverge Logo" className="w-10 h-10 object-contain" />
                        </div>
                        <div className="bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] px-3 py-1 font-black text-sm mb-1 uppercase tracking-wider">2019</div>
                        <div className="text-gray-700 dark:text-gray-300 text-sm font-bold">Intern, Hyperverge</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* IIT Madras (2017-2021) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2 flex justify-end pr-8">
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-right">
                      <div className="flex flex-col items-end">
                        <div className="bg-white p-2 border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] mb-2 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/bg_removed.avif" alt="IIT Madras Logo" className="w-16 h-16 object-contain" />
                        </div>
                        <div className="bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] px-4 py-2 font-black text-lg mb-1 uppercase tracking-wider">2017–2021</div>
                        <div className="text-black dark:text-white font-black text-base uppercase">IIT Madras</div>
                        <div className="text-gray-700 dark:text-gray-300 text-sm font-bold">B.Tech, Electrical Engineering</div>
                      </div>
                    </motion.div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-black dark:bg-white border-4 border-black dark:border-white z-10" style={{ transform: 'translate(-50%,-50%)' }}></div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white border-b-8 border-black dark:border-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">My Projects</h1>
            <div className="w-16 h-2 bg-black dark:bg-white mx-auto mb-6"></div>
            <p className="text-lg font-bold">
              Showcasing research and development work in AI Agents.
            </p>
          </motion.div>

          {/* Dynamic Project Mapping */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="bg-white dark:bg-black border-4 border-black dark:border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] mb-10"
            >
              <div className="aspect-w-16 aspect-h-9 relative border-b-4 border-black dark:border-white">
                <YouTubeFacade youtubeId={project.youtubeId} title={project.title} />
              </div>

              <div className={`p-8 md:p-10 ${index > 0 ? 'border-t-4 border-black dark:border-white' : ''}`}>
                <div className="flex items-center flex-wrap gap-3 mb-4">
                  <h2 className="text-2xl md:text-3xl font-black uppercase text-black dark:text-white">
                    {project.title}
                  </h2>
                  {project.badge && (
                    <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white font-black uppercase whitespace-nowrap shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:shadow-[2px_2px_0_0_rgba(255,255,255,1)]">
                      {project.badge}
                    </span>
                  )}
                </div>

                {project.paragraphs.map((desc, i) => (
                  <p key={i} className="text-black dark:text-white font-medium mb-4 text-base md:text-lg">
                    {desc}
                  </p>
                ))}

                {project.features && (
                  <div className="mb-6">
                    <h3 className="text-xl font-black uppercase mb-3">Key Features</h3>
                    <ul className="text-left text-black dark:text-white font-medium space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: feature }} />
                      ))}
                    </ul>
                  </div>
                )}

                {project.workflows && (
                  <div className="mb-8">
                    <h3 className="text-xl font-black uppercase mb-3 text-black dark:text-white">Real Workflows</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      {project.workflows.map(wf => (
                        <div key={wf.id} className="bg-white dark:bg-black border-4 border-black dark:border-white p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
                          <h4 className="font-black uppercase text-black dark:text-white">{wf.title}</h4>
                          <p className="font-bold text-sm text-black dark:text-white">{wf.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white font-black uppercase text-sm shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:shadow-[2px_2px_0_0_rgba(255,255,255,1)]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  {project.links.map(link => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center border-4 border-black dark:border-white px-4 py-2 bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-black uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0_0_rgba(255,255,255,1)] active:translate-x-2 active:translate-y-2 active:shadow-none"
                    >
                      {link.iconType === 'github' && <FaGithub className="mr-2" />}
                      {link.iconType !== 'github' && <FaExternalLinkAlt className="mr-2" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* More Projects Coming Soon */}
          <div className="text-center py-8 mt-10 border-4 border-black dark:border-white p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)]">
            <h2 className="text-2xl font-black uppercase mb-2">More Projects Coming Soon</h2>
            <p className="text-black dark:text-white font-bold">
              I&apos;m working on adding more of my projects here. Check back soon!
            </p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white border-b-8 border-black dark:border-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={resumeRef}
            initial={{ opacity: 0, y: 50 }}
            animate={resumeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black uppercase text-center mb-12 tracking-tighter">Resume</h2>

            <PDFViewer pdfUrl="/Ayush_Maniar_Resume.pdf" />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white">
        <div
          ref={contactRef}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-black dark:text-white">Get In Touch</h2>
            <div className="w-16 h-2 bg-black dark:bg-white mx-auto mb-6"></div>
            <p className="text-lg font-bold max-w-2xl mx-auto text-black dark:text-white">
              If you&apos;d like to collaborate on a project, discuss research opportunities,
              or just have a chat about AI and data science, feel free to reach out!
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="bg-white dark:bg-black border-4 border-black dark:border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] p-6 flex items-center hover:translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-200"
              >
                <div className="mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-black dark:text-white">{item.title}</h3>
                  <p className="font-bold text-black dark:text-white">{item.description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div >
  );
}

export default Home;
