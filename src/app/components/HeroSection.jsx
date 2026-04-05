import config from "@/app/utils/config.json";
import HeroCarousel from "./HeroCarousel";

const carouselImages = config.product_info
  .filter((p) => p.media_type === "image" && p.imageUrl)
  .map((p) => p.imageUrl);

const HeroSection = () => {
  return (
    <section id="home" className="bg-white pt-24 md:pt-28 pb-12">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center">
          {/* Carousel Card */}
          <div className="w-full lg:w-3/5 lg:ml-auto">
            <HeroCarousel images={carouselImages} />
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center z-10">
            <div className="space-y-6 max-w-lg backdrop-blur-sm p-8 rounded-2xl lg:bg-transparent lg:backdrop-blur-none lg:p-0 bg-[rgb(215_215_215/0.85)]">
              <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                YOUR VISION,
                <br />
                <span className="text-amber-600">OUR CRAFT</span>
              </h1>
              <p className="font-sans text-xl md:text-2xl text-amber-600 font-light tracking-wide uppercase">
                Commercial Space Design & Build
              </p>
              <div className="pt-4">
                <a
                  href="https://wa.me/6589729228?text=Hi%2C%20I'm%20interested%20in%20getting%20a%20quote%20for%20construction%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
                >
                  GET QUOTE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
