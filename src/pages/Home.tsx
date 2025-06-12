import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Lightbulb, Target, BookOpen, TrendingUp, Palette, Sparkles } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Human-Centered",
      description: "AI tools designed with humanities and creative thinking at the core"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Academic-Forward",
      description: "Built by academics, for academics, researchers, and thought leaders"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Business-Smart",
      description: "Strategic AI solutions for modern business challenges and opportunities"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative-Friendly",
      description: "Empowering artists, writers, and creators with expressive AI capabilities"
    }
  ];

  const whoWeServe = [
    { title: "Educators & Researchers", description: "Academic professionals seeking AI-powered research and teaching tools" },
    { title: "Creative Professionals", description: "Artists, writers, and designers looking for expressive AI assistance" },
    { title: "Business Strategists", description: "Leaders needing intelligent analysis and strategic insights" },
    { title: "Students & Institutions", description: "Educational communities embracing ethical AI integration" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative gradient-bg py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg')] bg-cover bg-center opacity-5"></div>
        
        {/* Floating glass elements */}
        <div className="absolute top-20 left-10 w-32 h-32 glass rounded-full animate-float opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 glass rounded-full animate-float opacity-20" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 glass rounded-full animate-float opacity-25" style={{animationDelay: '4s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="glass-card p-8 mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-cool-slate-900 dark:text-white mb-6 leading-tight">
                Reimagining Intelligence:
                <span className="gradient-text block mt-2">
                  AI for Business, Arts, Education & Society
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-cool-slate-600 dark:text-cool-slate-300 mb-8 leading-relaxed">
                Empowering creators, thinkers, educators & strategists with ethical, expressive AI tools that honor human intelligence and creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/products"
                  className="glass-button bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 text-white hover:from-accent-blue-700 hover:to-soft-coral-600 hover-glow flex items-center group text-lg"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/join"
                  className="glass-button border-2 border-accent-blue-600 dark:border-accent-blue-400 text-accent-blue-600 dark:text-accent-blue-400 hover:bg-accent-blue-600 hover:text-white dark:hover:bg-accent-blue-400 dark:hover:text-cool-slate-900 text-lg"
                >
                  Join Early Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-cool-slate-900 dark:text-white mb-4">
                What We Do
              </h2>
              <p className="text-xl text-cool-slate-600 dark:text-cool-slate-300">
                We build ethical AI tools & services for non-STEM domains, bringing artificial intelligence to the minds that shape culture, strategy, and meaning.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 text-center hover-lift group">
                <div className="text-accent-blue-600 dark:text-accent-blue-400 mb-4 flex justify-center group-hover:text-soft-coral-500 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-cool-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-cool-slate-600 dark:text-cool-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-cool-slate-900 dark:text-white mb-4">
                Who We Serve
              </h2>
              <p className="text-xl text-cool-slate-600 dark:text-cool-slate-300">
                Professionals, academics, creatives, and educators who are shaping the future of human knowledge and culture.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoWeServe.map((audience, index) => (
              <div key={index} className="glass-card p-8 hover-lift border-l-4 border-accent-blue-600 dark:border-accent-blue-400">
                <h3 className="text-xl font-semibold text-cool-slate-900 dark:text-white mb-3">{audience.title}</h3>
                <p className="text-cool-slate-600 dark:text-cool-slate-300">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Hybrid Model Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-cool-slate-900 dark:text-white mb-6">
                Our Hybrid Model
              </h2>
              <p className="text-xl text-cool-slate-600 dark:text-cool-slate-300 mb-6">
                We combine the power of SaaS products with personalized human services, ensuring you get both cutting-edge AI technology and the human touch that matters in creative and strategic work.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="glass p-3 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-accent-blue-600 dark:text-accent-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cool-slate-900 dark:text-white">SaaS Products</h3>
                    <p className="text-cool-slate-600 dark:text-cool-slate-300">Self-service AI tools you can use anytime, anywhere</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="glass p-3 rounded-lg">
                    <BookOpen className="h-5 w-5 text-soft-coral-600 dark:text-soft-coral-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cool-slate-900 dark:text-white">Human Services</h3>
                    <p className="text-cool-slate-600 dark:text-cool-slate-300">Expert consultation and custom AI implementation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-4 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" 
                  alt="Team collaboration" 
                  className="rounded-xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue-600/20 to-soft-coral-500/20 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 bg-gradient-to-br from-cool-slate-900/90 to-accent-blue-900/90 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-blue-400/20 to-soft-coral-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-soft-coral-400/20 to-accent-blue-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <Sparkles className="h-16 w-16 mx-auto mb-6 text-accent-blue-400 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                "Bring AI to the minds shaping culture, strategy, and meaning. We believe that the future of artificial intelligence should be expressive, ethical, and deeply human-centered."
              </p>
              <Link
                to="/about"
                className="glass-button bg-soft-coral-500/80 text-white hover:bg-soft-coral-600 hover-glow inline-flex items-center text-lg"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;