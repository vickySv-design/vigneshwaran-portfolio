import React from 'react';
import { ArrowRight, Linkedin, FileText, MapPin, Code2, Cpu, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden tech-grid-pattern">
      {/* Dynamic Background Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 dark:bg-indigo-600/15 light:bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 light:bg-indigo-50/80 border border-slate-800 light:border-indigo-200 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300 light:text-indigo-950 tracking-wide">
                B.E. CSE Student • Sree Sakthi Engineering College
              </span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <span className="text-base sm:text-lg font-medium text-indigo-400 light:text-indigo-600 tracking-wide">
                Hi, I'm Vigneshwaran R
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white light:text-slate-900 tracking-tight leading-[1.15]">
                I build practical software <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
                  and explore emerging technology.
                </span>
              </h1>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-700 leading-relaxed max-w-2xl">
              Computer Science Engineering student passionate about Android development, backend systems, AI/ML, cybersecurity, research, and building technology that solves real-world problems.
            </p>

            {/* Location & Key Tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 light:text-slate-600 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Full-Stack & Mobile</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span>AI/ML & Smart Systems</span>
              </div>
            </div>

            {/* Action Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 light:bg-slate-200/80 hover:bg-slate-800 text-slate-200 light:text-slate-800 font-semibold text-sm border border-slate-800 light:border-slate-300 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Let's Connect</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vignesh-r-ssec/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3.5 rounded-xl bg-slate-900/80 light:bg-slate-200/80 text-slate-300 light:text-slate-700 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/50 border border-slate-800 light:border-slate-300 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5 text-indigo-400" />
              </a>

              <button
                onClick={onOpenResume}
                aria-label="Download Resume"
                className="inline-flex items-center gap-2 p-3.5 rounded-xl bg-slate-900/80 light:bg-slate-200/80 text-slate-300 light:text-slate-700 hover:text-white hover:bg-slate-800 border border-slate-800 light:border-slate-300 transition-all duration-200"
              >
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-semibold">Resume</span>
              </button>
            </div>

          </div>

          {/* Profile Photo Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Outer Glowing Border Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-600 opacity-60 group-hover:opacity-100 blur-lg transition duration-500 group-hover:duration-200"></div>

              {/* Photo Card Frame */}
              <div className="relative rounded-3xl p-2 bg-slate-950 light:bg-white border border-slate-800/80 light:border-slate-200 overflow-hidden shadow-2xl">
                <img
                  src="/photo/R_vigneshwaran.jpg"
                  alt="Vigneshwaran R"
                  className="w-full max-w-[340px] sm:max-w-[380px] h-[420px] sm:h-[460px] object-cover object-top rounded-2xl filter brightness-[1.02] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Floating Micro-Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-xl bg-slate-950/85 light:bg-white/90 backdrop-blur-md border border-slate-800/80 light:border-slate-200/80 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white light:text-slate-900">Vigneshwaran R</p>
                      <p className="text-[11px] text-slate-400 light:text-slate-500">Student Developer & Researcher</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 font-mono">
                    CGPA 8.5
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
