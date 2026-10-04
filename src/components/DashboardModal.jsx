import React, { useState } from 'react';
import { X, ArrowUpRight, Check, RefreshCw, Zap, TrendingUp, ShieldAlert, Download, Layers } from 'lucide-react';

export default function DashboardModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('portfolio');
  const [modelRouteActive, setModelRouteActive] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadReport = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      
      {/* Modal Card Container */}
      <div className="bg-card border border-borderWarm rounded-xl shadow-2xl w-full max-w-6xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Navigation Bar */}
        <div className="bg-cream border-b border-borderWarm px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="font-extrabold text-xl tracking-tight text-dark flex items-center">
              AIWise
              <span className="w-2 h-2 bg-lime ml-1 rounded-xs inline-block" />
            </div>
            <span className="text-borderWarm">|</span>
            <span className="font-mono text-xs font-bold text-muted uppercase">
              ENTERPRISE FINANCIAL DASHBOARD
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-lime text-dark font-bold">
              ● LIVE TELEMETRY
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadReport}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-dark text-white rounded hover:bg-neutral-800 transition-colors"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-lime" />
                  Report Exported
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-lime" />
                  Export Audit (PDF)
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-muted hover:text-dark hover:bg-borderWarm/40 rounded transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Tabs Bar */}
        <div className="bg-white border-b border-borderWarm px-6 flex items-center gap-6 text-sm font-mono font-semibold">
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`py-3.5 border-b-2 transition-colors ${
              activeTab === 'portfolio'
                ? 'border-dark text-dark font-extrabold'
                : 'border-transparent text-muted hover:text-dark'
            }`}
          >
            AI Portfolio Matrix
          </button>
          <button
            onClick={() => setActiveTab('optimization')}
            className={`py-3.5 border-b-2 transition-colors ${
              activeTab === 'optimization'
                ? 'border-dark text-dark font-extrabold'
                : 'border-transparent text-muted hover:text-dark'
            }`}
          >
            Cost Optimization Engine
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`py-3.5 border-b-2 transition-colors ${
              activeTab === 'telemetry'
                ? 'border-dark text-dark font-extrabold'
                : 'border-transparent text-muted hover:text-dark'
            }`}
          >
            Token Allocation Telemetry
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-cream/30 space-y-8 flex-1">
          
          {/* Key Quick KPI Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card border border-borderWarm p-4 rounded-lg shadow-subtle">
              <div className="text-xs font-mono text-muted uppercase">Total AI Spend</div>
              <div className="text-2xl font-extrabold text-dark font-mono mt-1">₹18.4L</div>
              <div className="text-[11px] font-mono text-muted mt-1">Across 14 Deployment Nodes</div>
            </div>

            <div className="bg-card border border-borderWarm p-4 rounded-lg shadow-subtle">
              <div className="text-xs font-mono text-muted uppercase">Total Attributed Value</div>
              <div className="text-2xl font-extrabold text-dark font-mono mt-1">₹31.7L</div>
              <div className="text-[11px] font-mono text-lime-hover font-bold mt-1">↑ 72% Net Portfolio Value</div>
            </div>

            <div className="bg-card border border-borderWarm p-4 rounded-lg shadow-subtle bg-lime-light/30">
              <div className="text-xs font-mono text-dark uppercase font-bold">Active Savings Opportunity</div>
              <div className="text-2xl font-extrabold text-dark font-mono mt-1">₹4.2L</div>
              <div className="text-[11px] font-mono text-dark font-semibold mt-1">Ready for Automated Execution</div>
            </div>

            <div className="bg-card border border-borderWarm p-4 rounded-lg shadow-subtle">
              <div className="text-xs font-mono text-muted uppercase">Blend Token Cost</div>
              <div className="text-2xl font-extrabold text-dark font-mono mt-1">₹1.42 / 1k</div>
              <div className="text-[11px] font-mono text-muted mt-1">-18% vs Last Month</div>
            </div>
          </div>

          {/* TAB 1: PORTFOLIO */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <div className="bg-card border border-borderWarm rounded-lg p-6 shadow-subtle">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-extrabold text-dark text-lg">Active AI Workflows Audit</h4>
                  <span className="text-xs font-mono text-muted">6 Core Enterprise Workflows</span>
                </div>

                <div className="space-y-3">
                  {/* Item 1 */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-cream/40 border border-borderWarm rounded gap-4">
                    <div>
                      <div className="font-bold text-dark text-base">Customer Support AI Agent</div>
                      <div className="text-xs font-mono text-muted">Anthropic Claude 3.5 Sonnet • 4.2M Tokens/day</div>
                    </div>
                    <div className="flex items-center gap-6 font-mono text-sm">
                      <div><span className="text-xs text-muted block">Spend</span> ₹7.2L/mo</div>
                      <div><span className="text-xs text-muted block">Value</span> ₹14.8L/mo</div>
                      <div className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 font-extrabold rounded text-xs">OPTIMIZE</div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-cream/40 border border-borderWarm rounded gap-4">
                    <div>
                      <div className="font-bold text-dark text-base">AI Sales Assistant & Outreach</div>
                      <div className="text-xs font-mono text-muted">Custom Fine-Tuned Llama-3 + RAG • 1.8M Tokens/day</div>
                    </div>
                    <div className="flex items-center gap-6 font-mono text-sm">
                      <div><span className="text-xs text-muted block">Spend</span> ₹2.4L/mo</div>
                      <div><span className="text-xs text-muted block">Value</span> ₹8.7L/mo</div>
                      <div className="px-3 py-1 bg-lime text-dark font-extrabold rounded text-xs">SCALE (+262%)</div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-cream/40 border border-borderWarm rounded gap-4">
                    <div>
                      <div className="font-bold text-dark text-base">Internal Content Generator</div>
                      <div className="text-xs font-mono text-muted">OpenAI GPT-4-Turbo • 950K Tokens/day</div>
                    </div>
                    <div className="flex items-center gap-6 font-mono text-sm">
                      <div><span className="text-xs text-muted block">Spend</span> ₹1.8L/mo</div>
                      <div><span className="text-xs text-muted block">Value</span> ₹32K/mo</div>
                      <div className="px-3 py-1 bg-red-100 text-red-800 border border-red-300 font-extrabold rounded text-xs">STOP (-82%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: OPTIMIZATION ENGINE */}
          {activeTab === 'optimization' && (
            <div className="space-y-6">
              <div className="bg-card border border-borderWarm rounded-lg p-6 shadow-subtle">
                <h4 className="font-extrabold text-dark text-lg mb-2">Automated Cost Router Rule</h4>
                <p className="text-sm text-muted mb-6">
                  Simulate routing simple tier-1 support prompts to a lower-cost fallback model (Claude Haiku).
                </p>

                <div className="p-6 bg-cream border border-borderWarm rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <div className="font-mono text-xs font-bold text-dark uppercase mb-1">
                      Rule Directive #409: Support Model Fallback
                    </div>
                    <div className="font-bold text-dark text-lg">
                      {modelRouteActive ? 'Rule ACTIVE: Routing tier-1 queries to Haiku' : 'Rule INACTIVE: All queries using Sonnet'}
                    </div>
                    <div className="text-xs text-muted font-mono mt-1">
                      Projected Monthly Savings: <span className="font-bold text-dark">₹2,10,000</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setModelRouteActive(!modelRouteActive)}
                    className={`px-6 py-3 font-mono font-bold text-sm rounded transition-all shadow-subtle flex items-center gap-2 ${
                      modelRouteActive
                        ? 'bg-lime text-dark border border-dark'
                        : 'bg-dark text-white hover:bg-neutral-800'
                    }`}
                  >
                    {modelRouteActive ? (
                      <>
                        <Check className="w-4 h-4 text-dark" />
                        Rule Enabled (Savings Active)
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 text-lime" />
                        Enable Model Route Rule
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TELEMETRY */}
          {activeTab === 'telemetry' && (
            <div className="bg-card border border-borderWarm rounded-lg p-6 shadow-subtle space-y-4">
              <h4 className="font-extrabold text-dark text-lg">Model Token Spend Distribution</h4>
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Anthropic (Claude 3.5 Sonnet / Haiku)</span>
                    <span className="font-bold">₹9.8L (53.2%)</span>
                  </div>
                  <div className="w-full h-2 bg-cream rounded overflow-hidden border border-borderWarm">
                    <div className="h-full bg-dark w-[53%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>OpenAI (GPT-4o / GPT-4-Turbo)</span>
                    <span className="font-bold">₹5.4L (29.3%)</span>
                  </div>
                  <div className="w-full h-2 bg-cream rounded overflow-hidden border border-borderWarm">
                    <div className="h-full bg-muted w-[29%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Custom Self-Hosted (Llama-3-70B)</span>
                    <span className="font-bold">₹3.2L (17.5%)</span>
                  </div>
                  <div className="w-full h-2 bg-cream rounded overflow-hidden border border-borderWarm">
                    <div className="h-full bg-lime w-[17%]" />
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="bg-cream border-t border-borderWarm px-6 py-4 flex items-center justify-between text-xs font-mono text-muted">
          <div>
            AIWise Financial Engine v4.2 • Enterprise Tier
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 font-mono font-bold text-dark bg-card border border-borderWarm hover:border-dark rounded transition-colors"
          >
            Close Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}
