import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WorkshopPortal from './pages/WorkshopPortal';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import AdminAuth from './pages/AdminAuth';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // If on main page or verify route, do NOT show the RoboRace competition header/footer
  const isWorkshopRoute = pathname === '/' || pathname.startsWith('/verify') || pathname.startsWith('/certificate');
  const isAdminRoute = pathname.startsWith('/admin');
  const showRoboraceNav = !isWorkshopRoute && !isAdminRoute;

  return (
    <div className="flex flex-col min-h-screen selection:bg-purple-100 selection:text-purple-900">
      {showRoboraceNav && <Header />}
      <main className="flex-grow">
        <Routes>
          {/* Primary Route: TurboBot Robo Workshop Certificate Verification Portal */}
          <Route path="/" element={<WorkshopPortal />} />
          <Route path="/verify" element={<WorkshopPortal />} />
          <Route path="/verify/:certId" element={<WorkshopPortal />} />
          <Route path="/certificate" element={<WorkshopPortal />} />

          {/* Secondary RoboRace Event Routes */}
          <Route path="/roborace" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminAuth />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      {showRoboraceNav && <Footer />}
    </div>
  );
};

export default App;
