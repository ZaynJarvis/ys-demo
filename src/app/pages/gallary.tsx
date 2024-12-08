import Image from 'next/image';
// import { config } from '@/app/utils/conf';
import config from '@/app/utils/config.json';

const GalleryPage = () => {
    const images = config.gallery_path

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
                {images.map((images, index) => (
                    <div key={index} className="mb-0 break-inside-avoid">
                        <Image src={images} alt={`Gallery image ${index + 1}`} style={{ width: "100%", display: "block" }} width={720} height={720} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleryPage;