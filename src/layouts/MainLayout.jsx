import { useState } from 'react';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex pt-16">
        <Sidebar isOpen={isSidebarOpen} />
        <main className={`flex-1 py-6 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isSidebarOpen ? 'md:ml-64' : 'md:ml-0'
        }`}>
          <Outlet />
        </main>
      </div>
      <Footer /> {/* Add this line */}
    </div>
  );
};

export default MainLayout;
