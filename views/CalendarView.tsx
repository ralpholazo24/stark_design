
import React from 'react';

const CalendarView: React.FC = () => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  // February 2025 starts on a Saturday.
  const dates = Array.from({ length: 28 }, (_, i) => i + 1);
  const paddingBefore = 5; // Mon-Fri are empty

  return (
    <div className="p-6 md:p-12 space-y-12 animate-in fade-in duration-500">
      <header className="border-b-4 border-black pb-4 flex justify-between items-end">
        <div>
          <p className="text-xs font-bold uppercase mono mb-2 opacity-50 tracking-widest">Temporal Archive</p>
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase leading-none">Feb 25</h2>
        </div>
        <div className="flex gap-2 mb-2">
          <button className="brutalist-border px-4 py-2 font-black mono hover:bg-black hover:text-white transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">←</button>
          <button className="brutalist-border px-4 py-2 font-black mono hover:bg-black hover:text-white transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">→</button>
        </div>
      </header>

      {/* Summary Metrics Card */}
      <section className="brutalist-border bg-white p-8 space-y-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center border-b-2 border-black pb-4">
          <h3 className="text-xs font-black uppercase mono tracking-widest">Monthly Totals</h3>
          <span className="text-[10px] font-bold mono opacity-40">Period: Feb 01 — Feb 11</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase mono opacity-40 tracking-widest">Accumulated Steps</p>
            <p className="text-4xl font-black mono tracking-tighter text-[#ff6b00]">208,911</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase mono opacity-40 tracking-widest">Net Distance</p>
            <p className="text-4xl font-black mono tracking-tighter">159.2 km</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase mono opacity-40 tracking-widest">Active Time</p>
            <p className="text-4xl font-black mono tracking-tighter">44h 38m</p>
          </div>
        </div>
      </section>

      {/* Grid Calendar */}
      <section className="space-y-6">
        <div className="brutalist-border bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="grid grid-cols-7 border-b-2 border-black">
            {days.map(d => (
              <div key={d} className="p-4 border-r-2 last:border-r-0 border-black text-[11px] font-black mono text-center bg-neutral-50 uppercase tracking-widest">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {Array.from({ length: paddingBefore }).map((_, i) => (
              <div key={`p-${i}`} className="aspect-square bg-neutral-100/40 brutalist-border-r brutalist-border-b" />
            ))}
            {dates.map(date => {
              const isActive = date <= 11;
              const isToday = date === 11;
              const isSelection = date === 11;
              
              return (
                <div 
                  key={date} 
                  className={`aspect-square p-2 md:p-4 brutalist-border-r brutalist-border-b flex flex-col justify-between transition-all group relative ${
                    isActive ? 'hover:bg-neutral-50' : 'bg-neutral-50/50 cursor-not-allowed opacity-30'
                  }`}
                >
                  <span className={`text-xs font-black mono w-fit h-fit px-1.5 py-0.5 ${
                    isToday ? 'bg-black text-white' : isActive ? 'text-black' : 'opacity-20'
                  }`}>
                    {date.toString().padStart(2, '0')}
                  </span>
                  
                  {isActive && (
                    <div className={`w-full h-1.5 md:h-2 ${isToday ? 'bg-[#ff6b00]' : 'bg-black'}`} />
                  )}

                  {isToday && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-[#ff6b00] rounded-full animate-pulse" />
                  )}
                </div>
              );
            })}
            {/* Fill cells to make 5 rows (35 cells) */}
            {Array.from({ length: 35 - (paddingBefore + dates.length) }).map((_, i) => (
               <div key={`f-${i}`} className="aspect-square bg-neutral-100/40 brutalist-border-r brutalist-border-b" />
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-4">
          <div className="flex gap-8 items-center">
             <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
                <span className="text-[11px] font-bold uppercase mono tracking-widest">Target Met</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#ff6b00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
                <span className="text-[11px] font-bold uppercase mono tracking-widest">Peak Performance</span>
             </div>
          </div>
          <div className="text-[10px] font-bold mono uppercase opacity-40 tracking-widest">
            Stark System Logs v1.0.4
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendarView;
