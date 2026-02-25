import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'GeForce RTX 4090', price: 1599, category: 'GPU' },
  { id: 2, name: 'MSI MPG X670E', price: 850, category: 'Motherboard' },
  { id: 3, name: 'Adata DDR5 38400', price: 30, category: 'RAM' },
  { id: 4, name: 'Intel Core i9-14900KS', price: 740, category: 'CPU' },
];

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  // Live search on keystroke
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
    const results = products.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setSearchResults([]);
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchResults([]);
    setSearchTerm('');
    setIsFocused(false);
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className={`flex items-center bg-slate-100 rounded-xl px-3 gap-2 border transition-all duration-200 ${isFocused ? 'border-indigo-400 bg-white shadow-sm ring-2 ring-indigo-100' : 'border-transparent hover:border-slate-300'}`}>
        <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          className="flex-1 bg-transparent text-sm py-2.5 text-slate-700 placeholder-slate-400 focus:outline-none"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
        {searchTerm && (
          <button
            onClick={() => { setSearchTerm(''); setSearchResults([]); }}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isFocused && searchTerm && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50">
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 cursor-pointer group transition-colors"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{product.name}</p>
                      <p className="text-xs text-slate-400">{product.category}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-indigo-600">${product.price.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-5 text-center">
              <p className="text-sm text-slate-500">No products found for "<span className="font-semibold text-slate-700">{searchTerm}</span>"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
