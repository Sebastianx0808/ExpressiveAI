import React from 'react';
import { Brain } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="text-center">
        <div className="glass-card p-8 max-w-sm mx-auto">
          <Brain className="h-12 w-12 text-accent-blue-600 dark:text-accent-blue-400 animate-pulse mx-auto mb-4" />
          <p className="text-cool-slate-600 dark:text-cool-slate-300 text-lg">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;