import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResumeSection from '@/components/ResumeSection';
import SectionHeading from '@/components/SectionHeading';
import Timeline from '@/components/Timeline';
import YouTubeFacade from '@/components/YouTubeFacade';
import { aboutData } from '@/data/about';
import { projects } from '@/data/projects';
import { FaArrowDown, FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const contactItems = [
  { icon: FaEnvelope, title: 'Email', description: 'ayushmaniar70@gmail.com', link: 'mailto:ayushmaniar70@gmail.com' },
  { icon: FaLinkedin, title: 'LinkedIn', description: 'Connect with me on LinkedIn', link: 'https://www.linkedin.com/in/ayush-maniar' },
  { icon: FaGithub, title: 'GitHub', description: 'Explore open-source work', link: 'https://github.com/ayushmaniar' },
  { icon: FaTwitter, title: 'X / Twitter', description: 'Follow research and project updates', link: 'https://x.com/AyushManiar' },
];

const impactItems = [
  ['NeurIPS 2025', 'Multi-agent collaboration research'],
  ['$120M+', 'Business value created at Walmart'],
  ['Riot Games', 'Generative AI research internship'],
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ayush Maniar',
  url: 'https://ayushmaniar.github.io',
  jobTitle: 'AI Researcher and Builder',
  alumniOf: ['Indian Institute of Technology Madras', 'University of California San Diego'],
  sameAs: ['https://github.com/ayushmaniar', 'https://www.linkedin.com/in/ayush-maniar', 'https://x.com/AyushManiar'],
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-3 focus:text-black focus:font-black">Skip to content</a>
      <main id="main-content">
        <section className="flex items-center justify-center min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white border-b-8 border-black dark:border-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-black uppercase tracking-[0.18em] text-sm mb-5">AI researcher · agentic systems builder</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 border-4 border-black dark:border-white p-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] inline-block">
              Hi, I&apos;m Ayush Maniar
            </h1>
            <p className="text-xl sm:text-2xl font-bold max-w-3xl mx-auto mb-8">
              I build multi-agent AI systems, creative tools, and research that moves from idea to impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left mb-8">
              {impactItems.map(([label, detail]) => (
                <div key={label} className="border-2 border-black dark:border-white p-3">
                  <p className="font-black uppercase">{label}</p>
                  <p className="font-bold text-sm">{detail}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="px-8 py-3 border-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all flex items-center font-black uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">Explore Projects</a>
              <a href="#resume" className="px-8 py-3 border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center font-black uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">View Resume <FaArrowDown className="ml-2" /></a>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white border-b-8 border-black dark:border-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="About Me" />
            <div className="bg-white dark:bg-black border-4 border-black dark:border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="md:w-3/10 flex justify-center shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Ayush_Maniar_UCSD_ID_PIC.png" alt="Ayush Maniar" className="max-w-full h-auto w-56 md:w-64 border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]" />
                </div>
                <div className="md:w-7/10 max-w-none">
                  {aboutData.paragraphs.map((paragraph) => <p key={paragraph} className="mb-5 last:mb-0 text-black dark:text-white font-medium text-lg leading-relaxed text-left md:text-justify">{paragraph}</p>)}
                </div>
              </div>
            </div>
            <Timeline events={aboutData.timeline} />
          </div>
        </section>

        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white border-b-8 border-black dark:border-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeading title="Selected Projects" description="Research and development work in multi-agent AI and creative automation." />
            <div className="space-y-10">
              {projects.map((project) => (
                <article key={project.id} className="bg-white dark:bg-black border-4 border-black dark:border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] overflow-hidden">
                  <YouTubeFacade youtubeId={project.youtubeId} title={project.title} />
                  <div className="p-6 md:p-10">
                    <div className="flex items-center flex-wrap gap-3 mb-4">
                      <h3 className="text-2xl md:text-3xl font-black uppercase text-black dark:text-white">{project.title}</h3>
                      {project.badge && <span className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white font-black uppercase whitespace-nowrap">{project.badge}</span>}
                    </div>
                    {project.paragraphs.map((paragraph) => <p key={paragraph} className="text-black dark:text-white font-medium mb-4 text-base md:text-lg leading-relaxed">{paragraph}</p>)}
                    {project.features && <div className="mb-6"><h3 className="text-xl font-black uppercase mb-3">Key Features</h3><ul className="space-y-2">{project.features.map((feature) => <li key={feature.title} className="font-medium leading-relaxed"><strong>{feature.title}.</strong> {feature.description}{feature.code && <code className="block mt-2 max-w-full overflow-x-auto bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white px-2 py-1 text-sm">{feature.code}</code>}</li>)}</ul></div>}
                    {project.workflows && <div className="mb-8"><h3 className="text-xl font-black uppercase mb-3">Real Workflows</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{project.workflows.map((workflow) => <div key={workflow.id} className="border-4 border-black dark:border-white p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]"><h4 className="font-black uppercase">{workflow.title}</h4><p className="font-medium text-sm">{workflow.description}</p></div>)}</div></div>}
                    <div className="flex flex-wrap gap-2 mb-6">{project.tags.map((tag) => <span key={tag} className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white font-black uppercase text-sm">{tag}</span>)}</div>
                    <div className="flex flex-wrap gap-4">{project.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center border-4 border-black dark:border-white px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-black uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">{link.iconType === 'github' ? <FaGithub className="mr-2" /> : <FaExternalLinkAlt className="mr-2" />}{link.label}</a>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ResumeSection />

        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Get In Touch" description="Let&apos;s collaborate on research, build useful AI systems, or compare notes on data and games." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactItems.map(({ icon: Icon, title, description, link }) => <a key={title} href={link} target={link.startsWith('http') ? '_blank' : undefined} rel={link.startsWith('http') ? 'noopener noreferrer' : undefined} className="bg-white dark:bg-black border-4 border-black dark:border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] p-6 flex items-center hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all duration-200"><Icon className="text-3xl mr-4 shrink-0" aria-hidden="true" /><div><h3 className="text-2xl font-black uppercase tracking-tighter">{title}</h3><p className="font-bold">{description}</p></div></a>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}
