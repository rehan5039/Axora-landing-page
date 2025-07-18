import React from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from '@/lib/utils.jsx';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileMenu } from '@/components/ui/MobileMenu';
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostById, getRelatedPosts } from '@/blogs';

export default function BlogPost() {
  const { theme } = useTheme();
  const { id } = useParams();
  
  // Get the blog post data from our blogs folder
  const post = getBlogPostById(Number(id));
  
  // Get related posts
  const relatedPosts = getRelatedPosts(Number(id));
  
  // If post not found, show error
  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <Link 
            to="/blog" 
            className={`inline-flex items-center ${
              theme === 'dark' ? 'text-primary' : 'text-secondary'
            } hover:underline`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{post.title} - Axora Blog</title>
        <meta name="description" content={post.excerpt} />
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
              <Link to="/blog" className="hover:text-primary transition-colors hidden md:block">Blog</Link>
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </header>
        
        {/* Back to Blog */}
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            to="/blog" 
            className={`inline-flex items-center ${
              theme === 'dark' ? 'text-primary' : 'text-secondary'
            } hover:underline`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to Blog</span>
          </Link>
        </div>
        
        {/* Blog Post */}
        <article className="max-w-4xl mx-auto px-4 pb-16">
          {/* Post Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 opacity-70" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 opacity-70" />
                <span className="text-sm">{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2 opacity-70" />
                <span className="text-sm">{post.category}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-sm opacity-70">{post.authorRole}</div>
              </div>
            </div>
          </header>
          
          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto"
            />
          </div>
          
          {/* Post Content */}
          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share */}
          <div className="mt-12 pt-6 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="font-medium">Share this article:</div>
              <div className="flex space-x-4">
                <button className="p-2 rounded-full hover:bg-primary/10">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className={`py-12 ${
            theme === 'dark' ? 'bg-primary/5' : 'bg-secondary/5'
          }`}>
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className={`rounded-lg overflow-hidden border transition-transform hover:scale-[1.02] bg-background ${
                      theme === 'dark' ? 'border-primary/10' : 'border-secondary/10'
                    }`}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{relatedPost.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Newsletter */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Enjoyed this article?</h2>
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
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
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