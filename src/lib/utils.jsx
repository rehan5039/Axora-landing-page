import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState, createContext, useContext } from 'react';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

// Theme context and provider
export const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check if user has previously set theme
    if (typeof localStorage !== 'undefined') {
      const storedTheme = localStorage.getItem('axora-theme');
      if (storedTheme) {
        return storedTheme;
      }
    }
    
    // Check user's system preference
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    
    return 'light'; // Default theme
  });
  
  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('axora-theme', theme);
    
    // Update document class for tailwind dark mode
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook to use the theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 