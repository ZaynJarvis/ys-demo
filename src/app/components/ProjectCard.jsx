'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden group hover:-translate-y-3 ring-1 ring-gray-200 hover:ring-amber-500/40 transform-gpu"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
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
              className="w-full h-full transition-transform duration-700 group-hover:scale-105"
              src={`https://www.youtube.com/embed/${product.videoID}?rel=0&modestbranding=1`}
              title={product.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/70 transition-all duration-500"></div>
          
          {/* Hover overlay with enhanced effects */}
          <div className={`absolute inset-0 bg-amber-500/20 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          
          {/* View Details Button - More prominent */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <Link href={`/projects/${product.id}`} className="relative z-10">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Details
              </button>
            </Link>
          </div>
          
          {/* Project type badge */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
            <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
              {product.media_type === 'image' ? 'Photo Gallery' : 'Video Tour'}
            </span>
          </div>
        </div>
        
        <div className="p-6 relative">
          {/* Content area with enhanced spacing for mobile */}
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
              {product.name}
            </h3>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
              {product.description}
            </p>
            
            {product.date && (
              <div className="flex items-center justify-between pt-2">
                <div className="text-xs md:text-sm text-gray-500 font-medium flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 group-hover:animate-pulse"></div>
                  {product.date}
                </div>
                
                {/* Mobile View Details Link */}
                <Link href={`/projects/${product.id}`} className="md:hidden">
                  <span className="text-amber-500 hover:text-amber-600 text-sm font-semibold flex items-center gap-1 transition-colors duration-300">
                    Details
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            )}
          </div>
          
          {/* Subtle border animation */}
          <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;