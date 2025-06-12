import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Settings, Beaker, MapPin, ExternalLink, Sparkles } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Portlify",
      description: "AI-powered digital portfolio builder from CVs",
      status: "live",
      statusText: "Live",
      icon: <CheckCircle className="h-6 w-6" />,
      features: ["CV to Portfolio Conversion", "Professional Templates", "SEO Optimization", "Custom Domains"],
      useCase: "Transform your CV into a stunning digital portfolio that showcases your academic achievements, research, and professional experience.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      link: "#"
    },
    {
      name: "Expressive Writer",
      description: "AI assistant for academic & research writing",
      status: "coming-soon",
      statusText: "Coming Soon",
      icon: <Clock className="h-6 w-6" />,
      features: ["Research Paper Assistance", "Citation Management", "Style Guide Compliance", "Peer Review Prep"],
      useCase: "Enhance your academic writing with AI that understands scholarly conventions, helping you craft compelling research papers and grant proposals.",
      image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg",
      link: "#"
    },
    {
      name: "BizIntellect",
      description: "AI for business analysis, strategy, market reports",
      status: "in-progress",
      statusText: "In Progress",
      icon: <Settings className="h-6 w-6" />,
      features: ["Market Analysis", "Strategic Planning", "Competitive Intelligence", "Financial Modeling"],
      useCase: "Make data-driven business decisions with AI-powered analysis that turns complex market data into actionable strategic insights.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      link: "#"
    },
    {
      name: "EduPlan AI",
      description: "AI co-pilot for lesson planning & classroom content",
      status: "prototype",
      statusText: "Prototype",
      icon: <Beaker className="h-6 w-6" />,
      features: ["Curriculum Design", "Assessment Creation", "Learning Objectives", "Student Engagement"],
      useCase: "Create engaging lesson plans and educational content that adapts to different learning styles and academic standards.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg",
      link: "#"
    },
    {
      name: "MarketMuse",
      description: "AI SEO + content generation for creative professionals",
      status: "planning",
      statusText: "Planning",
      icon: <MapPin className="h-6 w-6" />,
      features: ["Content Strategy", "SEO Optimization", "Creative Briefs", "Brand Voice"],
      useCase: "Build your creative brand online with AI-generated content that maintains your unique voice while optimizing for search and engagement.",
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
      link: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30';
      case 'coming-soon': return 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30';
      case 'in-progress': return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30';
      case 'prototype': return 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30';
      case 'planning': return 'bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30';
      default: return 'bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="py-20 gradient-bg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <Sparkles className="h-12 w-12 text-accent-blue-600 dark:text-accent-blue-400 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-cool-slate-900 dark:text-white mb-6">
              Tools Built for <span className="gradient-text">Thought</span>
            </h1>
            <p className="text-xl text-cool-slate-600 dark:text-cool-slate-300">
              Our AI-powered products are designed specifically for professionals in business, humanities, arts, and education. Each tool respects the nuance and creativity of human intelligence.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-12">
          {products.map((product, index) => (
            <div key={index} className="glass-card overflow-hidden hover-lift group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Product Image */}
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue-600/20 to-soft-coral-500/20"></div>
                </div>

                {/* Product Details */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-cool-slate-900 dark:text-white mb-2">
                        {product.name}
                      </h2>
                      <p className="text-lg text-cool-slate-600 dark:text-cool-slate-300 mb-4">
                        {product.description}
                      </p>
                    </div>
                    <span className={`glass px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(product.status)} flex items-center`}>
                      {product.icon}
                      <span className="ml-2">{product.statusText}</span>
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-2">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-cool-slate-600 dark:text-cool-slate-300">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-2">Use Case</h3>
                    <p className="text-cool-slate-600 dark:text-cool-slate-300">{product.useCase}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {product.status === 'live' ? (
                      <a
                        href={product.link}
                        className="glass-button bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 text-white hover:from-accent-blue-700 hover:to-soft-coral-600 hover-glow flex items-center justify-center group"
                      >
                        Try Now
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        to="/join"
                        className="glass-button bg-cool-slate-600 dark:bg-cool-slate-700 text-white hover:bg-cool-slate-700 dark:hover:bg-cool-slate-600 flex items-center justify-center"
                      >
                        Get Early Access
                      </Link>
                    )}
                    <Link
                      to="/contact"
                      className="glass-button border-2 border-cool-slate-300 dark:border-cool-slate-600 text-cool-slate-700 dark:text-cool-slate-300 hover:bg-cool-slate-50 dark:hover:bg-cool-slate-800 flex items-center justify-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="glass-card p-12 bg-gradient-to-br from-accent-blue-600/90 to-soft-coral-500/90 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-white/10 to-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Work?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of professionals who are already using AI to enhance their creative and strategic work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/join"
                  className="glass-button bg-white/20 text-white hover:bg-white/30 hover-glow"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/services"
                  className="glass-button border-2 border-white/50 text-white hover:bg-white/20"
                >
                  Custom Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;