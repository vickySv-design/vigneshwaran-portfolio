import React, { useState } from 'react';
import { Linkedin, FileText, MapPin, Copy, Check, MessageSquare } from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLocation = () => {
    navigator.clipboard.writeText('Vigneshwaran R — Coimbatore, Tamil Nadu, India');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/95 light:bg-slate-50">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto glass-card p-8 sm:p-14 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-indigo-950/40 text-center space-y-8 shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Professional Network & Collaboration</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
              Let's build something meaningful.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-700 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in learning, building, collaborating, and exploring new ideas in technology.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/vignesh-r-ssec/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-slate-900 light:bg-slate-200 hover:bg-slate-800 text-slate-200 light:text-slate-800 font-semibold text-sm border border-slate-800 light:border-slate-300 hover:-translate-y-0.5 transition-all duration-200"
            >
              <FileText className="w-5 h-5 text-cyan-400" />
              <span>View Resume Summary</span>
            </button>

            {/* Copy Info Button */}
            <button
              onClick={handleCopyLocation}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900/80 light:bg-slate-200 text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 light:border-slate-300 text-xs font-semibold transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-indigo-400" />
                  <span>Copy Professional Details</span>
                </>
              )}
            </button>
          </div>

          {/* Location Badge */}
          <div className="pt-6 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span>Coimbatore, Tamil Nadu, India • Sree Sakthi Engineering College</span>
          </div>

        </div>

      </div>
    </section>
  );
};
