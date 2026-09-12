export default function Dashboard() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-gray-100">Threat Operations Center</h2>
        <p className="text-sm text-gray-400 mt-1">Real-time overview of active vulnerabilities and threat feeds.</p>
      </header>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-lg border-l-4 border-l-vuln-critical flex flex-col justify-center">
          <span className="text-gray-400 text-sm">Critical Findings</span>
          <span className="text-3xl font-bold text-gray-100 mt-2">14</span>
        </div>
        
        <div className="glass-panel p-5 rounded-lg border-l-4 border-l-vuln-high flex flex-col justify-center">
          <span className="text-gray-400 text-sm">Active Exploits Detected</span>
          <span className="text-3xl font-bold text-gray-100 mt-2">3</span>
        </div>

        <div className="glass-panel p-5 rounded-lg border-l-4 border-l-vuln-medium flex flex-col justify-center">
          <span className="text-gray-400 text-sm">Scans in Progress</span>
          <span className="text-3xl font-bold text-gray-100 mt-2">2</span>
        </div>

        <div className="glass-panel p-5 rounded-lg border-l-4 border-l-vuln-low flex flex-col justify-center">
          <span className="text-gray-400 text-sm">Total Assets Monitored</span>
          <span className="text-3xl font-bold text-gray-100 mt-2">128</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Scans Table */}
        <div className="lg:col-span-2 glass-panel p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-200 mb-4 border-b border-gray-800 pb-2">Recent VAPT Activity</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="text-xs uppercase bg-gray-900/50 text-gray-500">
                <tr>
                  <th className="px-4 py-3 rounded-tl-md">Target</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Risk Score</th>
                  <th className="px-4 py-3 rounded-tr-md">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                  <td className="px-4 py-3 text-gray-200 font-mono">192.168.1.45</td>
                  <td className="px-4 py-3"><span className="text-vuln-low">COMPLETED</span></td>
                  <td className="px-4 py-3"><span className="text-vuln-high font-bold">8.4</span></td>
                  <td className="px-4 py-3">Just now</td>
                </tr>
                <tr className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                  <td className="px-4 py-3 text-gray-200 font-mono">auth.production.internal</td>
                  <td className="px-4 py-3"><span className="text-vuln-medium">RUNNING</span></td>
                  <td className="px-4 py-3 text-gray-500">--</td>
                  <td className="px-4 py-3">2 mins ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Threat Feed Stub */}
        <div className="glass-panel p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-200 mb-4 border-b border-gray-800 pb-2">Latest IoCs</h3>
          <div className="space-y-4">
            <div className="p-3 bg-gray-900/40 rounded border border-gray-800/50">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-vuln-critical">CVE-2024-XXXX</span>
                <span className="text-xs text-gray-500">10m ago</span>
              </div>
              <p className="text-sm text-gray-300">Unauthenticated RCE identified in common web framework.</p>
            </div>
            <div className="p-3 bg-gray-900/40 rounded border border-gray-800/50">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-vuln-high">Dark Web Mention</span>
                <span className="text-xs text-gray-500">1h ago</span>
              </div>
              <p className="text-sm text-gray-300">Internal domain credentials leaked on forum.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}