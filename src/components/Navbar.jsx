import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenDashboard }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'AI ROI', href: '#roi-calculator' },
    { name: 'Insights', href: '#insights' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-[#282828] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group focus:outline-none">
            <span className="font-extrabold text-2xl tracking-tight text-white flex items-center">
              AIWise
              <span className="inline-block w-2.5 h-2.5 bg-lime ml-1 rounded-xs transition-transform group-hover:scale-125" />
            </span>
          </a>

          {/* Desktop Center Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenDashboard}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#1A1A1A] border border-[#282828] hover:border-lime hover:bg-lime hover:text-dark transition-all shadow-subtle rounded-md group"
            >
              View Dashboard
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-lime group-hover:text-dark" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-neutral-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#282828] px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white hover:bg-[#1A1A1A] rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDashboard();
              }}
              className="w-full flex items-center justify-center px-4 py-3 text-sm font-bold text-dark bg-lime hover:bg-lime-hover transition-colors rounded-md shadow-subtle"
            >
              View Dashboard →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
