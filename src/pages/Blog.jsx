import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from '@/lib/utils.jsx';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileMenu } from '@/components/ui/MobileMenu';
import { Clock, Heart, Wind, Compass, Sun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import allBlogPosts, { getPostsByCategory } from '@/blogs';

export default function Blog() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Posts', icon: <Compass className="w-5 h-5" /> },
    { id: 'meditation-tips', name: 'Meditation Tips', icon: <Clock className="w-5 h-5" /> },
    { id: 'mindfulness', name: 'Mindfulness Techniques', icon: <Sun className="w-5 h-5" /> },
    { id: 'breathing', name: 'Breathing Exercises', icon: <Wind className="w-5 h-5" /> },
    { id: 'guided-meditation', name: 'Guided vs Unguided', icon: <Compass className="w-5 h-5" /> },
    { id: 'daily-habits', name: 'Daily Habits', icon: <Heart className="w-5 h-5" /> },
  ];
  
  const filteredPosts = getPostsByCategory(selectedCategory);
  
  return (
    <>
      <Helmet>
        <title>Blog - Axora Meditation</title>
        <meta name="description" content="Explore articles on meditation, mindfulness, breathing exercises, and more to enhance your meditation practice." />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
              <span className="text-primary">★</span>
              <span>xora</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:text-primary transition-colors hidden md:block">Home</Link>
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </header>
        
        {/* Blog Header */}
        <div className={`py-16 ${
          theme === 'dark' ? 'bg-primary/5' : 'bg-secondary/5'
        }`}>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Axora Blog</h1>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              Insights and guides to deepen your meditation practice and bring mindfulness into everyday life.
            </p>
          </div>
        </div>
        
        {/* Categories */}
        <div className="border-b border-border sticky top-0 bg-background z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="overflow-x-auto">
              <div className="flex space-x-2 py-4 min-w-max">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-colors ${
                      selectedCategory === category.id 
                        ? theme === 'dark'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                        : theme === 'dark'
                          ? 'hover:bg-primary/10'
                          : 'hover:bg-secondary/10'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Posts */}
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div 
                key={post.id}
                className={`rounded-lg overflow-hidden border transition-transform hover:scale-[1.02] ${
                  theme === 'dark' ? 'border-primary/10' : 'border-secondary/10'
                }`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm opacity-70 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{categories.find(c => c.id === post.category)?.name}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="opacity-80 mb-4">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className={`inline-flex items-center font-medium ${
                      theme === 'dark' ? 'text-primary' : 'text-secondary'
                    } hover:underline`}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
        
        {/* Newsletter */}
        <section className={`py-16 ${
          theme === 'dark' ? 'bg-primary/10' : 'bg-secondary/10'
        }`}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Mindfulness Tips in Your Inbox</h2>
            <p className="opacity-80 mb-6">
              Subscribe to our newsletter for weekly meditation guidance, mindfulness tips, and exclusive content.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className={`flex-grow px-4 py-3 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-black/30 border-primary/30 focus:border-primary' 
                    : 'bg-white border-secondary/30 focus:border-secondary'
                } border outline-none`}
                required
              />
              <button 
                type="submit"
                className={`px-6 py-3 rounded-lg font-medium ${
                  theme === 'dark' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground'
                }`}
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs opacity-60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
        
        {/* Footer */}
        <footer className={`px-6 py-8 border-t ${
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
              <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
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