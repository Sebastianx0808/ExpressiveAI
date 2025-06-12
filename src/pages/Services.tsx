import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, BookOpen, TrendingUp, Megaphone, Users, Calendar, ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      category: "Digital Identity",
      icon: <Palette className="h-8 w-8" />,
      description: "Transform your professional presence with AI-enhanced digital identity solutions",
      services: [
        "Portfolio customization and optimization",
        "Personal website design and development",
        "Professional brand strategy",
        "Digital presence audit and enhancement",
        "Social media profile optimization"
      ],
      color: "from-soft-coral-500 to-soft-coral-600"
    },
    {
      category: "Research Support",
      icon: <BookOpen className="h-8 w-8" />,
      description: "Accelerate your research with AI-powered academic and scholarly support",
      services: [
        "Academic editing and proofreading",
        "Citation management and formatting",
        "Grant proposal development",
        "Literature review assistance",
        "Research methodology consultation"
      ],
      color: "from-accent-blue-500 to-accent-blue-600"
    },
    {
      category: "Business Services",
      icon: <TrendingUp className="h-8 w-8" />,
      description: "Strategic AI solutions for modern business challenges and opportunities",
      services: [
        "AI-powered market analysis",
        "Custom GPT dashboard development",
        "Financial reporting and insights",
        "Competitive intelligence reports",
        "Strategic planning consultation"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      category: "Marketing Studio",
      icon: <Megaphone className="h-8 w-8" />,
      description: "Creative marketing solutions that blend human insight with AI efficiency",
      services: [
        "Blog writing and content creation",
        "SEO strategy and optimization",
        "Social media content planning",
        "Brand voice development",
        "Content marketing campaigns"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Education Tools",
      icon: <Users className="h-8 w-8" />,
      description: "Empower educators with AI-enhanced teaching and learning solutions",
      services: [
        "Professional development workshops",
        "Curriculum design and planning",
        "Academic AI training programs",
        "Educational technology integration",
        "Student assessment tools"
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery Call",
      description: "We start with a free 30-minute consultation to understand your unique needs and goals."
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Our team creates a customized AI strategy tailored to your specific requirements."
    },
    {
      step: "3",
      title: "Implementation",
      description: "We implement the solution with continuous feedback and iteration to ensure success."
    }
  ];

  return (
    <div className="py-20 gradient-bg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <Sparkles className="h-12 w-12 text-accent-blue-600 dark:text-accent-blue-400 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-cool-slate-900 dark:text-white mb-6">
              Human + AI <span className="gradient-text">Hybrid Studio</span>
            </h1>
            <p className="text-xl text-cool-slate-600 dark:text-cool-slate-300">
              Our expert team combines cutting-edge AI technology with human creativity and strategic thinking to deliver personalized solutions for your unique challenges.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="glass-card overflow-hidden hover-lift group">
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold ml-3">{service.category}</h3>
                  </div>
                  <p className="opacity-90">{service.description}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-accent-blue-500 dark:bg-accent-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-cool-slate-700 dark:text-cool-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="glass-card p-6 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-cool-slate-900 dark:text-white">
                How It Works
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="glass-card p-6 hover-lift">
                  <div className="bg-gradient-to-br from-accent-blue-500 to-soft-coral-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-cool-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-cool-slate-600 dark:text-cool-slate-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="glass-card p-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cool-slate-900 dark:text-white mb-4">
              Flexible Service Packages
            </h2>
            <p className="text-lg text-cool-slate-600 dark:text-cool-slate-300">
              Choose from our pre-designed service packs or request a custom solution tailored to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Pack */}
            <div className="glass border border-cool-slate-200 dark:border-cool-slate-700 rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-cool-slate-900 dark:text-white mb-2">Starter Pack</h3>
              <div className="text-3xl font-bold text-accent-blue-600 dark:text-accent-blue-400 mb-4">$497</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  1 service category
                </li>
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Up to 5 hours of work
                </li>
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  1 revision round
                </li>
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Email support
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full glass-button text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Pack */}
            <div className="glass border-2 border-accent-blue-500 dark:border-accent-blue-400 rounded-xl p-6 relative hover-lift">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent-blue-500 dark:bg-accent-blue-400 text-white dark:text-cool-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-cool-slate-900 dark:text-white mb-2">Professional Pack</h3>
              <div className="text-3xl font-bold text-accent-blue-600 dark:text-accent-blue-400 mb-4">$1,297</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  2-3 service categories
                </li>
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Up to 15 hours of work
                </li>
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  3 revision rounds
                </li>
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Priority support
                </li>
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Strategy consultation
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full glass-button bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 text-white hover:from-accent-blue-700 hover:to-soft-coral-600 text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Pack */}
            <div className="glass border border-cool-slate-200 dark:border-cool-slate-700 rounded-xl p-6 hover-lift">
              <h3 className="text-xl font-bold text-cool-slate-900 dark:text-white mb-2">Enterprise Pack</h3>
              <div className="text-3xl font-bold text-accent-blue-600 dark:text-accent-blue-400 mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  All service categories
                </li>
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Unlimited hours
                </li>
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Unlimited revisions
                </li>
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Dedicated account manager
                </li>
                <li className="flex items-center text-cool-slate-700 dark:text-cool-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Custom AI solutions
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full glass-button bg-soft-coral-500 text-white hover:bg-soft-coral-600 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card p-12 bg-gradient-to-br from-cool-slate-900/90 to-accent-blue-900/90 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-white/10 to-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <Calendar className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Book a free discovery call to discuss your project and learn how our human + AI hybrid approach can transform your work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="glass-button bg-soft-coral-500/80 text-white hover:bg-soft-coral-600 hover-glow flex items-center justify-center group"
                >
                  Book Free Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="glass-button border-2 border-white/50 text-white hover:bg-white/20"
                >
                  Request Service Pack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;