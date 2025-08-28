import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { useTheme } from '@/lib/utils.jsx';

export function LanguageToggle() {
  const { language, switchLanguage } = useLanguage();
  const { theme } = useTheme();
  
  const toggleLanguage = () => {
    switchLanguage(language === 'en' ? 'hi' : 'en');
  };
  
  return (
    <button
      onClick={toggleLanguage}
      className={`rounded-full px-3 py-2 flex items-center justify-center space-x-2 transition-colors text-sm font-medium ${
        theme === 'dark' 
          ? 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20' 
          : 'bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30'
      }`}
      aria-label={`Switch to ${language === 'en' ? 'Hinglish' : 'English'}`}
    >
      <Globe className="w-4 h-4" />
      <span className="font-semibold">
        {language === 'en' ? 'EN' : 'हि'}
      </span>
    </button>
  );
}
