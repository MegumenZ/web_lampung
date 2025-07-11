// src/components/PageWithSidebar.js
import React from 'react';
import Sidebar from './Sidebar';
import Sidebarstat from './Sidebarstat'; // Updated import

const PageWithSidebar = ({ children }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 relative">
      <Sidebar />
      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20 py-12">
        {/* Konten Tengah */}
        <div className="w-full md:w-3/4 space-y-8">
          {children}
        </div>

        {/* Sidebar Stat */}
        <div className="w-full md:w-1/4 sticky top-28 h-fit">
          <Sidebarstat /> {/* Changed from SidebarKanan to SidebarStat */}
        </div>
      </div>
    </div>
  );
};

export default PageWithSidebar;