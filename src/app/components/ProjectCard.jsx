'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden group relative transform hover:-translate-y-3 ring-1 ring-gray-200 hover:ring-amber-500/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full overflow-hidden">
        {product.media_type === 'image' ? (
          <Image 
            src={product.imageUrl} 
            alt={product.name} 
            fill 
            style={{objectFit:"cover"}} 
            className="group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <iframe
            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
            src={`https://www.youtube.com/embed/${product.videoID}?rel=0&modestbranding=1`}
            title={product.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        
        {/* Dynamic overlay with gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
          isHovered 
            ? 'from-black/70 via-black/20 to-transparent' 
            : 'from-black/30 via-transparent to-transparent'
        }`}></div>

        {/* Date badge - always visible on mobile, hover on desktop */}
        {product.date && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-amber-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-y-2 md:group-hover:translate-y-0">
              {new Date(product.date).toLocaleDateString('en-SG', { 
                year: 'numeric', 
                month: 'short' 
              })}
            </span>
          </div>
        )}

        {/* Enhanced View Details button */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <Link href={`/projects/${product.id}`}>
            <button 
              className={`w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 transform ${
                isHovered 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-4 opacity-0 scale-95 md:translate-y-8'
              } active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-500/50`}
              aria-label={`View details for ${product.name}`}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Details
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-amber-500/20 transition-all duration-300 group-hover:border-t-amber-500/40"></div>
      </div>
      
      {/* Enhanced content section */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
            {product.description}
          </p>
        </div>
        
        {/* Interactive footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500 font-medium">
              {product.media_type === 'video' ? 'Video Project' : 'Photo Gallery'}
            </span>
          </div>
          
          {/* Quick action icons */}
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <button 
              className="p-1.5 text-gray-400 hover:text-amber-500 transition-colors duration-200 hover:bg-amber-50 rounded-full"
              aria-label="Quick preview"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button 
              className="p-1.5 text-gray-400 hover:text-amber-500 transition-colors duration-200 hover:bg-amber-50 rounded-full"
              aria-label="Share project"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile-specific touch indicator */}
      <div className="absolute bottom-2 right-2 md:hidden">
        <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;