import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function InsightsSection({ onOpenDashboard }) {
  const insights = [
    {
      type: 'STOP',
      typeBadge: 'bg-red-500/20 text-red-400 border-red-500/30',
      workflow: 'Internal Content Generator',
      cost: '₹1.8L/month',
      valueLabel: 'Business Value',
      valueAmount: '₹32K/month',
      highlightMetric: 'ROI: -82%',
      highlightIsLime: false,
      recommendation: 'Low-value workflow. Reduce or stop usage.',
      model: 'GPT-4-Turbo (Unoptimized Prompts)',
    },
    {
      type: 'OPTIMIZE',
      typeBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      workflow: 'Customer Support AI',
      cost: '₹7.2L/month',
      valueLabel: 'Potential Saving',
      valueAmount: '₹2.1L/month',
      highlightMetric: '₹2.1L/mo Savings',
      highlightIsLime: true,
      recommendation: 'Route simple queries to a lower-cost model.',
      model: 'Claude 3.5 Sonnet → Haiku Fallback',
    },
    {
      type: 'SCALE',
      typeBadge: 'bg-lime text-dark border-lime font-extrabold',
      workflow: 'AI Sales Assistant',
      cost: '₹2.4L/month',
      valueLabel: 'Business Value',
      valueAmount: '₹8.7L/month',
      highlightMetric: 'ROI: 262%',
      highlightIsLime: true,
      recommendation: 'High-value workflow. Increase investment.',
      model: 'Custom Fine-Tuned Agent + RAG',
    },
  ];

  return (
    <section id="insights" className="py-20 lg:py-28 bg-[#111111] border-t border-[#282828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-lime uppercase mb-3">
              AIWise Intelligence Feed
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Your AI budget. Decoded.
            </h2>
          </div>

          <p className="text-base text-neutral-400 max-w-md">
            Automated financial recommendations updated in real-time based on token usage telemetry and correlated business outputs.
          </p>
        </div>

        {/* 3 Wide Horizontal Cards */}
        <div className="space-y-6">
          {insights.map((item) => (
            <div
              key={item.workflow}
              className="bg-[#161616] border border-[#282828] rounded-lg p-6 sm:p-8 hover:border-lime transition-all duration-200 shadow-subtle flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              
              {/* Left Column */}
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-0.5 text-xs font-mono font-bold uppercase rounded border ${item.typeBadge}`}>
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {item.model}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.workflow}
                </h3>
              </div>

              {/* Middle Column */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:w-2/5 border-y lg:border-y-0 lg:border-x border-[#282828] py-4 lg:py-0 lg:px-8">
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Spend / Cost</div>
                  <div className="text-lg font-extrabold text-white font-mono">{item.cost}</div>
                </div>

                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">{item.valueLabel}</div>
                  <div className="text-lg font-extrabold text-white font-mono">{item.valueAmount}</div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="text-xs font-mono text-neutral-400 uppercase">Efficiency Rating</div>
                  <div className="text-lg font-extrabold font-mono flex items-center gap-1">
                    {item.highlightIsLime ? (
                      <span className="px-2 py-0.5 bg-lime text-dark rounded text-base font-extrabold">
                        {item.highlightMetric}
                      </span>
                    ) : (
                      <span className="text-red-400 font-bold">
                        {item.highlightMetric}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:w-1/4 flex flex-col justify-center">
                <div className="text-xs font-mono font-bold text-neutral-400 uppercase mb-1">
                  AIWise Recommendation
                </div>
                <p className="text-sm font-semibold text-white leading-snug">
                  “{item.recommendation}”
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* View All Insights Footer */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenDashboard}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#1A1A1A] border border-[#282828] rounded hover:border-lime transition-all"
          >
            Explore 12 More Active Workflows
            <ArrowUpRight className="w-4 h-4 text-lime" />
          </button>
        </div>

      </div>
    </section>
  );
}
