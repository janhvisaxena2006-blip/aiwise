import React from 'react';

export default function Footer({ onOpenDashboard }) {
  return (
    <footer className="bg-[#111111] border-t border-[#282828] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-[#282828]">
          
          <div className="max-w-md">
            <div className="font-extrabold text-2xl tracking-tight text-white flex items-center mb-3">
              AIWise
              <span className="w-2.5 h-2.5 bg-lime ml-1 rounded-xs inline-block" />
            </div>
            <p className="text-sm text-neutral-400 font-medium">
              The Financial Operating System for Enterprise AI.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#product" className="hover:text-white transition-colors">Product</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#roi-calculator" className="hover:text-white transition-colors">AI ROI</a>
            <button onClick={onOpenDashboard} className="hover:text-lime transition-colors font-semibold text-white">Dashboard</button>
            <a href="#insights" className="hover:text-white transition-colors">About</a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400 gap-4">
          <div>
            © 2026 AIWise. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security Telemetry</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
