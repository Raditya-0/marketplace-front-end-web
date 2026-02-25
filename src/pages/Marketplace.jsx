import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import productImage_A from '../assets/images_A.jpg';
import productImage_B from '../assets/images_B.jpg';
import productImage_C from '../assets/images_C.jpg';
import productImage_D from '../assets/images_D.jpg';
import productImage_E from '../assets/images_E.jpg';
import productImage_F from '../assets/images_F.jpg';
import productImage_G from '../assets/images_G.jpg';

const featuredProducts = [
  { id: 1, name: 'PC All-in-One', subtitle: 'All-in-one powerhouse for everyday use', tag: 'Best Seller', image: productImage_A },
  { id: 2, name: 'Paket Full Set PC', subtitle: 'Complete desktop setup — plug and play', tag: 'Bundle Deal', image: productImage_B },
  { id: 3, name: 'Laptop HP', subtitle: 'Thin, light, and blazing fast', tag: 'Limited Stock', image: productImage_C },
];

const allProducts = [
  { id: 1, name: 'GeForce RTX 4090', price: 1599, originalPrice: 1799, category: 'GPU', image: productImage_D },
  { id: 2, name: 'MSI MPG X670E', price: 850, originalPrice: 920, category: 'Motherboard', image: productImage_E },
  { id: 3, name: 'Adata DDR5 38400', price: 30, originalPrice: null, category: 'RAM', image: productImage_F },
  { id: 4, name: 'Intel Core i9-14900KS', price: 740, originalPrice: 799, category: 'CPU', image: productImage_G },
];

const categories = ['All', 'GPU', 'CPU', 'Motherboard', 'RAM'];

function Marketplace() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((prev) => {
        const next = (currentIndex + 1) % featuredProducts.length;
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div>
      {/* ─── Hero Slider ─────────────────────────────────────── */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-xl mb-10" style={{ height: '360px' }}>
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            {/* Background image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col justify-center px-10 sm:px-14">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/20 text-white backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 w-fit mb-3 badge-discount">
                🏷️ {product.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md mb-2">
                {product.name}
              </h2>
              <p className="text-sm sm:text-base text-white/80 mb-5 max-w-sm">
                {product.subtitle}
              </p>
              <Link
                to={`/product/${product.id}`}
                className="btn-primary inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-2.5 rounded-xl w-fit shadow-lg"
              >
                Shop Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        ))}

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredProducts.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`dot-indicator rounded-full ${i === currentIndex ? 'w-6 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>

        {/* Arrow controls */}
        <button
          onClick={() => goToSlide((currentIndex - 1 + featuredProducts.length) % featuredProducts.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all"
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((currentIndex + 1) % featuredProducts.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all"
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ─── Stats Bar ───────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { icon: '📦', label: 'Products', value: '500+' },
          { icon: '🚚', label: 'Fast Delivery', value: '2-5 days' },
          { icon: '⭐', label: 'Avg. Rating', value: '4.8 / 5' },
          { icon: '🔒', label: 'Secure Payment', value: '100% Safe' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-slate-200 px-4 py-3 flex items-center gap-3 shadow-sm">
            <span className="text-2xl">{stat.icon}</span>
            <div>
              <p className="text-xs text-slate-500">{stat.label}</p>
              <p className="text-sm font-bold text-slate-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Product Grid ─────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800">All Products</h2>
        {/* Category filter */}
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-150 ${selectedCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-300 hover:border-indigo-400 hover:text-indigo-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="block">
            <div className="product-card bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              {/* Image */}
              <div className="product-img-wrapper w-full" style={{ height: '200px', background: '#f1f5f9' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full">
                  {product.category}
                </span>
                <h3 className="text-sm font-bold text-slate-800 mt-2 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-base font-extrabold text-indigo-600">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <button className="btn-primary mt-3 w-full text-white text-xs font-semibold py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
