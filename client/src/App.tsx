import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Dashboard from './pages/Dashboard';
import ScanPage from './pages/ScanPage';
import VulnPage from './pages/VulnPage';
import RadarPage from './pages/RadarPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen w-full">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Topbar />
          <main className="flex-1 overflow-y-auto p-6 relative">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/scan" element={<ScanPage />} />
              <Route path="/vulnerabilities" element={<VulnPage />} />
              <Route path="/radar" element={<RadarPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}