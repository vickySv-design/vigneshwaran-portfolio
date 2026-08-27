import React, { useState, useMemo } from 'react';
import { FolderGit2, CheckCircle2, Github, ArrowRight, Eye } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { ProjectArchitectureVisual } from './ProjectArchitectureVisual';
import { ProjectModal } from './ProjectModal';

const filterCategories = [
  'All',
  'AI / ML',
  'Computer Vision',
  'Cybersecurity',
  'Full Stack',
  'Real-Time Systems',
  'Academic Project'
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      if (selectedCategory === 'All') return true;
      if (selectedCategory === 'Academic Project') return project.credibilityTag === 'Academic Project';
      return project.filterCategory === selectedCategory;
    });
  }, [selectedCategory]);

  const featuredProjects = filteredProjects.filter((p) => p.isFeatured);
  const otherProjects = filteredProjects.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/80 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Things I've Built
          </h2>
          <p className="text-sm sm:text-base text-slate-300 light:text-slate-700 max-w-2xl leading-relaxed">
            From real-time applications and security systems to computer vision and AI-driven platforms, I enjoy turning complex technical ideas into working software.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 rounded-full" />
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                  : 'bg-slate-900/80 light:bg-slate-200 text-slate-400 light:text-slate-700 hover:bg-slate-800 hover:text-white border border-slate-800 light:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FEATURED PROJECTS SECTION (Highest Visual Priority) */}
        {featuredProjects.length > 0 && (
          <div className="space-y-10 mb-16">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
                ★ Featured Engineering Systems
              </span>
              <div className="flex-1 h-px bg-slate-800" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-panel p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-indigo-950/20 hover:border-indigo-500/60 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
                >
                  <div className="space-y-5">
                    {/* Top Row Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-slate-950 text-cyan-400 border border-slate-800">
                          {project.credibilityTag}
                        </span>
                      </div>
                      {project.reportedMetrics && project.reportedMetrics[0] && (
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          {project.reportedMetrics[0].label}: {project.reportedMetrics[0].value}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl font-bold text-white light:text-slate-900 group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs font-semibold text-indigo-400 mt-0.5">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Short Technical Summary */}
                    <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                      {project.shortSummary}
                    </p>

                    {/* Architecture Flow Visual */}
                    {project.visualType && (
                      <ProjectArchitectureVisual type={project.visualType} />
                    )}

                    {/* Key Capabilities */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Key Architecture Capabilities
                      </h4>
                      <ul className="space-y-1.5">
                        {project.keyFeatures.slice(0, 4).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-slate-950 text-indigo-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-indigo-300 font-semibold text-xs border border-slate-800 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Technical Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 transition-all"
                          title="View GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FULL-STACK & OTHER TECHNICAL PROJECTS */}
        {otherProjects.length > 0 && (
          <div className="space-y-8 mb-16">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                Full-Stack & Intelligent Applications
              </span>
              <div className="flex-1 h-px bg-slate-800" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-panel p-6 rounded-3xl border border-slate-800 light:border-slate-200 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                        {project.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-900">
                        {project.credibilityTag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs text-indigo-400 font-medium">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 light:text-slate-700 leading-relaxed line-clamp-3">
                      {project.shortSummary}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                      <span>Explore Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROJECT SECTION END CTA */}
        <div className="glass-card p-10 sm:p-12 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/30 via-slate-900/90 to-slate-950 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Have a problem worth solving?
            </h3>
            <p className="text-base font-bold text-indigo-400">
              Let's build it.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/vickySv-design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Profile</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs border border-slate-800 transition-all"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4 text-indigo-400" />
            </a>
          </div>
        </div>

      </div>

      {/* Expanded Project Detail Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};
