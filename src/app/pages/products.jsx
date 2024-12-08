'use client'

import { useState, useRef, useEffect } from 'react';
import ProductCard from "@/app/components/ProjectCard";
import config from '@/app/utils/config.json';

const products = config.product_info;

const ProductsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const node = scrollContainer.current;
      const scrollX = node.scrollLeft + node.offsetWidth / 2; // Adjust for half width to center
      const itemWidth = node.firstChild.offsetWidth; // Assuming all children have the same width
      const currentIndex = Math.floor(scrollX / itemWidth);
      setActiveIndex(currentIndex);
    };

    const node = scrollContainer.current;
    node.addEventListener('scroll', handleScroll);

    return () => node.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProduct = (index) => {
    setActiveIndex(index);
    const node = scrollContainer.current;
    const child = node.children[index];
    const scrollX = child.offsetLeft - (node.offsetWidth - child.offsetWidth) / 2; // Center the card
    node.scrollTo({ left: scrollX, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-gray-900 min-h-screen flex flex-col items-center justify-center p-8 text-center text-white">
      <h1 className="text-4xl font-bold mb-12">Our Projects</h1>
      {/* <div ref={scrollContainer} className="flex overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-hide space-x-4" style={{ width: '100%', scrollPadding: '0 50%' }}> */}
      <div ref={scrollContainer} className="flex overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto w-full">
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 snap-center w-full" > {/* 8rem is adjusted based on your padding and spacing */}
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mt-4 md:hidden lg:hidden">
        {products.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-2 rounded-full ${idx === activeIndex ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => scrollToProduct(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;