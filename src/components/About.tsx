import React from 'react';
import { Quote, CheckCircle2, UserCheck, Terminal, Award } from 'lucide-react';

const activeEngagements = [
  'Coding Activities & Contests',
  'Hackathons & Technical Expos',
  'Technical Paper Presentations',
  'Android Development Projects',
  'Technical Clubs Leadership',
  'Public Speaking & Anchoring',
  'Continuous Technical Learning'
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-950/50 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Vigneshwaran</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Engineering Driven by Curiosity & Code
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Authentic Biography Card */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white light:text-slate-900">
                    Computer Science Engineering Student
                  </h3>
                  <p className="text-xs text-indigo-400 font-medium">Sree Sakthi Engineering College (2023–2027)</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a Computer Science Engineering student at Sree Sakthi Engineering College who enjoys turning ideas into practical, real-world technology solutions.
                </p>
                <p>
                  My technical focus spans hands-on Android development using Java, backend architecture with Python and Flask, database modeling using MongoDB, AI/ML exploration, cybersecurity fundamentals, and smart-system research.
                </p>
                <p>
                  Beyond software engineering, I bring strong creative skills in UI/UX design, motion graphics, graphic asset creation, and video editing — bridging technical logic with clean user interfaces.
                </p>
              </div>

              {/* Active Engagement Tags */}
              <div className="pt-4 border-t border-slate-800/80 light:border-slate-200">
                <h4 className="text-xs font-bold text-slate-400 light:text-slate-500 uppercase tracking-wider mb-3">
                  Active Academic & Technical Pursuits
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeEngagements.map((item, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-300 light:text-slate-800 hover:border-indigo-500/50 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Visual Quote Banner & Snapshot Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual Philosophy Quote Banner */}
            <div className="glass-card p-8 rounded-3xl border border-indigo-500/30 relative overflow-hidden flex flex-col justify-center bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-950/80">
              <Quote className="w-12 h-12 text-indigo-500/20 absolute top-4 right-4" />
              <div className="relative z-10 space-y-4">
                <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                  Personal Philosophy
                </span>
                <blockquote className="text-lg sm:text-xl font-medium text-white light:text-slate-900 italic leading-snug">
                  “Engineering is not just a degree, it's a mindset — I’m building mine one project at a time.”
                </blockquote>
                <p className="text-xs text-slate-400 text-right font-mono">— Vigneshwaran R</p>
              </div>
            </div>

            {/* Academic Snapshot Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Academic Standard
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Degree in Progress
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center">
                  <p className="text-2xl font-extrabold text-white light:text-slate-900">8.5</p>
                  <p className="text-xs text-slate-400 light:text-slate-600 mt-1">Current CGPA</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center">
                  <p className="text-2xl font-extrabold text-indigo-400">2023–27</p>
                  <p className="text-xs text-slate-400 light:text-slate-600 mt-1">B.E. CSE Batch</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 text-xs text-slate-300 light:text-slate-700">
                <Award className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Active in paper presentations, hackathons, and app development activities.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
