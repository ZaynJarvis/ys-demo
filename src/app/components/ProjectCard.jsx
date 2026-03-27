import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
      <Link href={`/projects/${product.id}`}>
        <div className="cursor-pointer">
          <div className="relative h-64 w-full overflow-hidden">
            {product.media_type === 'image' ? (
              <Image 
                src={product.imageUrl} 
                alt={product.name} 
                fill 
                style={{objectFit:"cover"}} 
                className="group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${product.videoID}?rel=0&modestbranding=1`}
                title={product.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
              {product.description}
            </p>
            {product.date && (
              <div className="text-xs text-gray-400 mt-3 font-medium">
                {product.date}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;