import React from 'react';
import { BookOpen, Calendar, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { researchData } from '../data/research';

interface ResearchProps {
  onOpenCertificateModal: (certificateId: string) => void;
}

export const Research: React.FC<ResearchProps> = ({ onOpenCertificateModal }) => {
  return (
    <section id="research" className="py-20 relative bg-slate-950 light:bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Research & Conference Presentations
          </h2>
          <p className="text-sm text-slate-400 light:text-slate-600 max-w-xl">
            Technical paper presentation at international peer-reviewed conference proceedings.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </div>

        {/* Research Showcase Cards */}
        <div className="space-y-8">
          {researchData.map((paper) => (
            <div
              key={paper.id}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-cyan-950/20 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column Details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-md text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      {paper.type}
                    </span>
                    <span className="px-3 py-1 rounded-md text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                      {paper.presentation}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {paper.date}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white light:text-slate-900 leading-tight">
                    {paper.title}
                  </h3>

                  <div className="p-4 rounded-2xl bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 space-y-2 text-xs sm:text-sm">
                    <p className="text-indigo-300 light:text-indigo-900 font-semibold">
                      {paper.conference}
                    </p>
                    <p className="text-slate-400 light:text-slate-600">
                      <span className="font-semibold text-slate-300">Institution:</span> {paper.associatedInstitution}
                    </p>
                    {paper.organizedJointly && (
                      <p className="text-slate-400 light:text-slate-600">
                        <span className="font-semibold text-slate-300">Organized Jointly By:</span> {paper.organizedJointly}
                      </p>
                    )}
                  </div>

                  <p className="text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                    {paper.description}
                  </p>

                  <button
                    onClick={() => onOpenCertificateModal('blockchain-research-2025')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors shadow-md shadow-cyan-600/20"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>View Conference Presentation Certificate</span>
                  </button>
                </div>

                {/* Right Column Certificate Preview */}
                <div className="lg:col-span-5 flex justify-center">
                  <div
                    onClick={() => onOpenCertificateModal('blockchain-research-2025')}
                    className="relative group cursor-pointer rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl bg-slate-950 w-full max-w-md"
                  >
                    <img
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="px-4 py-2 rounded-xl bg-cyan-600 text-white font-semibold text-xs flex items-center gap-2 shadow-lg">
                        <ExternalLink className="w-4 h-4" />
                        <span>Inspect Certificate</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
