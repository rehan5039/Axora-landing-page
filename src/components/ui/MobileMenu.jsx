import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/lib/utils.jsx';

export function MobileMenu() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-border">
              <Link 
                to="/" 
                className="text-2xl font-bold flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-primary">★</span>
                <span>xora</span>
              </Link>
              <button 
                onClick={toggleMenu}
                className="p-2 focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                to="/#features" 
                className="py-2 px-4 hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/#testimonials" 
                className="py-2 px-4 hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                to="/blog" 
                className="py-2 px-4 hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/#download" 
                className="py-2 px-4 hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Download
              </Link>
              <div className="border-t border-border my-2"></div>
              <Link 
                to="/support" 
                className="py-2 px-4 hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Support
              </Link>
              <Link 
                to="/contact" 
                className="py-2 px-4 hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/privacy-policy" 
                className="py-2 px-4 hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="py-2 px-4 hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Terms of Service
              </Link>
            </div>
            
            <div className="mt-auto p-4 border-t border-border">
              <button 
                onClick={() => {
                  // Detect if user is on mobile or desktop
                  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                  
                  if (isMobile) {
                    // If on Android, open Play Store
                    if (/Android/i.test(navigator.userAgent)) {
                      window.open('https://play.google.com/store/apps/details?id=com.rr.axora.axora', '_blank');
                    } else {
                      // For other mobile devices, open web app
                      window.open('https://axora-we.web.app/', '_blank');
                    }
                  } else {
                    // If on desktop, open web app
                    window.open('https://axora-we.web.app/', '_blank');
                  }
                  setIsOpen(false);
                }}
                className={`w-full py-3 px-6 rounded-full font-semibold text-lg transition-all ${
                  theme === 'dark' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}
              >
                Start Meditating
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 