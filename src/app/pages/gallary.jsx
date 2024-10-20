import Image from 'next/image';
import product1 from "@/app/images/products_1.jpg";
import product2 from "@/app/images/products_2.jpg";
import product3 from "@/app/images/products_3.jpg";
import product4 from "@/app/images/products_4.jpg";
import product5 from "@/app/images/products_5.jpg";
import product6 from "@/app/images/products_6.jpg";
import product7 from "@/app/images/products_7.jpg";
import product8 from "@/app/images/products_8.jpg";
import product9 from "@/app/images/products_9.jpg";
import product10 from "@/app/images/products_10.jpg";
import product11 from "@/app/images/products_11.jpg";
import product12 from "@/app/images/products_12.jpg";
import product13 from "@/app/images/products_13.jpg";
import product14 from "@/app/images/products_14.jpg";
import product15 from "@/app/images/products_15.jpg";
import product16 from "@/app/images/products_16.jpg";

export default function GalleryPage() {
    const images = [
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product7,
        product8,
        product9,
        product10,
        product11,
        product12,
        product13,
        product14,
        product15,
        product16,
    ];

    return (
        <div className="w-full bg-gray-900 min-h-screen flex p-0 text-white flex-col md:flex-row relative">
            <div className="w-1/3 text-left text-lg m-8">
                <h1 className="text-4xl font-bold mb-4">Gallery</h1>
                <p>Email: contact@x.x</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Business Rd, Business City, BC 12345</p>
            </div>
            <div className="relative md:w-2/3" style={{ columnCount: 3, columnGap: "0px" }}>
                <div className="absolute inset-0 md:inset-y-0 md:right-auto w-full md:w-48 h-48 md:h-full bg-gradient-to-b md:bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
                {images.map((src, index) => (
                    <div key={index} className="mb-0 break-inside-avoid">
                        <Image src={src} alt={`Gallery image ${index + 1}`} style={{ width: "100%", display: "block" }} />
                    </div>
                ))}
            </div>
            {/* Gradient Overlay */}
        </div>
    );
}
