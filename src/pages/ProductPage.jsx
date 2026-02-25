import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productImage_D from '../assets/images_D.jpg';
import productImage_E from '../assets/images_E.jpg';
import productImage_F from '../assets/images_F.jpg';
import productImage_G from '../assets/images_G.jpg';

const products = [
  { id: 1, name: 'GeForce RTX 4090', price: 1599, originalPrice: 1799, category: 'GPU', description: 'The GeForce RTX 4090 is NVIDIA\'s most powerful consumer GPU. Featuring 16,384 CUDA cores and 24GB of GDDR6X VRAM, it delivers unmatched performance for gaming, 3D rendering, and AI workloads.', rating: 4.9, reviews: 2341, image: productImage_D },
  { id: 2, name: 'MSI MPG X670E', price: 850, originalPrice: 920, category: 'Motherboard', description: 'The MSI MPG X670E Carbon WiFi is a premium AM5 motherboard supporting AMD Ryzen 7000 series CPUs. Features PCIe 5.0, DDR5, and advanced thermal design for enthusiast builders.', rating: 4.7, reviews: 872, image: productImage_E },
  { id: 3, name: 'Adata DDR5 38400', price: 30, originalPrice: null, category: 'RAM', description: 'High-performance DDR5 memory running at 4800MHz (PC5-38400). Ultra-low latency and superior bandwidth ideal for gaming and productivity workloads. Backward compatible with XMP 3.0.', rating: 4.5, reviews: 414, image: productImage_F },
  { id: 4, name: 'Intel Core i9-14900KS', price: 740, originalPrice: 799, category: 'CPU', description: 'Intel\'s flagship 14th-gen desktop processor with 24 cores (8P+16E) and a boost clock up to 6.2GHz. Exceptional multi-threaded performance for gaming, streaming, and content creation.', rating: 4.8, reviews: 1105, image: productImage_G },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rating) ? 'text-amber-400' : 'text-slate-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-slate-800">Product not found</h2>
        <Link to="/" className="btn-primary text-white text-sm font-semibold px-5 py-2 rounded-xl">
          Back to Marketplace
        </Link>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
        <Link to="/" className="hover:text-indigo-600 transition-colors font-medium">Home</Link>
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{product.category}</span>
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-slate-600 font-medium truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image panel */}
          <div className="bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 flex items-center justify-center p-10" style={{ minHeight: '380px' }}>
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-72 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Detail panel */}
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-full w-fit mb-3">
              {product.category}
            </span>
            <h1 className="text-2xl font-extrabold text-slate-900 mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} />
              <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
              <span className="text-xs text-slate-400">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-extrabold text-indigo-600">${product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="text-base text-slate-400 line-through">${product.originalPrice.toLocaleString()}</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">-{discount}%</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed mb-6">{product.description}</p>

            {/* Stock status */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-semibold text-emerald-600">In Stock</span>
              <span className="text-xs text-slate-400">· Ships within 2-3 days</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn-primary flex-1 text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              <Link
                to="/"
                className="flex-1 border border-slate-300 text-slate-700 font-semibold py-3 rounded-xl text-sm hover:bg-slate-50 transition-colors text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
