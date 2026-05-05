'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, Zap, Shield, Info, ChevronRight } from 'lucide-react';

const BRAND = { teal: '#00c3a5', dark: '#001529', card: '#001f33' };

const PROVIDERS = [
  { id: 'fermah', name: 'Fermah', rate: 0.000012, speed: 'Ultra-Fast', reliability: '99.9%' },
  { id: 'cloud', name: 'Standard Cloud', rate: 0.000035, speed: 'Variable', reliability: '98.5%' },
  { id: 'local', name: 'On-Premise', rate: 0.000050, speed: 'Dependent', reliability: '99.0%' }
];

export default function EstimatorPage() {
  const [gates, setGates] = useState<number>(200000);

  const results = useMemo(() => 
    PROVIDERS.map(p => ({ ...p, total: (gates * p.rate).toFixed(2) })), 
  [gates]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg shadow-2xl rounded-3xl overflow-hidden border border-white/5" style={{ backgroundColor: BRAND.card }}>
        
        {/* Header with Brand Logo Aesthetic */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-gradient-to-br from-white/5 to-transparent">
          <div>
            <h2 className="text-white font-bold text-xl tracking-tight">Proof Estimator</h2>
            <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Fermah Network v1.0</p>
          </div>
          <div className="p-3 rounded-xl" style={{ backgroundColor: BRAND.teal }}>
             <div className="w-5 h-5 border-t-4 border-x-4 border-[#001529]"></div>
          </div>
        </div>

        <div className="p-8 space-y-10">
          {/* Input Area */}
          <div className="space-y-4">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-500 uppercase">Circuit Complexity</span>
              <span style={{ color: BRAND.teal }}>{gates.toLocaleString()} Gates</span>
            </div>
            <input 
              type="range" min="10000" max="1000000" step="10000" value={gates}
              onChange={(e) => setGates(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
              style={{ accentColor: BRAND.teal, backgroundColor: '#00334d' }}
            />
          </div>

          {/* Comparison Cards */}
          <div className="space-y-3">
            {results.map((res) => (
              <div key={res.id} 
                className={`p-4 rounded-2xl border transition-all ${
                  res.id === 'fermah' ? 'border-[#00c3a5]/40 bg-[#00c3a5]/5' : 'border-white/5 bg-white/2'
                }`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${res.id === 'fermah' ? 'bg-[#00c3a5] text-black' : 'bg-gray-800 text-gray-400'}`}>
                      {res.id === 'fermah' ? <Zap size={16} /> : <Shield size={16} />}
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">{res.name}</div>
                      <div className="text-[10px] text-gray-500">{res.speed} • {res.reliability}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-mono font-bold ${res.id === 'fermah' ? 'text-[#00c3a5]' : 'text-white'}`}>
                      ${res.total}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95"
            style={{ backgroundColor: BRAND.teal, color: BRAND.dark }}>
            Launch Proving Instance <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      <p className="mt-6 text-gray-600 text-[10px] uppercase tracking-widest font-medium">
        Powered by Fermah Decentralized Infrastructure
      </p>
    </main>
  );
}
