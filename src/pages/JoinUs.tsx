import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Users, Sparkles, Bell, ExternalLink } from 'lucide-react';

const JoinUs = () => {
  // Google Forms embed URL - replace with your actual Google Form URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSedTqbrzaqeQn8jEculkeF2FZiv6v5qoxeNpXVIYhEMj1_tIQ/viewform?usp=header";

  return (
    <div className="py-20 gradient-bg animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <Sparkles className="h-12 w-12 text-accent-blue-600 dark:text-accent-blue-400 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-cool-slate-900 dark:text-white mb-6">
              Join the Future of <span className="gradient-text">Expressive AI</span>
            </h1>
            <p className="text-xl text-cool-slate-600 dark:text-cool-slate-300">
              Be among the first to access our AI tools designed specifically for academics, creatives, educators, and strategic thinkers. Get early access to products, exclusive updates, and priority support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benefits */}
          <div className="lg:col-span-1">
            <div className="glass-card p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-cool-slate-900 dark:text-white mb-6">
                Early Access Benefits
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Bell className="h-6 w-6 text-accent-blue-600 dark:text-accent-blue-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-cool-slate-900 dark:text-white">First Access</h3>
                    <p className="text-sm text-cool-slate-600 dark:text-cool-slate-300">Be the first to try new products as they launch</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-soft-coral-500 dark:text-soft-coral-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-cool-slate-900 dark:text-white">Exclusive Community</h3>
                    <p className="text-sm text-cool-slate-600 dark:text-cool-slate-300">Join our private community of early adopters</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-green-500 dark:text-green-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-cool-slate-900 dark:text-white">Special Pricing</h3>
                    <p className="text-sm text-cool-slate-600 dark:text-cool-slate-300">Get discounted pricing on all products and services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-purple-500 dark:text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-cool-slate-900 dark:text-white">Direct Feedback</h3>
                    <p className="text-sm text-cool-slate-600 dark:text-cool-slate-300">Shape product development with your input</p>
                  </div>
                </div>
              </div>

              {/* Fallback link in case iframe doesn't load */}
              <div className="mt-8 p-4 glass bg-cool-slate-50/50 dark:bg-cool-slate-800/50 rounded-lg">
                <p className="text-sm text-cool-slate-600 dark:text-cool-slate-300 mb-3">
                  Having trouble with the form?
                </p>
                <a
                  href={googleFormUrl.replace('?embedded=true', '')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-blue-600 dark:text-accent-blue-400 hover:text-accent-blue-700 dark:hover:text-accent-blue-300 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open form in new tab
                </a>
              </div>
            </div>
          </div>

          {/* Google Forms Container */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-cool-slate-900 dark:text-white mb-2">
                  Join Our Early Access Program
                </h2>
                <p className="text-cool-slate-600 dark:text-cool-slate-300">
                  Fill out the form below to get exclusive early access to our AI tools and services.
                </p>
              </div>

              {/* Sandboxed Google Forms Iframe */}
              <div className="relative">
                <iframe
                  src={googleFormUrl}
                  width="100%"
                  height="1200"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
                  className="rounded-lg bg-white dark:bg-cool-slate-800"
                  title="Join Expressive AI Early Access Program"
                  loading="lazy"
                >
                  {/* Fallback content if iframe is blocked */}
                  <div className="p-8 text-center">
                    <p className="text-cool-slate-600 dark:text-cool-slate-300 mb-4">
                      Unable to load the form. Please visit the link below to sign up for early access.
                    </p>
                    <a
                      href={googleFormUrl.replace('?embedded=true', '')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 text-white hover:from-accent-blue-700 hover:to-soft-coral-600 hover-glow inline-flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Open Google Form
                    </a>
                  </div>
                </iframe>
              </div>

              {/* Privacy Note */}
              <div className="mt-6 glass bg-cool-slate-50/50 dark:bg-cool-slate-800/50 rounded-lg p-4">
                <p className="text-sm text-cool-slate-600 dark:text-cool-slate-300">
                  <strong>Privacy:</strong> We respect your privacy and will never share your information with third parties. 
                  You can unsubscribe at any time. We'll only send you relevant updates about products you're interested in.
                  This form is securely hosted by Google Forms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-cool-slate-900 dark:text-white mb-4">
              Questions?
            </h2>
            <p className="text-cool-slate-600 dark:text-cool-slate-300 mb-6">
              Have questions about our products or early access program? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@expressiveai.com"
                className="glass-button bg-cool-slate-600 dark:bg-cool-slate-700 text-white hover:bg-cool-slate-700 dark:hover:bg-cool-slate-600"
              >
                Email Us
              </a>
              <Link
                to="/contact"
                className="glass-button border-2 border-cool-slate-300 dark:border-cool-slate-600 text-cool-slate-700 dark:text-cool-slate-300 hover:bg-cool-slate-50 dark:hover:bg-cool-slate-800"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;