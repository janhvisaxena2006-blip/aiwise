import React from 'react';
import { Cpu, Layers, ShieldCheck, Zap, Server, Activity } from 'lucide-react';

export default function EnterpriseArchitectureSection({ onOpenDashboard }) {
  return (
    <section className="py-20 lg:py-28 bg-[#111111] border-t border-[#282828] relative overflow-hidden">
      
      {/* Background Subtle Lime Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#282828] text-xs font-mono font-bold tracking-widest text-lime uppercase mb-4 shadow-subtle">
            <Cpu className="w-3.5 h-3.5 text-lime" />
            Infrastructure & Compute Telemetry
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            From raw GPU silicon <br className="hidden sm:inline" />
            to top-line business ROI.
          </h2>

          <p className="text-lg text-neutral-400 leading-relaxed font-normal">
            AIWise integrates directly with enterprise GPU clusters, LLM gateway routers, and cloud compute nodes to attribute every micro-cent of AI spending.
          </p>
        </div>

        {/* 2 Large Showcase Image Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Enterprise Hardware GPU Telemetry */}
          <div className="bg-[#161616] border border-[#282828] rounded-xl overflow-hidden hover:border-lime transition-all duration-300 shadow-card group flex flex-col justify-between">
            <div className="relative overflow-hidden aspect-video bg-black/40">
              <img
                src="/assets/enterprise-gpu-hardware.png"
                alt="NVIDIA Enterprise GPU Compute Hardware Telemetry"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-white font-mono text-xs font-bold rounded border border-[#282828] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                  HARDWARE COMPUTE TELEMETRY
                </span>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-[#282828] text-xs font-mono text-lime font-bold">
                NVIDIA H100 / SXM5 ALLOCATION
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-lime font-bold">NODE // 01</span>
                <span className="text-xs font-mono text-neutral-400">99.98% Compute Efficiency</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">
                Bare-Metal & Cloud GPU Telemetry
              </h3>

              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Connect directly with NVIDIA H100/A100 server clusters, AWS Bedrock, and Azure OpenAI to track thermal loads, energy cost per inference, and compute utilization.
              </p>

              <div className="pt-4 border-t border-[#282828] flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Attributed GPU Cost</span>
                <span className="text-white font-bold">₹1.42 / 1K Tokens</span>
              </div>
            </div>
          </div>

          {/* Card 2: AI Neural Routing & Workflow Orchestration */}
          <div className="bg-[#161616] border border-[#282828] rounded-xl overflow-hidden hover:border-lime transition-all duration-300 shadow-card group flex flex-col justify-between">
            <div className="relative overflow-hidden aspect-video bg-black/40">
              <img
                src="/assets/ai-software-interface.png"
                alt="AI Neural Workflow Orchestration Interface"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-white font-mono text-xs font-bold rounded border border-[#282828] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                  NEURAL ROUTING FABRIC
                </span>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-[#282828] text-xs font-mono text-lime font-bold">
                DYNAMIC PROMPT ROUTING
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-lime font-bold">ROUTER // 02</span>
                <span className="text-xs font-mono text-neutral-400">Sub-10ms Gateway Latency</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">
                Automated Prompt & Model Router
              </h3>

              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Intelligently route low-complexity prompts to lightweight open-source models while reserving high-tier LLMs for mission-critical enterprise workflows.
              </p>

              <div className="pt-4 border-t border-[#282828] flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Routing Savings</span>
                <span className="text-lime font-bold">↑ ₹2.1L / Month</span>
              </div>
            </div>

          </div>

        </div>

        {/* Interactive Action Callout */}
        <div className="bg-[#1A1A1A] border border-[#282828] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-subtle">
          <div>
            <div className="font-extrabold text-white text-lg mb-1">
              Want to inspect live compute telemetry for your infrastructure?
            </div>
            <div className="text-sm text-neutral-400">
              Integrate your API keys or cluster endpoints in under 5 minutes with zero code changes.
            </div>
          </div>

          <button
            onClick={onOpenDashboard}
            className="px-6 py-3 bg-lime text-dark font-mono font-bold text-sm rounded hover:bg-lime-hover transition-colors shrink-0 shadow-lime-glow"
          >
            Launch Live Telemetry →
          </button>
        </div>

      </div>
    </section>
  );
}
