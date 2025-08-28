import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from '@/lib/utils.jsx';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileMenu } from '@/components/ui/MobileMenu';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <>
      <Helmet>
        <title>Contact Us - Axora</title>
        <meta name="description" content="Contact Axora meditation app team" />
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
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="opacity-90 mb-8">
              We'd love to hear from you! Whether you have a question about our app, 
              need technical support, or want to share your meditation journey, please 
              reach out using the form below.
            </p>
            
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Form */}
              <div className="md:col-span-3">
                {submitted ? (
                  <div className={`p-6 rounded-lg text-center ${
                    theme === 'dark' ? 'bg-primary/10' : 'bg-secondary/10'
                  }`}>
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      theme === 'dark' ? 'bg-primary/20' : 'bg-secondary/20'
                    }`}>
                      <Send className={`w-8 h-8 ${theme === 'dark' ? 'text-primary' : 'text-secondary'}`} />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Message Sent!</h2>
                    <p className="opacity-90">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className={`mt-6 px-4 py-2 rounded-md ${
                        theme === 'dark' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 rounded-md border ${
                          theme === 'dark' 
                            ? 'bg-black/30 border-primary/30 focus:border-primary' 
                            : 'bg-white/70 border-secondary/30 focus:border-secondary'
                        } outline-none transition-colors`}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 rounded-md border ${
                          theme === 'dark' 
                            ? 'bg-black/30 border-primary/30 focus:border-primary' 
                            : 'bg-white/70 border-secondary/30 focus:border-secondary'
                        } outline-none transition-colors`}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 rounded-md border ${
                          theme === 'dark' 
                            ? 'bg-black/30 border-primary/30 focus:border-primary' 
                            : 'bg-white/70 border-secondary/30 focus:border-secondary'
                        } outline-none transition-colors`}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className={`w-full p-3 rounded-md border ${
                          theme === 'dark' 
                            ? 'bg-black/30 border-primary/30 focus:border-primary' 
                            : 'bg-white/70 border-secondary/30 focus:border-secondary'
                        } outline-none transition-colors`}
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 rounded-full font-medium flex items-center justify-center space-x-2 ${
                        theme === 'dark' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary text-secondary-foreground'
                      } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                    >
                      <Send className="w-5 h-5" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </div>
              
              {/* Contact Info */}
              <div className="md:col-span-2 space-y-6">
                <div className={`p-6 rounded-lg border ${
                  theme === 'dark' ? 'border-primary/20' : 'border-secondary/20'
                }`}>
                  <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className={`w-5 h-5 mt-1 ${theme === 'dark' ? 'text-primary' : 'text-secondary'}`} />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:support@axora.life" className="opacity-90 hover:underline">
                          support@axora.life
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className={`w-5 h-5 mt-1 ${theme === 'dark' ? 'text-primary' : 'text-secondary'}`} />
                      <div>
                        <p className="font-medium">Company</p>
                        <p className="opacity-90">Risewell Labs</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg ${
                  theme === 'dark' ? 'bg-primary/10' : 'bg-secondary/10'
                }`}>
                  <h2 className="text-xl font-bold mb-2">Response Time</h2>
                  <p className="opacity-90">
                    We aim to respond to all inquiries within 24-48 hours during business days.
                  </p>
                </div>
                
                <div className={`p-6 rounded-lg border ${
                  theme === 'dark' ? 'border-primary/20' : 'border-secondary/20'
                }`}>
                  <h2 className="text-xl font-bold mb-2">Support Hours</h2>
                  <p className="opacity-90">
                    Monday - Friday<br />
                    9:00 AM - 5:00 PM EST
                  </p>
                </div>
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