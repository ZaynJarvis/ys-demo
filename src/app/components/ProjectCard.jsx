import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 p-0 rounded-xl shadow-xl w-full transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700 hover:border-primary-500 cursor-pointer group">
      <div className="relative h-64 w-full rounded-t-xl overflow-hidden">
        {product.media_type === 'video' && (
          <div className="absolute top-2 right-2 z-10 bg-black/70 text-xs px-2 py-1 rounded text-primary-400 font-semibold">Video</div>
        )}
        {product.media_type === 'image' && (
          <div className="absolute top-2 right-2 z-10 bg-black/70 text-xs px-2 py-1 rounded text-green-400 font-semibold">Image</div>
        )}
        {product.media_type === 'image' ? (
          <Image src={product.imageUrl} alt={product.name} fill style={{objectFit:"cover"}} className="rounded-t-xl group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="flex items-center justify-center h-full w-full bg-black/60 text-white text-2xl font-bold">Video Preview</div>
        )}
      </div>
      <div className="text-white px-5 py-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold mb-1 group-hover:text-primary-400 transition-colors">{product.name}</h3>
        <p className="text-sm text-gray-300 line-clamp-3">{product.description}</p>
        <div className="text-xs text-gray-500 mt-2">{product.date}</div>
      </div>
    </div>
  );
};

export default ProductCard;