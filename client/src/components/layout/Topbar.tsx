export default function Topbar() {
  return (
    <header className="h-16 glass-panel border-b border-gray-800 flex items-center justify-between px-6 z-10">
      <div className="flex items-center w-1/3">
        <input 
          type="text" 
          placeholder="Search CVEs, IP addresses, or domains..." 
          className="w-full bg-gray-900/50 border border-gray-700 text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-neonCyan/50 focus:ring-1 focus:ring-neonCyan/50 transition-all text-sm"
        />
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-vuln-low shadow-[0_0_5px_#00f0ff] animate-pulse"></div>
          <span className="text-xs text-gray-400">System Secure</span>
        </div>
        <div className="h-8 w-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
          <span className="text-sm font-bold text-brand-400">M</span>
        </div>
      </div>
    </header>
  );
}