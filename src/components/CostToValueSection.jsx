import React from 'react';
import { ArrowRight, ArrowDown, AlertTriangle, RefreshCw, Zap, Compass, BarChart2, Gauge, TrendingUp, CheckCircle2 } from 'lucide-react';
import GlowingFlowsCanvas from './GlowingFlowsCanvas';

export default function CostToValueSection() {
  const sequenceSteps = [
    { name: 'TRACK', desc: 'Real-time telemetry', icon: Compass },
    { name: 'ANALYZE', desc: 'Cost/Value correlation', icon: BarChart2 },
    { name: 'OPTIMIZE', desc: 'Model & prompt routing', icon: Gauge },
    { name: 'MEASURE', desc: 'Attributed ROI calculation', icon: TrendingUp },
    { name: 'DECIDE', desc: 'Automated governance', icon: CheckCircle2 },
  ];

  const decisionActions = [
    {
      badge: 'STOP',
      badgeColor: 'bg-red-500/20 text-red-400 border-red-500/30',
      title: 'Low-value AI',
      description: 'Automatically flag and deprecate AI workflows where costs exceed economic impact.',
      metric: '-82% ROI Warning',
      icon: AlertTriangle,
      iconColor: 'text-red-400',
    },
    {
      badge: 'OPTIMIZE',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      title: 'Inefficient AI',
      description: 'Route non-critical prompts to low-cost models or cache frequent embeddings.',
      metric: '₹2.1L/mo Potential Savings',
      icon: RefreshCw,
      iconColor: 'text-amber-300',
    },
    {
      badge: 'SCALE',
      badgeColor: 'bg-lime text-dark font-extrabold',
      title: 'High-value AI',
      description: 'Double down on high-ROI AI agents driving direct revenue, speed and efficiency.',
      metric: '+262% Proven ROI',
      icon: Zap,
      iconColor: 'text-lime',
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#111111] text-white relative overflow-hidden">
      
      {/* Top Header Portion */}
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] border border-[#282828] text-xs font-mono font-bold tracking-widest text-lime uppercase mb-6 shadow-subtle">
            <Zap className="w-4 h-4 text-lime" />
            Financial Decision Engine
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            From AI cost <span className="text-lime">→</span> to AI value.
          </h2>

          <div className="flex justify-center my-6">
            <ArrowDown className="w-12 h-12 text-lime stroke-[2.5] animate-bounce" />
          </div>

          <p className="text-lg text-neutral-400 font-normal">
            Transform raw API expenditures into a disciplined capital allocation strategy with continuous visibility.
          </p>
        </div>

        {/* Horizontal Sequence Flow */}
        <div className="mb-16">
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#282828] -translate-y-1/2 z-0">
              <div className="h-full bg-lime w-full opacity-60" />
            </div>

            {sequenceSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.name}
                  className="relative z-10 bg-[#161616] border border-[#282828] rounded-xl p-6 text-center hover:border-lime transition-all duration-300 group shadow-card flex flex-col items-center"
                >
                  {/* Step Badge & Large Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-lime/60 text-lime flex items-center justify-center font-mono font-extrabold text-base mb-4 group-hover:scale-110 group-hover:bg-lime group-hover:text-dark transition-all shadow-subtle">
                    {idx + 1}
                  </div>

                  <div className="mb-3">
                    <Icon className="w-8 h-8 text-lime group-hover:scale-110 transition-transform" />
                  </div>

                  <div className="font-mono text-base font-extrabold tracking-wider text-white mb-1 group-hover:text-lime transition-colors">
                    {step.name}
                  </div>

                  <div className="text-xs text-neutral-400 font-mono">
                    {step.desc}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Sequence */}
          <div className="lg:hidden space-y-3">
            {sequenceSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.name}
                  className="flex items-center gap-4 bg-[#161616] border border-[#282828] p-5 rounded-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-lime text-dark font-mono font-extrabold text-base flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div className="shrink-0">
                    <Icon className="w-7 h-7 text-lime" />
                  </div>
                  <div>
                    <div className="font-mono text-base font-bold text-white tracking-wider">
                      {step.name}
                    </div>
                    <div className="text-xs text-neutral-400">
                      {step.desc}
                    </div>
                  </div>
                  {idx < sequenceSteps.length - 1 && (
                    <div className="ml-auto text-lime font-mono">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Glowing Fiber Flow Animation Canvas Banner */}
      <div className="my-8">
        <GlowingFlowsCanvas height={320} label="FL.002 FLOWS · THE ROUTING FABRIC, REAL-TIME TELEMETRY" />
      </div>

      {/* Bottom Action Directives Portion */}
      <div className="pb-24 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {decisionActions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.badge}
                className="bg-[#161616] border border-[#282828] rounded-xl p-8 hover:border-lime transition-all duration-300 flex flex-col justify-between group shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 text-xs font-mono font-bold rounded tracking-wider border ${action.badgeColor}`}>
                      {action.badge}
                    </span>
                    <span className="text-xs font-mono text-lime font-bold">
                      {action.metric}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-8 h-8 ${action.iconColor} group-hover:scale-110 transition-transform`} />
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {action.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {action.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#282828] flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="font-semibold">Automated Directive</span>
                  <ArrowRight className="w-6 h-6 text-neutral-400 group-hover:text-lime group-hover:translate-x-1.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
