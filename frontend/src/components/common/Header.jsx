import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout, isAuthenticated } from '../../utils/auth';

const Header = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">₹</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Personal Finance</span>
          </div>
          
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {isAuthenticated() && (
              <>
                <Link 
                  to="/dashboard" 
                  className="text-gray-600 hover:text-red-500 font-medium transition-colors duration-200"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/transactions" 
                  className="text-gray-600 hover:text-red-500 font-medium transition-colors duration-200"
                >
                  Transactions
                </Link>
                <Link 
                  to="/receipts" 
                  className="text-gray-600 hover:text-red-500 font-medium transition-colors duration-200"
                >
                  Receipt Upload
                </Link>
                <Link 
                  to="/analysis" 
                  className="text-gray-600 hover:text-red-500 font-medium transition-colors duration-200"
                >
                  Analytics
                </Link>
              </>
            )}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-label="Open main menu"
              onClick={() => setMobileOpen(prev => !prev)}
            >
              {/* Icon: hamburger / close */}
              <svg className={`h-6 w-6 ${mobileOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
              <svg className={`h-6 w-6 ${mobileOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {isAuthenticated() && (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
              >
                Sign Out
              </button>
            )}
            {!isAuthenticated() && (
              <div className="flex items-center space-x-3">
                <Link 
                  to="/login" 
                  className="text-gray-600 hover:text-red-500 font-medium transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link 
                  to="/register" 
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div className={`md:hidden ${mobileOpen ? 'block' : 'hidden'} border-t border-gray-100 bg-white shadow-lg`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="px-4 py-3 space-y-1">
          {isAuthenticated() && (
            <>
              <Link to="/dashboard" className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200">Dashboard</Link>
              <Link to="/transactions" className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200">Transactions</Link>
              <Link to="/receipts" className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200">Receipt Upload</Link>
              <Link to="/analysis" className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200">Analytics</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
