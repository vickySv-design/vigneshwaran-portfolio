import React from 'react';
import { X, Printer, MapPin, Linkedin, GraduationCap, Code2, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-slate-900 light:bg-white rounded-3xl border border-slate-800 light:border-slate-300 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Code2 className="w-5 h-5 text-indigo-400" />
            <span>Vigneshwaran R — Professional Resume Summary</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-300 light:text-slate-800 text-sm leading-relaxed">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 light:border-slate-300 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-white light:text-slate-900">Vigneshwaran R</h1>
            <p className="text-indigo-400 font-semibold">
              Computer Science Engineering Student • Software Developer & Researcher
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 light:text-slate-600 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                Coimbatore, Tamil Nadu, India
              </span>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/vignesh-r-ssec/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                linkedin.com/in/vignesh-r-ssec
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-white light:text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 light:border-slate-200 pb-1">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              Education
            </h2>
            <div>
              <div className="flex justify-between font-semibold text-white light:text-slate-900">
                <span>Bachelor of Engineering — Computer Science and Engineering</span>
                <span className="text-xs text-indigo-400 font-mono">Aug 2023 – Aug 2027</span>
              </div>
              <p className="text-xs text-slate-400">Sree Sakthi Engineering College (Autonomous) • CGPA: 8.5 (In Progress)</p>
            </div>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-white light:text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 light:border-slate-200 pb-1">
              <Code2 className="w-4 h-4 text-cyan-400" />
              Technical Skills & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div><strong className="text-white">Programming:</strong> Java, Python, JavaScript, HTML, CSS</div>
              <div><strong className="text-white">Mobile Dev:</strong> Android Development, Android Studio, Java for Android</div>
              <div><strong className="text-white">Backend & DB:</strong> Python, Flask, REST APIs, MongoDB</div>
              <div><strong className="text-white">Design & Creative:</strong> UI/UX, Adobe Photoshop, Premiere Pro, After Effects, Motion Graphics</div>
            </div>
          </div>

          {/* Key Achievements & Research */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-white light:text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 light:border-slate-200 pb-1">
              <Award className="w-4 h-4 text-amber-400" />
              Honors, Awards & Research
            </h2>
            <ul className="space-y-2 text-xs">
              <li>• <strong>SSEC Visionary Award 2K25:</strong> Tech Excellence & Code Master Award, Sree Sakthi Engineering College (Nov 2025).</li>
              <li>• <strong>Project Expo UTHRA'2K26:</strong> 1st Place Winner at United Institute of Technology (Feb 2026).</li>
              <li>• <strong>Conference Paper Presentation:</strong> Oral presentation on "Enabling Data Storage Security with Blockchain Technology" at ICFTSEM-III-2025 (Feb 2025).</li>
              <li>• <strong>Technovegenza'24 Project Expo:</strong> 1st Prize Winner at Coimbatore Institute of Engineering & Technology (Mar 2024).</li>
              <li>• <strong>Excellence in Digital Designing:</strong> Excellence Prize for college magazine CD cover design (Mar 2024).</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
