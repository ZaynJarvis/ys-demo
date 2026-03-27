import Image from "next/image";
import demoImg from "@/app/images/demo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 pt-24 md:pt-12 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 pt-8 md:pt-0">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-50 leading-tight">
              CRAFTING YOUR
              <br />
              <span className="text-amber-500">DREAM SPACE</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-400 font-light">
              Bold Design, Exceptional Construction
            </p>
            <div className="pt-8">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-amber-500/25">
                GET QUOTE
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
              className="rounded-2xl shadow-2xl ring-1 ring-slate-700"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500/10 to-cyan-500/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;