import { Inter } from 'next/font/google';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 min-h-screen relative`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
