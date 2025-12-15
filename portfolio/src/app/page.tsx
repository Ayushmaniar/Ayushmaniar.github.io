'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PDFViewer from '@/components/PDFViewer';
import { FaArrowDown, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
            className="text-xl sm:text-2xl text-gray-300 mb-8 flex flex-col items-center gap-2"
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
              <div className="md:w-7/10 prose dark:prose-invert max-w-none text-justify">
                <p className="mb-5 text-gray-300 text-lg md:text-lg">
                  Hi, I'm Ayush Maniar. Currently, I'm pursuing a Master of Science in Computer Science (MSCS) at UC San Diego, with a specialization in Artificial Intelligence. I am passionate about AI Agents, particularly in the context of Multi-agent systems and Agentic-RAG. My research focuses on multi-agent collaboration and reasoning, with work accepted at NeurIPS 2025. I'm also the creator of an open-source PowerPoint MCP server that enables AI assistants to automate presentation creation with LaTeX rendering and real-time editing capabilities.
                </p>
                <p className="mb-5 text-gray-300 text-lg md:text-lg">
                  Recently, I completed a Research Scientist Intern - Generative AI position at Riot Games, where I developed AI creative story writing engines using dual-agent architectures, built story-to-code pipelines for game quest systems, and created multimodal AI comic book generators. Before joining UCSD, I worked as a Data Scientist III at Walmart Global Tech India (SAMS Club), where I led multiple high-impact projects creating over $120M in business value. My work included developing patented time series algorithms for transit time prediction, delivery delay prediction models, and optimization solutions using Mixed Integer Linear Programming.
                </p>
                <p className="mb-5 text-gray-300 text-lg md:text-lg">
                  During my undergraduate studies at IIT Madras, I co-founded 'Eye In The Sky', a Deep Learning & Computer Vision startup focused on disaster management using drones. The startup raised INR 19.5 Lakhs in funding, won the Microsoft Codefundo++ 2019 challenge (among 2000+ teams), and received the International Microsoft 'AI For Earth' Grant. My other interests include Gaming, Augmented Reality, and Bioinformatics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Life Trajectory Timeline - Modern Vertical & Alternating */}
          <div className="w-full mt-16">
            <h2 className="text-2xl font-bold text-white mb-10 text-center tracking-wide">The Adventure Timeline</h2>
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-400 to-green-400 opacity-70 z-0" style={{transform: 'translateX(-50%)'}}></div>
              {/* Timeline Events (Reversed Order) */}
              <div className="flex flex-col gap-16">
                 {/* Riot Games Internship (2025) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2 flex justify-end pr-8">
                    <motion.div initial={{opacity:0, x:-40}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}} className="text-right">
                      <div className="flex flex-col items-end">
                        <div className="bg-white rounded-full p-2 shadow-lg mb-2 border-2 border-red-500 overflow-hidden">
                          <img src="/riot-games.jpg" alt="Riot Games Logo" className="w-16 h-16 object-contain rounded-full" />
                        </div>
                        <div className="bg-red-700 text-white px-4 py-2 rounded-lg shadow-md font-semibold text-lg mb-1">2025 Summer</div>
                        <div className="text-gray-200 text-base font-medium">Riot Games</div>
                        <div className="text-gray-400 text-sm">Research Scientist Intern - Generative AI</div>
                      </div>
                    </motion.div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-red-500 border-4 border-white rounded-full z-10 shadow-lg" style={{transform:'translate(-50%,-50%)'}}></div>
                  <div className="w-1/2"></div>
                </div>

                {/* UC San Diego (2024–Now) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-green-400 border-4 border-white rounded-full z-10 shadow-lg" style={{transform:'translate(-50%,-50%)'}}></div>
                  <div className="w-1/2 flex justify-start pl-8">
                    <motion.div initial={{opacity:0, x:40}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}} className="text-left">
                      <div className="flex flex-col items-start">
                        <div className="bg-white rounded-full p-2 shadow-lg mb-2 border-2 border-green-400">
                          <img src="/University_of_California_San_Diego.avif" alt="UCSD Seal" className="w-16 h-16 object-contain rounded-lg" />
                        </div>
                        <div className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-md font-semibold text-lg mb-1">2024–Now</div>
                        <div className="text-gray-200 text-base font-medium">UC San Diego</div>
                        <div className="text-gray-400 text-sm">MS-CSE, AI Specialization</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Walmart (2021-2024) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2 flex justify-end pr-8">
                    <motion.div initial={{opacity:0, x:-40}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}} className="text-right">
                      <div className="flex flex-col items-end">
                        <div className="bg-white rounded-full p-2 shadow-lg mb-2 border-2 border-blue-400">
                          <img src="/Walmart_logo.png" alt="Walmart Logo" className="w-16 h-16 object-contain" />
                        </div>
                        <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md font-semibold text-lg mb-1">2021–2024</div>
                        <div className="text-gray-200 text-base font-medium">Walmart Global Tech</div>
                        <div className="text-gray-400 text-sm">Data Scientist III</div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-blue-400 border-4 border-white rounded-full z-10 shadow-lg" style={{transform:'translate(-50%,-50%)'}}></div>
                  <div className="w-1/2"></div>
                </div>
                {/* Hyperverge Internship (2019) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full z-10 shadow-lg" style={{transform:'translate(-50%,-50%)'}}></div>
                  <div className="w-1/2 flex justify-start pl-8">
                    <motion.div initial={{opacity:0, x:40}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}} className="text-left">
                      <div className="flex flex-col items-start">
                        <div className="bg-white rounded-full p-1 shadow-lg mb-2 border-2 border-yellow-400">
                          <img src="/hyperverge-logo.webp" alt="Hyperverge Logo" className="w-10 h-10 object-contain" />
                        </div>
                        <div className="bg-yellow-700 text-white px-3 py-1 rounded shadow text-sm font-semibold mb-1">2019</div>
                        <div className="text-gray-300 text-sm">Intern, Hyperverge</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* IIT Madras (2017-2021) */}
                <div className="flex items-center w-full relative group">
                  <div className="w-1/2 flex justify-end pr-8">
                    <motion.div initial={{opacity:0, x:-40}} whileInView={{opacity:1, x:0}} transition={{duration:0.6}} viewport={{once:true}} className="text-right">
                      <div className="flex flex-col items-end">
                        <div className="bg-white rounded-full p-2 shadow-lg mb-2 border-2 border-purple-400">
                          <img src="/bg_removed.avif" alt="IIT Madras Logo" className="w-16 h-16 object-contain" />
                        </div>
                        <div className="bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md font-semibold text-lg mb-1">2017–2021</div>
                        <div className="text-gray-200 text-base font-medium">IIT Madras</div>
                        <div className="text-gray-400 text-sm">B.Tech, Electrical Engineering</div>
                      </div>
                    </motion.div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-purple-500 border-4 border-white rounded-full z-10 shadow-lg" style={{transform:'translate(-50%,-50%)'}}></div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
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
          
          {/* Featured Project - Minecraft */}
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
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Collaborating Action by Action: A Multi-agent LLM Framework for Embodied Reasoning
                </h2>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold whitespace-nowrap">
                  NeurIPS 2025
                </span>
              </div>
              
              <p className="text-gray-300 mb-4 text-base md:text-lg">
                This research project, conducted as part of my MS Research under Prof. Lianhui Qin at UC San Diego, 
                explores multi-agent collaboration in complex environments like Minecraft. The work has been accepted 
                at NeurIPS 2025.
              </p>
              
              <p className="text-gray-300 mb-5 text-base md:text-lg">
                The framework enables multiple AI agents to reason, plan, and work together through peer-peer collaboration 
                tasks that test different aspects of collaborative reasoning such as sharing resources, skill sets, expertise, 
                and information. We leveraged the efficient function calling abilities of LLMs to ground the agents in the 
                world of Minecraft by creating custom tools, and conducted comparative evaluations of contemporary language 
                models, highlighting success rates across tasks and providing insights into multi-agent collaboration efficiencies.
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
                  href="https://github.com/kolbytn/mindcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-400 hover:underline"
                >
                  <FaGithub className="mr-1" /> GitHub Repository
                </a>
                <a
                  href="https://arxiv.org/abs/2504.17950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-400 hover:underline"
                >
                  <FaExternalLinkAlt className="mr-1" /> View Paper
                </a>
              </div>
            </div>
          </motion.div>

          {/* Featured Project - PowerPoint MCP Server */}
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
                src="https://www.youtube.com/embed/5p24Vr36py8"
                title="PowerPoint MCP Server - Fourier Transform Presentation Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Open Source PowerPoint MCP Server
              </h2>
              
              <p className="text-gray-300 mb-5 text-base md:text-lg">
                A powerful Model Context Protocol (MCP) server for PowerPoint automation that enables AI assistants 
                like Claude to create, read, and edit presentations in real-time. Features template-first design, 
                bidirectional COM automation, LaTeX equation rendering, HTML-style formatting, and controllable animations. 
                Unlike write-only libraries, this provides true real-time editing capabilities with multimodal slide analysis.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                <ul className="text-left text-gray-300 space-y-2">
                  <li>✨ <strong>Template-first design</strong> - Works seamlessly with corporate templates</li>
                  <li>🔄 <strong>Bidirectional & real-time</strong> - Read and edit existing presentations without closing them</li>
                  <li>📊 <strong>Multimodal slide analysis</strong> - Visual screenshots + detailed text/chart/table extraction</li>
                  <li>🔬 <strong>LaTeX rendering</strong> - Built-in support for scientific equations and formulas</li>
                  <li>🎨 <strong>HTML-style formatting</strong> - Bold, italic, colors, bullet points that actually work</li>
                  <li>🎬 <strong>Animations</strong> - Controllable PowerPoint animations with progressive disclosure</li>
                  <li>⚡ <strong>One-line install</strong> - <code className="text-sm bg-gray-700 px-1 rounded">claude mcp add powerpoint -- uvx powerpoint-mcp</code></li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Real Workflows</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold text-white">Research + Create</h4>
                    <p className="text-sm text-gray-300">Researches topics and builds decks with citations automatically.</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold text-white">Data Analysis + Visualization</h4>
                    <p className="text-sm text-gray-300">Analyzes datasets and creates free-form Python plots directly on slides.</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold text-white">Codebase Documentation</h4>
                    <p className="text-sm text-gray-300">Reads local files to understand structure and generates architecture presentations.</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold text-white">Template-Driven Decks</h4>
                    <p className="text-sm text-gray-300">Populates corporate templates with data from CSVs or other sources.</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold text-white">Academic LaTeX Heavy</h4>
                    <p className="text-sm text-gray-300">Creates lecture slides with complex mathematical equations rendered via LaTeX.</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold text-white">Interactive Learning</h4>
                    <p className="text-sm text-gray-300">Turns presentations into interactive tutors that explain slides and quiz users.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">
                  MCP Server
                </span>
                <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">
                  AI Automation
                </span>
                <span className="px-3 py-1 bg-green-900 text-green-200 rounded-full text-sm">
                  PowerPoint
                </span>
                 <span className="px-3 py-1 bg-red-900 text-red-200 rounded-full text-sm">
                   COM Automation
                 </span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Ayushmaniar/powerpoint-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-400 hover:underline"
                >
                  <FaGithub className="mr-1" /> GitHub Repository
                </a>
                <a
                  href="https://youtu.be/5p24Vr36py8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-400 hover:underline"
                >
                  <FaExternalLinkAlt className="mr-1" /> Demo Video
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* More Projects Coming Soon */}
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-white mb-2">More Projects Coming Soon</h2>
            <p className="text-gray-400">
              I'm working on adding more of my projects here. Check back soon!
            </p>
          </div>
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
