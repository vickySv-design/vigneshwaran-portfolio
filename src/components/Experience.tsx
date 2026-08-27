import React from 'react';
import { Briefcase, Calendar, MapPin, Users, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { experienceData } from '../data/experience';

interface ExperienceProps {
  onOpenCertificateModal: (certificateId: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenCertificateModal }) => {
  const freelanceRole = experienceData.find(item => item.type === 'Freelance');
  const trainingRole = experienceData.find(item => item.type === 'Training');

  return (
    <section id="experience" className="py-20 relative bg-slate-950/60 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Roles & Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Work Experience & Knowledge Sharing
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Freelance Experience Card */}
          {freelanceRole && (
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 light:border-slate-200 flex flex-col justify-between relative">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-wider mb-2">
                      {freelanceRole.type} Role
                    </span>
                    <h3 className="text-xl font-bold text-white light:text-slate-900">
                      {freelanceRole.title}
                    </h3>
                    <p className="text-sm font-medium text-indigo-400 light:text-indigo-600 mt-0.5">
                      {freelanceRole.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-slate-400 light:text-slate-600 border-y border-slate-800/60 light:border-slate-200 py-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span>{freelanceRole.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{freelanceRole.location}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 light:text-slate-700">
                  {freelanceRole.description}
                </p>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-400 light:text-slate-500 uppercase tracking-wider">
                    Key Responsibilities & Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {freelanceRole.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* App Dev Training Activity Card */}
          {trainingRole && (
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 light:border-slate-200 flex flex-col justify-between relative">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-wider mb-2">
                      Peer Trainer / Knowledge Sharing
                    </span>
                    <h3 className="text-xl font-bold text-white light:text-slate-900">
                      {trainingRole.title}
                    </h3>
                    <p className="text-sm font-medium text-indigo-400 light:text-indigo-600 mt-0.5">
                      {trainingRole.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-slate-400 light:text-slate-600 border-y border-slate-800/60 light:border-slate-200 py-3">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span>Target Audience: {trainingRole.audience}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 light:text-slate-700">
                  {trainingRole.description}
                </p>

                {/* Training Session Photograph Preview */}
                {trainingRole.image && (
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 light:border-slate-300 group">
                    <img
                      src={trainingRole.image}
                      alt="App Development Training Session"
                      className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-4">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xs font-medium text-white flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                          Training Session Photograph
                        </span>
                        <button
                          onClick={() => onOpenCertificateModal('app-dev-training-2024')}
                          className="px-3 py-1 rounded-md text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                        >
                          View Photo
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 light:text-slate-500 uppercase tracking-wider">
                    Session Focus
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {trainingRole.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 light:text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
