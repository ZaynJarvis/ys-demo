import Image from "next/image";
import demoImg from "@/app/images/demo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-24 md:pt-12 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 pt-8 md:pt-0">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              CRAFTING YOUR
              <br />
              <span className="text-amber-600">DREAM SPACE</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-600 font-light">
              Bold Design, Exceptional Construction
            </p>
            <div className="pt-8">
              <a 
                href="https://wa.me/6580881055?text=Hi%2C%20I'm%20interested%20in%20getting%20a%20quote%20for%20construction%20services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
              >
                GET QUOTE
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative h-96 lg:h-[600px] w-full">
            <Image
              src={demoImg}
              alt="Modern Interior Design"
              fill
              style={{objectFit:"cover"}}
              quality={100}
              className="rounded-2xl shadow-2xl ring-1 ring-gray-200"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500/10 to-cyan-500/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;