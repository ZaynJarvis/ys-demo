import Image from "next/image";
import demoImg from "@/app/images/demo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              CRAFTING YOUR
              <br />
              <span className="text-gray-900">DREAM SPACE</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-600 font-light">
              Understated Elegance, Exceptional Living
            </p>
            <div className="pt-8">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                ONLINE QUOTE
              </button>
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
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;