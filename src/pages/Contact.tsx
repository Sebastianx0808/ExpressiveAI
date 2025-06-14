import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';

import ContactInfoCard from '../components/ContactInfoCard';
import ActionButton from '../components/ActionButton';
import FAQItem from '../components/FAQItem';
import Map from '../components/Map';
import { FAQItem as FAQItemType } from '../types/contact';
import '../styles/contact.css';

const Contact: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@expressiveai.com",
      subtitle: "We typically respond within 24 hours",
      bgColor: "bg-accent-blue-500/20",
      iconColor: "text-accent-blue-600 dark:text-accent-blue-400"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7356711236",
      subtitle: "To be filled soon",
      bgColor: "bg-soft-coral-500/20",
      iconColor: "text-soft-coral-600 dark:text-soft-coral-400"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Bengaluru, India",
      subtitle: "Remote-first team",
      bgColor: "bg-green-500/20",
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      subtitle: "Usually much faster!",
      bgColor: "bg-purple-500/20",
      iconColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  const faqItems: FAQItemType[] = [
    {
      question: "How quickly can you respond to custom service requests?",
      answer: "We typically provide initial consultation and proposal within 48 hours for custom service requests. Project timelines vary based on scope and complexity, but we always provide clear expectations upfront."
    },
    {
      question: "Do you offer educational discounts?",
      answer: "Yes! We offer special pricing for educational institutions, students, and academic researchers. Our academic programs include up to 50% discounts for qualifying institutions and free access for student research projects."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. Our custom AI solutions are designed to integrate seamlessly with your existing workflows and systems. We work closely with your technical team to ensure smooth implementation with minimal disruption to your current processes."
    },
    {
      question: "What makes your AI approach different?",
      answer: "We focus specifically on non-STEM domains with a human-centered approach. Our AI tools are designed to enhance creativity and strategic thinking, not replace human expertise. We prioritize interpretability and user control in all our solutions."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary significantly based on scope. Simple integrations can be completed in 2-4 weeks, while comprehensive custom solutions may take 2-6 months. We provide detailed project roadmaps during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and dedicated technical support. Our support tiers range from basic maintenance to full managed services."
    },
    {
      question: "What data security measures do you implement?",
      answer: "We follow enterprise-grade security standards including end-to-end encryption, SOC 2 Type II compliance, GDPR compliance, and regular security audits. Your data privacy and security are our top priorities."
    },
    {
      question: "Can you work with small startups or only large enterprises?",
      answer: "We work with organizations of all sizes! From individual researchers and startups to Fortune 500 companies. We offer flexible engagement models and pricing structures to accommodate different organizational needs and budgets."
    },
    {
      question: "Do you offer training for our team?",
      answer: "Absolutely! We provide comprehensive training programs including hands-on workshops, documentation, video tutorials, and ongoing coaching to ensure your team can effectively use and maintain our AI solutions."
    },
    {
      question: "What happens if we're not satisfied with the results?",
      answer: "We stand behind our work with satisfaction guarantees. We offer iterative development with regular checkpoints, and if you're not satisfied, we'll work with you to make it right or provide a refund according to our service agreement terms."
    }
  ];

  const glassCardClass = "glass-card backdrop-blur-2xl bg-white/10 dark:bg-cool-slate-900/10 border border-white/20 dark:border-cool-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500";

  return (
    <div className="py-20 gradient-bg animate-fade-in min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className={`${glassCardClass} p-8 max-w-4xl mx-auto`}>
            <div className="relative">
              <Sparkles className="h-12 w-12 text-accent-blue-600 dark:text-accent-blue-400 mx-auto mb-6 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue-600/20 to-soft-coral-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-cool-slate-900 dark:text-white mb-6">
              Let's <span className="gradient-text bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 bg-clip-text text-transparent">Collaborate</span>
            </h1>
            <p className="text-xl text-cool-slate-600 dark:text-cool-slate-300 leading-relaxed">
              Ready to explore how AI can transform your work? Whether you're interested in our products, services, or partnerships, we'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Information Column */}
          <div className="space-y-6">
            <div className={`${glassCardClass} p-8`}>
              <div className="flex items-center mb-8">
                <MessageSquare className="h-8 w-8 text-accent-blue-600 dark:text-accent-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-cool-slate-900 dark:text-white">Get in Touch</h2>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <ContactInfoCard key={index} {...info} />
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className={`${glassCardClass} p-6`}>
              <h3 className="text-lg font-semibold text-cool-slate-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <ActionButton href="mailto:hello@expressiveai.com" variant="primary" className="group">
                  <div className="flex items-center justify-center">
                    Send Direct Email
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </ActionButton>
                <ActionButton to="/join" variant="secondary" className="group">
                  <div className="flex items-center justify-center">
                    Join Early Access
                    <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  </div>
                </ActionButton>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="space-y-6">
            <div className={`${glassCardClass} p-6`}>
              <h3 className="font-semibold text-cool-slate-900 dark:text-white mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-accent-blue-600 dark:text-accent-blue-400" />
                Find Us
              </h3>
              <Map 
                center={[12.9716, 77.5946]} 
                zoom={12}
                className="h-64 w-full rounded-lg"
                showMarker={true}
                markerPopup="ExpressiveAI - Bengaluru, India"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className={`${glassCardClass} p-6 max-w-2xl mx-auto`}>
              <h2 className="text-3xl font-bold text-cool-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-cool-slate-600 dark:text-cool-slate-300 mt-2">
                Find answers to common questions about our services and processes
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;