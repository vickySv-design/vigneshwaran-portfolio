import React from 'react';
import { Milestone } from 'lucide-react';
import { timelineData } from '../data/timeline';

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 relative bg-slate-950/90 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5" />
            <span>Chronological Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Milestones & Progression
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-indigo-500/20 -translate-x-1/2" />

          <div className="space-y-8 relative">
            {timelineData.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 shadow-md shadow-indigo-500/50 z-10 mt-6" />

                  {/* Event Card Content */}
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="glass-panel p-6 rounded-2xl border border-slate-800 light:border-slate-200 hover:border-indigo-500/40 transition-all duration-300 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {event.year}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                          {event.category}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white light:text-slate-900">
                        {event.title}
                      </h3>

                      {event.institution && (
                        <p className="text-xs font-medium text-cyan-400">
                          {event.institution}
                        </p>
                      )}

                      <p className="text-xs text-slate-300 light:text-slate-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
