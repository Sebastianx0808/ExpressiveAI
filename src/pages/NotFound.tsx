import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  AlertCircle,
  Sparkles,
  Navigation,
  MapPin,
  Compass
} from 'lucide-react';

const NotFound = () => {
  const quickLinks = [
    {
      title: "Home",
      description: "Return to our homepage",
      path: "/",
      icon: <Home className="h-5 w-5" />
    },
    {
      title: "Services",
      description: "Explore our AI solutions",
      path: "/services",
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      title: "Products",
      description: "Discover our products",
      path: "/products",
      icon: <Search className="h-5 w-5" />
    },
    {
      title: "Contact",
      description: "Get in touch with us",
      path: "/contact",
      icon: <MapPin className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main 404 Section */}
        <div className="glass-card p-12 mb-12 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-blue-500/10 to-soft-coral-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-green-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {/* 404 Icon */}
            <div className="mb-8">
              <div className="relative mx-auto w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue-500 to-soft-coral-500 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-2 glass-card rounded-full flex items-center justify-center">
                  <AlertCircle className="h-16 w-16 text-accent-blue-600 dark:text-accent-blue-400" />
                </div>
              </div>
            </div>

            {/* 404 Number */}
            <div className="mb-6">
              <h1 className="text-8xl md:text-9xl font-bold gradient-text animate-fade-in">
                404
              </h1>
            </div>

            {/* Main Message */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-cool-slate-900 dark:text-white mb-4">
                Oops! Page Not Found
              </h2>
              <p className="text-lg text-cool-slate-600 dark:text-cool-slate-300 max-w-2xl mx-auto">
                It seems you've wandered into uncharted digital territory. The page you're looking for might have been moved, 
                deleted, or perhaps it never existed in the first place.
              </p>
            </div>

            {/* Navigation Helper */}
            <div className="flex items-center justify-center mb-8">
              <div className="glass border border-cool-slate-200 dark:border-cool-slate-700 rounded-lg p-4">
                <div className="flex items-center text-cool-slate-600 dark:text-cool-slate-400">
                  <Compass className="h-5 w-5 mr-2" />
                  <span className="text-sm">Let us help you find your way back</span>
                </div>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/"
                className="glass-button bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 text-white hover:from-accent-blue-700 hover:to-soft-coral-600 hover-glow flex items-center justify-center group"
              >
                <Home className="mr-2 h-5 w-5" />
                Go Home
                <ArrowLeft className="ml-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="glass-button border-2 border-accent-blue-500/50 dark:border-accent-blue-400/50 text-accent-blue-600 dark:text-accent-blue-400 hover:bg-accent-blue-500/10 dark:hover:bg-accent-blue-400/10 flex items-center justify-center group"
              >
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="glass-card p-8">
          <div className="mb-6">
            <Navigation className="h-8 w-8 text-accent-blue-600 dark:text-accent-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-cool-slate-900 dark:text-white mb-2">
              Popular Destinations
            </h3>
            <p className="text-cool-slate-600 dark:text-cool-slate-300">
              Here are some helpful links to get you back on track
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="glass border border-cool-slate-200 dark:border-cool-slate-700 rounded-lg p-6 hover-lift group text-left"
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-accent-blue-500 to-soft-coral-500 p-2 rounded-lg text-white mr-3 group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-1 group-hover:text-accent-blue-600 dark:group-hover:text-accent-blue-400 transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-sm text-cool-slate-600 dark:text-cool-slate-300">
                      {link.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <div className="glass border border-cool-slate-200 dark:border-cool-slate-700 rounded-lg p-6 max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-2">
              Still can't find what you're looking for?
            </h4>
            <p className="text-cool-slate-600 dark:text-cool-slate-300 mb-4">
              Our support team is here to help you navigate our platform.
            </p>
            <Link
              to="/contact"
              className="glass-button bg-soft-coral-500 text-white hover:bg-soft-coral-600 w-full flex items-center justify-center"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;