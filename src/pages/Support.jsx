import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from '@/lib/utils.jsx';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileMenu } from '@/components/ui/MobileMenu';
import { ChevronDown, Mail, MessageCircle, BookOpen, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Support() {
  const { theme } = useTheme();
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  const faqs = [
    {
      question: "How do I get started with meditation?",
      answer: "Start with our beginner-friendly guided sessions. We recommend the 'Introduction to Mindfulness' program, which provides step-by-step guidance for new meditators. Begin with just 3-5 minutes daily and gradually increase the duration as you become more comfortable."
    },
    {
      question: "Can I download meditations for offline use?",
      answer: "Yes! Premium subscribers can download meditation sessions for offline listening. Simply tap the download icon next to any meditation to save it to your device."
    },
    {
      question: "How do I track my meditation progress?",
      answer: "Your meditation journey is automatically tracked in the 'Progress' tab. You'll see statistics like total meditation time, session streaks, and consistency patterns. You can also add notes after each session to record your experiences."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can manage your subscription through your Google Play account settings. Go to Google Play Store → Account → Subscriptions → Axora → Cancel subscription. Your premium access will continue until the end of your current billing period."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security seriously. All your personal information and meditation data is encrypted and stored securely. We never share your personal data with third parties without your consent. Please see our Privacy Policy for more details."
    },
    {
      question: "The app is crashing, what should I do?",
      answer: "First, try restarting the app. If the issue persists, ensure your app is updated to the latest version. You can also try clearing the app cache in your device settings. If problems continue, please contact our support team with details about your device model and operating system version."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Support - Axora</title>
        <meta name="description" content="Support and help for Axora meditation app" />
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
            <h1 className="text-3xl font-bold mb-6">Support Center</h1>
            <p className="opacity-90 mb-8">
              We're here to help you get the most out of your meditation practice with Axora. 
              Find answers to common questions below or reach out to our support team.
            </p>
            
            {/* Support Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className={`p-6 rounded-lg border ${
                theme === 'dark' ? 'border-primary/20' : 'border-secondary/20'
              } flex flex-col items-center text-center`}>
                <Mail className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-primary' : 'text-secondary'}`} />
                <h2 className="text-xl font-bold mb-2">Email Support</h2>
                <p className="opacity-80 mb-4">
                  Get personalized help from our dedicated support team.
                </p>
                <a 
                  href="mailto:axora.app@gmail.com" 
                  className={`px-4 py-2 rounded-md ${
                    theme === 'dark' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  Contact Support
                </a>
              </div>
              
              <div className={`p-6 rounded-lg border ${
                theme === 'dark' ? 'border-primary/20' : 'border-secondary/20'
              } flex flex-col items-center text-center`}>
                <BookOpen className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-primary' : 'text-secondary'}`} />
                <h2 className="text-xl font-bold mb-2">Knowledge Base</h2>
                <p className="opacity-80 mb-4">
                  Explore our guides and tutorials for in-depth assistance.
                </p>
                <a 
                  href="#faq" 
                  className={`px-4 py-2 rounded-md border ${
                    theme === 'dark' 
                      ? 'border-primary text-primary' 
                      : 'border-secondary text-secondary'
                  }`}
                >
                  View Articles
                </a>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div id="faq" className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <HelpCircle className="w-6 h-6 mr-2" />
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className={`border rounded-lg overflow-hidden ${
                      theme === 'dark' ? 'border-primary/20' : 'border-secondary/20'
                    }`}
                  >
                    <button
                      className={`w-full p-4 text-left font-medium flex justify-between items-center ${
                        openFaq === index 
                          ? theme === 'dark' ? 'bg-primary/10' : 'bg-secondary/10'
                          : ''
                      }`}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform ${
                          openFaq === index ? 'transform rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {openFaq === index && (
                      <div className="p-4 opacity-90 border-t border-border">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Still Need Help */}
            <div className={`mt-12 p-6 rounded-lg ${
              theme === 'dark' ? 'bg-primary/10' : 'bg-secondary/10'
            } text-center`}>
              <h2 className="text-xl font-bold mb-2">Still Need Help?</h2>
              <p className="opacity-90 mb-4">
                Our support team is available Monday through Friday, 9am-5pm EST.
                We typically respond within 24 hours.
              </p>
              <div className="flex justify-center">
                <a 
                  href="mailto:support@axora.life"
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full ${
                    theme === 'dark' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact Us</span>
                </a>
              </div>
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