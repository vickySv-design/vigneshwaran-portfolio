import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      if (documentHeight > 0) {
        const percentage = (window.scrollY / documentHeight) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, percentage)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-900/50">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600 transition-all duration-150"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};
