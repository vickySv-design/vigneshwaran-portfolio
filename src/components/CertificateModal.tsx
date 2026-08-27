import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificatesData } from '../data/certificates';

interface CertificateModalProps {
  certificateId: string | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificateId, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    if (certificateId) {
      const idx = certificatesData.findIndex((c) => c.id === certificateId);
      if (idx !== -1) {
        setCurrentIndex(idx);
        setIsZoomed(false);
      }
    }
  }, [certificateId]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsZoomed(false);
    } else {
      setCurrentIndex(certificatesData.length - 1);
      setIsZoomed(false);
    }
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < certificatesData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsZoomed(false);
    } else {
      setCurrentIndex(0);
      setIsZoomed(false);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!certificateId) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificateId, onClose, handlePrev, handleNext]);

  if (!certificateId || currentIndex === -1) return null;

  const certificate = certificatesData[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Click Backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-slate-900 light:bg-white rounded-3xl border border-slate-800 light:border-slate-200 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Top Floating Controls */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            title={isZoomed ? "Zoom Out" : "Zoom In"}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            title="Close (ESC)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Left Column: High-Res Image View */}
        <div className="lg:w-7/12 bg-slate-950 p-4 sm:p-6 flex items-center justify-center relative min-h-[300px] sm:min-h-[420px] overflow-auto">
          
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-800 transition-all z-10"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Certificate Image */}
          <img
            src={certificate.image}
            alt={certificate.title}
            className={`max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl transition-transform duration-300 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-800 transition-all z-10"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Counter Badge */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/90 text-slate-400 text-xs font-mono border border-slate-800">
            {currentIndex + 1} / {certificatesData.length}
          </div>
        </div>

        {/* Right Column: Metadata & Details */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[50vh] lg:max-h-full">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 uppercase tracking-wider">
                {certificate.category}
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-700">
                {certificate.type}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 leading-snug">
              {certificate.title}
            </h2>

            <div className="space-y-1 text-xs sm:text-sm">
              <p className="text-indigo-400 font-medium">
                Issuer: <span className="text-white light:text-slate-900">{certificate.issuer}</span>
              </p>
              <p className="text-slate-400 flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                Date: {certificate.date}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800 light:border-slate-200">
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                {certificate.description}
              </p>
            </div>

            {/* Highlights */}
            {certificate.highlights && (
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Certificate Highlights
                </h4>
                <div className="space-y-1.5">
                  {certificate.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 light:text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-800 light:border-slate-200 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1 text-indigo-400">
              <ShieldCheck className="w-4 h-4" />
              Verified Portfolio Asset
            </span>
            <span>Use Left/Right arrows to navigate</span>
          </div>
        </div>

      </div>
    </div>
  );
};
