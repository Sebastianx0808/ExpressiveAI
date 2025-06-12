import React, { useState } from 'react';
import { Mail, Users, Sparkles, Bell } from 'lucide-react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    interests: []
  });

  const [submitted, setSubmitted] = useState(false);

  const roles = [
    'Student',
    'Teacher/Educator',
    'Researcher/Academic',
    'Creative Professional',
    'Business Strategist',
    'Institution/Organization',
    'Other'
  ];

  const interestOptions = [
    { id: 'portlify', label: 'Portlify - Digital Portfolio Builder' },
    { id: 'writer', label: 'Expressive Writer - Academic Writing Assistant' },
    { id: 'bizintellect', label: 'BizIntellect - Business Analysis AI' },
    { id: 'eduplan', label: 'EduPlan AI - Lesson Planning Co-pilot' },
    { id: 'marketmuse', label: 'MarketMuse - Creative SEO & Content' },
    { id: 'services', label: 'Custom AI Services & Consultation' },
    { id: 'workshops', label: 'AI Training Workshops' },
    { id: 'partnerships', label: 'Partnership Opportunities' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestChange = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center py-20">
        <div className="max-w-md mx-auto text-center">
          <div className="glass-card p-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-cool-slate-900 dark:text-white mb-4">
              Welcome to Expressive AI!
            </h2>
            <p className="text-cool-slate-600 dark:text-cool-slate-300 mb-6">
              Thank you for joining our early access community. We'll keep you updated on our progress and notify you when new products become available.
            </p>
            <div className="glass bg-accent-blue-50/50 dark:bg-accent-blue-900/20 rounded-lg p-4">
              <p className="text-accent-blue-800 dark:text-accent-blue-300 text-sm">
                Check your email for a confirmation message and exclusive early access updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 gradient-bg animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cool-slate-700 dark:text-cool-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-input w-full text-cool-slate-900 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cool-slate-700 dark:text-cool-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-input w-full text-cool-slate-900 dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Role Selection */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-cool-slate-700 dark:text-cool-slate-300 mb-2">
                    Who are you? *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleInputChange}
                    className="glass-input w-full text-cool-slate-900 dark:text-white"
                  >
                    <option value="">Select your role</option>
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-medium text-cool-slate-700 dark:text-cool-slate-300 mb-3">
                    What are you most interested in? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interestOptions.map(option => (
                      <label key={option.id} className="flex items-start space-x-3 cursor-pointer glass p-3 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(option.id)}
                          onChange={() => handleInterestChange(option.id)}
                          className="mt-1 h-4 w-4 text-accent-blue-600 focus:ring-accent-blue-500 border-cool-slate-300 dark:border-cool-slate-600 rounded"
                        />
                        <span className="text-sm text-cool-slate-700 dark:text-cool-slate-300">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full glass-button bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 text-white hover:from-accent-blue-700 hover:to-soft-coral-600 hover-glow py-4 text-lg"
                >
                  Get Early Access
                </button>
              </form>

              {/* Privacy Note */}
              <div className="mt-6 glass bg-cool-slate-50/50 dark:bg-cool-slate-800/50 rounded-lg p-4">
                <p className="text-sm text-cool-slate-600 dark:text-cool-slate-300">
                  <strong>Privacy:</strong> We respect your privacy and will never share your information with third parties. 
                  You can unsubscribe at any time. We'll only send you relevant updates about products you\'re interested in.
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