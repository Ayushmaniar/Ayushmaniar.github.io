import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import CustomCursor from '@/components/CustomCursor';
import ThemeProvider from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ayush Maniar | AI Researcher & Builder',
  description: 'Ayush Maniar is an AI researcher and builder working on multi-agent systems, agentic tools, and creative AI.',
  keywords: ['Ayush Maniar', 'AI researcher', 'multi-agent systems', 'agentic AI', 'PowerPoint MCP'],
  authors: [{ name: 'Ayush Maniar' }],
  metadataBase: new URL('https://ayushmaniar.github.io'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ayush Maniar | AI Researcher & Builder',
    description: 'Multi-agent systems, agentic tools, and creative AI.',
    url: 'https://ayushmaniar.github.io',
    siteName: 'Ayush Maniar',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ayush Maniar | AI Researcher & Builder',
    description: 'Multi-agent systems, agentic tools, and creative AI.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 min-h-screen relative`}>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
