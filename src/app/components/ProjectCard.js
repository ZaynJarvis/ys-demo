import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="relative h-64 w-full mb-3">
        <Image src={product.imageUrl} alt={product.name} layout="fill" objectFit="cover" className="rounded" />
      </div>
      <div className="text-white">
        {/* <p className="text-sm font-semibold mb-1">{product.date}</p> */}
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;