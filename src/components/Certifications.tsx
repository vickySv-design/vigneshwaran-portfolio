import React, { useState, useMemo } from 'react';
import { Award, Search, ExternalLink, Calendar } from 'lucide-react';
import { certificatesData } from '../data/certificates';

interface CertificationsProps {
  onOpenModal: (certificateId: string) => void;
}

const categories = [
  'All',
  'Certification',
  'Workshop',
  'Hackathon',
  'Conference',
  'Achievement',
  'Participation',
  'Training'
];

export const Certifications: React.FC<CertificationsProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCertificates = useMemo(() => {
    return certificatesData.filter((cert) => {
      const matchesCategory =
        selectedCategory === 'All' || cert.category === selectedCategory;
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.type.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="certifications" className="py-20 relative bg-slate-950/80 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Certifications & Event Portfolio
          </h2>
          <p className="text-sm text-slate-400 light:text-slate-600 max-w-xl">
            Interactive repository of all 14 official certificates, awards, research papers, and technical event credentials.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
        </div>

        {/* Filter Controls: Search Bar & Category Buttons */}
        <div className="space-y-6 mb-12">
          
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certificates by title, issuer, or keyword..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 text-white light:text-slate-900 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors shadow-inner"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
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

        </div>

        {/* Certificate Cards Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => onOpenModal(cert.id)}
                className="glass-panel rounded-3xl overflow-hidden border border-slate-800 light:border-slate-200 hover:border-indigo-500/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                {/* Thumbnail Container */}
                <div className="relative h-48 sm:h-52 bg-slate-950 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-[0.95] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs flex items-center gap-2 shadow-lg">
                      <ExternalLink className="w-4 h-4" />
                      <span>Inspect Full Certificate</span>
                    </span>
                  </div>

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                    {cert.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white light:text-slate-900 group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-indigo-400 font-medium mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between text-xs text-slate-400 light:text-slate-600">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {cert.date}
                    </span>
                    <span className="font-semibold text-slate-300 light:text-slate-700">
                      {cert.type}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400">
            No certificates found matching your current filter criteria.
          </div>
        )}

      </div>
    </section>
  );
};
