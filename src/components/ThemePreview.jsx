import React from 'react';
import { useTheme } from '@/lib/utils.jsx';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Sun, Moon } from 'lucide-react';

export function ThemePreview() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="w-full flex flex-col bg-background text-foreground">
      <header className="flex justify-between items-center p-4 border-b border-border">
        <button className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-xl font-bold">Theme Preview</h1>
        <ThemeToggle />
      </header>
      
      <div className="p-4 space-y-8">
        {/* Mode toggle section */}
        <div className="flex flex-col space-y-3">
          <div className={`inline-flex items-center rounded-full px-4 py-2 border w-fit
            ${theme === 'dark' 
              ? 'border-primary bg-transparent text-primary' 
              : 'border-secondary bg-transparent text-secondary'}`}
          >
            {theme === 'dark' ? (
              <div className="flex items-center space-x-2">
                <Moon className="h-5 w-5" />
                <span>Dark Mode</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Sun className="h-5 w-5" />
                <span>Light Mode</span>
              </div>
            )}
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={() => setTheme('light')}
              className={`flex items-center space-x-2 px-4 py-3 rounded-md 
                ${theme === 'light' 
                  ? 'bg-secondary text-secondary-foreground' 
                  : 'bg-gray-500 text-white'}`}
            >
              <Sun className="h-5 w-5" />
              <span>Light Mode</span>
            </button>
            
            <button
              onClick={() => setTheme('dark')}
              className={`flex items-center space-x-2 px-4 py-3 rounded-md 
                ${theme === 'dark' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-gray-600 text-white'}`}
            >
              <Moon className="h-5 w-5" />
              <span>Dark Mode</span>
            </button>
          </div>
        </div>
        
        {/* Primary colors section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Primary Colors</h2>
          <div className="flex space-x-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full"></div>
              <span className="mt-2">Gold</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary rounded-full"></div>
              <span className="mt-2">Green</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-background rounded-full border border-border"></div>
              <span className="mt-2">Background</span>
            </div>
          </div>
        </div>
        
        {/* Text highlighting section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Text Highlighting</h2>
          <div className="p-4 bg-background rounded-lg border border-border">
            <div className="text-highlighter-green mb-3">Text Highlighter</div>
            <div className="text-highlighter-blue mb-3">Text Highlighter</div>
            <div className="text-foreground font-bold text-3xl">Hello there</div>
          </div>
        </div>
        
        {/* Buttons section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <button 
              className={`py-3 px-6 rounded-md 
                ${theme === 'dark' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground'}`}
            >
              Elevated Button
            </button>
            <button 
              className={`py-3 px-6 rounded-md border 
                ${theme === 'dark' 
                  ? 'border-primary text-primary bg-transparent' 
                  : 'border-secondary text-secondary bg-transparent'}`}
            >
              Outlined Button
            </button>
            <button 
              className={`py-3 text-accent`}
            >
              Text Button
            </button>
          </div>
        </div>
        
        {/* Split view for light/dark comparison */}
        <div className="flex mt-8">
          <div className="w-1/2 bg-[#121c2b] p-4 rounded-l-lg">
            <div className="text-highlighter-green mb-3">Text Highlighter</div>
            <div className="text-highlighter-blue mb-3">Text Highlighter</div>
            <div className="text-white font-bold text-3xl">Hello there</div>
          </div>
          <div className="w-1/2 bg-[#f7f6f1] p-4 rounded-r-lg">
            <div className="text-[#4a7c6a] bg-[#4a7c6a]/20 px-2 py-1 rounded mb-3">Text Highlighter</div>
            <div className="text-blue-500 bg-blue-500/20 px-2 py-1 rounded mb-3">Text Highlighter</div>
            <div className="text-[#2e3b4e] font-bold text-3xl">Hello there</div>
          </div>
        </div>
      </div>
    </div>
  );
} 