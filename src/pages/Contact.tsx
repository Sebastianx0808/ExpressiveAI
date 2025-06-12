import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    'General Inquiry',
    'Product Demo',
    'Custom Services',
    'Partnership Opportunity',
    'Press & Media',
    'Technical Support',
    'University Collaboration'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center py-20">
        <div className="max-w-md mx-auto text-center">
          <div className="glass-card p-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-cool-slate-900 dark:text-white mb-4">
              Message Sent!
            </h2>
            <p className="text-cool-slate-600 dark:text-cool-slate-300 mb-6">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <div className="glass bg-accent-blue-50/50 dark:bg-accent-blue-900/20 rounded-lg p-4">
              <p className="text-accent-blue-800 dark:text-accent-blue-300 text-sm">
                For urgent matters, you can reach us directly at hello@expressiveai.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 gradient-bg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <Sparkles className="h-12 w-12 text-accent-blue-600 dark:text-accent-blue-400 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-cool-slate-900 dark:text-white mb-6">
              Let's <span className="gradient-text">Collaborate</span>
            </h1>
            <p className="text-xl text-cool-slate-600 dark:text-cool-slate-300">
              Ready to explore how AI can transform your work? Whether you're interested in our products, services, or partnerships, we'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="glass-card p-8 h-fit sticky top-8">
              <h2 className="text-2xl font-bold text-cool-slate-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="glass bg-accent-blue-500/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent-blue-600 dark:text-accent-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cool-slate-900 dark:text-white">Email</h3>
                    <p className="text-cool-slate-600 dark:text-cool-slate-300">hello@expressiveai.com</p>
                    <p className="text-sm text-cool-slate-500 dark:text-cool-slate-400">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass bg-soft-coral-500/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-soft-coral-600 dark:text-soft-coral-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cool-slate-900 dark:text-white">Phone</h3>
                    <p className="text-cool-slate-600 dark:text-cool-slate-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-cool-slate-500 dark:text-cool-slate-400">Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass bg-green-500/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cool-slate-900 dark:text-white">Location</h3>
                    <p className="text-cool-slate-600 dark:text-cool-slate-300">San Francisco, CA</p>
                    <p className="text-sm text-cool-slate-500 dark:text-cool-slate-400">Remote-first team</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass bg-purple-500/20 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cool-slate-900 dark:text-white">Response Time</h3>
                    <p className="text-cool-slate-600 dark:text-cool-slate-300">Within 24 hours</p>
                    <p className="text-sm text-cool-slate-500 dark:text-cool-slate-400">Usually much faster!</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-3">
                <a
                  href="mailto:hello@expressiveai.com"
                  className="block w-full glass-button bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 text-white hover:from-accent-blue-700 hover:to-soft-coral-600 text-center"
                >
                  Send Direct Email
                </a>
                <Link
                  to="/join"
                  className="block w-full glass-button border-2 border-accent-blue-600 dark:border-accent-blue-400 text-accent-blue-600 dark:text-accent-blue-400 hover:bg-accent-blue-600 hover:text-white dark:hover:bg-accent-blue-400 dark:hover:text-cool-slate-900 text-center"
                >
                  Join Early Access
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-6 w-6 text-accent-blue-600 dark:text-accent-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-cool-slate-900 dark:text-white">
                  Send us a message
                </h2>
              </div>
              
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

                {/* Company and Inquiry Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-cool-slate-700 dark:text-cool-slate-300 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="glass-input w-full text-cool-slate-900 dark:text-white"
                      placeholder="Your organization (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-cool-slate-700 dark:text-cool-slate-300 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="glass-input w-full text-cool-slate-900 dark:text-white"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-cool-slate-700 dark:text-cool-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass-input w-full text-cool-slate-900 dark:text-white"
                    placeholder="Brief subject line"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cool-slate-700 dark:text-cool-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-input w-full text-cool-slate-900 dark:text-white resize-vertical"
                    placeholder="Tell us about your project, question, or how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full glass-button bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 text-white hover:from-accent-blue-700 hover:to-soft-coral-600 hover-glow py-4 text-lg flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="glass-card p-6 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-cool-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-3">
                How quickly can you respond to custom service requests?
              </h3>
              <p className="text-cool-slate-600 dark:text-cool-slate-300">
                We typically provide initial consultation and proposal within 48 hours for custom service requests. Project timelines vary based on scope and complexity.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-3">
                Do you offer educational discounts?
              </h3>
              <p className="text-cool-slate-600 dark:text-cool-slate-300">
                Yes! We offer special pricing for educational institutions, students, and academic researchers. Contact us to learn about our academic programs.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-3">
                Can you integrate with our existing systems?
              </h3>
              <p className="text-cool-slate-600 dark:text-cool-slate-300">
                Absolutely. Our custom AI solutions are designed to integrate seamlessly with your existing workflows and systems. We work with your technical team to ensure smooth implementation.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-3">
                What makes your AI approach different?
              </h3>
              <p className="text-cool-slate-600 dark:text-cool-slate-300">
                We focus specifically on non-STEM domains with a human-centered approach. Our AI tools are designed to enhance creativity and strategic thinking, not replace human expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;