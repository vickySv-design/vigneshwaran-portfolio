import React from 'react';
import { Flame, ExternalLink } from 'lucide-react';

interface HackathonsProps {
  onOpenCertificateModal: (certificateId: string) => void;
}

export const Hackathons: React.FC<HackathonsProps> = ({ onOpenCertificateModal }) => {
  return (
    <section className="py-16 relative bg-slate-950 light:bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            <span>Competitive Coding</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Hackathons & Coding Challenges
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* HackIndia 2025 */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 light:border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30">
                  Web3 & AI Hackathon
                </span>
                <span className="text-xs text-slate-400 font-mono">2025</span>
              </div>

              <h3 className="text-xl font-bold text-white light:text-slate-900">
                HackIndia 2025
              </h3>

              <p className="text-xs text-indigo-400 font-medium">
                Issuer: HackIndia / SingularityNET • Represented SSEC CSE Dept
              </p>

              <div
                onClick={() => onOpenCertificateModal('hackindia-2025')}
                className="relative rounded-2xl overflow-hidden border border-slate-800 light:border-slate-300 group cursor-pointer"
              >
                <img
                  src="/certificates/hackindia-2025.jpg"
                  alt="HackIndia 2025 Certificate"
                  className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold text-xs flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Participation Certificate</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                Participated in national-level Web3 and AI hackathon, exploring smart system integration and decentralized concepts.
              </p>
            </div>
          </div>

          {/* Code O Clock */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 light:border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                  24-Hour Hackathon
                </span>
                <span className="text-xs text-slate-400 font-mono">18–19 Oct 2024</span>
              </div>

              <h3 className="text-xl font-bold text-white light:text-slate-900">
                Code O Clock
              </h3>

              <p className="text-xs text-indigo-400 font-medium">
                Coimbatore Institute of Technology (CIT)
              </p>

              <div
                onClick={() => onOpenCertificateModal('code-o-clock-2024')}
                className="relative rounded-2xl overflow-hidden border border-slate-800 light:border-slate-300 group cursor-pointer"
              >
                <img
                  src="/certificates/code-o-clock.jpg"
                  alt="Code O Clock Hackathon Certificate"
                  className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold text-xs flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Participation Certificate</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                Engaged in 24 hours of non-stop application development and problem solving at Coimbatore Institute of Technology.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
