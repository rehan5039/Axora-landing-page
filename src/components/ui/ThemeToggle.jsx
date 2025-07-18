import React from 'react';
import { useTheme } from '@/lib/utils.jsx';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full p-2 flex items-center justify-center transition-colors ${
        theme === 'dark' 
          ? 'bg-primary/10 text-primary border border-primary/30' 
          : 'bg-secondary/20 text-secondary border border-secondary/30'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
} 