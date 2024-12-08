import Image from "next/image";
import YouTube from "react-youtube";

const ProductCard = ({ product }) => {
  const opts = {
      height: "100%",
      width: "100%",
      playerVars: {
          autoplay: 1,
          mute:1,
          controls:0,
          loop:1,
          disablekb:0,
          iv_load_policy:3,
      },
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full">
      <div className="relative h-64 w-full mb-3">
        {
          product.media_type == 'video' ? <YouTube className="h-full" videoId={product.videoID} opts={opts}  /> : 
          product.media_type == 'image' ? <Image src={product.imageUrl} alt={product.name} fill style={{objectFit:"cover"}} className="rounded" /> :
          <div></div>
        }
      </div>
      <div className="text-white">
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
};
export default ProductCard;