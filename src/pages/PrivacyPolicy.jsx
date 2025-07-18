import React from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from '@/lib/utils.jsx';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileMenu } from '@/components/ui/MobileMenu';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const { theme } = useTheme();
  
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Axora</title>
        <meta name="description" content="Privacy Policy for Axora meditation app" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
              <span className="text-primary">★</span>
              <span>xora</span>
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </header>
        
        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className={`rounded-lg p-8 ${
            theme === 'dark' ? 'bg-black/20' : 'bg-white/50'
          } border ${
            theme === 'dark' ? 'border-primary/10' : 'border-secondary/10'
          }`}>
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-sm text-foreground/70 mb-8">Last Updated: 19 June 2025</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">1. INTRODUCTION</h2>
                <p className="opacity-90">
                  Welcome to Axora ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our meditation 
                  and wellness application. Axora is a product by Risewell Labs.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">2. INFORMATION WE COLLECT</h2>
                
                <h3 className="text-lg font-semibold mt-4 mb-2">2.1 Personal Information</h3>
                <ul className="list-disc pl-5 space-y-1 opacity-90">
                  <li>
                    <span className="font-medium">Account Information:</span> Email address, name, and authentication data when you create an account
                  </li>
                  <li>
                    <span className="font-medium">Profile Information:</span> Meditation preferences, progress, and wellness goals
                  </li>
                  <li>
                    <span className="font-medium">Device Information:</span> Device type, operating system, and unique device identifiers
                  </li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-4 mb-2">2.2 Usage Information</h3>
                <p className="opacity-90">
                  <span className="font-medium">Usage Data:</span> Includes meditation session duration, frequency, features used, preferences selected, 
                  time spent in the app, and consistency tracking metrics.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">3. HOW WE USE YOUR INFORMATION</h2>
                <p className="mb-2 opacity-90">We use your information to:</p>
                <ul className="list-disc pl-5 space-y-1 opacity-90">
                  <li>Provide and personalize your meditation experience</li>
                  <li>Synchronize your data across devices</li>
                  <li>Track your meditation progress and journey</li>
                  <li>Improve and optimize our application</li>
                  <li>Send notifications related to your meditation practice</li>
                  <li>Ensure the security of your account</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">4. DATA STORAGE AND SECURITY</h2>
                <p className="opacity-90">
                  Your data is stored securely on Firebase servers with industry-standard security measures. We implement appropriate 
                  technical and organizational measures to protect your personal information.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">5. DATA SHARING</h2>
                <p className="opacity-90">
                  We do not sell your personal information to third parties. We may share data with:
                </p>
                <ul className="list-disc pl-5 space-y-1 opacity-90">
                  <li>Service providers that help us operate our application (subject to confidentiality agreements)</li>
                  <li>If required by law or to protect our legal rights</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">6. YOUR CHOICES AND RIGHTS</h2>
                <p className="mb-2 opacity-90">You have the right to:</p>
                <ul className="list-disc pl-5 space-y-1 opacity-90">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of certain data collection</li>
                  <li>Control notification settings within the app</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">7. MISUSE & USER RESPONSIBILITY</h2>
                <p className="opacity-90">
                  Users are solely responsible for their behaviour and interactions within the app. Axora disclaims any liability for misuse, 
                  unlawful activities, or violations of third-party rights committed by users. Any abuse or violation of terms may lead to 
                  restricted access or account termination.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">8. CHILDREN'S PRIVACY</h2>
                <p className="opacity-90">
                  Our application is not directed to children under 13. We do not knowingly collect personal information from children under 13.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">9. CHANGES TO THIS POLICY</h2>
                <p className="opacity-90">
                  We may update this Privacy Policy periodically. We will notify you of significant changes through the app or by email.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">10. CONTACT US</h2>
                <p className="opacity-90">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-2 font-medium">Email: <a href="mailto:axora.app@gmail.com" className="text-primary hover:underline">axora.app@gmail.com</a></p>
              </section>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className={`px-6 py-8 border-t ${
          theme === 'dark' ? 'border-primary/20 bg-black/20' : 'border-secondary/20 bg-black/5'
        } backdrop-blur-sm`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-2xl font-bold mb-4 flex justify-center items-center space-x-2">
              <span className="text-primary">★</span>
              <span>xora</span>
            </div>
            <p className={`mb-6 ${theme === 'dark' ? 'text-primary/80' : 'text-secondary/80'}`}>
              Bringing peace and mindfulness to your daily life
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm opacity-70">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="/support" className="hover:text-primary transition-colors">Support</a>
              <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 