export default function WatchlistPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-gray-100">Active Watchlist</h2>
        <p className="text-sm text-gray-400 mt-1">Monitor specific assets across threat feeds and dark web sources.</p>
      </header>

      <div className="glass-panel p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-200">Monitored Assets</h3>
          <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-1.5 rounded-md text-sm transition-colors shadow-[0_0_10px_rgba(16,185,129,0.3)]">
            + Add Asset
          </button>
        </div>

        <table className="w-full text-left text-sm text-gray-400">
          <thead className="text-xs uppercase bg-gray-900/50 text-gray-500">
            <tr>
              <th className="px-4 py-3 rounded-tl-md">Indicator</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 rounded-tr-md">Alerts</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800/50 hover:bg-gray-800/20">
              <td className="px-4 py-3 text-gray-200 font-mono">internal-api.company.com</td>
              <td className="px-4 py-3">DOMAIN</td>
              <td className="px-4 py-3 text-brand-400">ACTIVE</td>
              <td className="px-4 py-3 text-vuln-high font-bold">2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}