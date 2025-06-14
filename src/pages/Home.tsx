import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Lightbulb, Target, BookOpen, TrendingUp, Palette, Sparkles, 
  CheckCircle, Star, Zap, Globe, Shield, Heart, Brain, Rocket, Award,
  Play, ChevronDown, Mouse, ExternalLink, Code, Paintbrush, GraduationCap,
  BarChart3, Camera, MessageCircle, Coffee, Clock
} from 'lucide-react';

// Background Vector Components
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-300/20 dark:to-purple-300/20 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-orange-400/10 dark:from-pink-300/20 dark:to-orange-300/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
    <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-green-400/10 dark:from-cyan-300/20 dark:to-green-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
    <div className="absolute bottom-40 right-40 w-28 h-28 bg-gradient-to-br from-yellow-400/10 to-red-400/10 dark:from-yellow-300/20 dark:to-red-300/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
    
    {/* Geometric Shapes */}
    <div className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-blue-300/20 dark:border-blue-400/30 rotate-45 animate-spin-slow"></div>
    <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-purple-300/20 dark:border-purple-400/30 rotate-12 animate-bounce"></div>
    <div className="absolute top-2/3 left-1/3 w-20 h-20 border-2 border-pink-300/20 dark:border-pink-400/30 rounded-lg rotate-12 animate-float"></div>
  </div>
);

const HybridModelBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Circuit-like patterns */}
    <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20" viewBox="0 0 400 400">
      <defs>
        <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M25 0v50M0 25h50" stroke="url(#gradient)" strokeWidth="1" fill="none"/>
          <circle cx="25" cy="25" r="3" fill="url(#gradient)"/>
        </pattern>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)"/>
    </svg>
    
    {/* Floating tech elements */}
    <div className="absolute top-16 left-16 w-8 h-8 bg-blue-500/20 dark:bg-blue-400/30 rounded-sm rotate-45 animate-float"></div>
    <div className="absolute top-32 right-24 w-6 h-6 bg-purple-500/20 dark:bg-purple-400/30 rounded-full animate-pulse"></div>
    <div className="absolute bottom-24 left-32 w-10 h-10 bg-cyan-500/20 dark:bg-cyan-400/30 rounded-lg rotate-12 animate-bounce"></div>
    <div className="absolute bottom-16 right-16 w-12 h-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/30 dark:to-purple-400/30 rounded-full animate-pulse"></div>
  </div>
);

const LoveBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating Hearts */}
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className={`absolute animate-float-heart opacity-20 dark:opacity-30`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }}
      >
        <Heart className={`h-${4 + Math.floor(Math.random() * 4)} w-${4 + Math.floor(Math.random() * 4)} text-pink-400 dark:text-pink-300`} fill="currentColor" />
      </div>
    ))}
    
    {/* Love-themed geometric shapes */}
    <div className="absolute top-1/4 left-1/4 w-24 h-24 border-4 border-pink-300/20 dark:border-pink-400/30 rounded-full animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-4 border-red-300/20 dark:border-red-400/30 rounded-full animate-ping"></div>
    
    {/* Sparkle effects */}
    {[...Array(8)].map((_, i) => (
      <div
        key={`sparkle-${i}`}
        className="absolute animate-twinkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`
        }}
      >
        <Sparkles className="h-6 w-6 text-yellow-400 dark:text-yellow-300" />
      </div>
    ))}
    
    {/* Love wave pattern */}
    <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10 dark:opacity-20" viewBox="0 0 1200 120">
      <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="url(#loveGradient)"/>
      <defs>
        <linearGradient id="loveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EC4899"/>
          <stop offset="50%" stopColor="#F59E0B"/>
          <stop offset="100%" stopColor="#EF4444"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Human-Centered Intelligence",
      description: "AI that amplifies human creativity and intuition, not replaces it",
      gradient: "from-purple-500 to-pink-500",
      darkGradient: "from-purple-400 to-pink-400"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Academic Excellence",
      description: "Research-grade tools built by scholars for scholarly impact",
      gradient: "from-blue-500 to-cyan-500",
      darkGradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Strategic Business Edge",
      description: "Data-driven insights that transform business narratives",
      gradient: "from-green-500 to-emerald-500",
      darkGradient: "from-green-400 to-emerald-400"
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Creative Empowerment",
      description: "Unleash artistic potential with expressive AI companions",
      gradient: "from-orange-500 to-red-500",
      darkGradient: "from-orange-400 to-red-400"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Users", icon: <Users className="h-6 w-6" /> },
    { number: "500+", label: "Projects Created", icon: <Rocket className="h-6 w-6" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Heart className="h-6 w-6" /> },
    { number: "24/7", label: "AI Assistance", icon: <Clock className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Professor",
      text: "This platform transformed how I present my research. The AI understands academic nuance.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      name: "Marcus Rivera",
      role: "Creative Director",
      text: "Finally, an AI that gets creativity. It's like having a brilliant collaborator who never sleeps.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      name: "Emma Thompson",
      role: "Business Strategist",
      text: "The insights are game-changing. Our strategy presentations have never been more compelling.",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
    }
  ];

  const whoWeServe = [
    { 
      title: "Visionary Educators", 
      description: "Transform teaching with AI-powered interactive content and personalized learning experiences",
      icon: <GraduationCap className="h-12 w-12" />,
      image: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg",
      bgImage: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg"
    },
    { 
      title: "Creative Minds", 
      description: "Amplify your artistic vision with AI tools that understand aesthetics and emotion",
      icon: <Palette className="h-12 w-12" />,
      image: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg",
      bgImage: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg"
    },
    { 
      title: "Strategic Leaders", 
      description: "Make data-driven decisions with AI that speaks the language of business strategy",
      icon: <Target className="h-12 w-12" />,
      image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg",
      bgImage: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
    },
    { 
      title: "Research Pioneers", 
      description: "Accelerate discovery with AI that understands complex academic methodologies",
      icon: <Lightbulb className="h-12 w-12" />,
      image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg",
      bgImage: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="animate-fade-in overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen gradient-bg overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950 transition-colors duration-500">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-cyan-900/10 dark:from-purple-400/20 dark:via-blue-400/20 dark:to-cyan-400/20"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-300/30 dark:to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-48 h-48 bg-gradient-to-r from-pink-400/20 to-orange-400/20 dark:from-pink-300/30 dark:to-orange-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-green-400/20 dark:from-cyan-300/30 dark:to-green-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Floating Glass Orbs */}
        <div className="absolute top-1/4 left-16 w-4 h-4 bg-white/30 dark:bg-white/20 backdrop-blur-sm rounded-full animate-float border border-white/40 dark:border-white/20"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-white/20 dark:bg-white/15 backdrop-blur-sm rounded-full animate-float border border-white/30 dark:border-white/15" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white/40 dark:bg-white/25 backdrop-blur-sm rounded-full animate-float border border-white/50 dark:border-white/25" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-white/25 dark:bg-white/20 backdrop-blur-sm rounded-full animate-float border border-white/35 dark:border-white/20" style={{animationDelay: '2s'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          {/* Welcome Message */}
          <div className="text-center mb-8 animate-slide-down">
            <div className="inline-flex items-center glass-card px-6 py-3 mb-6 bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-full">
              <Sparkles className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2 animate-pulse" />
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                Welcome to the Future of Human-AI Collaboration
              </span>
              <Heart className="h-5 w-5 text-red-500 dark:text-red-400 ml-2 animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                <span className="block">Reimagining</span>
                <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  Intelligence
                </span>
              </h1>
              <div className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-light">
                <span className="block mb-2">AI for Business, Arts,</span>
                <span className="block">Education & Society</span>
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-2xl">
                Empowering creators, thinkers, educators & strategists with ethical, expressive AI tools that honor human intelligence and creativity.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
                <Link
                  to="/products"
                  className="glass-button bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 hover-glow flex items-center justify-center group text-lg px-8 py-4 rounded-2xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Rocket className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Explore Our Products
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  to="/join"
                  className="glass-button border-2 border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white text-lg px-8 py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 bg-white/10 dark:bg-black/10 backdrop-blur-sm"
                >
                  <Star className="mr-2 h-5 w-5" />
                  Join Early Access
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-card p-4 text-center hover-lift bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="text-blue-600 dark:text-blue-400 mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.number}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Fixed Portlify Feature Banner */}
            <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="glass-card p-8 bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/50 dark:border-white/30 rounded-3xl relative overflow-hidden shadow-2xl">
                {/* Featured Product Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg z-20">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Live Now
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-300/30 dark:to-purple-300/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 dark:from-pink-300/30 dark:to-orange-300/30 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  {/* Product Header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl mb-4 shadow-lg">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                      Portlify
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Transform your CV into a stunning digital portfolio that showcases your achievements with AI-powered design
                    </p>
                  </div>

                  {/* Product Image - Fixed positioning */}
                  <div className="mb-6 relative">
                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg" 
                        alt="Portlify - Digital Portfolio Builder" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 dark:from-blue-400/40 dark:to-purple-400/40"></div>
                      <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-black/95 backdrop-blur-sm px-3 py-2 rounded-full border border-white/50 dark:border-white/30">
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center">
                          <Camera className="h-4 w-4 mr-2" />
                          Portfolio Preview
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {["CV Conversion", "SEO Optimized", "Custom Domains", "Pro Templates"].map((feature, index) => (
                      <span key={index} className="bg-blue-100/80 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3 py-2 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <Link
                      to="/products"
                      className="w-full glass-button bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 hover-glow flex items-center justify-center group py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <Code className="mr-2 h-5 w-5" />
                      View All Products
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href="https://forms.google.com/your-custom-form"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full glass-button border-2 border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white flex items-center justify-center group py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 bg-white/20 dark:bg-black/20 backdrop-blur-sm"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Get Custom Portfolio
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="glass-card p-3 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/20">
              <ChevronDown className="h-6 w-6 text-slate-600 dark:text-slate-300" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="features" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 dark:via-blue-950/30 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.features ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-card p-10 max-w-4xl mx-auto bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/20 rounded-3xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl mb-6 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What We Do
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                We build ethical AI tools & services for non-STEM domains, bringing artificial intelligence to the minds that shape culture, strategy, and meaning.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`glass-card p-8 text-center hover-lift group relative overflow-hidden transition-all duration-700 bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/40 dark:border-white/20 rounded-2xl ${isVisible.features ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} dark:${feature.darkGradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
                <div className="relative z-10">
                  <div className={`text-white mb-6 flex justify-center p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} dark:${feature.darkGradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-purple-100/50 via-blue-100/50 to-cyan-100/50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Loved by Creators Worldwide
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              See what our community has to say
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card p-12 text-center relative overflow-hidden bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/20 rounded-3xl">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 dark:from-yellow-300/30 dark:to-orange-300/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-300/30 dark:to-purple-300/30 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <MessageCircle className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
                <div className="mb-8">
                  <p className="text-2xl text-slate-700 dark:text-slate-300 mb-6 italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-slate-600 shadow-lg"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-blue-600 dark:bg-blue-400 scale-125' 
                          : 'bg-slate-300 dark:bg-slate-600 hover:bg-blue-400 dark:hover:bg-blue-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section - With Background Vectors */}
      <section id="audience" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-500 relative">
        <FloatingShapes />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.audience ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-card p-10 max-w-4xl mx-auto bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/20 rounded-3xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 rounded-2xl mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Who We Serve
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Professionals, academics, creatives, and educators who are shaping the future of human knowledge and culture.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {whoWeServe.map((audience, index) => (
              <div 
                key={index} 
                className={`group cursor-pointer transition-all duration-700 ${isVisible.audience ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="glass-card p-8 hover-lift relative overflow-hidden h-full bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/40 dark:border-white/20 rounded-2xl">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <img 
                      src={audience.bgImage} 
                      alt={`${audience.title} background`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 dark:from-blue-400/10 dark:to-purple-400/10 group-hover:from-blue-600/10 group-hover:to-purple-600/10 dark:group-hover:from-blue-400/20 dark:group-hover:to-purple-400/20 transition-all duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="flex-shrink-0 p-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {audience.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {audience.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {audience.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative h-48 rounded-xl overflow-hidden">
                      <img 
                        src={audience.image} 
                        alt={audience.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 dark:from-blue-400/30 dark:to-purple-400/30 group-hover:from-blue-600/30 group-hover:to-purple-600/30 dark:group-hover:from-blue-400/40 dark:group-hover:to-purple-400/40 transition-all duration-300 rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Hybrid Model Section - With Background Vectors */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-800 dark:to-blue-900 transition-colors duration-500 relative">
        <HybridModelBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="glass-card p-10 bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/40 dark:border-white/20 rounded-3xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-500 dark:to-red-500 rounded-2xl mb-8 shadow-lg">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Our Hybrid Model
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                We combine the power of SaaS products with personalized human services, ensuring you get both cutting-edge AI technology and the human touch that matters.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <TrendingUp className="h-6 w-6" />,
                    title: "SaaS Products",
                    description: "Self-service AI tools you can use anytime, anywhere",
                    gradient: "from-blue-600 to-cyan-600",
                    darkGradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: <BookOpen className="h-6 w-6" />,
                    title: "Human Services",
                    description: "Expert consultation and custom AI implementation",
                    gradient: "from-purple-600 to-pink-600",
                    darkGradient: "from-purple-500 to-pink-500"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`glass p-4 rounded-2xl bg-gradient-to-r ${item.gradient} dark:${item.darkGradient} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-6 overflow-hidden bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/20 rounded-3xl">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <img 
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" 
                    alt="Team collaboration" 
                    className="rounded-2xl w-full h-48 object-cover shadow-xl"
                  />
                  <img 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                    alt="AI Technology" 
                    className="rounded-2xl w-full h-48 object-cover shadow-xl"
                  />
                </div>
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                  alt="Hybrid workspace" 
                  className="rounded-2xl w-full h-32 object-cover shadow-xl"
                />
                <div className="absolute inset-6 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 dark:from-blue-400/30 dark:to-purple-400/30 rounded-2xl pointer-events-none"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 glass-card p-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-white/40 dark:border-white/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Live Support</span>
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-8 glass-card p-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-white/40 dark:border-white/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Expert Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement - With Love Background */}
      <section className="py-32 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-500 relative">
        <LoveBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-16 bg-gradient-to-br from-slate-900/95 to-purple-900/95 dark:from-slate-800/95 dark:to-purple-800/95 text-white relative overflow-hidden rounded-3xl border border-white/20">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-300/30 dark:to-purple-300/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 dark:from-pink-300/30 dark:to-orange-300/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 dark:from-cyan-300/20 dark:to-blue-300/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 rounded-3xl mb-8 shadow-2xl">
                <Sparkles className="h-12 w-12 text-white animate-pulse" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Our Vision
              </h2>
              <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto opacity-90 leading-relaxed font-light">
                "Bring AI to the minds shaping culture, strategy, and meaning. We believe that the future of artificial intelligence should be expressive, ethical, and deeply human-centered."
              </p>
              
              {/* Vision Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" 
                    alt="Culture and Arts" 
                    className="rounded-2xl w-full h-40 object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <span className="absolute bottom-4 left-4 text-white font-semibold">Culture</span>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                    alt="Strategy and Business" 
                    className="rounded-2xl w-full h-40 object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <span className="absolute bottom-4 left-4 text-white font-semibold">Strategy</span>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg" 
                    alt="Education and Meaning" 
                    className="rounded-2xl w-full h-40 object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <span className="absolute bottom-4 left-4 text-white font-semibold">Meaning</span>
                </div>
              </div>
              
              <Link
                to="/about"
                className="glass-button bg-gradient-to-r from-orange-500/80 to-pink-500/80 dark:from-orange-400/80 dark:to-pink-400/80 text-white hover:from-orange-600 hover:to-pink-600 dark:hover:from-orange-500 dark:hover:to-pink-500 hover-glow inline-flex items-center text-xl px-10 py-5 rounded-2xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <Heart className="mr-3 h-6 w-6" />
                Learn More About Us
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 transition-colors duration-500 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg" 
            alt="Future workspace" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Work?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Join thousands of creators, educators, and leaders who are already using our AI tools to amplify their impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/products"
                className="bg-white text-blue-600 dark:text-blue-700 hover:bg-gray-100 dark:hover:bg-gray-200 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center border border-white/20"
              >
                <Play className="mr-2 h-6 w-6" />
                Start Creating Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 dark:hover:text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;