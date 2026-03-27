'use client'

import ProductCard from "@/app/components/ProjectCard";
import config from '@/app/utils/config.json';

const products = config.product_info;

const ProductsPage = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PROJECTS</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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