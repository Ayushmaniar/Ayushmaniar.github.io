'use client';

import ThemeProvider from '@/components/ThemeProvider';
import { useEffect, useState } from 'react';

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // After hydration, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // During client-side rendering and before hydration, show loading state
    return <div className="animate-pulse">Loading...</div>;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
}
