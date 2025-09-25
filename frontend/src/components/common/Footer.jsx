import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-sm text-gray-300">Made with</span>
            <span className="text-red-400 text-xl animate-pulse">❤️</span>
            <span className="text-sm text-gray-300">by</span>
            <span className="font-bold text-white text-lg bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Rahul Kumar</span>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Personal Finance Assistant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;