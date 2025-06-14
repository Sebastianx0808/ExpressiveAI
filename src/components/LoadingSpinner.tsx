import React, { useState, useEffect } from 'react';
import { Brain, Sparkles, Heart, Zap, Rocket, Globe, Lightbulb, Target } from 'lucide-react';

const LoadingSpinner = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);

  const loadingMessages = [
    { text: "Initializing AI Intelligence...", icon: <Brain className="h-6 w-6" /> },
    { text: "Preparing Creative Tools...", icon: <Sparkles className="h-6 w-6" /> },
    { text: "Loading Human-Centered Features...", icon: <Heart className="h-6 w-6" /> },
    { text: "Powering Up Innovation...", icon: <Zap className="h-6 w-6" /> },
    { text: "Almost Ready to Transform...", icon: <Rocket className="h-6 w-6" /> }
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950 transition-colors duration-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-300/30 dark:to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-48 h-48 bg-gradient-to-r from-pink-400/20 to-orange-400/20 dark:from-pink-300/30 dark:to-orange-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-green-400/20 dark:from-cyan-300/30 dark:to-green-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating Glass Orbs */}
      <div className="absolute top-1/4 left-16 w-4 h-4 bg-white/30 dark:bg-white/20 backdrop-blur-sm rounded-full animate-float border border-white/40 dark:border-white/20"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-white/20 dark:bg-white/15 backdrop-blur-sm rounded-full animate-float border border-white/30 dark:border-white/15" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white/40 dark:bg-white/25 backdrop-blur-sm rounded-full animate-float border border-white/50 dark:border-white/25" style={{animationDelay: '3s'}}></div>

      {/* Main Loading Card */}
      <div className="text-center relative z-10">
        <div className="glass-card p-12 max-w-md mx-auto bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/50 dark:border-white/30 rounded-3xl shadow-2xl">
          
          {/* Animated Brain Logo */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full blur opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <Brain className="h-10 w-10 text-white animate-bounce" />
            </div>
            
            {/* Orbiting Icons */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 dark:from-pink-400 dark:to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <Lightbulb className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 dark:from-green-400 dark:to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                  <Target className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                  <Globe className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-400 dark:to-red-400 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Brand Name with Gradient */}
          <h1 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Expressive AI
            </span>
          </h1>

          {/* Loading Message with Icon */}
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="text-blue-600 dark:text-blue-400 animate-pulse">
                {loadingMessages[currentMessage].icon}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg font-medium animate-fade-in">
                {loadingMessages[currentMessage].text}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full transition-all duration-300 relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
              </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 text-center">
              {Math.round(Math.min(progress, 100))}% Complete
            </p>
          </div>

          {/* Pulsing Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-3 h-3 bg-pink-600 dark:bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>

          {/* Welcome Message */}
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
            <p className="text-sm text-slate-600 dark:text-slate-300 flex items-center justify-center">
              <Heart className="h-4 w-4 text-red-500 dark:text-red-400 mr-2 animate-pulse" />
              Welcome back, Sebastianx0808!
              <Sparkles className="h-4 w-4 text-yellow-500 dark:text-yellow-400 ml-2 animate-pulse" />
            </p>
          </div>
        </div>

        {/* Floating Elements Around Card */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute -top-4 -right-8 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 dark:from-pink-300 dark:to-red-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-6 -right-4 w-10 h-10 bg-gradient-to-r from-green-400 to-cyan-500 dark:from-green-300 dark:to-cyan-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute -bottom-4 -left-8 w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-500 dark:from-purple-300 dark:to-blue-400 rounded-full opacity-80 animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Bottom Tagline */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-slate-500 dark:text-slate-400 text-sm text-center px-4">
          Bringing AI to minds shaping culture, strategy, and meaning
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;