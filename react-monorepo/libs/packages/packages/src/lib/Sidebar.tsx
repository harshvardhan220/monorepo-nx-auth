// Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar, setIsLoggedIn }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-200 ease-in-out bg-white shadow-md w-64 z-20 md:relative md:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4 bg-gray-200 md:hidden">
        <div className="text-xl font-bold text-gray-800">MyLogo</div>
        <button
          className="text-gray-800 focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <nav className="flex flex-col space-y-4 p-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Dashboard
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Profile
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Settings
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
