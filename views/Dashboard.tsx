
import React from 'react';

const Dashboard: React.FC = () => {
  const currentSteps = 13511;
  const goal = 15000;
  const progress = (currentSteps / goal) * 100;

  const weekdays = [
    { d: 'M', active: true },
    { d: 'T', active: true },
    { d: 'W', active: true },
    { d: 'T', active: true },
    { d: 'F', active: true },
    { d: 'S', active: true, today: true },
    { d: 'S', active: false },
  ];

  return (
    <div className="p-6 md:p-12 space-y-12 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-black pb-4">
        <div>
          <p className="text-xs font-bold uppercase mono mb-2 opacity-50 tracking-widest">Performance Summary</p>
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase leading-none">Status</h2>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <p className="text-xs font-bold uppercase mono tracking-widest">Date</p>
          <p className="text-2xl font-black mono text-[#ff6b00]">FEB 11 2025</p>
        </div>
      </header>

      {/* Hero Step Counter */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold uppercase mono mb-1 tracking-widest">Today's Progress</span>
          <h3 className="text-[7rem] md:text-[10rem] font-black leading-none tracking-tighter mono">
            {currentSteps.toLocaleString()}
          </h3>
          <div className="mt-8 space-y-2">
            <div className="w-full h-4 bg-neutral-200 brutalist-border relative overflow-hidden">
              <div 
                className="h-full bg-[#ff6b00] transition-all duration-1000" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-bold mono uppercase tracking-widest">
              <span>Baseline: 0</span>
              <span>Daily Goal: {goal.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 grid grid-cols-1 gap-4">
          <div className="brutalist-border bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-[10px] font-bold uppercase mono opacity-40 mb-1 tracking-widest">Net Change</p>
            <p className="text-3xl font-black mono text-[#ff6b00]">+3,262</p>
            <p className="text-[10px] font-bold uppercase mono mt-1">above typical baseline</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="brutalist-border bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-[10px] font-bold uppercase mono opacity-40 mb-1 tracking-widest">Distance</p>
              <p className="text-xl font-black mono">10.3 km</p>
            </div>
            <div className="brutalist-border bg-black text-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-[10px] font-bold uppercase mono opacity-40 mb-1 text-neutral-500 tracking-widest">Burned</p>
              <p className="text-xl font-black mono text-[#ff6b00]">540 kcal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Streak Log */}
      <section className="brutalist-border bg-white p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
             <div className="w-14 h-14 bg-[#ff6b00] flex items-center justify-center text-white text-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">🔥</div>
             <div>
               <p className="text-xs font-bold uppercase mono opacity-40 tracking-widest">Current Consistency</p>
               <h4 className="text-3xl font-black uppercase tracking-tight">28 Day Streak</h4>
             </div>
          </div>
          <div className="flex gap-2">
            {weekdays.map((wd, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold mono">{wd.d}</span>
                <div className={`w-10 h-10 brutalist-border flex items-center justify-center transition-colors ${
                  wd.active ? 'bg-black text-white' : 'bg-transparent'
                } ${wd.today ? 'border-[#ff6b00] border-4' : ''}`}>
                  {wd.active && <span className={`text-sm font-black ${wd.today ? 'text-[#ff6b00]' : ''}`}>✓</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insight Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutalist-border p-8 bg-white">
          <h4 className="text-xs font-black uppercase mono mb-6 tracking-widest">Active Hours</h4>
          <div className="flex items-center gap-3 text-2xl font-black mb-6 text-[#ff6b00]">
            <span>↑</span>
            <span>Trending 29% higher</span>
          </div>
          <div className="h-20 flex items-end gap-1.5">
            {[40, 45, 30, 60, 80, 75, 90, 85, 100].map((h, i) => (
              <div key={i} className={`flex-1 ${i === 8 ? 'bg-[#ff6b00]' : 'bg-black'} transition-all hover:opacity-80`} style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
        <div className="bg-neutral-900 text-white brutalist-border p-8 flex flex-col justify-between">
          <p className="text-lg font-bold leading-snug uppercase tracking-tight">
            High-output phase detected. Stark system maintains verified momentum.
          </p>
          <div className="flex justify-between items-end mt-6">
            <p className="text-[10px] font-bold mono uppercase text-[#ff6b00] tracking-widest">Status: Optimizing</p>
            <span className="text-4xl">⚡</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
