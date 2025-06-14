import React from 'react';
import { ContactInfoCardProps } from '../types/contact';

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ 
  icon: Icon, 
  title, 
  content, 
  subtitle, 
  bgColor, 
  iconColor 
}) => (
  <div className="group cursor-pointer">
    <div className="flex items-start space-x-4 p-6 rounded-xl glass-card hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
      <div className={`glass ${bgColor} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-cool-slate-900 dark:text-white mb-1 group-hover:text-accent-blue-600 dark:group-hover:text-accent-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-cool-slate-600 dark:text-cool-slate-300 font-medium">{content}</p>
        <p className="text-sm text-cool-slate-500 dark:text-cool-slate-400 italic mt-1">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default ContactInfoCard;