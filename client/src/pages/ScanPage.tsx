import React, { useState } from 'react';

export default function ScanPage() {
  const [target, setTarget] = useState('');

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Initiating scan on:', target);
    setTarget('');
  };

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-gray-100">Vulnerability Assessment</h2>
        <p className="text-sm text-gray-400 mt-1">Initiate and monitor active target scans.</p>
      </header>

      <div className="glass-panel p-6 rounded-lg max-w-2xl">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">New Scan Target</h3>
        <form onSubmit={handleScan} className="flex space-x-4">
          <input 
            type="text" 
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="Enter IP, CIDR, or Domain (e.g., 192.168.1.1 or example.com)" 
            className="flex-1 bg-gray-900/50 border border-gray-700 text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-neonCyan focus:ring-1 focus:ring-neonCyan transition-all font-mono text-sm"
            required
          />
          <button 
            type="submit"
            className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2 rounded-md transition-colors font-semibold shadow-[0_0_10px_rgba(16,185,129,0.3)]"
          >
            Launch Scan
          </button>
        </form>
      </div>

      <div className="glass-panel p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Scan History</h3>
        <p className="text-sm text-gray-500 italic">No historical scans found for this session.</p>
      </div>
    </div>
  );
}