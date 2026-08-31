'use client';

import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
  ssr: false,
  loading: () => <div className="w-full h-64 border-4 border-black dark:border-white animate-pulse" aria-label="Preparing resume preview" />,
});

export default function ResumeSection() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '500px 0px' });

  return (
    <section id="resume" ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white border-b-8 border-black dark:border-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12"><h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Resume</h2><div className="w-16 h-2 bg-black dark:bg-white mx-auto" /></div>
        {inView ? <PDFViewer pdfUrl="/Ayush_Maniar_Resume.pdf" /> : <a href="/Ayush_Maniar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="block text-center border-4 border-black dark:border-white p-8 font-black uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Open resume PDF</a>}
      </div>
    </section>
  );
}
