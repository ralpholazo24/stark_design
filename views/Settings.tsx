
import React from 'react';

interface SettingsProps {
  onResetOnboarding?: () => void;
  onOpenDesignSystem?: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onResetOnboarding, onOpenDesignSystem }) => {
  return (
    <div className="p-6 md:p-12 space-y-12 animate-in fade-in duration-500">
      <header className="border-b-4 border-black pb-4">
        <p className="text-xs font-bold uppercase mono mb-2 opacity-50 tracking-widest">System Parameters</p>
        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase leading-none">Settings</h2>
      </header>

      <div className="max-w-xl space-y-10">
        {/* Profile Section */}
        <section className="space-y-4">
          <h3 className="text-xs font-black uppercase mono opacity-40 tracking-widest">General Preferences</h3>
          <div className="brutalist-border bg-white divide-y-2 divide-black">
            <button className="w-full p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors group">
              <span className="font-bold uppercase tracking-tight text-sm">Step Goal</span>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold mono text-[#ff6b00]">10,000 STEPS</span>
                <span className="font-black mono text-xs group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
            <button className="w-full p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors group">
              <span className="font-bold uppercase tracking-tight text-sm">Notifications</span>
              <span className="font-black mono text-xs group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button 
              onClick={onOpenDesignSystem}
              className="w-full p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors group"
            >
              <span className="font-bold uppercase tracking-tight text-sm">Design System Documentation</span>
              <span className="font-black mono text-xs group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </section>

        {/* Premium Section */}
        <section className="space-y-4">
          <h3 className="text-xs font-black uppercase mono opacity-40 tracking-widest">Premium Status</h3>
          <div className="brutalist-border bg-white p-6 flex justify-between items-center group cursor-pointer hover:bg-[#ff6b00]/5 border-[#ff6b00]">
            <span className="font-bold uppercase tracking-tight text-sm text-[#ff6b00]">Subscription Active</span>
            <div className="w-6 h-6 bg-[#ff6b00] flex items-center justify-center text-white text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">✓</div>
          </div>
        </section>

        {/* Info Section */}
        <section className="space-y-4">
          <h3 className="text-xs font-black uppercase mono opacity-40 tracking-widest">Information</h3>
          <div className="brutalist-border bg-white divide-y-2 divide-black">
            <button className="w-full p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors group text-left">
              <span className="font-bold uppercase tracking-tight text-sm">Privacy Policy</span>
              <span className="font-black mono text-xs group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="w-full p-6 flex justify-between items-center hover:bg-neutral-50 transition-colors group text-left">
              <span className="font-bold uppercase tracking-tight text-sm">Terms of Use</span>
              <span className="font-black mono text-xs group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </section>

        {/* Reset */}
        <section className="space-y-6 pt-10 border-t-2 border-dashed border-black/20">
          <button 
            onClick={onResetOnboarding}
            className="w-full p-5 border-2 border-red-500 text-red-500 font-black uppercase tracking-widest text-xs hover:bg-red-500 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
          >
            Reset System Setup
          </button>
        </section>

        <footer className="pt-12 pb-12 opacity-30 text-[9px] font-bold mono uppercase leading-loose tracking-widest">
          Build ID: STARK-001-ALPHA // Sync: Nominal // 2025 Stark Intelligence
        </footer>
      </div>
    </div>
  );
};

export default Settings;
