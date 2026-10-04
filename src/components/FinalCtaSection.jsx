import React from 'react';
import { ArrowRight } from 'lucide-react';
import GlowingFlowsCanvas from './GlowingFlowsCanvas';

export default function FinalCtaSection({ onOpenDashboard }) {
  return (
    <section className="bg-dark text-white relative overflow-hidden">
      
      {/* Top Telemetry Flow Strand Animation */}
      <GlowingFlowsCanvas height={220} label="TL.003 LIVE DECISION ENGINE · TELEMETRY STANDBY" />

      <div className="py-20 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono font-bold tracking-widest text-lime uppercase mb-8 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          Enterprise Financial Intelligence
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
          Your AI budget deserves intelligence.
        </h2>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed mb-12">
          Stop guessing where your AI money goes. Start understanding what it creates.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDashboard}
            className="w-full sm:w-auto px-10 py-5 text-lg font-extrabold text-dark bg-lime hover:bg-lime-hover transition-all shadow-lime-glow rounded-md flex items-center justify-center gap-3 group cursor-pointer"
          >
            Launch AIWise
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Subtext */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-500">
          <span>Instant API Key Integration</span>
          <span>•</span>
          <span>SOC2 Type II Certified</span>
          <span>•</span>
          <span>Zero Code Changes Required</span>
        </div>

      </div>
    </section>
  );
}
