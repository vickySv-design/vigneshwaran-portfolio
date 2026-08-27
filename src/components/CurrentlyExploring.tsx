import React from 'react';
import { Compass, Sparkles, TrendingUp, Cpu, Cloud, ShieldCheck, Code } from 'lucide-react';

const explorationCards = [
  {
    title: 'Full-Stack Development',
    description: 'Mastering end-to-end web architectures, REST API integration, state management, and modern component frameworks.',
    icon: Code,
    color: 'from-blue-500/20 to-indigo-500/10'
  },
  {
    title: 'AI / Machine Learning',
    description: 'Exploring deep learning models for NLP, prompt engineering strategies, and practical neural network applications.',
    icon: Cpu,
    color: 'from-purple-500/20 to-indigo-500/10'
  },
  {
    title: 'Cloud Technologies',
    description: 'Learning cloud hosting principles, serverless deployments, containerized services, and scalable infrastructure.',
    icon: Cloud,
    color: 'from-cyan-500/20 to-teal-500/10'
  },
  {
    title: 'Smart Systems & IoT',
    description: 'Integrating automated device verification, dynamic QR engines, and real-time hardware-software validation.',
    icon: Sparkles,
    color: 'from-amber-500/20 to-indigo-500/10'
  },
  {
    title: 'Cybersecurity Principles',
    description: 'Studying network security fundamentals, threat surface analysis, data storage encryption, and defensive coding.',
    icon: ShieldCheck,
    color: 'from-emerald-500/20 to-teal-500/10'
  },
  {
    title: 'Modern Web Technologies',
    description: 'Investigating high-performance frontend toolchains, responsive design paradigms, and accessible UI engineering.',
    icon: TrendingUp,
    color: 'from-pink-500/20 to-rose-500/10'
  }
];

export const CurrentlyExploring: React.FC = () => {
  return (
    <section className="py-20 relative bg-slate-950 light:bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Growth & Learning Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Currently Exploring
          </h2>
          <p className="text-sm text-slate-400 light:text-slate-600 max-w-xl">
            Continuously broadening technical horizons across emerging software engineering disciplines.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {explorationCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.color} rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500`} />

                <div className="space-y-3 relative z-10">
                  <div className="p-3 rounded-2xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 text-cyan-400 w-fit">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white light:text-slate-900">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-300 light:text-slate-700 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
