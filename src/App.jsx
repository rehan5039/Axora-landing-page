
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Play, Star, Users, Clock, Heart, Download, Smartphone, Globe, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileMenu } from '@/components/ui/MobileMenu';
import { UnderDevelopment } from '@/components/UnderDevelopment';
import { useTheme } from '@/lib/utils.jsx';

function App() {
  const { theme } = useTheme();
  const [showDemo, setShowDemo] = useState(false);
  
  // Prevent scrolling on the home page due to under development overlay
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  // Function to handle Start Meditating button click
  const handleStartMeditating = () => {
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
  };
  
  // Function to handle Watch Demo button click
  const handleWatchDemo = () => {
    setShowDemo(true);
  };
  
  // Function to close demo modal
  const closeDemo = () => {
    setShowDemo(false);
  };
  
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Guided Sessions",
      description: "From 3-minute breathing exercises to hour-long deep meditations"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Mindfulness Training",
      description: "Build lasting habits with our progressive mindfulness programs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Connect with fellow meditators on your journey to inner peace"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      text: "Axora transformed my daily routine. I'm calmer, more focused, and genuinely happier.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      text: "The guided meditations are perfect for beginners. I've been using it for 6 months now!",
      rating: 5
    },
    {
      name: "Emma Thompson",
      text: "Beautiful interface and amazing content. This app is a game-changer for stress relief.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Axora - Find Your Inner Peace Through Meditation</title>
        <meta name="description" content="Transform your life with Axora's guided meditation app. Reduce stress, improve focus, and discover inner peace with our expert-led sessions." />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* Navigation */}
        <nav className="relative z-10 p-6 border-b border-border">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold flex items-center space-x-2"
            >
              <span className="text-primary">★</span>
              <span>xora</span>
            </motion.div>
            
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden md:flex space-x-8"
              >
                <a href="#features" className="hover:text-primary transition-colors">Features</a>
                <a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a>
                <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
                <a href="#download" className="hover:text-primary transition-colors">Download</a>
              </motion.div>
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Find Your
                <span className="block text-primary">
                  Inner Peace
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto leading-relaxed">
                Transform your life with guided meditation sessions designed to reduce stress, 
                improve focus, and bring lasting calm to your daily routine.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button 
                  onClick={handleStartMeditating}
                  className={`group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl ${
                    theme === 'dark' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Start Meditating</span>
                  </div>
                </button>
                
                <button 
                  onClick={handleWatchDemo}
                  className={`border-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm ${
                    theme === 'dark' 
                      ? 'border-primary/30 text-primary hover:bg-primary/10' 
                      : 'border-secondary/30 text-secondary hover:bg-secondary/10'
                  }`}
                >
                  Watch Demo
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center items-center space-x-6 text-foreground/70"
              >
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold">4.9</span>
                </div>
                <div className="w-1 h-1 bg-foreground/30 rounded-full"></div>
                <span>Over 1M+ Downloads</span>
                <div className="w-1 h-1 bg-foreground/30 rounded-full"></div>
                <span>Featured by RR</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute top-20 left-10 w-20 h-20 rounded-full backdrop-blur-sm ${
              theme === 'dark' ? 'bg-primary/10' : 'bg-secondary/10'
            }`}
          ></motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className={`absolute top-40 right-20 w-16 h-16 rounded-full backdrop-blur-sm ${
              theme === 'dark' ? 'bg-secondary/10' : 'bg-primary/10'
            }`}
          ></motion.div>
        </section>

        {/* Demo Video Modal */}
        {showDemo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-background rounded-lg overflow-hidden">
              <button 
                onClick={closeDemo}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video w-full">
                <iframe 
                  src="https://www.youtube.com/embed/inpok4MKVLM?autoplay=1" 
                  title="Axora Meditation App Demo"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Axora Meditation App</h3>
                <p className="opacity-80">
                  Experience the calming interface and guided sessions of our meditation app. 
                  This demo shows the key features that help you build a consistent meditation practice.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        <section id="features" className={`px-6 py-20 ${
          theme === 'dark' ? 'bg-black/10' : 'bg-secondary/5'
        } backdrop-blur-sm`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Everything You Need for
                <span className="block text-primary">Mindful Living</span>
              </h2>
              <p className="text-xl opacity-80 max-w-2xl mx-auto">
                Discover powerful tools and techniques to cultivate peace, clarity, and well-being in your everyday life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`group rounded-2xl p-8 transition-all duration-300 border ${
                    theme === 'dark'
                      ? 'bg-black/20 border-primary/10 hover:border-primary/30'
                      : 'bg-white/50 border-secondary/10 hover:border-secondary/30'
                  }`}
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="opacity-80 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Loved by Millions
                <span className="block text-primary">Worldwide</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl p-8 border ${
                    theme === 'dark'
                      ? 'bg-black/20 border-primary/10'
                      : 'bg-white/50 border-secondary/10'
                  }`}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="opacity-80 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-foreground">— {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className={`px-6 py-20 ${
          theme === 'dark' ? 'bg-primary/10' : 'bg-secondary/10'
        } backdrop-blur-sm`}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Start Your Journey to
                <span className="block text-primary">Inner Peace Today</span>
              </h2>
              
              <p className="text-xl opacity-80 max-w-2xl mx-auto">
                Join millions who have transformed their lives with Axora. Download now and get your first week free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.rr.axora.axora"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 ${
                    theme === 'dark' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Android App</span>
                </motion.a>
                
                <motion.a
                  href="https://axora-we.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 backdrop-blur-sm flex items-center justify-center space-x-2 ${
                    theme === 'dark' 
                      ? 'border-primary/30 text-primary hover:bg-primary/10' 
                      : 'border-secondary/30 text-secondary hover:bg-secondary/10'
                  }`}
                >
                  <Globe className="w-5 h-5" />
                  <span>Web App</span>
                </motion.a>
              </div>

              <p className="text-sm opacity-70 flex items-center justify-center space-x-2">
                <span>Available on</span>
                <Smartphone className="w-4 h-4" />
                <span>Android and</span>
                <Globe className="w-4 h-4" />
                <span>Web</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`px-6 py-12 border-t ${
          theme === 'dark' ? 'border-primary/20 bg-black/20' : 'border-secondary/20 bg-black/5'
        } backdrop-blur-sm`}>
          <div className="max-w-7xl mx-auto text-center">
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
        
        {/* Under Development Overlay */}
        <UnderDevelopment />
      </div>
    </>
  );
}

export default App;
