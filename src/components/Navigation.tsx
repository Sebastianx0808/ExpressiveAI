import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Insights' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`glass-nav transition-all duration-300 ${
      scrolled ? 'shadow-xl' : 'shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 glass rounded-xl group-hover:bg-white/20 dark:group-hover:bg-white/10 transition-all duration-300">
              <img
                src="/logo.png"
                alt="Expressive AI Logo"
                className="h-12 w-12 object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="text-2xl font-bold text-cool-slate-900 dark:text-white group-hover:text-accent-blue-600 dark:group-hover:text-accent-blue-400 transition-colors">
              Expressive AI
            </span>
          </Link>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover-lift ${
                  location.pathname === item.path
                    ? 'glass bg-accent-blue-500/20 text-accent-blue-700 dark:text-accent-blue-300'
                    : 'text-cool-slate-700 dark:text-cool-slate-300 hover:glass hover:bg-white/20 dark:hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <ThemeToggle />
            
            <Link
              to="/join"
              className="ml-4 glass-button bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 text-white hover:from-accent-blue-700 hover:to-soft-coral-600 hover-glow"
            >
              Join Early Access
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glass-button p-2 text-cool-slate-700 dark:text-cool-slate-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/20 dark:border-white/10 animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'glass bg-accent-blue-500/20 text-accent-blue-700 dark:text-accent-blue-300'
                    : 'text-cool-slate-700 dark:text-cool-slate-300 hover:glass hover:bg-white/20 dark:hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/join"
              onClick={() => setIsOpen(false)}
              className="block mt-4 glass-button bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 text-white text-center hover:from-accent-blue-700 hover:to-soft-coral-600"
            >
              Join Early Access
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;