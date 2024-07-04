import React from 'react';
import { Header } from '@react-monorepo/packages/packages';
import { Sidebar } from '@react-monorepo/packages/packages';
import { useAuth } from '../auth/AuthContext';

const HomeLayout = ({ isSidebarOpen, toggleSidebar }) => {
  const { setIsLoggedIn } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        setIsLoggedIn={setIsLoggedIn}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 mt-16 p-6 overflow-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Main Content</h1>
          <p className="mt-4 text-gray-700">Your main content goes here.</p>
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
