import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroVisual from './components/HeroVisual';
import ProblemSection from './components/ProblemSection';
import CostToValueSection from './components/CostToValueSection';
import EnterpriseArchitectureSection from './components/EnterpriseArchitectureSection';
import InsightsSection from './components/InsightsSection';
import PortfolioSection from './components/PortfolioSection';
import RoiCalculatorSection from './components/RoiCalculatorSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import DashboardModal from './components/DashboardModal';

export default function App() {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const handleOpenDashboard = () => setIsDashboardOpen(true);
  const handleCloseDashboard = () => setIsDashboardOpen(false);

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans selection:bg-lime selection:text-dark">
      {/* Sticky minimal Navbar */}
      <Navbar onOpenDashboard={handleOpenDashboard} />

      {/* Main Page Layout */}
      <main>
        {/* Hero Section */}
        <Hero onOpenDashboard={handleOpenDashboard} />

        {/* Hero Dashboard Visual */}
        <HeroVisual onOpenDashboard={handleOpenDashboard} />

        {/* Section: The Problem */}
        <ProblemSection />

        {/* Section: From Cost to Value (Dark Section with Glowing Canvas) */}
        <CostToValueSection />

        {/* Section: Enterprise Architecture & GPU Compute Telemetry (Showcasing uploaded images) */}
        <EnterpriseArchitectureSection onOpenDashboard={handleOpenDashboard} />

        {/* Section: AIWise Insights */}
        <InsightsSection onOpenDashboard={handleOpenDashboard} />

        {/* Section: AI Portfolio */}
        <PortfolioSection onOpenDashboard={handleOpenDashboard} />

        {/* Section: Dedicated ROI Calculator */}
        <RoiCalculatorSection onOpenDashboard={handleOpenDashboard} />

        {/* Section: Final CTA */}
        <FinalCtaSection onOpenDashboard={handleOpenDashboard} />
      </main>

      {/* Minimal Footer */}
      <Footer onOpenDashboard={handleOpenDashboard} />

      {/* Full Interactive Enterprise Dashboard View Modal */}
      <DashboardModal isOpen={isDashboardOpen} onClose={handleCloseDashboard} />
    </div>
  );
}
