import React, { useState } from 'react';
import { Search, ArrowUpDown, ChevronRight } from 'lucide-react';

export default function PortfolioSection({ onOpenDashboard }) {
  const [filter, setFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('spendNum');
  const [sortAsc, setSortAsc] = useState(false);

  const rawRows = [
    {
      workflow: 'Customer Support',
      model: 'Claude 3.5 & GPT-4o',
      spend: '₹7.2L',
      spendNum: 720000,
      value: '₹14.8L',
      valueNum: 1480000,
      roi: '105%',
      roiNum: 105,
      decision: 'OPTIMIZE',
      badgeStyle: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    },
    {
      workflow: 'AI Sales Assistant',
      model: 'Custom Fine-Tuned Agent',
      spend: '₹2.4L',
      spendNum: 240000,
      value: '₹8.7L',
      valueNum: 870000,
      roi: '262%',
      roiNum: 262,
      decision: 'SCALE',
      badgeStyle: 'bg-lime text-dark font-extrabold border-lime',
    },
    {
      workflow: 'Content Generator',
      model: 'GPT-4-Turbo',
      spend: '₹1.8L',
      spendNum: 180000,
      value: '₹32K',
      valueNum: 32000,
      roi: '-82%',
      roiNum: -82,
      decision: 'STOP',
      badgeStyle: 'bg-red-500/20 text-red-400 border-red-500/30',
    },
    {
      workflow: 'Developer Copilot',
      model: 'GitHub Copilot Enterprise',
      spend: '₹4.1L',
      spendNum: 410000,
      value: '₹9.2L',
      valueNum: 920000,
      roi: '124%',
      roiNum: 124,
      decision: 'SCALE',
      badgeStyle: 'bg-lime text-dark font-extrabold border-lime',
    },
    {
      workflow: 'Legal Document Parser',
      model: 'Llama-3-70B Self-Hosted',
      spend: '₹3.0L',
      spendNum: 300000,
      value: '₹6.5L',
      valueNum: 650000,
      roi: '116%',
      roiNum: 116,
      decision: 'SCALE',
      badgeStyle: 'bg-lime text-dark font-extrabold border-lime',
    },
    {
      workflow: 'Internal HR Search',
      model: 'Embeddings + Mistral-8x7B',
      spend: '₹1.2L',
      spendNum: 120000,
      value: '₹1.5L',
      valueNum: 150000,
      roi: '25%',
      roiNum: 25,
      decision: 'OPTIMIZE',
      badgeStyle: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    },
  ];

  const filteredRows = rawRows
    .filter((r) => {
      if (filter !== 'ALL' && r.decision !== filter) return false;
      if (searchTerm && !r.workflow.toLowerCase().includes(searchTerm.toLowerCase()) && !r.model.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      return sortAsc ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
    });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#111111] border-t border-[#282828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-lime uppercase mb-3">
              AI Portfolio Management
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              One view. Every AI decision.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search workflows..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 bg-[#161616] border border-[#282828] text-sm font-sans text-white rounded focus:outline-none focus:border-lime w-48 sm:w-64"
              />
            </div>

            <div className="flex bg-[#161616] border border-[#282828] rounded p-1">
              {['ALL', 'SCALE', 'OPTIMIZE', 'STOP'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-3 py-1 text-xs font-mono font-bold rounded transition-colors ${
                    filter === tag
                      ? 'bg-lime text-dark'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Table Card */}
        <div className="bg-[#161616] border border-[#282828] rounded-lg shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A] border-b border-[#282828] text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold cursor-pointer select-none hover:text-white" onClick={() => handleSort('workflow')}>
                    <div className="flex items-center gap-1">
                      WORKFLOW
                      <ArrowUpDown className="w-3 h-3 text-lime" />
                    </div>
                  </th>
                  <th className="py-4 px-6 font-bold cursor-pointer select-none hover:text-white" onClick={() => handleSort('spendNum')}>
                    <div className="flex items-center gap-1">
                      SPEND
                      <ArrowUpDown className="w-3 h-3 text-lime" />
                    </div>
                  </th>
                  <th className="py-4 px-6 font-bold cursor-pointer select-none hover:text-white" onClick={() => handleSort('valueNum')}>
                    <div className="flex items-center gap-1">
                      BUSINESS VALUE
                      <ArrowUpDown className="w-3 h-3 text-lime" />
                    </div>
                  </th>
                  <th className="py-4 px-6 font-bold cursor-pointer select-none hover:text-white" onClick={() => handleSort('roiNum')}>
                    <div className="flex items-center gap-1">
                      ROI
                      <ArrowUpDown className="w-3 h-3 text-lime" />
                    </div>
                  </th>
                  <th className="py-4 px-6 font-bold">
                    AIWISE DECISION
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#282828] text-sm font-sans">
                {filteredRows.map((row) => (
                  <tr
                    key={row.workflow}
                    className="hover:bg-[#1A1A1A] transition-colors group cursor-pointer"
                    onClick={onOpenDashboard}
                  >
                    <td className="py-5 px-6">
                      <div className="font-bold text-white text-base tracking-tight group-hover:text-lime transition-colors">
                        {row.workflow}
                      </div>
                      <div className="text-xs font-mono text-neutral-400">
                        {row.model}
                      </div>
                    </td>

                    <td className="py-5 px-6 font-mono font-extrabold text-white text-base">
                      {row.spend}
                    </td>

                    <td className="py-5 px-6 font-mono font-extrabold text-white text-base">
                      {row.value}
                    </td>

                    <td className="py-5 px-6 font-mono font-extrabold">
                      {row.roiNum > 0 ? (
                        <span className="text-dark bg-lime px-2 py-0.5 rounded text-sm font-extrabold">
                          {row.roi}
                        </span>
                      ) : (
                        <span className="text-red-400 bg-red-500/20 px-2 py-0.5 rounded text-sm font-extrabold border border-red-500/30">
                          {row.roi}
                        </span>
                      )}
                    </td>

                    <td className="py-5 px-6">
                      <div className="flex items-center justify-between">
                        <span className={`px-3 py-1 text-xs font-mono font-extrabold rounded border ${row.badgeStyle}`}>
                          {row.decision}
                        </span>
                        <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-lime group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#1A1A1A] border-t border-[#282828] px-6 py-4 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-400">
            <div>
              Showing <span className="font-bold text-white">{filteredRows.length}</span> of {rawRows.length} Enterprise AI Workflows
            </div>
            <div className="flex items-center gap-4">
              <span>Total Portfolio Spend: <strong className="text-white">₹19.6L</strong></span>
              <span>Portfolio Net Value: <strong className="text-lime font-bold">₹40.7L</strong></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
