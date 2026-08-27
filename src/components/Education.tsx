import React from 'react';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950 light:bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Education & Qualifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {educationData.map((edu) => {
            const isBe = edu.id === 'be-cse';
            return (
              <div
                key={edu.id}
                className={`glass-panel p-8 sm:p-10 rounded-3xl border transition-all duration-300 relative ${
                  isBe
                    ? 'border-indigo-500/40 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-indigo-950/20 shadow-xl'
                    : 'border-slate-800 light:border-slate-200 opacity-90'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-md text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                        {edu.status}
                      </span>
                      {edu.cgpaOrGrade && (
                        <span className="px-3 py-1 rounded-md text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono">
                          {edu.cgpaOrGrade}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900">
                      {edu.degree}
                    </h3>

                    <p className="text-sm font-semibold text-indigo-400">
                      {edu.institution}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed pt-2">
                      {edu.description}
                    </p>

                    {/* Academic Activities */}
                    {edu.activities && (
                      <div className="pt-4 border-t border-slate-800/60 light:border-slate-200 space-y-2">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Key Campus Activities & Leadership
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {edu.activities.map((act, actIdx) => (
                            <div key={actIdx} className="flex items-center gap-2 text-xs text-slate-300 light:text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                              <span>{act}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 light:bg-slate-200 px-4 py-2 rounded-xl border border-slate-800 light:border-slate-300 shrink-0">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span>{edu.duration}</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
