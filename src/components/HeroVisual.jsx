import React, { useState } from 'react';

export default function HeroVisual({ onOpenDashboard }) {
  const [activeTimeframe, setActiveTimeframe] = useState('Q3 2026');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const chartDatasets = {
    '30 Days': [
      { month: 'W1', cost: 3.8, value: 5.2 },
      { month: 'W2', cost: 4.1, value: 6.8 },
      { month: 'W3', cost: 4.9, value: 8.9 },
      { month: 'W4', cost: 5.6, value: 10.8 },
    ],
    'Q3 2026': [
      { month: 'Apr', cost: 11.2, value: 16.4 },
      { month: 'May', cost: 12.8, value: 19.8 },
      { month: 'Jun', cost: 14.1, value: 22.5 },
      { month: 'Jul', cost: 15.5, value: 25.4 },
      { month: 'Aug', cost: 16.9, value: 28.6 },
      { month: 'Sep', cost: 18.4, value: 31.7 },
    ],
    'YTD': [
      { month: 'Q1', cost: 28.4, value: 41.2 },
      { month: 'Q2', cost: 38.6, value: 64.8 },
      { month: 'Q3', cost: 53.7, value: 92.5 },
    ]
  };

  const currentData = chartDatasets[activeTimeframe];

  const width = 800;
  const height = 260;
  const paddingX = 40;
  const paddingY = 30;
  const maxVal = 36;

  const points = currentData.map((d, index) => {
    const x = paddingX + (index / (currentData.length - 1)) * (width - paddingX * 2);
    const yCost = height - paddingY - (d.cost / maxVal) * (height - paddingY * 2);
    const yValue = height - paddingY - (d.value / maxVal) * (height - paddingY * 2);
    return { ...d, x, yCost, yValue };
  });

  const costPath = points.reduce((acc, p, i) => i === 0 ? `M ${p.x} ${p.yCost}` : `${acc} L ${p.x} ${p.yCost}`, '');
  const valuePath = points.reduce((acc, p, i) => i === 0 ? `M ${p.x} ${p.yValue}` : `${acc} L ${p.x} ${p.yValue}`, '');
  const valueAreaPath = `${valuePath} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-24 bg-[#111111]">
      <div className="bg-[#161616] border border-[#282828] rounded-lg shadow-card overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-[#282828] bg-[#1A1A1A]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-lime border border-white/20 animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-wider text-white uppercase">
              AIWISE / AI PORTFOLIO
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono bg-[#111111] text-neutral-400 rounded border border-[#282828]">
              PORTFOLIO-ENTERPRISE-v4.2
            </span>
          </div>

          <div className="flex items-center gap-2">
            {['30 Days', 'Q3 2026', 'YTD'].map((tf) => (
              <button
                key={tf}
                onClick={() => setActiveTimeframe(tf)}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                  activeTimeframe === tf
                    ? 'bg-lime text-dark font-extrabold'
                    : 'text-neutral-400 hover:text-white hover:bg-[#282828]'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#282828] border-b border-[#282828] bg-[#161616]">
          
          <div className="p-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
              AI SPEND
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ₹18.4L
            </div>
            <div className="mt-2 text-xs text-neutral-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
              14 Active AI Models
            </div>
          </div>

          <div className="p-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
              AI VALUE
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ₹31.7L
            </div>
            <div className="mt-2 text-xs text-lime font-medium flex items-center gap-1">
              <span className="font-bold">↑ 72%</span> Net Business Value
            </div>
          </div>

          <div className="p-6 bg-lime-light/10">
            <div className="text-xs font-mono uppercase tracking-wider text-lime font-bold mb-1">
              AI ROI
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-between">
              72%
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-bold bg-lime text-dark">
                POSITIVE
              </span>
            </div>
            <div className="mt-2 text-xs text-neutral-400">
              Attribute to 8 Workflows
            </div>
          </div>

          <div className="p-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
              POTENTIAL SAVINGS
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
              ₹4.2L
              <span className="w-2.5 h-2.5 rounded-full bg-lime inline-block" />
            </div>
            <div className="mt-2 text-xs font-semibold text-lime flex items-center gap-1">
              <span className="inline-block px-1.5 py-0.5 bg-lime text-dark font-mono rounded text-[10px]">
                ↑ 12.4% efficiency
              </span>
            </div>
          </div>

        </div>

        {/* Vector Line Chart */}
        <div className="p-6 sm:p-8 bg-[#161616] relative">
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-lime inline-block border border-white/20" />
                <span className="text-xs font-mono font-bold text-white uppercase">BUSINESS VALUE (₹31.7L)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-neutral-500 inline-block" />
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase">AI COST (₹18.4L)</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-dark bg-lime px-2.5 py-1 rounded">
              <span>↑ 12.4% efficiency</span>
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-auto overflow-visible select-none"
            >
              <defs>
                <linearGradient id="darkLimeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B6FF00" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#B6FF00" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 1, 2, 3].map((g) => {
                const y = paddingY + (g / 3) * (height - paddingY * 2);
                return (
                  <line
                    key={g}
                    x1={paddingX}
                    y1={y}
                    x2={width - paddingX}
                    y2={y}
                    stroke="#282828"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                );
              })}

              <path d={valueAreaPath} fill="url(#darkLimeGradient)" />

              <path
                d={costPath}
                fill="none"
                stroke="#888880"
                strokeWidth="2.5"
                strokeDasharray="3 3"
              />

              <path
                d={valuePath}
                fill="none"
                stroke="#B6FF00"
                strokeWidth="4"
              />

              {points.map((p, i) => (
                <g key={i} className="cursor-pointer" onMouseEnter={() => setHoveredPoint(p)} onMouseLeave={() => setHoveredPoint(null)}>
                  <circle cx={p.x} cy={p.yCost} r="4" fill="#888880" />
                  <circle cx={p.x} cy={p.yValue} r="6" fill="#111111" stroke="#B6FF00" strokeWidth="3" />
                  <text
                    x={p.x}
                    y={height - 8}
                    textAnchor="middle"
                    fill="#A1A19A"
                    fontSize="11"
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {p.month}
                  </text>
                </g>
              ))}
            </svg>

            {hoveredPoint && (
              <div
                className="absolute z-20 bg-black text-white p-3 rounded shadow-2xl text-xs font-mono border border-lime/40"
                style={{
                  left: `${(hoveredPoint.x / width) * 100}%`,
                  top: `${(hoveredPoint.yValue / height) * 100 - 15}%`,
                  transform: 'translate(-50%, -100%)'
                }}
              >
                <div className="font-bold text-lime mb-1">{hoveredPoint.month} Metrics</div>
                <div>Value: ₹{hoveredPoint.value}L</div>
                <div className="text-neutral-400">Cost: ₹{hoveredPoint.cost}L</div>
                <div className="text-lime text-[10px] mt-1">ROI: +{Math.round(((hoveredPoint.value - hoveredPoint.cost)/hoveredPoint.cost)*100)}%</div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-[#282828] flex flex-wrap items-center justify-between text-xs text-neutral-400 font-mono">
            <div>
              Active Telemetry: <span className="text-white font-semibold">1,420,890 tokens/min</span>
            </div>
            <button
              onClick={onOpenDashboard}
              className="text-lime hover:underline font-bold flex items-center gap-1"
            >
              Open Full Interactive Portfolio Matrix →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
