"use client";

import { createContext, useContext, useEffect, useState, useMemo } from 'react';

type Theme = "light" | "dark";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // State to hold the current theme. Initialize with a value that won't cause mismatch.
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // This code runs only on the client, after hydration.
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = storedTheme || preferredTheme;
    setTheme(initialTheme);
  }, []);
  
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const value = useMemo(() => ({
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    },
    toggleTheme,
  }), [theme]);

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
