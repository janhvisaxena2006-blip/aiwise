import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenDashboard }) {
  return (
    <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 overflow-hidden bg-[#111111]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Uppercase Small Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#282828] bg-[#1A1A1A] text-xs font-mono font-semibold tracking-widest text-lime uppercase mb-8 shadow-subtle">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          AI Financial Intelligence
        </div>

        {/* Large Bold Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-8">
          Know what your AI costs. <br className="hidden sm:inline" />
          Know what it <span className="relative inline-block text-white">
            earns.
            <span className="absolute left-0 bottom-1.5 sm:bottom-2.5 w-full h-3 sm:h-4 bg-lime -z-10 opacity-90 rounded-xs" />
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed mb-10">
          AIWise helps enterprises understand AI spending, optimize workflows and connect AI investments to measurable business value.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-dark bg-lime hover:bg-lime-hover transition-all shadow-subtle hover:shadow-lime-glow rounded-md flex items-center justify-center gap-2 group"
          >
            Explore AIWise
          </a>

          <button
            onClick={onOpenDashboard}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#1A1A1A] border border-[#282828] hover:border-lime hover:bg-lime hover:text-dark transition-all shadow-subtle rounded-md flex items-center justify-center gap-2 group"
          >
            View Dashboard
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-lime group-hover:text-dark" />
          </button>
        </div>

        {/* Subtle trust badge */}
        <div className="pt-6 border-t border-[#282828] flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-neutral-500 uppercase tracking-wider">
          <span>Enterprise-Grade Billing Telemetry</span>
          <span className="hidden sm:inline text-neutral-700">•</span>
          <span>LLM API Cost Allocation</span>
          <span className="hidden sm:inline text-neutral-700">•</span>
          <span>ROI & Value Attribution</span>
        </div>

      </div>
    </section>
  );
}
