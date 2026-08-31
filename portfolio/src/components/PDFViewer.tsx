'use client';

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const getPageWidth = () => {
    if (!isClient) return 600;
    const padding = windowWidth < 768 ? 48 : 96;
    const maxWidth = 760;
    return Math.min(windowWidth - padding, maxWidth);
  };

  if (!isClient) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="w-full max-w-[800px] h-[800px] bg-white dark:bg-black border-4 border-black dark:border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="bg-white p-3 sm:p-4 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] overflow-x-hidden flex justify-center w-full max-w-[810px]">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="w-full h-[800px] flex items-center justify-center text-black font-black uppercase">
              Loading Resume...
            </div>
          }
          error={
            <div className="w-full h-[800px] flex items-center justify-center text-black font-black uppercase border-4 border-black">
              Failed to load PDF.
            </div>
          }
        >
          {Array.from(new Array(numPages || 0), (el, index) => (
            <div key={`page_${index + 1}`} className="mb-6 last:mb-0 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
              <Page
                pageNumber={index + 1}
                width={getPageWidth()}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="bg-white"
              />
            </div>
          ))}
        </Document>
      </div>

      <div className="text-center">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-300 flex items-center font-black uppercase shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)] active:translate-x-2 active:translate-y-2 active:shadow-none"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default PDFViewer;
