export default function RadarPage() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <header>
        <h2 className="text-2xl font-bold text-gray-100">Live Threat Radar</h2>
        <p className="text-sm text-gray-400 mt-1">Real-time geographical and network IoC monitoring.</p>
      </header>

      <div className="flex-1 glass-panel p-6 rounded-lg flex items-center justify-center relative overflow-hidden">
        {/* CSS Radar Animation Simulation */}
        <div className="absolute w-96 h-96 border border-brand-500/30 rounded-full flex items-center justify-center">
          <div className="absolute w-64 h-64 border border-brand-500/20 rounded-full"></div>
          <div className="absolute w-32 h-32 border border-brand-500/10 rounded-full"></div>
          
          {/* Radar Sweep */}
          <div className="absolute top-0 right-1/2 bottom-1/2 left-0 bg-gradient-to-tr from-brand-500/0 to-brand-500/40 origin-bottom-right animate-[spin_4s_linear_infinite]"></div>
          
          {/* Blips */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-vuln-critical rounded-full shadow-[0_0_10px_#ff003c] animate-ping"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-vuln-high rounded-full shadow-[0_0_10px_#ff8a00] animate-pulse"></div>
        </div>
        
        <div className="z-10 absolute bottom-6 left-6 bg-gray-900/80 p-4 rounded border border-gray-700 text-xs font-mono space-y-2">
          <div className="text-brand-400">&gt; Monitoring incoming traffic...</div>
          <div className="text-vuln-critical">&gt; Port scan detected: 192.168.1.100</div>
          <div className="text-gray-400">&gt; Awaiting payload signatures...</div>
        </div>
      </div>
    </div>
  );
}