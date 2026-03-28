'use client'

import ProductCard from "@/app/components/ProjectCard";
import config from '@/app/utils/config.json';

const products = config.product_info;

const ProductsPage = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PROJECTS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transforming commercial spaces across Singapore with bold design and precision construction
          </p>
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