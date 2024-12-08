import Image from 'next/image';
// import { config } from '@/app/utils/conf';
import config from '@/app/utils/config.json';

const GalleryPage = () => {
    const images = config.gallery_path

    return (
        <div className="w-full bg-gray-900 min-h-screen flex p-0 text-white flex-col md:flex-row relative">
            <div className="md:w-1/3 text-left text-lg m-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
                <div className="contact-container">
                    <p><strong>Email:</strong> sales@cubecon.sg</p>
                    <p><strong>Phone:</strong> +65 8088 1055</p>
                    <p className='flex'><strong>Address:&nbsp;</strong>
                    <span>
                        52 Telok Blangah Road,<br/>
                        #02-11,<br/>
                        Singapore 098829</span>
                    </p>
                </div>
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