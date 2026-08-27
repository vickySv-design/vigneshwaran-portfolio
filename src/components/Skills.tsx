import React from 'react';
import { Code2, Smartphone, Server, Database, Globe, Wrench, Palette, Compass, Sparkles } from 'lucide-react';
import { skillCategories, explorationAreas } from '../data/skills';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  Smartphone,
  Server,
  Database,
  Globe,
  Wrench,
  Palette
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative bg-slate-950 light:bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Stack & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Categorized Skills & Competencies
          </h2>
          <p className="text-sm text-slate-400 light:text-slate-600 max-w-xl">
            Hands-on technical stack organized by domain expertise and tool mastery.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, idx) => {
            const IconComponent = iconMap[category.iconName] || Code2;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-slate-800 light:border-slate-200 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-600/15 text-indigo-400 border border-indigo-500/30">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white light:text-slate-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 light:bg-slate-200 text-slate-200 light:text-slate-800 border border-slate-800 light:border-slate-300 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Areas of Exploration Card */}
        <div className="glass-card p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-indigo-950/40">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-md">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Currently Exploring & Researching</span>
              </div>
              <h3 className="text-xl font-bold text-white light:text-slate-900">
                Emerging Technology Domains
              </h3>
              <p className="text-xs text-slate-400 light:text-slate-600">
                Active self-study, academic workshops, hackathons, and technical paper research.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 md:max-w-xl">
              {explorationAreas.map((area, areaIdx) => (
                <span
                  key={areaIdx}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-300 light:text-cyan-800 border border-cyan-500/30 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{area}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
