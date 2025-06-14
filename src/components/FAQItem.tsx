import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem as FAQItemType } from '../types/contact';

interface FAQItemProps extends FAQItemType {
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="glass-card border border-cool-slate-200 dark:border-cool-slate-700 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
    <button
      onClick={onToggle}
      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/50 dark:hover:bg-cool-slate-800/50 transition-all duration-300"
    >
      <h3 className="font-semibold text-cool-slate-900 dark:text-white pr-4">{question}</h3>
      <ChevronDown className={`h-5 w-5 text-cool-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="px-6 pb-4">
        <p className="text-cool-slate-600 dark:text-cool-slate-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  </div>
);

export default FAQItem;