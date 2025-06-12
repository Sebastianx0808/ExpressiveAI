import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb, Sparkles } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "Why Arts and Social Sciences Deserve AI",
    excerpt: "Exploring how artificial intelligence can enhance creativity and critical thinking in humanities disciplines without diminishing their essential human elements.",
    author: "Dr. Sarah Chen",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "AI Ethics",
    image: "https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg",
    featured: true
  };

  const blogPosts = [
    {
      title: "Building Ethical AI for the Creative Class",
      excerpt: "Our framework for developing AI tools that respect and enhance human creativity rather than replacing it.",
      author: "Prof. Michael Rodriguez",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Product Development",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
    },
    {
      title: "From CV to Identity: Why Portfolios Matter",
      excerpt: "How digital portfolios are transforming professional representation in academia and creative fields.",
      author: "Dr. Emily Watson",
      date: "January 5, 2025",
      readTime: "5 min read",
      category: "Digital Identity",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
    },
    {
      title: "Business Analysis with GPT: 2025 & Beyond",
      excerpt: "The future of AI-powered business intelligence and strategic analysis in the modern workplace.",
      author: "Dr. Sarah Chen",
      date: "December 28, 2024",
      readTime: "7 min read",
      category: "Business Intelligence",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
    },
    {
      title: "AI Lesson Plans That Don't Feel Robotic",
      excerpt: "Creating educational content with AI while maintaining the human touch that makes learning engaging.",
      author: "Dr. Emily Watson",
      date: "December 20, 2024",
      readTime: "6 min read",
      category: "Education",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
    },
    {
      title: "The Future of Human-AI Collaboration",
      excerpt: "Exploring new models of partnership between human intelligence and artificial intelligence.",
      author: "Prof. Michael Rodriguez",
      date: "December 15, 2024",
      readTime: "9 min read",
      category: "AI Research",
      image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg"
    },
    {
      title: "Democratizing AI for Non-Technical Users",
      excerpt: "Making sophisticated AI tools accessible to professionals without technical backgrounds.",
      author: "Dr. Sarah Chen",
      date: "December 8, 2024",
      readTime: "5 min read",
      category: "User Experience",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
    }
  ];

  const categories = [
    { name: "All Posts", count: 7, icon: <BookOpen className="h-4 w-4" /> },
    { name: "AI Ethics", count: 1, icon: <Lightbulb className="h-4 w-4" /> },
    { name: "Product Development", count: 1, icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Education", count: 1, icon: <BookOpen className="h-4 w-4" /> },
    { name: "Business Intelligence", count: 1, icon: <TrendingUp className="h-4 w-4" /> },
  ];

  return (
    <div className="py-20 gradient-bg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <Sparkles className="h-12 w-12 text-accent-blue-600 dark:text-accent-blue-400 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-cool-slate-900 dark:text-white mb-6">
              Insights & <span className="gradient-text">Thought Leadership</span>
            </h1>
            <p className="text-xl text-cool-slate-600 dark:text-cool-slate-300">
              Exploring the intersection of AI, humanities, business, and education. Insights from our team and the broader community of expressive AI practitioners.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="glass-card overflow-hidden mb-12 hover-lift group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="glass bg-soft-coral-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-cool-slate-500 dark:text-cool-slate-400 mb-4">
                    <span className="glass bg-accent-blue-500/20 text-accent-blue-800 dark:text-accent-blue-300 px-2 py-1 rounded">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-cool-slate-900 dark:text-white mb-4 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">
                    <Link to="#">{featuredPost.title}</Link>
                  </h2>
                  <p className="text-cool-slate-600 dark:text-cool-slate-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-cool-slate-400" />
                      <span className="text-sm text-cool-slate-600 dark:text-cool-slate-300">{featuredPost.author}</span>
                    </div>
                    <Link 
                      to="#"
                      className="text-accent-blue-600 dark:text-accent-blue-400 font-semibold hover:text-accent-blue-700 dark:hover:text-accent-blue-300 transition-colors flex items-center group"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="glass-card overflow-hidden hover-lift group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-xs text-cool-slate-500 dark:text-cool-slate-400 mb-3">
                      <span className="glass bg-cool-slate-100/50 dark:bg-cool-slate-700/50 text-cool-slate-700 dark:text-cool-slate-300 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-cool-slate-900 dark:text-white mb-3 group-hover:text-accent-blue-600 dark:group-hover:text-accent-blue-400 transition-colors line-clamp-2">
                      <Link to="#">{post.title}</Link>
                    </h3>
                    <p className="text-cool-slate-600 dark:text-cool-slate-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-3 w-3 text-cool-slate-400" />
                        <span className="text-xs text-cool-slate-600 dark:text-cool-slate-300">{post.author}</span>
                      </div>
                      <Link 
                        to="#"
                        className="text-accent-blue-600 dark:text-accent-blue-400 font-semibold hover:text-accent-blue-700 dark:hover:text-accent-blue-300 transition-colors text-sm flex items-center group"
                      >
                        Read
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-cool-slate-900 dark:text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="flex items-center justify-between p-2 rounded-lg hover:glass hover:bg-white/20 dark:hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-cool-slate-400 dark:text-cool-slate-500 group-hover:text-accent-blue-600 dark:group-hover:text-accent-blue-400 transition-colors">
                          {category.icon}
                        </span>
                        <span className="text-cool-slate-700 dark:text-cool-slate-300 group-hover:text-accent-blue-600 dark:group-hover:text-accent-blue-400 transition-colors">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-sm text-cool-slate-500 dark:text-cool-slate-400">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="glass-card p-6 bg-gradient-to-br from-accent-blue-600/90 to-soft-coral-500/90 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Get the latest insights on AI, education, and creative technology delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="glass-input w-full text-cool-slate-900 placeholder-cool-slate-500"
                    />
                    <button className="w-full glass-button bg-white/20 text-white hover:bg-white/30">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-cool-slate-900 dark:text-white mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['AI Ethics', 'Education', 'Creativity', 'Business Strategy', 'Research', 'Portfolio', 'GPT', 'Academic Writing'].map((tag, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="glass px-3 py-1 text-cool-slate-700 dark:text-cool-slate-300 rounded-full text-sm hover:bg-accent-blue-500/20 hover:text-accent-blue-700 dark:hover:text-accent-blue-300 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;