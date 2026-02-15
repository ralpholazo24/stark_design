
import React from 'react';
import { AppView } from '../types';

interface NavigationProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems = [
    { label: 'HOME', view: AppView.DASHBOARD },
    { label: 'STATS', view: AppView.STATS },
    { label: 'LOGS', view: AppView.CALENDAR },
    { label: 'CONF', view: AppView.SETTINGS }
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white brutalist-border-t flex z-[100] safe-pb">
      {navItems.map((item) => {
        const isActive = currentView === item.view;
        return (
          <button
            key={item.view}
            onClick={() => setView(item.view)}
            className={`flex-1 flex flex-col items-center justify-center py-5 px-1 transition-all ${
              isActive ? 'bg-black text-white' : 'text-black active:bg-neutral-100'
            } border-r last:border-r-0 border-black`}
          >
            <span className="text-[13px] font-black mono leading-none uppercase tracking-tighter">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;
