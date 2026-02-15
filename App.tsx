
import React, { useState, useEffect } from 'react';
import { AppView } from './types';
import Navigation from './components/Navigation';
import Dashboard from './views/Dashboard';
import Stats from './views/Stats';
import CalendarView from './views/CalendarView';
import Settings from './views/Settings';
import Onboarding from './views/Onboarding';
import DesignSystem from './views/DesignSystem';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [isOnboarding, setIsOnboarding] = useState<boolean>(true);

  // Persistence check for onboarding
  useEffect(() => {
    const completed = localStorage.getItem('stark_onboarding_complete');
    if (completed === 'true') {
      setIsOnboarding(false);
    }
  }, []);

  const handleCompleteOnboarding = () => {
    localStorage.setItem('stark_onboarding_complete', 'true');
    setIsOnboarding(false);
  };

  const handleResetOnboarding = () => {
    localStorage.removeItem('stark_onboarding_complete');
    setIsOnboarding(true);
    setCurrentView(AppView.DASHBOARD);
  };

  if (isOnboarding) {
    return <Onboarding onComplete={handleCompleteOnboarding} />;
  }

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard />;
      case AppView.STATS:
        return <Stats />;
      case AppView.CALENDAR:
        return <CalendarView />;
      case AppView.SETTINGS:
        return <Settings 
          onResetOnboarding={handleResetOnboarding} 
          onOpenDesignSystem={() => setCurrentView(AppView.DESIGN_SYSTEM)} 
        />;
      case AppView.DESIGN_SYSTEM:
        return <DesignSystem onBack={() => setCurrentView(AppView.SETTINGS)} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f8f8] text-black">
      {/* Editorial Header */}
      <div className="sticky top-0 brutalist-border-b flex justify-between items-center p-6 bg-white z-50 safe-pt">
        <h1 className="text-2xl font-black tracking-tighter uppercase leading-none">Stark</h1>
        <div className="text-[10px] font-bold uppercase mono border border-black px-2 py-0.5 tracking-widest">v1.0.4 Stable</div>
      </div>

      <main className="flex-1 overflow-y-auto pb-32">
        <div className="max-w-4xl mx-auto min-h-screen">
          {renderView()}
        </div>
      </main>

      <Navigation currentView={currentView} setView={setCurrentView} />
    </div>
  );
};

export default App;
