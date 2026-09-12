import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'SOC Dashboard', path: '/' },
    { name: 'VAPT Scans', path: '/scan' },
    { name: 'CVE Intelligence', path: '/vulnerabilities' },
    { name: 'Threat Radar', path: '/radar' },
    { name: 'Watchlist', path: '/watchlist' },
  ];

  return (
    <aside className="w-64 glass-panel border-r border-gray-800 flex flex-col h-full">
      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <h1 className="text-xl font-bold neon-text tracking-widest">UMBRA</h1>
      </div>
      
      <nav className="flex-1 py-6 px-3 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-3 rounded-md transition-all duration-200 ${
                isActive 
                  ? 'bg-brand-500/10 text-neonCyan border border-neonCyan/30 shadow-[0_0_10px_rgba(0,240,255,0.1)]' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800 text-xs text-gray-500 text-center">
        UMBRA Core v1.0.0
      </div>
    </aside>
  );
}