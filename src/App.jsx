import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout.jsx';
import Dashboard from '@/pages/Dashboard.jsx';
import Analytics from '@/pages/Analytics.jsx';
import Audience from '@/pages/Audience.jsx';
import Schedule from '@/pages/Schedule.jsx';
import Settings from '@/pages/Settings.jsx';
import Landing from '@/pages/Landing.jsx';

function App() {
  const basename = import.meta.env.DEV ? '/' : '/social-dashboard';
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/audience" element={<Audience />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
