import React from 'react';
import { Smartphone, Server, Cpu, Palette, Layers } from 'lucide-react';

const coreServices = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    subtitle: 'Native Android Applications',
    description: 'Building intuitive Android applications using Java and Android Studio with custom layouts, verification flows, and local storage integration.',
    tags: ['Android Studio', 'Java', 'Android SDK', 'XML Layouts', 'App Verification'],
    color: 'from-blue-500/20 to-indigo-500/10',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400'
  },
  {
    icon: Server,
    title: 'Backend Development',
    subtitle: 'APIs & Database Architecture',
    description: 'Developing secure backend systems with Python, Flask, and MongoDB. Implementing REST APIs, role-based authentication, and data pipelines.',
    tags: ['Python', 'Flask', 'MongoDB', 'REST APIs', 'Auth & Security'],
    color: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400'
  },
  {
    icon: Cpu,
    title: 'Research & Emerging Tech',
    subtitle: 'AI, Blockchain & Smart Systems',
    description: 'Exploring machine learning models for Natural Language Processing, smart attendance systems, and blockchain data security architectures.',
    tags: ['AI/ML', 'Blockchain', 'Smart Systems', 'Cybersecurity', 'NLP Research'],
    color: 'from-purple-500/20 to-indigo-500/10',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400'
  },
  {
    icon: Palette,
    title: 'Creative Technology',
    subtitle: 'UI/UX & Motion Design',
    description: 'Designing user interfaces and crafting motion graphics, video editing, and digital media using Photoshop, Premiere Pro, After Effects, and Blender.',
    tags: ['UI/UX Design', 'After Effects', 'Premiere Pro', 'Photoshop', 'Blender', 'Motion Graphics'],
    color: 'from-pink-500/20 to-rose-500/10',
    borderColor: 'border-pink-500/30',
    iconColor: 'text-pink-400'
  }
];

export const WhatIDo: React.FC = () => {
  return (
    <section className="py-20 relative bg-slate-950 light:bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            What I Do & Build
          </h2>
          <p className="text-sm sm:text-base text-slate-400 light:text-slate-600 max-w-xl">
            Combining software engineering logic with creative digital design to solve real-world problems.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </div>

        {/* 4 Major Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`glass-panel p-8 rounded-3xl border ${service.borderColor} hover:border-opacity-80 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`} />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 ${service.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-indigo-400 light:text-indigo-600 mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-6 mt-6 border-t border-slate-800/60 light:border-slate-200/80 flex flex-wrap gap-2 relative z-10">
                  {service.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900/80 light:bg-slate-200/80 text-slate-300 light:text-slate-800 border border-slate-800/80 light:border-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
