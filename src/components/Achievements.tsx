import React from 'react';
import { Trophy, Award, Star, ExternalLink } from 'lucide-react';
import { achievementsData } from '../data/achievements';

interface AchievementsProps {
  onOpenCertificateModal: (certificateId: string) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onOpenCertificateModal }) => {
  const heroAchievement = achievementsData.find(a => a.isHero);
  const otherAchievements = achievementsData.filter(a => !a.isHero);

  return (
    <section id="achievements" className="py-20 relative bg-slate-950/70 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Key Institutional Achievements
          </h2>
          <p className="text-sm text-slate-400 light:text-slate-600 max-w-xl">
            Awards, first-place prizes, and technical excellence recognitions.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-indigo-500 rounded-full" />
        </div>

        {/* Hero Achievement Showcase: SSEC Visionary Award 2K25 */}
        {heroAchievement && (
          <div className="mb-12 glass-card p-8 sm:p-10 rounded-3xl border border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-slate-900/90 to-indigo-950/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-6 py-1 bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-bl-2xl">
              ★ Featured Hero Award
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Image Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div
                  onClick={() => onOpenCertificateModal(heroAchievement.id)}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-slate-950 w-full max-w-md"
                >
                  <img
                    src={heroAchievement.image}
                    alt={heroAchievement.title}
                    className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Award Trophy Photograph</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{heroAchievement.recognition}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white light:text-slate-900">
                  {heroAchievement.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-amber-400">
                  {heroAchievement.institution} • {heroAchievement.date}
                </p>

                <p className="text-sm sm:text-base text-slate-300 light:text-slate-700 leading-relaxed">
                  {heroAchievement.description}
                </p>

                <button
                  onClick={() => onOpenCertificateModal(heroAchievement.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-amber-500/20"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Inspect Award Plaque</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Grid of Other Important Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 light:border-slate-200 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-2">
                      <Award className="w-3.5 h-3.5" />
                      <span>{achievement.recognition}</span>
                    </span>
                    <h4 className="text-xl font-bold text-white light:text-slate-900">
                      {achievement.title}
                    </h4>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-slate-800 light:border-slate-300 group cursor-pointer"
                  onClick={() => onOpenCertificateModal(achievement.id)}
                >
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold text-xs flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Inspect Certificate</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs text-indigo-400 font-medium">
                  {achievement.institution} • {achievement.date}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
