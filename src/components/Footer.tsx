import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/20 dark:border-white/10 text-cool-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 glass rounded-xl">
                <Brain className="h-6 w-6 text-accent-blue-600 dark:text-accent-blue-400" />
              </div>
              <span className="text-xl font-bold">Expressive AI</span>
            </div>
            <p className="text-cool-slate-600 dark:text-cool-slate-300 mb-4 max-w-md">
              Empowering creators, thinkers, educators & strategists with ethical, expressive AI tools for Business, Humanities & Thought.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="glass-button p-2 text-cool-slate-600 dark:text-cool-slate-400 hover:text-accent-blue-600 dark:hover:text-accent-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="glass-button p-2 text-cool-slate-600 dark:text-cool-slate-400 hover:text-accent-blue-600 dark:hover:text-accent-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="glass-button p-2 text-cool-slate-600 dark:text-cool-slate-400 hover:text-accent-blue-600 dark:hover:text-accent-blue-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:hello@expressiveai.com" className="glass-button p-2 text-cool-slate-600 dark:text-cool-slate-400 hover:text-accent-blue-600 dark:hover:text-accent-blue-400">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/join" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Early Access</Link></li>
              <li><a href="#" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-cool-slate-600 dark:text-cool-slate-300 hover:text-accent-blue-600 dark:hover:text-accent-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 dark:border-white/10 mt-12 pt-8 text-center">
          <p className="text-cool-slate-600 dark:text-cool-slate-400">
            © 2025 Expressive AI. All rights reserved. Built with ❤️ for the minds that move society.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;