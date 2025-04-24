'use client';

import { useState, useEffect } from 'react';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex justify-center items-center p-10">
        <div className="w-full h-[600px] bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg max-w-10xl mx-auto">
      <div className="flex justify-center">
        <iframe 
          src={`${pdfUrl}#view=FitH`}
          className="w-full h-[60vw] max-h-[800px] min-h-[500px] sm:h-[600px] md:h-[700px] border-0 rounded-md shadow-md"
          style={{ maxWidth: '100%' }}
          title="Resume PDF Viewer"
        />
      </div>
      
      <div className="text-center mt-4">
        <a 
          href={pdfUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300 inline-block"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default PDFViewer;
