
import React, { useState } from 'react';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string>>({});

  const next = () => {
    setStep(s => s + 1);
  };

  const select = (val: string) => {
    setSelections(prev => ({ ...prev, [step]: val }));
  };

  const steps = [
    // Step 0: Welcome
    <div key="welcome" className="flex flex-col h-full justify-between p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mt-16">
        <span className="text-xs font-bold uppercase mono border-b-2 border-black pb-1">System Initiation</span>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mt-6 uppercase">Stark</h1>
        <p className="text-xl md:text-2xl font-bold uppercase tracking-tight mt-6 max-w-sm">
          Precision movement analytics. <span className="text-[#ff6b00]">Hard work</span> built in.
        </p>
      </div>
      <button 
        onClick={next}
        className="w-full brutalist-border bg-black text-white p-6 font-black uppercase text-xl hover:bg-[#ff6b00] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none"
      >
        Start Protocol
      </button>
    </div>,

    // Step 1: Power of walking
    <div key="intro-1" className="flex flex-col h-full items-center justify-center p-8 text-center animate-in fade-in duration-500">
      <div className="w-16 h-16 bg-[#ff6b00] flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>
      </div>
      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-4">Daily walking is more powerful than most people think.</h2>
      <p className="text-sm font-bold mono uppercase opacity-40">Movement is a biological necessity.</p>
      <div className="mt-20 w-full max-w-sm">
        <button onClick={next} className="w-full brutalist-border bg-black text-white p-5 font-black uppercase text-lg hover:bg-[#ff6b00] transition-all">Continue</button>
      </div>
    </div>,

    // Step 2: Motivation
    <div key="motivation" className="flex flex-col h-full p-8 md:p-12 animate-in fade-in duration-500">
      <header className="mb-10">
        <p className="text-xs font-bold uppercase mono opacity-50 mb-2">01 Motivation Index</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight uppercase">What motivates your daily step goal?</h2>
      </header>
      <div className="grid gap-3 flex-1 overflow-y-auto pr-2">
        {['Feeling healthier', 'Building a daily habit', 'Staying consistent', 'Seeing progress', 'Closing my rings', 'Improving my long-term health'].map(opt => (
          <button 
            key={opt}
            onClick={() => select(opt)}
            className={`w-full text-left brutalist-border p-5 font-bold mono text-xs md:text-sm transition-all flex justify-between items-center ${selections[step] === opt ? 'bg-black text-white border-black' : 'bg-white hover:bg-neutral-50'}`}
          >
            {opt.toUpperCase()}
            {selections[step] === opt && <span className="text-[#ff6b00] font-black">[✓]</span>}
          </button>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <button onClick={next} disabled={!selections[step]} className={`w-full brutalist-border p-6 font-black uppercase text-xl transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${selections[step] ? 'bg-black text-white' : 'opacity-20 pointer-events-none'}`}>Continue</button>
        <button onClick={next} className="text-[10px] font-bold mono uppercase opacity-50 text-center hover:opacity-100 py-2">Skip Step</button>
      </div>
    </div>,

    // Step 3: Activity mapping
    <div key="activity-level" className="flex flex-col h-full p-8 md:p-12 animate-in fade-in duration-500">
      <header className="mb-10">
        <p className="text-xs font-bold uppercase mono opacity-50 mb-2">02 Activity Mapping</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight uppercase">How active is your typical day?</h2>
      </header>
      <div className="grid gap-3 flex-1">
        {['Mostly sitting', 'A mix of sitting and walking', 'On my feet most of the day'].map(opt => (
          <button 
            key={opt}
            onClick={() => select(opt)}
            className={`w-full text-left brutalist-border p-6 font-bold mono text-sm transition-all flex justify-between items-center ${selections[step] === opt ? 'bg-black text-white' : 'bg-white hover:bg-neutral-50'}`}
          >
            {opt.toUpperCase()}
            {selections[step] === opt && <span className="text-[#ff6b00] font-black">[✓]</span>}
          </button>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <button onClick={next} disabled={!selections[step]} className={`w-full brutalist-border p-6 font-black uppercase text-xl transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${selections[step] ? 'bg-black text-white' : 'opacity-20 pointer-events-none'}`}>Continue</button>
      </div>
    </div>,

    // Step 4: Awareness
    <div key="intro-2" className="flex flex-col h-full items-center justify-center p-8 text-center animate-in fade-in duration-500">
      <div className="text-[#ff6b00] mb-8 text-6xl">📊</div>
      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-4 max-w-md">When you see your steps each day, you naturally move more.</h2>
      <p className="text-lg font-bold uppercase tracking-tight text-[#ff6b00]">Small awareness. Big impact.</p>
      <div className="mt-20 w-full max-w-sm">
        <button onClick={next} className="w-full brutalist-border bg-black text-white p-5 font-black uppercase text-lg hover:bg-[#ff6b00] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Understood</button>
      </div>
    </div>,

    // Step 5: Goal Setting
    <div key="goal-select" className="flex flex-col h-full p-8 md:p-12 animate-in fade-in duration-500">
      <header className="mb-10">
        <p className="text-xs font-bold uppercase mono opacity-50 mb-2">03 Objective Setting</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight uppercase">Define your starting point.</h2>
      </header>
      <div className="grid gap-3 flex-1">
        {['3.000', '5.000', '8.000', '10.000'].map(opt => (
          <button 
            key={opt}
            onClick={() => select(opt)}
            className={`w-full text-left brutalist-border p-6 font-black mono text-xl transition-all flex justify-between items-center ${selections[step] === opt ? 'bg-[#ff6b00] text-white border-black' : 'bg-white hover:bg-neutral-50'}`}
          >
            {opt}
            {opt === '8.000' && <span className="text-[10px] font-bold uppercase opacity-60 ml-auto mr-4 text-black">Recommended</span>}
          </button>
        ))}
      </div>
      <div className="mt-12 flex flex-col gap-4">
        <button onClick={next} disabled={!selections[step]} className={`w-full brutalist-border p-6 font-black uppercase text-xl transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${selections[step] ? 'bg-black text-white' : 'opacity-20 pointer-events-none'}`}>Set Target</button>
      </div>
    </div>,

    // Step 6: Forecast (Restored 3-card layout)
    <div key="forecast" className="flex flex-col h-full p-8 md:p-12 animate-in fade-in duration-500">
      <header className="mb-10">
        <p className="text-xs font-bold uppercase mono opacity-50 mb-2">04 Projected Impact</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight uppercase">In 30 days, this adds up:</h2>
      </header>
      <div className="grid grid-cols-1 gap-4 flex-1">
        <div className="brutalist-border p-6 bg-white flex items-center gap-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
           <div className="text-3xl">🚶</div>
           <div>
             <p className="text-4xl font-black mono tracking-tighter">300.000</p>
             <p className="text-[10px] font-bold mono uppercase opacity-40">Total Steps Accumulation</p>
           </div>
        </div>
        <div className="brutalist-border p-6 bg-white flex items-center gap-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
           <div className="text-3xl">🗺️</div>
           <div>
             <p className="text-4xl font-black mono tracking-tighter">229 km</p>
             <p className="text-[10px] font-bold mono uppercase opacity-40">Estimated Distance Vector</p>
           </div>
        </div>
        <div className="brutalist-border p-6 bg-white flex items-center gap-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
           <div className="text-3xl">🔥</div>
           <div>
             <p className="text-4xl font-black mono tracking-tighter">12.000</p>
             <p className="text-[10px] font-bold mono uppercase opacity-40">Estimated Energy Expenditure</p>
           </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-[10px] font-bold mono uppercase text-center mb-8 opacity-40">Compounded daily effort yields significant results.</p>
        <button onClick={next} className="w-full brutalist-border bg-black text-white p-6 font-black uppercase text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Continue</button>
      </div>
    </div>,

    // Step 7: Widget Preview
    <div key="widget-preview" className="flex flex-col h-full p-8 md:p-12 animate-in fade-in duration-500 items-center justify-center text-center">
      <div className="w-56 h-56 brutalist-border rounded-[48px] bg-white flex flex-col items-center justify-center mb-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col items-center justify-center">
           <svg className="w-40 h-40 -rotate-90">
             <circle cx="80" cy="80" r="72" stroke="#f0f0f0" strokeWidth="12" fill="none" />
             <circle cx="80" cy="80" r="72" stroke="#ff6b00" strokeWidth="12" fill="none" strokeDasharray="452" strokeDashoffset="120" strokeLinecap="round" />
           </svg>
           <div className="absolute inset-0 flex flex-col items-center justify-center">
             <span className="text-xl mb-1">🚶</span>
             <span className="text-3xl font-black mono tracking-tight">9.280</span>
             <span className="text-[10px] font-bold uppercase opacity-50 mono">Steps Today</span>
           </div>
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-4">Add the Stark widget to your home screen.</h2>
      <p className="text-sm font-bold uppercase tracking-tight opacity-50 max-w-xs mx-auto mb-12">One glance is all it takes to monitor your daily kinetic output.</p>
      <div className="w-full max-w-sm">
        <button onClick={next} className="w-full brutalist-border bg-black text-white p-5 font-black uppercase text-lg hover:bg-[#ff6b00] transition-all">Continue</button>
      </div>
    </div>,

    // Step 8: Final
    <div key="ready" className="flex flex-col h-full p-8 md:p-12 animate-in fade-in duration-500 items-center justify-center text-center">
      <div className="w-16 h-16 bg-[#ff6b00] flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
      </div>
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-4">Progress starts today.</h2>
      <p className="text-lg font-bold uppercase tracking-tight opacity-50 mb-20 max-w-xs mx-auto">We'll help you improve one day at a time. System ready.</p>
      <div className="w-full max-w-sm">
        <button onClick={onComplete} className="w-full brutalist-border bg-[#ff6b00] text-white p-8 font-black uppercase text-2xl hover:bg-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none">
          Initialize Tracker
        </button>
      </div>
    </div>
  ];

  return (
    <div className="fixed inset-0 bg-[#f8f8f8] text-black z-[200] overflow-y-auto">
      {/* Progression Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-neutral-200 z-[210]">
        <div 
          className="h-full bg-[#ff6b00] transition-all duration-500 ease-out" 
          style={{ width: `${((step + 1) / steps.length) * 100}%` }}
        />
      </div>
      
      <div className="max-w-2xl mx-auto h-full flex flex-col min-h-screen">
        {steps[step]}
      </div>
    </div>
  );
};

export default Onboarding;
