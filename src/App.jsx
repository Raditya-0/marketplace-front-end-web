import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ProductPage from './pages/ProductPage';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center text-xs py-2 font-medium tracking-wide">
        🎉 Free shipping on orders over $100 &nbsp;|&nbsp; Use code <span className="font-bold bg-white/20 px-1.5 py-0.5 rounded">SAVE10</span> for 10% off
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold gradient-text">TechMart</span>
            </Link>

            {/* Search bar (center) */}
            <div className="flex-1 max-w-xl">
              <SearchBar />
            </div>

            {/* Nav links */}
            <div className="flex items-center gap-1 shrink-0">
              <Link
                to="/login"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-lg hover:bg-indigo-50 transition-colors duration-150"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login
              </Link>
              <Link to="/signup" className="btn-primary ml-1 text-white text-sm font-semibold px-4 py-2 rounded-lg">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm font-semibold gradient-text">TechMart</span>
            </div>
            <p className="text-xs text-slate-400">© 2025 TechMart. All rights reserved.</p>
            <div className="flex gap-4 text-xs text-slate-400">
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
