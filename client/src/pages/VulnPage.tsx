export default function VulnPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-gray-100">CVE Intelligence</h2>
        <p className="text-sm text-gray-400 mt-1">Global vulnerability database and threat feeds.</p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <div className="glass-panel p-6 rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-200">Latest Disclosures</h3>
            <button className="text-xs text-neonCyan hover:text-white transition-colors border border-neonCyan/30 px-3 py-1 rounded">
              Sync NVD Feed
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Example CVE Row */}
            <div className="p-4 bg-gray-900/40 rounded-md border border-gray-800 hover:border-gray-600 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-md font-bold text-vuln-critical mb-1">CVE-2026-1045</h4>
                  <p className="text-sm text-gray-300">Remote Code Execution vulnerability in standard auth library allowing unauthenticated bypass.</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-vuln-critical/20 text-vuln-critical px-2 py-1 rounded text-xs font-bold border border-vuln-critical/30">
                    CVSS 9.8
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}