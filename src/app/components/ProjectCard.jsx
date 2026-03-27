import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-slate-700 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 overflow-hidden group hover:-translate-y-2 ring-1 ring-slate-600 hover:ring-amber-500/30">
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
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent group-hover:from-slate-900/80 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-sm font-medium bg-amber-500 text-slate-900 px-3 py-1 rounded-full">
                View Project
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-bold text-slate-50 mb-2 group-hover:text-amber-400 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">
              {product.description}
            </p>
            {product.date && (
              <div className="text-xs text-slate-400 mt-3 font-medium flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
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