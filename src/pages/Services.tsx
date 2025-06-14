import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  BookOpen, 
  TrendingUp, 
  Megaphone, 
  Users, 
  Calendar, 
  ArrowRight, 
  Sparkles,
  Zap,
  Building2,
  GraduationCap,
  ShoppingCart,
  FileText,
  BarChart3,
  Mail,
  Clock,
  CheckCircle
} from 'lucide-react';

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

        {/* Custom Solutions Section */}
        <div className="glass-card p-8 mb-20">
          <div className="text-center mb-12">
            <Zap className="h-12 w-12 text-accent-blue-600 dark:text-accent-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-cool-slate-900 dark:text-white mb-4">
              Custom AI Solutions & Automations
            </h2>
            <p className="text-lg text-cool-slate-600 dark:text-cool-slate-300 max-w-3xl mx-auto">
              Every business is unique. We create tailored AI solutions and simple automations designed specifically for your use case, 
              industry requirements, and business objectives. From streamlining workflows to intelligent decision-making systems.
            </p>
          </div>
        </div>

      

        {/* Benefits Section */}
        <div className="glass-card p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-cool-slate-900 dark:text-white mb-4">
              Why Choose Custom Solutions?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-accent-blue-500 to-accent-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-2">Tailored Approach</h3>
              <p className="text-cool-slate-600 dark:text-cool-slate-300">Solutions designed specifically for your workflow and requirements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-2">Time Savings</h3>
              <p className="text-cool-slate-600 dark:text-cool-slate-300">Automate repetitive tasks and focus on high-value activities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-2">Scalable Growth</h3>
              <p className="text-cool-slate-600 dark:text-cool-slate-300">Solutions that grow and adapt with your business needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-soft-coral-500 to-soft-coral-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-2">Proven Results</h3>
              <p className="text-cool-slate-600 dark:text-cool-slate-300">Measurable improvements in efficiency and productivity</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss your unique challenges and create a custom AI solution that drives real results. 
                Book a free discovery call to explore the possibilities.
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
                  Discuss Custom Solution
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