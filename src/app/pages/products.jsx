'use client'

import ProductCard from "@/app/components/ProjectCard";
import config from '@/app/utils/config.json';

const products = config.product_info;

const ProductsPage = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">PROJECTS</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="group">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;