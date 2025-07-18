import React from 'react';
import { useTheme } from '@/lib/utils.jsx';
import { Construction } from 'lucide-react';

export function UnderDevelopment() {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Semi-transparent overlay - lighter blur for better visibility */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px] pointer-events-auto"></div>
      
      {/* Banner */}
      <div 
        className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          px-8 py-6 rounded-lg shadow-xl pointer-events-auto
          ${theme === 'dark' ? 'bg-primary/90' : 'bg-secondary/90'}
          border-2 ${theme === 'dark' ? 'border-primary' : 'border-secondary'}
        `}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <Construction className="w-12 h-12" />
          <h2 className="text-2xl font-bold">Under Development</h2>
          <p className="max-w-md">
            This website is currently under development. 
            We're working hard to bring you a great experience soon!
          </p>
          <p className="text-sm opacity-80">
            © Axora - Expected launch July 2025
          </p>
        </div>
      </div>
    </div>
  );
} 