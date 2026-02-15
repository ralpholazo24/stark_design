
import React from 'react';

interface DesignSystemProps {
  onBack: () => void;
}

const DesignSystem: React.FC<DesignSystemProps> = ({ onBack }) => {
  return (
    <div className="p-6 md:p-12 space-y-32 animate-in fade-in duration-700 bg-[#f8f8f8] pb-40">
      {/* Agency Header - iOS Edition */}
      <header className="border-b-[8px] border-black pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-black mono bg-black text-white px-3 py-1 uppercase tracking-widest">iOS_NATIVE_CORE</span>
            <span className="text-[10px] font-black mono uppercase tracking-widest opacity-40">Build 2.0.0-STABLE</span>
          </div>
          <h2 className="text-8xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8]">STARK<br/>OS_X</h2>
          <p className="mt-10 text-xl font-bold uppercase tracking-tight max-w-lg leading-snug">
            High-kinetic iOS engineering framework. Optimized for <span className="text-[#ff6b00]">SwiftUI 5.0</span> and low-latency kinetic feedback.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <button 
            onClick={onBack}
            className="brutalist-border px-10 py-5 font-black mono bg-black text-white hover:bg-[#ff6b00] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none uppercase text-sm"
          >
            Terminal_Exit
          </button>
        </div>
      </header>

      {/* 01 SwiftUI Implementation Patterns */}
      <section className="space-y-16">
        <div className="flex items-baseline gap-4 border-b-2 border-black pb-4">
          <span className="text-4xl font-black mono tracking-tighter text-[#ff6b00]">01</span>
          <h3 className="text-xs font-black uppercase mono tracking-[0.3em]">SwiftUI / View_Patterns</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase mono opacity-40 tracking-widest">View_Modifier: StarkBrutalist()</p>
            <div className="brutalist-border bg-white p-8 aspect-video flex items-center justify-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <pre className="mono text-[10px] leading-relaxed">
                {`.modifier(StarkBrutalist())
.background(Color.starkWhite)
.border(Color.black, width: 2)
.shadow(color: .black, radius: 0, x: 8, y: 8)`}
              </pre>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase mono opacity-40 tracking-widest">Haptic_Mapping: Engine_V2</p>
            <div className="space-y-3">
              {[
                { event: 'Primary_Tap', haptic: 'Impact(.heavy)' },
                { event: 'Goal_Met', haptic: 'Notification(.success)' },
                { event: 'System_Log', haptic: 'Impact(.soft)' },
                { event: 'Limit_Hit', haptic: 'Notification(.error)' }
              ].map(h => (
                <div key={h.event} className="flex justify-between items-center p-4 border border-black/10 bg-white">
                  <span className="font-bold uppercase text-xs">{h.event}</span>
                  <span className="mono text-[10px] bg-[#ff6b00] px-2 py-0.5 font-black">{h.haptic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 Typography & Native Sizing */}
      <section className="space-y-16">
        <div className="flex items-baseline gap-4 border-b-2 border-black pb-4">
          <span className="text-4xl font-black mono tracking-tighter text-[#ff6b00]">02</span>
          <h3 className="text-xs font-black uppercase mono tracking-[0.3em]">Logistics / Native_Sizing</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-8">
             <div className="space-y-12">
                <div className="border-l-4 border-[#ff6b00] pl-8">
                  <p className="text-[10px] font-black mono uppercase opacity-40 mb-2">iOS_LargeTitle_Style</p>
                  <h4 className="text-[8rem] font-black tracking-tighter leading-none uppercase">STARK</h4>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black mono opacity-40">Headline_Semibold</p>
                    <p className="text-2xl font-bold uppercase">Dynamic_Type_Ready</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black mono opacity-40">Body_Regular</p>
                    <p className="text-lg opacity-60 uppercase font-medium">Kinetic movement analytics at 60fps.</p>
                  </div>
                </div>
             </div>
          </div>
          <div className="md:col-span-4 brutalist-border p-8 bg-black text-white flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(255,107,0,1)]">
            <h4 className="text-xs font-black uppercase mono tracking-widest text-[#ff6b00]">Metric_Standard</h4>
            <p className="text-7xl font-black mono tracking-tighter">8PT</p>
            <p className="text-[10px] font-bold uppercase leading-relaxed opacity-40">
              Absolute grid alignment for iOS point-density scaling. No fractional points allowed.
            </p>
          </div>
        </div>
      </section>

      {/* 03 Kinetic Motion Physics */}
      <section className="space-y-16">
        <div className="flex items-baseline gap-4 border-b-2 border-black pb-4">
          <span className="text-4xl font-black mono tracking-tighter text-[#ff6b00]">03</span>
          <h3 className="text-xs font-black uppercase mono tracking-[0.3em]">Motion / Spring_Physics</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'STARK_BOUNCE', specs: 'Response: 0.3, Damping: 0.6', usage: 'Card Entry' },
            { name: 'RIGID_SNAP', specs: 'Response: 0.1, Damping: 1.0', usage: 'Tab Switch' },
            { name: 'FLUID_LOG', specs: 'Response: 0.4, Damping: 0.8', usage: 'Chart Animation' }
          ].map(m => (
            <div key={m.name} className="brutalist-border p-6 bg-white space-y-4 hover:border-[#ff6b00] transition-colors group cursor-crosshair">
              <div className="h-2 w-12 bg-[#ff6b00] group-hover:w-full transition-all duration-500"></div>
              <p className="text-lg font-black uppercase tracking-tighter">{m.name}</p>
              <p className="mono text-[10px] opacity-40">{m.specs}</p>
              <p className="text-[10px] font-black uppercase tracking-widest">{m.usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 iOS UI Components (SwiftUI Mode) */}
      <section className="space-y-16">
        <div className="flex items-baseline gap-4 border-b-2 border-black pb-4">
          <span className="text-4xl font-black mono tracking-tighter text-[#ff6b00]">04</span>
          <h3 className="text-xs font-black uppercase mono tracking-[0.3em]">Engineering / UI_Modules</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Custom Tab Bar */}
          <div className="space-y-8">
            <p className="text-[10px] font-black mono uppercase tracking-widest opacity-40">Custom_Navigation: StarkTabBar</p>
            <div className="w-full brutalist-border bg-white h-24 flex divide-x-2 divide-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
               <div className="flex-1 bg-black flex items-center justify-center">
                  <span className="text-white font-black mono text-xs uppercase">DASH</span>
               </div>
               <div className="flex-1 flex items-center justify-center">
                  <span className="font-black mono text-xs uppercase opacity-20">STAT</span>
               </div>
               <div className="flex-1 flex items-center justify-center">
                  <span className="font-black mono text-xs uppercase opacity-20">LOGS</span>
               </div>
            </div>
          </div>

          {/* Metric Module */}
          <div className="space-y-8">
            <p className="text-[10px] font-black mono uppercase tracking-widest opacity-40">Metric_Module: StarkMetricView</p>
            <div className="brutalist-border bg-white p-8 shadow-[12px_12px_0px_0px_rgba(255,107,0,1)] border-[#ff6b00]">
              <div className="flex justify-between items-end">
                 <div>
                    <h5 className="text-[10px] font-black mono uppercase mb-2">Movement_Vector</h5>
                    <p className="text-6xl font-black mono tracking-tighter">14,291</p>
                 </div>
                 <div className="text-right">
                    <p className="text-2xl font-black text-[#ff6b00]">↑ 12%</p>
                    <p className="text-[9px] font-bold mono uppercase opacity-40">VS_AVG</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Specs */}
      <footer className="pt-24 border-t-4 border-black space-y-10">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
               <p className="text-[10px] font-black mono uppercase opacity-40 mb-2">A11Y_COMPLIANCE</p>
               <p className="text-xs font-bold uppercase">WCAG 2.1 AA / Dynamic Type v3</p>
            </div>
            <div>
               <p className="text-[10px] font-black mono uppercase opacity-40 mb-2">RENDER_ENGINE</p>
               <p className="text-xs font-bold uppercase">Metal / Core Animation</p>
            </div>
            <div>
               <p className="text-[10px] font-black mono uppercase opacity-40 mb-2">PLATFORM</p>
               <p className="text-xs font-bold uppercase">iOS 17.0+ / iPadOS 17.0+</p>
            </div>
            <div>
               <p className="text-[10px] font-black mono uppercase opacity-40 mb-2">SYNC_STATUS</p>
               <p className="text-xs font-bold uppercase text-[#ff6b00]">PROD_READY_v2.0</p>
            </div>
         </div>
         <p className="text-[9px] font-bold mono uppercase opacity-20 tracking-widest leading-loose">
           STARK_INT_DESIGN_GROUP // CONFIDENTIAL SPECIFICATION // ALL RIGHTS RESERVED 2025 // ENCRYPTED_TRANSMISSION
         </p>
      </footer>
    </div>
  );
};

export default DesignSystem;
