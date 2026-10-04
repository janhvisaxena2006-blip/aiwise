import React from 'react';
import { Compass, Gauge, BarChart2 } from 'lucide-react';

export default function ProblemSection() {
  const blocks = [
    {
      step: '01',
      title: 'TRACK',
      subtitle: 'Where is the money going?',
      description: 'Track AI spend across models, teams and workflows with granular token-level financial attribution.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'OPTIMIZE',
      subtitle: 'Where are we wasting money?',
      description: 'Identify unnecessary usage, over-provisioned models and direct cost optimization opportunities.',
      icon: Gauge,
    },
    {
      step: '03',
      title: 'MEASURE',
      subtitle: 'What is AI actually worth?',
      description: 'Connect AI workflows directly to bottom-line revenue, operational savings and developer productivity.',
      icon: BarChart2,
    },
  ];

  return (
    <section id="product" className="py-20 lg:py-28 border-t border-[#282828] bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-lime uppercase mb-4">
            The Enterprise Challenge
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            AI spending is growing. <br />
            Visibility isn't.
          </h2>

          <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed font-normal">
            Companies are deploying more models, more workflows and more AI agents every day. But finance and technology teams still struggle to understand where AI money is going — and whether it's creating value.
          </p>
        </div>

        {/* 3 Large Minimalist Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.title}
                className="bg-[#161616] border border-[#282828] p-8 sm:p-10 rounded-lg hover:border-lime transition-all duration-300 shadow-subtle flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold text-lime px-2.5 py-1 bg-[#1A1A1A] rounded border border-[#282828] group-hover:bg-lime group-hover:text-dark transition-colors">
                      {block.step} // {block.title}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-lime transition-colors" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                    {block.subtitle}
                  </h3>

                  <p className="text-base text-neutral-400 leading-relaxed">
                    {block.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#282828] flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Capabilities</span>
                  <span className="w-2 h-2 rounded-full bg-[#282828] group-hover:bg-lime transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
