import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 p-0 rounded-xl shadow-xl w-full transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700 hover:border-primary-500 group">
      <div className="relative h-64 w-full rounded-t-xl overflow-hidden">
        {product.media_type === 'image' ? (
          <Image src={product.imageUrl} alt={product.name} fill style={{objectFit:"cover"}} className="rounded-t-xl group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <iframe
            className="w-full h-full rounded-t-xl"
            src={`https://www.youtube.com/embed/${product.videoID}?rel=0&modestbranding=1`}
            title={product.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <Link href={`/projects/${product.id}`} passHref legacyBehavior>
      <div className="text-white px-5 py-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold mb-1 group-hover:text-primary-400 transition-colors">{product.name}</h3>
          <p className="text-sm text-gray-300 line-clamp-3">{product.description}</p>
        <div className="text-xs text-gray-500 mt-2">{product.date}</div>
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;