import React from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from '@/lib/utils.jsx';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileMenu } from '@/components/ui/MobileMenu';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  const { theme } = useTheme();
  
  return (
    <>
      <Helmet>
        <title>Terms of Service - Axora</title>
        <meta name="description" content="Terms of Service for Axora meditation app" />
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
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="text-sm text-foreground/70 mb-8">Last Updated: 7 May 2025</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">1. ACCEPTANCE OF TERMS</h2>
                <p className="opacity-90">
                  By accessing or using the Axora meditation and wellness app ("App", "we", "us", or "our"), 
                  you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
                  please do not use the App.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">2. USER ACCOUNTS</h2>
                <p className="opacity-90">
                  You may be required to create an account to access certain features. You agree to provide accurate, 
                  current, and complete information and to keep your account credentials secure. You are responsible 
                  for all activity under your account.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">3. USE OF THE APP</h2>
                <p className="mb-3 opacity-90">
                  The App is intended for personal, non-commercial use to support mindfulness, meditation, and general 
                  wellness. You agree not to:
                </p>
                <ul className="list-disc pl-5 space-y-1 opacity-90">
                  <li>Use the App for any unlawful or harmful purpose</li>
                  <li>Copy, modify, or distribute any part of the App without permission</li>
                  <li>Interfere with the operation or security of the App</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">4. SUBSCRIPTIONS & PAYMENTS</h2>
                <p className="opacity-90">
                  Some features may be available via subscription. By purchasing a subscription, you agree to the pricing, 
                  billing, and cancellation terms disclosed in the App. All payments are processed securely via our 
                  third-party payment provider.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">5. INTELLECTUAL PROPERTY</h2>
                <p className="opacity-90">
                  All content, features, and functionality in the App, including text, graphics, logos, audio, and code, 
                  are the property of Axora or its licensors and are protected by copyright and other laws.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">6. TERMINATION</h2>
                <p className="opacity-90">
                  We reserve the right to suspend or terminate your access at our discretion if you violate these Terms 
                  or engage in misuse. You may delete your account at any time through the app settings.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">7. LIMITATION OF LIABILITY</h2>
                <p className="opacity-90">
                  To the maximum extent permitted by law, Axora is not liable for any indirect, incidental, or consequential 
                  damages arising from your use of the App. The App is provided "as is" without warranties of any kind.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">8. PRIVACY</h2>
                <p className="opacity-90">
                  Your use of the App is also governed by our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>. 
                  Please review it to understand how we collect, use, and safeguard your information.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">9. MODIFICATIONS</h2>
                <p className="opacity-90">
                  We may update these Terms from time to time. If changes are material, we will notify you via the App or email. 
                  Continued use of the App after such changes constitutes acceptance of the new Terms.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-primary">10. CONTACT</h2>
                <p className="opacity-90">
                  If you have any questions or concerns about these Terms, please contact us at:
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