import React from 'react';
import { Linkedin, MapPin, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-base">
              <Code2 className="w-5 h-5 text-indigo-400" />
              <span>Vigneshwaran R</span>
            </div>
            <p className="text-slate-400">
              Computer Science Engineering Student • Developer & Researcher
            </p>
            <p className="text-slate-500 flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              Coimbatore, Tamil Nadu, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/vignesh-r-ssec/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-1.5 font-medium"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-slate-500">
            <p>© 2026 Vigneshwaran R. All rights reserved.</p>
            <p className="text-[11px] mt-0.5">Engineered with React, TypeScript & Tailwind CSS</p>
          </div>

        </div>
      </div>
    </footer>
  );
};
