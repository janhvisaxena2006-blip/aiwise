import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function RoiCalculatorSection({ onOpenDashboard }) {
  const [spend, setSpend] = useState(500000);
  const [revenue, setRevenue] = useState(700000);
  const [savings, setSavings] = useState(450000);
  const [productivity, setProductivity] = useState(250000);

  const totalValue = revenue + savings + productivity;
  const netRoi = spend > 0 ? Math.round(((totalValue - spend) / spend) * 100) : 0;
  const netGain = totalValue - spend;

  const formatCurrency = (val) => {
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)}L`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const applyPreset = (preset) => {
    if (preset === 'mid') {
      setSpend(200000);
      setRevenue(350000);
      setSavings(200000);
      setProductivity(100000);
    } else if (preset === 'promptExample') {
      setSpend(500000);
      setRevenue(700000);
      setSavings(450000);
      setProductivity(250000);
    } else if (preset === 'enterprise') {
      setSpend(2500000);
      setRevenue(4500000);
      setSavings(2000000);
      setProductivity(1500000);
    }
  };

  return (
    <section id="roi-calculator" className="py-20 lg:py-28 bg-[#111111] border-t border-[#282828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#282828] text-xs font-mono font-bold tracking-widest text-lime uppercase mb-4 shadow-subtle">
            <Calculator className="w-3.5 h-3.5 text-lime" />
            Interactive ROI Model
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            AI ROI shouldn't be a guess.
          </h2>

          <p className="text-lg text-neutral-400">
            See how much value your AI investment is actually generating.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="text-neutral-400 mr-1">Presets:</span>
            <button
              onClick={() => applyPreset('promptExample')}
              className="px-3 py-1 bg-[#1A1A1A] border border-[#282828] hover:border-lime rounded text-white font-bold transition-all shadow-subtle"
            >
              Standard (₹5L Spend)
            </button>
            <button
              onClick={() => applyPreset('mid')}
              className="px-3 py-1 bg-[#1A1A1A] border border-[#282828] hover:border-lime rounded text-white transition-all"
            >
              Mid-Market (₹2L Spend)
            </button>
            <button
              onClick={() => applyPreset('enterprise')}
              className="px-3 py-1 bg-[#1A1A1A] border border-[#282828] hover:border-lime rounded text-white transition-all"
            >
              Enterprise (₹25L Spend)
            </button>
          </div>
        </div>

        {/* Calculator Grid Container */}
        <div className="bg-[#161616] border border-[#282828] rounded-xl p-8 lg:p-12 shadow-card max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-8">
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-mono font-bold text-white uppercase">
                    Monthly AI Spend
                  </label>
                  <span className="font-mono font-extrabold text-white text-lg px-2 py-0.5 bg-[#1A1A1A] rounded border border-[#282828]">
                    {formatCurrency(spend)}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={spend}
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="w-full h-2 bg-[#282828] rounded-lg appearance-none cursor-pointer accent-lime"
                />
                <div className="flex justify-between text-[11px] font-mono text-neutral-400 mt-1">
                  <span>₹50K</span>
                  <span>₹50L</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-mono font-bold text-white uppercase">
                    Revenue Generated
                  </label>
                  <span className="font-mono font-extrabold text-white text-lg px-2 py-0.5 bg-[#1A1A1A] rounded border border-[#282828]">
                    {formatCurrency(revenue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000000"
                  step="50000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-[#282828] rounded-lg appearance-none cursor-pointer accent-lime"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-mono font-bold text-white uppercase">
                    Cost Savings
                  </label>
                  <span className="font-mono font-extrabold text-white text-lg px-2 py-0.5 bg-[#1A1A1A] rounded border border-[#282828]">
                    {formatCurrency(savings)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000000"
                  step="50000"
                  value={savings}
                  onChange={(e) => setSavings(Number(e.target.value))}
                  className="w-full h-2 bg-[#282828] rounded-lg appearance-none cursor-pointer accent-lime"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-mono font-bold text-white uppercase">
                    Productivity Value
                  </label>
                  <span className="font-mono font-extrabold text-white text-lg px-2 py-0.5 bg-[#1A1A1A] rounded border border-[#282828]">
                    {formatCurrency(productivity)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3000000"
                  step="50000"
                  value={productivity}
                  onChange={(e) => setProductivity(Number(e.target.value))}
                  className="w-full h-2 bg-[#282828] rounded-lg appearance-none cursor-pointer accent-lime"
                />
              </div>

            </div>

            {/* Right Results Card */}
            <div className="lg:col-span-5 bg-[#111111] border border-[#282828] rounded-lg p-8 text-center flex flex-col justify-between shadow-subtle h-full">
              <div>
                <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-6">
                  LIVE ROI CALCULATION
                </div>

                <div className="mb-6 pb-6 border-b border-[#282828]">
                  <div className="text-xs font-mono text-neutral-400 uppercase mb-1">Total Business Value</div>
                  <div className="text-3xl font-extrabold text-white font-mono">
                    {formatCurrency(totalValue)}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">
                    (Revenue + Savings + Productivity)
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-mono font-bold text-white uppercase mb-2">Attributed Net AI ROI</div>
                  <div className="inline-block px-4 py-2 bg-lime text-dark rounded-md shadow-lime-glow mb-2">
                    <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight">
                      {netRoi}%
                    </span>
                  </div>
                  <div className="text-xs font-mono font-bold text-white">
                    Net Value Gain: <span className="text-lime font-extrabold">{formatCurrency(netGain)}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#282828]">
                <button
                  onClick={onOpenDashboard}
                  className="w-full py-3.5 px-4 text-sm font-bold text-dark bg-lime hover:bg-lime-hover transition-colors rounded shadow-subtle flex items-center justify-center gap-2"
                >
                  Generate Enterprise Report →
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
