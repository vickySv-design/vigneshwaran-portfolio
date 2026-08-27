import React from 'react';
import { Camera, ShieldAlert, Cpu, Server, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProjectArchitectureVisualProps {
  type?: 'industrial-flash' | 'deep-waf' | 'disaster-ai' | 'qr-buddy' | 'vc-intel' | 'tars' | 'skin-disease';
}

export const ProjectArchitectureVisual: React.FC<ProjectArchitectureVisualProps> = ({ type }) => {
  if (!type) return null;

  switch (type) {
    case 'industrial-flash':
      return (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-indigo-500/30 text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-mono text-[11px] font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-cyan-400" />
              Vision Segmentation Pipeline
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 font-mono">
              Detectron2 + ResNet-50
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono text-[11px]">
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <p className="text-slate-400 text-[10px]">Step 01</p>
              <p className="text-white font-bold">Camera Frame</p>
            </div>
            <div className="p-2 rounded-xl bg-indigo-950/60 border border-indigo-500/40 space-y-1">
              <p className="text-indigo-300 text-[10px]">Step 02</p>
              <p className="text-indigo-200 font-bold">Detectron2 FPN</p>
            </div>
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <p className="text-cyan-400 text-[10px]">Step 03</p>
              <p className="text-white font-bold">Flash Mask</p>
            </div>
            <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40 space-y-1">
              <p className="text-emerald-400 text-[10px]">Step 04</p>
              <p className="text-emerald-300 font-bold">PASS / REJECT</p>
            </div>
          </div>
        </div>
      );

    case 'deep-waf':
      return (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-rose-500/30 text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-mono text-[11px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              Hybrid WAF Security Pipeline
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-300 font-mono">
              PyTorch Char-CNN (160k params)
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center font-mono text-[11px]">
            <div className="w-full sm:w-auto px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              HTTP Request Stream
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block shrink-0" />
            <div className="w-full sm:w-auto px-3 py-2 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 font-bold">
              Signature Checker (Regex)
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block shrink-0" />
            <div className="w-full sm:w-auto px-3 py-2 rounded-xl bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 font-bold">
              Character CNN (500 chars)
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block shrink-0" />
            <div className="w-full sm:w-auto px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              BLOCK / FORWARD
            </div>
          </div>
        </div>
      );

    case 'disaster-ai':
      return (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/30 text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-mono text-[11px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              Multi-Hazard AI EOC Flow
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-300 font-mono">
              Bi-LSTM + XGBoost + YOLOv8
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center font-mono text-[10px]">
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              Sensors Telemetry
            </div>
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-indigo-300">
              Data Processing
            </div>
            <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 font-bold">
              Flood AI Bi-LSTM
            </div>
            <div className="p-2 rounded-xl bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 font-bold">
              A* Route Optimizer
            </div>
            <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-bold col-span-2 sm:col-span-1">
              Emergency Broadcast
            </div>
          </div>
        </div>
      );

    case 'qr-buddy':
      return (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-indigo-500/30 text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-mono text-[11px] font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-cyan-400" />
              Dual-Backend Cloud Architecture
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 font-mono">
              React + Node Express + Flask + Mongo Atlas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center font-mono text-[11px]">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <p className="text-cyan-400 font-bold">Frontend App</p>
              <p className="text-[10px] text-slate-400">React 18 + Capacitor</p>
            </div>
            <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/40 space-y-1">
              <p className="text-indigo-300 font-bold">Dual API Server</p>
              <p className="text-[10px] text-slate-400">Node Express 5 + Flask 3</p>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 space-y-1">
              <p className="text-emerald-300 font-bold">Database Cloud</p>
              <p className="text-[10px] text-slate-400">MongoDB Atlas</p>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
