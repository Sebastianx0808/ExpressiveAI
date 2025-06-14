import React from 'react';
import { ActionButtonProps } from '../types/contact';

const ActionButton: React.FC<ActionButtonProps> = ({ 
  href, 
  to, 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}) => {
  const baseClasses = "block w-full glass-button text-center transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl px-6 py-3 rounded-lg font-medium";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent-blue-600 to-soft-coral-500 text-white hover:from-accent-blue-700 hover:to-soft-coral-600 hover-glow",
    secondary: "border-2 border-accent-blue-600 dark:border-accent-blue-400 text-accent-blue-600 dark:text-accent-blue-400 hover:bg-accent-blue-600 hover:text-white dark:hover:bg-accent-blue-400 dark:hover:text-cool-slate-900 hover:border-transparent"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <a href={to} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default ActionButton;