import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bgDeep font-mono p-4">
      <div className="glass-panel p-8 rounded-lg w-full max-w-md border-t-2 border-t-neonCyan">
        <h1 className="text-3xl font-bold text-center neon-text mb-8 tracking-widest">UMBRA</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Operator ID / Email</label>
            <input 
              type="email" 
              className="w-full bg-gray-900/50 border border-gray-700 text-gray-300 px-4 py-2 rounded focus:outline-none focus:border-neonCyan transition-colors"
              required 
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Passphrase</label>
            <input 
              type="password" 
              className="w-full bg-gray-900/50 border border-gray-700 text-gray-300 px-4 py-2 rounded focus:outline-none focus:border-neonCyan transition-colors"
              required 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-transparent border border-neonCyan text-neonCyan hover:bg-neonCyan/10 py-2 rounded uppercase tracking-wider font-bold transition-all shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          >
            Initialize Session
          </button>
        </form>
      </div>
    </div>
  );
}