
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LineChart, Line, CartesianGrid } from 'recharts';

const Stats: React.FC = () => {
  const weeklyData = [
    { d: 'MO', s: 10500 },
    { d: 'TU', s: 11200 },
    { d: 'WE', s: 14000 },
    { d: 'TH', s: 10800 },
    { d: 'FR', s: 11000 },
    { d: 'SA', s: 14500 },
  ];

  const dailyProgress = [
    { h: 0, s: 0, avg: 0 },
    { h: 4, s: 100, avg: 200 },
    { h: 8, s: 2000, avg: 2500 },
    { h: 12, s: 5000, avg: 4500 },
    { h: 16, s: 9500, avg: 8000 },
    { h: 20, s: 12500, avg: 10000 },
    { h: 24, s: 13511, avg: 10438 },
  ];

  return (
    <div className="p-6 md:p-12 space-y-12 animate-in fade-in duration-500">
      <header className="border-b-4 border-black pb-4">
        <p className="text-xs font-bold uppercase mono mb-2 opacity-50">Efficiency_Analytics</p>
        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase leading-none">Stats</h2>
      </header>

      {/* Progress Line Graph */}
      <section className="brutalist-border bg-white p-8">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <div>
            <h4 className="text-xs font-black uppercase mono mb-2">Temporal_Movement_Log</h4>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black">→</span>
              <span className="text-2xl font-black">+29% VS. AVERAGE</span>
            </div>
          </div>
          <div className="flex gap-4 text-[10px] font-bold uppercase mono">
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 bg-black"></div>
              <span>TODAY</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 bg-neutral-300 border border-black"></div>
              <span>AVERAGE</span>
            </div>
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dailyProgress}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              <Line type="stepAfter" dataKey="s" stroke="#000" strokeWidth={4} dot={false} />
              <Line type="monotone" dataKey="avg" stroke="#ccc" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              <XAxis dataKey="h" axisLine={false} tickLine={false} tick={{fontSize: 10, fontFamily: 'JetBrains Mono'}} />
              <YAxis hide domain={[0, 15000]} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[10px] font-bold mono mt-6 uppercase opacity-40">
          Timestamp analysis: By 19:27, you've usually walked 10,438 steps. Current status is over-performing.
        </p>
      </section>

      {/* This Week Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 brutalist-border bg-white p-6 space-y-8">
          <div>
            <h4 className="text-xs font-black uppercase mono mb-4">Weekly_Summary</h4>
            <p className="text-[10px] font-bold uppercase mono opacity-40">Feb 9 - Feb 14</p>
          </div>
          
          <div className="space-y-4">
            <div className="border-b border-black pb-2">
              <p className="text-[10px] font-bold mono opacity-40">Steps_Total</p>
              <p className="text-2xl font-black">67,290</p>
            </div>
            <div className="border-b border-black pb-2">
              <p className="text-[10px] font-bold mono opacity-40">Distance_Total</p>
              <p className="text-2xl font-black">51.3 KM</p>
            </div>
            <div className="pb-2">
              <p className="text-[10px] font-bold mono opacity-40">Time_Active</p>
              <p className="text-2xl font-black">14H 23M</p>
            </div>
          </div>

          <div className="bg-black text-white p-4">
            <p className="text-xs font-bold mono uppercase">Comparison_Week_Prev</p>
            <p className="text-2xl font-black">-4% TOTAL</p>
          </div>
        </div>

        {/* Weekly Bar Chart */}
        <div className="md:col-span-8 brutalist-border bg-white p-8">
          <h4 className="text-xs font-black uppercase mono mb-8">Daily_Distribution_Log</h4>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <Bar dataKey="s" radius={0}>
                  {weeklyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#000" stroke="#000" strokeWidth={1} />
                  ))}
                </Bar>
                <XAxis 
                  dataKey="d" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#000', fontSize: 12, fontWeight: 700, fontFamily: 'JetBrains Mono' }} 
                />
                <YAxis hide />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
